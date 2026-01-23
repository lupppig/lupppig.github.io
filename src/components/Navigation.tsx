import { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'Projects', href: '#projects' },
		{ name: 'About', href: '#about' },
		{ name: 'Contact', href: '#contact' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass border-b border-zinc-900/50' : 'py-8'
				}`}
		>
			<div className="max-w-4xl mx-auto px-6 md:px-8 flex justify-between items-center text-zinc-400">
				<div className="text-white font-bold tracking-tighter text-xl">
					<a href="#home">AG.</a>
				</div>
				<ul className="flex gap-10">
					{navLinks.map((link) => (
						<li key={link.name}>
							<a
								href={link.href}
								className="text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
