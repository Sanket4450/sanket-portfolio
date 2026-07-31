import { Experience, FeaturedSystem, SkillGroup } from '@/types/index.type'

export const personal = {
  name: 'Sanket Talaviya',
  nickName: 'Sanket',
  lastName: 'Talaviya',
  designation: 'Full Stack Engineer',
  headline:
    'Full Stack Engineer building scalable SaaS products, AI-powered applications, and data-intensive systems.',
  supporting:
    'I design and build production software that helps businesses scale operations, automate complex workflows, and turn large volumes of data into reliable products.',
  email: 'hello@sankettalaviya.me',
  website: 'https://sankettalaviya.me',
  linkedin: 'https://www.linkedin.com/in/sankettalaviya',
  github: 'https://github.com/Sanket4450',
  resumeUrl: '/sanket_talaviya_resume.pdf',
  profileImage: '/profile-image.png',
  metaDataImage: 'https://sankettalaviya.me/profile-image.png',
}

export const expertise = [
  'SaaS',
  'AI Workflows',
  'Multi-Tenant Architecture',
  'System Design',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'Event-Driven Architecture',
  'Real-Time Systems',
  'Product Engineering',
]

export const metaKeywords = [
  personal.name,
  personal.designation,
  'Software Engineer',
  'SaaS Engineer',
  'AI Engineer',
  'Node.js Developer',
  'TypeScript Developer',
  'NestJS',
  'Next.js',
  'Backend Engineer',
  'System Design',
  'PostgreSQL',
  'Product Engineer',
  'Multi-Tenant Systems',
  'AI Workflows',
]

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const impact = [
  {
    label: 'Sync Time',
    before: '24+ hours',
    after: '<3 hours',
    description: 'Amazon catalog synchronization reduced',
  },
  {
    label: 'Lighthouse',
    value: '95+',
    description: 'Performance score after migration',
  },
  {
    label: 'Architecture',
    value: 'Multi-Tenant SaaS',
    description: 'Tenant-isolated with dedicated databases',
  },
  {
    label: 'AI Workflows',
    value: 'Production AI',
    description: 'Content generation & outreach automation',
  },
]

export const experienceSection = {
  eyebrow: 'Experience',
  title: 'Building scalable software that powers real businesses.',
  description:
    "I've built production systems for e-commerce, AI, IoT, healthcare, logistics, and content platforms, focusing on scalable architecture, intelligent automation, and reliable engineering.",
}

export const experiences: Experience[] = [
  {
    company: 'Transcodezy IT Solutions',
    role: 'Full Stack Developer',
    duration: 'Jul 2025 — Present',
    summary:
      'Building enterprise Product Information Management (PIM) systems that synchronize large-scale product catalogs across Amazon marketplaces using automation, AI-assisted workflows, and distributed synchronization pipelines.',

    projects: [
      {
        name: 'Categra',
        description:
          'Enterprise Product Information Management platform for centralized catalog management, Amazon marketplace synchronization, and AI-assisted product workflows.',
      },
    ],

    highlights: [
      'Owned end-to-end synchronization architecture for Amazon products, variants, inventory, pricing, catalogs, and orders across multiple marketplaces.',
      'Built a validation engine capable of evaluating product data against Amazon product-type schemas containing tens of thousands of validation rules before publication.',
      'Designed parent-child product relationship management and marketplace-aware localization workflows supporting regional catalogs and product variations.',
      'Developed AI-assisted product content generation, intelligent attribute recommendations, and enterprise catalog management workflows that significantly reduced manual effort.',
      'Engineered synchronization monitoring, retry handling, rollback, recovery, comparison, and change-tracking mechanisms to improve reliability of large-scale synchronization pipelines.',
      'Reduced Amazon catalog synchronization time from over 12 hours to under 2 hours through architectural optimization and successfully delivered production-ready synchronization during a live enterprise customer onboarding.',
    ],

    technologies: [
      {
        category: 'Backend',
        items: ['NestJS', 'Node.js', 'TypeScript'],
      },
      {
        category: 'Frontend',
        items: ['Next.js'],
      },
      {
        category: 'Data',
        items: ['PostgreSQL', 'Sequelize', 'Redis', 'BullMQ'],
      },
      {
        category: 'Cloud',
        items: ['Amazon S3', 'Amazon SQS', 'Amazon EC2'],
      },
      {
        category: 'AI',
        items: ['Google Gemini', 'OpenAI API'],
      },
      {
        category: 'Infrastructure',
        items: ['Docker'],
      },
    ],
  },

  {
    company: 'Implies Solution',
    role: 'Full Stack Developer',
    duration: 'Jun 2024 — Jul 2025',
    summary:
      'Designed and developed SaaS products across content management, IoT, logistics, and healthcare, contributing to system architecture, backend engineering, and end-to-end product delivery.',

    projects: [
      {
        name: 'Cachetag',
        description:
          'Content aggregation and knowledge management platform for collecting, organizing, recommending, and managing large-scale external content.',
      },
      {
        name: 'IOTPOT',
        description:
          'Multi-tenant IoT platform supporting telemetry processing, tenant isolation, and real-time device communication.',
      },
      {
        name: 'Logipsum',
        description:
          'Logistics management platform for fleet operations, driver assignment, live tracking, and route planning.',
      },
      {
        name: 'Pluscribe',
        description:
          'Healthcare platform for consultation recording, medical documentation, and transcription workflows.',
      },
    ],

    highlights: [
      'Owned Cachetag from architecture through long-term feature delivery, becoming the primary engineer responsible for platform evolution.',
      'Designed Dropbox synchronization pipelines, RSS ingestion workflows, and a SQL-based recommendation engine for large-scale content aggregation and personalized recommendations.',
      'Led migration from React to Next.js, significantly improving SEO, maintainability, and Lighthouse performance scores above 95.',
      'Designed tenant-isolated database architecture and implemented real-time communication using MQTT, Redis Pub/Sub, and WebSockets for scalable multi-tenant IoT deployments.',
      'Built logistics workflows supporting fleet management, driver assignment, live asset tracking, route planning, and advanced geospatial features using HERE Maps, Google Maps, and Mapbox.',
      'Developed healthcare workflows supporting consultation recording, transcript review, reusable note templates, patient history, and structured medical documentation.',
    ],

    technologies: [
      {
        category: 'Backend',
        items: ['NestJS', 'TypeScript'],
      },
      {
        category: 'Frontend',
        items: ['Next.js', 'React'],
      },
      {
        category: 'Data',
        items: ['PostgreSQL', 'Prisma', 'Redis'],
      },
      {
        category: 'Messaging',
        items: ['MQTT'],
      },
      {
        category: 'Realtime',
        items: ['WebSockets', 'Redis Pub/Sub', 'Socket.IO'],
      },
      {
        category: 'Infrastructure',
        items: ['Docker', 'Cron Jobs'],
      },
      {
        category: 'Maps',
        items: ['HERE Maps', 'Google Maps', 'Mapbox'],
      },
      {
        category: 'AI',
        items: ['OpenAI API'],
      },
    ],
  },

  {
    company: 'Object Infotech',
    role: 'MERN Stack Developer',
    duration: 'Jan 2023 — Jun 2024',
    summary:
      'Progressed from Backend Developer Trainee to MERN Stack Developer while building production web applications across e-commerce, content management, and commerce platforms, establishing strong backend engineering foundations and full-stack development expertise.',

    projects: [
      {
        name: 'Evira',
        description:
          'E-commerce platform supporting product, inventory, customer, and order management.',
      },
      {
        name: 'Newsline',
        description:
          'Content management platform for creating, organizing, and publishing news articles.',
      },
      {
        name: 'Music Commerce Platform',
        description:
          'GraphQL-powered commerce platform for music catalog and publishing management.',
      },
    ],

    highlights: [
      'Progressed from Backend Developer Trainee to MERN Stack Developer by consistently delivering production backend features and full-stack functionality across multiple client projects.',
      'Built backend APIs, business logic, MongoDB data models, and administration portals supporting e-commerce, content management, and business operations.',
      'Developed GraphQL schemas, resolvers, REST APIs, and TypeScript backend services powering commerce and content management workflows.',
      'Collaborated closely with frontend developers to deliver complete production-ready full-stack features while strengthening software architecture and API development fundamentals.',
    ],

    technologies: [
      {
        category: 'Backend',
        items: ['Node.js', 'Express.js', 'TypeScript'],
      },
      {
        category: 'Frontend',
        items: ['React'],
      },
      {
        category: 'Data',
        items: ['MongoDB'],
      },
      {
        category: 'API',
        items: ['REST APIs', 'GraphQL', 'Apollo GraphQL'],
      },
      {
        category: 'State Management',
        items: ['Redux'],
      },
      {
        category: 'Infrastructure',
        items: ['Git'],
      },
    ],
  },
]

export const featuredSystems: FeaturedSystem[] = [
  {
    id: 'ai-outreach',
    title: 'AI Outreach Platform',
    positioning: 'AI-Powered Multi-Tenant Outreach Platform',
    summary:
      'A multi-tenant SaaS platform that enables teams to run AI-powered outreach campaigns with workspace isolation, conversation-centric architecture, and real-time engagement tracking.',
    problem:
      'Sales and outreach teams needed a scalable platform to manage multi-channel outreach campaigns with AI-generated messaging, but existing solutions lacked proper tenant isolation, conversation threading, and intelligent reply handling.',
    responsibilities:
      'Owned the full-stack architecture, designed the multi-tenant data model, built the AI integration pipeline, and implemented the real-time conversation system.',
    architecture:
      'Multi-tenant architecture with workspace-level database isolation, conversation-centric data model, thread-based messaging with AI reply parsing, and real-time engagement tracking via WebSockets.',
    highlights: [
      'Workspace-level tenant isolation',
      'Conversation-centric data architecture',
      'Thread-based messaging system',
      'AI-powered content generation pipeline',
      'Real-time engagement and reply tracking',
      'Intelligent scheduling and follow-up automation',
    ],
    challenges:
      'Building a true conversation-centric architecture that could handle complex threading across multiple channels while maintaining tenant isolation and supporting AI-generated content at scale.',
    outcomes:
      'Delivered a production-ready multi-tenant outreach platform with workspace isolation, AI-powered messaging, and real-time conversation management.',
    achievements: [
      'Designed and implemented workspace-level tenant isolation',
      'Built conversation-centric architecture from scratch',
      'Integrated AI content generation pipeline',
      'Delivered full platform as primary full-stack engineer',
    ],
  },
  {
    id: 'categra',
    title: 'Categra',
    positioning: 'Multi-Channel Product Information Management Platform',
    summary:
      'A comprehensive PIM platform enabling businesses to manage product catalogs across multiple channels with validation, localization, marketplace synchronization, and AI-powered content generation.',
    problem:
      'E-commerce businesses struggled with managing product data across multiple marketplaces. Catalog synchronization to Amazon took 24+ hours, product validation was error-prone, and managing parent-child product relationships was complex.',
    responsibilities:
      'Owned the catalog synchronization system, product validation engine, marketplace integration layer, and AI content generation features.',
    architecture:
      'Event-driven architecture with a rule-based validation engine supporting tens of thousands of business rules, marketplace-specific data transformers, and a product merge system with recovery and rollback capabilities.',
    highlights: [
      'Amazon catalog synchronization',
      'Product validation engine (10,000+ rules)',
      'Parent-child relationship management',
      'Multi-marketplace localization',
      'AI-powered content generation',
      'Product merge system with rollback',
    ],
    challenges:
      'Reducing Amazon catalog sync time from 24+ hours to under 3 hours required a fundamental redesign of the sync pipeline, including batched processing, delta detection, and marketplace-optimized data transformation.',
    outcomes:
      'Reduced sync time by 85%, built a validation engine supporting tens of thousands of rules, and successfully delivered live onboarding for multiple clients.',
    achievements: [
      'Reduced Amazon sync from 24+ hours to under 3 hours',
      'Built validation engine supporting 10,000+ business rules',
      'Designed product merge system with recovery workflows',
      'Delivered successful live client onboarding',
    ],
  },
  {
    id: 'cachetag',
    title: 'Cachetag',
    positioning: 'Content Intelligence & Recommendation Platform',
    summary:
      'A content intelligence platform that ingests content from multiple sources, organizes it with AI, and delivers personalized content recommendations based on user engagement and behavior.',
    problem:
      'Content teams needed a way to aggregate content from disparate sources (Dropbox, RSS feeds), organize it intelligently, and surface relevant content to users based on their behavior patterns.',
    responsibilities:
      'Architected the content ingestion pipeline, built the recommendation engine, implemented the Dropbox and RSS integration, and optimized SEO performance.',
    architecture:
      'Modular ingestion architecture with Dropbox synchronization and RSS feed parsing, a content recommendation engine based on user engagement signals, and an SEO-optimized content delivery layer.',
    highlights: [
      'Dropbox content synchronization',
      'RSS feed ingestion pipeline',
      'Content recommendation engine',
      'User engagement-based recommendations',
      'SEO optimization',
      'Scalable ingestion architecture',
    ],
    challenges:
      'Building a recommendation engine that could process diverse content types and deliver personalized recommendations while maintaining high performance and SEO quality.',
    outcomes:
      'Delivered a scalable content intelligence platform with personalized recommendations, improved SEO performance, and efficient multi-source content ingestion.',
    achievements: [
      'Built scalable content ingestion pipeline',
      'Implemented behavior-based recommendation engine',
      'Achieved strong SEO performance metrics',
      'Delivered personalized content recommendations',
    ],
  },
  {
    id: 'iotpot',
    title: 'IOTPOT',
    positioning: 'Industrial IoT Platform',
    summary:
      'A multi-tenant Industrial IoT platform for real-time device telemetry processing, with MQTT communication, Redis Pub/Sub, WebSocket streaming, and role-based access control.',
    problem:
      'Industrial IoT deployments required a platform that could handle real-time telemetry from thousands of devices, maintain tenant-level data isolation, and provide live dashboards with RBAC.',
    responsibilities:
      'Designed the multi-tenant IoT architecture, implemented MQTT communication layer, built the Redis Pub/Sub and WebSocket real-time pipeline, and implemented RBAC.',
    architecture:
      'Tenant-isolated architecture with MQTT broker integration for device communication, Redis Pub/Sub for telemetry distribution, WebSocket streaming for real-time dashboards, and role-based access control for multi-user access.',
    highlights: [
      'Tenant-level data isolation',
      'MQTT device communication',
      'Redis Pub/Sub telemetry pipeline',
      'WebSocket real-time streaming',
      'Device telemetry processing',
      'Role-based access control',
    ],
    challenges:
      'Ensuring reliable real-time telemetry processing across thousands of devices while maintaining strict tenant data isolation and low-latency dashboard updates.',
    outcomes:
      'Delivered a production IoT platform with real-time telemetry processing, tenant isolation, and live dashboards with role-based access control.',
    achievements: [
      'Implemented MQTT-to-WebSocket real-time pipeline',
      'Designed tenant-isolated multi-tenant architecture',
      'Built RBAC system for multi-user IoT access',
      'Delivered real-time telemetry dashboards',
    ],
  },
]

export const engineeringInterests = [
  'SaaS Platforms',
  'AI Workflows',
  'Multi-Tenant Systems',
  'Event-Driven Architectures',
  'Recommendation Engines',
  'Real-Time Applications',
  'Data Processing Pipelines',
  'Product Infrastructure',
]


export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: ['Node.js', 'TypeScript', 'NestJS', 'GraphQL', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle'],
  },
  {
    category: 'Cloud',
    skills: ['AWS', 'Docker', 'CI/CD', 'Nginx'],
  },
  {
    category: 'AI',
    skills: ['OpenAI', 'Ollama', 'AI Workflow Integration'],
  },
]

export const contact = {
  title: "Let's Build Something Great",
  description:
    "I'm open to opportunities with remote startups, SaaS companies, and product engineering teams.",
}

export const footer = {
  tagline: ['SaaS', 'AI', 'Systems'],
}
