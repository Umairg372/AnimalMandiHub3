"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  PawPrint,
  MapPin,
  AlertCircle,
  X,
  Eye,
  Loader2,
  ChevronRight,
} from "lucide-react";

export default function MyListingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
      return;
    }
    if (status !== "authenticated") return;

    let cancelled = false;
    async function fetchListings() {
      setLoading(true);
      try {
        const res = await fetch("/api/listings?mine=true");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (!cancelled) setListings(data.listings || []);
      } catch {
        if (!cancelled) setListings([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchListings();
    return () => { cancelled = true; };
  }, [status, router]);

  const handleDelete = async (id) => {
    setDeleting(id);
    try {
      const res = await fetch(`/api/listings/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setListings((prev) => prev.filter((l) => l.id !== id));
    } catch {
      alert("Failed to delete listing. Please try again.");
    } finally {
      setDeleting(null);
      setConfirmId(null);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white">
      <div className="bg-gradient-to-r from-primary to-primary-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
            My Listings
          </h1>
          <p className="mt-2 text-white/80">
            Manage your posted animal listings
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <PawPrint className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No listings yet
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              You haven&apos;t posted any animal listings yet. Start selling
              today!
            </p>
            <Link href="/post-ad" className="btn btn-primary">
              <PawPrint className="w-4 h-4" />
              Post Your First Ad
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-40 h-40 sm:h-auto shrink-0 bg-gray-100">
                    {listing.image ? (
                      <Image
                        src={listing.image}
                        alt={listing.name}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <PawPrint className="w-10 h-10" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg font-[family-name:var(--font-display)]">
                          {listing.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {listing.breed} &bull; {listing.category}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-primary">
                        Rs {listing.price?.toLocaleString("en-PK")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {listing.location || listing.province || "N/A"}
                      </span>
                      <span>&bull;</span>
                      <span>{listing.age}</span>
                      <span>&bull;</span>
                      <span>{listing.gender}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href={`/listings/${listing.id}`}
                        className="text-sm font-medium text-primary hover:text-primary-light flex items-center gap-1 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Link>

                      {confirmId === listing.id ? (
                        <div className="flex items-center gap-2 ml-auto">
                          <span className="text-xs text-red-600 font-medium">
                            Delete this listing?
                          </span>
                          <button
                            onClick={() => handleDelete(listing.id)}
                            disabled={deleting === listing.id}
                            className="text-xs px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 transition-colors"
                          >
                            {deleting === listing.id ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              "Yes, Delete"
                            )}
                          </button>
                          <button
                            onClick={() => setConfirmId(null)}
                            className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmId(listing.id)}
                          className="text-sm font-medium text-red-500 hover:text-red-600 flex items-center gap-1 ml-auto transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
