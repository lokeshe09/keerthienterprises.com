import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import useSEO from "../hooks/useSEO";
import logo from "../assets/logo.png";

export default function Locations() {
  useSEO({
    title: "Office Locations | Keerthi Enterprises India",
    description: "Visit our headquarters in Hyderabad or connect from anywhere in India. Offices at ECIL & Gajularamaram.",
    canonical: "/locations",
  });

  const locations = [
    {
      name: "Head Office - ECIL",
      address: "H No: 42-553/2, Flat No: 104A, 3rd Floor, Green Hills Colony, Opp: Kapra Municipal Office, Moula-ali, Hyderabad – 500062, Telangana State",
      mapUrl: "https://www.google.com/maps/place/17%C2%B028'13.0%22N+78%C2%B033'58.7%22E",
      embed: "https://maps.google.com/maps?hl=en&q=17.4702873,78.5663147&t=m&z=17&output=embed",
      type: "Primary Headquarters"
    },
    {
      name: "Branch - Gajularamaram",
      address: "H.No. 266, 1st Floor, Gajularamaram Road, Near UMCC Hospital, Hyderabad – 500055",
      mapUrl: "https://www.google.com/maps?q=17.5193611,78.42775",
      embed: "https://www.google.com/maps?q=17.5193611,78.42775&z=17&output=embed",
      type: "Regional Branch"
    }
  ];

  return (
    <div id="locations" className="flex flex-col min-h-full bg-slate-50">
      <div className="bg-red-600 p-8 text-center text-white shrink-0">
        <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-lg mx-auto mb-4">
          <img src={logo} alt="Keerthi Enterprises" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-xl font-black uppercase tracking-[0.2em] mb-2">Our Locations</h1>
        <p className="text-white/70 text-xs font-medium italic">Headquartered in Hyderabad, Serving All India</p>
      </div>

      <div className="px-4 py-6 space-y-8">
        {locations.map((loc, i) => (
          <article key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-soft border border-slate-100">
            <div className="p-6">
              <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-4">
                {loc.type}
              </div>
              <h2 className="text-lg font-black text-slate-800 mb-4">{loc.name}</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <MapPin className="text-red-600 shrink-0" size={18} />
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{loc.address}</p>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-red-600 shrink-0" size={18} />
                  <p className="text-xs text-slate-600 font-medium">Mon - Sat: 10:00 AM - 6:30 PM</p>
                </div>
              </div>

              <a 
                href={loc.mapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-transform active:scale-95 shadow-lg shadow-red-600/20"
              >
                Get Direction <ExternalLink size={14} />
              </a>
            </div>

            <div className="h-48 w-full">
              <iframe
                src={loc.embed}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                title={`${loc.name} Map`}
              ></iframe>
            </div>
          </article>
        ))}
      </div>

      <section className="px-4 pb-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-center">
          <Globe className="mx-auto text-white/20 mb-4" size={40} />
          <h2 className="text-white text-sm font-black uppercase tracking-widest mb-4">Pan India Service</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["Telangana", "Andhra", "Karnataka", "Tamil Nadu", "Maharashtra", "Delhi"].map(s => (
              <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-white/60 text-[9px] font-bold uppercase tracking-tighter">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const Globe = ({ size, className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
