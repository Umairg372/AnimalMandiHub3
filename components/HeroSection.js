"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, ChevronDown } from "lucide-react";

const categories = [
  "All Animals",
  "Dogs",
  "Cats",
  "Cows",
  "Buffalo",
  "Goats",
  "Sheep",
  "Birds",
  "Fish",
  "Horses",
  "Rabbits",
];

const categoryCards = [
  {
    title: "Cows & Buffalo",
    count: "2,500+",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400&h=300&fit=crop",
    border: "border-green-200",
  },
  {
    title: "Goats & Sheep",
    count: "3,800+",
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=400&h=300&fit=crop",
    border: "border-amber-200",
  },
  {
    title: "Dogs & Puppies",
    count: "4,200+",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    border: "border-blue-200",
  },
  {
    title: "Birds & Parrots",
    count: "1,900+",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop",
    border: "border-purple-200",
  },
];

export default function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Animals");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center hero-pattern grain-overlay overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Pakistan&apos;s #1 Animal Marketplace
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-[family-name:var(--font-display)]">
              Explore a world where{" "}
              <span className="text-primary">sellers</span> and{" "}
              <span className="text-accent-dark">buyers</span> interact through{" "}
              <span className="relative inline-block">
                technology
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8c40-6 80-6 120-2s50 4 76 0"
                    stroke="#F9A825"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              At AnimalMandiHub, we are glad to introduce the largest marketplace
              for buying and selling pets, livestock, and birds. The only platform
              where you can find everything, including all breeds of animals, under
              one roof.
            </p>

            {/* Premium Search box */}
            <div className="search-bar p-1.5 flex flex-col sm:flex-row gap-0">
              <div className="flex-1 relative flex items-center">
                <Search className="search-icon w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by breed, name, or location..."
                  className="w-full"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="search-dropdown"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{selectedCategory}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
                </button>
                {showDropdown && (
                  <div className="search-dropdown-menu">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setShowDropdown(false);
                        }}
                        className={selectedCategory === cat ? "selected" : ""}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/listings"
                className="search-btn flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Search
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              {[
                "✓ 100% Free to List",
                "✓ Verified Sellers",
                "✓ Payment Guarantee",
                "✓ Home Delivery",
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right content - Real animal image cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {categoryCards.map((card, i) => (
              <div
                key={card.title}
                className={`relative rounded-2xl overflow-hidden border-2 ${card.border} card-hover cursor-pointer h-44`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold text-white font-[family-name:var(--font-display)]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {card.count} available
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
