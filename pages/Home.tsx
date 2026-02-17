import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Droplets, Wind, ShieldCheck, Sprout, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=2070",
    title: "Sleep With Nature.",
    subtitle: "Naturally crafted latex sleep systems from Sri Lanka — designed for healthier sleep, sustainable living, and long-lasting comfort.",
    cta: "Explore Mattresses",
    link: "/products?cat=mattresses"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1584132911971-d351bccaf73a?auto=format&fit=crop&q=80&w=2071",
    title: "Pure Comfort, Naturally.",
    subtitle: "Experience the perfect balance of support and softness with our certified organic latex pillows.",
    cta: "Shop Pillows",
    link: "/products?cat=pillows"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2070",
    title: "Ground Your Practice.",
    subtitle: "Sustainable, non-slip natural rubber yoga mats. Non-toxic support for your daily flow.",
    cta: "View Yoga Mats",
    link: "/products?cat=yoga"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dfc?auto=format&fit=crop&q=80&w=2067",
    title: "Eco-Luxury For Pets.",
    subtitle: "Give your furry companions the orthopedic support they deserve with our organic latex pet beds.",
    cta: "Discover Pet Beds",
    link: "/products?cat=pets"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current, isPaused]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-eco-green-dark group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className={`container mx-auto px-6 text-center text-white transition-all duration-1000 transform ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="serif-heading text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10 text-white/90 drop-shadow-sm">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to={slide.link} 
                  className="bg-white text-eco-green-dark hover:bg-eco-beige px-10 py-4 uppercase tracking-widest text-sm font-bold transition-colors shadow-lg"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Desktop) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-eco-green-dark backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-eco-green-dark backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === current ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const BrandIntro = () => (
  <section className="py-20 bg-eco-base text-center">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-eco-green uppercase tracking-widest text-xs font-bold mb-4">About Eco Latex</h2>
      <p className="serif-heading text-2xl md:text-4xl leading-relaxed text-eco-green-dark">
        We are a manufacturer of premium natural latex mattresses, pillows, and toppers — crafted from sustainably harvested rubber tree sap using clean, toxin-free processes.
      </p>
    </div>
  </section>
);

const CategoryTile = ({ title, img, link }: { title: string, img: string, link: string }) => (
  <Link to={link} className="group relative overflow-hidden h-[400px] block">
    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
    <div className="absolute bottom-8 left-8 text-white">
      <h3 className="text-2xl font-serif italic mb-2">{title}</h3>
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        View Collection <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </Link>
);

const TrustSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="serif-heading text-4xl text-eco-green-dark mb-4">Why Eco Latex?</h2>
        <div className="w-12 h-0.5 bg-eco-green mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { icon: <Sprout className="w-8 h-8"/>, title: "100% Natural Latex", desc: "Harvested responsibly from renewable rubber trees." },
          { icon: <ShieldCheck className="w-8 h-8"/>, title: "Chemical-Free", desc: "No VOCs, flame retardants, or synthetic fillers." },
          { icon: <Wind className="w-8 h-8"/>, title: "Breathable", desc: "Open-cell structure for natural temperature regulation." },
          { icon: <Droplets className="w-8 h-8"/>, title: "Sustainable", desc: "Manufactured in Sri Lanka with eco-friendly processes." }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-eco-base flex items-center justify-center text-eco-green mb-6 group-hover:bg-eco-green group-hover:text-white transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-eco-gray text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessPreview = () => (
  <section className="py-24 bg-eco-green-dark text-white relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
        <h2 className="text-xs uppercase tracking-widest text-eco-beige mb-2">Our Process</h2>
        <h3 className="serif-heading text-4xl md:text-5xl mb-6">From Tree to Mattress</h3>
        <p className="text-white/80 font-light text-lg mb-8 max-w-md">
          A journey of purity. See how we transform renewable rubber sap into the world's finest sleep surfaces without compromising the environment.
        </p>
        <Link to="/journey" className="inline-flex items-center gap-3 text-eco-beige hover:text-white transition-colors uppercase tracking-widest text-sm border-b border-eco-beige/30 pb-1 hover:border-white">
          See Full Process <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-4">
        <div className="space-y-4 translate-y-8">
           <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Rubber Tree" className="rounded opacity-80" />
        </div>
        <div className="space-y-4">
           <img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800" alt="Latex Foam" className="rounded opacity-80" />
        </div>
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section className="py-12 border-t border-gray-200 bg-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {['GOLS Certified', 'GOTS Organic', 'OEKO-TEX Standard 100', 'Eco Lab Germany', 'PFAS-Free'].map((cert, i) => (
          <div key={i} className="flex items-center gap-2">
             <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">✓</div>
             <span className="font-bold text-sm tracking-tighter text-gray-600 uppercase">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FooterCTA = () => (
    <section className="py-24 bg-eco-beige text-center">
        <div className="container mx-auto px-6">
            <h2 className="serif-heading text-4xl mb-6 text-eco-green-dark">Ready to sleep naturally?</h2>
            <div className="flex justify-center gap-4">
                <Link to="/contact" className="bg-eco-green-dark text-white px-8 py-3 rounded-sm uppercase tracking-widest text-xs hover:bg-black transition-colors">
                    Contact Us
                </Link>
                <Link to="/contact" className="border border-eco-green-dark text-eco-green-dark px-8 py-3 rounded-sm uppercase tracking-widest text-xs hover:bg-white transition-colors">
                    Download Catalog
                </Link>
            </div>
        </div>
    </section>
)

export const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <BrandIntro />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <CategoryTile title="Mattresses" img="https://images.unsplash.com/photo-1505693414956-48c5b7aa4575?auto=format&fit=crop&q=80&w=800" link="/products?cat=mattresses" />
        <CategoryTile title="Pillows" img="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800" link="/products?cat=pillows" />
        <CategoryTile title="Toppers" img="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800" link="/products?cat=toppers" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <CategoryTile title="Latex Sheets" img="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" link="/products?cat=sheets" />
        <CategoryTile title="Yoga Mats" img="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800" link="/products?cat=yoga" />
        <CategoryTile title="Pet Beds" img="https://images.unsplash.com/photo-1541599540903-216a46ca1dfc?auto=format&fit=crop&q=80&w=800" link="/products?cat=pets" />
      </div>
      <TrustSection />
      <ProcessPreview />
      <Certifications />
      <FooterCTA />
    </div>
  );
};
