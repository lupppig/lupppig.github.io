import React from 'react';

interface AsciiHeaderProps {
	text: string;
	className?: string;
}

export const AsciiHeader: React.FC<AsciiHeaderProps> = ({ text, className = '' }) => {
	// Simple ASCII character mapping or just styling for now
	// For a real "ASCII design" feel, we can use a blocky font or pseudo-ASCII blocks
	return (
		<div className={`font-mono ${className}`}>
			<div className="text-zinc-600 text-[8px] leading-[4px] opacity-80 select-none mb-2">
				{/* Decorative ASCII noise */}
				{Array(3).fill(0).map((_, i) => (
					<div key={i} className="whitespace-nowrap overflow-hidden">
						{Math.random().toString(36).substring(2, 15)}{Math.random().toString(36).substring(2, 15)}
					</div>
				))}
			</div>
			<div className="relative inline-block">
				<span className="absolute -top-4 -left-2 text-[10px] text-blue-500/70 font-bold">{"<TITLE>"}</span>
				<h2 className="text-2xl md:text-5xl font-black tracking-tighter text-white uppercase flex items-center gap-4">
					<span className="text-blue-500">_</span>
					{text}
				</h2>
				<span className="absolute -bottom-2 -right-2 text-[10px] text-blue-500/70 font-bold">{"</TITLE>"}</span>
			</div>
			<div className="mt-2 h-[1px] w-full bg-gradient-to-right from-blue-500/50 to-transparent" />
		</div>
	);
};
