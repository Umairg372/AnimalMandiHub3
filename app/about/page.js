import Link from "next/link";
import {
  Heart,
  Target,
  Eye,
  Users,
  MapPin,
  ArrowRight,
  CheckCircle,
  PawPrint,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Animal Welfare First",
    description:
      "Every decision we make prioritizes the health and well-being of animals. We enforce strict guidelines for all listings.",
  },
  {
    icon: Target,
    title: "Transparency",
    description:
      "Fair pricing, verified sellers, and honest listings. No hidden fees, no middlemen — just direct connections.",
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    description:
      "We believe in empowering farmers and small breeders by giving them direct access to buyers nationwide.",
  },
  {
    icon: Eye,
    title: "Trust & Safety",
    description:
      "Payment guarantees, verified animals, and secure transactions. Your trust is our foundation.",
  },
];

const milestones = [
  { year: "2023", title: "Founded", desc: "AnimalMandiHub was born from a vision to digitize Pakistan's animal markets." },
  { year: "2023", title: "First 1,000 Listings", desc: "Reached our first thousand verified animal listings across 5 states." },
  { year: "2024", title: "10,000 Users", desc: "Crossed 10,000 active buyers and sellers on the platform." },
  { year: "2024", title: "Delivery Launch", desc: "Launched home delivery and payment guarantee services across Pakistan." },
  { year: "2025", title: "50,000+ Animals", desc: "Over 50,000 animals listed, serving 500+ cities across Pakistan." },
  { year: "2026", title: "Mobile App", desc: "Launching our mobile app for Android and iOS to reach every farmer." },
];

const team = [
  { name: "Founder & CEO", emoji: "👨‍💼", role: "Vision & Strategy" },
  { name: "Head of Operations", emoji: "👩‍💼", role: "Daily Operations" },
  { name: "Tech Lead", emoji: "👨‍💻", role: "Platform Development" },
  { name: "Community Manager", emoji: "👩‍🏫", role: "Seller & Buyer Relations" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <PawPrint className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-display)]">
            About <span className="text-accent">AnimalMandiHub</span>
          </h1>
          <p className="mt-6 text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
            We&apos;re on a mission to transform how Pakistan trades animals — making
            it transparent, fair, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-10 border border-primary/10">
              <h2 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower every farmer, breeder, and animal lover in Pakistan with
                a digital platform that eliminates middlemen, ensures fair pricing,
                and makes buying &amp; selling animals as simple as a phone call.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Explore a world where sellers and buyers interact through
                technology. We are glad to introduce the largest marketplace for
                buying and selling pets, livestock, and birds.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-10 border border-accent/10">
              <h2 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become Pakistan&apos;s most trusted and comprehensive animal
                marketplace — where every breed of pet, livestock, and bird can be
                found under one roof, with complete transparency and trust.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                We envision a future where no farmer has to travel to physical
                mandis, where women can trade animals from the comfort of their
                homes, and where every animal finds a loving and caring home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] text-center mb-14">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-7 border border-gray-100 card-hover text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg font-[family-name:var(--font-display)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] text-center mb-14">
            Our <span className="text-primary">Journey</span>
          </h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 z-10 font-[family-name:var(--font-display)]">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-surface rounded-xl p-5 flex-1 border border-gray-100">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {m.year}
                    </span>
                    <h3 className="font-bold text-gray-800 mt-2 font-[family-name:var(--font-display)]">
                      {m.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-[family-name:var(--font-display)] text-center mb-14">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center card-hover"
              >
                <span className="text-5xl block mb-3">{t.emoji}</span>
                <h3 className="font-bold text-gray-800 font-[family-name:var(--font-display)]">
                  {t.name}
                </h3>
                <p className="text-sm text-primary mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">
            Join the AnimalMandiHub Community
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            Be part of Pakistan&apos;s largest animal marketplace. Buy, sell, and
            connect with thousands of farmers and pet lovers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/post-ad"
              className="btn btn-accent btn-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
