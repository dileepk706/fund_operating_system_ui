import { memo, useEffect, useState, useTransition } from "react";

const Artists = memo(function PostsTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");
  const [isPending, startTransition] = useTransition();

  const [lis, setLis] = useState<any>();
let items:any=[]
useEffect(()=>{
  setTimeout(() => {
    // startTransition(()=>{
      for (let index = 0; index < 1000; index++) {
        items.push(<SlowPost index={index} />)
      }
      setLis(items)
    // })
  }, 200);
  
},[])
  return (
    <ul className="items">
      {isPending ? (
        <h1>loading.....</h1>
      ) : (
       <ul>
        {lis}
       </ul>
      )}
    </ul>
  );
});

function SlowPost({ index }: any) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <>
  <li className="item">Post #{index + 1}</li>
  <li className="item">Post #{index + 1}</li>
  <li className="item">Post #{index + 1}</li>
  <li className="item">Post #{index + 1}</li>
 
  </>;
}

export default Artists;
