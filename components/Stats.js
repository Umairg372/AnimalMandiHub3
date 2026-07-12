const stats = [
  { value: "50,000+", label: "Animals Listed", emoji: "🐾" },
  { value: "25,000+", label: "Happy Sellers", emoji: "😊" },
  { value: "100,000+", label: "Successful Deals", emoji: "🤝" },
  { value: "500+", label: "Cities Covered", emoji: "🏙️" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-4xl block mb-2">{stat.emoji}</span>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="mt-2 text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
