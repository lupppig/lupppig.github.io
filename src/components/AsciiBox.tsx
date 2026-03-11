import React from 'react';

interface AsciiBoxProps {
	children: React.ReactNode;
	title?: string;
	className?: string;
	borderColor?: string;
}

export const AsciiBox: React.FC<AsciiBoxProps> = ({
	children,
	title,
	className = '',
	borderColor = 'border-zinc-800'
}) => {
	return (
		<div className={`relative ${className}`}>
			{/* Top edge */}
			<div className="flex items-center">
				<span className={`text-xs ${borderColor} font-bold`}>+</span>
				<div className={`flex-grow border-t ${borderColor} mx-0.5 flex items-center`}>
					{title && (
						<span className="px-2 text-[9px] font-mono text-blue-500 bg-black/50 -mt-[1px] font-bold">
							{title}
						</span>
					)}
				</div>
				<span className={`text-xs ${borderColor} font-bold`}>+</span>
			</div>

			{/* Content with side borders */}
			<div className={`border-l border-r ${borderColor} mx-[3px] px-4 py-4 bg-black/40 backdrop-blur-sm`}>
				{children}
			</div>

			{/* Bottom edge */}
			<div className="flex items-center">
				<span className={`text-xs ${borderColor}`}>+</span>
				<div className={`flex-grow border-t ${borderColor} border-dashed mx-0.5`} />
				<span className={`text-xs ${borderColor}`}>+</span>
			</div>

			{/* Corner decorations */}
			<div className="absolute -top-[1px] -left-[1px] w-1 h-1 bg-blue-500/20" />
			<div className="absolute -top-[1px] -right-[1px] w-1 h-1 bg-blue-500/20" />
			<div className="absolute -bottom-[1px] -left-[1px] w-1 h-1 bg-blue-500/20" />
			<div className="absolute -bottom-[1px] -right-[1px] w-1 h-1 bg-blue-500/20" />
		</div>
	);
};
