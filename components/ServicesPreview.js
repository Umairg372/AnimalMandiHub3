import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Megaphone,
  Star,
  Headphones,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Payment Guarantee",
    description:
      "Your payment is held safely until you receive and verify your animal.",
    gradient: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description:
      "Doorstep collection and delivery with Cash on Delivery option available.",
    gradient: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: BadgeCheck,
    title: "Verified Animals",
    description:
      "Every listed animal goes through our verification process for authenticity.",
    gradient: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-50",
  },
  {
    icon: Megaphone,
    title: "Banner Ads",
    description:
      "Promote your listings with premium banner ads on the homepage.",
    gradient: "from-amber-400 to-amber-500",
    bgLight: "bg-amber-50",
  },
  {
    icon: Star,
    title: "Star Listings",
    description:
      "Make your ad stand out with a Star badge for maximum visibility.",
    gradient: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always here to help you with any issues.",
    gradient: "from-cyan-500 to-teal-500",
    bgLight: "bg-cyan-50",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="absolute inset-0 dots-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label bg-primary/8 text-primary mb-5 inline-flex">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-display)] text-gray-900 leading-tight">
            Why Choose{" "}
            <span className="shimmer-text">AnimalMandiHub?</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            We provide everything you need for a safe and successful animal trade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group premium-card p-8 relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-14 h-14 ${service.bgLight} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h3 className="font-bold text-gray-800 text-lg font-[family-name:var(--font-display)] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
