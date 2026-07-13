"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Heart,
  Star,
  Phone,
  ArrowLeft,
  Shield,
  Clock,
  Weight,
  BadgeCheck,
  Share2,
  Flag,
  PawPrint,
  ChevronRight,
  Trash2,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function AnimalDetailPage({ params }) {
  const { id } = use(params);
  const { data: session } = useSession();
  const router = useRouter();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function fetchListing() {
      try {
        const res = await fetch(`/api/listings/${id}`);
        if (!res.ok) throw new Error("Listing not found");
        const data = await res.json();
        setListing(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchListing();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-surface to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading listing...</p>
        </div>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-surface to-white flex items-center justify-center">
        <div className="text-center">
          <PawPrint className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Listing Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The listing you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link href="/listings" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Browse Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              href="/listings"
              className="hover:text-primary transition-colors"
            >
              Listings
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-800 font-medium">{listing.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-80 sm:h-96 bg-gray-100">
                <Image
                  src={listing.image}
                  alt={listing.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                {listing.featured && (
                  <span className="absolute top-4 left-4 bg-accent text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 z-10 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </span>
                )}
                {listing.verified && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 z-10 shadow-sm">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-black text-gray-900 font-[family-name:var(--font-display)]">
                    {listing.name}
                  </h1>
                  <p className="text-gray-500 mt-1 text-lg">{listing.breed}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isFavorited
                        ? "bg-red-50 text-red-500"
                        : "bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`}
                    />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-500 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-surface rounded-xl p-4 text-center">
                  <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Age</p>
                  <p className="font-bold text-gray-800 text-sm">
                    {listing.age}
                  </p>
                </div>
                <div className="bg-surface rounded-xl p-4 text-center">
                  <Weight className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Weight</p>
                  <p className="font-bold text-gray-800 text-sm">
                    {listing.weight}
                  </p>
                </div>
                <div className="bg-surface rounded-xl p-4 text-center">
                  <Shield className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Gender</p>
                  <p className="font-bold text-gray-800 text-sm">
                    {listing.gender}
                  </p>
                </div>
                <div className="bg-surface rounded-xl p-4 text-center">
                  <PawPrint className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Category</p>
                  <p className="font-bold text-gray-800 text-sm">
                    {listing.category}
                  </p>
                </div>
              </div>

              {listing.milkYield && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <p className="text-green-800 font-medium text-sm">
                    🥛 Milk Yield: {listing.milkYield}
                  </p>
                </div>
              )}

              {listing.description && (
                <div>
                  <h3 className="font-bold text-gray-800 mb-3 font-[family-name:var(--font-display)]">
                    Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {listing.description}
                  </p>
                </div>
              )}

              {/* Location */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3 font-[family-name:var(--font-display)]">
                  Location
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-primary" />
                  {listing.location}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Price</p>
                <p className="text-4xl font-black text-primary font-[family-name:var(--font-display)]">
                  Rs {listing.price?.toLocaleString("en-PK")}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{listing.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    Listed{" "}
                    {new Date(listing.createdAt).toLocaleDateString("en-PK", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                {listing.verified && (
                  <div className="flex items-center gap-3 text-sm">
                    <BadgeCheck className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 font-medium">
                      Verified Listing
                    </span>
                  </div>
                )}
              </div>

              <button className="btn btn-primary w-full btn-lg mb-3">
                <Phone className="w-4 h-4" />
                Contact Seller
              </button>

              <button className="btn btn-outline w-full">
                <Flag className="w-4 h-4" />
                Report Listing
              </button>

              {session?.user?.id === listing.userId && (
                <>
                  <div className="border-t border-gray-100 my-6" />
                  {deleting ? (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Deleting...
                    </div>
                  ) : (
                    <button
                      onClick={async () => {
                        if (!window.confirm("Delete this listing permanently?")) return;
                        setDeleting(true);
                        try {
                          const res = await fetch(`/api/listings/${id}`, {
                            method: "DELETE",
                          });
                          if (!res.ok) throw new Error();
                          router.push("/my-listings");
                        } catch {
                          alert("Failed to delete listing");
                          setDeleting(false);
                        }
                      }}
                      className="w-full px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Listing
                    </button>
                  )}
                </>
              )}

              {/* Seller Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3 font-[family-name:var(--font-display)]">
                  Seller Information
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {listing.sellerName?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      {listing.sellerName}
                    </p>
                    <p className="text-sm text-gray-500">{listing.phone}</p>
                  </div>
                </div>
              </div>

              {/* Safety Tips */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3 font-[family-name:var(--font-display)] text-sm">
                  🛡️ Safety Tips
                </h3>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li>• Meet in a public place</li>
                  <li>• Inspect the animal before paying</li>
                  <li>• Use our Payment Guarantee service</li>
                  <li>• Never pay in advance without verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
