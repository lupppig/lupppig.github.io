
import { Container } from '../components/Container';
import { Section } from '../components/Section';

const skills = [
	{ category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Next.js'] },
	{ category: 'Backend', items: ['Node.js', 'Go', 'Rust', 'PostgreSQL'] },
	{ category: 'Tools', items: ['Docker', 'AWS', 'Vercel', 'Git'] },
];

export const About: React.FC = () => {
	return (
		<Section id="about">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
					<div className="lg:col-span-7">
						<h2 className="text-3xl font-bold mb-10">Context</h2>
						<div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
							<p>
								I am a software engineer based in the digital ethereal, building
								tools that bridge the gap between complex engineering and
								human-centric design.
							</p>
							<p>
								My approach is rooted in simplicity and efficiency. I believe that
								the best code is not just functional, but also beautiful and
								maintainable. I specialize in the modern web stack, specifically
								pushing the boundaries of what's possible with React and TypeScript.
							</p>
							<p>
								When I'm not coding, I'm usually exploring the depths of systems design
								or experimenting with abstract digital art.
							</p>
						</div>
					</div>
					<div className="lg:col-span-5">
						<h3 className="text-sm uppercase tracking-widest font-bold text-zinc-500 mb-10">Technical Stack</h3>
						<div className="space-y-12">
							{skills.map((skill) => (
								<div key={skill.category}>
									<h4 className="text-white font-bold mb-4 flex items-center gap-4">
										<span className="w-4 h-px bg-zinc-800"></span>
										{skill.category}
									</h4>
									<ul className="flex flex-wrap gap-x-6 gap-y-3">
										{skill.items.map((item) => (
											<li key={item} className="text-zinc-500 text-sm font-medium">
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
};
