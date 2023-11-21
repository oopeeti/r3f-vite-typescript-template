import { Canvas } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera
} from '@react-three/drei';
import { Box } from './Scene';

function App() {
  return (
    <Canvas flat>
      <OrbitControls maxDistance={50} minDistance={10} />
      <ambientLight intensity={Math.PI / 2} />
      <group scale={20} position={[0, 0, 0]}>
        <Box position={[0, 0, 0]} scale={0.15} />
      </group>
      <Environment preset="city" background blur={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
    </Canvas>
  );
}

export default App;
