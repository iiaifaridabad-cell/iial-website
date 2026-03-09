import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, MessageCircle } from "lucide-react";

const faqCategories = [
  {
    category: "About the Program",
    faqs: [
      {
        q: "What is AI Learning by IIEL?",
        a: "AI Learning by IIEL is a practical, career-focused AI training program developed by the Institute for Innovative Education and Learning (IIEL). The program teaches real business AI skills through hands-on, scenario-based learning in a 90-minute intensive session.",
      },
      {
        q: "What makes this different from other AI courses?",
        a: "Most AI courses focus on theory, history, or technical foundations. AI Learning by IIEL is built entirely around real business workflows — the tasks you actually do at work. Every module uses real prompts, real outputs, and real business scenarios. You leave with practical skills, not just concepts.",
      },
      {
        q: "How long is the training session?",
        a: "The core training is 90 minutes, structured as a highly focused intensive. This is intentionally designed for busy professionals who need maximum value in minimum time. Advanced tracks and deep-dive modules are available for those who want to go further.",
      },
      {
        q: "Is this a one-time session or an ongoing course?",
        a: "The AI Learning program is a structured 90-minute intensive session covering 5 core modules. Additional advanced tracks and follow-up sessions are available for learners who want to deepen their skills in specific areas like data analysis, marketing automation, or AI coding.",
      },
    ],
  },
  {
    category: "Requirements & Eligibility",
    faqs: [
      {
        q: "Do I need any technical background or prior AI experience?",
        a: "Absolutely not. This program is designed to be beginner-friendly. You only need a computer and a willingness to learn. No coding, no math, no technical background required. If you can type a sentence, you can use AI.",
      },
      {
        q: "What tools or software do I need?",
        a: "The training uses widely accessible AI tools that require no installation or special setup. Everything runs in a web browser. You'll need a laptop or desktop computer and an internet connection. All tools used in the session are either free or have free tiers.",
      },
      {
        q: "Is this suitable for students?",
        a: "Yes, this program is ideal for students — especially business, marketing, management, and programming students. The practical skills taught here will make you significantly more competitive in the job market and in internship applications.",
      },
      {
        q: "Can someone with no business background benefit from this?",
        a: "Yes. The program is designed for anyone who wants to be more productive and efficient using AI. Whether you're in business, creative, technical, or any other field — the core skills of prompt writing, AI-assisted analysis, and AI content creation are universally applicable.",
      },
    ],
  },
  {
    category: "Outcomes & Certification",
    faqs: [
      {
        q: "Will I receive a certificate?",
        a: "Yes, upon completion you will receive an official IIEL certificate of completion. This is a recognized credential that you can add to your LinkedIn profile, resume, and job applications. The certificate validates your practical AI skills.",
      },
      {
        q: "What will I be able to do after the training?",
        a: "After the training, you'll be able to: analyze data and generate reports using AI, write professional emails and communications with AI assistance, create marketing campaigns and content using AI, generate and understand code with AI help, build presentations from data with AI, and summarize documents instantly. Most importantly, you'll understand how to 'think in prompts' — a foundational skill for using any AI tool effectively.",
      },
      {
        q: "How quickly can I apply the skills?",
        a: "The program is specifically designed for immediate application. Many graduates report using AI skills at work the very next day. The scenarios and outputs are based on real workplace tasks, so the transfer from training to application is immediate.",
      },
    ],
  },
  {
    category: "Enrollment & Logistics",
    faqs: [
      {
        q: "How do I enroll?",
        a: "Click the 'Enroll Now' button on this page or the Enroll page to submit your application. A member of our team will contact you within 24 hours to confirm your spot and provide session details.",
      },
      {
        q: "Are there group or corporate enrollment options?",
        a: "Yes, we offer group enrollment for teams, companies, and educational institutions. Group rates are available for 5+ participants. Contact us directly to discuss corporate training packages and custom session scheduling.",
      },
      {
        q: "What is the refund or cancellation policy?",
        a: "We understand plans change. We offer a full refund if you cancel at least 48 hours before your scheduled session. For cancellations within 48 hours, we will reschedule you to the next available session at no additional cost.",
      },
      {
        q: "Can small business owners benefit from this training?",
        a: "Absolutely. Small business owners are one of our primary audiences. The program shows you how to use AI to handle marketing, communication, reporting, and operations — tasks that normally require a full team. Many of our small business graduates report significant time savings and cost reductions within weeks.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="overflow-x-hidden">
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(29,78,216,0.2),rgba(0,0,0,0))]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">FAQ</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Everything you need to know about AI Learning by IIEL. Can't find your answer? Contact us directly.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((cat, catIdx) => (
              <div key={cat.category} data-testid={`faq-category-${catIdx}`}>
                <Badge className="mb-5" variant="secondary">{cat.category}</Badge>
                <Accordion type="single" collapsible className="space-y-2">
                  {cat.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`${catIdx}-${idx}`}
                      data-testid={`faq-item-${catIdx}-${idx}`}
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
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-xl border border-border bg-card text-center">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground mb-2">Still Have Questions?</h3>
            <p className="text-sm text-muted-foreground mb-5">Our team is happy to answer any questions you have before you enroll.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <Link href="/contact">
                <Button data-testid="button-faq-contact" variant="outline" className="gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Button>
              </Link>
              <Link href="/enroll">
                <Button data-testid="button-faq-enroll" className="gap-2">Enroll Now <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
