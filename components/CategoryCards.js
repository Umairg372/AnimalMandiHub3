"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Dogs",
    count: "4,200+",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    href: "/listings?category=dogs",
    accent: "group-hover:shadow-blue-500/20",
  },
  {
    name: "Cats",
    count: "2,100+",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    href: "/listings?category=cats",
    accent: "group-hover:shadow-purple-500/20",
  },
  {
    name: "Cows",
    count: "2,500+",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400&h=300&fit=crop",
    href: "/listings?category=cows",
    accent: "group-hover:shadow-green-500/20",
  },
  {
    name: "Goats",
    count: "3,800+",
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=400&h=300&fit=crop",
    href: "/listings?category=goats",
    accent: "group-hover:shadow-amber-500/20",
  },
  {
    name: "Birds",
    count: "1,900+",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop",
    href: "/listings?category=birds",
    accent: "group-hover:shadow-orange-500/20",
  },
  {
    name: "Rabbits",
    count: "800+",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop",
    href: "/listings?category=rabbits",
    accent: "group-hover:shadow-pink-500/20",
  },
  {
    name: "Fish",
    count: "1,200+",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=400&h=300&fit=crop",
    href: "/listings?category=fish",
    accent: "group-hover:shadow-cyan-500/20",
  },
  {
    name: "Buffalo",
    count: "1,500+",
    image: "https://images.unsplash.com/photo-1582547131889-07a5c16d4b23?w=400&h=300&fit=crop",
    href: "/listings?category=buffalo",
    accent: "group-hover:shadow-emerald-500/20",
  },
];

export default function CategoryCards() {
  return (
    <section className="py-24 mesh-gradient-1 relative">
      <div className="absolute inset-0 dots-pattern opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label bg-primary/8 text-primary mb-5 inline-flex">
            Browse by Category
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-display)] text-gray-900 leading-tight">
            Find Your Perfect{" "}
            <span className="shimmer-text">Companion</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            From farm animals to household pets — explore thousands of verified
            listings across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`group relative rounded-3xl overflow-hidden h-60 premium-card shadow-premium ${cat.accent}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-bold text-white text-xl font-[family-name:var(--font-display)]">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">
                      {cat.count} listed
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
