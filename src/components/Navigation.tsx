import { useState, useEffect } from 'react';
import { navigationLinks, personalInfo } from '../data/portfolio';

export const Navigation: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const initials = personalInfo.initials;

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'py-4 glass border-b border-zinc-900/50' : 'py-6 md:py-8'
				}`}
		>
			<div className="max-w-4xl mx-auto px-6 md:px-8 flex justify-between items-center text-zinc-400">
				<div className="text-white font-bold tracking-tighter text-xl z-50 relative">
					<a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-zinc-300 transition-colors">{initials}.</a>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden z-50 text-zinc-400 hover:text-white transition-colors p-2"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<div className="w-6 h-5 relative flex flex-col justify-between">
						<span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
						<span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
						<span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
					</div>
				</button>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex gap-10">
					{navigationLinks.map((link) => (
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

			{/* Compact Mobile Menu Dropdown */}
			<div className={`absolute top-full right-6 mt-2 w-48 glass border border-zinc-800/50 rounded-xl overflow-hidden transition-all duration-300 md:hidden z-50 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
				<div className="flex flex-col py-2">
					{navigationLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={() => setIsMenuOpen(false)}
							className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
						>
							{link.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};
