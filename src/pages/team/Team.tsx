// import { Helmet } from "react-helmet-async";
// import Typography from "../../components/typography/Typography";
// import { Suspense, lazy, useState, useTransition } from "react";
// import Artists from "./Artist";
// import Button from "../../components/button/Button";

// const Team = () => {
//   const [isPending, startTransition] = useTransition();
//   const [fuck, setFuck] = useState("");
//   const ff = (e: any) => {
//     startTransition(()=>{
//       setFuck(e);
//     })
//   };
//   return (
//     <>
//       <Helmet>
//         <title>Team</title>
//       </Helmet>
    
//       <div>
//           <Button onClick={() => ff("a")}>a</Button>
//           <Button onClick={() => ff("b")}>b</Button>
//           <Button onClick={() => ff("c")}>c</Button>
//           {fuck === "a" && <h1>fuck you</h1>}
//           {fuck === "b" && <h1>mother fucker</h1>}
//           {fuck === "c" && <Artists />}
//       </div>
//     </>
//   );
// };

// export default Team;

import { Helmet } from "react-helmet-async";
import Typography from "../../components/typography/Typography";
import { Suspense, lazy, useState, useTransition } from "react";
import Artists from "./Artist";
import Button from "../../components/button/Button";

const Team = () => {
 
  return (
    <>
      <Helmet>
        <title>Team</title>
      </Helmet>
      <Button onClick={() => {}}>afdgdfgdgfg</Button>
      <div>
         
          <Artists />
      </div>
    </>
  );
};

export default Team;
