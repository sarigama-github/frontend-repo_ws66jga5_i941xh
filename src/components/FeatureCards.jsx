export default function FeatureCards() {
  const cards = [
    { title: "AI Disease Detection", desc: "Upload leaf photo and get instant diagnosis.", color: "bg-[#F5F0E6]" },
    { title: "Weather Alerts", desc: "3-hour forecasts & irrigation tips.", color: "bg-[#E8F7FF]" },
    { title: "Mandi Prices", desc: "Live market rates & best mandi to sell.", color: "bg-[#E6F6EC]" },
    { title: "Fertilizer Guide", desc: "Crop + soil based nutrient plan.", color: "bg-[#FFF7E8]" },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className={`rounded-xl p-5 shadow-sm border ${c.color}`}>
              <h3 className="font-bold text-slate-900">{c.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
