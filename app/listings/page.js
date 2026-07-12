"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  Heart,
  Star,
  Grid3X3,
  List,
  X,
  SlidersHorizontal,
  SearchX,
} from "lucide-react";

const allAnimals = [
  {
    id: 1,
    name: "Sahiwal Cow",
    breed: "Purebred Sahiwal",
    price: 65000,
    location: "Lahore, Punjab",
    age: "3 years",
    weight: "350 kg",
    category: "Cows",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=600&h=400&fit=crop",
    seller: "Muhammad Ali",
    milkYield: "15L/day",
  },
  {
    id: 2,
    name: "German Shepherd Puppy",
    breed: "Imported Bloodline",
    price: 25000,
    location: "Islamabad, ICT",
    age: "3 months",
    weight: "8 kg",
    category: "Dogs",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    seller: "Fatima Khan",
    milkYield: null,
  },
  {
    id: 3,
    name: "Beetal Goat",
    breed: "Premium Beetal",
    price: 18000,
    location: "Rawalpindi, Punjab",
    age: "1.5 years",
    weight: "45 kg",
    category: "Goats",
    verified: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=600&h=400&fit=crop",
    seller: "Ahmad Hassan",
    milkYield: null,
  },
  {
    id: 4,
    name: "Persian Cat",
    breed: "Show Quality",
    price: 35000,
    location: "Karachi, Sindh",
    age: "8 months",
    weight: "4 kg",
    category: "Cats",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
    seller: "Ayesha Bibi",
    milkYield: null,
  },
  {
    id: 5,
    name: "Nili-Ravi Buffalo",
    breed: "High Yield",
    price: 85000,
    location: "Multan, Punjab",
    age: "4 years",
    weight: "550 kg",
    category: "Buffalo",
    verified: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1582547131889-07a5c16d4b23?w=600&h=400&fit=crop",
    seller: "Usman Sheikh",
    milkYield: "18L/day",
  },
  {
    id: 6,
    name: "Teddy Parrot Pair",
    breed: "Lutino & Grey",
    price: 4500,
    location: "Peshawar, KPK",
    age: "1 year",
    weight: "0.3 kg",
    category: "Birds",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600&h=400&fit=crop",
    seller: "Zainab Malik",
    milkYield: null,
  },
  {
    id: 7,
    name: "Labrador Retriever",
    breed: "English Cream",
    price: 30000,
    location: "Faisalabad, Punjab",
    age: "2 months",
    weight: "5 kg",
    category: "Dogs",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=600&h=400&fit=crop",
    seller: "Bilal Ahmed",
    milkYield: null,
  },
  {
    id: 8,
    name: "Cholistani Cow",
    breed: "Purebred Cholistani",
    price: 75000,
    location: "Bahawalpur, Punjab",
    age: "5 years",
    weight: "400 kg",
    category: "Cows",
    verified: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=600&h=400&fit=crop",
    seller: "Saad Qureshi",
    milkYield: "12L/day",
  },
  {
    id: 9,
    name: "Kamori Goat",
    breed: "Premium Kamori",
    price: 15000,
    location: "Hyderabad, Sindh",
    age: "2 years",
    weight: "35 kg",
    category: "Goats",
    verified: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&h=400&fit=crop",
    seller: "Imran Shah",
    milkYield: null,
  },
  {
    id: 10,
    name: "Budgerigar Pair",
    breed: "Rainbow Series",
    price: 2500,
    location: "Quetta, Balochistan",
    age: "6 months",
    weight: "0.06 kg",
    category: "Birds",
    verified: false,
    featured: false,
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?w=600&h=400&fit=crop",
    seller: "Nadia Parveen",
    milkYield: null,
  },
  {
    id: 11,
    name: "Rabbit - Holland Lop",
    breed: "Show Quality",
    price: 8000,
    location: "Sialkot, Punjab",
    age: "4 months",
    weight: "1.5 kg",
    category: "Rabbits",
    verified: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=400&fit=crop",
    seller: "Hira Khan",
    milkYield: null,
  },
  {
    id: 12,
    name: "Siamese Cat",
    breed: "Traditional Seal Point",
    price: 40000,
    location: "Gujranwala, Punjab",
    age: "1 year",
    weight: "3.5 kg",
    category: "Cats",
    verified: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=400&fit=crop",
    seller: "Mariam Bibi",
    milkYield: null,
  },
];

const categories = [
  "All",
  "Dogs",
  "Cats",
  "Cows",
  "Buffalo",
  "Goats",
  "Sheep",
  "Birds",
  "Rabbits",
  "Fish",
];

const locations = [
  "All Locations",
  "Punjab",
  "Sindh",
  "KPK",
  "Balochistan",
  "Islamabad",
];

export default function ListingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAnimals = allAnimals.filter((animal) => {
    if (selectedCategory !== "All" && animal.category !== selectedCategory)
      return false;
    if (
      selectedLocation !== "All Locations" &&
      !animal.location.includes(selectedLocation)
    )
      return false;
    if (animal.price < priceRange[0] || animal.price > priceRange[1])
      return false;
    if (
      searchQuery &&
      !animal.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !animal.breed.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
            Browse Animals
          </h1>
          <p className="mt-2 text-white/80">
            Find your perfect companion from thousands of verified listings
          </p>
          {/* Search bar */}
          <div className="mt-6 flex gap-3">
            <div className="flex-1 search-bar-compact">
              <Search className="search-icon w-5 h-5" />
              <input
                type="text"
                placeholder="Search by breed, name, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-ghost btn-sm"
              style={{ padding: "0.75rem 1.25rem" }}
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn-pill ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter panel */}
        {showFilters && (
          <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800 font-[family-name:var(--font-display)]">
                Filters
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Price: Rs {priceRange[1].toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([0, parseInt(e.target.value)])
                  }
                  className="w-full accent-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-800">
              {filteredAnimals.length}
            </span>{" "}
            animals
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${viewMode === "list" ? "bg-primary text-white" : "bg-gray-100 text-gray-500"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Animal grid */}
        <div
          className={
            viewMode === "grid"
              ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filteredAnimals.map((animal) => (
            <Link
              key={animal.id}
              href={`/listings?id=${animal.id}`}
              className={`group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              {/* Real animal image */}
              <div
                className={`relative overflow-hidden bg-gray-100 ${
                  viewMode === "list"
                    ? "w-48 min-h-[160px] flex-shrink-0"
                    : "h-56"
                }`}
              >
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    viewMode === "list"
                      ? "192px"
                      : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  }
                />
                {animal.featured && (
                  <span className="absolute top-3 left-3 bg-accent text-primary-dark text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 z-10 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </span>
                )}
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center z-10 shadow-sm"
                >
                  <Heart className="w-4 h-4 text-gray-500 hover:text-red-500" />
                </button>
                {animal.verified && (
                  <span className="absolute bottom-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1.5 rounded-full z-10 shadow-sm">
                    ✓ Verified
                  </span>
                )}
              </div>
              <div className="p-5 flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg font-[family-name:var(--font-display)] group-hover:text-primary transition-colors">
                      {animal.name}
                    </h3>
                    <p className="text-sm text-gray-500">{animal.breed}</p>
                  </div>
                  <span className="text-xs bg-surface text-primary px-2 py-1 rounded-lg font-medium whitespace-nowrap">
                    {animal.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {animal.location}
                  </span>
                  <span>•</span>
                  <span>{animal.age}</span>
                  <span>•</span>
                  <span>{animal.weight}</span>
                </div>
                {animal.milkYield && (
                  <div className="mt-2 text-sm text-primary font-medium">
                    Milk Yield: {animal.milkYield}
                  </div>
                )}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xl font-bold text-primary font-[family-name:var(--font-display)]">
                    Rs {animal.price.toLocaleString("en-PK")}
                  </span>
                  <span className="text-sm text-gray-500">
                    by {animal.seller}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-20">
            <SearchX className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              No animals found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedLocation("All Locations");
                setPriceRange([0, 100000]);
                setSearchQuery("");
              }}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
