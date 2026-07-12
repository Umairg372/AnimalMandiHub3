import Link from "next/link";
import { ArrowRight, Download, Smartphone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight">
              Ready to Buy or Sell
              <br />
              <span className="text-accent">Your Animals?</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Join thousands of farmers and pet owners who trust AnimalMandiHub.
              List your animals for free and reach buyers across Pakistan.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
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
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-72 h-[480px] bg-white/10 backdrop-blur-sm rounded-[3rem] border-4 border-white/20 p-4 shadow-2xl">
                <div className="bg-white rounded-[2rem] h-full overflow-hidden flex flex-col items-center justify-center text-primary p-6">
                  <Smartphone className="w-16 h-16 mb-4" />
                  <p className="font-bold text-lg font-[family-name:var(--font-display)]">
                    AnimalMandiHub
                  </p>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Coming Soon on Mobile
                  </p>
                  <div className="mt-6 space-y-3 w-full">
                    <div className="bg-primary/10 rounded-xl p-3 flex items-center gap-3">
                      <Download className="w-5 h-5 text-primary" />
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Download on</p>
                        <p className="text-sm font-bold">Google Play</p>
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-xl p-3 flex items-center gap-3">
                      <Download className="w-5 h-5 text-primary" />
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Download on</p>
                        <p className="text-sm font-bold">App Store</p>
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
