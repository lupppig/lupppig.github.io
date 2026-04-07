import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
	return (
		<div className="min-h-screen selection:bg-brand selection:text-white relative bg-grid">
			<main className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-32 relative z-10">
				<Hero />
				<Experience />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
