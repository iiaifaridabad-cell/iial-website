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
        q: "What is AI Learning by IIAI?",
        a: "AI Learning by IIAI is a 3-month structured AI training program that teaches practical AI skills for real business use. Developed by IIAI, the program covers 24 sessions over 3 months, helping students, freshers, professionals, and business owners learn how to use AI tools effectively in everyday work.",
      },
      {
        q: "Is the course beginner friendly?",
        a: "Yes. The program is designed for beginners as well as learners who want structured practical AI exposure. No prior technical experience or coding knowledge is required to start.",
      },
      {
        q: "How is the program structured?",
        a: "The program runs for 3 months with 8 sessions per month — 24 sessions total. Month 1 covers AI Foundations, Month 2 covers AI Business Applications, and Month 3 covers Advanced AI Applications including real-world projects.",
      },
      {
        q: "What makes this different from other AI courses?",
        a: "Most AI courses focus on theory or technical foundations. AI Learning by IIAI is built entirely around practical business use cases — the tasks you actually do at work. Every module uses real prompts, real outputs, and real business scenarios, so you finish with skills you can apply immediately.",
      },
    ],
  },
  {
    category: "Requirements & Eligibility",
    faqs: [
      {
        q: "Do I need coding knowledge?",
        a: "No. Coding is not required to benefit from the course. Some sections include coding use cases, but the program is fully accessible to non-technical learners. If you can type a sentence, you can use AI effectively.",
      },
      {
        q: "What tools will be used?",
        a: "The program covers modern AI tools used for writing, analysis, content generation, coding support, business workflows, and productivity tasks. All tools are browser-based and require no installation. Most have free tiers accessible to all participants.",
      },
      {
        q: "Is this suitable for students and freshers?",
        a: "Yes. Students and freshers are a primary audience. The program gives early learners exposure to AI tools used in modern workplaces, making them significantly more competitive in job applications and internship roles.",
      },
      {
        q: "Is this useful for business owners?",
        a: "Yes. Business owners can use the program to understand how AI supports automation, communication, marketing, reporting, and decision-making. AI can help reduce operational workload and improve business efficiency significantly.",
      },
    ],
  },
  {
    category: "Outcomes & Certification",
    faqs: [
      {
        q: "Will I get hands-on practice?",
        a: "Yes. The course includes practical demonstrations, examples, and hands-on AI activities across all 24 sessions. Every session is built around real scenarios so you're practicing with actual tools and outputs throughout.",
      },
      {
        q: "What will I be able to do after the program?",
        a: "After the program, you'll be able to: analyze business data and generate reports with AI, create marketing content and campaigns using AI, automate repetitive business tasks, write professional emails and communications, generate code and presentations, and build AI-powered workflows. These are skills you can use at work from day one.",
      },
      {
        q: "Will I receive a certificate?",
        a: "Yes, upon completing the 3-month program you will receive an official IIAI certificate of completion. This is a recognized credential you can add to your LinkedIn profile, resume, and job applications to validate your practical AI skills.",
      },
    ],
  },
  {
    category: "Enrollment & Logistics",
    faqs: [
      {
        q: "How do I enroll in the program?",
        a: "Click the 'Enroll Now' button and complete the enrollment form. A member of our team will contact you within 24 hours to confirm your spot and provide all session details and schedule.",
      },
      {
        q: "Are there group or corporate enrollment options?",
        a: "Yes. We offer group enrollment for teams, companies, and educational institutions. Group rates are available for 5+ participants. Contact us to discuss corporate training packages and custom scheduling.",
      },
      {
        q: "Can I talk to someone before enrolling?",
        a: "Absolutely. Visit our Contact / Talk to Advisor page and submit an inquiry. One of our program advisors will reach out to answer your questions, explain the curriculum in detail, and help you decide if the program is right for you.",
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
            Everything you need to know about AI Learning by IIAI. Can't find your answer? Contact us directly.
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
