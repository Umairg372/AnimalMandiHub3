import Link from "next/link";
import { PawPrint, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <PawPrint className="w-12 h-12 text-primary/40" />
        </div>
        <h1 className="text-6xl font-black text-primary font-[family-name:var(--font-display)] mb-2">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)] mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link href="/listings" className="btn btn-outline">
            <ArrowLeft className="w-4 h-4" />
            Browse Listings
          </Link>
        </div>
      </div>
    </div>
  );
}
