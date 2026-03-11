import { personalInfo, primaryTechs, philosophy } from '../data/portfolio';
import { HackerText } from '../components/HackerText';
import { motion } from 'framer-motion';
import { AsciiBox } from '../components/AsciiBox';
import { AsciiDivider } from '../components/AsciiDivider';

export const Hero: React.FC = () => {
	const asciiLogo = `
  _      _   _ _____ _____ _____ _____ _____ 
 | |    | | | |  __ \\  __ \\  __ \\_   _/ ____|
 | |    | | | | |__) | |__) | |__) || | |  __ 
 | |    | | | |  ___/|  ___/|  ___/ | | | |_ |
 | |____| |_| | |    | |    | |    _| |_|__| |
 |______|\\___/|_|    |_|    |_|   |_____\\____|
	`;

	return (
		<section id="home" className="pt-24 pb-12 relative">
			<div className="px-6 md:px-12 lg:px-24">
				{/* ASCII Branding */}
				<div className="mb-8 overflow-hidden hidden md:block">
					<motion.a
						href={personalInfo.socials.github}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.02, color: '#3b82f6' }}
						className="block cursor-pointer"
					>
						<pre className="text-[6px] leading-[6px] text-blue-500/60 font-mono transition-colors">
							{asciiLogo}
						</pre>
					</motion.a>
				</div>

				{/* Top Metadata */}
				<div className="flex gap-4 mb-12 text-[10px] font-mono text-zinc-500 overflow-hidden">
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
						SYSTEM_CORE: ACTIVE
					</div>
					<AsciiDivider className="w-24 hidden sm:flex" />
					<div className="hidden sm:block">UPTIME: 99.9%</div>
					<AsciiDivider className="w-24 hidden lg:flex" />
					<div className="hidden sm:block">LOCAL_TIME: {new Date().toLocaleTimeString()}</div>
				</div>

				{/* Casual intro */}
				<div className="mb-12">
					<h1 className="text-4xl md:text-8xl mb-4 tracking-tighter">
						<HackerText text={personalInfo.name.toUpperCase()} speed={100} />
					</h1>
					<div className="flex items-center gap-4 text-zinc-500 font-mono text-xs">
						<span className="text-blue-500">{">"}</span>
						<span>{personalInfo.role.toUpperCase()}</span>
						<span className="w-2 h-[1px] bg-zinc-800" />
						<span className="text-zinc-600">v1.0.4-stable</span>
					</div>
				</div>

				{/* Tech Stacks */}
				<div className="mb-12">
					<div className="flex flex-wrap gap-3">
						{primaryTechs.map((tech) => (
							<motion.span
								key={tech.name}
								whileHover={{ scale: 1.05, y: -2 }}
								className={`px-3 py-1 text-xs font-bold border border-white/10 cyber-border group hover:border-blue-500/50 transition-all bg-black/40`}
							>
								<span className="text-white group-hover:text-blue-400">{tech.name}</span>
							</motion.span>
						))}
					</div>
				</div>

				{/* Content Grid */}
				<div className="grid md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
					<div>
						<AsciiBox title="PROCESS_BIO" borderColor="border-blue-500/20">
							<div className="space-y-6">
								<p className="text-sm text-zinc-300 leading-relaxed italic">
									"{personalInfo.bio}"
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
						</AsciiBox>
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
