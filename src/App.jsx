import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";

const Section = ({ title, children }) => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{title}</h2>
      <div className="text-slate-700">{children}</div>
    </div>
  </section>
);

function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <Section title="Why farmers love Smart Krishi">
        Accurate crop diagnosis, timely weather alerts, and live mandi prices — all in one place.
      </Section>
    </>
  );
}

function Features() {
  return (
    <>
      <Section title="AI Crop Disease Detection">
        Upload a photo, get predicted disease with solution, pesticide and cost estimate.
      </Section>
      <Section title="Weather Alerts">
        3-hour updates, irrigation timing, extreme weather warnings.
      </Section>
      <Section title="Mandi Prices">
        Live rates, 7-day graph, recommended mandi to sell.
      </Section>
      <Section title="Fertilizer Guide">
        Based on crop + soil; micro and macro nutrient suggestions with low-cost alternatives.
      </Section>
    </>
  );
}

function HowItWorks() {
  const steps = [
    "Crop Selection",
    "AI Data Analysis",
    "Personalized Advice",
    "Photo Upload (Optional)",
    "Auto Alerts",
  ];
  return (
    <Section title="How It Works">
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((s, i) => (
          <li key={s} className="rounded-xl border p-4 bg-white shadow-sm">
            <div className="text-xs text-slate-500">Step {i + 1}</div>
            <div className="font-semibold text-slate-900 mt-1">{s}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Demo() {
  const mockups = ["Home", "AI disease detector", "Weather", "Mandi prices", "Fertilizer guide", "Government schemes"];
  return (
    <Section title="App Demo">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockups.map((m) => (
          <div key={m} className="rounded-2xl border shadow-sm p-4">
            <div className="aspect-[9/19] w-full bg-slate-100 rounded-xl" />
            <div className="mt-3 font-medium">{m}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section title="Pricing">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6">
          <div className="text-sm font-semibold">Free</div>
          <div className="text-3xl font-extrabold mt-2">₹0</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Weather alerts</li>
            <li>Scheme info</li>
            <li>Mandi prices</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6 bg-[#E6F6EC]">
          <div className="text-sm font-semibold">Pro</div>
          <div className="text-3xl font-extrabold mt-2">₹49/month</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>AI disease detection</li>
            <li>Advanced fertilizer AI</li>
            <li>Offline info caching</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    { name: "Ramesh Kumar", region: "Punjab", photo: "https://randomuser.me/api/portraits/men/11.jpg" },
    { name: "Sita Devi", region: "Bihar", photo: "https://randomuser.me/api/portraits/women/21.jpg" },
    { name: "Mahesh Patil", region: "Maharashtra", photo: "https://randomuser.me/api/portraits/men/31.jpg" },
  ];
  return (
    <Section title="Testimonials">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.name} className="rounded-2xl border p-6 bg-white shadow-sm">
            <img src={i.photo} alt={i.name} className="h-16 w-16 rounded-full object-cover" />
            <div className="mt-3 font-bold">{i.name}</div>
            <div className="text-xs text-slate-500">{i.region}</div>
            <p className="text-sm mt-3">“Great app for timely mandi rates and weather alerts.”</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section title="Contact">
      <form className="grid gap-4 max-w-xl">
        <input placeholder="Name" className="rounded-xl border px-4 py-3" />
        <input placeholder="Phone" className="rounded-xl border px-4 py-3" />
        <input placeholder="Village" className="rounded-xl border px-4 py-3" />
        <textarea placeholder="Message" className="rounded-xl border px-4 py-3 min-h-[120px]" />
        <div className="flex gap-3">
          <button type="button" className="rounded-xl bg-[#1E9E52] text-white px-5 py-3 font-semibold">WhatsApp</button>
          <button className="rounded-xl bg-[#62BBF2] text-slate-900 px-5 py-3 font-semibold">Submit</button>
        </div>
      </form>
    </Section>
  );
}

function Admin() {
  const backend = import.meta.env.VITE_BACKEND_URL || "";
  return (
    <Section title="Admin Dashboard">
      <p className="mb-4">Quick links for data checks.</p>
      <div className="flex flex-wrap gap-3">
        <a href={`${backend}/test`} target="_blank" className="rounded-lg border px-4 py-2">Backend health</a>
        <a href={`${backend}/api/admin/users`} target="_blank" className="rounded-lg border px-4 py-2">Users</a>
        <a href={`${backend}/api/admin/diagnosis`} target="_blank" className="rounded-lg border px-4 py-2">Diagnosis</a>
      </div>
    </Section>
  );
}

function NotFound() {
  return (
    <Section title="Page Not Found">
      The page you are looking for does not exist.
    </Section>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-slate-800">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
