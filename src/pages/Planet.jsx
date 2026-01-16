import { useGSAP } from "@gsap/react";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Orbit } from "lucide-react";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame } from "@react-three/fiber";
const Planet = () => {
  const model = useGLTF("/planet/scene.gltf");
  const { actions } = useAnimations(model.animations, model.scene);
  gsap.registerPlugin(useGSAP());
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        endTrigger: "#contact",
        start: "top top",
        end: "top top",
        scrub: true,
      },
    });
    tl.to(model.scene.position, {
      z: 1,
      x: 1,
    });
  });
  useEffect(() => {
    actions["Animation"].play();
  }, [actions]);
  useFrame(({ invalidate }) => invalidate());
  return (
    <>
      <primitive object={model.scene} position={[0, 0, 6]}></primitive>
      {/* <OrbitControls/> */}
    </>
  );
};

export default Planet;
