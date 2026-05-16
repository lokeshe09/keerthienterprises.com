import { MessageSquare } from "lucide-react";
import lifeInsurancePromo from "../assets/life_insurance_promo.png";

export default function LifeInsuranceVisual() {
  const coverageOptions = [
    { title: "Term Insurance", desc: "Pure protection cover" },
    { title: "Whole Life", desc: "Lifetime coverage" },
    { title: "ULIP", desc: "Investment + Insurance" },
    { title: "Retirement", desc: "Pension planning" }
  ];

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl max-w-sm mx-auto flex flex-col">
      {/* PROMOTIONAL BANNER */}
      <div className="relative">
        <img 
          src={lifeInsurancePromo} 
          alt="Life Insurance - Secure Your Family's Future" 
          className="w-full h-auto object-contain"
        />
        <div className="absolute top-4 left-4 bg-indigo-900 text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
          Secure Tomorrow
        </div>
      </div>

      {/* COVERAGE HIGHLIGHTS */}
      <div className="grid grid-cols-2 gap-3 p-6 bg-slate-50">
        {coverageOptions.map((option, i) => (
          <div key={i} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black text-indigo-900 uppercase tracking-tight mb-1">{option.title}</p>
            <p className="text-[8px] text-slate-500 font-medium">{option.desc}</p>
          </div>
        ))}
      </div>

      {/* CALL TO ACTION */}
      <div className="px-6 pb-6 pt-2 bg-white">
        <h3 className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 italic">Life Insurance</h3>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 w-full bg-indigo-900 text-white p-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform"
        >
          <MessageSquare size={14} className="fill-white" /> Consult Expert
        </button>
      </div>
    </div>
  );
}
