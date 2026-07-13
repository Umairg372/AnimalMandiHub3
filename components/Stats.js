const stats = [
  { value: "50,000+", label: "Animals Listed", icon: "🐾", gradient: "from-emerald-400 to-emerald-500" },
  { value: "25,000+", label: "Happy Sellers", icon: "😊", gradient: "from-amber-400 to-amber-500" },
  { value: "100,000+", label: "Successful Deals", icon: "🤝", gradient: "from-blue-400 to-blue-500" },
  { value: "500+", label: "Cities Covered", icon: "🏙️", gradient: "from-violet-400 to-violet-500" },
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Premium dark background */}
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute inset-0 dots-pattern opacity-10" />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-[20%] w-64 h-64 bg-white/5 rounded-full blur-[60px]" />
      <div className="absolute bottom-0 right-[15%] w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white font-[family-name:var(--font-display)]">
            Trusted by Thousands
          </h2>
          <p className="mt-3 text-white/50 text-lg">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center glass-card bg-white/5 border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="mt-2 text-white/50 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
