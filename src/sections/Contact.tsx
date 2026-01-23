
import { Container } from '../components/Container';
import { Section } from '../components/Section';

export const Contact: React.FC = () => {
	return (
		<Section id="contact" className="pb-48">
			<Container>
				<div className="max-w-xl">
					<h2 className="text-3xl font-bold mb-10">Inquiry</h2>
					<p className="text-zinc-400 text-xl leading-relaxed mb-16">
						I'm currently open to new opportunities and collaborations.
						If you have a project in mind or just want to discuss the
						future of the web, feel free to reach out.
					</p>
					<div className="space-y-12">
						<div>
							<span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4 block">Email</span>
							<a
								href="mailto:hello@antigravity.dev"
								className="text-2xl md:text-3xl font-bold text-white hover:text-zinc-400 transition-colors"
							>
								hello@antigravity.dev
							</a>
						</div>
						<div className="flex gap-12 pt-8 border-t border-zinc-900">
							{[
								{ name: 'LinkedIn', href: '#' },
								{ name: 'GitHub', href: '#' },
								{ name: 'Twitter', href: '#' },
								{ name: 'Read.cv', href: '#' },
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
