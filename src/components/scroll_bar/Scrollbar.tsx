import React, { memo } from 'react'
import './style.css'

type Props={
    children:React.ReactNode
    height?:any
    width?:any
    style?: React.CSSProperties;
}
const Scrollbar = ({children,height,width,style}:Props) => {
  return (
    <div
      className="scrollbar scrollbard "
      style={{
        height: height || "auto",
        width: width || "auto",
        overflowX: width ? "scroll" : "visible",
        overflowY: height ? "scroll" : "visible",
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default memo(Scrollbar) 
