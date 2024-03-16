type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  size?: "small" | "medium" | "large";
  style?:React.CSSProperties
};

const Button = ({ onClick, label, size,style }: Props) => {
  const Size = size === "small" ? s : size === "large" ? l : m;

  return (
    <button
      style={{
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "5px",
        ...Size,
        ...style,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

const s = {
  padding: "7px 16px",
  margin: "4px 2px",
  fontSize: "16px",
};

const l = {
  padding: "20px 50px",
  margin: "4px 2px",
  fontSize: "20px",
};

const m = {
  padding: "15px 32px",
  margin: "4px 2px",
  fontSize: "16px",
};
