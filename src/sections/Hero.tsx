import { personalInfo, primaryTechs, philosophy } from '../data/portfolio';
import { HackerText } from '../components/HackerText';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
	const { scrollY } = useScroll();
	const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [0.3, 0]);

	const asciiLogo = `
██╗     ██╗   ██╗██████╗ ██████╗ ██████╗ ██╗ ██████╗ 
██║     ██║   ██║██╔══██╗██╔══██╗██╔══██╗██║██╔════╝ 
██║     ██║   ██║██████╔╝██████╔╝██████╔╝██║██║  ███╗
██║     ██║   ██║██╔═══╝ ██╔═══╝ ██╔═══╝ ██║██║   ██║
███████╗╚██████╔╝██║     ██║     ██║     ██║╚██████╔╝
╚══════╝ ╚═════╝ ╚═╝     ╚═╝     ╚═╝     ╚═╝ ╚═════╝ 
	`;

	return (
		<section id="home" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
			{/* Top Metadata HUD */}
			<div className="absolute top-12 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex justify-between items-start font-mono text-[10px] text-blue-500/20 uppercase tracking-widest">
				<div className="space-y-1">
					<div>System_Core: v1.0.4-stable</div>
					<div>Memory_Usage: 24% [||........]</div>
				</div>
				<div className="text-right space-y-1">
					<div>Location: 6.5244° N, 3.3792° E</div>
					<div>Uptime: 99.99%</div>
				</div>
			</div>

			<div className="max-w-4xl">
				{/* ASCII Branding - Clickable */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-12 hidden md:block"
				>
					<a
						href={personalInfo.socials.github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block group"
					>
						<pre className="text-[7px] leading-[8px] text-blue-500/80 font-mono drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:text-blue-400 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all cursor-pointer">
							{asciiLogo}
						</pre>
					</a>
				</motion.div>

				{/* Identity */}
				<div className="mb-12">
					<h1 className="text-5xl md:text-8xl mb-2 tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
						<HackerText text={personalInfo.name.toUpperCase()} speed={100} />
					</h1>
					<div className="flex items-center gap-4 text-zinc-500 font-mono text-sm">
						<span className="text-blue-500 animate-pulse">{">"}</span>
						<span className="text-white font-bold tracking-widest bg-blue-500/10 px-2 py-0.5 border border-blue-500/20">{personalInfo.role.toUpperCase()}</span>
						<span className="w-8 h-[1px] bg-zinc-800" />
						<div className="flex gap-2">
							{primaryTechs.map((tech) => (
								<span key={tech.name} className="text-[11px] text-blue-400/80 font-bold uppercase tracking-wider">[{tech.name}]</span>
							))}
						</div>
					</div>
				</div>

				{/* Bio & Philosophy Grid */}
				<div className="grid md:grid-cols-2 gap-16 mt-12 pt-12 border-t border-blue-500/10">
					<div className="bg-blue-500/5 p-6 rounded-lg border border-blue-500/10 backdrop-blur-sm">
						<div className="text-[10px] font-mono text-blue-400 mb-4 uppercase tracking-[0.2em] font-bold">About_Me:</div>
						<p className="text-base md:text-lg text-zinc-100 font-mono leading-tight tracking-tighter">
							{personalInfo.bio}
						</p>
					</div>

					<div className="space-y-6">
						<div className="text-[10px] font-mono text-blue-400 mb-4 uppercase tracking-[0.2em] font-bold">Philosophy:</div>
						<div className="space-y-8">
							{philosophy.slice(0, 2).map((point, i) => (
								<div key={i} className="relative pl-12 group">
									<span className="absolute left-0 top-0 text-blue-400 font-mono text-[10px] bg-blue-500/20 px-2 py-1 border border-blue-500/30 group-hover:bg-blue-500/30 transition-all font-bold">
										0{i + 1}
									</span>
									<p className="text-base md:text-lg text-zinc-100 group-hover:text-blue-300 transition-colors leading-relaxed font-mono tracking-tight">
										{point}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Scroll Indicator - Fades on Scroll */}
			<motion.div
				style={{ opacity: scrollIndicatorOpacity }}
				className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
			>
				<div className="text-[10px] font-mono uppercase tracking-widest text-blue-500/50">Scroll_to_explore</div>
				<div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
			</motion.div>
		</section>
	);
};
