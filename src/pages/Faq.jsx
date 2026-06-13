import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function Faq() {
  useSEO({
    title: "FAQ | Frequently Asked Questions | Keerthi Enterprises",
    description: "Read frequently asked questions about Life, Health, Motor, and Non-Motor Insurance, customized quotes, claims guidance, and renewal processes with Keerthi Enterprises.",
    canonical: "/#faq",
  });

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
    <div id="faq" className="flex flex-col min-h-full bg-slate-50">
      <div className="bg-sky-700 p-8 text-center text-white shrink-0">
        <h1 className="text-xl font-black uppercase tracking-[0.2em] mb-2 font-sans">FAQ's</h1>
        <p className="text-white/70 text-xs font-medium italic">Frequently Asked Questions & Support</p>
      </div>

      <section className="px-4 py-8 mb-6 space-y-3">
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
                id={`faq-btn-${idx}`}
              >
                <span className="pr-4 leading-normal font-sans">{faq.q}</span>
                <ChevronDown 
                  size={16} 
                  className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-600" : ""}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[180px] border-t border-slate-50 opacity-100 p-4" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed font-sans">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
