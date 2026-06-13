import { MessageSquare, Users, User, Activity, CreditCard } from "lucide-react";
import healthInsurancePromo from "../assets/health_insurance_promo.png";

export default function HealthInsuranceVisual() {
  const healthBenefits = [
    { title: "Family Floater", icon: Users, color: "text-blue-600 bg-blue-50 border border-blue-100" },
    { title: "Individual Cover", icon: User, color: "text-emerald-600 bg-emerald-50 border border-emerald-100" },
    { title: "Critical Illness", icon: Activity, color: "text-red-600 bg-red-50 border border-red-100" },
    { title: "Cashless Hosp.", icon: CreditCard, color: "text-indigo-600 bg-indigo-50 border border-indigo-100" }
  ];

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl max-w-sm mx-auto flex flex-col">
      {/* PROMOTIONAL BANNER */}
      <div className="relative">
        <img 
          src={healthInsurancePromo} 
          alt="Health Insurance Protection - Secure your family's future" 
          className="w-full h-auto object-contain"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
          Complete Protection
        </div>
      </div>

      {/* QUICK STATS / HIGHLIGHTS */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-slate-50">
        {healthBenefits.map((benefit, i) => {
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
        <h3 className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 italic">Health Insurance</h3>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white p-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
        >
          <MessageSquare size={14} className="fill-white" /> Get Expert Quote
        </button>
      </div>
    </div>
  );
}
