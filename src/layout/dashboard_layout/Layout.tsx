import { memo, useCallback, useEffect, useState } from "react";
import NavVertical from "./NavVertical";
import useScreenSize from "../../hooks/useScreenSize";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [marginLeft, setMarginLeft] = useState(0);

  const measureWidthHandler = useCallback((width: number) => {
    setMarginLeft(width);
  }, []);

  const screen = useScreenSize();

  const [width, setWidth] = useState("90%");
  useEffect(() => {
    if (screen === "xxl") setWidth("1720px");
    if (screen === "xl") setWidth("1400px");
    if (screen === "large") setWidth("900PX");
    if (screen === "medium") setWidth("576px");
    if (screen === "small") setWidth("90%");
  }, [screen]);
  return (
    <div className="flex gap-1 "
    style={{
      backgroundColor:'whitesmoke',

    }}
    >
      <NavVertical measureWidthHandler={measureWidthHandler} />
      <div
        style={{
          margin: `40px 0px 0px ${
            screen === "small" ? "0px" : marginLeft + "px"
          }`,
          width: "100%",
          paddingBottom:'10px',
        }}
        className="flex justify-center"
      >
        <div
          style={{
            width: width,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default memo(Layout);
