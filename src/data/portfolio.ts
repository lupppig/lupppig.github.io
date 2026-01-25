

export const personalInfo = {
	name: 'Darasimi',
	initials: 'Ka',
	role: 'Software Engineer',
	headline: 'I love to build resilient systems and the internal tools that make shipping code a lot easier',
	bio: 'I specialize in building tough, reliable architecture and the behind-the-scenes tools that keep everything running smoothly. I enjoy taking the complexity out of distributed systems so that delivering software is faster and less stressful for everyone.',
	email: 'kelanidarasimi9@gmail.com',
	socials: {
		github: 'https://github.com/lupppig',
		linkedin: 'https://www.linkedin.com/in/kelani-darasimi/',
		x: 'https://x.com/taffffffffik',
		phone: '+2349041563211'
	},
};

export const projects = [
	{
		title: 'notifyctl',
		description: 'A CLI-driven, gRPC-only notification and webhook delivery platform.',
		problem: 'Simplifies reliable event delivery by providing delivery guarantees, retries, and backoff handling with real-time status monitoring.',
		github: 'https://github.com/lupppig/notifyctl',
		tags: ['Go', 'gRPC', 'NATS', 'Docker'],
	},
	{
		title: 'go-dispatcher',
		description: 'A scalable job dispatcher implementing the worker pool pattern in Go.',
		problem: 'Manages high-concurrency background workloads by pooling resources, preventing system exhaustion, and providing observability.',
		github: 'https://github.com/lupppig/go-dispatcher',
		tags: ['Go', 'Concurrency', 'Worker Pool'],
	},
	{
		title: 'cachio',
		description: 'An HTTP caching library for Python supporting in-memory and persistent disk storage.',
		problem: 'Reduces redundant network latency and bandwidth usage by caching full HTTP responses with an integrated LRU eviction strategy.',
		github: 'https://github.com/lupppig/cachio',
		tags: ['Python', 'Caching', 'uv'],
	},
];

export const skills = [
	{ category: 'Languages', items: ['Golang', 'Python', 'TypeScript', 'SQL'] },
	{ category: 'Backend & Infra', items: ['gRPC', 'REST APIs', 'Docker', 'CI/CD'] },
	{ category: 'Databases', items: ['PostgreSQL', 'MySQL', 'Redis'] },
	{ category: 'Tooling', items: ['Linux', 'Git'] },
];

export const philosophy = [
	'Simple over clever: I build for readability and maintenance, not to show off complexity.',
	'Proven over hype: I use reliable, "boring" tech because it’s stable and gets the job done.',
	'Design for failure: I assume things will break, so I build systems that are easy to watch and quick to fix.',
	'Built for humans: I create tools and documentation that make life easier for the people using them',
];

export const navigationLinks = [
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Philosophy', href: '#philosophy' },
	{ name: 'About', href: '#about' },
	{ name: 'Contact', href: '#contact' },
];
