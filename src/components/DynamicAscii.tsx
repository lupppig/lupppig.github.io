import React, { useEffect, useRef } from 'react';

const CHARS = '01{}[]<>/\\|;:,.?!@#$%^&*()_+-=~`abcdefghijklmnopqrstuvwxyz';

export const DynamicAscii: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let width = canvas.width = window.innerWidth;
		let height = canvas.height = window.innerHeight;

		const fontSize = 14;
		const columns = Math.ceil(width / fontSize);
		const drops: number[] = new Array(columns).fill(1).map(() => Math.random() * -100);

		const draw = () => {
			ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
			ctx.fillRect(0, 0, width, height);

			ctx.fillStyle = '#1e1e1e'; // Subtle dark gray for ASCII
			ctx.font = `${fontSize}px JetBrains Mono, monospace`;

			for (let i = 0; i < drops.length; i++) {
				const text = CHARS[Math.floor(Math.random() * CHARS.length)];
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);

				if (drops[i] * fontSize > height && Math.random() > 0.975) {
					drops[i] = 0;
				}
				drops[i]++;
			}
		};

		const interval = setInterval(draw, 33);

		const handleResize = () => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40 z-0"
		/>
	);
};
