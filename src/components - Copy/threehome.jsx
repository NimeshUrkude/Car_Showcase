import React, { Suspense} from "react";
import "./threehomestyle.css"
import { Canvas} from "@react-three/fiber";
import Homethreeinner from "./threehomeinner.jsx";

function ThreeHome() {
  return(
    <div className="div">
      <Suspense fallback={<Loading/>}>
        <Canvas className="canvas_div" shadows={true}>
          <Homethreeinner/>
        </Canvas>
      </Suspense>
    </div>
  )
}

function Loading(){
  return(
    <div className="div">
      <h1>Loading</h1>
      <div className="center">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  )
}

export default ThreeHome;
