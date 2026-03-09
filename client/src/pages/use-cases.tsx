import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3, Mail, Megaphone, Code2, Presentation,
  FileText, ArrowRight, ChevronRight, Clock, TrendingUp,
  CheckCircle2, Lightbulb,
} from "lucide-react";

const useCases = [
  {
    icon: BarChart3,
    title: "AI Data Analysis",
    tag: "Finance & Analytics",
    description: "Transform raw data into actionable business intelligence in minutes. Instead of spending hours on spreadsheets, AI can identify trends, surface insights, and generate executive-ready summaries automatically.",
    scenario: "A sales manager uploads monthly performance data and asks AI to identify the top-performing products and underperforming regions, generating a ready-to-share management report.",
    prompt: "Analyze this sales data and give top insights about which product and region is performing best. Create a summary report for management.",
    timeSaved: "3 hours → 8 minutes",
    outputs: ["Performance ranking by product and region", "Trend analysis with visual descriptions", "Management summary report", "Recommendations for action"],
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
    badgeClass: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Mail,
    title: "Email Automation",
    tag: "Communication",
    description: "Write professional, contextually perfect emails in seconds. AI adjusts tone, structure, and content based on your recipient and purpose — from cold outreach to customer support to internal communication.",
    scenario: "A customer service rep needs to respond to 20 pricing inquiries before end of day. With AI, each personalized, professional reply takes under 30 seconds.",
    prompt: "Write a professional email replying to a customer asking for product pricing and delivery time. The customer ordered 50 units and wants express delivery.",
    timeSaved: "2 hours → 5 minutes",
    outputs: ["Full professional email draft", "Tone variations (formal/friendly/urgent)", "Subject line options", "Follow-up email sequence"],
    color: "from-violet-500/10 to-violet-600/5",
    accent: "text-violet-500",
    bg: "bg-violet-500/10",
    badgeClass: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Megaphone,
    title: "Marketing Content",
    tag: "Marketing & Growth",
    description: "Create entire marketing campaigns — from strategy to copy to captions — in minutes. AI understands your audience and generates targeted content that converts, across every channel.",
    scenario: "A boutique fashion brand needs Instagram content, ad copy, and email subject lines for a seasonal campaign. AI delivers a full week of content in under 20 minutes.",
    prompt: "Create a social media marketing campaign for a clothing brand targeting young professionals aged 25-35. Include Instagram captions, ad copy, and a campaign concept.",
    timeSaved: "4 hours → 12 minutes",
    outputs: ["5 Instagram captions with hashtags", "3 ad copy variations", "Campaign concept and messaging", "Email subject line options"],
    color: "from-pink-500/10 to-pink-600/5",
    accent: "text-pink-500",
    bg: "bg-pink-500/10",
    badgeClass: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Code2,
    title: "AI-Assisted Coding",
    tag: "Development & Automation",
    description: "Generate, explain, and debug code without deep programming expertise. AI can write functional scripts, explain what code does, and suggest improvements — opening coding to non-developers.",
    scenario: "A business analyst needs a Python script to automate weekly sales reporting from Excel. No coding background needed — AI generates, explains, and helps test the script.",
    prompt: "Write a Python program that reads sales data from an Excel file and calculates total sales per region. Include error handling for missing data.",
    timeSaved: "6 hours → 15 minutes",
    outputs: ["Complete working Python script", "Step-by-step code explanation", "Error handling implementation", "Usage instructions"],
    color: "from-emerald-500/10 to-emerald-600/5",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
    badgeClass: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Presentation,
    title: "Presentation Generation",
    tag: "Reporting & Communication",
    description: "Turn data and reports into structured, professional presentations. AI builds your slide deck framework, writes content for each slide, and ensures your message lands with clarity and impact.",
    scenario: "An executive needs a board presentation summarizing Q4 results. AI takes the data and analysis and produces a complete slide structure with content in minutes.",
    prompt: "Create a PowerPoint presentation summarizing our Q4 sales analysis for the board of directors. Include an executive summary, key findings, and strategic recommendations.",
    timeSaved: "5 hours → 15 minutes",
    outputs: ["Full slide structure outline", "Content for each slide", "Executive summary", "3 strategic recommendations"],
    color: "from-amber-500/10 to-amber-600/5",
    accent: "text-amber-500",
    bg: "bg-amber-500/10",
    badgeClass: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: FileText,
    title: "Document Summarization",
    tag: "Productivity",
    description: "Upload any document — reports, contracts, research papers, manuals — and AI extracts the key information instantly. What used to take hours of reading takes seconds.",
    scenario: "A consultant needs to review a 60-page vendor proposal before a meeting in 30 minutes. AI extracts the key terms, risks, pricing, and recommendations in under a minute.",
    prompt: "Summarize this 60-page vendor proposal and extract: key pricing terms, main deliverables, risk factors, and top 3 recommendations for decision-making.",
    timeSaved: "3 hours → 2 minutes",
    outputs: ["Executive summary (1 page)", "Key terms and pricing extraction", "Risk factor identification", "Decision recommendations"],
    color: "from-cyan-500/10 to-cyan-600/5",
    accent: "text-cyan-500",
    bg: "bg-cyan-500/10",
    badgeClass: "bg-cyan-500/10 text-cyan-600",
  },
];

export default function UseCases() {
  return (
    <div className="overflow-x-hidden">
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(29,78,216,0.2),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">Real Applications</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            AI Use Cases for Business
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            See exactly how AI is applied to real business tasks — with the exact prompts and outputs you'll learn to produce.
          </p>
        </div>
      </section>

      <section className="py-6 bg-white dark:bg-gray-950 border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {useCases.map((uc) => (
              <span key={uc.title} className={`text-xs px-3 py-1.5 rounded-full font-medium cursor-pointer ${uc.badgeClass} border border-transparent`}>
                {uc.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {useCases.map((uc, idx) => (
              <div
                key={uc.title}
                data-testid={`use-case-${idx}`}
                className={`grid md:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={idx % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <div className={`w-10 h-10 rounded-lg ${uc.bg} flex items-center justify-center`}>
                      <uc.icon className={`w-5 h-5 ${uc.accent}`} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${uc.badgeClass}`}>{uc.tag}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{uc.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">{uc.description}</p>

                  <div className="p-4 rounded-lg border border-border bg-card mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Real Scenario</p>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{uc.scenario}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">Time saved: </span>
                    <span className="text-sm text-muted-foreground line-through">{uc.timeSaved.split("→")[0].trim()}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-sm text-emerald-600 font-bold">{uc.timeSaved.split("→")[1].trim()}</span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">What AI Produces</p>
                    <div className="flex flex-col gap-2">
                      {uc.outputs.map((o) => (
                        <div key={o} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${uc.accent} flex-shrink-0`} />
                          <span className="text-sm text-foreground">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? "md:col-start-1" : ""}>
                  <div className={`rounded-xl border border-border bg-gradient-to-br ${uc.color} overflow-hidden`}>
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
                      <div className="w-2 h-2 rounded-full bg-red-400/70" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                      <div className="w-2 h-2 rounded-full bg-green-400/70" />
                      <span className="ml-1 text-xs text-muted-foreground font-mono">prompt → output</span>
                    </div>
                    <div className="p-5 space-y-4">
                      <div>
                        <p className={`text-xs font-mono uppercase tracking-wider mb-2 ${uc.accent}`}>Your Prompt</p>
                        <div className="bg-card border border-card-border rounded-md p-3 font-mono text-xs text-foreground leading-relaxed">
                          <span className={`${uc.accent} mr-1`}>{">"}</span>
                          {uc.prompt}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                          AI Output
                        </p>
                        <div className="bg-card border border-card-border rounded-md p-3 space-y-1.5">
                          {uc.outputs.map((o) => (
                            <div key={o} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-mono text-xs mt-0.5">✓</span>
                              <span className="text-xs text-foreground">{o}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(29,78,216,0.12),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Master All These Use Cases</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">All six use cases are covered in the AI Learning by IIEL program. Join the next session and apply these skills immediately.</p>
          <Link href="/enroll">
            <Button data-testid="button-use-cases-enroll" size="lg" className="gap-2 bg-blue-600 text-white border-0 px-10">Enroll Now <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
