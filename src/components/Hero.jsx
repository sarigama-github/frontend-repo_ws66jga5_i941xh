import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative max-w-6xl mx-auto px-6 py-28 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Smart Krishi – India’s AI Farming Assistant
        </motion.h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/90">
          Helping farmers with AI crop diagnosis, mandi prices & weather alerts.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#" className="inline-flex items-center rounded-xl bg-[#1E9E52] px-5 py-3 font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition">Download App</a>
          <a href="#" className="inline-flex items-center rounded-xl bg-[#62BBF2] px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition">Try WhatsApp Bot</a>
        </div>
        <div className="mt-10">
          <img src="https://images.unsplash.com/photo-1643474004250-05d73e1473e0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYXJtZXIlMjB1c2luZyUyMHNtYXJ0cGhvbmV8ZW58MHwwfHx8MTc2MzYzNDk3NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Farmer using smartphone" className="w-full max-w-md rounded-2xl shadow-2xl border border-white/10" />
        </div>
      </div>
    </section>
  );
}
