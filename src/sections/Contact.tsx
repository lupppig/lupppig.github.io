import { personalInfo } from '../data/portfolio';

export const Contact: React.FC = () => {
	const links = [
		{ name: 'GitHub', href: personalInfo.socials.github },
		{ name: 'LinkedIn', href: personalInfo.socials.linkedin },
		{ name: 'Twitter', href: personalInfo.socials.x },
		{ name: 'Email', href: `mailto:${personalInfo.email}` },
	];

	return (
		<section id="contact" className="py-16 md:py-24">
			<div className="px-6 md:px-12 lg:px-24 xl:px-48">
				<div className="border-t border-zinc-900 pt-8">
					<div className="flex flex-wrap gap-6 md:gap-10">
						{links.map((link) => (
							<a
								key={link.name}
								href={link.href}
								target={link.name === 'Email' ? undefined : '_blank'}
								rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
								className="text-xs font-mono uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors duration-200 no-underline"
							>
								{link.name}
							</a>
						))}
					</div>
					<p className="text-[10px] text-zinc-700 font-mono mt-8 uppercase tracking-widest">
						© 2026 {personalInfo.name}
					</p>
				</div>
			</div>
		</section>
	);
};
