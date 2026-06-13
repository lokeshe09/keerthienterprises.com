import { useState } from "react";
import { Phone, MapPin, Mail, Share2, ShieldCheck, Users, Calendar, Globe, ArrowRight, Handshake, HeartHandshake, Activity, Car, ChevronDown, HelpCircle, Building2 } from "lucide-react";
import useSEO from "../hooks/useSEO";
import trustedPartners from "../assets/trusted_partners.png";
import claimsProcess from "../assets/claims_process.png";
import logo from "../assets/logo.png";

export default function Home() {
  useSEO({
    title: "India's Trusted Insurance Broker | Keerthi Enterprises",
    description:
      "Keerthi Enterprises - India's #1 trusted insurance broking company with decades of experience. 100% Trust & Expert guidance for Life, Health, Motor & Non-Motor Insurance. 10,000+ happy customers.",
    canonical: "/",
  });

  const stats = [
    { label: "Of Experiences", value: "Decades", icon: Calendar },
    { label: "Experience Experts", value: "10+ Years", icon: Users },
    { label: "Coverage", value: "Pan India", icon: Globe },
    { label: "Happy Customers", value: "Ten Thousands of", icon: Users },
    { label: "Claim Assistance", value: "End-To-End", icon: ShieldCheck },
    { label: "Trusted Partners", value: "Top Insurers", icon: Handshake },
  ];

  const services = [
    { title: "Life Insurance", icon: HeartHandshake, color: "text-indigo-600 bg-indigo-50 border border-indigo-100", desc: "Term, Whole Life & ULIPs", link: "/services#life-insurance" },
    { title: "Health Insurance", icon: Activity, color: "text-emerald-600 bg-emerald-50 border border-emerald-100", desc: "Family Floater & Cashless", link: "/services#health-insurance" },
    { title: "Motor Insurance", icon: Car, color: "text-red-500 bg-red-50 border border-red-100", desc: "Car & Bike, 24/7 Support", link: "/services#motor-insurance" },
    { title: "Non-Motor Insurance", icon: Building2, color: "text-amber-600 bg-amber-50 border border-amber-100", desc: "Property, Fire & Cargo", link: "/services#non-motor-insurance" },
  ];

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What types of insurance products do you offer?",
      a: "We offer tailored Life Insurance (Term & Whole Life), Health Insurance (Individual & Family Floater plans), Motor Insurance (Car, Bike, and Commercial vehicles), and Non-Motor Insurance (Property, Fire, Marine, Liability, and Shopkeeper cover) from top national insurers."
    },
    {
      q: "What does Non-Motor insurance cover?",
      a: "Non-Motor insurance protects commercial assets and businesses. It covers Fire & Allied Perils, Marine & Cargo transit, Public/Product Liability, Workmen's Compensation, Shopkeeper's Multi-peril packages, and Office/Factory properties."
    },
    {
      q: "How does your claim assistance work?",
      a: "Our claims service is completely End-to-End. Simply contact our support on Call or WhatsApp. We handle the paperwork, coordinate directly with insurers, and expedite your settlement."
    },
    {
      q: "Are cashless health options supported?",
      a: "Yes! Our partner policies offer cashless treatment features across 5,000+ top-rated network hospitals pan-India, giving you stress-free medical care."
    },
    {
      q: "Are there any consultancy fees for quotes?",
      a: "No, our comparison advisory, expert consulting, and claim support services are completely transparent and free for all our valued customers."
    },
    {
      q: "How can I renew my existing policies through you?",
      a: "Renewing is simple! Just send us a photo or PDF of your existing policy on WhatsApp. We will compare options across top insurers to guarantee you get the best deal for your renewal."
    },
    {
      q: "What documents are required to buy a new policy?",
      a: "For general health/life protection, we need standard identity/address proof (like Aadhar or PAN) and medical history. For motor policies, the vehicle's Registration Certificate (RC) and prior policy details are sufficient."
    },
    {
      q: "Can I customize policy coverage and add riders?",
      a: "Absolutely! We help you customize coverage with top riders including Critical Illness, Zero-Depreciation (for vehicles), Personal Accident cover, and hospital daily cash options based on your budget."
    },
    {
      q: "Where is Keerthi Enterprises based?",
      a: "Our headquarters is based in ECIL, Hyderabad, serving all of Telangana and India with reliable local presence and dedicated physical/online customer service."
    }
  ];

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
          <div className="w-32 h-32 bg-white p-3 rounded-2xl shadow-xl mb-6 relative">
            <img src={logo} alt="Keerthi Enterprises" className="w-full h-full object-contain" />
            <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
              <ShieldCheck size={18} />
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
            <a 
              href="https://www.google.com/maps/place/17%C2%B028'13.0%22N+78%C2%B033'58.7%22E" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center gap-1.5 p-2 bg-red-600 rounded-xl text-white transition-transform active:scale-95"
            >
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

      {/* QUICK STATS - GRID STYLE */}
      <section className="grid grid-cols-2 gap-4 px-4 mb-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-sky-50/80 border border-sky-100 p-4 rounded-2xl shadow-soft flex flex-col items-center text-center transition-all hover:scale-[1.02]">
              <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-sky-600 mb-2">
                <Icon size={20} />
              </div>
              <span className="text-lg font-black text-sky-950">{stat.value}</span>
              <span className="text-[10px] font-bold text-sky-700/80 uppercase tracking-wider">{stat.label}</span>
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
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article key={i} className="bg-white p-5 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${service.color}`}>
                  <Icon size={22} className="stroke-[2.5]" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-bold text-slate-800 mb-1">{service.title}</h3>
                  <p className="text-[11px] text-slate-500 font-medium">{service.desc}</p>
                </div>
                <button onClick={() => scrollToId(service.link.split('#')[1])} className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
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

      {/* FAQ SECTION */}
      <section id="faq" className="px-4 py-8 mb-6">
        <div className="flex items-center gap-2 mb-4 px-2">
          <HelpCircle size={18} className="text-sky-600" />
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-800">FAQ's</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-sky-300 shadow-sm" : "border-slate-100 shadow-soft"
                }`}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-xs text-slate-800 hover:text-sky-700 transition-colors"
                >
                  <span className="pr-4 leading-normal">{faq.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-600" : ""}`} 
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[150px] border-t border-slate-50 opacity-100 p-4" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
