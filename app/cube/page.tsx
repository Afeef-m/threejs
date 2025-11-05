"use client"
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/all";
import * as THREE from "three";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function LineCube() {
  const cubeRef = useRef<THREE.Mesh>(null!);
  const scrollRef = useRef(0); 

  useFrame(() => {
    cubeRef.current.rotation.x = scrollRef.current * Math.PI * 2;
    cubeRef.current.rotation.y = scrollRef.current * Math.PI * 2;
    cubeRef.current.rotation.z = scrollRef.current * Math.PI * 2;
  });

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#cube",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        scrollRef.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, []);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const wireframe = new THREE.WireframeGeometry(geometry);

  return (
    <lineSegments ref={cubeRef} geometry={wireframe}>
      <lineBasicMaterial color="lime" />
    </lineSegments>
  );
}

export default function Cube() {
  return (
    <div
      id="cube"
      style={{ height: "200vh", width: "100vw", background: "black" }}
    >
      <h3 className="flex justify-center text-lime-700 font-semibold text-3xl">3D Cube </h3>
      <Canvas camera={{ position: [4, 4, 4], fov: 75 }}>
        <ambientLight intensity={0.03}/>
        <directionalLight position={[10, 10, 10]} />
        
        <LineCube />
      </Canvas>
    </div>
  );
}













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




// import React, { useEffect, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { ScrollTrigger } from "gsap/all";
// import * as THREE from "three";
// import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger)
// function LineCube() {
//   const cubeRef = useRef();
//   useFrame(() => {
//     cubeRef.current.rotation.x +=0.03;
//     cubeRef.current.rotation.y +=0.03;
//     // cubeRef.current.rotation.z +=0.03;

//   });

//   useEffect(()=>{
//     gsap.to(cubeRef.current.scale,{
//         x:1.5,
//         y:1.5,
//         z:1.5,
//         duration:1.2,
//         yoyo:true,
//         repeat:-1,
//         ease:"power1.inOut",
//         scrollTrigger:{
//           trigger:"#cube",
//           start:"top 90%",
//           end:"+=300",
//           scrub:true,
//           // markers:true

//         }
//     })
//   },[])

//   const geometry = new THREE.BoxGeometry(2, 2, 2);
//   const wireframe = new THREE.WireframeGeometry(geometry);

//   return (
//     <lineSegments ref={cubeRef} geometry={wireframe}>
//       <meshStandardMaterial color="lime" wireframeLinewidth={3}/>
//     </lineSegments>
//   );
// }

// export default function Cube() {
//   return (
//     <div id="cube" style={{ height: "100vh", width: "100vw", background: "black" }}>

//       <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
//         <ambientLight intensity={0.4} />
//         <directionalLight position={[10, 10, 10]} />
//         <LineCube />
//       </Canvas>
//     </div>
//   );
// }
