import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
	// Duplicate for seamless loop
	const allCards = [...projects, ...projects];

	return (
		<section id="projects" className="py-12 md:py-16">
			<div className="px-6 md:px-12 lg:px-24 xl:px-48 mb-6">
				<h2 className="text-xl md:text-2xl font-bold text-white font-mono">
					Projects
				</h2>
			</div>

			{/* Marquee container */}
			<div className="overflow-hidden">
				<div
					className="flex gap-5 pl-6 md:pl-12 lg:pl-24 xl:pl-48 animate-marquee hover:[animation-play-state:paused]"
					style={{
						width: 'max-content',
					}}
				>
					{allCards.map((project, idx) => (
						<div
							key={`${project.title}-${idx}`}
							className="flex-shrink-0 w-[300px] md:w-[340px] border border-zinc-800/60 bg-zinc-950/50 p-6 flex flex-col group hover:border-zinc-700 transition-colors duration-200"
						>
							<span className="text-[10px] text-zinc-500 font-mono tracking-wider mb-3">
								[ Project ]
							</span>
							<h3 className="text-base md:text-lg font-bold text-white mb-3 font-mono">
								{project.title}
							</h3>
							<p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-grow">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-5">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 border border-zinc-800 bg-zinc-900/30"
									>
										{tag}
									</span>
								))}
							</div>
							<div className="flex gap-3">
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs font-mono font-bold px-4 py-2 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors duration-200 no-underline"
								>
									View Code →
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
