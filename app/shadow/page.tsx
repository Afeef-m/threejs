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

      <mesh castShadow position={[2, 2, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="tomato" />
      </mesh>

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 1]} position={[1, 1, 1]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </Canvas>
  );
}


 
