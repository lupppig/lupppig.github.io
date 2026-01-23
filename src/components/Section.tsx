

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
	return (
		<section
			id={id}
			className={`py-24 md:py-32 ${className}`}
		>
			{children}
		</section>
	);
};
