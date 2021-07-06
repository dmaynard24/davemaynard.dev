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
  mouseCoords?: THREE.Vector2Tuple;
}> = ({position, color, scale = 1, mouseCoords}) => {
  const meshGroup = React.useRef<THREE.Group>(null);
  const axis = new THREE.Vector3(position[0], position[1] + 1, position[2]).normalize();
  const radialSegments = 5;
  const capBottomRadius = 0.75 * scale;
  const capTopRadius = capBottomRadius / 2;
  const baseHeight = 1.25 * scale;
  const capHeight = baseHeight / 3;
  const capPosition: THREE.Vector3Tuple = [position[0], position[1] + baseHeight - capHeight, position[2]];

  const getRadianCoordsFromPixelCoords = (pixelCoords: THREE.Vector2Tuple): THREE.Vector2Tuple => {
    const xRadians = ((pixelCoords[1] / window.innerHeight) * 360 * Math.PI) / 180;
    const yRadians = ((pixelCoords[0] / window.innerWidth) * 360 * Math.PI) / 180;
    return [xRadians, yRadians];
  };

  React.useEffect(() => {
    const radianCoords = getRadianCoordsFromPixelCoords(mouseCoords);
    meshGroup.current.setRotationFromAxisAngle(axis, radianCoords[1]);
  }, [axis, mouseCoords]);

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
const cyan = resolveConfig(tailwindConfig).theme.colors.cyan['600'];
const cyanDark = resolveConfig(tailwindConfig).theme.colors.cyan['800'];

const Diamonds: React.FC = () => {
  const [mouseCoords, setMouseCoords] = React.useState<THREE.Vector2Tuple>([0, 0]);

  const handleMouseMove = (e: MouseEvent) => {
    setMouseCoords([e.clientX, e.clientY]);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, false);
  }, []);

  return (
    // <div className="fixed bg-white w-1/6 h-1/4 z-0 bottom-0 left-0">
    <div className="fixed bg-white w-full h-full z-20 bottom-0 left-0">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Diamond position={[-1.2, 1.2, -1.2]} color={cyanLight} scale={0.75} mouseCoords={mouseCoords} /> */}
        <Diamond position={[0, 0, 0]} color={cyan} mouseCoords={mouseCoords} />
        {/* <Diamond position={[1.2, 1.2, 1.2]} color={cyanDark} scale={0.75} mouseCoords={mouseCoords} /> */}
      </Canvas>
    </div>
  );
};
Diamonds.displayName = 'Diamonds';

export default Diamonds;
