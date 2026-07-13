import Link from "next/link";
import { ArrowRight, Download, Smartphone, PawPrint } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />
      <div className="absolute inset-0 mesh-gradient-dark opacity-50" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
      <div className="absolute inset-0 dots-pattern opacity-5" />

      {/* Floating shapes */}
      <div className="absolute top-10 left-[10%] w-16 h-16 border border-white/10 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-10 right-[10%] w-12 h-12 border border-white/10 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <PawPrint className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-white/80">
                Join 25,000+ Happy Sellers
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-display)] leading-tight">
              Ready to Buy or Sell
              <br />
              <span className="text-accent">Your Animals?</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              List your animals for free and reach thousands of buyers across
              Pakistan. Safe, transparent, and hassle-free.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/post-ad"
                className="btn btn-accent btn-lg"
              >
                Post Free Ad
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/listings"
                className="btn btn-ghost btn-lg"
              >
                Browse Animals
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-white/40 pt-4">
              <span>✓ Free to list</span>
              <span>✓ No hidden charges</span>
              <span>✓ Payment protection</span>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-accent/20 rounded-[3rem] blur-[60px] scale-110" />

              <div className="relative w-72 h-[480px] bg-white/10 backdrop-blur-sm rounded-[3rem] border-2 border-white/15 p-4 shadow-2xl">
                <div className="bg-white rounded-[2.25rem] h-full overflow-hidden flex flex-col items-center justify-center text-primary p-8 relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-100 rounded-b-2xl" />

                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                    <PawPrint className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-black text-lg font-[family-name:var(--font-display)]">
                    AnimalMandiHub
                  </p>
                  <p className="text-sm text-gray-400 text-center mt-2">
                    Coming Soon on Mobile
                  </p>

                  <div className="mt-8 space-y-3 w-full">
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-3.5 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Download className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Download on</p>
                        <p className="text-sm font-bold text-gray-800">Google Play</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-3.5 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200/50 rounded-xl flex items-center justify-center">
                        <Download className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Download on</p>
                        <p className="text-sm font-bold text-gray-800">App Store</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
