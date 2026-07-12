import { Star, Quote } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            Loved by{" "}
            <span className="text-primary">Thousands</span> of Farmers & Pet
            Owners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gradient-to-b from-surface to-white border border-gray-100 rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
              <div className="mt-3 bg-primary/5 rounded-lg px-3 py-1.5 inline-block">
                <span className="text-xs text-primary font-medium">
                  Bought: {t.animal}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
