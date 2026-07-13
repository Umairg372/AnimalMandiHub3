"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  Menu,
  X,
  PawPrint,
  Search,
  ChevronDown,
  Phone,
  MapPin,
  LogIn,
  UserPlus,
  LogOut,
  User,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Browse Animals",
    href: "/listings",
    children: [
      { name: "All Animals", href: "/listings" },
      { name: "Dogs", href: "/listings?category=Dogs" },
      { name: "Cats", href: "/listings?category=Cats" },
      { name: "Cows", href: "/listings?category=Cows" },
      { name: "Goats", href: "/listings?category=Goats" },
      { name: "Birds", href: "/listings?category=Birds" },
    ],
  },
  { name: "Post Ad", href: "/post-ad" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { data: session } = useSession();

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +92 300 1234567
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Serving Across Pakistan
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/post-ad"
              className="btn btn-accent btn-sm"
              style={{ padding: "0.35rem 1rem", borderRadius: "999px", fontSize: "0.75rem" }}
            >
              Sell Your Animal - Free
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-primary/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:rotate-3">
                <PawPrint className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold text-primary font-[family-name:var(--font-display)]">
                  Animal
                </span>
                <span className="text-xl lg:text-2xl font-bold text-accent font-[family-name:var(--font-display)]">
                  Mandi
                </span>
                <span className="text-xl lg:text-2xl font-bold text-earth font-[family-name:var(--font-display)]">
                  Hub
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="btn-nav"
                  >
                    {link.name}
                    {link.children && (
                      <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
                    )}
                  </Link>
                  {link.children && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-surface hover:text-primary transition-all hover:pl-6"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/listings"
                className="btn btn-outline btn-sm"
                style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}
              >
                <Search className="w-4 h-4" />
                Search Animals
              </Link>
              <Link
                href="/post-ad"
                className="btn btn-accent"
                style={{ padding: "0.6rem 1.5rem", fontSize: "0.875rem" }}
              >
                + Post Free Ad
              </Link>

              {session ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-surface transition-colors">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {session.user?.name?.split(" ")[0]}
                    </span>
                  </button>
                  <div className="absolute right-0 top-full w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs text-gray-400">Signed in as</p>
                      <p className="text-sm font-medium text-gray-700 truncate">
                        {session.user?.email}
                      </p>
                    </div>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-all"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="btn btn-ghost btn-sm"
                    style={{ padding: "0.6rem 1rem", fontSize: "0.875rem" }}
                  >
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="btn btn-primary btn-sm"
                    style={{ padding: "0.6rem 1rem", fontSize: "0.875rem" }}
                  >
                    <UserPlus className="w-4 h-4" />
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden btn btn-icon bg-surface text-primary hover:bg-surface-dark"
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-surface hover:text-primary rounded-xl font-medium transition-all hover:pl-6"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
                {session ? (
                  <>
                    <div className="px-4 py-2 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          {session.user?.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {session.user?.email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        signOut({ callbackUrl: "/" });
                      }}
                      className="btn btn-outline w-full text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/signin"
                      onClick={() => setIsOpen(false)}
                      className="btn btn-primary w-full"
                    >
                      <LogIn className="w-4 h-4" />
                      Sign In
                    </Link>
                    <Link
                      href="/auth/signup"
                      onClick={() => setIsOpen(false)}
                      className="btn btn-outline w-full"
                    >
                      <UserPlus className="w-4 h-4" />
                      Sign Up Free
                    </Link>
                  </>
                )}
                <Link
                  href="/post-ad"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-accent w-full"
                >
                  + Post Free Ad
                </Link>
                <Link
                  href="/listings"
                  onClick={() => setIsOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Browse Animals
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
