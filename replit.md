# AI Learning by IIEL — Website

## Project Overview
A premium, SaaS-style educational website for AI Learning by IIEL. Presents a practical AI training program with 8 pages, 15+ homepage sections, contact and enrollment forms.

## Tech Stack
- **Frontend:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend:** Express.js (Node/TypeScript)
- **Routing:** Wouter
- **Forms:** react-hook-form + zod
- **Data Fetching:** TanStack Query v5

## Pages
- `/` — Full homepage (Hero, About, Use Cases, Modules, Outcomes, Session Timeline, Demo, Careers, Why IIEL, Testimonials, FAQ, CTA)
- `/about` — Brand/program overview
- `/program` — Curriculum with 5 expandable modules
- `/use-cases` — 6 detailed AI business use cases
- `/careers` — Career paths and outcomes
- `/faq` — Full FAQ with category grouping
- `/contact` — Contact form (POST /api/contact)
- `/enroll` — Enrollment form (POST /api/enroll)

## Components
- `client/src/components/nav.tsx` — Sticky nav with mobile menu
- `client/src/components/footer.tsx` — Footer with links and contact info

## API Routes
- `POST /api/contact` — Submit a contact inquiry
- `POST /api/enroll` — Submit an enrollment application

## Brand
- Name: AI Learning by IIEL
- Primary color: Blue (217 91% 35%)
- Font: Plus Jakarta Sans (headings/body), JetBrains Mono (code)
- Positioning: Practical, premium, career-focused AI training
