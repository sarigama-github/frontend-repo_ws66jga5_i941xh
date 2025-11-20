export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-white">Smart Krishi</h4>
          <p className="text-sm mt-3 text-white/70">AI-powered assistant for Indian farmers.</p>
        </div>
        <div>
          <h5 className="font-semibold text-white">Support</h5>
          <p className="text-sm mt-3">support@smartkrishi.in</p>
          <a href="#" className="inline-block mt-3 text-[#62BBF2]">WhatsApp</a>
        </div>
        <div>
          <h5 className="font-semibold text-white">Legal</h5>
          <ul className="text-sm mt-3 space-y-2 text-white/70">
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-white/60">© {new Date().getFullYear()} Smart Krishi</div>
      </div>
    </footer>
  );
}
