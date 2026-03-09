import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain, Target, Users, Award, Rocket, Globe, CheckCircle2,
  ArrowRight, BookOpen, TrendingUp, Shield
} from "lucide-react";

const values = [
  { icon: Target, title: "Practical First", desc: "Every lesson is grounded in real business scenarios, not abstract theory." },
  { icon: Users, title: "Learner-Centered", desc: "Designed for students, graduates, professionals and business owners alike." },
  { icon: Rocket, title: "Career-Focused", desc: "Skills taught are directly tied to job-readiness and business outcomes." },
  { icon: Shield, title: "Quality Assured", desc: "Curriculum developed and validated by industry practitioners and educators." },
  { icon: Globe, title: "Future-Ready", desc: "Aligned with where AI and business are heading, not where they were." },
  { icon: Award, title: "Certified Learning", desc: "All completions are recognized with an IIEL certificate of achievement." },
];

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "90 Min", label: "Power Session" },
  { value: "5", label: "Core Modules" },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(29,78,216,0.2),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            About AI Learning by IIEL
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We exist to make AI accessible, practical, and immediately useful for everyone — from students to seasoned professionals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
            {stats.map((s) => (
              <div key={s.label} data-testid={`stat-${s.label}`} className="text-center p-6 rounded-xl border border-border bg-card">
                <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <Badge className="mb-4" variant="secondary">Our Story</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-5 leading-tight">
                Where Practical Education Meets AI Innovation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AI Learning by IIEL was born from a simple observation: most AI courses teach you concepts, but not how to actually use AI in a real job or business setting. There's a gap between knowing AI exists and knowing how to apply it.
                </p>
                <p>
                  IIEL — the Institute for Innovative Education and Learning — has always been committed to practical, outcome-focused training. When we saw the AI revolution accelerating, we knew the most important thing we could do was build a program that bridges theory and application.
                </p>
                <p>
                  Our AI Learning program was designed from the ground up around real business workflows: the tasks people actually do every day at work. Email writing, data analysis, marketing, reporting, coding, presentations — we took these real tasks and built AI workflows around them.
                </p>
              </div>
            </div>
            <div>
              <Badge className="mb-4" variant="secondary">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-5 leading-tight">
                Making AI Work for Everyone
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our mission is straightforward: teach practical AI skills through real business workflows so learners can become more productive, job-ready, and future-prepared.
                </p>
                <p>
                  We believe AI is the most important professional skill of the next decade. But it shouldn't be gatekept behind expensive degrees or technical barriers. Our 3-month structured program proves that you can go from zero to AI-ready through practical, focused learning.
                </p>
              </div>
              <Card className="mt-6 border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <p className="text-foreground font-semibold italic leading-relaxed">
                    "AI will not replace people. People who know AI will replace people who don't."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— AI Learning by IIEL Core Belief</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Our Values</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, idx) => (
              <div key={v.title} data-testid={`card-value-${idx}`} className="p-5 rounded-xl border border-border bg-card hover-elevate">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Who We Serve</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Built For You</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Our program is designed for a wide range of learners with one thing in common: they want to get ahead.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Students", desc: "Business, IT, marketing, and other students who want an edge in the job market.", icon: BookOpen },
              { title: "Fresh Graduates", desc: "New to the workforce and want to stand out with AI-ready skills from day one.", icon: Award },
              { title: "Young Professionals", desc: "Early-career professionals who want to accelerate their growth with AI.", icon: TrendingUp },
              { title: "Small Business Owners", desc: "Entrepreneurs who want to automate operations and scale with minimal overhead.", icon: Target },
            ].map((item, idx) => (
              <div key={item.title} data-testid={`card-audience-${idx}`} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(29,78,216,0.12),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join IIEL?</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">Take the first step toward becoming AI-ready with a practical, certified training program.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <Link href="/enroll">
              <Button data-testid="button-about-enroll" size="lg" className="gap-2 bg-blue-600 text-white border-0">Enroll Now <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <Link href="/curriculum">
              <Button data-testid="button-about-curriculum" size="lg" variant="outline" className="gap-2 border-gray-600 text-gray-200 bg-transparent">View Curriculum</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
