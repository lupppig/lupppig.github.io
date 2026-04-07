import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

export const Experience: React.FC = () => {
	return (
		<section id="experience" className="space-y-16">
			<div>
				<h2 className="text-3xl font-bold tracking-tight mb-2 uppercase text-zinc-500">Experience</h2>
				<div className="h-px bg-zinc-800 w-full" />
			</div>

			<div className="space-y-12">
				{experience.map((job, index) => (
					<motion.div
						key={`${job.company}-${index}`}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className="relative pl-8 md:pl-0"
					>
						{/* Desktop timeline line */}
						<div className="hidden md:block absolute left-[-24px] top-0 bottom-0 w-px bg-zinc-800" />

						<div className="flex flex-col md:flex-row gap-4 md:gap-12 group">
							<div className="md:w-1/4 shrink-0 font-mono text-sm text-zinc-500 pt-1 relative md:pl-0">
								{/* Timeline node */}
								<div className="absolute left-[-36px] top-2.5 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors hidden md:block" />
								{job.period}
							</div>
							
							<div className="md:w-3/4 space-y-4">
								<div>
									<h3 className="text-xl font-bold text-white group-hover:text-glow transition-all">
										{job.role} <span className="text-zinc-500 font-normal">at</span> {job.company}
									</h3>
								</div>
								
								<p className="text-zinc-400 leading-relaxed text-sm">
									{job.description}
								</p>

								<ul className="space-y-2 text-zinc-400 text-sm leading-relaxed list-disc list-outside ml-4">
									{job.achievements.map((achievement, i) => (
										<li key={i} className="pl-1 text-zinc-300">{achievement}</li>
									))}
								</ul>

								<div className="flex flex-wrap gap-2 pt-2">
									{job.tech.map((tech) => (
										<span
											key={tech}
											className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 uppercase tracking-wider rounded-sm group-hover:border-zinc-700 transition-colors"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};
