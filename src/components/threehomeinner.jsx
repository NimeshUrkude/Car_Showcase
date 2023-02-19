import React, { useRef } from "react";
import "./threehomestyle.css"
import {useFrame } from "@react-three/fiber";
import { PerspectiveCamera ,OrbitControls , Environment} from "@react-three/drei/web";
import { angleToRadians } from "./angleconverter.jsx";
import * as THREE from "three";
import Ground from "./ground/ground.jsx";
import Car from "./car/Car.jsx";
import Circlelight from "./circlelight/circlelight";

function ThreeHomeinner() {

  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  return(
    <>
        <PerspectiveCamera makeDefault position={[3, 0, 6]} fov={50}/>
        <OrbitControls ref={orbitControlsRef} target={[0, 1, 0]} maxPolarAngle={1.6} minPolarAngle={1}/>
      
      <Environment background>
      <mesh>
        <sphereGeometry args={[40,40,40]}/>
        <meshBasicMaterial  
        color={"#000000"}  
        side={THREE.BackSide}
        />
      </mesh>
      </Environment>
      <Ground/>
      <spotLight color={[1, 0.25, 0.7]} intensity={1.5} angle={0.6} position={[5,5,0]} castShadow shadow-bias={-0.0001} penumbra={0.5}/>
      <spotLight color={[0.14, 0.5, 1]} intensity={2} angle={0.6} position={[-5,5,0]} castShadow shadow-bias={-0.0001} penumbra={0.5}/>
      <spotLight color={[1, 1, 1]} intensity={1} angle={0.4} position={[-8,5,0]} castShadow shadow-bias={-0.0001} penumbra={0.5}/>
      <Car/>
      <Circlelight/>
    </>
  )
}

export default ThreeHomeinner;
