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
		<section id="contact" className="py-24 border-t border-zinc-900">
			<div className="grid md:grid-cols-2 gap-16">
				<div className="space-y-6">
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's connect.</h2>
					<p className="text-zinc-400 text-lg max-w-sm">
						I'm always open to discussing new projects, backend systems, or potential collaborations.
					</p>
					<div className="pt-4">
						<a 
							href={`mailto:${personalInfo.email}`}
							className="text-xl font-medium border-b border-white/20 hover:border-white transition-colors pb-1"
						>
							{personalInfo.email}
						</a>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-8">
					{links.map((link) => (
						<div key={link.name} className="flex flex-col gap-2">
							<span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">{link.name}</span>
							<a 
								href={link.href}
								target={link.name === 'Email' ? undefined : '_blank'}
								rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
								className="text-lg hover:text-white text-zinc-300 transition-colors"
							>
								{link.name === 'Email' ? personalInfo.email : link.name}
							</a>
						</div>
					))}
				</div>
			</div>

			<footer className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-600 text-xs font-mono tracking-widest uppercase">
				<div>© 2026 {personalInfo.name}</div>
				<div>Built for performance & simplicity</div>
				<div className="flex gap-6">
					<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Back to top ↑</button>
				</div>
			</footer>
		</section>
	);
};
