import { Shield, Sparkles, Handshake, Info, Award } from "lucide-react";
import useSEO from "../hooks/useSEO";
import trustedPartners from "../assets/trusted_partners.png";
import logo from "../assets/logo.png";

export default function About() {
  useSEO({
    title: "About Us | Why Choose Keerthi Enterprises India",
    description: "Know why Keerthi Enterprises is India's most trusted insurance broking company with decades of experience. Advisors with 10+ years of experience, 10,000+ happy clients with 100% trust.",
    canonical: "/about",
  });

  const features = [
    { title: "Personalized Service", desc: "Understanding your unique family & business needs.", icon: Shield },
    { title: "Fast Claim Support", desc: "Dedicated assistance throughout the claim settlement.", icon: Sparkles },
    { title: "Strong Partnerships", desc: "Collaborating with LIC, Star Health, ICICI & TATA AIG.", icon: Handshake },
    { title: "Expert Guidance", desc: "Professional advisors with 10+ years of experience navigating complex terms.", icon: Award }
  ];

  return (
    <div id="about" className="flex flex-col min-h-full bg-slate-50">
      <div className="bg-red-600 p-8 text-center text-white shrink-0">
        <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-lg mx-auto mb-4">
          <img src={logo} alt="Keerthi Enterprises" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-xl font-black uppercase tracking-[0.2em] mb-2">Our Story</h1>
        <p className="text-white/70 text-xs font-medium italic">India's 100% Trusted Partner with Decades of Experience</p>
      </div>

      <div className="px-4 py-8 space-y-6">
        {/* MISSION CARD */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-slate-100">
          <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
            <Info size={24} />
          </div>
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-4 italic">Commitment to Excellence</h2>
          <p className="text-sm text-slate-500 font-medium leading-loose">
            With decades of experience, Keerthi Enterprises has been India's trusted insurance broking partner, helping thousands of families and businesses across the nation protect what matters most. We believe in transparency and personalized care.
          </p>
        </section>

        {/* FEATURES GRID */}
        <section className="grid grid-cols-1 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-50">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-1">{f.title}</h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-normal">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* COMPLIANCE CARD */}
        <section className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
          <h2 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
            <Shield className="text-red-500" size={16} /> Verified Credentials
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">GSTIN Registered</span>
              <p className="text-sm font-black tracking-wide text-red-400">36AMZPL3954H1ZC</p>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">MSME Certified</span>
              <p className="text-sm font-black tracking-wide text-red-400">UDYAM-TS-02-0029886</p>
            </div>
          </div>
        </section>

        {/* TRACK RECORD */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-soft text-center">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Recognition & Trust</h3>
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-slate-900 tracking-tighter">10,000+</span>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-1">Happy Clients</span>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-black text-slate-900 tracking-tighter">10+ Years</span>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-1">Experience Experts</span>
                </div>
            </div>
        </section>

        {/* TRUSTED PARTNERS IMAGE */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-soft text-center border border-slate-100">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Our Insurance Partners</h3>
          <div className="relative rounded-3xl overflow-hidden border border-slate-50 shadow-inner">
            <img 
              src={trustedPartners} 
              alt="Keerthi Enterprises Insurance Partners - LIC, Star Health, TATA AIG, ICICI Lombard" 
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
            Working with 20+ Leading Insurance Companies in India
          </p>
        </section>
      </div>

      <section className="px-4 pb-12">
        <a 
          href="tel:+916309832224"
          className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white p-5 rounded-3xl font-black uppercase tracking-widest text-xs transition-transform active:scale-95 shadow-xl shadow-green-500/20"
        >
          Speak with an Expert
        </a>
      </section>
    </div>
  );
}
