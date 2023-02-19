import React from 'react'
import { useGLTF } from '@react-three/drei'
import mm from "./car.glb";

export default function Model(props) {
  const { nodes, materials } = useGLTF(mm)
  return (
    <group {...props} dispose={null} position={[0,0.65,0]}  >
      <group position={[-0.02, -0.01, 0.06]} rotation={[-Math.PI / 2, 0, 0]} scale={0.58}>
        <group position={[0, 0, 0.01]}>
          <mesh geometry={nodes.windshield_0.geometry} material={materials.window}  />
          <mesh geometry={nodes.windshield_1.geometry} material={materials.plastic}   />
        </group>
        <group position={[0, 0, 0.03]}>
          <mesh geometry={nodes.Cylinder000_0.geometry} material={materials.silver}   />
          <mesh geometry={nodes.Cylinder000_1.geometry} material={materials.plastic}   />
          <mesh geometry={nodes.Cylinder000_2.geometry} material={materials.rubber}   />
          <mesh geometry={nodes.Cylinder000_3.geometry} material={materials['Material.001']}   />
        </group>
        <group position={[0, 0, 0.03]}>
          <mesh geometry={nodes.Cylinder001_0.geometry} material={materials.silver}   />
          <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.plastic}   />
          <mesh geometry={nodes.Cylinder001_2.geometry} material={materials.rubber}   />
          <mesh geometry={nodes.Cylinder001_3.geometry} material={materials['Material.001']}   />
        </group>
        <mesh geometry={nodes.window_rear_0.geometry} material={materials.window} />
        <mesh geometry={nodes.Plane002_0.geometry} material={materials.paint} position={[-1.05, 3.51, -0.13]} rotation={[-1.44, -0.62, 0.78]} scale={0.02}   />
        <mesh geometry={nodes.Plane003_0.geometry} material={materials.paint} position={[0.44, 3.72, -0.12]} rotation={[-1.48, 0.1, 0.8]} scale={0.02}   />
        <mesh geometry={nodes.Plane004_0.geometry} material={materials.paint} position={[-0.49, 3.68, -0.33]} rotation={[-1.42, -0.04, 0.8]} scale={0.06}   />
        <mesh geometry={nodes.boot_0.geometry} material={materials.full_black}   />
        <mesh geometry={nodes.underbody_0.geometry} material={materials.full_black}   />
        <mesh geometry={nodes.Plane_0.geometry} material={materials.Material} position={[0, 0, -1.05]} scale={[6.95, 9.79, 7.5]}   />
        <mesh geometry={nodes.Cube001_0.geometry} material={materials.plastic} position={[0.04, -1.56, 0.33]} rotation={[0.71, -0.07, -0.24]} scale={0.01}   />
        <mesh geometry={nodes.bumper_front004_0.geometry} material={materials.silver}   />
        <mesh geometry={nodes.bumper_front004_1.geometry} material={materials.lights}   />
        <mesh geometry={nodes.bumper_front004_2.geometry} material={materials.plastic}   />
        <mesh geometry={nodes.bumper_front007_0.geometry} material={materials.glass} rotation={[-0.01, 0, 0]} scale={1.04}   />
        <mesh geometry={nodes.bumper_front009_0.geometry} material={materials.tex_shiny}   />
        <mesh geometry={nodes.bumper_front001_0.geometry} material={materials.plastic}   />
        <mesh geometry={nodes.bumper_front001_1.geometry} material={materials.silver}   />
        <mesh geometry={nodes.bumper_front001_2.geometry} material={materials.lights}   />
        <mesh geometry={nodes.bumper_front003_0.geometry} material={materials.plastic}   />
        <mesh geometry={nodes.bumper_front003_1.geometry} material={materials.glass}   />
        <mesh geometry={nodes.boot001_0.geometry} material={materials.paint}   />
        <mesh geometry={nodes.boot002_0.geometry} material={materials.paint}   />
        <mesh geometry={nodes.Plane001_0.geometry} material={materials.tex_shiny} position={[0.01, 3.58, 0.11]}   />
        <mesh geometry={nodes.boot003_0.geometry} material={materials.tex_shiny}   />
        <mesh geometry={nodes.boot004_0.geometry} material={materials.window}   />
        <mesh geometry={nodes.boot005_0.geometry} material={materials.paint}   />
        <mesh geometry={nodes.boot006_0.geometry} material={materials.full_black}   />
        <mesh geometry={nodes.window_rear001_0.geometry} material={materials.full_black}   />
        <mesh geometry={nodes.boot007_0.geometry} material={materials.logo}   />
        <mesh geometry={nodes.Plane005_0.geometry} material={materials.license} position={[0, 3.7, -0.29]} rotation={[0.11, 0, 0]} scale={[0.39, 0.39, 0.36]}   />
        <mesh geometry={nodes.Plane006_0.geometry} material={materials.license} position={[0, -3.75, -0.43]} rotation={[0.08, 0, Math.PI]} scale={[0.4, 0.4, 0.36]}   />
        <mesh geometry={nodes.boot008_0.geometry} material={materials.paint}   />
        <mesh geometry={nodes.boot009_0.geometry} material={materials.silver}   />
        <mesh geometry={nodes.boot010_0.geometry} material={materials.plastic}   />
        <mesh geometry={nodes.boot011_0.geometry} material={materials.coat}   />
        <mesh geometry={nodes.boot011_0_1.geometry} material={materials.coat}   />
        <mesh geometry={nodes.Cube002_0.geometry} material={materials.full_black} scale={[0.33, 0.32, 0.32]}   />
      </group>
    </group>
  )
}

useGLTF.preload(mm)
