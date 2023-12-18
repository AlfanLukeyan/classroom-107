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
      <pointLight castShadow position={[-5, 0, 5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10} />
      <pointLight castShadow position={[-5, 0, -5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10}/>
      <pointLight castShadow position={[0, 0, 5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10} />
      <pointLight castShadow position={[0, 0, -5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10}/>
      <pointLight castShadow position={[5, 0, 5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10}/>
      <pointLight castShadow position={[5, 0, -5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10} />
      <pointLight castShadow position={[10, 0, 5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10}/>
      <pointLight castShadow position={[10, 0, -5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10}/>
      <pointLight castShadow position={[15, 0, 5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10}/>
      <pointLight castShadow position={[15, 0, -5]} color={'#FDF5E6'} intensity={1.5} distance={50} decay={10}/>
      <Classroom position={[0, -4, -1]} />
      {chair_table_positions.map((position, i) => <ChairTable key={i} position={position} />)}
    </>
  );
};
