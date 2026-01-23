import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Philosophy } from './sections/Philosophy';
import { Contact } from './sections/Contact';
import { useEffect, useRef } from 'react';

function App() {
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				}
			});
		}, { threshold: 0.1 });

		const elements = document.querySelectorAll('.reveal');
		elements.forEach((el) => observerRef.current?.observe(el));

		return () => observerRef.current?.disconnect();
	}, []);

	return (
		<div className="bg-background text-zinc-300">
			<Navigation />
			<main>
				<div className="reveal"><Hero /></div>
				<div className="reveal"><Projects /></div>
				<div className="reveal"><Skills /></div>
				<div className="reveal"><Philosophy /></div>
				<div className="reveal"><About /></div>
				<div className="reveal"><Contact /></div>
			</main>
			<footer className="py-12 border-t border-zinc-900">
				<div className="max-w-4xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-secondary uppercase tracking-widest font-medium text-center md:text-left">
					<p>© 2026 Darasimi</p>
					<p>Build with love lmaooooooooooo</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
