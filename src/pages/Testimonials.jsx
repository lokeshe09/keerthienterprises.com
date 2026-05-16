import { Quote, Star, UserCircle2 } from "lucide-react";
import useSEO from "../hooks/useSEO";
import logo from "../assets/logo.png";

export default function Testimonials() {
  useSEO({
    title: "Customer Reviews | Trusted Insurance Agency India",
    description: "Read real stories from 10,000+ happy clients. 100% Trust & 4.9/5 average rating for Keerthi Enterprises.",
    canonical: "/testimonials",
  });

  const testimonials = [
    { name: "RAJESH KUMAR", role: "BUSINESS OWNER", text: "Excellent guidance for group health insurance. Smooth onboarding and fast claims.", service: "GROUP HEALTH" },
    { name: "PRIYA SHARMA", role: "ENGINEER", text: "Responsive team. Helped me choose the perfect family floater plan for my parents.", service: "FAMILY HEALTH" },
    { name: "JOSHUA", role: "ENTREPRENEUR", text: "Professional and reliable. Handled my car insurance claim quickly and efficiently.", service: "CAR INSURANCE" },
    { name: "SUNITHA REDDY", role: "TEACHER", text: "Made senior citizen health insurance simple. Remarkable patience in explaining terms.", service: "SENIOR HEALTH" }
  ];

  return (
    <div id="testimonials" className="flex flex-col min-h-full bg-slate-50">
      <div className="bg-red-600 p-8 text-center text-white shrink-0">
        <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-lg mx-auto mb-4">
          <img src={logo} alt="Keerthi Enterprises" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-xl font-black uppercase tracking-[0.2em] mb-2">Wall of Love</h1>
        <p className="text-white/70 text-xs font-medium italic">100% Trust | 10000+ Verified Users</p>
      </div>

      <div className="px-4 py-8 space-y-6">
        {/* STATS CARD */}
        <section className="bg-slate-900 p-8 rounded-[2.5rem] flex justify-around text-white">
          <div className="text-center">
            <span className="text-2xl font-black text-red-500 block">4.9</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Rating</span>
          </div>
          <div className="w-px bg-white/10"></div>
          <div className="text-center">
            <span className="text-2xl font-black text-red-500 block">1K+</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Client</span>
          </div>
          <div className="w-px bg-white/10"></div>
          <div className="text-center">
            <span className="text-2xl font-black text-red-500 block">98%</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Trust</span>
          </div>
        </section>

        {/* REVIEWS GRID */}
        <section className="space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-slate-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-slate-900 pointer-events-none">
                <Quote size={80} />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={10} className="fill-red-500 text-red-500" />
                ))}
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <UserCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">{t.name}</h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{t.role} • {t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-soft text-center border border-slate-100">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.15em] mb-4">Ready to Join?</h3>
          <p className="text-[11px] text-slate-500 font-medium mb-8">Join the elite club of protected families across India.</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block w-full bg-red-600 text-white p-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-500/20 active:scale-95 transition-transform"
          >
            Start Your Journey
          </button>
        </section>
      </div>

      <div className="pb-12 h-4 w-full"></div>
    </div>
  );
}
