import React from 'react';

export const GlassOverlay: React.FC = () => {
	return (
		<div 
			className="fixed inset-0 pointer-events-none z-[5]"
			style={{
				backdropFilter: 'blur(4px)',
				background: 'radial-gradient(circle at center, rgba(5, 5, 5, 0.4) 0%, rgba(5, 5, 5, 0.7) 100%)',
			}}
		/>
	);
};
