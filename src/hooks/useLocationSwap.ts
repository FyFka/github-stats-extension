import { useEffect, useState } from "react";

const useLocationSwap = () => {
  const [location, setLocation] = useState(window.location.href);

  useEffect(() => {
    document.addEventListener("pjax:end", handlePageSwap);
    document.addEventListener("turbo:render", handlePageSwap);

    return () => {
      document.removeEventListener("pjax:end", handlePageSwap);
      document.removeEventListener("turbo:render", handlePageSwap);
    };
  }, []);

  const handlePageSwap = () => {
    setLocation(window.location.href);
  };

  return location;
};

export default useLocationSwap;
