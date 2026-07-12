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
  },
  {
    name: "Cats",
    count: "2,100+",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    href: "/listings?category=cats",
  },
  {
    name: "Cows",
    count: "2,500+",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400&h=300&fit=crop",
    href: "/listings?category=cows",
  },
  {
    name: "Goats",
    count: "3,800+",
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=400&h=300&fit=crop",
    href: "/listings?category=goats",
  },
  {
    name: "Birds",
    count: "1,900+",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop",
    href: "/listings?category=birds",
  },
  {
    name: "Rabbits",
    count: "800+",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop",
    href: "/listings?category=rabbits",
  },
  {
    name: "Fish",
    count: "1,200+",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=400&h=300&fit=crop",
    href: "/listings?category=fish",
  },
  {
    name: "Buffalo",
    count: "1,500+",
    image: "https://images.unsplash.com/photo-1582547131889-07a5c16d4b23?w=400&h=300&fit=crop",
    href: "/listings?category=buffalo",
  },
];

export default function CategoryCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Browse by Category
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            Find Your Perfect{" "}
            <span className="text-primary">Companion</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            From farm animals to household pets — explore thousands of verified
            listings across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden h-56 card-hover"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-bold text-white text-xl font-[family-name:var(--font-display)]">
                  {cat.name}
                </h3>
                <p className="text-sm text-white/80 mt-0.5">
                  {cat.count} listed
                </p>
                <div className="mt-3 flex items-center gap-1 text-white/90 text-sm font-medium group-hover:text-accent transition-colors">
                  View All
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
