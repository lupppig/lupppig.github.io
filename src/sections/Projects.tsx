import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { AsciiHeader } from '../components/AsciiHeader';
import { AsciiBox } from '../components/AsciiBox';

export const Projects: React.FC = () => {
	const [index, setIndex] = useState(0);

	const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
	const prevProject = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

	return (
		<section id="projects" className="py-24 relative overflow-hidden">
			<div className="px-6 md:px-12 lg:px-24 mb-16">
				<AsciiHeader text="DEPLOYED_SYSTEMS" />
			</div>

			<div className="relative h-[500px] flex items-center justify-center">
				<div className="absolute inset-0 flex items-center justify-between px-4 md:px-20 z-20 pointer-events-none">
					<button
						onClick={prevProject}
						className="p-4 bg-zinc-900/50 border border-zinc-800 text-zinc-500 hover:text-blue-500 hover:border-blue-500 transition-all pointer-events-auto font-mono text-xl"
					>
						{"[ < ]"}
					</button>
					<button
						onClick={nextProject}
						className="p-4 bg-zinc-900/50 border border-zinc-800 text-zinc-500 hover:text-blue-500 hover:border-blue-500 transition-all pointer-events-auto font-mono text-xl"
					>
						{"[ > ]"}
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
							className="absolute inset-0 m-auto w-[90%] md:w-[650px] h-fit"
						>
							<AsciiBox title={`PROJECT_ID: ${index.toString().padStart(3, '0')}`} borderColor="border-blue-500/20">
								<div className="p-4 flex flex-col group">
									<div className="flex justify-between items-start mb-8">
										<div>
											<h3 className="text-2xl md:text-4xl text-white font-black tracking-tighter">
												{projects[index].title.toUpperCase()}
											</h3>
										</div>
										<div className="text-[9px] text-zinc-500 font-mono text-right border-l border-zinc-800 pl-4">
											STATUS: <span className="text-blue-500">STABLE</span><br />
											PHASE: <span className="text-blue-500">PROD</span>
										</div>
									</div>

									<p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-8 min-h-[80px]">
										{projects[index].description}
									</p>

									<div className="flex flex-wrap gap-2 mb-8">
										{projects[index].tags.map((tag) => (
											<span
												key={tag}
												className="text-[9px] font-mono px-2 py-0.5 border border-zinc-800 bg-zinc-900/50 text-zinc-500 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors"
											>
												# {tag}
											</span>
										))}
									</div>

									<div className="flex gap-4">
										<a
											href={projects[index].github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 text-center py-4 bg-blue-500/10 border border-blue-500/30 text-blue-500 text-[10px] font-mono hover:bg-blue-500 hover:text-white transition-all uppercase tracking-[4px]"
										>
											{">>> EXECUTE_ACCESS_SOURCE"}
										</a>
									</div>
								</div>
							</AsciiBox>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};
