import React from 'react';
import { personalInfo } from '../data/portfolio';

export const Contact: React.FC = () => {
	const links = [
		{ name: 'GitHub', href: personalInfo.socials.github },
		{ name: 'LinkedIn', href: personalInfo.socials.linkedin },
		{ name: 'X', href: personalInfo.socials.x },
		{ name: 'Email', href: `mailto:${personalInfo.email}` },
	];

	return (
		<section id="contact" className="py-24 border-t border-zinc-900/50">
			<div className="grid md:grid-cols-2 gap-16">
				<div className="space-y-6">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
						Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">connect.</span>
					</h2>
					<p className="text-zinc-400 text-lg max-w-sm font-light">
						I'm always open to discussing reliable backend systems, AI workflows, or challenging engineering problems.
					</p>
					<div className="pt-4">
						<a 
							href={`mailto:${personalInfo.email}`}
							className="text-xl font-medium border-b border-brand/50 text-brand hover:border-brand hover:text-blue-400 transition-colors pb-1 inline-block"
						>
							{personalInfo.email}
						</a>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-8 glass-card p-8 rounded-xl">
					{links.map((link) => (
						<div key={link.name} className="flex flex-col gap-2 group">
							<span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{link.name}</span>
							<a 
								href={link.href}
								target={link.name === 'Email' ? undefined : '_blank'}
								rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
								className="text-lg text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
							>
								{link.name === 'Email' ? personalInfo.email.split('@')[0] : link.name}
								<span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand text-sm">↗</span>
							</a>
						</div>
					))}
				</div>
			</div>

			<footer className="mt-32 pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-600 text-xs font-mono tracking-widest uppercase">
				<div>© 2026 {personalInfo.name}</div>
				<div>Resilient Backend <span className="text-zinc-800 mx-2">x</span> Agentic AI</div>
				<div className="flex gap-6">
					<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors py-2 px-4 rounded-full border border-zinc-900 hover:border-zinc-700 hover:bg-zinc-900/50">
						Back to top ↑
					</button>
				</div>
			</footer>
		</section>
	);
};
