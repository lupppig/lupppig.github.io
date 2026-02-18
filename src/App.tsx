import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { AsciiBackground } from './components/AsciiBackground';
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
		<AsciiBackground>
			<main>
				<div className="reveal"><Hero /></div>
				<div className="reveal"><Projects /></div>
				<div className="reveal"><Contact /></div>
			</main>
		</AsciiBackground>
	);
}

export default App;
