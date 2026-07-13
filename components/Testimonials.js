import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Muhammad Ali",
    location: "Lahore, Punjab",
    rating: 5,
    text: "I sold my Sahiwal cow within 3 days on AnimalMandiHub. The payment guarantee gave me confidence. No middlemen, direct dealing!",
    animal: "Sahiwal Cow",
    avatar: "👨‍🌾",
  },
  {
    name: "Fatima Khan",
    location: "Islamabad, ICT",
    rating: 5,
    text: "Found the perfect German Shepherd puppy for my family. The seller was verified and the delivery was smooth. Highly recommended!",
    animal: "German Shepherd",
    avatar: "👩",
  },
  {
    name: "Ahmad Hassan",
    location: "Multan, Punjab",
    rating: 5,
    text: "As a dairy farmer, I regularly buy buffaloes from this platform. The breed information and photos help me make informed decisions.",
    animal: "Nili-Ravi Buffalo",
    avatar: "👨‍🌾",
  },
  {
    name: "Ayesha Bibi",
    location: "Karachi, Sindh",
    rating: 5,
    text: "I was hesitant to buy online, but the verified sellers and payment protection made me feel safe. Got a beautiful Persian cat!",
    animal: "Persian Cat",
    avatar: "👩",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label bg-primary/8 text-primary mb-5 inline-flex">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-display)] text-gray-900 leading-tight">
            Loved by{" "}
            <span className="shimmer-text">Thousands</span> of Farmers & Pet
            Owners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group premium-card p-7 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-primary/15 mb-3" />
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>

              {/* Animal badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 bg-primary/5 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                <span>Bought:</span>
                <span className="font-bold">{t.animal}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
