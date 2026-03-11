import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObject = () => {
	const meshRef = useRef<THREE.Mesh>(null);

	useFrame((state) => {
		if (meshRef.current) {
			meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
			meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
		}
	});

	return (
		<Float speed={2} rotationIntensity={1} floatIntensity={1}>
			<Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
				<MeshDistortMaterial
					color="#3b82f6"
					attach="material"
					distort={0.4}
					speed={2}
					roughness={0.2}
					metalness={0.8}
				/>
			</Sphere>
		</Float>
	);
};

export const ThreeScene: React.FC = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
			<Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
				<pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
				<FloatingObject />
			</Canvas>
		</div>
	);
};
