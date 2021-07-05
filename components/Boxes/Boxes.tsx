import * as React from 'react';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
import resolveConfig from 'tailwindcss/resolveConfig';

import getRandomFloat from '../../util/getRandomFloat';
import tailwindConfig from '../../tailwind.config.js';

const Diamond: React.FC<{
  position: THREE.Vector3Tuple;
  color: string;
  scale?: number;
}> = ({position, color, scale = 1}) => {
  const meshGroup = React.useRef<THREE.Group>(null);
  const radialSegments = 7;
  const capBottomRadius = 0.75 * scale;
  const capTopRadius = capBottomRadius / 2;
  const baseHeight = 1.5 * scale;
  const capHeight = baseHeight / 3;
  const capPosition: THREE.Vector3Tuple = [position[0], position[1] + baseHeight - capHeight, position[2]];

  useFrame(() => {
    meshGroup.current.rotation.x += getRandomFloat(0, 0.005 * scale);
    meshGroup.current.rotation.y += getRandomFloat(0, 0.005 * scale);
  });

  return (
    <>
      <group ref={meshGroup}>
        <mesh position={capPosition}>
          <cylinderGeometry args={[capTopRadius, capBottomRadius, capHeight, radialSegments]} />
          <meshStandardMaterial color={new THREE.Color(color)} />
        </mesh>
        <mesh position={position}>
          <cylinderGeometry args={[capBottomRadius, 0, baseHeight, radialSegments]} />
          <meshStandardMaterial color={new THREE.Color(color)} />
        </mesh>
      </group>
    </>
  );
};
Diamond.displayName = 'Diamond';

const cyanLight = resolveConfig(tailwindConfig).theme.colors.cyan['400'];
const cyanDark = resolveConfig(tailwindConfig).theme.colors.cyan['800'];

const Diamonds: React.FC = () => {
  return (
    // <div className="fixed bg-white w-1/6 h-1/4 bottom-0 left-0 z-0">
    <div className="fixed bg-white w-full h-full bottom-0 left-0 z-20">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Diamond position={[-1.2, 1.2, 0]} color={cyanLight} scale={0.75} />
        <Diamond position={[1.2, 0, 0]} color={cyanDark} />
      </Canvas>
    </div>
  );
};
Diamonds.displayName = 'Diamonds';

export default Diamonds;
