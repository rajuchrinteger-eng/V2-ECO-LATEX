import React from 'react';
import { Factory, Cog, Layers, Box, Globe, Play, CheckCircle, Thermometer, Droplets, Activity } from 'lucide-react';

const PageHeader = ({ title, bg }: { title: string, bg: string }) => (
  <div className="bg-eco-green-dark text-white py-24 text-center">
    <h1 className="serif-heading text-4xl md:text-5xl">{title}</h1>
  </div>
);

const ProcessStep = ({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: React.ReactNode }) => (
  <div className="flex gap-6 items-start group">
    <div className="shrink-0 w-12 h-12 bg-eco-base text-eco-green font-serif text-xl flex items-center justify-center rounded-full group-hover:bg-eco-green group-hover:text-white transition-colors">
      {number}
    </div>
    <div>
      <h3 className="font-bold text-lg text-eco-green-dark mb-2 flex items-center gap-2">
        {title}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-eco-gray">{icon}</span>
      </h3>
      <p className="text-sm text-eco-gray leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const Manufacturing = () => (
  <div className="animate-fade-in">
    <PageHeader title="Manufacturing & Technology" bg="" />
    
    {/* Video Section */}
    <section className="bg-black relative group cursor-pointer">
      <div className="aspect-video max-h-[80vh] w-full overflow-hidden relative">
        {/* Placeholder for actual video file */}
        <video 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          poster="https://picsum.photos/seed/factory/1920/1080" 
          controls
          playsInline
        >
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
             <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      </div>
      <div className="bg-eco-green-dark text-white p-6 text-center">
        <p className="text-sm uppercase tracking-widest">Watch our full production journey: From Plantation to Finished Product</p>
      </div>
    </section>

    <section className="py-20 container mx-auto px-6">
       {/* Facilities Info */}
       <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-serif text-eco-green-dark mb-6">Our Facilities</h2>
            <div className="space-y-6">
              <div className="bg-eco-base p-6 border-l-4 border-eco-green hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">Latex Factory</h3>
                <p className="text-eco-gray text-sm mb-2">Lot 72, Phase III, KEPZ, Katunayake, Sri Lanka</p>
                <p className="text-xs text-eco-green font-bold uppercase tracking-wider">Centrifuging • Foaming • Vulcanization</p>
              </div>
              <div className="bg-eco-base p-6 border-l-4 border-eco-green hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">Value Addition Factory</h3>
                <p className="text-eco-gray text-sm mb-2">42, Old Avissawella Road, Welivita, Sri Lanka</p>
                <p className="text-xs text-eco-green font-bold uppercase tracking-wider">Quilting • Sewing • Packing</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-serif text-eco-green-dark mb-6">Production Overview</h2>
            <p className="text-eco-gray mb-6 leading-relaxed">
              We operate a vertically integrated manufacturing process. Starting from our own rubber plantations (Lalan Rubbers), 
              we control every step of the value chain to ensure purity, consistency, and sustainability.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="border border-gray-100 p-4 rounded text-center">
                  <span className="block text-3xl font-serif text-eco-green mb-1">100%</span>
                  <span className="text-xs text-gray-500 uppercase">Natural Latex</span>
               </div>
               <div className="border border-gray-100 p-4 rounded text-center">
                  <span className="block text-3xl font-serif text-eco-green mb-1">ISO</span>
                  <span className="text-xs text-gray-500 uppercase">Standard Testing</span>
               </div>
            </div>
          </div>
       </div>

       {/* Detailed Process Steps (Deep Research) */}
       <div className="max-w-5xl mx-auto">
         <h2 className="text-center serif-heading text-3xl mb-16 text-eco-green-dark">The Production Process</h2>
         <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <ProcessStep 
              number="01" 
              title="Harvesting & Collection"
              icon={<Droplets className="w-4 h-4"/>}
              desc="Fresh latex sap is tapped from Hevea brasiliensis trees in our own plantations. The sap is collected in cups, transferred to bowsers, and transported immediately to the factory to prevent premature coagulation."
            />
            <ProcessStep 
              number="02" 
              title="Centrifuging & Compounding"
              icon={<Activity className="w-4 h-4"/>}
              desc="Raw latex is centrifuged to remove water and impurities, concentrating the rubber content. It is then mixed with precise, eco-friendly gelling agents in large stainless steel tanks to prepare for foaming."
            />
            <ProcessStep 
              number="03" 
              title="Foaming & Molding"
              icon={<Layers className="w-4 h-4"/>}
              desc="The compound is whipped into a froth (foaming) and poured into aluminum molds with heating pins. The Dunlop process is used to create our Mono-Zone and 7-Zone cores."
            />
            <ProcessStep 
              number="04" 
              title="Vulcanization & Washing"
              icon={<Thermometer className="w-4 h-4"/>}
              desc="The foam is baked (vulcanized) to set its shape. It is then stripped from the mold and goes through an extensive multi-stage washing process to remove residual proteins and soaps."
            />
            <ProcessStep 
              number="05" 
              title="Drying & Testing"
              icon={<CheckCircle className="w-4 h-4"/>}
              desc="Cores are dried using advanced Radio Frequency Dryers for energy efficiency. Every core undergoes rigorous physical testing for density, hardness (ILD), and resilience."
            />
            <ProcessStep 
              number="06" 
              title="Value Addition"
              icon={<Box className="w-4 h-4"/>}
              desc="In our Value Addition Factory, automated quilting machines and skilled sewers craft the final covers. Products are then vacuum rolled or flat packed for global shipment."
            />
         </div>
       </div>
    </section>
  </div>
);

export const CustomB2B = () => (
  <div className="animate-fade-in">
    <PageHeader title="Custom & B2B Solutions" bg="" />
    
    <section className="py-20 container mx-auto px-6 max-w-4xl text-center">
      <p className="text-xl text-eco-gray mb-12">
        Eco Latex partners with global mattress brands, hospitality groups, wellness brands, and retailers to deliver custom sleep solutions.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { title: "OEM / ODM", icon: <Factory className="w-8 h-8"/>, text: "Full manufacturing capabilities for your private label." },
          { title: "Custom Design", icon: <Layers className="w-8 h-8"/>, text: "Custom densities, zoning, and fabric quilting options." },
          { title: "Global Reach", icon: <Globe className="w-8 h-8"/>, text: "Serving hospitality, healthcare, and retail brands worldwide." },
        ].map((s, i) => (
          <div key={i} className="bg-eco-base p-8 rounded hover:shadow-md transition-shadow">
            <div className="text-eco-green mb-4">{s.icon}</div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-eco-gray">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const Packaging = () => (
  <div className="animate-fade-in">
     <PageHeader title="Packaging & Logistics" bg="" />
     <section className="py-20 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="serif-heading text-3xl mb-6">Flexible Shipping Solutions</h2>
          <p className="text-eco-gray mb-8">
            Optimized for retail, export, and ecommerce fulfillment. We ensure your products arrive safely and efficiently.
          </p>
          <ul className="space-y-4">
            {['Flat Pack', 'Rolled Vacuum Pack', 'Polysac (Rice Bags)', 'Corrugated Boxes', 'Wooden Pallets'].map(p => (
              <li key={p} className="flex items-center gap-3 text-lg font-light border-b border-gray-100 pb-2">
                <Box className="w-5 h-5 text-eco-green" /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
           <img src="https://picsum.photos/seed/boxes/800/600" alt="Packaging" className="rounded-lg shadow-lg" />
        </div>
     </section>
  </div>
);