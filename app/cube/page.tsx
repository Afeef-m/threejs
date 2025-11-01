"use client"
// import { Canvas } from "@react-three/fiber"

// function Box(){
//     return (
//         <mesh rotation={[1, 1, 1]}>
//             <boxGeometry args={[2,2,2]}/>
//             <meshStandardMaterial color="orange" />
//         </mesh>
//     )
// }

// export default function Cube(){
//     return(
//         <Canvas >
//             <ambientLight/>
//             <pointLight position={[0,0,0]}/>
//             <Box/>
//         </Canvas>
//     )
// }




import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function WireCube() {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x +=0.01;
    cubeRef.current.rotation.y +=0.01;

  });

  useEffect(()=>{
    gsap.to(cubeRef.current.scale,{
        x:1.5,
        y:1.5,
        z:1.5,
        duration:1.2,
        yoyo:true,
        repeat:-1,
        ease:"power1.inOut"
    })
  },[])

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const wireframe = new THREE.WireframeGeometry(geometry);

  return (
    <lineSegments ref={cubeRef} geometry={wireframe}>
      <lineBasicMaterial color="lime" linewidth={1} />
    </lineSegments>
  );
}

export default function Cube() {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "black" }}>
      <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} />
        <WireCube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
