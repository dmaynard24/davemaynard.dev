import * as React from 'react';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
import {Color} from 'three';

const DiamondGroup: React.FC<{
  color: string | number | Color;
  scale?: number;
}> = ({color, scale = 1}) => {
  const [mouseCoords, setMouseCoords] = React.useState<THREE.Vector2Tuple>([0, 0]);
  const meshGroup = React.useRef<THREE.Group>(null);
  const meshGroupRotation = new THREE.Euler(0.45);
  const meshColor = new THREE.Color(color);
  const position: THREE.Vector3Tuple = [0, 0, 0];
  const radialSegments = 5;
  const capBottomRadius = 2 * scale;
  const capTopRadius = capBottomRadius / 2;
  const baseHeight = 3 * scale;
  const capHeight = baseHeight / 3;
  const capPosition: THREE.Vector3Tuple = [position[0], position[1] + baseHeight - capHeight, position[2]];

  const getRadianCoordsFromPixelCoords = (pixelCoords: THREE.Vector2Tuple): THREE.Vector2Tuple => {
    const xRadians = ((pixelCoords[1] / window.innerHeight) * 180 * Math.PI) / 180;
    const yRadians = ((pixelCoords[0] / window.innerWidth) * 180 * Math.PI) / 180;
    return [xRadians, yRadians];
  };

  useFrame(() => {
    const radianCoords = getRadianCoordsFromPixelCoords(mouseCoords);
    [, meshGroup.current.rotation.y] = radianCoords;
  });

  const handleMouseMove = (e: MouseEvent) => {
    setMouseCoords([e.clientX, e.clientY]);
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, false);
  }, []);

  return (
    <group ref={meshGroup} rotation={meshGroupRotation}>
      <mesh position={capPosition}>
        <cylinderGeometry args={[capTopRadius, capBottomRadius, capHeight, radialSegments]} />
        <meshStandardMaterial color={meshColor} transparent opacity={0.9} />
      </mesh>
      <mesh position={position}>
        <cylinderGeometry args={[capBottomRadius, 0, baseHeight, radialSegments]} />
        <meshStandardMaterial color={meshColor} transparent opacity={0.9} />
      </mesh>
    </group>
  );
};

const Diamond: React.FC<{
  color: string | number | Color;
  scale?: number;
  className?: string;
}> = ({color, scale, className}) => {
  return (
    <div className={`absolute w-12 h-16 z-10 transform -bottom-4 pointer-events-none ${className}`}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <DiamondGroup color={color} scale={scale} />
      </Canvas>
    </div>
  );
};
Diamond.displayName = 'Diamond';

export default Diamond;
