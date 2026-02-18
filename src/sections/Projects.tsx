import { useRef, useEffect } from 'react';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = scrollRef.current;
		if (!container) return;

		let animationId: number;
		let isPaused = false;

		const step = () => {
			if (!isPaused && container) {
				container.scrollLeft += 0.5;

				// When we've scrolled past the first set of cards, jump back seamlessly
				const halfScroll = container.scrollWidth / 2;
				if (container.scrollLeft >= halfScroll) {
					container.scrollLeft = 0;
				}
			}
			animationId = requestAnimationFrame(step);
		};

		const pause = () => { isPaused = true; };
		const resume = () => { isPaused = false; };

		container.addEventListener('mouseenter', pause);
		container.addEventListener('mouseleave', resume);
		container.addEventListener('touchstart', pause);
		container.addEventListener('touchend', resume);

		animationId = requestAnimationFrame(step);

		return () => {
			cancelAnimationFrame(animationId);
			container.removeEventListener('mouseenter', pause);
			container.removeEventListener('mouseleave', resume);
			container.removeEventListener('touchstart', pause);
			container.removeEventListener('touchend', resume);
		};
	}, []);

	// Duplicate cards for seamless infinite scroll
	const allCards = [...projects, ...projects];

	return (
		<section id="projects" className="py-12 md:py-16">
			<div className="px-6 md:px-12 lg:px-24 xl:px-48 mb-6">
				<h2 className="text-xl md:text-2xl font-bold text-white font-mono">
					Projects
				</h2>
			</div>

			<div className="px-6 md:px-12 lg:px-24 xl:px-48">
				<div
					ref={scrollRef}
					className="flex gap-5 overflow-x-hidden no-scrollbar pb-4"
				>
					{allCards.map((project, idx) => (
						<div
							key={`${project.title}-${idx}`}
							className="flex-shrink-0 w-[300px] md:w-[340px] border border-zinc-800/60 bg-zinc-950/50 p-6 flex flex-col group hover:border-zinc-700 transition-colors duration-200"
						>
							<span className="text-[10px] text-zinc-500 font-mono tracking-wider mb-3">
								[ Project ]
							</span>
							<h3 className="text-base md:text-lg font-bold text-white mb-3 font-mono">
								{project.title}
							</h3>
							<p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-grow">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2 mb-5">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 border border-zinc-800 bg-zinc-900/30"
									>
										{tag}
									</span>
								))}
							</div>
							<div className="flex gap-3">
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs font-mono font-bold px-4 py-2 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors duration-200 no-underline"
								>
									View Code →
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
