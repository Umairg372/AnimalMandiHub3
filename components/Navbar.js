"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  PawPrint,
  ChevronDown,
  Phone,
  MapPin,
  LogIn,
  UserPlus,
  LogOut,
  User,
  ChevronRight,
  LayoutList,
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
      { name: "Buffalo", href: "/listings?category=Buffalo" },
      { name: "Rabbits", href: "/listings?category=Rabbits" },
    ],
  },
  { name: "Post Ad", href: "/post-ad" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function isActive(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function handleKeyDown(e, action) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    action();
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = useCallback((name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  }, []);

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleDropdown = useCallback((name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  }, []);

  const desktopNav = useMemo(
    () => (
      <nav
        className="hidden lg:flex items-center gap-0.5"
        role="navigation"
        aria-label="Main navigation"
      >
        {navLinks.map((link) => {
          const active = isActive(link.href, pathname);

          return (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() =>
                link.children && openDropdown(link.name)
              }
              onMouseLeave={() => link.children && closeDropdown()}
            >
              {link.children ? (
                <button
                  type="button"
                  className={`${active ? "nav-link-active" : "nav-link"}`}
                  aria-expanded={activeDropdown === link.name}
                  aria-haspopup="true"
                  onClick={() => toggleDropdown(link.name)}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => toggleDropdown(link.name))
                  }
                >
                  <span>{link.name}</span>
                  <ChevronDown
                    className="nav-chevron w-3.5 h-3.5"
                    data-open={activeDropdown === link.name}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`${active ? "nav-link-active" : "nav-link"}`}
                >
                  <span>{link.name}</span>
                </Link>
              )}

              {link.children && activeDropdown === link.name && (
                <div
                  className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-[240px] bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-gray-100/80 py-1.5 z-50 mt-2 overflow-hidden"
                  role="menu"
                  onMouseEnter={cancelClose}
                  onMouseLeave={closeDropdown}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="nav-dropdown-item flex items-center gap-2 px-4 py-2.5 text-[0.8125rem] text-gray-600 focus-visible:outline-none"
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="font-medium min-w-0 truncate">
                        {child.name}
                      </span>
                      <ChevronRight
                        className="w-3 h-3 ml-auto text-gray-300"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    ),
    [pathname, activeDropdown, openDropdown, closeDropdown, cancelClose, toggleDropdown]
  );

  const desktopActions = useMemo(
    () => (
      <div className="hidden lg:flex items-center gap-2">
        <Link href="/post-ad" className="nav-link-cta">
          + Post Free Ad
        </Link>

        {session ? (
          <div className="relative">
            <button
              type="button"
              className="nav-link"
              aria-label="Account menu"
              aria-expanded={activeDropdown === "user"}
              onClick={() => toggleDropdown("user")}
              onKeyDown={(e) =>
                handleKeyDown(e, () => toggleDropdown("user"))
              }
            >
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary-light rounded-md flex items-center justify-center shadow-sm">
                <User
                  className="w-3 h-3 text-white"
                  aria-hidden="true"
                />
              </div>
              <span className="max-w-[64px] truncate">
                {session.user?.name?.split(" ")[0]}
              </span>
              <ChevronDown
                className="nav-chevron w-3.5 h-3.5"
                data-open={activeDropdown === "user"}
                aria-hidden="true"
              />
            </button>

            {activeDropdown === "user" && (
              <div
                className="nav-dropdown absolute right-0 top-full w-64 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-gray-100/80 py-1.5 z-50 mt-2"
                role="menu"
                onMouseEnter={cancelClose}
                onMouseLeave={closeDropdown}
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-[0.8125rem] font-bold text-gray-800 truncate">
                    {session.user?.name}
                  </p>
                  <p className="text-[0.6875rem] text-gray-400 mt-0.5 truncate">
                    {session.user?.email}
                  </p>
                </div>
                <Link
                  href="/my-listings"
                  onClick={() => setActiveDropdown(null)}
                  className="nav-dropdown-item w-full px-4 py-2.5 text-[0.8125rem] font-medium text-gray-700 hover:text-primary flex items-center gap-2.5 focus-visible:outline-none"
                  role="menuitem"
                >
                  <LayoutList className="w-4 h-4" aria-hidden="true" />
                  My Listings
                </Link>
                <div className="border-t border-gray-100 mx-2 my-1" />
                <button
                  type="button"
                  onClick={() => {
                    setActiveDropdown(null);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="nav-dropdown-item w-full px-4 py-2.5 text-[0.8125rem] font-medium text-red-500 hover:bg-red-50 flex items-center gap-2.5 focus-visible:outline-none focus-visible:bg-red-50"
                  role="menuitem"
                >
                  <LogOut className="w-4 h-4" aria-hidden="true" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <Link href="/auth/signin" className="nav-link">
              <LogIn className="w-4 h-4" aria-hidden="true" />
              <span>Sign In</span>
            </Link>
            <Link href="/auth/signup" className="nav-link-cta">
              <UserPlus className="w-4 h-4" aria-hidden="true" />
              <span>Sign Up</span>
            </Link>
          </div>
        )}
      </div>
    ),
    [session, activeDropdown, toggleDropdown, closeDropdown, cancelClose]
  );

  const mobileMenu = useMemo(
    () => {
      if (!isOpen) return null;
      return (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-gray-100 shadow-[0_16px_48px_rgba(0,0,0,0.08)] max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-5 py-5 space-y-1">
            {session && (
              <div className="nav-mobile-item flex items-center gap-3 p-3.5 bg-surface rounded-xl mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <User className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-800 text-[0.875rem] truncate">
                    {session.user?.name}
                  </p>
                  <p className="text-[0.75rem] text-gray-400 truncate">
                    {session.user?.email}
                  </p>
                </div>
              </div>
            )}

            {session && (
              <Link
                href="/my-listings"
                onClick={() => setIsOpen(false)}
                className="nav-mobile-item flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-[0.875rem] text-primary hover:bg-primary/[0.04]"
              >
                <LayoutList className="w-5 h-5" aria-hidden="true" />
                <span>My Listings</span>
              </Link>
            )}

            {navLinks.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <div key={link.name} className="nav-mobile-item">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-[0.875rem] ${
                      active
                        ? "bg-primary text-white shadow-sm"
                        : "text-gray-700 hover:bg-primary/[0.04] hover:text-primary"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.children && (
                      <ChevronRight
                        className="w-4 h-4 text-gray-300"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                  {link.children && (
                    <div className="pl-4 pr-2 pb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 text-[0.8125rem] text-gray-500 hover:text-primary hover:bg-primary/[0.04] rounded-lg transition-colors duration-150 focus-visible:outline-none"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="nav-mobile-item pt-4 border-t border-gray-100 mt-4 space-y-2.5">
              <Link
                href="/post-ad"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                + Post Free Ad
              </Link>

              {session ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-red-500 border border-red-200 font-semibold rounded-xl hover:bg-red-50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                >
                  <LogOut className="w-4 h-4" aria-hidden="true" />
                  Sign Out
                </button>
              ) : (
                <div className="flex gap-2.5">
                  <Link
                    href="/auth/signin"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  >
                    <LogIn className="w-4 h-4" aria-hidden="true" />
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors duration-150 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                  >
                    <UserPlus className="w-4 h-4" aria-hidden="true" />
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    },
    [isOpen, pathname, session]
  );

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[#0d2818] text-white/60 text-[0.7rem] tracking-wide hidden md:block select-none">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-3 h-3 shrink-0" aria-hidden="true" />
              <span>+92 300 1234567</span>
            </a>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
              Serving Across Pakistan
            </span>
          </div>
          <Link
            href="/post-ad"
            className="font-semibold hover:text-white transition-colors duration-200"
          >
            Sell Your Animal — Free
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <header
        ref={navRef}
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.06)]"
            : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded-xl"
              aria-label="AnimalMandiHub — Go to homepage"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-primary-light rounded-[10px] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                <PawPrint
                  className="w-[18px] h-[18px] text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-baseline" aria-hidden="true">
                <span className="text-[1.25rem] font-extrabold text-primary font-[family-name:var(--font-display)] tracking-tight">
                  Animal
                </span>
                <span className="text-[1.25rem] font-extrabold text-accent font-[family-name:var(--font-display)] tracking-tight">
                  Mandi
                </span>
                <span className="text-[1.25rem] font-extrabold text-earth font-[family-name:var(--font-display)] tracking-tight">
                  Hub
                </span>
              </div>
            </Link>

            {desktopNav}
            {desktopActions}

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenu}
      </header>
    </>
  );
}
