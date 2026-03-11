import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
	const [index, setIndex] = useState(0);

	const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
	const prevProject = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

	return (
		<section id="projects" className="py-24 relative">
			<div className="px-6 md:px-12 lg:px-24 mb-16">
				<div className="text-[10px] font-mono text-blue-500/50 mb-2 uppercase tracking-[0.3em]">
					Sector: 02 // Projects
				</div>
				<h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
					Deployed_Systems
				</h2>
			</div>

			<div className="relative h-[600px] flex items-center justify-center">
				{/* Navigation Controls */}
				<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-24 z-30">
					<button
						onClick={prevProject}
						className="group p-4 bg-blue-500/5 border border-blue-500/20 text-blue-500/50 hover:text-blue-400 hover:border-blue-500/50 transition-all font-mono backdrop-blur-sm"
					>
						<span className="group-hover:tracking-[0.5em] transition-all">{"[ PREV ]"}</span>
					</button>
					<button
						onClick={nextProject}
						className="group p-4 bg-blue-500/5 border border-blue-500/20 text-blue-500/50 hover:text-blue-400 hover:border-blue-500/50 transition-all font-mono backdrop-blur-sm"
					>
						<span className="group-hover:tracking-[0.5em] transition-all">{"[ NEXT ]"}</span>
					</button>
				</div>

				{/* Holographic Project Card */}
				<div className="relative w-full max-w-4xl h-full flex items-center justify-center perspective-[2000px]">
					<AnimatePresence mode="wait">
						<motion.div
							key={index}
							initial={{ opacity: 0, rotateY: 20, z: -100 }}
							animate={{ opacity: 1, rotateY: 0, z: 0 }}
							exit={{ opacity: 0, rotateY: -20, z: -100 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							className="w-[90%] md:w-[700px] bg-blue-500/[0.02] border border-blue-500/10 backdrop-blur-md p-8 md:p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.05)]"
						>
							{/* Decorative Corner Accents */}
							<div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500/30" />
							<div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/30" />
							<div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500/30" />
							<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue-500/30" />

							<div className="flex flex-col h-full">
								<div className="flex justify-between items-start mb-8 pb-8 border-b border-blue-500/10">
									<div>
										<div className="text-[10px] font-mono text-blue-500/40 mb-2 uppercase tracking-widest">
											Build_Index: {index.toString().padStart(2, '0')}
										</div>
										<h3 className="text-3xl md:text-5xl text-white font-black tracking-tighter uppercase glow-text">
											{projects[index].title}
										</h3>
									</div>
									<div className="text-[9px] text-zinc-500 font-mono text-right p-2 border border-zinc-800 bg-zinc-900/50">
										STATUS: <span className="text-blue-500">OPTIMAL</span><br />
										HEALTH: <span className="text-blue-500">100%</span>
									</div>
								</div>

								<div className="grid md:grid-cols-3 gap-8 mb-8">
									<div className="md:col-span-2">
										<p className="text-sm md:text-base text-zinc-400 leading-relaxed font-mono">
											{projects[index].description}
										</p>
									</div>
									<div className="space-y-4">
										<div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Tech_Manifest:</div>
										<div className="flex flex-wrap gap-2">
											{projects[index].tags.map((tag) => (
												<span
													key={tag}
													className="text-[9px] font-mono px-2 py-0.5 border border-blue-500/20 text-blue-400/60 uppercase"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>

								<div className="mt-auto">
									<a
										href={projects[index].github}
										target="_blank"
										rel="noopener noreferrer"
										className="block w-full text-center py-4 bg-blue-500/10 border border-blue-500/30 text-blue-500 text-[10px] font-mono hover:bg-blue-500 hover:text-white transition-all uppercase tracking-[10px] relative group/btn"
									>
										<span className="relative z-10">Access_Source_Core</span>
										<div className="absolute inset-0 bg-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
									</a>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};
