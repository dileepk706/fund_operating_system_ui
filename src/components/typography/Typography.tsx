type Props = {
  variant?: "caption" | "subtitle1" | "subtitle2" | "body1" | "body2";
  style?: React.CSSProperties;
  children: React.ReactNode | string;
  noWrap?: boolean;
};
const Typography = ({ variant, style, children, noWrap }: Props) => {
  return (
    <span
      style={{
        ...getFontStyle(variant),
        ...style,
        whiteSpace: noWrap ? "nowrap" : "wrap",
      }}
    >
      {" "}
      {children}
    </span>
  );
};

export default Typography;

function getFontStyle(t?: string) {
  const body1 = {
    fontSize: "1.4rem",
    fontWeight: "lighter",
  };

  const body2 = {
    fontSize: "1.3rem",
    fontWeight: "",
  };

  const subtitle1 = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  const subtitle2 = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };
  if (t === "subtitle1") {
    return subtitle1;
  }
  if (t === "subtitle2") {
    return subtitle2;
  }
  if (t === "body1") {
    return body1;
  }
  if (t === "body2") {
    return body2;
  }
  return {};
}
