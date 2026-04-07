import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
	return (
		<section id="projects" className="space-y-16">
			<div>
				<h2 className="text-3xl font-bold tracking-tight mb-2 uppercase text-zinc-500">Selected Work</h2>
				<div className="h-px bg-zinc-800 w-full" />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, scale: 0.98, y: 10 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1, duration: 0.5 }}
						className="group glass-card flex flex-col p-8 rounded-xl h-full"
					>
						<div className="flex justify-between items-start mb-6">
							<h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors duration-300">
								{project.title}
							</h3>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 hover:text-white transition-colors p-2 -mr-2 -mt-2 rounded-full hover:bg-white/5"
								aria-label={`View ${project.title} on GitHub`}
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>
						</div>
						
						<p className="text-zinc-300 text-sm leading-relaxed mb-4">
							{project.description}
						</p>

						<div className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow border-l-2 border-zinc-800 pl-4 py-1 italic">
							{project.problem}
						</div>

						<div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-900/50">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="text-[10px] font-mono px-2 py-1 bg-zinc-950/80 border border-zinc-800/50 text-zinc-400 uppercase tracking-widest rounded-sm"
								>
									{tag}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};
