import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Octahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { AsciiRenderer } from './AsciiRenderer';

const FloatingSystem = () => {
	const groupRef = useRef<THREE.Group>(null);
	const innerRef = useRef<THREE.Mesh>(null);

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (groupRef.current) {
			groupRef.current.rotation.y = t * 0.1;
			groupRef.current.rotation.z = t * 0.05;
		}
		if (innerRef.current) {
			innerRef.current.rotation.x = -t * 0.4;
			innerRef.current.rotation.y = t * 0.2;
		}
	});

	return (
		<group ref={groupRef}>
			{/* Central Core */}
			<Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
				<Octahedron ref={innerRef} args={[1, 0]} scale={1.2}>
					<MeshDistortMaterial
						color="#3b82f6"
						distort={0.3}
						speed={2}
						roughness={0}
						metalness={1}
						emissive="#1e3a8a"
						emissiveIntensity={0.5}
					/>
				</Octahedron>
			</Float>

			{/* Orbital Rings */}
			<Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
				<Torus args={[2.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
					<meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={2} />
				</Torus>
			</Float>
			<Float speed={1} rotationIntensity={2} floatIntensity={0.8}>
				<Torus args={[3.5, 0.02, 16, 100]} rotation={[0, Math.PI / 4, 0]}>
					<meshStandardMaterial color="#93c5fd" emissive="#3b82f6" emissiveIntensity={1} />
				</Torus>
			</Float>

			{/* Background Distant Elements */}
			<group rotation={[Math.PI / 6, 0, 0]}>
				{[...Array(20)].map((_, i) => (
					<Octahedron
						key={i}
						args={[0.2, 0]}
						position={[
							Math.cos(i * 0.3) * (8 + Math.random() * 5),
							Math.sin(i * 0.3) * (8 + Math.random() * 5),
							(Math.random() - 0.5) * 10
						]}
					>
						<meshStandardMaterial color="#1e40af" transparent opacity={0.3} />
					</Octahedron>
				))}
			</group>
		</group>
	);
};

export const ThreeScene: React.FC = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
			<Canvas camera={{ position: [0, 0, 8], fov: 75 }} gl={{ antialias: false }}>
				<color attach="background" args={['#050505']} />
				<ambientLight intensity={0.2} />
				<pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
				<pointLight position={[-10, -10, -10]} intensity={1} color="#1d4ed8" />
				<pointLight position={[0, 5, -5]} intensity={0.8} color="#60a5fa" />

				<FloatingSystem />

				{/* The Magic ASCII Post-Processing */}
				<AsciiRenderer
					characters=" .:-+*=%@#"
					invert={true}
					color="#3b82f6"
					bgColor="#050505"
				/>
			</Canvas>
		</div>
	);
};
