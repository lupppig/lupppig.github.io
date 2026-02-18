import { useMemo } from 'react';

const CHARS = '01{}[]<>/\\|;:,.?!@#$%^&*()_+-=~`abcdefghijklmnopqrstuvwxyz';
const COLUMN_WIDTH = 3; // characters per column (reduced)
const ROWS = 120;

function generateColumn(seed: number): string {
	const lines: string[] = [];
	let s = seed;
	for (let i = 0; i < ROWS; i++) {
		let line = '';
		for (let j = 0; j < COLUMN_WIDTH; j++) {
			s = (s * 1103515245 + 12345) & 0x7fffffff;
			line += CHARS[s % CHARS.length];
		}
		lines.push(line);
	}
	return lines.join('\n');
}

interface AsciiBackgroundProps {
	children: React.ReactNode;
}

export const AsciiBackground: React.FC<AsciiBackgroundProps> = ({ children }) => {
	const leftColumn = useMemo(() => generateColumn(42), []);
	const rightColumn = useMemo(() => generateColumn(137), []);

	return (
		<div className="relative min-h-screen overflow-x-hidden">
			{/* Left ASCII panel */}
			<div
				className="fixed top-0 left-0 h-full w-[24px] lg:w-[32px] overflow-hidden pointer-events-none select-none hidden md:block"
				aria-hidden="true"
			>
				<pre
					className="text-[9px] leading-[14px] text-zinc-800/40 font-mono whitespace-pre"
					style={{ letterSpacing: '1px' }}
				>
					{leftColumn}
				</pre>
			</div>

			{/* Right ASCII panel */}
			<div
				className="fixed top-0 right-0 h-full w-[24px] lg:w-[32px] overflow-hidden pointer-events-none select-none hidden md:block"
				aria-hidden="true"
			>
				<pre
					className="text-[9px] leading-[14px] text-zinc-800/40 font-mono whitespace-pre text-right"
					style={{ letterSpacing: '1px' }}
				>
					{rightColumn}
				</pre>
			</div>

			{/* Blue glow orbs */}
			<div className="glow-top" />
			<div className="glow-bottom" />

			{/* Main content */}
			<div className="relative z-10">
				{children}
			</div>
		</div>
	);
};
