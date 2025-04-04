import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import * as THREE from "three";

const MacContainer = () => {
  let model = useGLTF("./mac.glb")
  let meshes = {};
  let texture = useTexture("./red.jpg")
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });
  let data = useScroll();
  meshes.matte.material.map = texture;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;
  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset*90));
  });

  return (
    <group position={[0, -12, 0]}>  // Adjusted Y position from -15 to -10
      <primitive object={model.scene}/>
    </group>
  );
};

export default MacContainer;