import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [-7, -1, 0], fov: 60 }}>
      <color attach="background" args={["#000000"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
