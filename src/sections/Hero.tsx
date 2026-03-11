import { personalInfo, primaryTechs, philosophy } from '../data/portfolio';
import { HackerText } from '../components/HackerText';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
	return (
		<section id="home" className="pt-24 pb-12 relative">
			<div className="px-6 md:px-12 lg:px-24">
				{/* Top Metadata */}
				<div className="flex gap-4 mb-12 text-[10px] font-mono text-zinc-500 overflow-hidden">
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
						SYSTEM_CORE: ACTIVE
					</div>
					<div>|</div>
					<div>UPTIME: 99.9%</div>
					<div>|</div>
					<div className="hidden sm:block">LOCAL_TIME: {new Date().toLocaleTimeString()}</div>
				</div>

				{/* Casual intro */}
				<div className="mb-12">
					<h1 className="text-4xl md:text-6xl mb-4 tracking-tighter">
						<HackerText text={personalInfo.name.toUpperCase()} speed={100} />
					</h1>
				</div>

				{/* Tech Stacks */}
				<div className="mb-12">
					<p className="text-zinc-500 text-[10px] font-mono mb-4">LOADED_MODULES:</p>
					<div className="flex flex-wrap gap-3">
						{primaryTechs.map((tech) => (
							<motion.span
								key={tech.name}
								whileHover={{ scale: 1.05, y: -2 }}
								className={`px-3 py-1 text-xs font-bold border border-white/10 cyber-border group hover:border-blue-500/50 transition-all`}
							>
								<span className="text-white group-hover:text-blue-400">{tech.name}</span>
							</motion.span>
						))}
					</div>
				</div>

				{/* Content Grid */}
				<div className="grid md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
					<div>
						<p className="text-zinc-500 text-[10px] font-mono mb-4">PROCESS_BIO:</p>
						<div className="space-y-6">
							<p className="text-sm text-zinc-300 leading-relaxed italic">
								"I build resilient backend systems and the tooling around them — the quiet infrastructure that keeps products running and engineers shipping fast."
							</p>
							<div className="space-y-4 pt-4 border-t border-white/5">
								<p className="text-xs text-blue-400 font-mono italic border-l-2 border-blue-500/30 pl-4">
									"Good engineers ship features. Great engineers build systems that keep shipping without them."
								</p>
								<p className="text-xs text-zinc-500 font-mono italic border-l-2 border-zinc-800 pl-4">
									“The real flex in engineering isn’t complexity — it’s making a system so simple nobody notices how hard it was.”
								</p>
							</div>
						</div>
					</div>
					<div>
						<p className="text-zinc-500 text-[10px] font-mono mb-4">DEPLOYMENT_STRATEGY:</p>
						<ul className="space-y-4">
							{philosophy.map((point, i) => (
								<li key={i} className="flex gap-4 items-start group">
									<span className="text-blue-500 font-mono text-[10px] mt-1 shrink-0 bg-blue-500/10 px-1">0{i + 1}</span>
									<span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed">
										{point}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
