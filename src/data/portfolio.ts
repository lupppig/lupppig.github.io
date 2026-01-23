

export const personalInfo = {
	name: 'Darasimi',
	initials: 'Ka',
	role: 'Software Engineer',
	bio: 'Backend Software Engineer expert in Go, Python, and distributed architecture. I build resilient, low-level infrastructure and developer tools that prioritize efficiency and observability. Committed to engineering scalable systems where every architectural decision is backed by data and driven by performance.',
	email: 'kelanidarasimi9@gmail.com',
	socials: {
		github: 'https://github.com/lupppig',
		linkedin: 'https://www.linkedin.com/in/kelani-darasimi/',
		x: 'https://x.com/taffffffffik',
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
	'Prioritize reliability and simplicity over complex abstractions.',
	'Preference for boring, proven technology that solves problems predictably.',
	'Deep focus on observability, failure modes, and system resilience.',
	'Dedicated to building tools that improve the developer experience.',
];

export const navigationLinks = [
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Philosophy', href: '#philosophy' },
	{ name: 'About', href: '#about' },
	{ name: 'Contact', href: '#contact' },
];
