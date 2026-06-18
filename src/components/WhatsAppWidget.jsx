import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const phoneNumber = "916309832224"; // Keerthi Enterprises WhatsApp number
  const defaultMessage = "Hi! I'm interested in learning more about your insurance services. Please help me with:";

  useEffect(() => {
    let timeoutId;
    
    // Cycle starts: initially hidden for 7 seconds, then shows, stays for 4.5s, then hides, then waits 14s before starting over.
    const startCycle = () => {
      timeoutId = setTimeout(() => {
        setShowPopup(true);
        
        timeoutId = setTimeout(() => {
          setShowPopup(false);
          
          timeoutId = setTimeout(() => {
            startCycle();
          }, 14000); // Silent period
        }, 4500); // Visual display duration
      }, 7000); // Initial delay
    };

    startCycle();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleStartChat = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating Pop Message Bubble "How can I help you?" - with beautiful entry/exit animations */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-[164px] right-6 z-50 transition-all duration-500 ease-out transform ${
          showPopup && !isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        } text-left max-w-[270px] animate-bounce-slow`}
      >
        <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-2xl flex items-center gap-3 relative">
          {/* Left: Mini Avatar with active green indicator */}
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-[#128C7E] flex items-center justify-center text-white text-[12px] font-black italic shadow-inner">
              KE
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 block h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-white">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            </span>
          </div>

          {/* Right: Notification content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="text-[10px] font-black text-[#128C7E] uppercase tracking-wider">Keerthi Support</span>
              <span className="text-[8px] font-bold text-slate-400">Just now</span>
            </div>
            <p className="text-[11px] text-slate-650 font-bold leading-normal mt-1">
              Hi there! 👋 How can we help you with insurance today?
            </p>
          </div>

          {/* Speech bubble pointer pointing down to the main trigger */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45" />
        </div>
      </button>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Open WhatsApp Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {showPopup && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[9px] font-black text-white shadow-lg border-2 border-white animate-pulse">
                1
              </span>
            )}
          </div>
        )}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 z-50 w-[calc(100vw-3rem)] max-w-xs rounded-[2rem] shadow-2xl overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-[#075E54] p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
              <span className="text-[#075E54] font-black text-xl italic tracking-tighter">KE</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-white font-black text-sm uppercase tracking-widest">Keerthi</h3>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-tighter">Verified Business</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#E5DDD5] p-6 max-h-[60vh] overflow-y-auto" style={{ backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEXd3d3d3d3d3d3d3d3d3d3d3d0rJLgXAAAABnRSTlMFBQUFBQWHnJo+AAAAQklEQVQ4y2NgGAWjYBSMglEwCkbBKBgFo2AUDHVgABRgGwPBAGDANgaCAYCAbQwEAwAB2xgIBgACbGMgGAAIwAAA/U0LRBuobDoAAAAASUVORK5CYII=')" }}>
            <div className="bg-white rounded-[1.5rem] p-5 shadow-soft max-w-[90%] border border-slate-100">
              <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2 italic">Welcome</p>
              <p className="text-slate-600 text-xs font-medium leading-relaxed">
                Hi! Need an insurance quote or claim support? Our experts are online to help you.
              </p>
              <p className="text-slate-300 text-[10px] font-bold mt-3 text-right">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          {/* Start Chat Button */}
          <div className="bg-white p-6 border-t border-slate-100">
            <button
              onClick={handleStartChat}
              className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-black uppercase tracking-[0.2em] text-[11px] py-4 rounded-2xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-green-500/20"
            >
              Start WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Animation CSS - Defined globally for this widget */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
