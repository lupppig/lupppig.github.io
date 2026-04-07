import React from 'react';
import { personalInfo, primaryTechs, philosophy } from '../data/portfolio';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
	return (
		<section id="hero" className="flex flex-col justify-center min-h-[75vh] relative py-24">
			{/* Core ambient glow in background */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-glow blur-[120px] rounded-full opacity-10 pointer-events-none" />

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="space-y-12 relative z-10"
			>
				<div>
					<motion.h1 
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-glow"
					>
						{personalInfo.name}.
					</motion.h1>
					<div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-mono text-sm z-10 relative">
						<span className="text-white px-3 py-1 border border-white/20 bg-white/5 backdrop-blur-sm rounded-md font-medium tracking-wide">
							{personalInfo.role}
						</span>
						<span className="hidden md:inline text-zinc-700">•</span>
						<div className="flex gap-4">
							{primaryTechs.map((tech) => (
								<span key={tech.name} className="uppercase tracking-widest text-zinc-400 font-mono text-xs">
									{tech.name}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="max-w-3xl">
					<p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light mb-16">
						{personalInfo.bio}
					</p>

					<div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-zinc-900/50">
						<div className="col-span-full mb-4">
							<h3 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em]">Engineering Philosophy</h3>
						</div>
						{philosophy?.map((point: string, i: number) => {
							const [title, ...rest] = point.split(': ');
							return (
								<motion.div 
									key={i}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + (i * 0.1) }}
									className="flex gap-4 group glass-card p-5 rounded-lg"
								>
									<span className="font-mono text-zinc-600 text-xs mt-1">0{i + 1}</span>
									<div>
										<strong className="text-zinc-200 block mb-1 text-sm">{title}</strong>
										<p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
											{rest.join(': ')}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>

				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className="pt-12"
				>
					<a 
						href="#experience" 
						className="inline-flex items-center gap-3 text-sm font-mono tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-all group border border-zinc-800 hover:border-zinc-500 rounded-full px-6 py-3 bg-zinc-950/50 hover:bg-zinc-900 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
					>
						Explore Work
						<span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};
