import React from "react";
import { angleToRadians } from "../angleconverter.jsx";
import {MeshReflectorMaterial} from "@react-three/drei/core";

import roughnessimg from "./terrain-roughness.jpg"
import { useLoader } from "@react-three/fiber";
import {TextureLoader } from "three";

function Ground() {

  const [roughness] = useLoader(TextureLoader,[roughnessimg])

  return(
    <>
    <mesh rotation={[angleToRadians(-90),0,0]} receiveShadow castShadow>
        <planeGeometry args={[30,30]}/>
        <MeshReflectorMaterial
        envMapIntensity={0}
        normalScale={[0.15, 0.15]}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        debug={0}
        reflectorOffset={0.2}  
        map={roughness}
    
        />
      </mesh>
    </>
  )
}

export default Ground;
