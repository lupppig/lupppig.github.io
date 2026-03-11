import { personalInfo } from '../data/portfolio';
import { AsciiHeader } from '../components/AsciiHeader';
import { AsciiBox } from '../components/AsciiBox';
import { AsciiDivider } from '../components/AsciiDivider';

export const Contact: React.FC = () => {
	const links = [
		{ name: 'GitHub', href: personalInfo.socials.github },
		{ name: 'LinkedIn', href: personalInfo.socials.linkedin },
		{ name: 'Twitter', href: personalInfo.socials.x },
		{ name: 'Email', href: `mailto:${personalInfo.email}` },
	];

	return (
		<section id="contact" className="py-24">
			<div className="px-6 md:px-12 lg:px-24">
				<AsciiBox title="COMM_LINK" borderColor="border-zinc-800">
					<div className="p-4 md:p-8 relative overflow-hidden">
						{/* Decorative background element */}
						<div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-800 pointer-events-none hidden md:block">
							ESTABLISHING_SECURE_LINK...<br />
							ENCRYPTION: AES-256<br />
							HANDSHAKE: COMPLETE
						</div>

						<div className="mb-12">
							<AsciiHeader text="TERMINATE_SESSION" className="scale-75 origin-left" />
						</div>

						<div className="flex flex-wrap gap-x-16 gap-y-10 mb-16">
							{links.map((link) => (
								<a
									key={link.name}
									href={link.href}
									target={link.name === 'Email' ? undefined : '_blank'}
									rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
									className="group flex flex-col no-underline relative"
								>
									<span className="text-[9px] text-blue-500/50 font-mono mb-2 flex items-center gap-2">
										<span className="w-1 h-1 bg-blue-500/30" />
										CONNECT_{link.name.toUpperCase()}
									</span>
									<span className="text-lg md:text-xl font-black text-white group-hover:text-blue-500 transition-all font-mono tracking-tighter">
										{link.name.toUpperCase()} <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">{"->"}</span>
									</span>
									<div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
								</a>
							))}
						</div>

						<div className="pt-8">
							<AsciiDivider label="SYSTEM_FOOTER" className="mb-8" />
							<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
								<p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em] flex items-center gap-3">
									<span className="w-2 h-2 bg-blue-500/20 rounded-full" />
									© 2026 {personalInfo.name.replace(' ', '_').toUpperCase()} // BUILD_SUCCESS
								</p>
								<div className="flex gap-4 font-mono text-[9px] text-zinc-600">
									<span className="hover:text-blue-500 cursor-pointer">/LOG_OUT</span>
									<span className="hover:text-blue-500 cursor-pointer">/REBOOT</span>
								</div>
							</div>
						</div>
					</div>
				</AsciiBox>
			</div>
		</section>
	);
};
