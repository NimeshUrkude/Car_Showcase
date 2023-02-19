import React, { Suspense} from "react";
import "./threehomestyle.css"
import { Canvas} from "@react-three/fiber";
import Homethreeinner from "./threehomeinner.jsx";

function ThreeHome() {


  return(
    <div className="div">
      <Suspense fallback={null}>
        <Canvas className="canvas_div" shadows={true}>
          <Homethreeinner/>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default ThreeHome;
