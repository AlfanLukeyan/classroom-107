import { OrbitControls } from "@react-three/drei";
import { Classroom } from "./Classroom";
import { ChairTable } from "./ChairTable";

export const Experience = () => {
  const chair_table_positions = [
    [-6, -4, -3],
    [-4, -4, -3],
    [-2, -4, -3],
    [0, -4, -3],
    [2, -4, -3],
    [4, -4, -3],
    [6, -4, -3],
    [8, -4, -3],
    [10, -4, -3],

    [-6, -4, -1],
    [-4, -4, -1],
    [-2, -4, -1],
    [0, -4, -1],
    [2, -4, -1],
    [4, -4, -1],
    [6, -4, -1],
    [8, -4, -1],
    [10, -4, -1],
    
    [-6, -4, 1],
    [-4, -4, 1],
    [-2, -4, 1],
    [0, -4, 1],
    [2, -4, 1],
    [4, -4, 1],
    [6, -4, 1],
    [8, -4, 1],
    [10, -4, 1],
    
    [-6, -4, 3],
    [-4, -4, 3],
    [-2, -4, 3],
    [0, -4, 3],
    [2, -4, 3],
    [4, -4, 3],
    [6, -4, 3],
    [8, -4, 3],
    [10, -4, 3],
    
  ];

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 5]} color={'#FFA500'} intensity={0.02} />
      <pointLight position={[20, 0, 5]} color={'#FFA500'} intensity={0.02} />
      <pointLight position={[20, 0, -5]} color={'#FFA500'} intensity={0.02} />
      <pointLight position={[25, 0, -5]} color={'#FFA500'} intensity={0.02} />
      <pointLight position={[25, 0, 5]} color={'#FFA500'} intensity={0.02} />
      <pointLight position={[10, 0, 5]} color={'#FFA500'} intensity={0.02} />
      <pointLight position={[10, 0, -5]} color={'#FFA500'} intensity={0.02} />
      <Classroom position={[0, -4, -1]} />

      {chair_table_positions.map((position, i) => <ChairTable key={i} position={position} />)}
      {/* Shadow for my table chair */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, -1]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.3} />
      </mesh>
    </>
  );
};
