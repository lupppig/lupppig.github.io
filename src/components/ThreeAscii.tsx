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
			const width = 80;
			const height = 40;

			for (let k = 0; k < width * height; k++) {
				b[k] = " ";
				z[k] = 0;
			}

			for (let j = 0; j < 6.28; j += 0.07) {
				for (let i = 0; i < 6.28; i += 0.02) {
					const c = Math.sin(i);
					const d = Math.cos(j);
					const e = Math.sin(A);
					const f = Math.sin(j);
					const g = Math.cos(A);
					const h = d + 2;
					const D = 1 / (c * h * e + f * g + 5);
					const l = Math.cos(i);
					const m = Math.cos(B);
					const n = Math.sin(B);
					const t = c * h * g - f * e;
					const x = Math.floor(width / 2 + 30 * D * (l * h * m - t * n));
					const y = Math.floor(height / 2 + 15 * D * (l * h * n + t * m));
					const o = x + width * y;
					const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
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
				<div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] font-mono text-blue-500/60 animate-pulse whitespace-nowrap bg-black/40 px-2 py-1 border border-blue-500/20">
					{isTracking ? "[ MANUAL_OVERRIDE: ACTIVE ]" : "[ SYNC_REQUIRED: CLICK_TO_CONTROL ]"}
				</div>

				{/* Tracking Dot indicator */}
				{isTracking && (
					<div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-ping" />
				)}

				<pre className={`text-[10px] md:text-[14px] leading-[8px] md:leading-[10px] font-mono whitespace-pre text-center transition-all duration-500 select-none ${isTracking ? 'text-blue-400 opacity-100' : 'text-blue-500/30 opacity-80'} drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]`}>
					{ascii}
				</pre>
			</div>
		</div>
	);
};
