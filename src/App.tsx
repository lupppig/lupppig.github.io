import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { ThreeScene } from './components/ThreeScene';
import { CustomCursor } from './components/CustomCursor';

function App() {
	return (
		<div className="relative min-h-screen bg-[#050505]">
			{/* High-tech 3D ASCII World */}
			<ThreeScene />

			{/* Overlay Effects */}
			<div className="scanner-line opacity-20" />
			<div className="crt-overlay opacity-10" />

			<main className="relative z-10 max-w-7xl mx-auto">
				<Hero />
				<Projects />
				<Contact />
			</main>
			<CustomCursor />
		</div>
	);
}

export default App;
