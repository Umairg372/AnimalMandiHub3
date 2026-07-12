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
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 300 1234567", "+92 321 7654321"],
    description: "Mon-Sat, 9AM - 8PM PKT",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@animalmandihub.com", "sales@animalmandihub.com"],
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: ["123 Farm Road, Agri Tech Park", "Lahore, Punjab 54000"],
    description: "Visit us anytime",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday: 9AM - 8PM", "Sunday: 10AM - 4PM"],
    description: "Customer support available",
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-2xl">
            Have questions? Need help? We&apos;re here for you. Reach out and our
            team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg card-hover"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800 font-[family-name:var(--font-display)]">
                    {info.title}
                  </h3>
                  {info.details.map((d) => (
                    <p key={d} className="text-sm text-gray-600 mt-1">
                      {d}
                    </p>
                  ))}
                  <p className="text-xs text-primary mt-2">{info.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="py-16 bg-gradient-to-b from-white to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-500 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium text-sm">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+92 3XX XXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="selling">Selling Help</option>
                      <option value="buying">Buying Help</option>
                      <option value="delivery">Delivery Question</option>
                      <option value="payment">Payment Issue</option>
                      <option value="partnership">Business Partnership</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 mb-8">
                Quick answers to common questions.
              </p>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="bg-white border border-gray-100 rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm">
                          {faq.q}
                        </h3>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-3 text-primary" />
            <p className="font-bold text-gray-700">AnimalMandiHub Head Office</p>
            <p className="text-sm">123 Farm Road, Lahore, Punjab</p>
          </div>
        </div>
      </section>
    </div>
  );
}
