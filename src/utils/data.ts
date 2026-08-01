import { Experience, Project, SkillGroup } from '@/types/index.type'

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

export const experienceSection = {
  eyebrow: 'Experience',
  title: 'Building scalable software that powers real businesses.',
  description:
    "I've built production systems for e-commerce, AI, IoT, healthcare, logistics, and content platforms, focusing on scalable architecture, intelligent automation, and reliable engineering.",
}

export const projectsSection = {
  eyebrow: 'Projects',
  title: 'Selected Engineering Work',
  description:
    'A selection of production systems that demonstrate my approach to building scalable software, solving complex engineering problems, and delivering measurable business impact.',
}

export const skillsSection = {
  eyebrow: 'Skills',
  title: 'Engineering Capabilities',
  description:
    'The technologies, architectural patterns, and engineering practices I use to build scalable production software.',
}

export const contactSection = {
  eyebrow: 'Contact',
  title: "Let's Build What's Next",
  description:
    "I'm currently open to full-time product engineering opportunities with startups and software companies building ambitious products at scale.",
  availability: ['Based in India', 'Open to Remote', 'Open to Full-Time Opportunities'],
}

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
        items: ['WebSockets', 'Pub/Sub', 'Socket.IO'],
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

export const projects: Project[] = [
  {
    id: 'categra',
    title: 'Categra',
    category: 'Enterprise PIM Platform',
    type: 'professional',
    company: 'Transcodezy IT Solutions',

    overview:
      'Categra is an enterprise Product Information Management (PIM) platform that centralizes product data and synchronizes catalogs across Amazon marketplaces. The platform streamlines catalog management with marketplace-specific validation, localization, AI-assisted content generation, and synchronization workflows built for enterprise-scale commerce.',

    engineeringHighlights: [
      'Designed Amazon catalog synchronization workflows spanning products, variants, inventory, pricing, and orders across multiple marketplaces.',
      'Built a rule-based validation engine that evaluates product data against Amazon product-type schemas containing tens of thousands of validation rules.',
      'Engineered parent-child product relationships across marketplaces together with localization workflows for region-specific attributes and multilingual catalogs.',
      'Developed AI-assisted product content generation and intelligent attribute recommendation workflows that reduced manual catalog preparation.',
      'Implemented synchronization monitoring, retry handling, rollback, recovery, comparison, and change-tracking workflows to improve operational reliability.',
      'Optimized synchronization architecture through batching, workflow redesign, and pipeline improvements, reducing processing time for enterprise catalog operations.',
    ],

    outcomes: [
      'Reduced Amazon catalog synchronization time from over 12 hours to under 2 hours.',
      'Delivered a production-ready synchronization platform used during live enterprise customer onboarding.',
      'Built a validation engine processing Amazon schemas containing tens of thousands of business rules.',
      'Improved synchronization reliability through automated rollback, recovery, comparison, and retry workflows.',
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
    id: 'ai-outreach',
    title: 'AI Outreach Platform',
    category: 'AI-Powered Outreach SaaS',
    type: 'personal',

    overview:
      'AI Outreach Platform is a multi-tenant SaaS application that helps teams manage personalized outreach through AI-assisted content generation, conversation-centric messaging, engagement tracking, scheduling, and intelligent follow-up automation. The platform is built around persistent conversation threads and workspace-level isolation for scalable team collaboration.',

    engineeringHighlights: [
      'Designed a conversation-centric architecture where every interaction is organized into persistent threads instead of isolated email events.',
      'Implemented workspace-level tenant isolation with role-based access control for secure multi-tenant SaaS deployments.',
      'Built AI-assisted content generation, rewriting, and follow-up workflows using modern LLM integrations.',
      'Developed scheduling, engagement tracking, reply detection, and conversation management workflows for long-running outreach campaigns.',
      'Designed a modular architecture for future expansion into founder intelligence, hiring signals, personalization, and opportunity discovery.',
      'Built scalable backend workflows separating messaging, AI processing, scheduling, and user management into independent services.',
    ],

    outcomes: [
      'Designed an extensible SaaS architecture supporting multiple organizations through isolated workspaces.',
      'Integrated AI into production messaging workflows beyond standalone prompt-based features.',
      'Established a reusable conversation model for scalable communication management.',
      'Built an architectural foundation ready for future product expansion without major redesign.',
    ],

    technologies: [
      {
        category: 'Backend',
        items: ['NestJS', 'Node.js', 'TypeScript'],
      },
      {
        category: 'Frontend',
        items: ['Next.js', 'React'],
      },
      {
        category: 'Data',
        items: ['PostgreSQL', 'Redis', 'BullMQ'],
      },
      {
        category: 'AI',
        items: ['OpenAI API'],
      },
      {
        category: 'Infrastructure',
        items: ['Docker'],
      },
    ],
  },

  {
    id: 'cachetag',
    title: 'Cachetag',
    category: 'Content Intelligence Platform',
    type: 'professional',
    company: 'Implies Solution',

    overview:
      'Cachetag is a content intelligence platform that aggregates, organizes, and personalizes content collected from multiple external sources. The platform combines automated ingestion pipelines, recommendation algorithms, and SEO-focused delivery to improve content discovery and long-term knowledge management.',

    engineeringHighlights: [
      'Architected Dropbox synchronization workflows for importing, matching, and maintaining externally managed resources alongside internal metadata.',
      'Built scalable RSS ingestion pipelines for collecting, normalizing, and organizing content from numerous external publishers.',
      'Designed a SQL-driven recommendation engine that personalized content using user engagement signals instead of static ranking rules.',
      'Led the migration from React to Next.js, significantly improving maintainability, SEO, and Lighthouse performance.',
      'Developed scalable content organization features including collections, favorites, reactions, sitemap generation, and resource management.',
      'Owned the platform throughout its lifecycle, driving architecture, feature delivery, optimization, and long-term evolution.',
    ],

    outcomes: [
      'Delivered a scalable multi-source content aggregation platform with continuous automated ingestion.',
      'Delivered personalized recommendations using user engagement and behavioral signals.',
      'Improved search visibility and Lighthouse performance beyond 95 through migration to Next.js.',
      'Established an extensible architecture for future content sources and recommendation improvements.',
    ],

    technologies: [
      {
        category: 'Backend',
        items: ['NestJS', 'Node.js', 'TypeScript'],
      },
      {
        category: 'Frontend',
        items: ['Next.js', 'React'],
      },
      {
        category: 'Data',
        items: ['PostgreSQL', 'Redis'],
      },
      {
        category: 'Infrastructure',
        items: ['Cron Jobs'],
      },
    ],
  },

  {
    id: 'iotpot',
    title: 'IOTPOT',
    category: 'Industrial IoT Platform',
    type: 'professional',
    company: 'Implies Solution',

    overview:
      'IOTPOT is a multi-tenant Industrial IoT platform designed for secure telemetry processing, device communication, and real-time monitoring. The platform enables isolated tenant deployments while delivering live dashboards through MQTT messaging, Redis Pub/Sub, WebSocket streaming, and role-based access control.',

    engineeringHighlights: [
      'Implemented tenant-isolated architecture enabling secure data separation for independent customer deployments.',
      'Built MQTT communication workflows for reliable real-time telemetry ingestion from connected devices.',
      'Developed Redis Pub/Sub pipelines distributing telemetry events across backend services and real-time consumers.',
      'Engineered WebSocket streaming infrastructure powering low-latency operational dashboards.',
      'Implemented authentication, authorization, and role-based access control for secure multi-user IoT environments.',
      'Built backend workflows for reliable telemetry processing while maintaining tenant isolation.',
    ],

    outcomes: [
      'Delivered a production-ready Industrial IoT platform supporting secure multi-tenant deployments.',
      'Implemented reliable MQTT-to-WebSocket pipelines for real-time telemetry visualization.',
      'Enabled secure enterprise deployments through tenant-isolated architecture.',
      'Delivered low-latency device monitoring using distributed event-driven communication.',
    ],

    technologies: [
      {
        category: 'Backend',
        items: ['NestJS', 'Node.js', 'TypeScript'],
      },
      {
        category: 'Data',
        items: ['PostgreSQL', 'Redis'],
      },
      {
        category: 'Messaging',
        items: ['MQTT'],
      },
      {
        category: 'Realtime',
        items: ['Pub/Sub', 'WebSockets', 'Socket.IO'],
      },
      {
        category: 'Infrastructure',
        items: ['Docker'],
      },
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
    category: 'Backend Engineering',
    skills: [
      'Node.js',
      'NestJS',
      'Express.js',
      'TypeScript',
      'GraphQL',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    category: 'Frontend Engineering',
    skills: ['React', 'Next.js', 'Zustand', 'Redux', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Data & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'Prisma ORM', 'Sequelize', 'TypeORM'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['Docker', 'Amazon S3', 'Amazon SQS', 'Amazon EC2', 'GitHub', 'GitLab'],
  },
  {
    category: 'AI Engineering',
    skills: ['OpenAI API', 'Google Gemini', 'Ollama', 'AI Workflows', 'Prompt Engineering'],
  },
  {
    category: 'Distributed Systems',
    skills: ['MQTT', 'WebSockets', 'Pub/Sub', 'Event-driven Architecture', 'Background Jobs'],
  },
  {
    category: 'Software Architecture',
    skills: [
      'Systems Design',
      'Software Architecture',
      'Multi-tenant SaaS',
      'RBAC',
      'User Authentication',
      'Data Synchronization',
    ],
  },
  {
    category: 'Domain Expertise',
    skills: [
      'Amazon Marketplace',
      'PIM Systems',
      'Multi-Channel Commerce',
      'E-Commerce',
      'Content Management',
      'IoT',
      'Healthcare',
      'Logistics',
    ],
  },
]

export const footer = {
  tagline: ['Product Engineering', 'SaaS', 'AI'],
}
