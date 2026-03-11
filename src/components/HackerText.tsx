import React, { useState, useEffect, useCallback } from 'react';

interface HackerTextProps {
	text: string;
	className?: string;
	speed?: number;
	delay?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export const HackerText: React.FC<HackerTextProps> = ({ text, className, speed = 50, delay = 0 }) => {
	const [displayText, setDisplayText] = useState('');
	const [isAnimating, setIsAnimating] = useState(false);

	const scramble = useCallback(() => {
		let iterations = 0;
		setIsAnimating(true);

		const interval = setInterval(() => {
			setDisplayText(() =>
				text.split('')
					.map((_, index) => {
						if (index < iterations) {
							return text[index];
						}
						return CHARS[Math.floor(Math.random() * CHARS.length)];
					})
					.join('')
			);

			if (iterations >= text.length) {
				clearInterval(interval);
				setIsAnimating(false);
			}

			iterations += 1 / 3;
		}, speed);

		return () => clearInterval(interval);
	}, [text, speed]);

	useEffect(() => {
		const timeout = setTimeout(scramble, delay);
		return () => clearTimeout(timeout);
	}, [scramble, delay]);

	return (
		<span
			className={`${className} ${isAnimating ? 'glitch-text' : ''}`}
			data-text={displayText}
		>
			{displayText}
		</span>
	);
};
