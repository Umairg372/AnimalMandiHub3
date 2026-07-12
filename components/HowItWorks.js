import Link from "next/link";
import {
  Search,
  Shield,
  Truck,
  Star,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search & Discover",
    description:
      "Browse thousands of verified animal listings. Filter by breed, age, price, and location to find your perfect match.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
  },
  {
    icon: Shield,
    step: "02",
    title: "Connect Safely",
    description:
      "Talk directly with verified sellers. Our payment guarantee ensures your money is safe until you receive your animal.",
    color: "from-accent to-accent-dark",
    bgColor: "bg-accent/5",
  },
  {
    icon: Truck,
    step: "03",
    title: "Get It Delivered",
    description:
      "Choose home delivery with our trusted logistics partners. Cash on delivery and doorstep collection available.",
    color: "from-earth to-earth-light",
    bgColor: "bg-earth/5",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            Buy & Sell Animals in{" "}
            <span className="text-primary">3 Simple Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative text-center group">
                <div
                  className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform`}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <span className="text-6xl font-black text-gray-100 font-[family-name:var(--font-display)] absolute -top-2 left-1/2 -translate-x-1/2 select-none">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-gray-800 font-[family-name:var(--font-display)] mt-4">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
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
