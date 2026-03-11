import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { DynamicAscii } from './components/DynamicAscii';
import { ThreeScene } from './components/ThreeScene';

function App() {
	return (
		<div className="relative min-h-screen">
			{/* High-tech Background Layer */}
			<DynamicAscii />
			<ThreeScene />

			{/* Overlay Effects */}
			<div className="scanner-line" />
			<div className="crt-overlay" />

			<main className="relative z-10 max-w-7xl mx-auto">
				<Hero />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
