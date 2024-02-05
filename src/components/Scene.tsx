"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import Baloon from "./Baloon";

const Scene = () => {
  let showTable = true;

  const balloons = [
    { position: [8 / 2.5, 0, 15], scale: 1, color: "blue" },
    { position: [12 / 2.5, -5, 15], scale: 0.8, color: "red" },
    { position: [-9 / 2.5, 0, 15], scale: 1.1, color: "lime" },
    { position: [-11 / 2.5, -5, 15], scale: 0.8, color: "yellow" },
  ];

  return (
    <div className="w-sceen h-screen fixed top-0 left-0 right-0 bottom-0 z-[1]">
      <Suspense fallback={null}>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [0, 1, -10],
          }}
        >
          <ambientLight intensity={0.1} />
          <pointLight
            position={[0, 0, 30]}
            intensity={100}
            color="powderBlue"
          />
          <pointLight
            position={[5, 0, -2]}
            intensity={2500}
            color="lightBlue"
          />
          <pointLight
            position={[-5, 0, -5]}
            intensity={1000}
            color="paleTurquoise"
          />

          <Physics gravity={[0, 0.05, 0]} debug>
            {balloons.map((balloon, index) => (
              <Baloon
                key={index}
                position={balloon.position}
                scale={balloon.scale}
                color={balloon.color}
              />
            ))}
          </Physics>

          {!showTable && (
            <mesh position={[0, -1, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
              <planeGeometry args={[64, 64, 1]} />
              <meshStandardMaterial color="black" />
            </mesh>
          )}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene;
