type Props = {
  variant?: Variant;
  style?: React.CSSProperties;
  children: React.ReactNode | string;
  noWrap?: boolean;
  gutterBottom?:boolean;
};
const Typography = ({ variant, style, children, noWrap,gutterBottom }: Props) => {
  return (
    <span
      style={{
        ...fontVariants(variant),
        ...style,
        whiteSpace: noWrap ? "nowrap" : "wrap",
        marginBottom:gutterBottom?'10px':0,
      }}
    >
      {" "}
      {children}
    </span>
  );
};

export default Typography;

export function fontVariants(t?: Variant) {
  const body1 = {
    fontSize: "1.4rem",
    fontWeight: "lighter",
  };

  const body2 = {
    fontSize: "1.3rem",
    fontWeight: "",
  };

  const subtitle2 = {
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  const subtitle1 = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };
  const captionUltra = {
    fontSize: "0.9rem",
    fontWeight: "lighter",
  };
  const small = {
    fontSize: "0.7rem",
    fontWeight: "lighter",
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
  if(t==='captionUltra'){
    return captionUltra
  }
  if(t==='small'){
    return small
  }
  return {};
}
export type Variant= "caption" | "subtitle1" | "subtitle2" | "body1" | "body2"|"captionUltra"|"small";

