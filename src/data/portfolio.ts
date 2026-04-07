export const personalInfo = {
	name: 'Darasimi Kelani',
	initials: 'DK',
	role: 'Backend & AI Engineer',
	bio: 'I build resilient backend services and agentic AI systems. Experienced in designing data pipelines, multi-LLM orchestrated workflows, and highly available financial infrastructure.',
	email: 'kelanidarasimi9@gmail.com',
	socials: {
		github: 'https://github.com/lupppig',
		linkedin: 'https://www.linkedin.com/in/kelani-darasimi/',
		x: 'https://x.com/taffffffffik',
		phone: '+2349041563211'
	},
};

export const primaryTechs = [
	{ name: 'Go', color: 'blue' as const },
	{ name: 'Python', color: 'yellow' as const },
	{ name: 'TypeScript', color: 'blue' as const },
];

export const interests = [
	'Agentic Workflows',
	'Distributed Systems',
	'Data Pipelines (ETL/ELT)',
	'Event-Driven Architecture',
	'LLM Orchestration',
	'Infrastructure Reliability',
];

export const experience = [
	{
		company: 'Kredl.ng',
		role: 'Founding Backend Engineer',
		period: 'Jan 2026 - Present',
		description: 'Led the architecture and development of the core backend system as the founding engineer, making independent technical decisions on data models and engineering standards.',
		achievements: [
			'Architected a multi-tenant billing engine with a double-entry ledger system.',
			'Enforced atomic database operations to eliminate race conditions during concurrent payment processing.',
			'Developed custom reconciliation pipelines that structured years of fragmented manual records.',
			'Automated reconciliation between third-party payment gateways and internal ledgers.',
		],
		tech: ['Go', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD']
	},
	{
		company: 'LegalWatchdog',
		role: 'Backend Engineer',
		period: 'Oct 2025 - Feb 2026',
		description: 'Led backend development for an AI-powered legal compliance tool, orchestrating complex mult-step LLM workflows.',
		achievements: [
			'Translated complex regulatory retrieval requirements into a custom RAG pipeline.',
			'Designed multi-step LLM workflows using LangGraph and optimized agent graph structures.',
			'Integrated Celery for async task processing avoiding API blocking bottlenecks.',
			'Architected document storage and retrieval pipelines using MinIO for compliance audit trails.',
		],
		tech: ['Python', 'FastAPI', 'LangGraph', 'Gemini API', 'Celery', 'MinIO']
	},
	{
		company: 'Telex.im',
		role: 'Backend Engineer',
		period: 'Aug 2023 - Aug 2025',
		description: 'Developed and maintained backend services powering real-time messaging features including message delivery and read-state tracking.',
		achievements: [
			'Designed Elasticsearch indexing pipelines reducing search query time from over 2s to under 300ms.',
			'Drove scaling efforts on Go-based microservices to anticipate capacity constraints.',
			'Optimized queue workers and generalized retry logic reducing message event delivery failures.',
		],
		tech: ['Go', 'Python', 'Redis', 'RabbitMQ', 'Elasticsearch', 'NATS']
	},
	{
		company: 'HNG Tech',
		role: 'Backend Mentor (Volunteer)',
		period: '2025 - Present',
		description: 'Mentoring backend engineering interns on building production-grade APIs and distributed systems.',
		achievements: [
			'Led architecture reviews focused on performance, scalability, and clean code practices.',
		],
		tech: ['Architecture', 'Mentorship', 'Code Review']
	}
];

export const projects = [
	{
		title: 'Loafer',
		description: 'Open-source CLI tool for running AI-assisted ETL and ELT pipelines. Orchestrated with LangGraph as a stateful agent graph with conditional retry edges. Supports Gemini, Claude, OpenAI, and Qwen.',
		problem: 'Users can describe transformations in plain English, and Loafer autonomously generates, validates, and executes the transform against data optimally using a strict token schema layer.',
		github: 'https://github.com/lupppig/loafer',
		tags: ['Python', 'LangGraph', 'Gemini', 'LLMs'],
	},
	{
		title: 'Primer',
		description: 'Browser-based tool for designing and stress-testing distributed system architectures under simulated traffic loads.',
		problem: 'Simulates latency, auto-scaling, and failure scenarios in real time with live WebSocket analytics via a distributed engine powered by FastAPI and NATS JetStream.',
		github: 'https://github.com/lupppig/primer',
		tags: ['FastAPI', 'NATS', 'React', 'Simulation'],
	},
	{
		title: 'FX Exchange',
		description: 'Production-grade FX trading backend implementing idempotent transaction processing to safely handle duplicate payment requests.',
		problem: 'Utilizes RBAC and Redis-backed distributed locks to prevent race conditions during rate updates. Uses BIGINT monetary storage to eradicate floating point issues.',
		github: 'https://github.com/lupppig/fx-exchange',
		tags: ['NestJS', 'TypeScript', 'PostgreSQL'],
	},
	{
		title: 'Gexorank',
		description: 'Zero-dependency LexoRank implementation in Go for conflict-safe dynamic ordering of items without full database reindexing.',
		problem: 'Solves large-scale reordering problems common in kanban and task management systems natively.',
		github: 'https://github.com/lupppig/gexorank',
		tags: ['Go', 'Library', 'Algorithms'],
	},
	{
		title: 'Skedulr',
		description: 'Production-grade distributed background task scheduler for Go backed by Redis for at-least-once delivery guarantees.',
		problem: 'Implements heap-based priority queues, dynamic retry policies, DAG chaining on success/failure, and ships with a real-time React dashboard.',
		github: 'https://github.com/lupppig/skedulr',
		tags: ['Go', 'Redis', 'DAGs'],
	},
	{
		title: 'DBackup',
		description: 'Cross-platform CLI tool for automating database backups (PostgreSQL, SQLite, Redis, MySQL) using zero external runtime dependencies.',
		problem: 'Provides scalable scheduled and on-demand backups with configurable retention policies and integrated compression.',
		github: 'https://github.com/lupppig/dbackup',
		tags: ['Go', 'CLI', 'Storage'],
	},
];

export const skills = [
	{ category: 'Languages', items: ['Go', 'Python', 'TypeScript', 'JavaScript'] },
	{ category: 'Backend & Data', items: ['FastAPI', 'Node.js', 'gRPC', 'GraphQL', 'ETL/ELT'] },
	{ category: 'AI & LLMs', items: ['LangGraph', 'RAG', 'Gemini', 'Claude', 'OpenAI'] },
	{ category: 'Infrastructure', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'NATS', 'AWS'] },
];

export const philosophy = [
	'Correctness isn\'t optional: Payment pipelines, ledgers, and data integrations need to work right on every run.',
	'Build for resilience: Systems will fail. Focus on idempotent architectures, clean retries, and comprehensive observability.',
	'Smart AI interfaces: Bridging complex multi-LLM workflows with pragmatic engineering to solve real world schema parsing.',
	'Boring architecture: Simple, transparent systems are the ones that actually stay up through peak scale.',
];
