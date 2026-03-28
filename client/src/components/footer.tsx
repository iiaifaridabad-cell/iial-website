import { Link } from "wouter";
import { Linkedin, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-xs tracking-tight leading-none">IIAI</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm tracking-tight text-white">AI Learning</span>
                <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">by IIAI</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              A 3-month structured AI program teaching practical skills for data analysis, automation, marketing, coding, and business productivity.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a data-testid="link-social-linkedin" href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a data-testid="link-social-instagram" href="#" aria-label="Instagram" className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a data-testid="link-social-youtube" href="#" aria-label="YouTube" className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Youtube className="w-4 h-4" aria-hidden="true" />
              </a>
              <a data-testid="link-social-facebook" href="#" aria-label="Facebook" className="w-8 h-8 rounded-md bg-gray-800 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Curriculum", href: "/curriculum" },
                { label: "Use Cases", href: "/use-cases" },
                { label: "Careers", href: "/careers" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
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
                { label: "Contact / Talk to Advisor", href: "/contact" },
                { label: "Enroll Now", href: "/enroll" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
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
                <a href="mailto:iiaifaridabad@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">iiaifaridabad@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+919891832103" className="text-sm text-gray-400 hover:text-white transition-colors">098918 32103</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 leading-snug">2nd Floor, Virmani Tower 160, Add-3A, near Kapoor Hospital, New Industrial Twp 3, Faridabad, Haryana 121001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AI Learning by IIAI. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Empowering the next generation of AI-ready professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
