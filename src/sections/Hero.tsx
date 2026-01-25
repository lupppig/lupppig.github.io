import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { personalInfo } from '../data/portfolio';

export const Hero: React.FC = () => {
	return (
		<Section id="home" className="min-h-[50vh] flex items-center pt-32 md:pt-48 bg-background">
			<Container>
				<div className="max-w-2xl">
					<h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
						{personalInfo.name}
					</h1>
					<h2 className="text-lg md:text-xl font-medium tracking-tight text-zinc-400 mb-8 md:mb-10">
						Backend Software Engineer
					</h2>
					<p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-12 md:mb-16 font-mono">
						{personalInfo.headline}
					</p>
					<div className="flex flex-wrap gap-6 md:gap-10 font-mono text-[11px] uppercase tracking-widest font-bold">
						<a
							href={personalInfo.socials.github}
							className="text-zinc-600 hover:text-white transition-colors"
						>
							GitHub
						</a>
						<a
							href={personalInfo.socials.linkedin}
							className="text-zinc-600 hover:text-white transition-colors"
						>
							LinkedIn
						</a>
						<a
							href={`mailto:${personalInfo.email}`}
							className="text-zinc-600 hover:text-white transition-colors"
						>
							Email
						</a>
					</div>
				</div>
			</Container>
		</Section>
	);
};
