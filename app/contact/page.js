"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  PawPrint,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 300 1234567", "+92 321 7654321"],
    description: "Mon-Sat, 9AM - 8PM PKT",
    gradient: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@animalmandihub.com", "sales@animalmandihub.com"],
    description: "We reply within 24 hours",
    gradient: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: ["123 Farm Road, Agri Tech Park", "Lahore, Punjab 54000"],
    description: "Visit us anytime",
    gradient: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-50",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9AM - 8PM", "Sunday: 10AM - 4PM"],
    description: "Customer support available",
    gradient: "from-amber-400 to-amber-500",
    bgLight: "bg-amber-50",
  },
];

const faqs = [
  {
    q: "How do I post an ad on AnimalMandiHub?",
    a: "Click on 'Post Free Ad' and follow the 5-step process: select category, add details, upload photos, set location, and publish. It takes less than 3 minutes!",
  },
  {
    q: "Is it really free to list animals?",
    a: "Yes! Basic listings are completely free. We only charge for premium services like Star Listings and Banner Ads which are optional.",
  },
  {
    q: "How does the Payment Guarantee work?",
    a: "When you buy with payment guarantee, your money is held in escrow. It's only released to the seller after you receive and verify the animal. Full refund if not as described.",
  },
  {
    q: "Do you provide delivery services?",
    a: "Yes! We offer home collection from the seller and doorstep delivery to the buyer. Cash on Delivery is also available in select cities.",
  },
  {
    q: "How are animals verified?",
    a: "Our verification team physically inspects animals for breed authenticity, health condition, and verifies seller identity before adding a 'Verified' badge.",
  },
];

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "selling", label: "Selling Help" },
  { value: "buying", label: "Buying Help" },
  { value: "delivery", label: "Delivery Question" },
  { value: "payment", label: "Payment Issue" },
  { value: "partnership", label: "Business Partnership" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch {
      // silent fail
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFaq = (i) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <div className="min-h-screen">
      {/* ====== HERO ====== */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />
        <div className="absolute inset-0 dots-pattern opacity-5" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(at 30% 40%, rgba(249,168,37,0.15) 0px, transparent 50%), radial-gradient(at 70% 60%, rgba(255,255,255,0.05) 0px, transparent 50%)" }} />

        {/* Floating shapes */}
        <div className="absolute top-8 left-[8%] w-20 h-20 border border-white/10 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-8 right-[12%] w-14 h-14 border border-white/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] right-[5%] w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6">
                <PawPrint className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-white/80">We&apos;re Here to Help</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-[family-name:var(--font-display)] leading-tight">
                Get in{" "}
                <span className="relative inline-block">
                  <span className="text-accent">Touch</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8c40-6 80-6 120-2s50 4 76 0" stroke="#F9A825" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-lg">
                Have questions? Need help? We&apos;re here for you. Reach out and our
                team will get back to you within 24 hours.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { value: "24hr", label: "Response Time" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black text-accent font-[family-name:var(--font-display)]">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Quick contact visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 rounded-[2rem] blur-[40px] scale-110" />
                <div className="relative glass-card bg-white/5 border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="space-y-5">
                    {contactInfo.slice(0, 3).map((info) => {
                      const Icon = info.icon;
                      return (
                        <div key={info.title} className="flex items-center gap-4 group">
                          <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{info.details[0]}</p>
                            <p className="text-xs text-white/40">{info.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTACT CARDS ====== */}
      <section className="relative -mt-16 z-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="group premium-card p-6 relative overflow-hidden"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className={`w-13 h-13 ${info.bgLight} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-10 h-10 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-sm`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-800 font-[family-name:var(--font-display)] text-lg">
                    {info.title}
                  </h3>

                  <div className="mt-3 space-y-1">
                    {info.details.map((d) => (
                      <p key={d} className="text-sm text-gray-500">
                        {d}
                      </p>
                    ))}
                  </div>

                  <p className="text-xs text-primary font-semibold mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {info.description}
                    <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== FORM + FAQ ====== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-1" />
        <div className="absolute inset-0 dots-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="premium-card shadow-premium-lg p-8 sm:p-10 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/3 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/3 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <span className="section-label bg-primary/8 text-primary mb-4 inline-flex">
                      <Send className="w-3.5 h-3.5" />
                      Contact Form
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-[family-name:var(--font-display)]">
                      Send us a <span className="shimmer-text">Message</span>
                    </h2>
                    <p className="text-gray-400 mt-3">
                      Fill out the form below and we&apos;ll get back to you as soon as
                      possible.
                    </p>
                  </div>

                  {submitted && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-emerald-800 font-bold text-sm">Message sent successfully!</p>
                        <p className="text-emerald-600 text-sm mt-0.5">We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Muhammad Ali"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="you@example.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+92 3XX XXXXXXX"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({ ...formData, subject: e.target.value })
                            }
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 transition-all appearance-none"
                          >
                            <option value="">Select a subject</option>
                            {subjects.map((s) => (
                              <option key={s.value} value={s.value}>
                                {s.label}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none bg-gray-50/50 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary w-full btn-lg disabled:opacity-50"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* FAQ — 2 cols */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="section-label bg-accent/15 text-accent-dark mb-4 inline-flex">
                  <MessageSquare className="w-3.5 h-3.5" />
                  FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 font-[family-name:var(--font-display)]">
                  Got <span className="shimmer-text">Questions?</span>
                </h2>
                <p className="text-gray-400 mt-3">
                  Quick answers to common questions.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={faq.q}
                    className={`premium-card overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "shadow-premium" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full p-5 flex items-start gap-4 text-left"
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        openFaq === i
                          ? "bg-primary text-white"
                          : "bg-primary/5 text-primary"
                      }`}>
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-800 text-sm font-[family-name:var(--font-display)]">
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180 text-primary" : ""
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? "max-h-40" : "max-h-0"
                    }`}>
                      <div className="px-5 pb-5 pl-[4.25rem]">
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support CTA */}
              <div className="mt-6 premium-card p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 font-[family-name:var(--font-display)]">
                      Still need help?
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Call us directly at{" "}
                      <span className="text-primary font-bold">+92 300 1234567</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Mon-Sat, 9AM - 8PM PKT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== MAP SECTION ====== */}
      <section className="relative h-96 overflow-hidden">
        {/* Map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="absolute inset-0 dots-pattern opacity-30" />
        </div>

        {/* Overlay card */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="premium-card shadow-premium-lg p-8 sm:p-10 text-center max-w-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-gray-800 font-[family-name:var(--font-display)]">
                AnimalMandiHub Head Office
              </h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                123 Farm Road, Agri Tech Park
                <br />
                Lahore, Punjab 54000, Pakistan
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mt-6 inline-flex"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
