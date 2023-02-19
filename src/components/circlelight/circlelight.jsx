import React from "react";
import { angleToRadians } from "../angleconverter.jsx";

function Circlelight() {
  return(
    <>

    <mesh position={[0,0,-6]} receiveShadow castShadow>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]}/>
      <meshStandardMaterial emissive="#FF3FB2" color="#7B7B7B" emissiveIntensity={0.05} roughness={0.25} metalness={1}/>
    </mesh>

    <mesh position={[0,0,-4.5]} receiveShadow castShadow>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]}/>
      <meshStandardMaterial emissive="#237FB2" color="#7B7B7B" emissiveIntensity={0.25} roughness={0.25} metalness={1}/>
    </mesh>

    <mesh position={[0,0,-3]} receiveShadow castShadow>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]}/>
      <meshStandardMaterial emissive="#FF3FB2" color="#7B7B7B" emissiveIntensity={0.5} roughness={0.25} metalness={1}/>
    </mesh>

    <mesh position={[0,0,-1.5]}>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]}/>
      <meshStandardMaterial emissive="#237FB2" color="#7B7B7B" emissiveIntensity={0.75} roughness={0.25} metalness={1}/>
    </mesh>

    <mesh receiveShadow castShadow>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]} />
      <meshStandardMaterial emissive="#FF3FB2" color="#7B7B7B" emissiveIntensity={1} roughness={0.25} metalness={1}/>
    </mesh>

    <mesh position={[0,0,1.5]} receiveShadow castShadow>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]}/>
      <meshStandardMaterial emissive="#237FB2" color="#7B7B7B" emissiveIntensity={0.75} roughness={0.25} metalness={1}/>
    </mesh>

    <mesh position={[0,0,3]} receiveShadow castShadow>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]}/>
      <meshStandardMaterial emissive="#FF3FB2" color="#7B7B7B" emissiveIntensity={0.5} roughness={0.25} metalness={1}/>
    </mesh>

    <mesh position={[0,0,4.5]} receiveShadow castShadow>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]}/>
      <meshStandardMaterial emissive="#237FB2" color="#7B7B7B" emissiveIntensity={0.25} roughness={0.25} metalness={1}/>
    </mesh>

    <mesh position={[0,0,6]} receiveShadow castShadow>
      <torusGeometry args={[2.5, 0.1,4,30,angleToRadians(200)]}/>
      <meshStandardMaterial emissive="#FF3FB2" color="#7B7B7B" emissiveIntensity={0.05} roughness={0.25} metalness={1}/>
    </mesh>

    </>
    
  )
}

export default Circlelight;
