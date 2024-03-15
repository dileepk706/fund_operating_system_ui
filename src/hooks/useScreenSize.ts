import { useState, useEffect, useCallback } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("medium");
  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setScreenSize("small");
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setScreenSize("medium");
    } else {
      setScreenSize("large");
    }
  }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
