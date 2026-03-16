import React from 'react';
import { personalInfo, primaryTechs, philosophy } from '../data/portfolio';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
	return (
		<section id="hero" className="flex flex-col justify-center min-h-[60vh]">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="space-y-8"
			>
				<div>
					<h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
						{personalInfo.name}.
					</h1>
					<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted font-mono text-sm">
						<span className="text-white px-2 py-0.5 border border-white/20">
							{personalInfo.role}
						</span>
						<span className="hidden md:inline text-zinc-800">•</span>
						<div className="flex gap-3">
							{primaryTechs.map((tech) => (
								<span key={tech.name} className="uppercase tracking-wider">
									{tech.name}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="max-w-2xl">
					<p className="text-xl md:text-2xl leading-relaxed text-zinc-400 mb-12">
						{personalInfo.bio}
					</p>

					<div className="space-y-6 pt-8 border-t border-zinc-900">
						<h3 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em] mb-4">Philosophy</h3>
						{philosophy?.map((point: string, i: number) => (
							<div key={i} className="flex gap-6 group">
								<span className="font-mono text-zinc-700 text-sm">0{i + 1}</span>
								<p className="text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed">
									{point}
								</p>
							</div>
						))}
					</div>
				</div>

				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="pt-4"
				>
					<a 
						href="#projects" 
						className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase hover:text-white transition-colors group"
					>
						Explore work
						<span className="group-hover:translate-x-1 transition-transform">→</span>
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};
