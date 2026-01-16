import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const DesktopPC = () => {
  const model = useGLTF("/desktop_pc/scene.gltf");
  const ref = useRef();

  // 🔹 RESPONSIVE VALUES (NO LOGIC CHANGE)
  const width = window.innerWidth;

  const scale =
    width < 640 ? 0.55 :
    width < 1024 ? 0.65 :
    0.75;

  const position =
    width < 640
      ? [0, -1.4, -1.8]
      : width < 1024
      ? [0.5, -1.6, -1.8]
      : [1, -1.9, -1.8];

  const baseRotation = {
    x: -0.01,
    y: -1.55,
    z: -0.1,
  };

  useFrame(({ mouse, invalidate }) => {
    if (!ref.current) return;

    invalidate(); // REQUIRED (unchanged behavior)

    const offsetY = (mouse?.x ?? 0) * 0.06;
    const offsetX = (mouse?.y ?? 0) * 0.04;

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      baseRotation.y + offsetY,
      0.09
    );

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      baseRotation.x + offsetX,
      0.09
    );
  });

  return (
    <>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight position={[2, 5, 2]} angle={0.2} penumbra={1} intensity={2} />
      <pointLight intensity={1} />

      <primitive
        ref={ref}
        object={model.scene}
        scale={scale}
        position={position}
        rotation={[baseRotation.x, baseRotation.y, baseRotation.z]}
      />
    </>
  );
};

export default DesktopPC;
