import React, { useEffect, useState, useRef } from 'react';

export const ThreeAscii: React.FC = () => {
	const [ascii, setAscii] = useState('');
	const [isTracking, setIsTracking] = useState(false);
	const frameRef = useRef<number>(0);
	const angleRef = useRef({ A: 0, B: 0 });
	const mouseRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			// Normalize mouse position to range [-1, 1]
			mouseRef.current = {
				x: (e.clientX / window.innerWidth) * 2 - 1,
				y: (e.clientY / window.innerHeight) * 2 - 1
			};
		};

		if (isTracking) {
			window.addEventListener('mousemove', handleMouseMove);
		}

		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [isTracking]);

	useEffect(() => {
		const renderFrame = () => {
			let { A, B } = angleRef.current;

			if (isTracking) {
				// Smoothly interpolate towards mouse position
				// We swap axes and invert to make it feel more direct
				const targetA = mouseRef.current.y * Math.PI * -0.5;
				const targetB = mouseRef.current.x * Math.PI * 0.5;
				A += (targetA - A) * 0.15;
				B += (targetB - B) * 0.15;
			} else {
				// Regular auto-rotation
				A += 0.04;
				B += 0.02;
			}

			angleRef.current = { A, B };

			const b = [];
			const z = [];
			const width = 75;
			const height = 35;

			const sinA = Math.sin(A);
			const cosA = Math.cos(A);
			const sinB = Math.sin(B);
			const cosB = Math.cos(B);

			for (let k = 0; k < width * height; k++) {
				b[k] = " ";
				z[k] = 0;
			}

			// Pre-calculate loop variables for performance
			for (let j = 0; j < 6.28; j += 0.15) {
				const cosj = Math.cos(j);
				const sinj = Math.sin(j);

				for (let i = 0; i < 6.28; i += 0.05) {
					const sini = Math.sin(i);
					const cosi = Math.cos(i);
					const h = cosj + 2;
					const D = 1 / (sini * h * sinA + sinj * cosA + 5);
					const t = sini * h * cosA - sinj * sinA;
					const x = Math.floor(width / 2 + 28 * D * (cosi * h * cosB - t * sinB));
					const y = Math.floor(height / 2 + 14 * D * (cosi * h * sinB + t * cosB));
					const o = x + width * y;
					const N = Math.floor(8 * ((sinj * sinA - sini * cosj * cosA) * cosB - sini * cosj * sinA - sinj * cosA - cosi * cosj * sinB));
					if (height > y && y > 0 && x > 0 && width > x && D > z[o]) {
						z[o] = D;
						b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
					}
				}
			}

			let res = "";
			for (let k = 0; k < width * height; k++) {
				res += k % width === width - 1 ? "\n" : b[k];
			}
			setAscii(res);
			frameRef.current = requestAnimationFrame(renderFrame);
		};

		frameRef.current = requestAnimationFrame(renderFrame);
		return () => cancelAnimationFrame(frameRef.current);
	}, [isTracking]);

	return (
		<div
			className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden"
		>
			<div
				onClick={() => setIsTracking(!isTracking)}
				className={`relative pointer-events-auto cursor-pointer p-8 rounded-full transition-all duration-700 ${isTracking ? 'scale-110' : 'hover:scale-105'}`}
			>
				{/* Visual Indicator */}
				<div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[9px] font-mono text-blue-500/30 animate-pulse whitespace-nowrap bg-black/20 px-2 py-0.5 border border-blue-500/10">
					{isTracking ? "[ MANUAL_OVERRIDE ]" : "[ SYNC_REQUIRED ]"}
				</div>

				<pre className={`text-[10px] md:text-[13px] leading-[8px] md:leading-[10px] font-mono whitespace-pre text-center transition-all duration-700 select-none ${isTracking ? 'text-blue-500/50 opacity-100' : 'text-blue-500/20 opacity-60'} drop-shadow-[0_0_10px_rgba(59,130,246,0.1)]`}>
					{ascii}
				</pre>
			</div>
		</div>
	);
};
