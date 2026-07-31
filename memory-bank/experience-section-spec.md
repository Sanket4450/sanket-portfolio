# Experience Section Specification
Version: 2.0
Status: Final
Purpose: Production-ready implementation specification for portfolio Experience section

---

# Philosophy

The Experience section is the single most important section of the portfolio.

Most recruiters spend less than one minute on an entire portfolio website. Within that minute, the Experience section receives the largest amount of attention because it answers the questions that actually determine hiring decisions:

- What has this engineer built?
- How complex was the work?
- Did they own systems or just implement tasks?
- Can they work on production software?
- Can they solve difficult engineering problems?
- Have they created measurable business value?

This section should answer all of these questions naturally.

The objective is **not** to recreate LinkedIn.

The objective is **not** to recreate a resume.

The objective is to tell a concise engineering story.

Every sentence should increase confidence in the engineer.

Every component should communicate credibility.

If an element does not improve credibility, remove it.

---

# Core Objectives

After reading this section, a recruiter should naturally conclude:

✓ Builds production software

✓ Owns complete systems

✓ Understands architecture

✓ Works comfortably across domains

✓ Solves difficult engineering problems

✓ Delivers measurable impact

✓ Understands scalability

✓ Can work independently

The reader should never have to infer these conclusions.

The content itself should communicate them.

---

# Reader Psychology

A recruiter does not read.

They scan.

Eye tracking studies consistently show that technical recruiters read pages in an F-shaped scanning pattern.

Therefore the Experience section should optimize for scanning instead of reading.

Information should become understandable in this order:

Company

↓

Role

↓

Company Summary

↓

Projects

↓

Highlights

↓

Technology

Everything else is secondary.

---

# Information Architecture

The hierarchy must never change.

```
Experience

Section Introduction

↓

Company

    Role
    Duration
    Location

↓

Company Summary

↓

Projects

↓

Highlights

↓

Technology Groups
```

No additional hierarchy levels.

No nested timelines.

No expandable accordions.

No tabs.

No sliders.

Everything important must remain visible.

---

# Design Goals

The Experience section should feel like:

- a product engineering portfolio

NOT

- an online resume

NOT

- LinkedIn

NOT

- a project gallery

NOT

- a CV

The visual identity should communicate:

clarity

ownership

engineering maturity

technical depth

professionalism

---

# Overall Layout

The page order should remain

Hero

↓

About

↓

Experience

↓

Projects

↓

Skills

↓

Contact

The Experience section becomes the largest section on the page.

Approximate viewport height:

Desktop

1800–2500px

depending on content.

Mobile

Naturally expanding.

Never artificially compress.

---

# Section Header

Display

```
EXPERIENCE
```

Small uppercase eyebrow.

Below that

```
Building production software across multiple industries.
```

One sentence.

Maximum width

650px

Supporting description

```
I've designed and built production software across e-commerce, AI, IoT, healthcare, logistics, and content platforms, focusing on scalable architectures, intelligent automation, and long-term maintainability.
```

Maximum width

700px

Keep left aligned.

Never center align.

---

# Company Ordering

Newest first.

Always.

```
Transcodezy

↓

Implies Solution

↓

Object Infotech
```

Older experience should visually shrink.

The user should subconsciously understand career progression.

---

# Content Weight Distribution

Newest company receives the greatest emphasis.

Recommended visual weight

Transcodezy

45%

Implies

35%

Object

20%

Do not make every company look equally important.

Career progression should feel obvious.

---

# Company Card Philosophy

Each company represents one chapter.

Not one project.

Projects support the company.

The company is the story.

Projects are evidence.

---

# Company Card Layout

Each company card must contain

```
Company

Role

Duration

Location

Company Summary

Projects

Highlights

Technology Groups
```

Nothing else.

Remove

Responsibilities

Achievements

Skills

Separate Tech Stack

Years Experience

Company Description

These either duplicate information or dilute focus.

---

# Company Header

Largest element

Company Name

Second largest

Role

Third

Duration

Fourth

Location

Example hierarchy

```
Transcodezy IT Solutions

Full Stack Developer

Jul 2025 — Present

Surat, Gujarat
```

Company logos are unnecessary.

They introduce visual inconsistency.

---

# Company Summary

Exactly one sentence.

Never more.

Purpose

Provide context before technical work.

A recruiter should understand the company's engineering domain within three seconds.

Example

```
Building enterprise Product Information Management systems that synchronize large-scale product catalogs across Amazon marketplaces using automation, AI-assisted workflows, and distributed synchronization pipelines.
```

Summary rules

Must explain

industry

system type

business problem

Never explain technologies.

Never explain responsibilities.

---

# Project Presentation

Projects are supporting evidence.

Not the primary focus.

Each project becomes a compact project block.

Structure

```
Project Name

One-line description
```

Example

```
Categra

Enterprise Product Information Management Platform.
```

Maximum

One sentence.

No paragraphs.

No bullet lists.

No technologies.

No achievements.

No dates.

---

# Project Ordering

Projects should reflect engineering significance.

Not chronology.

Example

Cachetag

↓

IOTPOT

↓

Logipsum

↓

Pluscribe

because Cachetag demonstrates much stronger ownership.

Likewise,

Categra occupies essentially the entire Transcodezy section.

---

# Highlight Philosophy

Highlights replace both

Responsibilities

and

Achievements.

The recruiter does not care which category something belongs to.

They care whether it matters.

Everything becomes

```
Highlights
```

---

# Writing Style

Every bullet follows the same structure.

Strong Verb

↓

Engineering Activity

↓

Technical Context

↓

Business Value (when possible)

Examples

Good

```
Designed parent-child product synchronization across Amazon marketplaces.
```

Good

```
Reduced catalog synchronization time from over twelve hours to under two hours.
```

Good

```
Built tenant-isolated database architecture supporting multi-tenant IoT deployments.
```

Avoid

```
Worked on...

Helped...

Responsible for...

Involved in...

Participated in...

Handled...

Supported...
```

Those communicate low ownership.

---

# Highlight Count

Maximum

Newest company

6

Second company

6

Oldest company

4

The portfolio should intentionally become shorter as experience becomes older.

---

# Highlight Prioritization

Every highlight should satisfy at least one of these

Ownership

Architecture

Scale

Performance

Automation

Business Impact

Complexity

Cross-System Integration

If it satisfies none of them

remove it.

---

# Technology Philosophy

Technologies exist to support credibility.

Not to impress.

Avoid dumping every technology you've ever touched.

Only include technologies that materially contributed to that company's work.

---

# Technology Organization

Never display

```
NestJS, PostgreSQL, Redis, BullMQ...
```

Instead group.

```
Backend

Frontend

Data

Infrastructure

Cloud

Messaging

AI

Realtime

Maps
```

The eye processes grouped information significantly faster.

---

# Technology Ordering

Within every company

Backend

↓

Frontend

↓

Data

↓

Infrastructure

↓

Cloud

↓

AI

↓

Messaging

↓

Realtime

↓

Maps

Only display categories that contain technologies.

---

# Visual Density

The page should breathe.

Whitespace is part of the design.

Company cards should feel separated.

Projects slightly grouped.

Technology chips compact.

Nothing should feel crowded.

---

# Responsive Philosophy

Desktop

Rich hierarchy

Tablet

Stack naturally

Mobile

Single column

No horizontal scrolling.

No collapsed content.

No hidden highlights.

No expandable accordions.

Everything remains immediately readable.

---

# Motion Principles

Animation should support perception.

Not entertainment.

Sequence

Section

↓

Company

↓

Projects

↓

Highlights

↓

Technology

Duration

Fast.

Subtle.

Avoid dramatic effects.

Respect reduced-motion preferences.

---

# Accessibility

Use semantic HTML.

Each company should be an `<article>`.

Projects should be semantic subsections.

Use proper heading hierarchy.

Do not encode information using color only.

Keyboard navigation must remain fully functional.

Maintain accessible contrast ratios.

Respect prefers-reduced-motion.

---

# Component Architecture

Recommended React hierarchy

```
ExperienceSection

├── SectionHeader
│
├── CompanyCard
│     ├── CompanyHeader
│     ├── CompanySummary
│     ├── ProjectGrid
│     │      └── ProjectCard
│     ├── HighlightList
│     └── TechnologyGroups
│
├── CompanyCard
│
├── CompanyCard
│
└── TraineeTimelineItem
```

Every component should receive data through props.

Avoid embedding content directly inside JSX.

The Experience section should be almost entirely data-driven.

---

# Data-Driven Design Principles

The React component should contain almost no hardcoded content.

Instead, all experience information should come from a single structured data source.

The UI layer should only be responsible for presentation.

Benefits:

- Easier maintenance.
- Cleaner component structure.
- Better scalability.
- Simpler future updates.
- Consistent rendering logic.
- Clear separation between content and UI.

The next part of this specification defines the complete normalized data model and the finalized content for every company, project, highlight, and technology group that should populate the Experience section.

# Final Content Specification

> This section contains the finalized portfolio content.
>
> Unlike LinkedIn or a resume, this content is intentionally curated to maximize engineering credibility while remaining concise and highly scannable.
>
> Every sentence has been optimized to communicate ownership, technical depth, and business impact.

---

# Company 01

# Transcodezy IT Solutions

## Header

**Company**

Transcodezy IT Solutions

**Role**

Full Stack Developer

**Duration**

Jul 2025 — Present

**Location**

Surat, Gujarat, India

---

## Company Summary

Building enterprise Product Information Management (PIM) systems that synchronize large-scale product catalogs across Amazon marketplaces using automation, AI-assisted workflows, and distributed synchronization pipelines.

---

## Projects

### Categra

Enterprise Product Information Management Platform enabling centralized catalog management, Amazon marketplace integrations, AI-assisted content generation, and large-scale synchronization across multiple regions.

---

## Highlights

- Owned end-to-end synchronization workflows for Amazon products, variants, inventory, pricing, catalogs, and orders across multiple marketplaces.
- Architected product publishing workflows that synchronize platform data with Amazon while maintaining consistency across regional marketplaces.
- Built a validation engine capable of evaluating product data against Amazon product-type schemas containing tens of thousands of validation rules before publication.
- Designed parent-child product relationship management that accurately links related products across Amazon regions and marketplaces.
- Developed AI-assisted product content generation and intelligent attribute recommendation workflows that reduced manual catalog preparation.
- Engineered synchronization monitoring, retry handling, rollback, recovery, comparison, and change-tracking mechanisms to improve operational reliability.
- Built marketplace-aware localization workflows supporting region-specific values, languages, and product variations.
- Developed catalog overview and synchronization management modules optimized for enterprise-scale product catalogs.
- Reduced Amazon catalog synchronization time from more than twelve hours to under two hours through architectural and workflow optimizations.
- Successfully delivered production-ready Amazon synchronization during a live enterprise customer onboarding, demonstrating system reliability under real-world conditions.

---

## Engineering Themes

- Enterprise SaaS
- Product Information Management
- Amazon Marketplace Integration
- Distributed Synchronization
- Data Validation
- AI-assisted Workflows
- Workflow Automation
- System Reliability

---

## Core Technologies

### Backend

- NestJS
- TypeScript
- Node.js

### Frontend

- Next.js

### Data

- PostgreSQL
- Sequelize
- Redis
- BullMQ

### Cloud

- Amazon S3
- Amazon SQS
- Amazon EC2

### AI

- Google Gemini
- OpenAI API

### Infrastructure

- Docker
- GitHub

---

# Company 02

# Implies Solution

## Header

**Company**

Implies Solution

**Role**

Full Stack Developer

**Duration**

Jun 2024 — Jul 2025

**Location**

Surat, Gujarat, India

---

## Company Summary

Designed and developed SaaS products across content management, IoT, logistics, and healthcare, contributing to system architecture, backend engineering, and end-to-end product delivery.

---

# Projects

## Cachetag

Content aggregation and knowledge management platform focused on collecting, organizing, recommending, and managing large volumes of external content.

---

## IOTPOT

Multi-tenant IoT platform supporting telemetry processing, tenant isolation, device communication, and real-time infrastructure.

---

## Logipsum

Logistics management platform for fleet operations, job assignment, live tracking, and route planning.

---

## Pluscribe

Healthcare platform supporting consultation recording, medical documentation, patient management, and transcription workflows.

---

# Highlights

- Owned Cachetag from architecture through long-term feature delivery, becoming the primary engineer responsible for platform evolution.
- Built Dropbox synchronization pipelines that imported and matched external resources with internally managed content metadata.
- Developed RSS ingestion workflows for collecting, processing, and organizing content from large numbers of external news sources.
- Designed a SQL-based recommendation engine that personalized content using user behavior and engagement patterns.
- Led migration of the frontend from React to Next.js, significantly improving SEO, maintainability, and Lighthouse performance scores above 95.
- Built scalable content organization features including collections, favorites, reactions, sitemap generation, and advanced resource management.
- Developed tenant-isolated database architecture supporting secure multi-tenant IoT deployments.
- Implemented real-time communication workflows using MQTT, Redis Pub/Sub, and WebSockets for telemetry processing and device communication.
- Built logistics workflows supporting driver assignment, fleet management, live asset tracking, and vehicle-aware route planning.
- Developed geospatial features using HERE Maps, Google Maps, and Mapbox including markers, overlays, route visualization, and polygon editing.
- Implemented healthcare workflows supporting consultation recording, transcript review, reusable note templates, patient history, and structured medical documentation.

---

## Engineering Themes

- SaaS Platforms
- Multi-Tenant Systems
- IoT
- Logistics
- Healthcare
- Content Platforms
- Recommendation Systems
- Real-time Communication

---

## Core Technologies

### Backend

- NestJS
- TypeScript

### Frontend

- Next.js
- React

### Data

- PostgreSQL
- Prisma
- Redis

### Messaging

- MQTT

### Realtime

- WebSockets
- Redis Pub/Sub
- Socket.IO

### Infrastructure

- Docker
- Cron Jobs
- GitHub
- GitLab

### Maps

- HERE Maps
- Google Maps
- Mapbox

### AI

- OpenAI API

---

# Design Notes

Transcodezy intentionally receives more visual weight than Implies Solution.

Within Implies Solution, project emphasis should be:

```
Cachetag

↓

IOTPOT

↓

Logipsum

↓

Pluscribe
```

The amount of screen space dedicated to each project should roughly follow this hierarchy.

Cachetag should naturally attract the most attention because it demonstrates the greatest ownership, architectural responsibility, and breadth of engineering work.

The remaining projects primarily serve to demonstrate domain diversity rather than equal engineering depth.

Avoid rendering all projects with identical visual weight.

The Experience section should communicate progression rather than equality.

# Company 03

# Object Infotech

## Header

**Company**

Object Infotech

**Role**

MERN Stack Developer

**Duration**

Jun 2023 — Jun 2024

**Location**

Surat, Gujarat, India

---

## Company Summary

Built full-stack web applications across e-commerce, content management, and commerce platforms while strengthening backend engineering fundamentals and gaining experience with modern JavaScript application architecture.

---

# Projects

## Evira

E-commerce platform supporting product management, inventory, customer operations, and order processing.

---

## Newsline

Content management platform for creating, organizing, and publishing news articles through a centralized administration system.

---

## Music Commerce Platform

GraphQL-powered commerce platform for managing music catalogs, publishing workflows, and commerce-related operations.

---

# Highlights

- Built backend workflows supporting product catalogs, inventory management, customer management, and order processing for an e-commerce platform.
- Developed administration portals and REST APIs used to manage daily platform operations and business workflows.
- Built TypeScript-based backend services and content management workflows supporting structured publishing operations.
- Developed GraphQL schemas, resolvers, and APIs powering commerce and catalog management functionality.
- Collaborated closely with frontend developers to deliver complete full-stack product features across multiple client projects.

---

## Engineering Themes

- Full-Stack Development
- REST APIs
- GraphQL
- Content Management
- E-Commerce
- Backend Foundations

---

## Core Technologies

### Backend

- Node.js
- Express.js
- TypeScript

### Frontend

- React

### Data

- MongoDB

### API

- REST APIs
- GraphQL
- Apollo GraphQL

### State Management

- Redux

### Infrastructure

- Git

---

# Early Career

## Backend Developer Trainee

**Duration**

Jan 2023 — Jun 2023

**Location**

Surat, Gujarat, India

---

### Summary

Started my professional software engineering journey by building backend APIs, implementing business logic, designing MongoDB data models, and learning production software development under senior engineers.

---

### Highlights

- Developed backend APIs and business logic for production client projects using Node.js and Express.js.
- Designed MongoDB collections and data models based on business requirements.
- Collaborated with frontend developers to integrate, test, and maintain backend services.
- Established strong foundations in backend architecture, API development, and collaborative software engineering.

---

# Experience Progression

The section should visually communicate engineering growth.

```
Backend Developer Trainee

↓

MERN Stack Developer

↓

Full Stack Developer

↓

Full Stack Developer
(Enterprise SaaS)
```

The visitor should immediately understand that responsibility increased over time.

Do not make all positions appear equally significant.

---

# Visual Weight

Approximate height allocation

```
Transcodezy
≈45%

Implies Solution
≈35%

Object Infotech
≈15%

Backend Developer Trainee
≈5%
```

This distribution reinforces career progression.

---

# Technology Taxonomy

Technologies should never be displayed as one long list.

Use grouped categories consistently across all companies.

Preferred category order:

```
Backend

Frontend

Data

Infrastructure

Cloud

Messaging

Realtime

AI

Maps

API

State Management
```

Hide any category that has no technologies for a particular company.

---

# Normalized Data Model

The Experience section should be entirely data-driven.

Recommended TypeScript shape:

```ts
type Experience = {
  company: string
  role: string
  duration: string
  location: string
  summary: string

  projects: {
    name: string
    description: string
  }[]

  highlights: string[]

  themes: string[]

  technologies: {
    category: string
    items: string[]
  }[]
}
```

The UI should simply iterate over this structure.

No content should be hardcoded inside React components.

---

# Component Rendering Rules

Every company card renders in the following order:

```
Company Header

↓

Summary

↓

Projects

↓

Highlights

↓

Technology Groups
```

Never reorder these sections.

Never hide any section behind tabs or accordions.

---

# Typography Hierarchy

Order of emphasis:

```
Company Name

↓

Role

↓

Summary

↓

Projects

↓

Highlights

↓

Technology Groups
```

Technology chips should always have the least visual emphasis.

The eye should naturally stop reading after Highlights.

Technologies exist to support the story, not dominate it.

---

# Responsive Rules

## Desktop

- Maximum reading width around 720–820px.
- Generous vertical spacing between companies.
- Projects displayed as compact cards.
- Highlight list spans full width.
- Technology groups wrap naturally.

---

## Tablet

- Single-column layout.
- Slightly reduced spacing.
- Preserve hierarchy exactly.

---

## Mobile

- Single-column layout.
- Projects stack vertically.
- Technology chips wrap onto multiple lines.
- Highlight bullets remain readable without excessive line length.
- No horizontal scrolling.

---

# Motion Guidelines

Animations should communicate hierarchy.

Recommended reveal order:

```
Section

↓

Company Header

↓

Summary

↓

Projects

↓

Highlights

↓

Technology Groups
```

Animation principles:

- Fast (200–350ms).
- Subtle.
- Ease-out transitions.
- Respect `prefers-reduced-motion`.
- Never delay content enough to impact usability.

---

# Accessibility

- Use semantic `<section>` and `<article>` elements.
- Each company card should be an `<article>`.
- Maintain proper heading hierarchy (`h2 → h3 → h4`).
- Ensure sufficient color contrast.
- Do not rely on color alone to communicate information.
- Keep all interactive elements keyboard accessible.
- Respect reduced-motion preferences.

---

# Implementation Principles

The coding agent should treat this Experience section as a curated engineering narrative rather than a résumé.

Specifically:

- Do not reproduce LinkedIn styling.
- Do not reproduce resume formatting.
- Prioritize scanning over reading.
- Prioritize ownership over responsibilities.
- Prioritize engineering outcomes over feature lists.
- Prioritize architecture over implementation details.
- Prioritize measurable impact whenever available.

If additional content is ever added in the future, it should satisfy at least one of these criteria:

- Demonstrates ownership.
- Shows architectural decision-making.
- Highlights scalability.
- Improves system reliability.
- Quantifies business impact.
- Demonstrates cross-system integration.
- Reflects technical leadership.

Otherwise, it should be omitted.

---

# Final Design Philosophy

A recruiter should be able to understand the entire Experience section in under one minute.

After reading it, they should naturally conclude:

- This engineer builds production systems.
- This engineer owns meaningful technical work.
- This engineer is comfortable with complex backend architecture.
- This engineer has experience across multiple industries.
- This engineer delivers measurable engineering outcomes.
- This engineer has progressed consistently throughout their career.

The Experience section should leave the impression of a thoughtful product engineer who designs, builds, and owns scalable software systems—not someone who simply completed assigned tasks.

This document is the canonical source of truth for the portfolio Experience section. Any future modifications should preserve the principles, hierarchy, and narrative established here.