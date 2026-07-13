"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, ChevronDown, Shield, Truck, Star } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&h=640&fit=crop&q=90",
    gradient: "from-emerald-600/50 to-emerald-900/60",
  },
  {
    title: "Goats & Sheep",
    count: "3,800+",
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=800&h=640&fit=crop&q=90",
    gradient: "from-amber-500/50 to-amber-800/60",
  },
  {
    title: "Dogs & Puppies",
    count: "4,200+",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=640&fit=crop&q=90",
    gradient: "from-blue-500/50 to-blue-800/60",
  },
  {
    title: "Birds & Parrots",
    count: "1,900+",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&h=640&fit=crop&q=90",
    gradient: "from-purple-500/50 to-purple-800/60",
  },
];

const trustBadges = [
  { icon: Shield, text: "100% Payment Protection" },
  { icon: Truck, text: "Home Delivery Available" },
  { icon: Star, text: "50,000+ Verified Animals" },
];

export default function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Animals");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Premium layered background */}
      <div className="absolute inset-0 mesh-gradient-1" />
      <div className="absolute inset-0 dots-pattern opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-32 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-accent/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-accent/6 to-primary/4 rounded-full blur-[80px]" style={{ animationDelay: "2s", animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute top-[60%] right-[30%] w-[300px] h-[300px] bg-primary/3 rounded-full blur-[60px]" />

      {/* Decorative geometric shapes */}
      <div className="absolute top-24 left-[8%] w-20 h-20 border-2 border-primary/10 rounded-2xl rotate-12 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 right-[15%] w-14 h-14 border-2 border-accent/15 rounded-full animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[45%] left-[3%] w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-[35%] right-[5%] w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "2.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2.5 glass-card px-5 py-2.5 rounded-full opacity-0 reveal-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm font-bold text-primary tracking-wide">
                Pakistan&apos;s #1 Animal Marketplace
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-black leading-[1.08] font-[family-name:var(--font-display)] text-gray-900 opacity-0 reveal-up delay-1">
              Where{" "}
              <span className="relative inline-block">
                <span className="shimmer-text">sellers</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8c40-6 80-6 120-2s50 4 76 0" stroke="#F9A825" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              &{" "}
              <span className="relative inline-block">
                <span className="shimmer-text">buyers</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8c40-6 80-6 120-2s50 4 76 0" stroke="#1B5E20" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              meet through{" "}
              <span className="relative inline-block text-primary">
                technology
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg opacity-0 reveal-up delay-2">
              The largest marketplace for buying and selling pets, livestock, and
              birds in Pakistan. All breeds under one roof — verified, safe, and
              transparent.
            </p>

            {/* Premium Search box */}
            <div className="opacity-0 reveal-up delay-3">
              <div className="search-bar p-1.5 flex flex-col sm:flex-row gap-0 max-w-xl">
                <div className="flex-1 relative flex items-center">
                  <Search className="search-icon w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by breed, name, or location..."
                    className="w-full"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
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
                  href={`/listings${(() => {
                    const params = new URLSearchParams();
                    if (selectedCategory !== "All Animals") params.set("category", selectedCategory);
                    if (searchText) params.set("search", searchText);
                    const qs = params.toString();
                    return qs ? `?${qs}` : "";
                  })()}`}
                  className="search-btn flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Search
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 opacity-0 reveal-up delay-4">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={badge.text}
                    className="flex items-center gap-2 text-sm text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {badge.text}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right content - Real animal image cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 opacity-0 reveal-scale delay-2">
            {categoryCards.map((card, i) => (
              <div
                key={card.title}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group ${
                  i === 0 ? "h-52 row-span-1" : "h-48"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  quality={90}
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 0px, (max-width: 1280px) 320px, 380px"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-500`} />
                <div className="category-image-card__overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-5 category-image-card__text">
                  <h3 className="font-bold text-white text-lg font-[family-name:var(--font-display)]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/90 mt-0.5">
                    {card.count} available
                  </p>
                </div>
                {/* Premium hover indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
