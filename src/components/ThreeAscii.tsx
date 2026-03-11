import React, { useEffect, useState, useRef } from 'react';

export const ThreeAscii: React.FC = () => {
	const [ascii, setAscii] = useState('');
	const frameRef = useRef<number>(0);
	const angleRef = useRef({ A: 0, B: 0 });

	useEffect(() => {
		const renderFrame = () => {
			let { A, B } = angleRef.current;
			const b = [];
			const z = [];
			A += 0.07;
			B += 0.03;
			angleRef.current = { A, B };

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
	}, []);

	return (
		<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-80 backdrop-blur-[1px]">
			<pre className="text-[10px] md:text-[14px] leading-[8px] md:leading-[12px] font-mono text-blue-500/40 whitespace-pre text-center drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
				{ascii}
			</pre>
		</div>
	);
};
