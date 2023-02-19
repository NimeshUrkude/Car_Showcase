import React from "react";
import { angleToRadians } from "../angleconverter.jsx";
import {MeshReflectorMaterial} from "@react-three/drei/core";

function Ground() {


  return(
    <>
    <mesh position={[3,0,0]} rotation={[angleToRadians(-90),0,0]} receiveShadow castShadow>
        <planeGeometry args={[18,10]}/>
        <MeshReflectorMaterial
          color={[0.015, 0.015, 0.015]}
          roughness={0.7}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={30}
        />
      </mesh>
    </>
  )
}

export default Ground;
