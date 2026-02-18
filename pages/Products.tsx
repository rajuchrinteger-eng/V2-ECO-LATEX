
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Thermometer, ShieldCheck, 
  Sparkles, Layers, Box, Info, ChevronRight, ChevronLeft,
  Star, Ruler, Wind, Droplets, Leaf, Package, 
  ArrowLeft, ShoppingBag, Globe
} from 'lucide-react';

const categories = [
  { id: 'mattresses', label: 'Mattresses' },
  { id: 'toppers', label: 'Toppers' },
  { id: 'pillows', label: 'Pillows' },
  { id: 'sheets', label: 'Bed Linen' },
  { id: 'comforters', label: 'Comforters' },
  { id: 'yoga', label: 'Yoga Mats' },
  { id: 'pets', label: 'Pet Beds' },
];

// --- Data Structures ---

interface TopperProduct {
  id: string;
  name: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  images: string[];
  features: string[];
  highlights?: string[];
  thicknessOptions?: { label: string; detail: string }[];
  firmnessOptions?: { label: string; desc: string }[];
  specs: { l: string; v: string }[];
  materials: { icon: any; title: string; text: string }[];
  tag: string;
}

const TOPPER_PRODUCTS: TopperProduct[] = [
  {
    id: 'latex-foam',
    name: 'Latex Foam Mattress Toppers',
    tag: 'ORGANIC LATEX',
    subtitle: '100% GOLS Certified Organic',
    shortDesc: 'Individually molded natural latex for responsive support.',
    description: 'Transform your existing mattress with the responsive support of natural latex. Individually molded using the Dunlop process to provide immediate pressure relief and spinal alignment. Crafted from 100% natural rubber sap without synthetic fillers.',
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1584132911971-d351bccaf73a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1629949009765-40f34d9f3c8f?auto=format&fit=crop&q=80&w=1200"
    ],
    highlights: [
      'Available in 2" and 3" profiles',
      '4 firmness options: Soft to X-Firm',
      'Individually molded natural latex',
      'Organic cotton or bamboo-blend cover',
      'GOLS & OEKO-TEX certified',
      'Roll packed for easy shipping'
    ],
    thicknessOptions: [
      { label: '2"', detail: 'Ideal for adding a subtle comfort layer. Enhances surface softness without dramatically changing mattress feel.' },
      { label: '3"', detail: 'Provides deeper cushioning and more pronounced pressure relief for enhanced support.' }
    ],
    firmnessOptions: [
      { label: 'Soft', desc: 'Plush feel with maximum contouring' },
      { label: 'Medium', desc: 'Balanced comfort and support' },
      { label: 'Firm', desc: 'Stable support with minimal sink' },
      { label: 'X-Firm', desc: 'Extra reinforcement for strong support needs' }
    ],
    features: ['Individually Molded', 'Open-cell cooling', 'Spinal alignment', 'Motion isolation'],
    specs: [
      { l: "Certification", v: "GOLS Organic / OEKO-TEX 100" },
      { l: "Material", v: "100% Natural Dunlop Latex" },
      { l: "Density", v: "65 - 95 kg/m³" },
      { l: "Warranty", v: "10 Years Limited" },
    ],
    materials: [
      { icon: Droplets, title: "Individually Molded Latex", text: "Each topper is molded to respond evenly to body weight, ensuring consistent contouring and proper spinal alignment." },
      { icon: Leaf, title: "100% Organic Cotton", text: "Breathable, chemical-free comfort for sensitive sleepers." },
      { icon: Sparkles, title: "Bamboo Blend", text: "30% Bamboo / 70% Polyester – Soft, durable alternative cover." },
    ]
  },
  {
    id: 'organic-wool',
    name: 'Organic Wool Topper',
    tag: 'TUFTED WOOL',
    subtitle: '2000 GSM Heritage Series',
    shortDesc: 'Breathable warmth and moisture regulation with hand-tufted organic wool.',
    description: 'A plush, tufted masterpiece designed for ultimate temperature regulation. Packed with 2000 GSM of organic wool to create a dry, breathable, and cozy sleeping climate. Naturally fire retardant and hypoallergenic.',
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1629949009765-40f34d9f3c8f?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200", 
    ],
    features: ['2000 GSM Density', 'Tufted Finish', 'Natural Fire Retardant', 'Moisture Wicking'],
    specs: [
      { l: "Certification", v: "GOTS Organic / Oeko-Tex" },
      { l: "Weight", v: "2000 Grams Per Sq Meter" },
      { l: "Material", v: "Ethically Sourced Wool" },
      { l: "Construction", v: "Hand-Tufted Detailing" },
    ],
    materials: [
      { icon: Sparkles, title: "Organic Wool", text: "Ethically sourced, naturally insulating fiber." },
      { icon: Wind, title: "Thermo-Reg", text: "Keeps you warm in winter, cool in summer." },
      { icon: ShieldCheck, title: "Safe Sleep", text: "Naturally resistant to mold and dust mites." },
    ]
  },
  {
    id: 'box-stitch-wool',
    name: 'Box-Stitched Pillow Topper',
    tag: 'QUILTED HYBRID',
    subtitle: 'Shredded Latex + Wool Blend',
    shortDesc: 'Cloud-like loft with precision quilted 56-box pocket construction.',
    description: 'The architectural peak of toppers. Featuring 56 precision-quilted box pockets filled with a proprietary blend of shredded natural latex and organic wool balls. Prevents shifting and ensures even support across the surface.',
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1584132911971-d351bccaf73a?auto=format&fit=crop&q=80&w=1200", 
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1200", 
    ],
    features: ['56 Quilted Pockets', 'Latex & Wool Blend', 'Cloud-like Loft', 'No-Shift Filling'],
    specs: [
      { l: "Filling", v: "Shredded Latex + Wool Balls" },
      { l: "Construction", v: "Box-Stitch Pockets" },
      { l: "Cover", v: "Cotton Sateen Quilted" },
      { l: "Straps", v: "Heavy Duty Corner Elastic" },
    ],
    materials: [
      { icon: Layers, title: "Box Design", text: "Prevents filling from shifting for even support." },
      { icon: Sparkles, title: "Wool Balls", text: "Adds resilience and natural loft." },
      { icon: Droplets, title: "Shredded Latex", text: "Provides pressure-relieving buoyancy." },
    ]
  }
];

// --- Sub-Components ---

const ImageGallery = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  // Handle automatic scrolling of thumbnails when index changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeThumb = scrollContainerRef.current.children[activeIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIndex]);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Main Image Container - Click to Advance */}
      <div 
        onClick={nextImage}
        className="aspect-[3/2] bg-white overflow-hidden rounded-sm relative group border border-gray-100 shadow-sm cursor-pointer select-none"
      >
        <img 
          src={images[activeIndex]} 
          alt={`Product View ${activeIndex + 1}`} 
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Arrows (Absolute Center-Sides) */}
        <button 
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-eco-green-dark hover:bg-eco-green hover:text-white transition-all shadow-xl opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-eco-green-dark hover:bg-eco-green hover:text-white transition-all shadow-xl opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Brochure Page Counter */}
        <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] rounded-full uppercase">
          Slide {activeIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnail Carousel */}
      <div className="relative group/thumbs px-2">
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-2 px-1"
        >
          {images.map((img, i) => (
            <button 
              key={i} 
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 w-20 md:w-24 aspect-square overflow-hidden rounded-sm border-2 transition-all ${activeIndex === i ? 'border-eco-green scale-105 shadow-md ring-2 ring-eco-green/10' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        
        {/* Thumbnail Scroll Controls */}
        {images.length > 4 && (
          <>
            <button 
              onClick={() => scrollThumbnails('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white border border-gray-100 shadow-lg rounded-full flex items-center justify-center text-eco-green-dark hover:bg-eco-green hover:text-white transition-all opacity-0 group-hover/thumbs:opacity-100 z-20"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollThumbnails('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white border border-gray-100 shadow-lg rounded-full flex items-center justify-center text-eco-green-dark hover:bg-eco-green hover:text-white transition-all opacity-0 group-hover/thumbs:opacity-100 z-20"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const TabButton = ({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`pb-4 text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 transition-all ${active ? 'border-eco-green text-eco-green-dark' : 'border-transparent text-gray-400 hover:text-eco-green'}`}
  >
    {label}
  </button>
);

const TopperCollectionCard = ({ product, onClick }: { product: TopperProduct; onClick: () => void; key?: string }) => (
  <div 
    onClick={onClick}
    className="group bg-white border border-gray-100 cursor-pointer overflow-hidden flex flex-col hover:border-eco-green/30 transition-all shadow-sm"
  >
    <div className="aspect-[4/3] overflow-hidden relative">
      <img 
        src={product.images[0]} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[8px] font-bold tracking-[0.2em] text-eco-green-dark border border-gray-100">
        {product.tag}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="serif-heading text-2xl text-eco-green-dark mb-2">{product.name}</h3>
      <p className="text-xs text-eco-gray mb-6 flex-grow leading-relaxed font-light">{product.shortDesc}</p>
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
        <span className="text-[10px] font-bold uppercase tracking-widest text-eco-green group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
          View Details <ArrowRight className="w-3 h-3" />
        </span>
        <div className="flex gap-1">
           {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-eco-green text-eco-green" />)}
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeDetailTab, setActiveDetailTab] = useState<'description' | 'materials' | 'specifications' | 'care'>('description');
  const [thickness, setThickness] = useState<string>('3"');
  const [firmness, setFirmness] = useState<string>('Medium');
  const [activePillowTab, setActivePillowTab] = useState<'molded' | 'hybrid' | 'microfiber'>('molded');
  
  const activeCategory = searchParams.get('cat') || 'mattresses';
  const selectedTopperId = searchParams.get('pid');

  const setCategory = (id: string) => {
    setSearchParams({ cat: id });
  };

  const selectProduct = (pid: string | null) => {
    if (pid) {
      setSearchParams({ cat: 'toppers', pid });
    } else {
      setSearchParams({ cat: 'toppers' });
    }
  };

  const currentTopper = TOPPER_PRODUCTS.find(p => p.id === selectedTopperId);

  const pillowImages = [
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1584132911971-d351bccaf73a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="pt-24 min-h-screen bg-white animate-fade-in">
      {/* Category Navigation Bar */}
      <div className="border-b border-gray-100 mb-8 sticky top-[80px] bg-white z-40 shadow-sm">
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex space-x-12 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`py-6 text-[10px] uppercase tracking-[0.25em] font-bold border-b-2 transition-all ${
                  activeCategory === cat.id
                    ? 'border-eco-green text-eco-green-dark'
                    : 'border-transparent text-gray-400 hover:text-eco-green'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        
        {/* --- TOPPERS SECTION --- */}
        {activeCategory === 'toppers' && (
          <div className="animate-slide-up">
            
            {!currentTopper ? (
              /* --- Topper Collection Grid --- */
              <div className="space-y-16 pt-12 md:pt-16">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="serif-heading text-5xl text-eco-green-dark mb-4">Topper Collections</h2>
                  <p className="text-eco-gray font-light leading-relaxed">
                    Crafted from organic latex and pure wool, our toppers are designed to revitalize your sleep surface with natural buoyancy and climate-regulating comfort.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {TOPPER_PRODUCTS.map((p) => (
                    <TopperCollectionCard key={p.id} product={p} onClick={() => selectProduct(p.id)} />
                  ))}
                </div>
              </div>
            ) : (
              /* --- Topper Product Detail Page (PDP) --- */
              <div className="animate-fade-in pt-8">
                {/* Back Link */}
                <button 
                  onClick={() => selectProduct(null)}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-eco-gray hover:text-eco-green mb-12 font-bold transition-colors"
                >
                  <ArrowLeft className="w-3 h-3" /> Back to Collection
                </button>

                {/* Main PDP Grid */}
                <div className="grid lg:grid-cols-12 gap-16 mb-24 items-start">
                  {/* Left: Media Gallery */}
                  <div className="lg:col-span-6">
                    <ImageGallery images={currentTopper.images} />
                  </div>

                  {/* Right: Product Info */}
                  <div className="lg:col-span-6 space-y-8">
                    <div>
                      <div className="flex items-center gap-1 text-eco-green mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        <span className="text-[10px] uppercase tracking-widest font-bold ml-2 text-eco-gray">Premium Grade</span>
                      </div>
                      <h1 className="serif-heading text-4xl md:text-5xl text-eco-green-dark leading-tight mb-2">{currentTopper.name}</h1>
                      <p className="text-xs uppercase tracking-widest text-eco-green font-bold mb-6">{currentTopper.subtitle}</p>
                      
                      {/* Brochure Highlights */}
                      {currentTopper.highlights && (
                        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 border-b border-gray-100 pb-8">
                          {currentTopper.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-3 text-[10px] uppercase tracking-widest font-bold text-eco-green-dark">
                              <Check className="w-3 h-3 text-eco-green shrink-0 mt-0.5" /> <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <p className="text-eco-gray leading-relaxed font-light text-sm italic border-l-2 border-eco-sand pl-4">
                        {currentTopper.description}
                      </p>
                    </div>

                    {/* Section: Thickness & Support */}
                    <div className="space-y-10 pt-4">
                      {currentTopper.thicknessOptions && (
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-gray-400">Thickness & Support</span>
                          <div className="flex gap-4 mb-4">
                            {currentTopper.thicknessOptions.map((opt) => (
                              <button 
                                key={opt.label}
                                onClick={() => setThickness(opt.label)}
                                className={`flex-1 py-5 border transition-all flex flex-col items-center justify-center rounded-sm ${thickness === opt.label ? 'border-eco-green bg-eco-base shadow-sm ring-1 ring-eco-green/20' : 'border-gray-200 hover:border-eco-green/50'}`}
                              >
                                <span className="text-xl font-serif font-bold text-eco-green-dark">{opt.label} Profile</span>
                              </button>
                            ))}
                          </div>
                          <div className="p-4 bg-eco-base/30 rounded-sm border-l-2 border-eco-green">
                            <p className="text-xs text-eco-green-dark font-medium leading-relaxed">
                                {currentTopper.thicknessOptions.find(o => o.label === thickness)?.detail}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Section: Firmness Options */}
                      {currentTopper.firmnessOptions && (
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-gray-400">Firmness Options</span>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                            {currentTopper.firmnessOptions.map((opt) => (
                              <button 
                                key={opt.label}
                                onClick={() => setFirmness(opt.label)}
                                className={`py-3 px-2 border text-center transition-all rounded-sm ${firmness === opt.label ? 'border-eco-green bg-eco-base font-bold' : 'border-gray-100 hover:border-eco-green/30'}`}
                              >
                                <span className="text-[10px] uppercase tracking-widest block">{opt.label}</span>
                              </button>
                            ))}
                          </div>
                          <p className="text-[11px] text-eco-gray font-light uppercase tracking-tighter">
                            Selection: <span className="font-bold text-eco-green">{firmness}</span> — {currentTopper.firmnessOptions.find(o => o.label === firmness)?.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="pt-6 space-y-4">
                      <Link to="/contact" className="w-full bg-eco-green-dark text-white py-5 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs font-bold hover:bg-black transition-all shadow-lg hover:-translate-y-0.5">
                        Send Inquiry <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="flex items-center justify-center gap-3 text-[10px] text-eco-gray uppercase tracking-widest font-bold">
                        <Package className="w-4 h-4 text-eco-green" /> B2B OEM & Wholesale Available
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submenu Tabs Section */}
                <div className="max-w-4xl mx-auto border-t border-gray-100 pt-16">
                  <div className="flex justify-center gap-6 md:gap-16 mb-16 flex-wrap">
                    <TabButton label="Description" active={activeDetailTab === 'description'} onClick={() => setActiveDetailTab('description')} />
                    <TabButton label="Materials" active={activeDetailTab === 'materials'} onClick={() => setActiveDetailTab('materials')} />
                    <TabButton label="Tech Specs" active={activeDetailTab === 'specifications'} onClick={() => setActiveDetailTab('specifications')} />
                    <TabButton label="Logistics" active={activeDetailTab === 'care'} onClick={() => setActiveDetailTab('care')} />
                  </div>

                  <div className="min-h-[400px]">
                    {activeDetailTab === 'description' && (
                      <div className="animate-fade-in grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                          <h3 className="serif-heading text-4xl text-eco-green-dark">Pure Latex Craftsmanship</h3>
                          <p className="text-eco-gray leading-relaxed font-light">
                            Each topper is individually molded to ensure consistent density and response. Unlike mass-produced continuous-pour latex, our process ensures the integrity of the natural rubber sap remains intact.
                          </p>
                        </div>
                        <div className="aspect-[16/10] bg-eco-base rounded-sm overflow-hidden shadow-sm border border-gray-100">
                          <img src={currentTopper.images[1]} alt="Detail View" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}

                    {activeDetailTab === 'materials' && (
                      <div className="animate-fade-in grid md:grid-cols-3 gap-12">
                        {currentTopper.materials.map((m, i) => (
                          <div key={i} className="text-center p-8 rounded border border-transparent hover:border-eco-base transition-colors group bg-eco-base/20">
                            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                               <m.icon className="w-8 h-8 text-eco-green" />
                            </div>
                            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4 text-eco-green-dark">{m.title}</h4>
                            <p className="text-xs text-eco-gray leading-relaxed font-light">{m.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeDetailTab === 'specifications' && (
                      <div className="animate-fade-in max-w-2xl mx-auto bg-white border border-gray-100 p-12 shadow-sm">
                        <div className="space-y-6 mt-12 border-t border-gray-50 pt-10">
                          {currentTopper.specs.map((item, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-4">
                               <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">{item.l}</span>
                               <span className="text-sm text-eco-green-dark font-medium">{item.v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeDetailTab === 'care' && (
                      <div className="animate-fade-in grid md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                          <div className="flex gap-6">
                             <div className="w-12 h-12 bg-eco-green-dark text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold shadow-md">01</div>
                             <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Sustainable Packaging</h4>
                                <p className="text-xs text-eco-gray leading-relaxed font-light">Roll-packed in protective poly wrap and reinforced cartons for efficient global distribution.</p>
                             </div>
                          </div>
                        </div>
                        <div className="bg-eco-beige/20 p-10 rounded-sm border border-eco-beige/50 flex flex-col items-center justify-center text-center">
                          <Globe className="w-10 h-10 text-eco-green mb-6" />
                          <h4 className="font-bold text-sm uppercase tracking-widest mb-3">Global Export Grade</h4>
                          <p className="text-xs text-eco-gray font-light max-w-xs leading-relaxed italic">Direct-to-warehouse shipping solutions for international retailers.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Other sections handled via previous implementation logic */}
        {activeCategory !== 'toppers' && (
           <div className="animate-slide-up pt-12 text-center py-24">
             <Layers className="w-16 h-16 text-eco-green/20 mx-auto mb-8" />
             <h2 className="serif-heading text-4xl text-eco-green-dark mb-6">Innovative Natural Collections</h2>
             <p className="text-eco-gray max-w-lg mx-auto mb-12 font-light text-lg">Our design team is perfecting our latest collections. Contact us for the most recent catalog and B2B pricing.</p>
             <Link to="/contact" className="inline-flex items-center gap-3 bg-eco-green text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-eco-green-dark transition-all">
               Get Latest Catalog <ArrowRight className="w-4 h-4" />
             </Link>
           </div>
        )}
      </div>
    </div>
  );
};
