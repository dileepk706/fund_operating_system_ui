import { useState } from "react";
import "./style.css";
import { ColorSchema } from "../../theme";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string;
  size?: Zise;
  style?: React.CSSProperties;
  variant?: ButtonVariant;
  disabled?:boolean
};

const Button = ({ onClick, children, size, style,disabled, variant }: Props) => {
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
        backgroundColor: ColorSchema().INFO.main,
        border: "none",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        transform: isActive ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.1s",
        cursor: disabled?"not-allowed":"pointer",
        // borderRadius: "5px",
        ...Size,
        ...style,
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </button>
  );
};

export default Button;

export const s = {
  padding: "7px 16px",
  margin: "4px 2px",
  fontSize: "16px",
};

export const l = {
  padding: "20px 50px",
  margin: "4px 2px",
  fontSize: "20px",
};

export const m = {
  padding: "15px 32px",
  margin: "4px 2px",
  fontSize: "16px",
};

export const xs = {
  padding: "5px 13px",
  fontSize: "10px",
};

export type Zise = "small" | "medium" | "large" | "xsmall";
export type ButtonVariant = "soft" | "text";
