import Link from "next/link";
import {
  PawPrint,
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
  Camera,
  Play,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { name: "Home", href: "/" },
    { name: "Browse Animals", href: "/listings" },
    { name: "Post Free Ad", href: "/post-ad" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  Categories: [
    { name: "Dogs", href: "/listings?category=dogs" },
    { name: "Cats", href: "/listings?category=cats" },
    { name: "Cows", href: "/listings?category=cows" },
    { name: "Goats", href: "/listings?category=goats" },
    { name: "Birds", href: "/listings?category=birds" },
    { name: "Fish & Aquarium", href: "/listings?category=fish" },
  ],
  Services: [
    { name: "Payment Guarantee", href: "/services" },
    { name: "Home Delivery", href: "/services" },
    { name: "Verified Animals", href: "/services" },
    { name: "Banner Ads", href: "/services" },
    { name: "Star Listings", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">
                Stay Updated with AnimalMandiHub
              </h3>
              <p className="text-white/70 mt-1">
                Get the latest listings and market updates delivered to you.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 rounded-l-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
              />
              <button className="btn btn-accent" style={{ borderRadius: "0 0.75rem 0.75rem 0", padding: "0.75rem 1.5rem" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center shadow-lg">
                <PawPrint className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                  Animal
                </span>
                <span className="text-2xl font-bold text-accent font-[family-name:var(--font-display)]">
                  Mandi
                </span>
                <span className="text-2xl font-bold text-surface-dark font-[family-name:var(--font-display)]">
                  Hub
                </span>
              </div>
            </Link>
            <p className="mt-5 text-white/70 leading-relaxed max-w-sm">
              Pakistan&apos;s largest online marketplace for buying and selling pets,
              livestock, and birds. Connecting sellers and buyers through
              technology — all breeds under one roof.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Globe, MessageCircle, Camera, Play].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-bold font-[family-name:var(--font-display)] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-accent flex items-center gap-2 group transition-colors text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>
              &copy; {new Date().getFullYear()} AnimalMandiHub. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
