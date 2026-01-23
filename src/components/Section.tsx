

interface SectionProps {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
	return (
		<section
			id={id}
			className={`py-12 md:py-16 ${className}`}
		>
			{children}
		</section>
	);
};
