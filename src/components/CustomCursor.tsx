import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isVisible, setIsVisible] = useState(true);
	const [isPointer, setIsPointer] = useState(false);

	const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
	const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
			cursorX.set(e.clientX);
			cursorY.set(e.clientY);

			const target = e.target as HTMLElement;
			// Robust check for interactive elements since cursor is forced to 'none' in CSS
			const isClickable = target.tagName === 'A' ||
				target.tagName === 'BUTTON' ||
				target.closest('a') !== null ||
				target.closest('button') !== null ||
				target.getAttribute('role') === 'button' ||
				target.tabIndex === 0;
			setIsPointer(isClickable);
		};

		window.addEventListener('mousemove', updateMousePosition);
		window.addEventListener('mouseenter', () => setIsVisible(true));
		window.addEventListener('mouseleave', () => setIsVisible(false));

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, [cursorX, cursorY]);

	return (
		<motion.div
			className="fixed top-0 left-0 pointer-events-none z-[99999] flex flex-col items-center justify-center p-0 m-0"
			style={{
				x: cursorX,
				y: cursorY,
				opacity: isVisible ? 1 : 0,
				translateX: '-50%',
				translateY: '-50%',
			}}
		>
			<motion.div
				animate={{
					opacity: [1, 0, 1],
					scale: isPointer ? 1.2 : 1,
					backgroundColor: isPointer ? '#ffffff' : '#00f3ff',
					width: isPointer ? '24px' : '12px',
					height: isPointer ? '32px' : '20px',
				}}
				transition={{
					opacity: { repeat: Infinity, duration: 1.0, ease: "steps(2)" },
					scale: { type: 'spring', stiffness: 300, damping: 20 },
					backgroundColor: { duration: 0.2 },
					width: { duration: 0.2 },
					height: { duration: 0.2 }
				}}
				className="shadow-[0_0_20px_rgba(0,243,255,1)] border border-[#00f3ff] relative"
			>
				{/* Solid block fill */}
				<div className="absolute inset-0 bg-[#00f3ff] opacity-40" />
			</motion.div>

			{/* Subtle Coordinate Readout */}
			<motion.div
				animate={{ opacity: isPointer ? 0 : 0.6 }}
				className="mt-6 px-1.5 py-0.5 bg-black/90 border border-[#00f3ff]/40 text-[#00f3ff] font-mono text-[7px] tracking-widest shadow-2xl uppercase"
			>
				LOC_{mousePosition.x}_{mousePosition.y}
			</motion.div>
		</motion.div>
	);
};
