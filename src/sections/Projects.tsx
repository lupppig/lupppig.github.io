import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { HackerText } from '../components/HackerText';

export const Projects: React.FC = () => {
	const [index, setIndex] = useState(0);

	const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
	const prevProject = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

	return (
		<section id="projects" className="py-24 relative overflow-hidden">
			<div className="px-6 md:px-12 lg:px-24 mb-12">
				<h2 className="text-2xl md:text-3xl mb-2">
					<HackerText text="DEPLOYED_SYSTEMS" speed={80} />
				</h2>
				<div className="h-1 w-24 bg-blue-500/50" />
			</div>

			<div className="relative h-[450px] flex items-center justify-center">
				<div className="absolute inset-0 flex items-center justify-between px-4 md:px-20 z-20 pointer-events-none">
					<button
						onClick={prevProject}
						className="p-4 bg-zinc-900/50 border border-white/10 text-white hover:bg-white hover:text-black transition-all pointer-events-auto"
					>
						&lt;
					</button>
					<button
						onClick={nextProject}
						className="p-4 bg-zinc-900/50 border border-white/10 text-white hover:bg-white hover:text-black transition-all pointer-events-auto"
					>
						&gt;
					</button>
				</div>

				<div className="relative w-full max-w-4xl h-full perspective-[1000px]">
					<AnimatePresence mode="wait">
						<motion.div
							key={index}
							initial={{ opacity: 0, rotateY: 45, x: 200 }}
							animate={{ opacity: 1, rotateY: 0, x: 0 }}
							exit={{ opacity: 0, rotateY: -45, x: -200 }}
							transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
							className="absolute inset-0 m-auto w-[90%] md:w-[600px] h-[400px] cyber-border p-8 flex flex-col group"
						>
							<div className="flex justify-between items-start mb-6">
								<div>
									<div className="text-[10px] text-blue-400 font-mono mb-1">
										PROJECT_ID: {index.toString().padStart(3, '0')}
									</div>
									<h3 className="text-xl md:text-3xl text-white">
										{projects[index].title}
									</h3>
								</div>
								<div className="text-[10px] text-zinc-500 font-mono text-right">
									STATUS: STABLE<br />
									PHASE: PRODUCTION
								</div>
							</div>

							<p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-8 flex-grow">
								{projects[index].description}
							</p>

							<div className="flex flex-wrap gap-2 mb-8">
								{projects[index].tags.map((tag) => (
									<span
										key={tag}
										className="text-[9px] font-mono px-2 py-0.5 border border-white/5 bg-white/5 text-zinc-400 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="flex gap-4">
								<a
									href={projects[index].github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 text-center py-3 bg-white text-black text-xs font-bold hover:bg-blue-500 hover:text-white transition-all uppercase tracking-widest"
								>
									Access Source
								</a>
							</div>

							{/* Decorative elements */}
							<div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-blue-500/30 group-hover:border-blue-500 transition-colors" />
							<div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-blue-500/30 group-hover:border-blue-500 transition-colors" />
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};
