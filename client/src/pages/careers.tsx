import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase, Megaphone, Code2, Presentation, Globe,
  BookOpen, TrendingUp, ArrowRight, CheckCircle2,
  BarChart3, Users, Target, Award, Zap, Star,
} from "lucide-react";

const careerPaths = [
  {
    icon: BarChart3,
    title: "Business Analyst",
    tag: "High Demand",
    tagClass: "bg-blue-500/10 text-blue-600",
    salary: "$65,000 - $95,000",
    growth: "+25% by 2027",
    desc: "Business analysts who understand AI can extract insights from complex datasets, automate reporting, and present data-driven recommendations — making them significantly more valuable.",
    skills: ["Data analysis with AI", "Automated reporting", "Dashboard creation", "Insight presentation"],
    industries: ["Finance", "Technology", "Consulting", "Retail"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketer",
    tag: "Growing Fast",
    tagClass: "bg-pink-500/10 text-pink-600",
    salary: "$55,000 - $85,000",
    growth: "+30% by 2027",
    desc: "AI-powered marketers create campaigns faster, personalize content at scale, and analyze performance with a depth that was previously only possible for large teams.",
    skills: ["AI content creation", "Campaign automation", "Audience segmentation", "Performance analysis"],
    industries: ["E-commerce", "Agency", "Startups", "Consumer Brands"],
  },
  {
    icon: Code2,
    title: "AI-Assisted Developer",
    tag: "Top Paying",
    tagClass: "bg-emerald-500/10 text-emerald-600",
    salary: "$85,000 - $140,000",
    growth: "+40% by 2027",
    desc: "Developers using AI coding tools can prototype 3-5x faster, write more comprehensive code, and tackle complex problems that would have taken weeks in days.",
    skills: ["AI-assisted coding", "Rapid prototyping", "Code review with AI", "Automation scripting"],
    industries: ["Tech", "Finance", "Healthcare", "Startups"],
  },
  {
    icon: Presentation,
    title: "Operations Manager",
    tag: "Essential",
    tagClass: "bg-amber-500/10 text-amber-600",
    salary: "$70,000 - $110,000",
    growth: "+20% by 2027",
    desc: "Operations professionals who leverage AI can automate workflows, generate reports faster, and manage more complex operations with less manual overhead.",
    skills: ["Process automation", "AI reporting", "Workflow optimization", "Data-driven decisions"],
    industries: ["Manufacturing", "Logistics", "Healthcare", "Finance"],
  },
  {
    icon: Globe,
    title: "Entrepreneur",
    tag: "Future-Ready",
    tagClass: "bg-violet-500/10 text-violet-600",
    salary: "Unlimited",
    growth: "AI-first businesses growing 3x faster",
    desc: "Entrepreneurs with AI skills can run leaner operations, compete with larger companies, and build products that would have required a full team just two years ago.",
    skills: ["Business automation", "AI-powered marketing", "Cost reduction", "Scalable operations"],
    industries: ["SaaS", "E-commerce", "Services", "Consulting"],
  },
  {
    icon: BookOpen,
    title: "AI Consultant",
    tag: "Emerging",
    tagClass: "bg-cyan-500/10 text-cyan-600",
    salary: "$90,000 - $160,000",
    growth: "+50% by 2027",
    desc: "Organizations need guides to navigate AI implementation. Consultants with practical AI knowledge are becoming increasingly sought-after across every sector.",
    skills: ["AI strategy", "Implementation planning", "ROI analysis", "Team training"],
    industries: ["All Industries", "Government", "Education", "Healthcare"],
  },
];

const outcomes = [
  { icon: Target, title: "Job-Ready Skills", desc: "Walk out with skills you can put on your resume and demonstrate in interviews." },
  { icon: TrendingUp, title: "Salary Premium", desc: "AI-proficient professionals earn 15-40% more than peers without AI skills." },
  { icon: Zap, title: "Immediate Application", desc: "Apply the skills the very next day at your current job or in interviews." },
  { icon: Award, title: "IIAI Certification", desc: "Recognized credential to add to LinkedIn, resume, and job applications." },
];

export default function Careers() {
  return (
    <div className="overflow-x-hidden">
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(29,78,216,0.2),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">Career Paths</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Where AI Skills Take You
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            AI proficiency is quickly becoming a baseline expectation. Here's how our program opens doors across industries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {outcomes.map((item, idx) => (
              <div key={item.title} data-testid={`outcome-stat-${idx}`} className="text-center p-5 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Career Paths</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Career Opportunities for AI-Ready Professionals</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These are the roles where AI Learning by IIAI graduates are finding success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerPaths.map((career, idx) => (
              <div
                key={career.title}
                data-testid={`career-card-${idx}`}
                className="rounded-xl border border-border bg-card overflow-hidden hover-elevate"
              >
                <div className="p-5 border-b border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <career.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${career.tagClass}`}>{career.tag}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{career.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{career.desc}</p>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-muted-foreground mb-0.5">Salary Range</p>
                      <p className="font-semibold text-foreground">{career.salary}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground mb-0.5">Job Growth</p>
                      <p className="font-semibold text-emerald-600">{career.growth}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Key Skills You'll Have</p>
                    <div className="flex flex-wrap gap-1.5">
                      {career.skills.map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-muted text-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Top Industries</p>
                    <p className="text-xs text-foreground">{career.industries.join(" · ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">The AI Advantage</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-5 leading-tight">
                The Future Belongs to AI-Ready Professionals
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Across every industry, AI skills are shifting from "nice to have" to "essential". The difference between professionals who understand AI and those who don't is already measurable in salary, hiring rates, and career trajectory.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our program isn't just about learning AI — it's about positioning yourself at the front of your field, right now, before everyone else catches up.
              </p>
              <div className="space-y-3">
                {[
                  "Stand out in job applications with verified AI skills",
                  "Command higher salaries with proven productivity gains",
                  "Future-proof your career against automation",
                  "Open doors to emerging AI-adjacent roles",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4 text-lg">What Employers Are Looking For</h3>
                <div className="space-y-3">
                  {[
                    { pct: "78%", desc: "of employers prefer AI-literate candidates" },
                    { pct: "3.2x", desc: "faster promotions for AI-skilled employees" },
                    { pct: "$18K", desc: "average salary premium for AI proficiency" },
                    { pct: "92%", desc: "of companies plan to expand AI usage in 2025" },
                  ].map((item) => (
                    <div key={item.desc} className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary min-w-[60px]">{item.pct}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(29,78,216,0.12),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your AI Career Journey</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Join the professionals who are already ahead of the curve. Build future-ready AI skills through the structured 3-month program.</p>
          <Link href="/enroll">
            <Button data-testid="button-careers-enroll" size="lg" className="gap-2 bg-blue-600 text-white border-0 px-10">Enroll Now <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
