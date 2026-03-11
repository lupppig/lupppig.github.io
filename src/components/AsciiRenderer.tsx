import { useEffect, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
// @ts-ignore
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect';

interface AsciiRendererProps {
	characters?: string;
	invert?: boolean;
	fontSize?: string;
	color?: string;
	bgColor?: string;
}

export const AsciiRenderer: React.FC<AsciiRendererProps> = ({
	characters = ' .:-+*=%@#',
	invert = true,
	fontSize = '12px',
	color = '#3b82f6',
	bgColor = 'transparent',
}) => {
	// Get the main scene, camera, and renderer from Three.js context
	const { size, gl, scene, camera } = useThree();

	// Initialize the AsciiEffect with custom settings
	const effect = useMemo(() => {
		const effect = new AsciiEffect(gl, characters, {
			invert,
			resolution: 0.15, // Adjust for density
		});

		effect.domElement.style.position = 'fixed';
		effect.domElement.style.top = '0px';
		effect.domElement.style.left = '0px';
		effect.domElement.style.width = '100vw';
		effect.domElement.style.height = '100vh';
		effect.domElement.style.pointerEvents = 'none';
		effect.domElement.style.fontSize = fontSize;
		effect.domElement.style.color = color;
		effect.domElement.style.backgroundColor = bgColor;
		effect.domElement.style.zIndex = '0';
		effect.domElement.style.fontFamily = 'JetBrains Mono, monospace';
		effect.domElement.style.opacity = '0.8';

		return effect;
	}, [gl, characters, invert, fontSize, color, bgColor]);

	// Keep the effect size in sync with the window/renderer size
	useEffect(() => {
		effect.setSize(size.width, size.height);
	}, [effect, size]);

	// Append the effect's DOM element to the document and clean up on unmount
	useEffect(() => {
		document.body.appendChild(effect.domElement);
		return () => {
			document.body.removeChild(effect.domElement);
		};
	}, [effect]);

	// Run the specific AsciiEffect render loop instead of the default renderer
	useFrame((_state) => {
		effect.render(scene, camera);
	}, 1); // priority = 1 ensures this runs after other updates

	return null;
};
