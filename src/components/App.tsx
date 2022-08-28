import { useEffect, useState } from "react";
import { locRegExp } from "../constants";
import useCache from "../hooks/useCache";
import useFetch from "../hooks/useFetch";
import useLocationSwap from "../hooks/useLocationSwap";
import { IUser } from "../interfaces/IUser";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  const location = useLocationSwap();
  const { getRepos } = useFetch();
  const [isActive, setActive] = useState(false);
  const { getFromCache, addToCache } = useCache();
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  useEffect(() => {
    const currentLocation = location.match(locRegExp);
    if (currentLocation && document.querySelector(".js-profile-editable-replace")) {
      if (!isActive) {
        toggleExtension(true);
      }
      addUser(currentLocation[1]);
    } else {
      toggleExtension(false);
    }
  }, [location]);

  useEffect(() => {
    return () => {
      toggleExtension(false);
    };
  }, []);

  const addUser = async (nickname: string) => {
    const cachedUser = getFromCache(nickname);
    if (cachedUser) {
      return setCurrentUser(cachedUser);
    }
    const userReps = await getRepos(nickname);
    addToCache(nickname, { reps: userReps });
    setCurrentUser({ reps: userReps });
  };

  const toggleExtension = (status: boolean) => {
    chrome.runtime.sendMessage({ type: status ? "active" : "inactive" });
    setActive(status);
  };

  if (!isActive || !currentUser) return null;
  return <Sidebar user={currentUser} />;
};

export default App;
