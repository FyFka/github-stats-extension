import { useEffect, useState } from "react";
import { locRegExp } from "../constants";
import useLocationSwap from "../hooks/useLocationSwap";

const App = () => {
  const location = useLocationSwap();
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (locRegExp.test(location) && document.querySelector("#js-pjax-container")) {
      chrome.runtime.sendMessage({ type: "active" });
      setActive(true);
    } else {
      chrome.runtime.sendMessage({ type: "inactive" });
      setActive(false);
    }

    return () => {
      chrome.runtime.sendMessage({ type: "inactive" });
    };
  }, [location]);

  return <>{isActive && <h1 style={{ fontSize: "120px", color: "red" }}>Hello {location}</h1>}</>;
};

export default App;
