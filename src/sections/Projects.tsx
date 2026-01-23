import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
	return (
		<Section id="projects">
			<Container>
				<div className="mb-12">
					<h2 className="text-3xl font-bold mb-4">Projects</h2>
					<div className="h-1 w-12 bg-zinc-800"></div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
					{projects.map((project) => (
						<a
							key={project.title}
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="group block p-6 md:p-8 border border-zinc-900 bg-zinc-950/50 flex flex-col h-full transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40"
						>
							<div className="flex justify-between items-start mb-4 md:mb-6">
								<h3 className="text-lg md:text-xl font-bold text-white group-hover:text-white transition-colors">
									{project.title}
								</h3>
								<span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors border border-zinc-800 px-3 py-1">
									GitHub
								</span>
							</div>

							<div className="flex flex-wrap gap-2 mb-4 md:mb-6">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="text-[9px] md:text-[10px] uppercase font-mono tracking-wider text-zinc-500 px-2 py-0.5 border border-zinc-900 bg-zinc-900/30 group-hover:border-zinc-800 transition-colors"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="space-y-4 md:space-y-6 flex-grow">
								<div>
									<span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600 mb-2 block group-hover:text-zinc-400 transition-colors">
										Objective
									</span>
									<p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
										{project.description}
									</p>
								</div>
								<div>
									<span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600 mb-2 block group-hover:text-zinc-400 transition-colors">
										Solution
									</span>
									<p className="text-zinc-500 leading-relaxed text-sm italic group-hover:text-zinc-400 transition-colors">
										{project.problem}
									</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</Container>
		</Section>
	);
};
