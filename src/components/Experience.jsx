import { OrbitControls } from "@react-three/drei";
import { Classroom } from "./Classroom";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <Classroom />
    </>
  );
};
