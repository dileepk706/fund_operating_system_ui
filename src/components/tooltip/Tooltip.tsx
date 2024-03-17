import React, { useState } from "react";

type Props = {
  text: string;
  children: React.ReactNode;
  noTooltip?: boolean;
};
const Tooltip = ({ text, children, noTooltip }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const tooltip = (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(83, 82, 82, 0.8)",
            color: "#fff",
            padding: "1px 7px",
            borderRadius: "5px",
            zIndex: 999,
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
  return <>{noTooltip ? children : tooltip}</>;
};

export default Tooltip;
