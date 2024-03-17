import { useState, useEffect, useCallback } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<"xxl"|"xl"|"medium"|"small"|"large">("medium");
  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setScreenSize("small");
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      setScreenSize("medium");
    } else if (window.innerWidth >= 1200 && window.innerWidth < 1600) {
      setScreenSize("large");
    }else if (window.innerWidth >= 1600 && window.innerWidth < 2000) {
      setScreenSize("xl");
    }else {
      setScreenSize("xxl");
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
