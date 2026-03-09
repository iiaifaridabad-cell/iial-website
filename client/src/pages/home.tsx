import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight, Sparkles, BarChart3, Mail, Megaphone,
  Code2, Presentation, CheckCircle2, Clock, Users,
  TrendingUp, Star, Zap, Target, Award, BookOpen,
  Briefcase, ChevronRight, Brain, Lightbulb, Globe,
  Shield, Rocket, GraduationCap, Building2, UserCheck,
  Workflow, FileText, CalendarDays, Play, Bot,
} from "lucide-react";

const audienceCards = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Learn future-ready skills and gain early exposure to AI tools used across industries.",
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: UserCheck,
    title: "Freshers",
    desc: "Become job-ready with practical AI skills companies are already using in modern workplaces.",
    color: "from-violet-500/10 to-violet-600/5",
    accent: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "Improve productivity by automating reports, emails, research, presentations, and business tasks.",
    color: "from-emerald-500/10 to-emerald-600/5",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Building2,
    title: "Business Owners",
    desc: "Use AI to reduce workload, automate operations, improve decision-making, and grow faster.",
    color: "from-amber-500/10 to-amber-600/5",
    accent: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const learningFeatures = [
  {
    icon: BarChart3,
    title: "AI Data Analysis",
    desc: "Analyze business data and generate insights automatically.",
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Workflow,
    title: "AI Business Automation",
    desc: "Automate repetitive work like reports, emails, and documentation.",
    accent: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Megaphone,
    title: "AI Marketing Creation",
    desc: "Generate marketing campaigns, social media content, and ad copy.",
    accent: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Code2,
    title: "AI Coding Assistant",
    desc: "Use AI to write, explain, and debug code.",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Mail,
    title: "AI Communication Tools",
    desc: "Create professional emails, responses, and proposals.",
    accent: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Presentation,
    title: "AI Presentation Generator",
    desc: "Automatically create business presentations and reports.",
    accent: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const useCases = [
  {
    icon: BarChart3,
    title: "Sales Data Analysis",
    desc: "Upload sales data and ask AI to generate insights and reports.",
    prompt: "Analyze this sales data and identify the top performing products and regions.",
    output: "Top product: Premium Widget (+34%) · North District leading · Growth: +18% MoM",
    accent: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    icon: Mail,
    title: "Customer Email Automation",
    desc: "Generate professional responses instantly for customer queries and communication.",
    prompt: "Write a professional reply to a customer asking about bulk pricing and delivery.",
    output: "Subject: Re: Bulk Order Inquiry · Dear [Name], Thank you for reaching out...",
    accent: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    icon: Megaphone,
    title: "Marketing Campaign Creation",
    desc: "Create social media campaigns, ad copy, and promotional strategies.",
    prompt: "Create a social media campaign for a clothing brand targeting young professionals.",
    output: "Instagram captions · Ad headlines · Campaign strategy · Content calendar",
    accent: "text-pink-400",
    border: "border-pink-500/20",
  },
  {
    icon: Code2,
    title: "AI Coding Productivity",
    desc: "Generate Python programs for business or data analysis tasks.",
    prompt: "Write a Python script that reads sales data from Excel and calculates totals per region.",
    output: "Complete Python script · Step-by-step explanation · Error handling included",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: Presentation,
    title: "Business Presentation Creation",
    desc: "Generate management-ready presentations and summaries using AI.",
    prompt: "Create a PowerPoint presentation summarizing Q4 sales analysis for the board.",
    output: "Slide structure · Executive summary · Key insights · 3 strategic recommendations",
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
];

const outcomes = [
  { icon: BarChart3, title: "Analyze business data with AI" },
  { icon: Workflow, title: "Automate repetitive tasks" },
  { icon: Megaphone, title: "Generate marketing content" },
  { icon: Code2, title: "Improve coding productivity" },
  { icon: Mail, title: "Create professional communication" },
  { icon: Presentation, title: "Generate reports and presentations" },
];

const roadmap = [
  {
    month: "Month 1",
    theme: "AI Foundations",
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-500/10",
    border: "border-blue-500/30",
    badge: "text-blue-400",
    topics: [
      "AI tools introduction",
      "Prompt engineering",
      "AI writing tools",
      "AI productivity tools",
    ],
  },
  {
    month: "Month 2",
    theme: "AI Business Applications",
    color: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-500/10",
    border: "border-violet-500/30",
    badge: "text-violet-400",
    topics: [
      "AI data analysis",
      "AI marketing automation",
      "AI reporting",
      "AI workflow automation",
    ],
  },
  {
    month: "Month 3",
    theme: "Advanced AI Applications",
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    badge: "text-emerald-400",
    topics: [
      "AI coding assistant",
      "AI automation workflows",
      "AI presentation generation",
      "Real-world projects",
    ],
  },
];

const careers = [
  { icon: Brain, title: "AI Engineer", tag: "High Demand" },
  { icon: Lightbulb, title: "Prompt Engineer", tag: "Emerging" },
  { icon: Workflow, title: "AI Automation Specialist", tag: "Growing Fast" },
  { icon: BarChart3, title: "AI Business Analyst", tag: "Essential" },
  { icon: Megaphone, title: "AI Content Strategist", tag: "Future-Ready" },
];

const whyChoose = [
  { icon: Target, title: "Practical Hands-On Training", desc: "Every session is built around real business scenarios with actual AI tools and outputs." },
  { icon: Briefcase, title: "Real Business Use Cases", desc: "Learn through situations that mirror actual workplace tasks and business challenges." },
  { icon: Award, title: "Industry-Relevant Skills", desc: "Curriculum aligned with what employers and businesses are actually using today." },
  { icon: Users, title: "Beginner-Friendly Learning", desc: "Structured for zero prior experience. Start from basics, finish job-ready." },
  { icon: Rocket, title: "Future-Ready Knowledge", desc: "Aligned with where AI and business are heading over the next 5 years." },
  { icon: Zap, title: "Productivity-Focused AI Training", desc: "Every module ties directly to saving time, improving output, and creating value." },
];

const testimonials = [
  {
    text: "This program made AI feel practical, useful, and easy to apply in real work.",
    author: "Student Participant",
    role: "Student",
    avatar: "SP",
    accent: "bg-blue-500",
  },
  {
    text: "I could immediately see how AI could help with reporting, emails, and presentations.",
    author: "Professional Participant",
    role: "Professional",
    avatar: "PP",
    accent: "bg-violet-500",
  },
  {
    text: "The use cases felt real, and the structure made it easy to learn step by step.",
    author: "Fresher Participant",
    role: "Fresher",
    avatar: "FP",
    accent: "bg-emerald-500",
  },
];

const faqs = [
  {
    q: "Is the course beginner friendly?",
    a: "Yes. The program is designed for beginners as well as learners who want structured practical AI exposure. No prior experience is required.",
  },
  {
    q: "Do I need coding knowledge?",
    a: "No. Coding is not required to benefit from the course. Some sections include coding use cases, but the program is accessible to non-technical learners.",
  },
  {
    q: "Is this useful for business owners?",
    a: "Yes. Business owners can use the program to understand how AI supports automation, communication, marketing, reporting, and decision-making.",
  },
  {
    q: "Will I get hands-on practice?",
    a: "Yes. The course includes practical demonstrations, examples, and hands-on AI activities across all 24 sessions.",
  },
  {
    q: "What tools will be used?",
    a: "The program covers modern AI tools used for writing, analysis, content generation, coding support, business workflows, and productivity tasks.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        data-testid="section-hero"
        className="relative min-h-screen flex flex-col items-center justify-center bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,78,216,0.28),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_60%,rgba(124,58,237,0.12),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(255,255,255,.6) 80px,rgba(255,255,255,.6) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(255,255,255,.6) 80px,rgba(255,255,255,.6) 81px)`
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide">3-Month Structured AI Program · 24 Sessions</span>
          </div>

          <h1
            data-testid="text-hero-headline"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Learn AI Through
            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
              Real Business Use Cases
            </span>
          </h1>

          <p
            data-testid="text-hero-subheadline"
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            A 3-month structured AI program that teaches students, professionals, and business owners how to use AI tools to automate real work.
          </p>

          <p className="text-sm text-blue-400/80 font-medium mb-10 tracking-wide">
            24 sessions &nbsp;&middot;&nbsp; Practical learning &nbsp;&middot;&nbsp; Real-world AI skills
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 flex-wrap">
            <Link href="/enroll">
              <Button
                data-testid="button-hero-join"
                size="lg"
                className="gap-2 px-8 bg-blue-600 text-white border-0 text-base"
              >
                Join the Program
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/curriculum">
              <Button
                data-testid="button-hero-curriculum"
                size="lg"
                variant="outline"
                className="gap-2 px-8 text-base border-gray-600 text-gray-200 bg-transparent"
              >
                <Play className="w-4 h-4" />
                View Curriculum
              </Button>
            </Link>
          </div>

          <div
            data-testid="section-trust-strip"
            className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm border-t border-gray-800 pt-10"
          >
            {[
              { icon: CalendarDays, text: "3-Month Program" },
              { icon: Users, text: "24 Live Sessions" },
              { icon: Star, text: "4.9 / 5 Rating" },
              { icon: Award, text: "IIEL Certified" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-blue-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI dashboard visual */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-16">
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/80">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-gray-500 font-mono">AI Business Assistant — Live Demo</span>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Your Prompt</span>
                </div>
                <div className="font-mono text-sm text-gray-300 bg-gray-950/60 rounded-md p-3 leading-relaxed border border-gray-800">
                  <span className="text-blue-400">{">"}</span> Analyze this sales data. Identify top products, best regions, and create a management summary report.
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">AI Output</span>
                </div>
                <div className="font-mono text-xs text-gray-300 leading-relaxed space-y-1.5">
                  <p className="text-emerald-400 font-semibold">Sales Analysis Report — Q4 2024</p>
                  <p className="text-gray-400">Top Product: <span className="text-white">Premium Widget (+34%)</span></p>
                  <p className="text-gray-400">Best Region: <span className="text-white">North District ($2.4M)</span></p>
                  <p className="text-gray-400">Growth Trend: <span className="text-emerald-400">+18% MoM</span></p>
                  <p className="text-gray-400 mt-2 text-xs border-t border-gray-800 pt-2">Recommendation: Increase inventory allocation for North District by 20%...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section data-testid="section-about" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">About the Program</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                Practical AI Learning for Real Work
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AI Learning by IIEL is built around practical AI applications used in real businesses and professional workflows. Instead of focusing only on theory, the program teaches participants how to apply AI in ways that improve productivity, decision-making, and work efficiency.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Learners explore how AI can support data analysis, marketing automation, business communication, coding productivity, presentation generation, and workflow automation.
              </p>
              <p className="text-sm text-foreground font-medium leading-relaxed mb-8 border-l-2 border-primary pl-4 italic">
                The result is a structured learning experience that helps participants understand how AI creates value in real work, not just in abstract concepts.
              </p>
              <Link href="/about">
                <Button data-testid="button-about-learn-more" variant="outline" className="gap-2">
                  Learn More About IIEL
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-violet-500/10 border border-primary/20 p-8">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-card border border-card-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Core Brand Message</p>
                  <p className="text-foreground font-semibold leading-snug">"AI will not replace people. People who know AI will replace people who don't."</p>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { label: "3 Months", desc: "Program duration" },
                    { label: "24 Sessions", desc: "Total live sessions" },
                    { label: "8/Month", desc: "Sessions per month" },
                    { label: "6 Skills", desc: "Core AI skill areas" },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-md bg-card border border-card-border text-center">
                      <p className="font-bold text-primary text-lg">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section data-testid="section-audience" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">Who It's For</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for Learners, Professionals, and Business Leaders
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you're starting your career or running a business, this program gives you the AI skills to move faster.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audienceCards.map((card, idx) => (
              <div
                key={card.title}
                data-testid={`card-audience-${idx}`}
                className={`rounded-xl border border-border bg-gradient-to-br ${card.color} p-6 hover-elevate`}
              >
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-5`}>
                  <card.icon className={`w-6 h-6 ${card.accent}`} />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM STRUCTURE */}
      <section data-testid="section-program-structure" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">Program Structure</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              A Structured 3-Month AI Learning Program
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              The program is designed as a structured roadmap that combines guided learning with real-world practice. Each month builds on the previous one.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { value: "3", label: "Months", icon: CalendarDays },
              { value: "24", label: "Total Sessions", icon: Users },
              { value: "8", label: "Sessions/Month", icon: Clock },
            ].map((s) => (
              <div key={s.label} data-testid={`stat-${s.label}`} className="text-center p-5 rounded-xl border border-border bg-card">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider text-muted-foreground">Course Includes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Live sessions",
                "Real-world use cases",
                "Hands-on AI practice",
                "Prompt engineering",
                "Business automation examples",
                "Industry-relevant projects",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section data-testid="section-learn" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">Curriculum</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What You Will Learn
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Six major learning areas, each grounded in real business applications and practical AI workflows.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningFeatures.map((item, idx) => (
              <div
                key={item.title}
                data-testid={`card-feature-${idx}`}
                className="p-6 rounded-xl border border-border bg-card hover-elevate"
              >
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.accent}`} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/curriculum">
              <Button data-testid="button-view-curriculum" variant="outline" className="gap-2">
                View Full Curriculum
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* REAL BUSINESS USE CASES */}
      <section data-testid="section-use-cases" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">Real Scenarios</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Learn Through Real Business Scenarios
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              Participants experience how AI can be used in practical business situations that save time, improve output quality, and support better decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc, idx) => (
              <div
                key={uc.title}
                data-testid={`card-use-case-${idx}`}
                className={`rounded-xl border ${uc.border} bg-gray-900/60 p-5 hover-elevate`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center">
                    <uc.icon className={`w-4.5 h-4.5 ${uc.accent}`} />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{uc.title}</h3>
                </div>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{uc.desc}</p>
                <div className="rounded-md bg-gray-950/60 border border-gray-800 p-2.5 mb-2">
                  <p className={`text-xs font-mono mb-1 ${uc.accent}`}>{">"} Prompt</p>
                  <p className="text-xs font-mono text-gray-300 leading-relaxed italic">"{uc.prompt}"</p>
                </div>
                <div className="rounded-md bg-gray-950/40 border border-gray-800 p-2.5">
                  <p className="text-xs font-mono text-emerald-400 mb-1">✓ Output</p>
                  <p className="text-xs text-gray-400">{uc.output}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/use-cases">
              <Button data-testid="button-all-use-cases" variant="outline" className="gap-2 border-gray-600 text-gray-200 bg-transparent">
                See All Use Cases
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING OUTCOMES */}
      <section data-testid="section-outcomes" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">Outcomes</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What You'll Be Able to Do After the Program
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              By completing the program, learners will understand how to use AI as a practical productivity tool across academic, professional, and business environments.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {outcomes.map((item, idx) => (
              <div
                key={item.title}
                data-testid={`outcome-${idx}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              These are real-world capabilities learners can apply immediately in <strong className="text-foreground">internships, jobs, business operations,</strong> and future career paths.
            </p>
          </div>
        </div>
      </section>

      {/* 3-MONTH ROADMAP */}
      <section data-testid="section-roadmap" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">Learning Roadmap</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your 3-Month AI Learning Roadmap
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A progressive learning journey — from AI fundamentals to advanced real-world applications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[33%] right-[33%] h-0.5 bg-gradient-to-r from-blue-500/40 via-violet-500/40 to-emerald-500/40" />
            {roadmap.map((month, idx) => (
              <div
                key={month.month}
                data-testid={`roadmap-month-${idx + 1}`}
                className={`rounded-xl border ${month.border} bg-card overflow-hidden`}
              >
                <div className={`bg-gradient-to-r ${month.color} p-5`}>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                    <span className="text-white/80 text-xs font-medium">{month.month}</span>
                  </div>
                  <h3 className="text-white font-bold text-base">{month.theme}</h3>
                </div>
                <div className="p-5 space-y-3">
                  {month.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${month.badge} flex-shrink-0`} />
                      <span className="text-sm text-foreground">{topic}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-border">
                    <span className={`text-xs font-mono font-medium ${month.badge}`}>8 sessions this month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/curriculum">
              <Button data-testid="button-see-roadmap" variant="outline" className="gap-2">
                See the Full Roadmap
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section data-testid="section-careers" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">Career Paths</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              AI Skills Create New Career Opportunities
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Practical AI skills are becoming valuable across industries. Learning how to use AI effectively can improve employability, productivity, and readiness for future roles.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {careers.map((career, idx) => (
              <div
                key={career.title}
                data-testid={`career-role-${idx}`}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover-elevate"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <career.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{career.title}</p>
                  <p className="text-xs text-primary">{career.tag}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-primary/5 border-primary/20 p-5 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Even for non-technical careers, AI literacy is becoming a major advantage in <strong className="text-foreground">communication, marketing, analysis, operations, and decision-making.</strong>
            </p>
          </div>
          <div className="text-center mt-6">
            <Link href="/careers">
              <Button data-testid="button-explore-careers" variant="outline" className="gap-2">
                Explore Career Paths
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section data-testid="section-why-choose" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">Why IIEL</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose AI Learning by IIEL
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item, idx) => (
              <div
                key={item.title}
                data-testid={`card-why-${idx}`}
                className="p-6 rounded-xl border border-border bg-card hover-elevate"
              >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section data-testid="section-testimonials" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">Social Proof</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Learners Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={t.author}
                data-testid={`card-testimonial-${idx}`}
                className="p-6 rounded-xl border border-border bg-card hover-elevate flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-6 italic flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.accent} flex items-center justify-center text-xs font-bold text-white`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-testid="section-faq" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4" variant="secondary">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                data-testid={`accordion-faq-${idx}`}
                className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground py-4 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Link href="/faq">
              <Button data-testid="button-view-all-faq" variant="outline" size="sm" className="gap-1.5">
                View All FAQs
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section data-testid="section-final-cta" className="py-24 bg-gradient-to-br from-gray-950 via-blue-950/30 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(29,78,216,0.18),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide">Next Cohort Enrolling Now</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Start Your AI Learning Journey
          </h2>
          <p className="text-gray-300 text-lg mb-4 leading-relaxed max-w-xl mx-auto">
            Master the AI tools that will define the future of work.
          </p>
          <p className="text-blue-400/80 text-sm font-medium mb-10 tracking-wide">
            Structured learning &nbsp;&middot;&nbsp; Practical use cases &nbsp;&middot;&nbsp; Future-ready skills
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <Link href="/enroll">
              <Button
                data-testid="button-final-cta-enroll"
                size="lg"
                className="gap-2 px-10 bg-blue-600 text-white border-0 text-base"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                data-testid="button-final-cta-advisor"
                size="lg"
                variant="outline"
                className="gap-2 px-8 text-base border-gray-600 text-gray-200 bg-transparent"
              >
                Talk to Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
