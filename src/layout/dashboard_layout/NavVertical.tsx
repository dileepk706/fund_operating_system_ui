import { useEffect, useRef } from "react";
import "./style.css";
import NavSectionVertical from "./NavSectionVertical";

type Props = {
  measureWidthHandler: (navWidth: number) => void;
};

const NavVertical = ({ measureWidthHandler }: Props) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const navWidth = navRef.current.offsetWidth;
      measureWidthHandler(navWidth);
    }
  }, []);

  return (
    <nav className="flex-srink-1  " style={{ position: "fixed" }} ref={navRef}>
      <NavSectionVertical />
    </nav>
  );
};

export default NavVertical;
