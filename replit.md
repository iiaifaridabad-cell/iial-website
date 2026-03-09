# AI Learning by IIEL — Website

## Project Overview
A premium, SaaS-style marketing and enrollment website for AI Learning by IIEL. Presents a 3-month structured AI training program (24 sessions, 8/month) with 8 pages, 15+ homepage sections, contact and enrollment forms.

## Tech Stack
- **Frontend:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend:** Express.js (Node/TypeScript)
- **Routing:** Wouter (v3 — Link renders as anchor, no nested `<a>` tags)
- **Forms:** react-hook-form + zod + zodResolver
- **Data Fetching:** TanStack Query v5

## Pages
- `/` — Full homepage (Hero, About, Who It's For, Program Structure, What You Learn, Use Cases, Outcomes, 3-Month Roadmap, Careers, Why IIEL, Testimonials, FAQ, Final CTA)
- `/about` — Brand/program overview
- `/curriculum` — 3-month curriculum with expandable month-by-month breakdown (all 3 months open by default)
- `/program` — Redirects to /curriculum
- `/use-cases` — AI business use cases with prompt/output mockups
- `/careers` — Career paths and outcomes
- `/faq` — FAQ with category grouping (3-month program content, no outdated "90-minute" references)
- `/contact` — "Talk to an Advisor" contact form (POST /api/contact)
- `/enroll` — Enrollment form (POST /api/enroll)

## Navigation
- Links: About, Curriculum, Use Cases, Careers, FAQ, Contact
- Header CTA: "Join the Program" (links to /enroll)
- Mobile hamburger menu with all links

## Footer
- Social: LinkedIn, Instagram, YouTube, Facebook (all with aria-label)
- Navigation: About, Curriculum, Use Cases, Careers, FAQ, Contact, Enroll

## Program Details
- Duration: 3 months / 24 sessions / 8 sessions per month
- Month 1: AI Foundations (AI tools intro, Prompt engineering, AI writing tools, AI productivity tools)
- Month 2: AI Business Applications (AI data analysis, AI marketing automation, AI reporting, AI workflow automation)
- Month 3: Advanced AI Applications (AI coding assistant, AI automation workflows, AI presentation generation, Real-world projects)
- Audience: Students, Freshers, Professionals, Business Owners

## Components
- `client/src/components/nav.tsx` — Sticky nav with mobile menu, CTA "Join the Program"
- `client/src/components/footer.tsx` — Footer with LinkedIn, Instagram, YouTube, Facebook

## API Routes
- `POST /api/contact` — Submit a contact inquiry
- `POST /api/enroll` — Submit an enrollment application

## Storage
- In-memory storage (MemStorage) — no database connected

## Brand
- Name: AI Learning by IIEL
- Primary color: Blue (217 91% 35%)
- Font: Plus Jakarta Sans (headings/body), JetBrains Mono (code)
- Positioning: "AI will not replace people. People who know AI will replace people who don't."
- Visual: dark futuristic hero, blue/violet gradients, terminal-style mockups, card-based layout
