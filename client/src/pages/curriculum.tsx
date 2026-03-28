import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3, Mail, Megaphone, Code2, Presentation,
  CheckCircle2, Clock, Users, Award, ArrowRight,
  Brain, Target, Zap, CalendarDays, Workflow,
  ChevronDown, ChevronRight, Lightbulb,
} from "lucide-react";
import { useState } from "react";

const months = [
  {
    month: "Month 1",
    theme: "AI Foundations",
    sessions: "Sessions 1–8",
    gradient: "from-blue-600 to-blue-700",
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    badgeBg: "bg-blue-500/10 text-blue-600",
    desc: "Build a solid foundation in AI thinking, tooling, and prompt engineering. Learn to think like an AI user.",
    topics: [
      { title: "AI Tools Introduction", desc: "Overview of major AI platforms and how they work in practice.", sessions: "Sessions 1–2" },
      { title: "Prompt Engineering", desc: "Learn how to write effective prompts that produce useful, accurate outputs.", sessions: "Sessions 3–4" },
      { title: "AI Writing Tools", desc: "Use AI to write reports, emails, and documentation more efficiently.", sessions: "Sessions 5–6" },
      { title: "AI Productivity Tools", desc: "Integrate AI into daily workflows for maximum productivity gains.", sessions: "Sessions 7–8" },
    ],
  },
  {
    month: "Month 2",
    theme: "AI Business Applications",
    sessions: "Sessions 9–16",
    gradient: "from-violet-600 to-violet-700",
    accent: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    badgeBg: "bg-violet-500/10 text-violet-600",
    desc: "Apply AI to core business functions. Move from understanding to practical business application.",
    topics: [
      { title: "AI Data Analysis", desc: "Analyze sales data, financial reports, and business metrics using AI.", sessions: "Sessions 9–10" },
      { title: "AI Marketing Automation", desc: "Create campaigns, social media content, ad copy, and marketing strategies.", sessions: "Sessions 11–12" },
      { title: "AI Business Reporting", desc: "Generate professional reports and executive summaries from raw data.", sessions: "Sessions 13–14" },
      { title: "AI Workflow Automation", desc: "Automate repetitive business processes with AI-powered workflows.", sessions: "Sessions 15–16" },
    ],
  },
  {
    month: "Month 3",
    theme: "Advanced AI Applications",
    sessions: "Sessions 17–24",
    gradient: "from-emerald-600 to-emerald-700",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    badgeBg: "bg-emerald-500/10 text-emerald-600",
    desc: "Master advanced AI capabilities and apply everything to real-world business projects.",
    topics: [
      { title: "AI Coding Assistant", desc: "Generate, explain, and debug code using AI — no prior programming needed.", sessions: "Sessions 17–18" },
      { title: "AI Automation Workflows", desc: "Build end-to-end business automation using AI-powered pipelines.", sessions: "Sessions 19–20" },
      { title: "AI Presentation Generation", desc: "Create management-ready presentations and business decks from data.", sessions: "Sessions 21–22" },
      { title: "Real-World Projects", desc: "Apply all skills to a capstone project simulating a real business challenge.", sessions: "Sessions 23–24" },
    ],
  },
];

const coreAreas = [
  { icon: BarChart3, title: "AI Data Analysis", accent: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Workflow, title: "Business Automation", accent: "text-violet-500", bg: "bg-violet-500/10" },
  { icon: Megaphone, title: "Marketing Content Creation", accent: "text-pink-500", bg: "bg-pink-500/10" },
  { icon: Mail, title: "Email Communication", accent: "text-cyan-500", bg: "bg-cyan-500/10" },
  { icon: Code2, title: "Coding Assistance", accent: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Presentation, title: "Presentation Generation", accent: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: Brain, title: "Prompt Engineering", accent: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Zap, title: "Workflow Automation", accent: "text-yellow-500", bg: "bg-yellow-500/10" },
];

function MonthCard({ month, isOpen, onToggle }: { month: typeof months[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div data-testid={`month-card-${month.month}`} className={`rounded-xl border ${month.border} bg-card overflow-hidden`}>
      <button
        className="w-full text-left"
        onClick={onToggle}
        data-testid={`button-toggle-month-${month.month}`}
      >
        <div className={`bg-gradient-to-r ${month.gradient} p-6`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-white/70 text-xs font-medium mb-1">{month.sessions}</p>
              <h3 className="text-white font-bold text-xl mb-2">{month.month}: {month.theme}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{month.desc}</p>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              {isOpen ? <ChevronDown className="w-4 h-4 text-white" /> : <ChevronRight className="w-4 h-4 text-white" />}
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="p-6 grid sm:grid-cols-2 gap-4">
          {month.topics.map((topic) => (
            <div key={topic.title} className="p-4 rounded-lg border border-border bg-muted/30">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-semibold text-foreground text-sm">{topic.title}</h4>
                <span className={`text-xs font-mono ${month.accent} flex-shrink-0`}>{topic.sessions}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Curriculum() {
  const [openMonths, setOpenMonths] = useState<Set<string>>(new Set(["Month 1", "Month 2", "Month 3"]));

  const toggleMonth = (month: string) => {
    const next = new Set(openMonths);
    if (next.has(month)) next.delete(month);
    else next.add(month);
    setOpenMonths(next);
  };

  return (
    <div className="overflow-x-hidden">
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(29,78,216,0.2),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">Curriculum</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            3-Month AI Learning Curriculum
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            A structured, progressive program taking you from AI fundamentals to advanced real-world business applications across 24 live sessions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-gray-400 text-sm">
            {[
              { icon: CalendarDays, text: "3 Months" },
              { icon: Users, text: "24 Sessions" },
              { icon: Clock, text: "8 Sessions/Month" },
              { icon: Award, text: "IIAI Certified" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-blue-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white dark:bg-gray-950 border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {months.map((m, idx) => (
              <div key={m.month} className={`text-center p-4 rounded-xl border ${m.border} ${m.bg}`}>
                <p className={`text-xs font-medium ${m.accent} mb-0.5`}>{m.month}</p>
                <p className="font-semibold text-foreground text-sm">{m.theme}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{m.sessions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="secondary">Core Learning Areas</Badge>
            <h2 className="text-2xl font-bold text-foreground mb-3">What the Curriculum Covers</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Eight core areas spread across the 3-month program, each building on the previous to create comprehensive AI proficiency.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {coreAreas.map((area, idx) => (
              <div key={area.title} data-testid={`core-area-${idx}`} className="flex flex-col items-center text-center p-4 rounded-xl border border-border bg-card">
                <div className={`w-9 h-9 rounded-lg ${area.bg} flex items-center justify-center mb-3`}>
                  <area.icon className={`w-4.5 h-4.5 ${area.accent}`} />
                </div>
                <p className="text-xs font-medium text-foreground leading-tight">{area.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="secondary">Month-by-Month Breakdown</Badge>
            <h2 className="text-2xl font-bold text-foreground mb-3">Your Learning Journey</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Click each month to expand its sessions and topics.</p>
          </div>
          <div className="space-y-4">
            {months.map((month) => (
              <MonthCard
                key={month.month}
                month={month}
                isOpen={openMonths.has(month.month)}
                onToggle={() => toggleMonth(month.month)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="secondary">Program Details</Badge>
            <h2 className="text-2xl font-bold text-foreground mb-3">What's Included</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {[
              { label: "Duration", value: "3 Months", icon: CalendarDays, desc: "Structured monthly progression with clear milestones" },
              { label: "Total Sessions", value: "24 Live Sessions", icon: Users, desc: "8 sessions per month, hands-on and practical" },
              { label: "Level", value: "All Levels", icon: Target, desc: "No technical or coding experience required" },
              { label: "Certification", value: "IIAI Certified", icon: Award, desc: "Official certificate added to LinkedIn and CV" },
            ].map((item) => (
              <div key={item.label} data-testid={`detail-${item.label}`} className="p-5 rounded-xl border border-border bg-card flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground mb-3">Course Includes</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  "Live sessions with expert instructors",
                  "Real-world business use cases",
                  "Hands-on AI practice each session",
                  "Prompt engineering training",
                  "Business automation examples",
                  "IIAI certificate of completion",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(29,78,216,0.12),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your AI Learning Journey</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Enroll in the 3-month program and gain the AI skills that define the future of work.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link href="/enroll">
              <Button data-testid="button-curriculum-enroll" size="lg" className="gap-2 bg-blue-600 text-white border-0 px-10">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button data-testid="button-curriculum-advisor" size="lg" variant="outline" className="gap-2 border-gray-600 text-gray-200 bg-transparent">
                Talk to Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
