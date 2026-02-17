import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Thermometer, ShieldCheck, 
  Sparkles, Layers, Box, Info, ChevronRight, 
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
  const [activeImg, setActiveImg] = useState(images[0]);

  useEffect(() => {
    setActiveImg(images[0]);
  }, [images]);

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[3/2] bg-eco-base overflow-hidden rounded-sm relative group border border-gray-100 max-h-[500px]">
        <img 
          src={activeImg} 
          alt="Product Detail" 
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, i) => (
          <button 
            key={i} 
            onClick={() => setActiveImg(img)}
            className={`aspect-square overflow-hidden rounded-sm border-2 transition-all ${activeImg === img ? 'border-eco-green scale-95' : 'border-transparent hover:border-eco-green/30'}`}
          >
            <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
          </button>
        ))}
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
                      
                      {/* Section: Product Highlights (Above the Fold) */}
                      {currentTopper.highlights && (
                        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 border-b border-gray-100 pb-8">
                          {currentTopper.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-eco-green-dark">
                              <Check className="w-3 h-3 text-eco-green shrink-0" /> {h}
                            </div>
                          ))}
                        </div>
                      )}

                      <p className="text-eco-gray leading-relaxed font-light text-sm">
                        {currentTopper.description}
                      </p>
                    </div>

                    {/* Section: Thickness & Support */}
                    <div className="space-y-10 pt-4">
                      {currentTopper.thicknessOptions && (
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest block mb-4">Thickness & Support</span>
                          <div className="flex gap-4 mb-4">
                            {currentTopper.thicknessOptions.map((opt) => (
                              <button 
                                key={opt.label}
                                onClick={() => setThickness(opt.label)}
                                className={`flex-1 py-4 border transition-all flex flex-col items-center justify-center ${thickness === opt.label ? 'border-eco-green bg-eco-base shadow-sm' : 'border-gray-200 hover:border-eco-green/50'}`}
                              >
                                <span className="text-lg font-serif font-bold text-eco-green-dark">{opt.label} Profile</span>
                              </button>
                            ))}
                          </div>
                          <p className="text-xs text-eco-gray font-light italic leading-relaxed">
                            {currentTopper.thicknessOptions.find(o => o.label === thickness)?.detail}
                          </p>
                        </div>
                      )}

                      {/* Section: Firmness Options */}
                      {currentTopper.firmnessOptions && (
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest block mb-4">Firmness Options</span>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                            {currentTopper.firmnessOptions.map((opt) => (
                              <button 
                                key={opt.label}
                                onClick={() => setFirmness(opt.label)}
                                className={`py-3 px-2 border text-center transition-all ${firmness === opt.label ? 'border-eco-green bg-eco-base' : 'border-gray-100 hover:border-eco-green/30'}`}
                              >
                                <span className="text-[10px] font-bold uppercase tracking-widest block">{opt.label}</span>
                              </button>
                            ))}
                          </div>
                          <p className="text-[11px] text-eco-green-dark font-medium">
                            {currentTopper.firmnessOptions.find(o => o.label === firmness)?.desc}
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                        <div className="flex items-center gap-3 p-4 bg-eco-base/50 border border-transparent rounded-sm">
                          <Globe className="w-5 h-5 text-eco-green" />
                          <span className="text-[10px] uppercase tracking-widest font-bold">Global Export</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-eco-base/50 border border-transparent rounded-sm">
                          <Wind className="w-5 h-5 text-eco-green" />
                          <span className="text-[10px] uppercase tracking-widest font-bold">Breathable</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 space-y-4">
                      <Link to="/contact" className="w-full bg-eco-green-dark text-white py-5 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs font-bold hover:bg-black transition-all shadow-lg hover:-translate-y-0.5">
                        Enquiry <ArrowRight className="w-4 h-4" />
                      </Link>
                      <div className="flex items-center justify-center gap-3 text-[10px] text-eco-gray uppercase tracking-widest font-bold">
                        <Package className="w-4 h-4 text-eco-green" /> OEM & Private Label Solutions
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
                    <TabButton label="Packaging" active={activeDetailTab === 'care'} onClick={() => setActiveDetailTab('care')} />
                  </div>

                  <div className="min-h-[400px]">
                    {activeDetailTab === 'description' && (
                      <div className="animate-fade-in grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                          <h3 className="serif-heading text-4xl text-eco-green-dark">Individually Molded Latex</h3>
                          <p className="text-eco-gray leading-relaxed font-light">
                            Each topper is molded to respond evenly to body weight, ensuring consistent contouring and proper spinal alignment. We prioritize the purity of raw materials sourced from our own Sri Lankan plantations.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-4 bg-eco-base rounded text-center">
                                <Leaf className="w-6 h-6 text-eco-green mx-auto mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">GOLS Organic</span>
                             </div>
                             <div className="p-4 bg-eco-base rounded text-center">
                                <ShieldCheck className="w-6 h-6 text-eco-green mx-auto mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">PFAS-Free</span>
                             </div>
                          </div>
                        </div>
                        <div className="aspect-[16/10] bg-eco-base rounded-sm overflow-hidden shadow-sm">
                          <img src={currentTopper.images[1]} alt="Detail View" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}

                    {activeDetailTab === 'materials' && (
                      <div className="animate-fade-in grid md:grid-cols-3 gap-12">
                        {currentTopper.materials.map((m, i) => (
                          <div key={i} className="text-center p-8 rounded border border-transparent hover:border-eco-base transition-colors group">
                            <div className="w-20 h-20 mx-auto bg-eco-base rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
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
                        <div className="space-y-6">
                          <div className="flex items-center gap-3 mb-8">
                             <Check className="w-5 h-5 text-eco-green" />
                             <span className="text-sm font-bold uppercase tracking-widest">GOLS Certified Latex</span>
                          </div>
                          <div className="flex items-center gap-3 mb-8">
                             <Check className="w-5 h-5 text-eco-green" />
                             <span className="text-sm font-bold uppercase tracking-widest">GOTS Certified Textiles</span>
                          </div>
                          <div className="flex items-center gap-3 mb-8">
                             <Check className="w-5 h-5 text-eco-green" />
                             <span className="text-sm font-bold uppercase tracking-widest">OEKO-TEX Standard 100 Tested</span>
                          </div>
                        </div>
                        <div className="space-y-6 mt-12 border-t border-gray-50 pt-10">
                          {currentTopper.specs.map((item, i) => (
                            <div key={i} className="flex justify-between items-center">
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
                             <div className="w-12 h-12 bg-eco-green-dark text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">01</div>
                             <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Sustainable Packing</h4>
                                <p className="text-xs text-eco-gray leading-relaxed font-light">Roll-packed in protective poly wrap and boxed for efficient transport. Designed for safe e-commerce delivery and reduced shipping impact.</p>
                             </div>
                          </div>
                          <div className="flex gap-6">
                             <div className="w-12 h-12 bg-eco-green-dark text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">02</div>
                             <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Instant Recovery</h4>
                                <p className="text-xs text-eco-gray leading-relaxed font-light">Vacuum-compressed for volume reduction. Ready to use in 2 hours with no chemical off-gassing.</p>
                             </div>
                          </div>
                        </div>
                        <div className="bg-eco-beige/20 p-10 rounded border border-eco-beige/50 flex flex-col items-center justify-center text-center">
                          <Globe className="w-10 h-10 text-eco-green mb-6" />
                          <h4 className="font-bold text-sm uppercase tracking-widest mb-3">Global Export Ready</h4>
                          <p className="text-xs text-eco-gray font-light max-w-xs leading-relaxed">We support FCL/LCL shipments worldwide with custom palletization and labeling for B2B partners.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- MATTRESSES SECTION --- */}
        {activeCategory === 'mattresses' && (
          <div className="space-y-16 animate-slide-up pt-12">
            <div className="bg-eco-beige/30 p-12 rounded flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1505693414956-48c5b7aa4575?auto=format&fit=crop&q=80&w=1000" 
                    alt="Natural Latex Mattress" 
                    className="w-full h-[450px] object-cover rounded-sm shadow-xl" 
                  />
               </div>
               <div className="md:w-1/2">
                  <h3 className="serif-heading text-4xl mb-6 text-eco-green-dark">Sleep with Nature</h3>
                  <p className="text-eco-gray mb-8 leading-relaxed font-light text-lg">
                      Our certified organic mattresses are the cornerstone of a healthy home. Engineered using our proprietary natural latex foam, we offer targeted support via 7-Zone cores and uniform comfort with Mono-Zone designs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                      <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-eco-green-dark"><Check className="w-4 h-4 text-eco-green"/> GOLS Organic</span>
                      <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-eco-green-dark"><Check className="w-4 h-4 text-eco-green"/> Zero Fillers</span>
                      <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-eco-green-dark"><Check className="w-4 h-4 text-eco-green"/> Hypoallergenic</span>
                      <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-eco-green-dark"><Check className="w-4 h-4 text-eco-green"/> Toxin Free</span>
                  </div>
                  <Link to="/contact" className="inline-block bg-eco-green text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-eco-green-dark transition-all shadow-md">
                    Enquiry
                  </Link>
               </div>
            </div>
          </div>
        )}

        {/* --- PILLOWS SECTION --- */}
        {activeCategory === 'pillows' && (
          <div className="space-y-12 animate-slide-up pt-12">
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {['molded', 'hybrid', 'microfiber'].map((type) => (
                <button
                  key={type}
                  onClick={() => setActivePillowTab(type as any)}
                  className={`px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    activePillowTab === type 
                      ? 'bg-eco-green-dark text-white shadow-lg scale-105' 
                      : 'bg-eco-base text-gray-400 hover:bg-gray-200 hover:text-eco-text'
                  }`}
                >
                  {type === 'molded' ? 'Molded Latex' : type === 'hybrid' ? 'Hybrid Blend' : 'Microfiber'}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-10">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="bg-white border border-gray-50 group hover:border-eco-green/20 transition-all shadow-sm">
                    <div className="aspect-square bg-eco-base overflow-hidden">
                       <img src={pillowImages[i-1]} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Pillow" />
                    </div>
                    <div className="p-8">
                       <h4 className="serif-heading text-2xl text-eco-green-dark mb-2">Natural Pillow {i === 1 ? 'Molded' : i === 2 ? 'Hybrid' : 'Contour'}</h4>
                       <p className="text-xs text-eco-gray mb-6 font-light">Designed for optimal neck support and breathability.</p>
                       <Link to="/contact" className="text-[10px] font-bold uppercase tracking-widest text-eco-green inline-flex items-center gap-2">Request Catalog <ArrowRight className="w-3 h-3"/></Link>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* --- UNDER DEVELOPMENT PLACEHOLDERS --- */}
        {['sheets', 'comforters', 'yoga', 'pets'].includes(activeCategory) && (
          <div className="py-24 text-center animate-fade-in pt-12">
             <Layers className="w-16 h-16 text-eco-green/20 mx-auto mb-8" />
             <h2 className="serif-heading text-4xl text-eco-green-dark mb-6">Coming Soon to Global Markets</h2>
             <p className="text-eco-gray max-w-lg mx-auto mb-12 font-light text-lg">Our design team is perfecting our latest sustainable products. For current catalogs and availability in your region, please reach out to our team.</p>
             <Link to="/contact" className="inline-flex items-center gap-3 bg-eco-green text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-eco-green-dark transition-all">
               Request Full Catalog <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        )}

      </div>
    </div>
  );
};
