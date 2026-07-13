import Link from "next/link";
import { Search, Shield, Truck, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search & Discover",
    description:
      "Browse thousands of verified animal listings. Filter by breed, age, price, and location to find your perfect match.",
    gradient: "from-emerald-500 to-emerald-600",
    ring: "ring-emerald-500/20",
  },
  {
    icon: Shield,
    step: "02",
    title: "Connect Safely",
    description:
      "Talk directly with verified sellers. Our payment guarantee ensures your money is safe until you receive your animal.",
    gradient: "from-amber-400 to-amber-500",
    ring: "ring-amber-500/20",
  },
  {
    icon: Truck,
    step: "03",
    title: "Get It Delivered",
    description:
      "Choose home delivery with our trusted logistics partners. Cash on delivery and doorstep collection available.",
    gradient: "from-emerald-700 to-emerald-800",
    ring: "ring-emerald-700/20",
  },
];

const features = [
  "No middlemen — direct dealing",
  "Payment held in escrow",
  "Home delivery available",
  "Verified seller badges",
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div>
            <span className="section-label bg-accent/15 text-accent-dark mb-5 inline-flex">
              How It Works
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-[family-name:var(--font-display)] text-gray-900 leading-tight mb-12">
              Buy & Sell Animals in{" "}
              <span className="shimmer-text">3 Simple Steps</span>
            </h2>

            <div className="space-y-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex gap-6 items-start group">
                    {/* Step number + icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-gray-200 to-transparent" />
                      )}
                    </div>

                    {/* Step content */}
                    <div className="pt-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-black text-gray-300 font-[family-name:var(--font-display)] tracking-widest">
                          STEP {step.step}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 font-[family-name:var(--font-display)]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            <div className="premium-card shadow-premium-lg p-10 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-black text-gray-800 font-[family-name:var(--font-display)] mb-4">
                  100% Secure Trading
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Every transaction is protected by our payment guarantee system. Your
                  money stays safe until you receive and verify your animal.
                </p>

                <div className="space-y-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl px-5 py-4 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">50,000+</p>
                <p className="text-xs text-gray-500">Animals Listed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/post-ad"
            className="btn btn-primary btn-lg inline-flex"
          >
            Start Selling Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
