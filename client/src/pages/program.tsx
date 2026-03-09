import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3, Mail, Megaphone, Code2, Presentation,
  CheckCircle2, Clock, Users, Award, ArrowRight,
  ChevronDown, ChevronRight, Brain, Target, Zap,
} from "lucide-react";
import { useState } from "react";

const modules = [
  {
    step: "01",
    icon: BarChart3,
    title: "AI Data Analysis (Excel / Finance)",
    duration: "15 minutes",
    context: "Work with sales data containing Product, Sales Amount, Region, and Month.",
    prompt: "Analyze this sales data and give top insights about which product and region is performing best.",
    followUp: "Create a summary report for management.",
    outputs: ["Top insights ranked by revenue impact", "Regional performance comparison", "Management-ready summary report", "Trend identification and forecasting notes"],
    outcomes: ["AI data analysis", "AI for finance workflows", "Business intelligence thinking", "Insight extraction and reporting"],
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    step: "02",
    icon: Mail,
    title: "AI Email Automation",
    duration: "15 minutes",
    context: "A customer asks for pricing and delivery details for a bulk order.",
    prompt: "Write a professional email replying to a customer asking for product pricing and delivery time.",
    followUp: "Rewrite this email in a more formal tone for a corporate client.",
    outputs: ["Full professional email draft", "Multiple tone variations", "Subject line suggestions", "Follow-up email template"],
    outcomes: ["AI writes emails in seconds", "Tone adjustment for different audiences", "Professional communication support", "Faster customer response workflows"],
    accent: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    step: "03",
    icon: Megaphone,
    title: "AI Marketing Content Creation",
    duration: "15 minutes",
    context: "Create a full marketing campaign for a clothing brand targeting young professionals.",
    prompt: "Create a social media marketing campaign for a clothing brand targeting young professionals.",
    followUp: "Generate 5 Instagram caption variations and 3 ad copy headlines.",
    outputs: ["Instagram captions (5 variations)", "Ad copy and headlines", "Campaign strategy overview", "Content calendar suggestions"],
    outcomes: ["AI-assisted campaign creation", "Faster content ideation", "Audience-based communication", "Creative productivity at scale"],
    accent: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    step: "04",
    icon: Code2,
    title: "AI Coding Assistant",
    duration: "15 minutes",
    context: "Use AI to generate Python code for sales data processing and analysis.",
    prompt: "Write a Python program that reads sales data from Excel and calculates total sales per region.",
    followUp: "Explain this code step by step and add error handling for missing data.",
    outputs: ["Complete Python script", "Line-by-line code explanation", "Error handling additions", "Optimization suggestions"],
    outcomes: ["AI-generated code", "Code explanation and debugging", "Programming productivity", "Faster prototyping without deep technical knowledge"],
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    step: "05",
    icon: Presentation,
    title: "AI Presentation Generator",
    duration: "15 minutes",
    context: "Create a management presentation from the data and reports generated so far.",
    prompt: "Create a PowerPoint presentation summarizing the sales analysis for management.",
    followUp: "Add an executive summary slide and three key strategic recommendations.",
    outputs: ["Complete slide structure outline", "Title and content suggestions per slide", "Executive summary slide", "Key recommendations slide"],
    outcomes: ["Professional presentation structure", "Executive-ready content", "Time savings on slide creation", "Confident management communication"],
    accent: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

function ModuleCard({ mod, isOpen, onToggle }: { mod: typeof modules[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div data-testid={`module-card-${mod.step}`} className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
        onClick={onToggle}
        data-testid={`button-toggle-module-${mod.step}`}
      >
        <div className={`w-10 h-10 rounded-lg ${mod.bg} flex items-center justify-center flex-shrink-0`}>
          <mod.icon className={`w-5 h-5 ${mod.accent}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-muted-foreground">Step {mod.step}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{mod.duration}</span>
          </div>
          <h3 className="font-semibold text-foreground text-sm">{mod.title}</h3>
        </div>
        {isOpen ? <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 border-t border-border">
          <div className="pt-5 grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Scenario</p>
                <p className="text-sm text-foreground leading-relaxed">{mod.context}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Demo Prompt</p>
                <div className="bg-muted rounded-md p-3 font-mono text-xs text-foreground border border-border">
                  <span className={`${mod.accent} mr-1`}>{">"}</span>
                  {mod.prompt}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Follow-Up Prompt</p>
                <div className="bg-muted rounded-md p-3 font-mono text-xs text-foreground border border-border">
                  <span className={`${mod.accent} mr-1`}>{">"}</span>
                  {mod.followUp}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">AI Outputs</p>
                <div className="space-y-2">
                  {mod.outputs.map((o) => (
                    <div key={o} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${mod.accent} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-foreground">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Learning Outcomes</p>
                <div className="flex flex-wrap gap-1.5">
                  {mod.outcomes.map((o) => (
                    <span key={o} className={`text-xs px-2 py-0.5 rounded-md font-medium ${mod.bg} ${mod.accent}`}>{o}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Program() {
  const [openModules, setOpenModules] = useState<Set<string>>(new Set(["01"]));

  const toggleModule = (step: string) => {
    const next = new Set(openModules);
    if (next.has(step)) next.delete(step);
    else next.add(step);
    setOpenModules(next);
  };

  return (
    <div className="overflow-x-hidden">
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(29,78,216,0.2),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">Curriculum</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            The AI Learning Program
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Five hands-on modules built around real business scenarios, complete with prompts, outputs, and immediate application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-gray-400 text-sm">
            {[
              { icon: Clock, text: "90 Minutes" },
              { icon: Brain, text: "5 Core Modules" },
              { icon: Target, text: "100% Practical" },
              { icon: Award, text: "IIEL Certified" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-blue-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="secondary">Program Overview</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">What Each Session Covers</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Click each module to expand its full content, prompts, and learning outcomes.
            </p>
          </div>
          <div className="space-y-3">
            {modules.map((mod) => (
              <ModuleCard
                key={mod.step}
                mod={mod}
                isOpen={openModules.has(mod.step)}
                onToggle={() => toggleModule(mod.step)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4" variant="secondary">Program Details</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Program Information</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { label: "Duration", value: "90 Minutes", icon: Clock, desc: "One intensive session covering all 5 modules" },
              { label: "Format", value: "Hands-On", icon: Zap, desc: "Live demonstrations with real prompts and outputs" },
              { label: "Level", value: "All Levels", icon: Users, desc: "No prior experience or technical knowledge required" },
              { label: "Certification", value: "IIEL Certified", icon: Award, desc: "Official certificate upon successful completion" },
            ].map((item) => (
              <div key={item.label} data-testid={`info-card-${item.label}`} className="p-5 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-bold text-foreground">{item.value}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(29,78,216,0.12),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Enroll in the Program</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Secure your spot in the next session and start your AI journey today.</p>
          <Link href="/enroll">
            <Button data-testid="button-program-enroll" size="lg" className="gap-2 bg-blue-600 text-white border-0 px-10">Enroll Now <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
