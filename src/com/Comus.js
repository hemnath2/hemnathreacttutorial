
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Comus() {
  const [color, setColor] = useState("red");

  return(
  <div><h1>My favorite color is {color}!</h1>
    <button onClick={()=>{setColor("blue")}} >change</button>
  </div>
)
}

export default Comus;
