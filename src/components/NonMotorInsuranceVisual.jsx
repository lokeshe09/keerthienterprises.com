import { MessageSquare, Store, Box, Scale, ShieldCheck } from "lucide-react";

export default function NonMotorInsuranceVisual() {
  const nonMotorBenefits = [
    { title: "Property & Fire", icon: Store, color: "text-amber-600 bg-amber-50 border border-amber-100" },
    { title: "Marine & Cargo", icon: Box, color: "text-sky-600 bg-sky-50 border border-sky-100" },
    { title: "Liability Cover", icon: Scale, color: "text-purple-600 bg-purple-50 border border-purple-100" },
    { title: "Shop & Business", icon: ShieldCheck, color: "text-rose-600 bg-rose-50 border border-rose-100" }
  ];

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl max-w-sm mx-auto flex flex-col">
      {/* PROMOTIONAL BANNER */}
      <div className="relative h-44 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=640&auto=format&fit=crop" 
          alt="Non-Motor Insurance Protection - Secure your business & assets" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-amber-600 text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
          Business Security
        </div>
      </div>

      {/* QUICK STATS / HIGHLIGHTS */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-slate-50">
        {nonMotorBenefits.map((benefit, i) => {
          const BenefitIcon = benefit.icon;
          return (
            <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 shrink-0 ${benefit.color}`}>
                <BenefitIcon size={18} className="stroke-[2.5]" />
              </div>
              <p className="text-[9px] font-black text-slate-800 uppercase tracking-tight leading-tight">{benefit.title}</p>
            </div>
          );
        })}
      </div>

      {/* CALL TO ACTION */}
      <div className="px-6 pb-6 pt-2 bg-white">
        <h3 className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 italic">Non-Motor Insurance</h3>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 w-full bg-amber-600 text-white p-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <MessageSquare size={14} className="fill-white" /> Get Commercial Quote
        </button>
      </div>
    </div>
  );
}
