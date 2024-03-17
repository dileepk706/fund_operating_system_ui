import React from "react";

type Props = {
  children: React.ReactNode;
  style?:React.CSSProperties
};
function Card({ children ,style}: Props) {
  return (
    <div
      style={{
        borderRadius: 3,
        backgroundColor: "white",
        boxShadow: "1px 1px 20px rgba(194, 190, 190, 0.99)",
        ...style
      }}
      id="card"
    >
      {children}
    </div>
  );
}

export default Card;
