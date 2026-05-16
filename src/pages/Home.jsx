import { Phone, MapPin, Mail, Share2, ShieldCheck, Users, Calendar, Globe, ArrowRight } from "lucide-react";
import useSEO from "../hooks/useSEO";
import trustedPartners from "../assets/trusted_partners.png";
import claimsProcess from "../assets/claims_process.png";
import logo from "../assets/logo.png";

export default function Home() {
  useSEO({
    title: "India's Trusted Insurance Broker | Keerthi Enterprises",
    description:
      "Keerthi Enterprises - India's #1 trusted insurance broking company since 2017. 100% Trust & Expert guidance for Life, Health & Motor Insurance. 10,000+ happy customers.",
    canonical: "/",
  });

  const stats = [
    { label: "Established", value: "2017", icon: Calendar },
    { label: "Team Members", value: "30+", icon: Users },
    { label: "Coverage", value: "Pan India", icon: Globe },
    { label: "Happy Clients", value: "10,000+", icon: Users },
    { label: "Trust Factor", value: "100%", icon: ShieldCheck },
  ];

  const services = [
    { title: "Life Insurance", icon: "🛡️", desc: "Term, Whole Life & ULIPs", link: "/services#life-insurance" },
    { title: "Health Insurance", icon: "🏥", desc: "Family Floater & Cashless", link: "/services#health-insurance" },
    { title: "Motor Insurance", icon: "🚗", desc: "Car & Bike, 24/7 Support", link: "/services#motor-insurance" },
  ];

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="flex flex-col min-h-full">
      {/* PROFILE HEADER CARD */}
      <section className="relative h-[420px] shrink-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-slate-900"></div>
        </div>


        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 px-6 text-center">
          <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-xl mb-6 relative">
            <img src={logo} alt="Keerthi Enterprises" className="w-full h-full object-contain" />
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
              <ShieldCheck size={16} />
            </div>
          </div>

          <h1 className="text-2xl font-black text-white tracking-tight uppercase mb-1">
            Keerthi Enterprises
          </h1>
          <p className="text-white/80 text-xs font-medium tracking-widest uppercase mb-6">
            Insurance Broking Services
          </p>

          <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
            <a href="tel:+916309832224" className="flex flex-col items-center gap-1.5 p-2 bg-red-600 rounded-xl text-white transition-transform active:scale-95">
              <Phone size={18} />
              <span className="text-[10px] font-bold uppercase">Call</span>
            </a>
            <a href="https://maps.google.com/?q=Keerthi+Enterprises+Hyderabad" className="flex flex-col items-center gap-1.5 p-2 bg-red-600 rounded-xl text-white transition-transform active:scale-95">
              <MapPin size={18} />
              <span className="text-[10px] font-bold uppercase">Direction</span>
            </a>
            <a href="mailto:keerthienterpriseshyd1972@gmail.com" className="flex flex-col items-center gap-1.5 p-2 bg-red-600 rounded-xl text-white transition-transform active:scale-95">
              <Mail size={18} />
              <span className="text-[10px] font-bold uppercase">Mail</span>
            </a>
            <button 
              onClick={() => navigator.share?.({ title: 'Keerthi Enterprises', url: window.location.href })}
              className="flex flex-col items-center gap-1.5 p-2 bg-red-600 rounded-xl text-white transition-transform active:scale-95"
            >
              <Share2 size={18} />
              <span className="text-[10px] font-bold uppercase">Share</span>
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS LIST */}
      <section className="px-4 py-6 space-y-4">
        <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-soft">
          <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Address</h4>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              G 15 CROSS ROAD SHOPPING CENTRE, SAYAN ROAD AMROLI SURAT 394107
            </p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-soft">
          <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
            <p className="text-xs text-slate-700 font-medium">keerthienterpriseshyd1972@gmail.com</p>
          </div>
        </div>

        <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-soft">
          <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Contact</h4>
            <p className="text-xs text-slate-700 font-medium">+91 63098 32224</p>
            <p className="text-xs text-slate-700 font-medium">+91 91579 24109</p>
          </div>
        </div>
      </section>

      {/* WHATSAPP ACTION */}
      <section className="px-4 mb-6">
        <a 
          href="https://wa.me/916309832224"
          className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white p-4 rounded-2xl font-bold transition-transform active:scale-95 shadow-lg shadow-green-500/20"
        >
          <Share2 size={24} />
          Share on WhatsApp
        </a>
      </section>

      {/* QUICK STATS - GRID STYLE */}
      <section className="grid grid-cols-2 gap-4 px-4 mb-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-soft flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
                <Icon size={20} />
              </div>
              <span className="text-lg font-black text-slate-800">{stat.value}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          );
        })}
      </section>

      {/* SERVICES CARDS */}
      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4 px-2">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-800">Our Services</h2>
          <button onClick={() => scrollToId("services")} className="text-[10px] font-black text-red-600 flex items-center gap-1 uppercase tracking-wider">
            View All <ArrowRight size={12} />
          </button>
        </div>
        <div className="space-y-4">
          {services.map((service, i) => (
            <article key={i} className="bg-white p-5 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100">
              <div className="text-4xl shrink-0">{service.icon}</div>
              <div className="flex-grow">
                <h3 className="text-sm font-bold text-slate-800 mb-1">{service.title}</h3>
                <p className="text-[11px] text-slate-500 font-medium">{service.desc}</p>
              </div>
              <button onClick={() => scrollToId(service.link.split('#')[1])} className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                <ArrowRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="px-4 mb-8">
        <h2 className="text-sm font-black uppercase tracking-widest text-slate-800 mb-4 px-2">Hassle-Free Process</h2>
        <div className="bg-white p-2 rounded-[2.5rem] shadow-soft border border-slate-100 overflow-hidden">
          <img 
            src={claimsProcess} 
            alt="Keerthi Enterprises Insurance Process - Submission, Verification, Approval, Settlement" 
            className="w-full h-auto object-contain rounded-[2rem]"
          />
        </div>
        <p className="mt-4 px-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed text-center italic">
          Transparent. Quick. Reliable Settlement Assistance.
        </p>
      </section>

      {/* INSURER BRANDS - IMAGE BASED */}
      <section className="bg-slate-50 py-10 px-6 text-center border-y border-slate-100">
        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-6">Our Insurance Partners</h3>
        <div className="max-w-md mx-auto rounded-3xl overflow-hidden border border-white shadow-soft bg-white p-2">
          <img 
            src={trustedPartners} 
            alt="Trusted Partners - LIC, Star Health, TATA AIG, ICICI Lombard" 
            className="w-full h-auto object-contain transition-transform hover:scale-[1.02] duration-500"
          />
        </div>
        <p className="mt-6 text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed max-w-[250px] mx-auto">
          We collaborate with top-tier insurance providers to bring you the best deals.
        </p>
      </section>
    </div>
  );
}
