
import { Container } from '../components/Container';
import { Section } from '../components/Section';

export const Hero: React.FC = () => {
	return (
		<Section id="home" className="min-h-screen flex items-center pt-32">
			<Container>
				<div className="max-w-3xl">
					<span className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold mb-8 block">
						Software Engineer & Designer
					</span>
					<h1 className="text-6xl md:text-8xl font-bold mb-10 leading-[0.9] tracking-tighter text-white">
						Crafting the <br />
						digital <span className="text-zinc-500 italic">void.</span>
					</h1>
					<p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-16 max-w-xl font-medium">
						Building minimal, high-performance web applications with a focus on
						clean architecture and exceptional user experiences.
					</p>
					<div className="flex flex-wrap gap-8 items-center">
						<a
							href="#projects"
							className="px-10 py-5 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all"
						>
							Selected Work
						</a>
						<a
							href="#contact"
							className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-zinc-300"
						>
							Get in touch
							<span className="w-8 h-px bg-zinc-700 group-hover:w-12 transition-all"></span>
						</a>
					</div>
				</div>
			</Container>
		</Section>
	);
};
