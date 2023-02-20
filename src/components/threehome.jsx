import React, { Suspense} from "react";
import "./threehomestyle.css"
import { Canvas} from "@react-three/fiber";
import Homethreeinner from "./threehomeinner.jsx";
import {isBrowser} from 'react-device-detect';

function ThreeHome() {
  if(isBrowser){
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
  else{
    return(
      <div className="div">
        <h1>Destop View Only</h1>
      </div>
    )
  }

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
