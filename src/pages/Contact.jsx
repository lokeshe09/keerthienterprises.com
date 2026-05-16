import { useState } from "react";
import { Send, Phone, MessageSquare, Mail, MapPin, User, FileText, ChevronDown } from "lucide-react";
import useSEO from "../hooks/useSEO";
import logo from "../assets/logo.png";

export default function Contact() {
  useSEO({
    title: "Contact Us | Get Insurance Quote | Keerthi Enterprises",
    description: "Connect with India's trusted insurance broker. Call +91 63098 32224 or submit your enquiry online for free quotes.",
    canonical: "/contact",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const toEmail = "keerthienterpriseshyd1972@gmail.com";
    const subject = `Insurance Quote Request - ${formData.service || "General Enquiry"} | ${formData.name}`;
    const body = `Customer: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\n\n${formData.message}`;
    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className="flex flex-col min-h-full bg-slate-50">
      <div className="bg-red-600 p-8 text-center text-white shrink-0">
        <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-lg mx-auto mb-4">
          <img src={logo} alt="Keerthi Enterprises" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-xl font-black uppercase tracking-[0.2em] mb-2">Hire Us</h1>
        <p className="text-white/70 text-xs font-medium italic">Get a Free Professional Quote Today</p>
      </div>

      <div className="px-4 py-8 space-y-8">
        {/* CONTACT FORM CARD */}
        <section className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
              <MessageSquare size={20} />
            </div>
            <h2 className="text-sm font-black uppercase tracking-[0.1em] text-slate-800 italic">Enquiry Form</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-red-500 placeholder:text-slate-300 transition-all"
                  placeholder="EX: JOHN SMITH"
                />
                <User size={16} className="absolute right-4 top-4 text-slate-300" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-50 border-none rounded-2xl p-4 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-red-500 placeholder:text-slate-300 transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Insurance Type</label>
              <div className="relative">
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-none rounded-2xl p-4 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-red-500 appearance-none transition-all"
                >
                  <option value="">SELECT SERVICE</option>
                  <option value="LIFE">LIFE INSURANCE</option>
                  <option value="HEALTH">HEALTH INSURANCE</option>
                  <option value="MOTOR">MOTOR INSURANCE</option>
                  <option value="OTHER">GENERAL CONSULTATION</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-4 text-slate-300 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-slate-50 border-none rounded-2xl p-4 text-xs font-bold text-slate-700 focus:ring-2 focus:ring-red-500 placeholder:text-slate-300 transition-all resize-none"
                placeholder="YOUR REQUIREMENTS..."
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white p-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-transform active:scale-95 shadow-lg"
            >
              Send Request <Send size={14} />
            </button>
          </form>
        </section>

        {/* QUICK CONTACT CARDS */}
        <section className="grid grid-cols-1 gap-4">
          <a href="tel:+916309832224" className="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-50">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-1">Phone Helpline</h3>
              <p className="text-xs text-slate-500 font-bold tracking-tight">+91 63098 32224</p>
            </div>
          </a>

          <a href="mailto:keerthienterpriseshyd1972@gmail.com" className="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-50">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-1">Direct Email</h3>
              <p className="text-[10px] text-slate-500 font-bold tracking-tighter">KEERTHIENTERPRISESHYD1972@GMAIL.COM</p>
            </div>
          </a>
        </section>
      </div>

      <section className="px-4 pb-12">
        <div className="bg-slate-100 rounded-[2.5rem] p-8 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic">Official Support</p>
          <p className="text-xs text-slate-600 font-bold">MON - SAT | 09:00 AM - 06:00 PM</p>
        </div>
      </section>
    </div>
  );
}
