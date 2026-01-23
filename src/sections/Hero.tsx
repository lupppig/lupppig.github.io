import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { personalInfo } from '../data/portfolio';

export const Hero: React.FC = () => {
	return (
		<Section id="home" className="min-h-[50vh] flex items-center pt-8 bg-background">
			<Container>
				<div className="max-w-2xl">
					<h1 className="text-7xl font-bold tracking-tighter text-white mb-4">
						{personalInfo.name}
					</h1>
					<h2 className="text-xl font-medium tracking-tight text-zinc-400 mb-10">
						Backend Software Engineer
					</h2>
					<p className="text-zinc-500 text-lg leading-relaxed mb-16 font-mono">
						Focusing on the architecture of resilient systems, distributed services,
						and the development of internal tooling to streamline software delivery.
					</p>
					<div className="flex gap-10 font-mono text-[11px] uppercase tracking-widest font-bold">
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
