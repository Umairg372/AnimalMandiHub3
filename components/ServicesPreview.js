import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Megaphone,
  Star,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Payment Guarantee",
    description:
      "Your payment is held safely until you receive and verify your animal.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description:
      "Doorstep collection and delivery with Cash on Delivery option available.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BadgeCheck,
    title: "Verified Animals",
    description:
      "Every listed animal goes through our verification process for authenticity.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Megaphone,
    title: "Banner Ads",
    description:
      "Promote your listings with premium banner ads on the homepage.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Star,
    title: "Star Listings",
    description:
      "Make your ad stand out with a Star badge for maximum visibility.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always here to help you with any issues.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            Why Choose{" "}
            <span className="text-primary">AnimalMandiHub?</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            We provide everything you need for a safe and successful animal trade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white border border-gray-100 rounded-2xl p-7 card-hover group"
              >
                <div
                  className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg font-[family-name:var(--font-display)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
