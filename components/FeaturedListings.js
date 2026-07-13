"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Heart, ArrowRight } from "lucide-react";

const featuredAnimals = [
  {
    id: 1,
    name: "Sahiwal Cow",
    breed: "Purebred Sahiwal",
    price: "Rs 65,000",
    location: "Lahore, Punjab",
    age: "3 years",
    category: "Cows",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "German Shepherd Puppy",
    breed: "Imported Bloodline",
    price: "Rs 25,000",
    location: "Islamabad, ICT",
    age: "3 months",
    category: "Dogs",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Beetal Goat",
    breed: "Premium Beetal",
    price: "Rs 18,000",
    location: "Rawalpindi, Punjab",
    age: "1.5 years",
    category: "Goats",
    verified: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Persian Cat",
    breed: "Show Quality",
    price: "Rs 35,000",
    location: "Karachi, Sindh",
    age: "8 months",
    category: "Cats",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Nili-Ravi Buffalo",
    breed: "High Yield",
    price: "Rs 85,000",
    location: "Multan, Punjab",
    age: "4 years",
    category: "Buffalo",
    verified: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1582547131889-07a5c16d4b23?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Teddy Parrot Pair",
    breed: "Lutino & Grey",
    price: "Rs 4,500",
    location: "Peshawar, KPK",
    age: "1 year",
    category: "Birds",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=400&fit=crop",
  },
];

export default function FeaturedListings() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/3 rounded-full blur-[80px]" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/3 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-label bg-accent/15 text-accent-dark mb-5 inline-flex">
              <Star className="w-3.5 h-3.5 fill-current" />
              Featured Listings
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-display)] text-gray-900 leading-tight">
              Recently <span className="shimmer-text">Added</span> Animals
            </h2>
          </div>
          <Link
            href="/listings"
            className="group flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors"
          >
            View All Listings
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAnimals.map((animal, i) => (
            <Link
              key={animal.id}
              href={`/listings/${animal.id}`}
              className="group premium-card overflow-hidden"
            >
              {/* Real animal image */}
              <div className="h-60 relative overflow-hidden bg-gray-100">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {animal.featured && (
                  <span className="absolute top-4 left-4 premium-badge z-10">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </span>
                )}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-sm hover:scale-110 hover:shadow-md"
                >
                  <Heart className="w-4.5 h-4.5 text-gray-500 hover:text-red-500 transition-colors" />
                </button>
                {animal.verified && (
                  <span className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                    Verified
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg font-[family-name:var(--font-display)] group-hover:text-primary transition-colors">
                      {animal.name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-0.5">{animal.breed}</p>
                  </div>
                  <span className="text-xs bg-surface text-primary px-2.5 py-1 rounded-lg font-semibold">
                    {animal.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {animal.location}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{animal.age}</span>
                </div>
                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xl font-black text-primary font-[family-name:var(--font-display)]">
                    {animal.price}
                  </span>
                  <span className="text-sm text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
