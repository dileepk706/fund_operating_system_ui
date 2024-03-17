import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { Props } from "../table/Table";

function Container({ children }: Props) {
    const screen=useScreenSize()
    
    const [width, setWidth] = useState(1000)


    useEffect(()=>{
if(screen==='large') setWidth(1500)
if(screen==='medium') setWidth(1200)
if(screen==='small') setWidth(1200)


    },[screen])
  return <div id="container" style={{  }}>{children}</div>;
}

export default Container;
