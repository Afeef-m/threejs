"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";

export default function ShadowScene() {
  return (
    <Canvas shadows camera={{ position: [5, 5, 5], fov: 60 }}>
      <directionalLight
        castShadow
        position={[5,100, 5]}
        intensity={1}
      />
      <ambientLight intensity={0.3} />

      <mesh castShadow position={[1, 2, 1]}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="tomato" />
      </mesh>

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 1]} position={[1, 1, 1]}>
        <planeGeometry args={[20, 20,10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </Canvas>
  );
}


 
