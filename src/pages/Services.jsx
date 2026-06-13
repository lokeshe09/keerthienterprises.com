import { CheckCircle2, ShieldIcon, Activity, Car, ArrowRight, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // eslint-disable-line no-unused-vars
import useSEO from "../hooks/useSEO";
import MotorInsuranceVisual from "../components/MotorInsuranceVisual";
import HealthInsuranceVisual from "../components/HealthInsuranceVisual";
import LifeInsuranceVisual from "../components/LifeInsuranceVisual";
import NonMotorInsuranceVisual from "../components/NonMotorInsuranceVisual";
import logo from "../assets/logo.png";
import lifePromo from "../assets/life_insurance_promo.png";
import healthPromo from "../assets/health_insurance_promo.png";
import motorPromo from "../assets/motor_insurance_promo.png";
import motorPromoTelugu from "../assets/motor_insurance_promo_telugu.png";

function ServiceCarousel({ images, title, icon }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="h-64 relative overflow-hidden bg-slate-100 group/carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${title} - slide ${index + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

      <div className="absolute top-6 right-6 w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 z-10">
        {icon}
      </div>

      <div className="absolute bottom-6 left-6">
        <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">{title}</h2>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 right-6 flex gap-2">
          <button 
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/40 active:scale-90 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); next(); }}
            className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/40 active:scale-90 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 px-6">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)}
            className={`h-0.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-red-500" : "w-2 bg-white/30"}`} 
          />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  useSEO({
    title: "Insurance Services | Life, Health, Motor & Non-Motor Insurance India",
    description: "Life Insurance, Health Insurance, Motor Insurance & Non-Motor (Commercial, Property, Fire, Marine) tailored for you. Best rates from top insurers.",
    canonical: "/services",
  });

  const services = [
    {
      id: "life-insurance",
      title: "Life Insurance",
      images: [
        lifePromo,
        "https://images.unsplash.com/photo-1600880210819-3506c74c2fa9?q=80&w=2640&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2670&auto=format&fit=crop"
      ],
      desc: "Secure your family's future with term, whole life & investment plans.",
      points: ["Term Life Insurance", "ULIP Investment Plans", "Child Education Plans", "Retirement Planning"],
      insurers: ["LIC", "ICICI Prudential", "HDFC Life"],
      icon: <ShieldIcon className="text-white" />
    },
    {
      id: "health-insurance",
      title: "Health Insurance",
      images: [
        healthPromo,
        "https://images.unsplash.com/photo-1505751172107-5739a00723b5?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=2670&auto=format&fit=crop"
      ],
      desc: "Complete healthcare coverage with cashless hospitalization across india.",
      points: ["Family Floater Plans", "Critical Illness Cover", "Senior Citizen Plans", "Cashless Benefit"],
      insurers: ["Star Health", "TATA AIG", "Care Health"],
      icon: <Activity className="text-white" />
    },
    {
      id: "motor-insurance",
      title: "Motor Insurance",
      images: [
        motorPromo,
        motorPromoTelugu,
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop"
      ],
      desc: "Reliable coverage for car and bike with quick zero-depreciation claims.",
      points: ["Comprehensive Car Cover", "Two Wheeler Insurance", "Zero Depreciation", "24/7 Roadside Aid"],
      insurers: ["Royal Sundaram", "ICICI Lombard", "Bajaj Allianz"],
      icon: <Car className="text-white" />
    },
    {
      id: "non-motor-insurance",
      title: "Non-Motor Insurance",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
      ],
      desc: "Comprehensive general protection for commercial assets, fire, cargo transit, liability burdens, and physical storefront policies.",
      points: ["Property & Allied Fire Cover", "Marine and Transit Security", "Commercial Liability Shields", "Shopkeeper Multi-Peril Solutions"],
      insurers: ["TATA AIG", "ICICI Lombard", "Bajaj Allianz"],
      icon: <Building2 className="text-white" />
    }
  ];

  return (
    <div id="services" className="flex flex-col min-h-full bg-slate-50">
      <div className="bg-slate-900 p-8 text-center text-white shrink-0">
        <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-lg mx-auto mb-4">
          <img src={logo} alt="Keerthi Enterprises" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-xl font-black uppercase tracking-[0.2em] mb-2">Our Offerings</h1>
        <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest leading-loose max-w-[250px] mx-auto">
          Comprehensive Coverage for your life, health and assets
        </p>
      </div>

      <div className="px-4 py-8 space-y-12">
        {services.map((service) => {
          if (service.id === "life-insurance") {
            return (
              <div key={service.id} id={service.id} className="pt-4">
                <LifeInsuranceVisual />
              </div>
            );
          }

          if (service.id === "motor-insurance") {
            return (
              <div key={service.id} id={service.id} className="pt-4">
                <MotorInsuranceVisual />
              </div>
            );
          }

          if (service.id === "health-insurance") {
            return (
              <div key={service.id} id={service.id} className="pt-4">
                <HealthInsuranceVisual />
              </div>
            );
          }

          if (service.id === "non-motor-insurance") {
            return (
              <div key={service.id} id={service.id} className="pt-4">
                <NonMotorInsuranceVisual />
              </div>
            );
          }
          
          return (
            <article 
              key={service.id} 
              id={service.id}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200 border border-slate-100 flex flex-col"
            >
              <ServiceCarousel images={service.images} title={service.title} icon={service.icon} />

              <div className="p-8">
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.insurers.map(ins => (
                    <span key={ins} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      {ins}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-transform active:scale-95"
                >
                  Get Quote <ArrowRight size={14} />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <section className="px-4 pb-12">
        <div className="bg-red-600 rounded-[2.5rem] p-8 text-center text-white">
          <h3 className="text-sm font-black uppercase tracking-widest mb-2">Need Help?</h3>
          <p className="text-xs font-medium text-white/80 mb-6 italic">Free consultation from our experts 24/7</p>
          <a href="tel:+916309832224" className="inline-block bg-white text-red-600 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest active:scale-95 transition-transform">
            Call +91 63098 32224
          </a>
        </div>
      </section>
    </div>
  );
}
