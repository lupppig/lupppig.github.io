import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { philosophy } from '../data/portfolio';

export const Philosophy: React.FC = () => {
	return (
		<Section id="philosophy">
			<Container>
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-4">Philosophy</h2>
					<div className="h-1 w-12 bg-zinc-800"></div>
				</div>
				<div className="max-w-xl">
					<ul className="space-y-8 md:space-y-10">
						{philosophy.map((point, index) => (
							<li key={index} className="flex gap-4 md:gap-6 items-start">
								<span className="text-zinc-800 font-mono text-base md:text-lg mt-1">0{index + 1}</span>
								<p className="text-zinc-400 text-base md:text-lg leading-relaxed">
									{point}
								</p>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</Section>
	);
};
