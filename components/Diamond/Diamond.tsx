import * as React from 'react';
import * as THREE from 'three';
import {animated, config, useSpring} from '@react-spring/three';
import {Canvas} from '@react-three/fiber';
import {Color} from 'three';

const RotatingDiamond: React.FC<{
  color: string | number | Color;
  scale?: number;
}> = ({color, scale = 1}) => {
  const [mounted, setMounted] = React.useState(false);
  const [mouseCoords, setMouseCoords] = React.useState<THREE.Vector2Tuple>([0, 0]);
  const meshGroup = React.useRef<THREE.Group>(null);
  const meshColor = new THREE.Color(color);
  const position: THREE.Vector3Tuple = [0, 0, 0];
  const radialSegments = 5;
  const capBottomRadius = 2;
  const capTopRadius = capBottomRadius / 2;
  const baseHeight = 3;
  const capHeight = baseHeight / 3;
  const capPosition: THREE.Vector3Tuple = [position[0], position[1] + baseHeight - capHeight, position[2]];

  const getRadianCoordsFromPixelCoords = (pixelCoords: THREE.Vector2Tuple): THREE.Vector2Tuple => {
    const xRadians = ((pixelCoords[1] / window.innerHeight) * 180 * Math.PI) / 180;
    const yRadians = ((pixelCoords[0] / window.innerWidth) * 180 * Math.PI) / 180;
    return [xRadians, yRadians];
  };

  const handleMouseMove = (e: MouseEvent) => {
    setMouseCoords([e.clientX, e.clientY]);
  };

  React.useEffect(() => {
    setMounted(true);

    window.addEventListener('mousemove', handleMouseMove, false);
  }, []);

  const spring = useSpring({
    rotation: new THREE.Euler(0.45, getRadianCoordsFromPixelCoords(mouseCoords)[1]),
    scale: mounted ? scale : 0,
    config: {
      duration: 300,
      ...config.default,
    },
  });

  return (
    <animated.group ref={meshGroup} rotation={spring.rotation} scale={spring.scale}>
      <mesh position={capPosition}>
        <cylinderGeometry args={[capTopRadius, capBottomRadius, capHeight, radialSegments]} />
        <meshStandardMaterial color={meshColor} transparent opacity={0.9} />
      </mesh>
      <mesh position={position}>
        <cylinderGeometry args={[capBottomRadius, 0, baseHeight, radialSegments]} />
        <meshStandardMaterial color={meshColor} transparent opacity={0.9} />
      </mesh>
    </animated.group>
  );
};

const Diamond: React.FC<{
  color: string | number | Color;
  scale?: number;
  className?: string;
}> = ({color, scale, className}) => {
  return (
    <div className={`absolute w-14 h-16 z-10 transform -bottom-4 pointer-events-none ${className}`}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <RotatingDiamond color={color} scale={scale} />
      </Canvas>
    </div>
  );
};
Diamond.displayName = 'Diamond';

export default Diamond;
