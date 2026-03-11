import React from 'react';

interface AsciiDividerProps {
	label?: string;
	className?: string;
	width?: string;
}

export const AsciiDivider: React.FC<AsciiDividerProps> = ({ label, className = '', width = 'w-full' }) => {
	return (
		<div className={`flex items-center gap-2 font-mono text-[10px] text-zinc-400 ${width} ${className}`}>
			<span className="flex-grow border-t border-zinc-700" />
			{label && (
				<span className="px-2 text-zinc-300 bg-zinc-800/80 border border-zinc-600 font-bold">
					[ {label} ]
				</span>
			)}
			<span className="flex-grow border-t border-zinc-700" />
		</div>
	);
};
