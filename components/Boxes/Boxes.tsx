import * as React from 'react';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
import getRandomFloat from '../../util/getRandomFloat';

const Box: React.FC<{position: THREE.Vector3Tuple}> = ({position}) => {
  const mesh = React.useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);

  useFrame(() => {
    mesh.current.rotation.x += getRandomFloat(0, 0.005);
    mesh.current.rotation.y += getRandomFloat(0, 0.005);
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};
Box.displayName = 'Box';

const Boxes: React.FC = () => {
  return (
    <div className="fixed bg-white w-1/8 h-1/4 bottom-0 left-0 z-0">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 1.2, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};
Boxes.displayName = 'Boxes';

export default Boxes;
