# skills-section.md (Part 1)
## Vision, Design Philosophy, UI Architecture & Implementation Specification

---

# Objective

Design a Skills section that communicates engineering capability rather than simply listing technologies.

The purpose of this section is **not** to maximize the number of technologies displayed.

Instead, it should immediately answer the following questions for a recruiter or engineering leader:

- What kind of engineer is this?
- What technical domains does he specialize in?
- What technologies does he work with daily?
- Does his experience span architecture, infrastructure, AI and product engineering?
- Can he build production software end-to-end?

This section should reinforce the Experience and Projects sections instead of repeating them.

---

# Primary Design Philosophy

The Experience section explains:

> Where I worked.

The Projects section explains:

> What I built.

The Skills section explains:

> How I build software.

Every section should communicate different information.

Avoid any duplication.

---

# Design Principles

The section must feel like a natural continuation of the Projects section.

It should follow the same minimalist visual language.

Avoid decorative UI.

Avoid unnecessary icons.

Avoid progress bars.

Avoid rating systems.

Avoid percentage indicators.

Avoid "Expert", "Intermediate", "Beginner" labels.

Avoid star ratings.

Avoid skill meters.

Those provide little value and usually reduce perceived credibility.

---

# Communication Style

Everything should communicate engineering maturity.

The section should feel closer to Stripe, Vercel, Linear or Anthropic documentation rather than a traditional portfolio.

Use concise wording.

Avoid marketing language.

Avoid buzzwords.

Avoid "proficient in..."

Avoid "experienced with..."

Simply organize technologies properly.

---

# User Reading Pattern

A recruiter typically scans a portfolio in this order:

Hero

↓

Experience

↓

Projects

↓

Skills

↓

Contact

At this point the visitor already knows:

- work history
- engineering capability
- architecture quality
- production experience

The Skills section should therefore become a quick reference.

It should work almost like documentation.

---

# Information Hierarchy

The importance order should be:

1. Engineering capability

↓

2. Technology categories

↓

3. Individual technologies

Not the other way around.

Technology names should never become the primary focus.

---

# Section Structure

The section should contain:

Section Eyebrow

↓

Section Title

↓

Section Description

↓

Engineering Capability Groups

Each capability group contains

Category

↓

Technology chips

No descriptions below every technology.

No paragraphs below every category.

The technology names themselves are enough.

---

# Visual Philosophy

Everything should breathe.

Avoid visual clutter.

Allow whitespace to separate concepts.

Categories should feel independent.

Technology chips should feel lightweight.

Nothing should appear boxed unnecessarily.

---

# Layout Philosophy

Desktop:

A responsive grid.

Not equal-height cards.

Each category should naturally occupy only the height it requires.

The overall layout should resemble engineering documentation rather than feature cards.

Example:

Backend Engineering        Frontend Engineering

Database & Storage         Cloud Infrastructure

AI Engineering             Distributed Systems

Architecture               Domain Expertise

Mobile should collapse naturally into one column.

Tablet into two columns.

Desktop into three columns.

Never force five columns.

Five equal columns become difficult to scan.

---

# Component Hierarchy

Skills Section

├── Header

├── Description

├── Skills Grid

│

├── Skill Group

│      ├── Category

│      └── Skill Chips

│

├── Skill Group

│      ├── Category

│      └── Skill Chips

...

Everything should remain data-driven.

---

# Card Philosophy

Do NOT create large bordered cards.

Instead use lightweight groups.

Example:

Backend Engineering

[NestJS]
[Node.js]
[TypeScript]
[GraphQL]

No surrounding container is required.

Whitespace is enough.

If visual separation is desired, use extremely subtle styling.

---

# Technology Representation

Every technology should appear as a chip.

Consistent sizing.

Consistent spacing.

No icons.

No logos.

No colors.

No gradients.

No shadows.

No badges.

Just clean typography.

---

# Chip Design Rules

Each chip should:

• have equal vertical padding

• consistent horizontal padding

• rounded corners

• subtle border

• subtle surface color

• readable typography

The chips should resemble those already used in Experience and Projects.

Maintain consistency across the portfolio.

---

# Typography Hierarchy

Section Label

small uppercase

high tracking

muted

↓

Section Title

largest typography

↓

Description

body text

↓

Category

uppercase

small

medium weight

↓

Technology

small body

---

# Vertical Rhythm

Follow approximately:

Header Label

↓

12px

↓

Title

↓

16px

↓

Description

↓

64–72px

↓

Skill Grid

↓

Category

↓

16px

↓

Technology chips

↓

48–56px

↓

Next category

Spacing consistency is more important than exact pixel values.

---

# Responsive Behaviour

Desktop

Three-column adaptive grid.

Tablet

Two-column grid.

Mobile

Single column.

Technology chips should wrap naturally.

Never truncate technology names.

---

# Alignment Rules

Every category begins at the same baseline.

Technology chips wrap naturally.

Do not stretch categories to equal heights.

Allow masonry-like vertical rhythm through natural content height.

---

# Accessibility

All chips must have sufficient contrast.

No information should depend on color.

Keyboard navigation should remain natural.

Typography should satisfy accessibility guidelines.

---

# Animation Philosophy

Reuse the Reveal component already implemented throughout the portfolio.

Reveal order:

Section Header

↓

Description

↓

Skill Group 1

↓

Skill Group 2

↓

Skill Group 3

...

Small stagger only.

Avoid dramatic animation.

---

# Data Ownership

The component must remain completely data-driven.

No hardcoded technologies.

No hardcoded categories.

Everything originates from the data file.

Future modifications should only require editing the data.

---

# Constraints

The implementation MUST NOT:

- introduce skill ratings
- introduce progress bars
- introduce percentages
- introduce expertise levels
- introduce timelines
- introduce logos
- introduce icons
- introduce unnecessary descriptions
- create giant cards
- duplicate Experience content
- duplicate Projects content
- manually order technologies in JSX

Everything must be controlled by structured data.

---

# Success Criteria

The finished section should immediately communicate:

✓ Strong backend engineering

✓ Modern frontend development

✓ Production infrastructure

✓ Distributed systems experience

✓ AI integration capability

✓ Software architecture knowledge

✓ Broad product domain exposure

while remaining visually lighter than the Experience and Projects sections.

---

# skills-section.md (Part 2)
## Data Model, Skill Taxonomy & Final Portfolio Content

---

# Content Philosophy

The Skills section is **not** intended to be an exhaustive list of every technology ever used.

Instead, it should represent the technologies and engineering capabilities that best define the developer today.

Selection should prioritize:

- daily usage
- production experience
- architectural relevance
- engineering impact
- modern ecosystem adoption

Older or less relevant technologies should only remain if they still meaningfully contribute to the engineering profile.

---

# Technology Selection Rules

Every technology included must satisfy at least one of the following:

✓ Used extensively in production

✓ Mentioned across multiple professional experiences

✓ Central to featured projects

✓ Important for architecture decisions

✓ Represents an engineering capability

Do not include technologies simply because they appear on LinkedIn.

---

# What Should NOT Be Included

Avoid adding generic skills such as

- Communication
- English
- Problem Solving
- Student Activities
- Web Development
- Software Development
- Product Development
- Full-Stack Development
- Front-End Development
- Back-End Development
- Application Programming Interfaces (duplicate of REST APIs)
- Database Management System
- SQL
- HTML
- CSS
- C Programming
- Operating Systems
- Computer Networking

These either:

- are implied,
- are foundational,
- are non-technical,
- or dilute the engineering signal.

The portfolio should communicate specialization rather than quantity.

---

# Capability Groups

The technologies should be organized around engineering responsibilities instead of programming language categories.

Recommended order:

1. Backend Engineering

2. Frontend Engineering

3. Data & Storage

4. Cloud & Infrastructure

5. AI Engineering

6. Distributed Systems

7. Architecture

8. Domain Expertise

This order intentionally mirrors how modern production systems are built.

---

# Final Skill Taxonomy

## Backend Engineering

Purpose

Core backend technologies used for building production APIs, business logic, distributed services, and scalable server applications.

Skills

- Node.js
- NestJS
- Express.js
- TypeScript
- GraphQL
- REST APIs
- Microservices

---

## Frontend Engineering

Purpose

Modern frontend technologies used for production user interfaces and web applications.

Skills

- React
- Next.js
- Zustand
- Redux
- Tailwind CSS
- shadcn/ui

---

## Data & Storage

Purpose

Persistent storage, caching, ORMs, queues, and database tooling.

Skills

- PostgreSQL
- MongoDB
- Redis
- BullMQ
- Prisma ORM
- Sequelize
- TypeORM

---

## Cloud & Infrastructure

Purpose

Infrastructure and deployment technologies used for production systems.

Skills

- Docker
- Amazon S3
- Amazon SQS
- Amazon EC2
- GitHub
- GitLab

---

## AI Engineering

Purpose

Technologies used for AI-powered product development and intelligent workflows.

Skills

- OpenAI API
- Google Gemini
- Ollama
- AI Workflow Integration
- Prompt Engineering

---

## Distributed Systems

Purpose

Technologies enabling event-driven systems and real-time communication.

Skills

- MQTT
- WebSockets
- Redis Pub/Sub
- Event-driven Architecture
- Background Jobs

---

## Software Architecture

Purpose

Higher-level engineering capabilities demonstrated throughout professional work.

Skills

- Systems Design
- Software Architecture
- Multi-tenant SaaS
- Role-Based Access Control (RBAC)
- User Authentication
- Data Synchronization

---

## Domain Expertise

Purpose

Business domains where meaningful production software has been designed or delivered.

Skills

- Amazon Marketplace Integration
- Product Information Management
- Multi-Channel Commerce
- E-Commerce
- Content Management
- Internet of Things (IoT)
- Healthcare
- Logistics

---

# Ordering Rules

Within every category:

1. Most important technologies first.

2. Technologies used daily before occasional technologies.

3. Modern technologies before legacy ones.

Example

Correct

Node.js

NestJS

TypeScript

GraphQL

REST APIs

Express.js

Incorrect

Express.js

REST APIs

NestJS

Node.js

Type importance should feel intentional.

---

# Category Size Rules

Every category should contain roughly

5–8 skills.

Avoid categories with

2 skills

or

15 skills.

Balanced groups create a cleaner visual rhythm.

---

# Chip Rules

Each chip represents exactly one technology or capability.

Never combine multiple items.

Correct

OpenAI API

Incorrect

OpenAI + Gemini

---

# Naming Consistency

Use one naming convention throughout.

Correct

Next.js

Node.js

NestJS

BullMQ

OpenAI API

GitHub

GitLab

MQTT

Incorrect

NextJS

NodeJS

Github

Gitlab

Redis PubSub

Open AI

---

# Data Model

Recommended structure

```ts
export const skillGroups = [
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
    skills: [
      'React',
      'Next.js',
      'Zustand',
      'Redux',
      'Tailwind CSS',
      'shadcn/ui',
    ],
  },

  {
    category: 'Data & Storage',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'BullMQ',
      'Prisma ORM',
      'Sequelize',
      'TypeORM',
    ],
  },

  {
    category: 'Cloud & Infrastructure',
    skills: [
      'Docker',
      'Amazon S3',
      'Amazon SQS',
      'Amazon EC2',
      'GitHub',
      'GitLab',
    ],
  },

  {
    category: 'AI Engineering',
    skills: [
      'OpenAI API',
      'Google Gemini',
      'Ollama',
      'AI Workflow Integration',
      'Prompt Engineering',
    ],
  },

  {
    category: 'Distributed Systems',
    skills: [
      'MQTT',
      'WebSockets',
      'Redis Pub/Sub',
      'Event-driven Architecture',
      'Background Jobs',
    ],
  },

  {
    category: 'Software Architecture',
    skills: [
      'Systems Design',
      'Software Architecture',
      'Multi-tenant SaaS',
      'Role-Based Access Control',
      'User Authentication',
      'Data Synchronization',
    ],
  },

  {
    category: 'Domain Expertise',
    skills: [
      'Amazon Marketplace Integration',
      'Product Information Management',
      'Multi-Channel Commerce',
      'E-Commerce',
      'Content Management',
      'Internet of Things (IoT)',
      'Healthcare',
      'Logistics',
    ],
  },
]
```

---

# Future Expansion Rules

When adding new technologies:

Never create a new category unless absolutely necessary.

Instead:

1. Find the closest engineering capability.

2. Insert the technology into that category.

3. Maintain balanced category sizes.

The information architecture should remain stable even as the portfolio evolves.

---
