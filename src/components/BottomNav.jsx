import { useState } from "react";
import { Home, Briefcase, MapPin, MessageSquare, PhoneCall, HelpCircle } from "lucide-react";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { name: "Home", id: "home", icon: Home },
    { name: "Services", id: "services", icon: Briefcase },
    { name: "Locations", id: "locations", icon: MapPin },
    { name: "Reviews", id: "testimonials", icon: MessageSquare },
    { name: "FAQ", id: "faq", icon: HelpCircle },
    { name: "Contact", id: "contact", icon: PhoneCall },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className={`nav-link ${isActive ? "active" : ""}`}
            type="button"
          >
            <Icon size={20} strokeWidth={isActive ? 3 : 2} />
            <span>{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
}
