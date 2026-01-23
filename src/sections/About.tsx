import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { personalInfo } from '../data/portfolio';

export const About: React.FC = () => {
	return (
		<Section id="about">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
					<div className="lg:col-span-12 max-w-2xl">
						<h2 className="text-3xl font-bold mb-6 md:mb-8">About Me</h2>
						<div className="space-y-6 md:space-y-8 text-zinc-400 text-base md:text-lg leading-relaxed">
							<p>
								{personalInfo.bio}
							</p>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};
