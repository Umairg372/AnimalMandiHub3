import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Megaphone,
  Star,
  Headphones,
  CheckCircle,
  ArrowRight,
  Home,
  CreditCard,
  PackageCheck,
  Shield,
  Eye,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Services - AnimalMandiHub",
  description:
    "Explore AnimalMandiHub services: Payment Guarantee, Home Delivery, Verified Animals, Banner Ads, Star Listings, and 24/7 Support.",
};

const mainServices = [
  {
    icon: ShieldCheck,
    title: "Payment with Guarantee",
    description:
      "Once you have chosen the animal, you can send the payment to our official bank account, and we will keep it safe with us until you have received your animal. This protects both buyers and sellers from fraud.",
    features: [
      "Money held in escrow until delivery",
      "Full refund if animal not as described",
      "Protected for both buyer and seller",
      "No hidden charges or fees",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Truck,
    title: "Home Delivery Service",
    description:
      "We offer doorstep collection and delivery services across Pakistan. Choose between Home Collection & Delivery or Cash on Delivery — whichever is more convenient for you.",
    features: [
      "Home collection from seller's location",
      "Doorstep delivery to buyer",
      "Cash on Delivery option available",
      "Live tracking of your animal",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: BadgeCheck,
    title: "Verified Animals",
    description:
      "Every listed animal goes through our rigorous verification process. Our team checks the animal's health, breed authenticity, and seller credentials to ensure you get what you see.",
    features: [
      "Physical verification by our team",
      "Breed authenticity guaranteed",
      "Health check documentation",
      "Seller identity verification",
    ],
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Megaphone,
    title: "Banner Ads",
    description:
      "Promote your listings with premium banner advertisements on the homepage and category pages. Get maximum visibility and sell your animals faster.",
    features: [
      "Homepage banner placement",
      "Category page visibility",
      "Custom duration options",
      "Performance analytics",
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Star,
    title: "Star Listings",
    description:
      "Make your ad stand out with a special Star badge. Star listings appear at the top of search results and get 3x more views than regular listings.",
    features: [
      "Priority placement in search results",
      "Special Star badge on listing",
      "3x more views on average",
      "Highlighted in category pages",
    ],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is always available to help you with any questions, issues, or disputes. We ensure a smooth trading experience for everyone.",
    features: [
      "Phone, chat, and email support",
      "Dispute resolution assistance",
      "Trade guidance and tips",
      "Multilingual support team",
    ],
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const additionalServices = [
  {
    icon: Home,
    title: "Self-Stock",
    description: "Manage your own inventory and listings with our self-service tools.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description: "JazzCash, EasyPaisa, and Bank Transfer accepted for all premium services.",
  },
  {
    icon: PackageCheck,
    title: "Health Certificates",
    description: "Get veterinary health certificates for your animals before sale.",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Livestock insurance options available for high-value animals.",
  },
  {
    icon: Eye,
    title: "Market Insights",
    description: "Access real-time market rates and pricing data for informed decisions.",
  },
  {
    icon: Award,
    title: "Seller Ratings",
    description: "Build your reputation with verified seller ratings and reviews.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Everything you need for a safe, transparent, and hassle-free animal
            trading experience. From payment protection to doorstep delivery.
          </p>
        </div>
      </section>

      {/* Main services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div
                      className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center`}
                    >
                      <Icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full">
                    <div
                      className={`bg-gradient-to-br ${service.color} rounded-3xl p-10 flex items-center justify-center min-h-[300px]`}
                    >
                      <Icon className="w-32 h-32 text-white/30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional services grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)] text-center mb-12">
            Additional <span className="text-primary">Services</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 card-hover"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg font-[family-name:var(--font-display)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            Join thousands of farmers and pet owners who trust AnimalMandiHub for
            safe animal trading.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/post-ad"
              className="btn btn-accent btn-lg"
            >
              Post Free Ad
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn btn-ghost btn-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
