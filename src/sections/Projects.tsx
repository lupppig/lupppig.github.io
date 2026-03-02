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
							className="relative flex-shrink-0 w-[300px] md:w-[340px] border border-zinc-800/60 bg-zinc-950/80 p-6 flex flex-col group hover:-translate-y-2 hover:border-zinc-500/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out overflow-hidden"
						>
							{/* Subtle background glow */}
							<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

							<div className="relative z-10 flex flex-col h-full">
								<div className="flex items-center justify-between mb-4">
									<span className="text-[10px] text-zinc-500 font-mono tracking-wider transition-colors group-hover:text-zinc-400">
										[ // project ]
									</span>
									<span className="flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-zinc-600 opacity-0 group-hover:opacity-75 group-hover:bg-blue-400 transition-all duration-300"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-700 group-hover:bg-blue-500 transition-colors duration-300"></span>
									</span>
								</div>

								<h3 className="text-base md:text-xl font-bold text-white mb-3 font-mono">
									{project.title}
								</h3>

								<p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow transition-colors group-hover:text-zinc-300">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 border border-zinc-800/60 bg-zinc-900/30 transition-colors group-hover:border-zinc-700/80 group-hover:bg-zinc-800/50"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="flex gap-3 mt-auto">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs font-mono font-medium px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 transition-all duration-200 hover:bg-white hover:text-black hover:border-white no-underline text-center w-full"
									>
										View Code →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
