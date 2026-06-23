export const personal = {
  name: 'Sanket Talaviya',
  headline:
    'Full Stack Engineer building SaaS products, AI workflows, multi-tenant platforms, and data-intensive systems.',
  supporting:
    'I build and scale product systems that power business operations, automate workflows, and solve complex engineering challenges.',
  email: 'hello@sankettalaviya.me',
  linkedin: 'https://www.linkedin.com/in/sankettalaviya/',
  github: 'https://github.com/Sanket4450/',
  resumeUrl: '/resume/sanket-talaviya-resume.pdf',
}

export const impact = [
  {
    label: "Sync Time",
    before: "24+ hours",
    after: "<3 hours",
    description: "Amazon catalog synchronization reduced",
  },
  {
    label: "Lighthouse",
    value: "95+",
    description: "Performance score after migration",
  },
  {
    label: "Architecture",
    value: "Multi-Tenant SaaS",
    description: "Tenant-isolated with dedicated databases",
  },
  {
    label: "AI Workflows",
    value: "Production AI",
    description: "Content generation & outreach automation",
  },
];

export type FeaturedSystem = {
  id: string;
  title: string;
  positioning: string;
  summary: string;
  problem: string;
  responsibilities: string;
  architecture: string;
  highlights: string[];
  challenges: string;
  outcomes: string;
  achievements: string[];
};

export const featuredSystems: FeaturedSystem[] = [
  {
    id: "ai-outreach",
    title: "AI Outreach Platform",
    positioning: "AI-Powered Multi-Tenant Outreach Platform",
    summary:
      "A multi-tenant SaaS platform that enables teams to run AI-powered outreach campaigns with workspace isolation, conversation-centric architecture, and real-time engagement tracking.",
    problem:
      "Sales and outreach teams needed a scalable platform to manage multi-channel outreach campaigns with AI-generated messaging, but existing solutions lacked proper tenant isolation, conversation threading, and intelligent reply handling.",
    responsibilities:
      "Owned the full-stack architecture, designed the multi-tenant data model, built the AI integration pipeline, and implemented the real-time conversation system.",
    architecture:
      "Multi-tenant architecture with workspace-level database isolation, conversation-centric data model, thread-based messaging with AI reply parsing, and real-time engagement tracking via WebSockets.",
    highlights: [
      "Workspace-level tenant isolation",
      "Conversation-centric data architecture",
      "Thread-based messaging system",
      "AI-powered content generation pipeline",
      "Real-time engagement and reply tracking",
      "Intelligent scheduling and follow-up automation",
    ],
    challenges:
      "Building a true conversation-centric architecture that could handle complex threading across multiple channels while maintaining tenant isolation and supporting AI-generated content at scale.",
    outcomes:
      "Delivered a production-ready multi-tenant outreach platform with workspace isolation, AI-powered messaging, and real-time conversation management.",
    achievements: [
      "Designed and implemented workspace-level tenant isolation",
      "Built conversation-centric architecture from scratch",
      "Integrated AI content generation pipeline",
      "Delivered full platform as primary full-stack engineer",
    ],
  },
  {
    id: "categra",
    title: "Categra",
    positioning: "Multi-Channel Product Information Management Platform",
    summary:
      "A comprehensive PIM platform enabling businesses to manage product catalogs across multiple channels with validation, localization, marketplace synchronization, and AI-powered content generation.",
    problem:
      "E-commerce businesses struggled with managing product data across multiple marketplaces. Catalog synchronization to Amazon took 24+ hours, product validation was error-prone, and managing parent-child product relationships was complex.",
    responsibilities:
      "Owned the catalog synchronization system, product validation engine, marketplace integration layer, and AI content generation features.",
    architecture:
      "Event-driven architecture with a rule-based validation engine supporting tens of thousands of business rules, marketplace-specific data transformers, and a product merge system with recovery and rollback capabilities.",
    highlights: [
      "Amazon catalog synchronization",
      "Product validation engine (10,000+ rules)",
      "Parent-child relationship management",
      "Multi-marketplace localization",
      "AI-powered content generation",
      "Product merge system with rollback",
    ],
    challenges:
      "Reducing Amazon catalog sync time from 24+ hours to under 3 hours required a fundamental redesign of the sync pipeline, including batched processing, delta detection, and marketplace-optimized data transformation.",
    outcomes:
      "Reduced sync time by 85%, built a validation engine supporting tens of thousands of rules, and successfully delivered live onboarding for multiple clients.",
    achievements: [
      "Reduced Amazon sync from 24+ hours to under 3 hours",
      "Built validation engine supporting 10,000+ business rules",
      "Designed product merge system with recovery workflows",
      "Delivered successful live client onboarding",
    ],
  },
  {
    id: "cachetag",
    title: "Cachetag",
    positioning: "Content Intelligence & Recommendation Platform",
    summary:
      "A content intelligence platform that ingests content from multiple sources, organizes it with AI, and delivers personalized content recommendations based on user engagement and behavior.",
    problem:
      "Content teams needed a way to aggregate content from disparate sources (Dropbox, RSS feeds), organize it intelligently, and surface relevant content to users based on their behavior patterns.",
    responsibilities:
      "Architected the content ingestion pipeline, built the recommendation engine, implemented the Dropbox and RSS integration, and optimized SEO performance.",
    architecture:
      "Modular ingestion architecture with Dropbox synchronization and RSS feed parsing, a content recommendation engine based on user engagement signals, and an SEO-optimized content delivery layer.",
    highlights: [
      "Dropbox content synchronization",
      "RSS feed ingestion pipeline",
      "Content recommendation engine",
      "User engagement-based recommendations",
      "SEO optimization",
      "Scalable ingestion architecture",
    ],
    challenges:
      "Building a recommendation engine that could process diverse content types and deliver personalized recommendations while maintaining high performance and SEO quality.",
    outcomes:
      "Delivered a scalable content intelligence platform with personalized recommendations, improved SEO performance, and efficient multi-source content ingestion.",
    achievements: [
      "Built scalable content ingestion pipeline",
      "Implemented behavior-based recommendation engine",
      "Achieved strong SEO performance metrics",
      "Delivered personalized content recommendations",
    ],
  },
  {
    id: "iotpot",
    title: "IOTPOT",
    positioning: "Industrial IoT Platform",
    summary:
      "A multi-tenant Industrial IoT platform for real-time device telemetry processing, with MQTT communication, Redis Pub/Sub, WebSocket streaming, and role-based access control.",
    problem:
      "Industrial IoT deployments required a platform that could handle real-time telemetry from thousands of devices, maintain tenant-level data isolation, and provide live dashboards with RBAC.",
    responsibilities:
      "Designed the multi-tenant IoT architecture, implemented MQTT communication layer, built the Redis Pub/Sub and WebSocket real-time pipeline, and implemented RBAC.",
    architecture:
      "Tenant-isolated architecture with MQTT broker integration for device communication, Redis Pub/Sub for telemetry distribution, WebSocket streaming for real-time dashboards, and role-based access control for multi-user access.",
    highlights: [
      "Tenant-level data isolation",
      "MQTT device communication",
      "Redis Pub/Sub telemetry pipeline",
      "WebSocket real-time streaming",
      "Device telemetry processing",
      "Role-based access control",
    ],
    challenges:
      "Ensuring reliable real-time telemetry processing across thousands of devices while maintaining strict tenant data isolation and low-latency dashboard updates.",
    outcomes:
      "Delivered a production IoT platform with real-time telemetry processing, tenant isolation, and live dashboards with role-based access control.",
    achievements: [
      "Implemented MQTT-to-WebSocket real-time pipeline",
      "Designed tenant-isolated multi-tenant architecture",
      "Built RBAC system for multi-user IoT access",
      "Delivered real-time telemetry dashboards",
    ],
  },
];

export const engineeringInterests = [
  "SaaS Platforms",
  "AI Workflows",
  "Multi-Tenant Systems",
  "Event-Driven Architectures",
  "Recommendation Engines",
  "Real-Time Applications",
  "Data Processing Pipelines",
  "Product Infrastructure",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
};

export const experiences: Experience[] = [
  {
    company: "Transcodezy",
    role: "Full Stack Developer",
    period: "Mar 2024 – Present",
  },
  {
    company: "Implies Solution",
    role: "Full Stack Developer",
    period: "Jun 2023 – Mar 2024",
  },
  {
    company: "Object Infotech",
    role: "Backend Developer Trainee",
    period: "Jan 2023 – Jun 2023",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["Node.js", "TypeScript", "NestJS", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Data",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "Docker", "CI/CD", "Nginx"],
  },
  {
    category: "AI",
    skills: ["OpenAI", "Ollama", "AI Workflow Integration"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Systems", href: "#systems" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];