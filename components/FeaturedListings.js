"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Heart } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-b from-surface to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14 gap-4">
          <div>
            <span className="inline-block bg-accent/20 text-accent-dark px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Featured Listings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900">
              Recently <span className="text-primary">Added</span> Animals
            </h2>
          </div>
          <Link
            href="/listings"
            className="text-primary hover:text-primary-dark font-bold flex items-center gap-1 transition-colors"
          >
            View All Listings →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAnimals.map((animal) => (
            <Link
              key={animal.id}
              href={`/listings?id=${animal.id}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover"
            >
              {/* Real animal image */}
              <div className="h-56 relative overflow-hidden bg-gray-100">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {animal.featured && (
                  <span className="absolute top-3 left-3 bg-accent text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 z-10 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </span>
                )}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors z-10 shadow-sm"
                >
                  <Heart className="w-4 h-4 text-gray-500 hover:text-red-500" />
                </button>
                {animal.verified && (
                  <span className="absolute bottom-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                    ✓ Verified
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg font-[family-name:var(--font-display)] group-hover:text-primary transition-colors">
                      {animal.name}
                    </h3>
                    <p className="text-sm text-gray-500">{animal.breed}</p>
                  </div>
                  <span className="text-xs bg-surface text-primary px-2 py-1 rounded-lg font-medium">
                    {animal.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {animal.location}
                  </span>
                  <span>{animal.age}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xl font-bold text-primary font-[family-name:var(--font-display)]">
                      {animal.price.replace("Rs ", "Rs ")}
                    </span>
                  <span className="text-sm text-primary font-medium group-hover:underline">
                    View Details →
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
