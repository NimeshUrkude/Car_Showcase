import React from 'react'
import { useGLTF } from '@react-three/drei'
import mm from "./car.glb";

export default function Model(props) {
  const { nodes, materials } = useGLTF(mm)
  return (
    <group {...props} dispose={null} scale={0.006} position={[0,0.44,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 48.9, -1.21]} rotation={[0, Math.PI / 2, 0]} scale={1.7}>
            <mesh geometry={nodes.body_window_0.geometry} material={materials.window} />
            <mesh geometry={nodes.body_bkg_0.geometry} material={materials.material} />
            <mesh geometry={nodes.body_lens_0.geometry} material={materials.lens} />
            <mesh geometry={nodes.body_glass_0.geometry} material={materials.glass} />
            <mesh geometry={nodes.body_bk_0.geometry} material={materials.material_4} />
            <mesh geometry={nodes.body_chrome_0.geometry} material={materials.chrome} />
            <mesh geometry={nodes.body_number_0.geometry} material={materials.number} />
            <mesh geometry={nodes.body_logo_0.geometry} material={materials.logo} />
            <mesh geometry={nodes.body_line_0.geometry} material={materials.line} />
            <mesh geometry={nodes.body_duct_0.geometry} material={materials.duct} />
            <mesh geometry={nodes.body_body_0.geometry} material={materials.body} />
            <mesh geometry={nodes.body_tire_0.geometry} material={materials.tire} />
            <mesh geometry={nodes.body_w_chrome_0.geometry} material={materials.w_chrome} />
            <mesh geometry={nodes.body_w_gold_0.geometry} material={materials.w_gold} />
            <mesh geometry={nodes.body_doorknob_0.geometry} material={materials.doorknob} />
            <mesh geometry={nodes.body_interior_0.geometry} material={materials.interior} />
            <mesh geometry={nodes.body_body2_0.geometry} material={materials.body2} />
            <mesh geometry={nodes.body_b_pillar_0.geometry} material={materials.b_pillar} />
          </group>
          <group position={[0, 0, 280]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.color_b_blue_0.geometry} material={materials.b_blue} />
            <mesh geometry={nodes.color_b_red_0.geometry} material={materials.b_red} />
            <mesh geometry={nodes.color_b_yellow_0.geometry} material={materials.b_yellow} />
            <mesh geometry={nodes.color_b_black_0.geometry} material={materials.b_black} />
            <mesh geometry={nodes.color_b_silver_0.geometry} material={materials.b_silver} />
            <mesh geometry={nodes.color_b_white_0.geometry} material={materials.b_white} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(mm)
