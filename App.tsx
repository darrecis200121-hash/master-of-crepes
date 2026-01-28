import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Truck,
  Heart,
  Navigation,
  ShoppingBag,
  Clock,
  Mail,
  ArrowRight,
  ChevronDown,
  Instagram,
  Facebook
} from 'lucide-react';
import { MENU_ITEMS, CURRENT_LOCATIONS } from './constants';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`relative flex items-center justify-center rounded-full bg-white overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-110 hover:rotate-[360deg] ${className}`}>
    <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15 L85 75 Q50 88 15 75 Z" fill="#DAA520" />
      <path d="M50 15 L68 75 Q50 82 32 75 Z" fill="#8B4513" fillOpacity="0.15" />
      <text x="50" y="94" textAnchor="middle" style={{ fontSize: '11px', fontWeight: '900', fontFamily: "'Playfair Display', serif", fill: '#8B4513', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
        Crepe Masters
      </text>
    </svg>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'menu' | 'location' | 'about' | 'contact'>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToTab = (tab: 'home' | 'menu' | 'location' | 'about' | 'contact') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#DAA520] selection:text-white">
      {/* Premium Website Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#8B4513] py-2 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigateToTab('home')}>
            <Logo className={`${isScrolled ? 'w-12 h-12' : 'w-16 h-16'} border-4 border-[#DAA520] transition-all duration-500`} />
            <div className="flex flex-col">
              <span className={`text-xl md:text-3xl font-black font-serif leading-none tracking-tight transition-colors text-white`}>CREPE MASTERS</span>
              <span className="text-[9px] md:text-[11px] font-bold text-[#DAA520] uppercase tracking-[0.3em]">Official Website</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.25em]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'menu', label: 'The Menu' },
              { id: 'location', label: 'Truck Tracker' },
              { id: 'about', label: 'Our Story' },
              { id: 'contact', label: 'Catering' }
            ].map((nav) => (
              <button 
                key={nav.id}
                onClick={() => navigateToTab(nav.id as any)} 
                className={`relative py-1 transition-all duration-300 text-white hover:text-[#DAA520] ${activeTab === nav.id ? 'text-[#DAA520]' : ''}`}
              >
                {nav.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[3px] bg-[#DAA520] rounded-full transition-transform duration-500 origin-left ${activeTab === nav.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigateToTab('menu')}
              className="md:flex items-center gap-3 bg-[#DAA520] hover:bg-white text-[#8B4513] px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-xl active:scale-95 border-2 border-[#DAA520] group"
            >
              <ShoppingBag size={18} className="text-[#8B4513] group-hover:text-[#DAA520] transition-colors" />
              <span>Order Online</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Website View Container */}
      <main className="flex-grow">
        
        {/* LANDING PAGE (HOME) VIEW */}
        {activeTab === 'home' && (
          <div className="animate-site-entry">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#2D1B1B]">
              <div className="absolute inset-0 bg-[#2D1B1B]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern-7.png')] opacity-20"></div>
                <div className="absolute inset-0 website-hero-gradient"></div>
              </div>
              <div className="relative z-10 text-center px-4 max-w-6xl">
                <div className="mb-8 inline-block p-5 bg-white/5 backdrop-blur-2xl rounded-full border border-white/20 shadow-3xl">
                  <Logo className="w-32 h-32 md:w-52 md:h-52 border-8 border-[#DAA520]" />
                </div>
                <h1 className="text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-2xl select-none">
                  CREPE <span className="text-[#DAA520]">MASTERS</span>
                </h1>
                <div className="h-1.5 w-40 bg-[#DAA520] mx-auto mb-8 rounded-full"></div>
                <p className="text-2xl md:text-5xl font-serif italic text-white/95 mb-12 drop-shadow-lg max-w-4xl mx-auto leading-tight">
                  "Your craving, our artisanal crepe."
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                    onClick={() => navigateToTab('menu')}
                    className="w-full sm:w-auto px-12 py-6 bg-[#DAA520] text-[#8B4513] text-sm font-black uppercase tracking-[0.4em] rounded-full hover:bg-white hover:scale-110 transition-all shadow-3xl"
                  >
                    Discover the Menu
                  </button>
                  <button 
                    onClick={() => navigateToTab('location')}
                    className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-white text-white text-sm font-black uppercase tracking-[0.4em] rounded-full hover:bg-white hover:text-[#8B4513] transition-all"
                  >
                    Locate the Truck
                  </button>
                </div>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }}>
                <ChevronDown size={48} className="text-white" />
              </div>
            </section>

            {/* Featured Menu Snapshot */}
            <section className="py-32 px-6 bg-[#F5F5DC]">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24">
                  <span className="text-[#DAA520] font-black uppercase tracking-[0.4em] text-xs mb-4">Curated Flavors</span>
                  <h2 className="text-5xl md:text-8xl font-black text-[#8B4513] uppercase tracking-tighter mb-4">Featured Selection</h2>
                  <div className="h-1.5 w-32 bg-[#DAA520] mb-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[MENU_ITEMS[0], MENU_ITEMS[1], MENU_ITEMS[3]].map((item) => (
                    <div key={item.id} className="bg-white rounded-[3rem] p-12 shadow-2xl transition-all hover:-translate-y-4 border-t-[12px] border-[#DAA520] flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-100 text-red-700">{item.category}</span>
                        <span className="text-3xl font-black text-[#DAA520]">${item.price.toFixed(2)}</span>
                      </div>
                      <h3 className="text-3xl font-black text-[#8B4513] mb-6 uppercase tracking-tighter">{item.name}</h3>
                      <p className="text-lg text-[#8B4513]/60 mb-10 leading-relaxed flex-grow font-medium italic">"{item.description}"</p>
                      <button onClick={() => navigateToTab('menu')} className="w-full py-5 bg-[#F5F5DC] text-[#8B4513] rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#8B4513] hover:text-white transition-all">View Full Menu</button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Trust Banner */}
            <section className="py-24 bg-[#8B4513] text-white">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                  { icon: <Clock size={40} />, title: "48H Infusion", desc: "Our secret ginger-clove batter is infused for two full days." },
                  { icon: <Truck size={40} />, title: "Live Tracking", desc: "Always know exactly where Chef Karla's truck is parked." },
                  { icon: <Heart size={40} />, title: "Eco Cones", desc: "Sustainability is part of our artisanal street food recipe." }
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-6">
                    <div className="text-[#DAA520]">{feature.icon}</div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter">{feature.title}</h4>
                    <p className="text-white/60 font-medium">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Visit Us Preview */}
            <section className="py-32 px-6 bg-white overflow-hidden relative">
              <div className="absolute right-0 bottom-0 p-24 opacity-5 rotate-12">
                <Logo className="w-96 h-96" />
              </div>
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
                <div className="flex-1">
                  <h2 className="text-5xl md:text-8xl font-black text-[#8B4513] uppercase tracking-tighter mb-8 leading-none">Find the <span className="text-[#DAA520]">Scent</span></h2>
                  <p className="text-2xl text-[#8B4513]/60 leading-relaxed mb-12 font-serif italic">We're roaming the streets of Nizhny Novgorod, bringing artisanal warmth to every corner.</p>
                  <div className="space-y-6 mb-12">
                    {CURRENT_LOCATIONS.map((loc, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 bg-[#F5F5DC] rounded-3xl border-l-8 border-[#DAA520]">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#DAA520] shadow-md">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-[#8B4513] uppercase tracking-tight">{loc.name}</h4>
                          <p className="text-sm text-[#8B4513]/50 font-bold">{loc.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => navigateToTab('location')} className="px-12 py-6 bg-[#8B4513] text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#DAA520] transition-colors shadow-2xl">Open Real-Time Map</button>
                </div>
                <div className="flex-1 w-full h-[600px] rounded-[4rem] overflow-hidden shadow-3xl border-[20px] border-[#F5F5DC]">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" className="w-full h-full object-cover" alt="Map Preview" />
                </div>
              </div>
            </section>

            {/* Meet Chef Karla Segment */}
            <section className="py-32 px-6 bg-[#2D1B1B] text-white">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12 inline-block p-4 bg-white/5 rounded-full border border-white/10">
                  <Logo className="w-40 h-40 md:w-56 md:h-56 border-8 border-[#DAA520]" />
                </div>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">The <span className="text-[#DAA520]">Chef's</span> Story</h2>
                <p className="text-2xl text-white/80 leading-relaxed mb-12 font-serif italic max-w-2xl mx-auto">"Every crepe is a lacy masterpiece. I believe in the magic of simple ingredients elevated by 48 hours of patience."</p>
                <button onClick={() => navigateToTab('about')} className="text-[#DAA520] font-black uppercase tracking-[0.4em] text-sm hover:text-white transition-colors flex items-center gap-3 mx-auto">Learn Our Full History <ArrowRight size={20} /></button>
              </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-32 px-6 bg-[#DAA520]">
              <div className="max-w-4xl mx-auto text-center bg-white p-16 md:p-24 rounded-[4rem] shadow-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern-7.png')] opacity-5"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#F5F5DC] rounded-full flex items-center justify-center mx-auto mb-8">
                    <Mail size={40} className="text-[#DAA520]" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-[#8B4513] uppercase tracking-tighter mb-6">Join the Collective</h2>
                  <p className="text-lg text-[#8B4513]/60 font-bold mb-12 uppercase tracking-widest">Get exclusive secret menu drops & live location alerts.</p>
                  <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Your Official Email" className="flex-grow p-6 rounded-3xl bg-[#F5F5DC] border-none focus:ring-4 focus:ring-[#DAA520]/20 text-[#8B4513] font-black outline-none" />
                    <button className="px-12 py-6 bg-[#8B4513] text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-[#DAA520] transition-colors">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* DEDICATED PAGE VIEWS */}
        {activeTab === 'menu' && (
          <div className="animate-site-entry pt-32 pb-24 px-6 bg-[#F5F5DC]">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center mb-24">
                <h2 className="text-5xl md:text-8xl font-black text-[#8B4513] uppercase tracking-tighter mb-4">Full Menu Selection</h2>
                <div className="h-1.5 w-32 bg-[#DAA520] mb-8"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                {MENU_ITEMS.filter(i => i.category !== 'Drinks').map(item => (
                  <div key={item.id} className="group relative bg-white rounded-[3rem] p-12 shadow-2xl transition-all hover:-translate-y-4 border-t-[12px] border-transparent hover:border-[#DAA520] flex flex-col h-full overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${item.category === 'Savory' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {item.category}
                      </div>
                      <span className="text-3xl font-black text-[#DAA520]">${item.price.toFixed(2)}</span>
                    </div>
                    <h3 className="text-3xl font-black text-[#8B4513] leading-none mb-6 uppercase tracking-tighter">{item.name}</h3>
                    <p className="text-lg text-[#8B4513]/60 mb-10 leading-relaxed flex-grow font-medium">{item.description}</p>
                    <button className="w-full py-5 bg-[#F5F5DC] text-[#8B4513] rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#8B4513] hover:text-white transition-all shadow-lg active:scale-95">
                      Add to Order
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div className="animate-site-entry pt-32 pb-24 px-6 bg-[#F5F5DC]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-6xl md:text-8xl font-black text-[#8B4513] uppercase tracking-tighter mb-4">Real-Time Tracker</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 space-y-8">
                  {CURRENT_LOCATIONS.map((loc, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[3.5rem] shadow-2xl border-t-[12px] border-[#DAA520] relative group overflow-hidden transition-all hover:-translate-y-2">
                      <h4 className="text-3xl font-black text-[#8B4513] uppercase tracking-tight leading-none mb-6">{loc.name}</h4>
                      <div className="flex items-start gap-4 text-[#8B4513]/60 mb-10">
                        <MapPin className="text-[#DAA520] mt-1 shrink-0" size={24} />
                        <p className="text-base font-bold leading-snug">{loc.address}</p>
                      </div>
                      <button className="w-full py-5 bg-[#8B4513] text-white rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-[#DAA520] transition-all flex items-center justify-center gap-3">
                        <Navigation size={18} /> Open Map
                      </button>
                    </div>
                  ))}
                </div>
                <div className="lg:col-span-2 h-[600px] bg-white rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-white relative">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" className="w-full h-full object-cover" alt="Official Map" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-site-entry pt-32 pb-24 px-6 bg-[#F5F5DC]">
            <div className="max-w-4xl mx-auto bg-white rounded-[5rem] p-16 md:p-24 shadow-3xl text-center border-b-[24px] border-[#DAA520]">
              <Logo className="w-32 h-32 md:w-44 md:h-44 border-8 border-[#DAA520] mx-auto mb-12" />
              <h2 className="text-5xl md:text-8xl font-black text-[#8B4513] uppercase tracking-tighter leading-none mb-12">Artisanal Roots</h2>
              <p className="text-xl text-[#8B4513]/80 font-medium leading-relaxed mb-8">
                Every Crepe Masters creation begins with Chef Karla's signature ginger-clove batter, perfected over years of street food experimentation.
              </p>
              <blockquote className="italic border-l-[12px] border-[#DAA520] pl-10 py-4 bg-[#F5F5DC]/40 rounded-r-[3rem] text-2xl font-serif text-[#8B4513] text-left">
                "Our crepes aren't just food; they are an experience of texture and spice."
              </blockquote>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-site-entry pt-32 pb-24 px-6 bg-[#F5F5DC]">
            <div className="max-w-4xl mx-auto bg-[#8B4513] rounded-[5rem] p-16 md:p-24 shadow-3xl text-white">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 text-center">Catering Inquiry</h2>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <input type="text" placeholder="Name" className="w-full p-6 bg-white/5 rounded-3xl border-2 border-white/10 text-white outline-none" />
                  <input type="email" placeholder="Email" className="w-full p-6 bg-white/5 rounded-3xl border-2 border-white/10 text-white outline-none" />
                </div>
                <textarea rows={5} placeholder="Event Details" className="w-full p-6 bg-white/5 rounded-3xl border-2 border-white/10 text-white outline-none"></textarea>
                <button className="w-full py-8 bg-[#DAA520] text-[#8B4513] font-black text-2xl uppercase rounded-3xl hover:bg-white transition-all">Submit Request</button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Official Site Footer */}
      <footer className="bg-white py-24 px-8 border-t-[16px] border-[#F5F5DC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5 mb-8">
                <Logo className="w-20 h-20 border-4 border-[#DAA520]" />
                <span className="text-3xl font-black text-[#8B4513] uppercase tracking-tighter">CREPE MASTERS</span>
              </div>
              <p className="text-[#8B4513]/50 font-medium text-lg leading-relaxed italic max-w-lg">
                Artisanal street food, hand-crafted with our secret 48-hour ginger-clove batter.
              </p>
            </div>
            <div>
               <h5 className="text-[#DAA520] font-black uppercase tracking-[0.4em] text-[11px] mb-10">Explore</h5>
               <nav className="flex flex-col gap-5 font-black text-[#8B4513] uppercase text-[12px] tracking-[0.2em]">
                  <button onClick={() => navigateToTab('home')} className="hover:text-[#DAA520] text-left transition-colors">Home</button>
                  <button onClick={() => navigateToTab('menu')} className="hover:text-[#DAA520] text-left transition-colors">The Menu</button>
                  <button onClick={() => navigateToTab('location')} className="hover:text-[#DAA520] text-left transition-colors">Truck Tracker</button>
               </nav>
            </div>
            <div className="flex flex-col md:items-end">
               <h5 className="text-[#DAA520] font-black uppercase tracking-[0.4em] text-[11px] mb-10">Socials</h5>
               <div className="flex gap-6">
                  <a href="#" className="w-14 h-14 bg-[#F5F5DC] rounded-full flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all shadow-xl"><Instagram size={24} /></a>
                  <a href="#" className="w-14 h-14 bg-[#F5F5DC] rounded-full flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all shadow-xl"><Facebook size={24} /></a>
               </div>
            </div>
          </div>
          <div className="text-[10px] font-black text-[#8B4513]/30 uppercase tracking-[0.4em] border-t border-[#F5F5DC] pt-10">
             © 2025 Crepe Masters Artisanal Collective. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;