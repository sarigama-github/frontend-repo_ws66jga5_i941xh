import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/demo", label: "App Demo" },
    { to: "/pricing", label: "Pricing" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
    { to: "/admin", label: "Admin" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-[#1E9E52]" />
          <span className="font-extrabold text-slate-900">Smart Krishi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-[#1E9E52] transition">
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-3 grid grid-cols-2 gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="py-2" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
