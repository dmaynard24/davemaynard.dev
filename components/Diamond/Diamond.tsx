import * as React from 'react';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import {Color} from 'three';

const Diamond: React.FC<{
  color: string | number | Color;
  scale?: number;
  className?: string;
}> = ({color, scale = 1, className}) => {
  const [mouseCoords, setMouseCoords] = React.useState<THREE.Vector2Tuple>([0, 0]);
  const meshGroup = React.useRef<THREE.Group>(null);
  const position: THREE.Vector3Tuple = [0, 0, 0];
  const axis = new THREE.Vector3(position[0], position[1] + 1, position[2]).normalize();
  const radialSegments = 7;
  const capBottomRadius = 2 * scale;
  const capTopRadius = capBottomRadius / 2;
  const baseHeight = 3 * scale;
  const capHeight = baseHeight / 3;
  const capPosition: THREE.Vector3Tuple = [position[0], position[1] + baseHeight - capHeight, position[2]];

  const getRadianCoordsFromPixelCoords = (pixelCoords: THREE.Vector2Tuple): THREE.Vector2Tuple => {
    const xRadians = ((pixelCoords[1] / window.innerHeight) * 360 * Math.PI) / 180;
    const yRadians = ((pixelCoords[0] / window.innerWidth) * 360 * Math.PI) / 180;
    return [xRadians, yRadians];
  };

  React.useEffect(() => {
    const radianCoords = getRadianCoordsFromPixelCoords(mouseCoords);
    if (meshGroup.current) {
      meshGroup.current.setRotationFromAxisAngle(axis, radianCoords[1]);
    }
  }, [axis, mouseCoords]);

  const handleMouseMove = (e: MouseEvent) => {
    setMouseCoords([e.clientX, e.clientY]);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, false);
  }, []);

  return (
    <div className={`absolute w-12 h-16 z-10 transform -bottom-4 pointer-events-none ${className}`}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
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
      </Canvas>
    </div>
  );
};
Diamond.displayName = 'Diamond';

export default Diamond;
