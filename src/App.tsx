import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
	return (
		<div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
			<main className="max-w-5xl mx-auto px-6 py-24 space-y-32">
				<Hero />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
