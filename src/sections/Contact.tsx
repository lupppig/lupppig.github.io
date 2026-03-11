import { personalInfo } from '../data/portfolio';
import { HackerText } from '../components/HackerText';

export const Contact: React.FC = () => {
	const links = [
		{ name: 'GitHub', href: personalInfo.socials.github },
		{ name: 'LinkedIn', href: personalInfo.socials.linkedin },
		{ name: 'Twitter', href: personalInfo.socials.x },
		{ name: 'Email', href: `mailto:${personalInfo.email}` },
	];

	return (
		<section id="contact" className="py-24">
			<div className="px-6 md:px-12 lg:px-24">
				<div className="cyber-border p-8 md:p-12 relative overflow-hidden">
					{/* Decorative background element */}
					<div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-800 pointer-events-none">
						ESTABLISHING_SECURE_LINK...<br />
						ENCRYPTION: AES-256<br />
						HANDSHAKE: COMPLETE
					</div>

					<h2 className="text-xl md:text-2xl mb-8">
						<HackerText text="TERMINATE_SESSION" speed={80} />
					</h2>

					<div className="flex flex-wrap gap-x-12 gap-y-6 mb-12">
						{links.map((link) => (
							<a
								key={link.name}
								href={link.href}
								target={link.name === 'Email' ? undefined : '_blank'}
								rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
								className="group flex flex-col no-underline"
							>
								<span className="text-[10px] text-zinc-500 font-mono mb-1">CONNECT_{link.name.toUpperCase()}</span>
								<span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
									{link.name} {'->'}
								</span>
							</a>
						))}
					</div>

					<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
						<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em]">
							© 2026 {personalInfo.name.replace(' ', '_').toUpperCase()} // ALL_RIGHTS_RESERVED
						</p>
						<div className="flex gap-2">
							<div className="w-1 h-1 bg-zinc-800" />
							<div className="w-1 h-1 bg-zinc-700" />
							<div className="w-1 h-1 bg-zinc-600" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
