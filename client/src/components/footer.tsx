import { Link } from "wouter";
import { Brain, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-sm tracking-tight text-white">AI Learning</span>
                  <span className="text-xs text-gray-400 font-medium">by IIEL</span>
                </div>
              </a>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Teaching practical AI skills through real business workflows so learners can become more productive, job-ready, and future-prepared.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a data-testid="link-social-twitter" href="#" className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a data-testid="link-social-linkedin" href="#" className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a data-testid="link-social-instagram" href="#" className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a data-testid="link-social-youtube" href="#" className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Program", href: "/program" },
                { label: "Use Cases", href: "/use-cases" },
                { label: "Careers", href: "/careers" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">Support</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Contact Us", href: "/contact" },
                { label: "Enroll Now", href: "/enroll" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <a className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@ailearning.iiel.edu</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">IIEL Campus, Technology District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AI Learning by IIEL. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Empowering the next generation of AI-ready professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
