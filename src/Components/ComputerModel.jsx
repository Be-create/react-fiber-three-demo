import React from "react";
import { Html, PresentationControls, useGLTF } from "@react-three/drei";
import "./styles.css";
export const ComputerModel = () => {
  const computer = useGLTF("./laptop/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={0.7}
        position={[0, -3.25, -1.5]}
      >
        <Html
          wrapperClass="laptop"
          position={[0.1, 2.2, -1.5]}
          transform
          distance={0}
          rotation-x={0}
        >
          <iframe src="https://benazir.netlify.app/"></iframe>
        </Html>
      </primitive>
    </mesh>
  );
};
