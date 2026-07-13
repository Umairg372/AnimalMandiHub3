"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
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
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
];

export default function ListingsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [priceRange, setPriceRange] = useState(100000);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (selectedCategory !== "All") params.set("category", selectedCategory);
        if (selectedLocation !== "All Locations")
          params.set("location", selectedLocation);
        if (searchQuery) params.set("search", searchQuery);
        if (priceRange < 100000) params.set("maxPrice", priceRange.toString());
        params.set("sort", sortBy);

        const res = await fetch(`/api/listings?${params.toString()}`);
        const data = await res.json();
        if (!cancelled) {
          setAnimals(data.listings || []);
          setTotal(data.total || 0);
        }
      } catch {
        if (!cancelled) {
          setAnimals([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [selectedCategory, selectedLocation, searchQuery, priceRange, sortBy]);

  const updateUrl = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "All" && value !== "All Locations") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/listings?${params.toString()}`, { scroll: false });
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    updateUrl("category", cat);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnimals();
  };

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
          <form onSubmit={handleSearch} className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 search-bar-compact">
              <Search className="search-icon w-5 h-5" />
              <input
                type="text"
                placeholder="Search by breed, name, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button type="submit" className="btn btn-accent flex-1 sm:flex-none">
                Search
              </button>
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="btn btn-ghost btn-sm flex-1 sm:flex-none"
                style={{ padding: "0.75rem 1.25rem" }}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
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
                  Max Price: Rs {priceRange.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
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
            <span className="font-bold text-gray-800">{total}</span> animals
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

        {/* Loading state */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-500">Loading animals...</p>
            </div>
          </div>
        )}

        {/* Animal grid */}
        {!loading && (
          <div
            className={
              viewMode === "grid"
                ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {animals.map((animal) => (
              <Link
                key={animal.id}
                href={`/listings/${animal.id}`}
                className={`group bg-white border border-gray-100 rounded-2xl overflow-hidden card-hover ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
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
                      Rs {animal.price?.toLocaleString("en-PK")}
                    </span>
                    <span className="text-sm text-gray-500">
                      by {animal.sellerName}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && animals.length === 0 && (
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
                setPriceRange(100000);
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
