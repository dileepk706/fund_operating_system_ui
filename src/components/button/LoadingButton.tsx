import { useState } from "react";
import { Zise, l, m, s, xs } from "./Button";
import { ColorSchema } from "../../theme";
import { Loading } from "../Icons/Icons";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string;
  size?: Zise;
  style?: React.CSSProperties;
  loading: boolean;
  loadingButtonWidth?: any;
};

const LoadingButton = ({
  onClick,
  children,
  size,
  style,
  loading,
  loadingButtonWidth,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const Size =
    size === "small" ? s : size === "large" ? l : size === "xsmall" ? xs : m;

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };
  return (
    <button
      style={{
        backgroundColor:ColorSchema().INFO.main,
        border: "none",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        transform: isActive ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.1s",
        ...Size,
        ...style,
      }}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={loading}
    >
      {loading ? <Loading width={loadingButtonWidth || 1.5} /> : children}
    </button>
  );
};

export default LoadingButton;
