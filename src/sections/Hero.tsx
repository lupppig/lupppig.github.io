import { personalInfo, primaryTechs, interests, philosophy } from '../data/portfolio';

const badgeColors = {
	blue: 'bg-blue-500 text-white',
	yellow: 'bg-yellow-500 text-black',
} as const;

export const Hero: React.FC = () => {
	return (
		<section id="home" className="pt-16 md:pt-24 pb-8 md:pb-12">
			<div className="px-6 md:px-12 lg:px-24 xl:px-48">
				{/* Casual intro */}
				<div className="space-y-1 mb-8 text-sm md:text-base leading-relaxed">
					<p className="text-zinc-300">
						yoo this is{' '}
						<span className="text-white font-bold underline underline-offset-4 decoration-zinc-600">
							{personalInfo.name}
						</span>
						, I like to build cool stuff using{' '}
						{primaryTechs.map((tech, i) => (
							<span key={tech.name}>
								<span className={`${badgeColors[tech.color]} px-1.5 py-0.5 rounded text-xs font-bold inline-block`}>
									{tech.name}
								</span>
								{i < primaryTechs.length - 1 && (
									<span className="text-zinc-500">
										{i === primaryTechs.length - 2 ? ' and ' : ' / '}
									</span>
								)}
							</span>
						))}
					</p>
					<p className="text-zinc-400">
						{personalInfo.headline}
					</p>
				</div>

				{/* What I am into */}
				<div className="mb-8">
					<p className="text-zinc-300 text-sm mb-3 font-bold">What I am into :</p>
					<ul className="space-y-1 text-sm text-zinc-400">
						{interests.map((interest) => (
							<li key={interest} className="flex items-center gap-2">
								<span className="text-zinc-600">•</span>
								{interest}
							</li>
						))}
					</ul>
				</div>

				{/* About / Bio paragraph */}
				<div className="space-y-4 text-sm text-zinc-400 leading-relaxed mb-6">
					<p>{personalInfo.bio}</p>
				</div>

				{/* Philosophy — inline */}
				<div className="border-t border-zinc-900 pt-6 mb-2">
					<p className="text-zinc-300 text-sm mb-4 font-bold">How I build :</p>
					<ul className="space-y-3 text-sm text-zinc-500">
						{philosophy.map((point, i) => (
							<li key={i} className="flex gap-3 items-start">
								<span className="text-zinc-700 font-mono text-xs mt-0.5 shrink-0">0{i + 1}</span>
								<span className="text-zinc-400">{point}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
