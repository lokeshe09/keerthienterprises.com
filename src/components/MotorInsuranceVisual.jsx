import { Phone, MessageSquare } from "lucide-react";
import motorInsurancePromo from "../assets/motor_insurance_promo.png";
import motorInsurancePromoTelugu from "../assets/motor_insurance_promo_telugu.png";

export default function MotorInsuranceVisual() {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl max-w-sm mx-auto flex flex-col">
      {/* PROMOTIONAL BANNERS */}
      <div className="flex flex-col gap-0">
        <div className="relative">
          <img 
            src={motorInsurancePromo} 
            alt="Motor Insurance Coverage - Drive Safe, Stay Secure" 
            className="w-full h-auto object-contain"
          />
          <div className="absolute top-4 left-4 bg-red-600 text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
            Expert Choice
          </div>
        </div>
        <div className="relative border-t border-slate-100">
          <img 
            src={motorInsurancePromoTelugu} 
            alt="Motor Insurance - Telugu Support" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* LABEL AND BUTTON */}
      <div className="px-6 pb-6 pt-4 bg-white">
        <h3 className="text-center text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 italic">Motor Insurance</h3>
        <a 
          href="https://wa.me/916309832224?text=Hi, I am interested in Motor Insurance Quote."
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-red-600 text-white p-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-500/20 active:scale-95 transition-transform"
        >
          <MessageSquare size={14} className="fill-white" /> Enquiry
        </a>
      </div>
    </div>
  );
}
