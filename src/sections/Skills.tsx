import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { skills } from '../data/portfolio';

export const Skills: React.FC = () => {
	return (
		<Section id="skills">
			<Container>
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-4">Skills</h2>
					<div className="h-1 w-12 bg-zinc-800"></div>
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-8">
					{skills.map((group) => (
						<div key={group.category}>
							<h3 className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-4 md:mb-6">
								{group.category}
							</h3>
							<ul className="space-y-3 md:space-y-4">
								{group.items.map((skill) => (
									<li key={skill} className="text-white text-base md:text-lg font-medium tracking-tight">
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
};
