import { useEffect, useState } from "react";
import { CACHE_EXPIRES_IN, CHROME_STORAGE_KEY } from "@constants";
import { IUser } from "@interfaces/IUser";

interface ICache {
  timestamp: number;
  user: IUser;
}

const useCache = () => {
  const [cachedUsers, setCachedUsers] = useState<{ [key: string]: ICache }>({});

  useEffect(() => {
    chrome.storage.local.get(CHROME_STORAGE_KEY, (cachedStorage) => {
      setCachedUsers(JSON.parse(cachedStorage[CHROME_STORAGE_KEY]));
    });
  }, []);

  const getFromCache = (nickname: string) => {
    if (cachedUsers[nickname]) {
      if (validateCachedUser(cachedUsers[nickname])) {
        return cachedUsers[nickname].user;
      } else {
        removeFromCache(nickname);
      }
    }
    return null;
  };

  const validateCachedUser = (user: ICache) => {
    const currentTimestamp = Date.now();

    return currentTimestamp <= user.timestamp;
  };

  const removeFromCache = (nickname: string) => {
    setCachedUsers((prevCached) => {
      const newCachedStorage = { ...prevCached };
      delete newCachedStorage[nickname];
      console.log({ [CHROME_STORAGE_KEY]: JSON.stringify(newCachedStorage) });
      chrome.storage.local.set({ [CHROME_STORAGE_KEY]: JSON.stringify(newCachedStorage) });
      return newCachedStorage;
    });
  };

  const addToCache = (nickname: string, user: IUser) => {
    setCachedUsers((prevCached) => {
      const newCachedStorage = { ...prevCached, [nickname]: { user, timestamp: Date.now() + CACHE_EXPIRES_IN } };
      chrome.storage.local.set({ [CHROME_STORAGE_KEY]: JSON.stringify(newCachedStorage) });
      return newCachedStorage;
    });
  };

  return { getFromCache, addToCache };
};

export default useCache;
