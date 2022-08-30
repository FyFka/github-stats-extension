import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";

interface ICache {
  timestamp: number;
  user: IUser;
}

const useCache = () => {
  const [cachedUsers, setCachedUsers] = useState<{
    [key: string]: ICache;
  }>({});

  useEffect(() => {
    chrome.storage.local.get(["gse-cached"], (cachedStorage) => {
      setCachedUsers(JSON.parse(cachedStorage["gse-cached"]));
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
      chrome.storage.local.set({ "gse-cached": JSON.stringify(newCachedStorage) });
      return newCachedStorage;
    });
  };

  const addToCache = (nickname: string, user: IUser) => {
    setCachedUsers((prevCached) => {
      const newCachedStorage = { ...prevCached, [nickname]: { user, timestamp: Date.now() + 60 * 60 * 1000 } };
      chrome.storage.local.set({ "gse-cached": JSON.stringify(newCachedStorage) });
      return newCachedStorage;
    });
  };

  return { getFromCache, addToCache };
};

export default useCache;
