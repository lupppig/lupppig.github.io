import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

function App() {
	return (
		<div className="bg-background text-zinc-300">
			<Navigation />
			<main>
				<Hero />
				<Projects />
				<About />
				<Contact />
			</main>
			<footer className="py-12 border-t border-zinc-900">
				<div className="max-w-4xl mx-auto px-6 md:px-8 flex justify-between items-center text-xs text-secondary uppercase tracking-widest font-medium">
					<p>© 2026 Antigravity</p>
					<p>Built with Vite + React</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
