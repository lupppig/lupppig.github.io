import { personalInfo } from '../data/portfolio';

export const Contact: React.FC = () => {
	const links = [
		{ name: 'GitHub', href: personalInfo.socials.github },
		{ name: 'LinkedIn', href: personalInfo.socials.linkedin },
		{ name: 'X_Corp', href: personalInfo.socials.x },
		{ name: 'Email_Srv', href: `mailto:${personalInfo.email}` },
	];

	return (
		<section id="contact" className="py-24 relative">
			<div className="px-6 md:px-12 lg:px-24">
				<div className="max-w-4xl mx-auto bg-blue-500/[0.02] border border-blue-500/10 backdrop-blur-md p-8 md:p-16 relative overflow-hidden group">
					{/* Decorative background element */}
					<div className="absolute top-0 right-0 p-8 font-mono text-[8px] text-blue-500/20 pointer-events-none hidden md:block text-right">
						ESTABLISHING_SECURE_LINK...<br />
						ENCRYPTION: AES-256<br />
						HANDSHAKE: COMPLETE<br />
						NODE_ID: LUPPPIG_X2
					</div>

					<div className="mb-16">
						<div className="text-[10px] font-mono text-blue-500/40 mb-2 uppercase tracking-widest">Sector: 03 // Contact</div>
						<h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter glow-text">
							Terminate_Session
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
						{links.map((link) => (
							<a
								key={link.name}
								href={link.href}
								target={link.name.includes('Email') ? undefined : '_blank'}
								rel={link.name.includes('Email') ? undefined : 'noopener noreferrer'}
								className="group flex items-center justify-between p-4 border border-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
							>
								<div className="flex flex-col">
									<span className="text-[9px] text-blue-500/50 font-mono mb-1 tracking-widest uppercase">
										{link.name}
									</span>
									<span className="text-xl font-bold text-zinc-300 group-hover:text-white transition-colors font-mono tracking-tighter">
										{link.name.split('_')[0]}
									</span>
								</div>
								<span className="text-blue-500/30 group-hover:text-blue-500 transition-colors font-mono text-xl">{"[ >> ]"}</span>
							</a>
						))}
					</div>

					<div className="pt-12 border-t border-blue-500/10">
						<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
							<div className="space-y-2">
								<p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em] flex items-center gap-3">
									<span className="w-2 h-2 bg-blue-500/20 rounded-full animate-pulse" />
									© 2026 {personalInfo.name.toUpperCase()} // ALL_SYSTEMS_GO
								</p>
								<div className="text-[8px] text-zinc-600 font-mono">
									DESIGNED_FOR_MAXIMUM_RESILIENCE // V1.0.4-S
								</div>
							</div>

							<div className="flex gap-8 font-mono text-[10px] text-blue-500/40">
								<button className="hover:text-blue-400 hover:tracking-widest transition-all">LOG_OUT</button>
								<button className="hover:text-blue-400 hover:tracking-widest transition-all">SYS_REBOOT</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
