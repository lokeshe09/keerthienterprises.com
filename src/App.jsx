import { BrowserRouter as Router } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen py-0 sm:py-8 flex flex-col items-center">
        <div className="app-viewport overflow-hidden no-scrollbar">
          <main className="flex-grow pb-24 overflow-y-auto no-scrollbar scroll-smooth">
            <Home />
            <Services />
            <About />
            <Locations />
            <Testimonials />
            <Contact />
            <Faq />
          </main>
          <BottomNav />
          <WhatsAppWidget />
        </div>
      </div>
    </Router>
  );
}
