import { memo, useCallback,  useState } from "react";
import NavVertical from "./NavVertical";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [marginLeft, setMarginLeft] = useState(0);

  const measureWidthHandler = useCallback((width: number) => {
    setMarginLeft(width + 40);
  }, []);

  return (
    <div className="flex gap-1 ">
      <NavVertical measureWidthHandler={measureWidthHandler} />
      <div
        className="flex-col gap-1 "
        style={{
          marginLeft,
          padding: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(Layout);
