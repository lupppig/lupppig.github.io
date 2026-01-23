
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

const projects = [
	{
		title: 'Aether Framework',
		description: 'A high-performance distributed systems framework built with Rust and Go.',
		image: project1,
		tags: ['Rust', 'Go', 'Distributed Systems'],
	},
	{
		title: 'Lumina UI',
		description: 'A minimalist design system focused on accessibility and performance.',
		image: project2,
		tags: ['React', 'TypeScript', 'Tailwind'],
	},
	{
		title: 'Neon DB',
		description: 'Next-generation lightweight document store for edge computing.',
		image: project1, // Reusing for demo
		tags: ['C++', 'Edge Computing', 'Database'],
	},
	{
		title: 'Flux Dev',
		description: 'An AI-powered development assistant for modern workflow automation.',
		image: project2, // Reusing for demo
		tags: ['Python', 'LLM', 'AutoGPT'],
	},
];

export const Projects: React.FC = () => {
	return (
		<Section id="projects">
			<Container>
				<div className="mb-20">
					<h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
					<div className="h-1 w-12 bg-zinc-800"></div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
					{projects.map((project, i) => (
						<div key={i} className="group">
							<div className="aspect-[16/10] bg-surface mb-8 overflow-hidden border border-zinc-900 group-hover:border-zinc-700 transition-all duration-500 grayscale group-hover:grayscale-0">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
								/>
							</div>
							<div className="space-y-4">
								<div className="flex gap-2">
									{project.tags.map(tag => (
										<span key={tag} className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold border border-zinc-800 px-2 py-0.5">
											{tag}
										</span>
									))}
								</div>
								<h3 className="text-2xl font-bold tracking-tight group-hover:text-white transition-colors">
									{project.title}
								</h3>
								<p className="text-secondary leading-relaxed max-w-sm">
									{project.description}
								</p>
								<a href="#" className="inline-block text-xs uppercase tracking-widest font-bold border-b border-zinc-800 pb-1 hover:border-white transition-colors">
									Case Study
								</a>
							</div>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
};
