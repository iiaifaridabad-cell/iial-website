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
  ArrowRight,
  Sparkles,
  BarChart3,
  Mail,
  Megaphone,
  Code2,
  Presentation,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
  Star,
  Zap,
  Target,
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  Play,
  FileText,
  Brain,
  Lightbulb,
  Globe,
  Shield,
  Rocket,
} from "lucide-react";

const modules = [
  {
    step: "01",
    icon: BarChart3,
    title: "AI Data Analysis",
    subtitle: "Excel & Finance",
    context: "Work with sales data containing Product, Sales Amount, Region, and Month.",
    prompt: "Analyze this sales data and give top insights about which product and region is performing best.",
    followUp: "Create a summary report for management.",
    outcomes: ["AI data analysis", "Finance workflow automation", "Business intelligence", "Insight extraction"],
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-500",
    badgeColor: "bg-blue-500/10 text-blue-600",
  },
  {
    step: "02",
    icon: Mail,
    title: "AI Email Automation",
    subtitle: "Professional Communication",
    context: "A customer asks for pricing and delivery details.",
    prompt: "Write a professional email replying to a customer asking for product pricing and delivery time.",
    followUp: "Adjust the tone to be more formal for a corporate client.",
    outcomes: ["Emails written in seconds", "Tone adjustment", "Professional communication", "Faster response workflows"],
    color: "from-violet-500/10 to-violet-600/5",
    accent: "text-violet-500",
    badgeColor: "bg-violet-500/10 text-violet-600",
  },
  {
    step: "03",
    icon: Megaphone,
    title: "AI Marketing Content",
    subtitle: "Campaigns & Creative",
    context: "Create a campaign for a clothing brand targeting young professionals.",
    prompt: "Create a social media marketing campaign for a clothing brand targeting young professionals.",
    followUp: "Generate 5 Instagram caption variations with different hooks.",
    outcomes: ["AI campaign creation", "Content ideation", "Audience-based copy", "Creative productivity"],
    color: "from-pink-500/10 to-pink-600/5",
    accent: "text-pink-500",
    badgeColor: "bg-pink-500/10 text-pink-600",
  },
  {
    step: "04",
    icon: Code2,
    title: "AI Coding Assistant",
    subtitle: "Python & Automation",
    context: "Use AI to generate a Python script for working with sales data.",
    prompt: "Write a Python program that reads sales data from Excel and calculates total sales per region.",
    followUp: "Explain the code step by step and add error handling.",
    outcomes: ["AI-generated code", "Code explanation", "Debugging support", "Faster prototyping"],
    color: "from-emerald-500/10 to-emerald-600/5",
    accent: "text-emerald-500",
    badgeColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    step: "05",
    icon: Presentation,
    title: "AI Presentation Generator",
    subtitle: "Slides & Reports",
    context: "Create a management presentation summarizing the full analysis.",
    prompt: "Create a PowerPoint presentation summarizing the sales analysis for management.",
    followUp: "Add an executive summary slide and suggest 3 key recommendations.",
    outcomes: ["Instant slide structure", "Content summarization", "Executive reporting", "Time savings"],
    color: "from-amber-500/10 to-amber-600/5",
    accent: "text-amber-500",
    badgeColor: "bg-amber-500/10 text-amber-600",
  },
];

const outcomes = [
  { icon: Brain, title: "Think in Prompts", desc: "Structure tasks efficiently for AI tools" },
  { icon: Zap, title: "10x Productivity", desc: "Automate repetitive business workflows" },
  { icon: BarChart3, title: "Data Intelligence", desc: "Extract insights from complex datasets" },
  { icon: Mail, title: "Communication Mastery", desc: "Write professional emails in seconds" },
  { icon: Code2, title: "No-Code AI Coding", desc: "Generate and understand code with AI" },
  { icon: Target, title: "Marketing Campaigns", desc: "Create targeted content at scale" },
  { icon: Presentation, title: "Executive Reporting", desc: "Build presentations and summaries fast" },
  { icon: TrendingUp, title: "Career Advancement", desc: "Stand out as AI-ready in any industry" },
];

const sessionSteps = [
  { time: "0-10 min", title: "Introduction to AI", desc: "What AI is, what it can do, and how to think about it as a business tool." },
  { time: "10-25 min", title: "Data Analysis Demo", desc: "Live walkthrough: uploading sales data, prompting for insights, and generating reports." },
  { time: "25-40 min", title: "Email & Communication", desc: "Writing professional emails, adjusting tone, and responding to customer inquiries." },
  { time: "40-55 min", title: "Marketing & Content", desc: "Creating social media campaigns, ad copy, and marketing strategy with AI." },
  { time: "55-70 min", title: "Code & Automation", desc: "Generating Python scripts, understanding code, and building simple automations." },
  { time: "70-90 min", title: "Presentations & Q&A", desc: "Creating executive presentations and open floor for questions and exploration." },
];

const careers = [
  { icon: Briefcase, title: "Business Analyst", desc: "Leverage AI for data reporting and insights in any organization.", tag: "High Demand" },
  { icon: Megaphone, title: "Digital Marketer", desc: "Create AI-powered campaigns and content strategies at scale.", tag: "Growing Fast" },
  { icon: Code2, title: "AI-Assisted Developer", desc: "Build and prototype faster with AI coding companions.", tag: "Top Paying" },
  { icon: Presentation, title: "Operations Manager", desc: "Automate workflows and reporting to drive business efficiency.", tag: "Essential" },
  { icon: Globe, title: "Entrepreneur", desc: "Run lean operations with AI doing the heavy lifting for you.", tag: "Future-Ready" },
  { icon: BookOpen, title: "Consultant", desc: "Advise organizations on AI implementation and productivity.", tag: "Emerging" },
];

const whyChoose = [
  { icon: Target, title: "100% Practical", desc: "No theory overload. Every lesson is built around real business scenarios you'll actually use." },
  { icon: Clock, title: "90-Minute Intensive", desc: "Designed for busy professionals. Get maximum value in a single power-packed session." },
  { icon: Users, title: "Beginner Friendly", desc: "No prior AI or technical experience needed. Start from zero, finish job-ready." },
  { icon: Award, title: "Industry Recognized", desc: "Backed by IIEL's reputation for practical, career-focused professional education." },
  { icon: Rocket, title: "Immediate Application", desc: "Walk out of the session ready to apply AI skills at work the very next day." },
  { icon: Shield, title: "Expert-Led Training", desc: "Learn from practitioners who use these exact AI workflows in real business contexts." },
];

const testimonials = [
  {
    name: "Aisha Rahman",
    role: "Marketing Manager",
    company: "TechVentures",
    text: "I walked in skeptical and walked out amazed. Within 90 minutes I understood exactly how to use AI for my day-to-day marketing work. The email automation module alone saved me 2 hours a day.",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Rahul Mehta",
    role: "Business Graduate",
    company: "University of Commerce",
    text: "As a fresh graduate, this training gave me a massive edge in job interviews. Being able to say I can use AI for data analysis and reporting is a game-changer. I got placed within 3 weeks.",
    rating: 5,
    avatar: "RM",
  },
  {
    name: "Sarah Chen",
    role: "Small Business Owner",
    company: "Chen's Boutique",
    text: "I used to spend hours creating marketing content and responding to customers. Now AI does it in minutes. The ROI on this training was instant. Absolutely worth every penny.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "David Okafor",
    role: "Data Analyst",
    company: "FinServ Group",
    text: "The AI coding module was unexpected but incredibly useful. I'm not a programmer but now I can generate Python scripts for data processing. My team is shocked by what I can do now.",
    rating: 5,
    avatar: "DO",
  },
];

const faqs = [
  {
    q: "Do I need any technical background or prior AI experience?",
    a: "Absolutely not. This program is designed to be beginner-friendly. You only need a computer and a willingness to learn. No coding, no math, no technical background required.",
  },
  {
    q: "What tools will I be using during the training?",
    a: "The training uses widely accessible AI tools that require no installation. You'll be working with real prompts and real outputs from day one.",
  },
  {
    q: "How long is the training session?",
    a: "The core training is 90 minutes, structured as an intensive, hands-on session. This is designed for busy professionals who want maximum value in minimal time.",
  },
  {
    q: "Is this suitable for students?",
    a: "Yes, this program is ideal for students, especially business, marketing, and programming students. The practical skills taught here will make you significantly more competitive in the job market.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, upon completion you will receive an IIEL certificate of completion that you can add to your LinkedIn profile and resume.",
  },
  {
    q: "Can small business owners benefit from this training?",
    a: "Absolutely. Small business owners are one of our primary audiences. The program shows you how to use AI to handle marketing, communication, reporting, and operations — tasks that normally require a full team.",
  },
  {
    q: "Is this a one-time session or an ongoing course?",
    a: "The core program is a structured 90-minute intensive session. Additional deep-dive modules and advanced tracks are available for learners who want to go further.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section
        data-testid="section-hero"
        className="relative min-h-screen flex flex-col items-center justify-center bg-gray-950 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,78,216,0.25),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_60%,rgba(124,58,237,0.1),rgba(0,0,0,0))]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px),
              repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)`
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide">IIEL Certified AI Training Program</span>
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
            Master practical AI skills that automate business work like reporting, email writing, data analysis, marketing, coding, and presentations.
          </p>

          <p className="text-sm text-blue-400/80 font-medium mb-10 tracking-wide">
            Hands-on &nbsp;&middot;&nbsp; Beginner-friendly &nbsp;&middot;&nbsp; Career-focused
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 flex-wrap">
            <Link href="/enroll">
              <a>
                <Button
                  data-testid="button-hero-enroll"
                  size="lg"
                  className="gap-2 px-8 bg-blue-600 hover:bg-blue-700 text-white border-0 text-base"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
            <Link href="/use-cases">
              <a>
                <Button
                  data-testid="button-hero-use-cases"
                  size="lg"
                  variant="outline"
                  className="gap-2 px-8 text-base border-gray-600 text-gray-200 bg-transparent"
                >
                  <Play className="w-4 h-4" />
                  Explore Use Cases
                </Button>
              </a>
            </Link>
          </div>

          <div
            data-testid="section-trust-strip"
            className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm border-t border-gray-800 pt-10"
          >
            {[
              { icon: Users, text: "500+ Professionals Trained" },
              { icon: Star, text: "4.9 / 5 Rating" },
              { icon: Clock, text: "90-Minute Intensive" },
              { icon: Award, text: "IIEL Certified" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-blue-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

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
                  <span className="text-blue-400">{">"}</span> Analyze this sales data and identify top performing products and regions. Create a summary report for management.
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

      <section
        data-testid="section-about"
        className="py-24 bg-white dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">About the Program</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                A Practical AI Learning Experience for the Real World
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                AI Learning by IIEL is designed to help students and professionals understand how AI works in real business environments. Instead of only learning theory, participants experience how AI can be used to solve everyday work challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This program is practical, career-oriented, and built to improve productivity. Learners gain the confidence to use AI as a daily business tool — not just as a concept — across communication, analysis, reporting, marketing, presentations, and coding.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "No prior AI experience needed",
                  "Real business scenarios and prompts",
                  "Applicable from day one",
                  "IIEL certified completion",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <a>
                  <Button data-testid="button-about-learn-more" variant="outline" className="gap-2">
                    Learn More About IIEL
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </a>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-xl bg-gradient-to-br from-primary/10 to-violet-500/10 border border-primary/20 p-8">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border border-card-border">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Primary Message</p>
                    <p className="text-foreground font-semibold leading-snug">"AI will not replace people. People who know AI will replace people who don't."</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Practical", "Premium", "Futuristic", "Career-Oriented", "Results-Focused", "Beginner-Friendly"].map((attr) => (
                      <div key={attr} className="flex items-center gap-2 p-3 rounded-md bg-card border border-card-border">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="text-xs font-medium text-foreground">{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-testid="section-use-case-feature"
        className="py-24 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">Core Learning Experience</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Build an AI Business Assistant
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The core learning experience of this program is understanding how to use AI like a business assistant that can support daily professional tasks in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Students learn how AI can help with the most common and time-consuming business tasks:
              </p>
              {[
                { icon: Mail, label: "Writing professional emails", color: "text-violet-500" },
                { icon: FileText, label: "Creating detailed reports", color: "text-blue-500" },
                { icon: BarChart3, label: "Analyzing sales and business data", color: "text-emerald-500" },
                { icon: Megaphone, label: "Generating marketing content", color: "text-pink-500" },
                { icon: Presentation, label: "Preparing presentations", color: "text-amber-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                  <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                <span className="ml-1 text-xs text-muted-foreground font-mono">prompt → output</span>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">Prompt Input</p>
                  <div className="bg-muted rounded-md p-3 font-mono text-xs text-foreground border border-border">
                    Write a professional email replying to a customer asking about product pricing and delivery time for their order of 50 units.
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">AI Generated Output</p>
                  <div className="bg-primary/5 rounded-md p-3 text-xs leading-relaxed text-foreground border border-primary/10">
                    <p className="font-semibold mb-1">Subject: Re: Product Pricing & Delivery Inquiry</p>
                    <p className="text-muted-foreground">Dear [Customer Name],</p>
                    <p className="text-muted-foreground mt-1">Thank you for reaching out. For an order of 50 units, the pricing is $45/unit with a 10% bulk discount applied, bringing your total to $2,025...</p>
                    <p className="text-primary/70 text-xs mt-2">Estimated delivery: 5-7 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              By the end of the session, learners will understand how to <strong className="text-foreground">think in prompts</strong>, structure tasks for AI, and generate useful outputs for real-world business needs.
            </p>
          </div>
        </div>
      </section>

      <section
        data-testid="section-scenario"
        className="py-24 bg-white dark:bg-gray-950"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">Real-World Impact</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See How AI Fits Into Real Business Work
            </h2>
          </div>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-violet-500/5 border border-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Small Business Owner Scenario</p>
                      <p className="text-sm text-muted-foreground">A typical day before and after AI</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Imagine a small business owner who needs to analyze sales data, send customer emails, create marketing content, and generate business reports. Normally, this could take hours of manual effort.
                  </p>
                  <p className="text-foreground font-semibold leading-relaxed">
                    With AI, these tasks can be completed in minutes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    This is the kind of practical workflow learners experience during the training — showing how AI can improve speed, productivity, and decision-making across real business operations.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:w-64">
                  {[
                    { label: "Sales Report", before: "3 hours", after: "8 minutes", icon: BarChart3 },
                    { label: "Customer Emails", before: "2 hours", after: "5 minutes", icon: Mail },
                    { label: "Marketing Copy", before: "4 hours", after: "12 minutes", icon: Megaphone },
                    { label: "Presentation", before: "5 hours", after: "15 minutes", icon: Presentation },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-card border border-card-border p-3.5">
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-semibold text-foreground">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-red-500 line-through">{item.before}</span>
                        <ChevronRight className="w-3 h-3 text-muted-foreground" />
                        <span className="text-emerald-600 font-semibold">{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        data-testid="section-modules"
        className="py-24 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">Curriculum</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What You Will Learn
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Five hands-on modules, each built around a real business scenario with live AI demonstrations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => (
              <div
                key={mod.title}
                data-testid={`card-module-${idx + 1}`}
                className={`rounded-xl border border-border bg-gradient-to-br ${mod.color} p-6 hover-elevate`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center`}>
                    <mod.icon className={`w-5 h-5 ${mod.accent}`} />
                  </div>
                  <span className="text-2xl font-bold text-foreground/10">{mod.step}</span>
                </div>
                <h3 className="font-bold text-foreground text-base mb-1">{mod.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{mod.subtitle}</p>
                <div className="bg-card border border-card-border rounded-md p-3 mb-3">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-mono">Sample Prompt</p>
                  <p className="text-xs text-foreground font-mono leading-relaxed italic">"{mod.prompt}"</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {mod.outcomes.map((o) => (
                    <span key={o} className={`text-xs px-2 py-0.5 rounded-md font-medium ${mod.badgeColor}`}>{o}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">And Much More</h3>
              <p className="text-sm text-muted-foreground mb-4">Advanced prompting, automation workflows, and AI strategy for your specific industry.</p>
              <Link href="/program">
                <a>
                  <Button variant="outline" size="sm" data-testid="button-view-full-program" className="gap-1.5">
                    View Full Program
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        data-testid="section-outcomes"
        className="py-24 bg-white dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">Outcomes</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What You Will Be Able to Do
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Leave the session with a concrete skill set you can apply the very next day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.map((item, idx) => (
              <div
                key={item.title}
                data-testid={`card-outcome-${idx}`}
                className="p-5 rounded-xl border border-border bg-card hover-elevate group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-testid="section-session"
        className="py-24 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">Session Format</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              90-Minute Session Structure
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A carefully structured intensive that maximizes learning in minimum time.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-6">
              {sessionSteps.map((step, idx) => (
                <div key={step.title} data-testid={`step-session-${idx}`} className="flex gap-6 items-start">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground flex-shrink-0 z-10 border-2 border-background">
                    {idx + 1}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-start gap-3 flex-wrap">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-semibold text-foreground text-sm">{step.title}</h3>
                          <span className="text-xs text-primary font-mono font-medium bg-primary/10 px-2 py-0.5 rounded-md">{step.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        data-testid="section-bonus-demo"
        className="py-24 bg-gray-950"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border-blue-500/20">
              Bonus Wow Moment
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Magic Moment
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              One of the most powerful demonstrations in the program: watch AI summarize an entire document in seconds.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-800 bg-gray-900/80 flex-wrap gap-y-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-2 text-xs text-gray-500 font-mono">PDF Summarization Demo</span>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-800 p-5 gap-5">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Document Uploaded</span>
                </div>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center bg-gray-800/30">
                  <FileText className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-400 font-medium">Annual_Business_Report_2024.pdf</p>
                  <p className="text-xs text-gray-600 mt-1">47 pages • 12MB</p>
                </div>
                <div className="mt-3 font-mono text-xs text-gray-400 bg-gray-800/50 rounded-md p-3 border border-gray-700">
                  <span className="text-blue-400">{">"}</span> Summarize this PDF document, extract the key insights and create a 5-point executive summary.
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">AI Summary — Generated in 8 seconds</span>
                </div>
                <div className="space-y-2.5 text-xs font-mono text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold flex-shrink-0">1.</span>
                    <p>Revenue grew 23% YoY driven by North American expansion and new product launches in Q3.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold flex-shrink-0">2.</span>
                    <p>Operating costs reduced by 12% through process automation initiatives across 3 departments.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold flex-shrink-0">3.</span>
                    <p>Customer retention improved to 87% following CRM system upgrade and loyalty program launch.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold flex-shrink-0">4.</span>
                    <p>R&D investment increased by $2.1M to support AI product development for 2025.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold flex-shrink-0">5.</span>
                    <p>Recommendation: Accelerate digital transformation roadmap to achieve 30% efficiency gains by Q2 2025.</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-800 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gray-500" />
                  <span className="text-xs text-gray-500">What would take you 2 hours took AI 8 seconds.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-testid="section-careers"
        className="py-24 bg-white dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">Career Opportunities</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Where AI Skills Take You
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              AI proficiency is quickly becoming a baseline expectation across industries. Here's where our graduates are headed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careers.map((career, idx) => (
              <div
                key={career.title}
                data-testid={`card-career-${idx}`}
                className="p-5 rounded-xl border border-border bg-card hover-elevate group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <career.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-md">{career.tag}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{career.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{career.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/careers">
              <a>
                <Button data-testid="button-view-careers" variant="outline" className="gap-2">
                  Explore Career Paths
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section
        data-testid="section-why-choose"
        className="py-24 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">Why IIEL</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose AI Learning by IIEL
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Six distinct reasons thousands of learners choose IIEL for their AI education.
            </p>
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

      <section
        data-testid="section-testimonials"
        className="py-24 bg-white dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">Student Stories</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Learners Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                data-testid={`card-testimonial-${idx}`}
                className="p-6 rounded-xl border border-border bg-card hover-elevate"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} &middot; {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-testid="section-faq"
        className="py-24 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="mb-4 text-xs font-semibold tracking-widest uppercase" variant="secondary">FAQ</Badge>
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
              <a>
                <Button data-testid="button-view-all-faq" variant="outline" size="sm" className="gap-1.5">
                  View All FAQs
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section
        data-testid="section-final-cta"
        className="py-24 bg-gradient-to-br from-gray-950 via-blue-950/30 to-gray-950 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(29,78,216,0.15),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide">Limited Seats Available</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Your AI Journey
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Starts Today
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Join hundreds of professionals who've already transformed their careers with practical AI skills. Don't get left behind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <Link href="/enroll">
              <a>
                <Button
                  data-testid="button-final-cta-enroll"
                  size="lg"
                  className="gap-2 px-10 bg-blue-600 text-white border-0 text-base"
                >
                  Enroll Now — Secure Your Spot
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Button
                  data-testid="button-final-cta-contact"
                  size="lg"
                  variant="outline"
                  className="gap-2 px-8 text-base border-gray-600 text-gray-200 bg-transparent"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us First
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
