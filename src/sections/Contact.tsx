import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { personalInfo } from '../data/portfolio';

export const Contact: React.FC = () => {
	return (
		<Section id="contact" className="pb-48">
			<Container>
				<div className="max-w-xl">
					<h2 className="text-3xl font-bold mb-6 md:mb-8">Inquiry</h2>
					<p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 md:mb-12">
						I am available for technical discussions or collaboration on
						backend infrastructure and distributed systems.
					</p>
					<div className="space-y-10 md:space-y-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
							<div>
								<span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4 block">Email</span>
								<a
									href={`mailto:${personalInfo.email}`}
									className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-zinc-400 transition-colors break-all md:break-normal"
								>
									{personalInfo.email}
								</a>
							</div>
							<div>
								<span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4 block">WhatsApp & Call</span>
								<a
									href={`https://wa.me/${personalInfo.socials.phone.replace('+', '')}`}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-zinc-400 transition-colors"
								>
									{personalInfo.socials.phone}
								</a>
							</div>
						</div>
						<div className="flex flex-wrap gap-x-8 gap-y-6 pt-8 border-t border-zinc-900">
							{[
								{ name: 'LinkedIn', href: personalInfo.socials.linkedin },
								{ name: 'GitHub', href: personalInfo.socials.github },
								{ name: 'Twitter', href: personalInfo.socials.x },
							].map((link) => (
								<a
									key={link.name}
									href={link.href}
									className="text-xs uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors"
								>
									{link.name}
								</a>
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};
