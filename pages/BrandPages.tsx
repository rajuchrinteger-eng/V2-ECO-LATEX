import React from 'react';
import { Leaf, Droplet, Sun, Wind, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, image }: { title: string, subtitle: string, image: string }) => (
  <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
    </div>
    <div className="relative z-10 text-center text-white px-6">
      <h1 className="serif-heading text-4xl md:text-6xl mb-4">{title}</h1>
      <p className="text-lg font-light tracking-wide max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </div>
);

const Section = ({ title, children, bg = "bg-white" }: { title?: string, children?: React.ReactNode, bg?: string }) => (
  <section className={`py-20 ${bg}`}>
    <div className="container mx-auto px-6 max-w-5xl">
      {title && <h2 className="serif-heading text-3xl text-eco-green-dark mb-10 text-center">{title}</h2>}
      {children}
    </div>
  </section>
);

export const About = () => (
  <div className="animate-fade-in">
    <PageHeader 
      title="About Eco Latex" 
      subtitle="From humble beginnings to global sustainable sleep solutions."
      image="https://picsum.photos/seed/forest/1920/600"
    />
    
    <Section>
      <div className="prose prose-lg mx-auto text-center text-eco-gray">
        <h3 className="text-2xl font-serif text-eco-green-dark mb-6">Our Story</h3>
        <p className="mb-6 leading-relaxed">
          Welcome to Eco Latex, where our journey began in 2010 with a humble team of just 25 dedicated workers. Our mission was clear: to become a leading manufacturer of high-quality latex foam for the organic bedding industry. With a commitment to sustainability and excellence, we set out to create products that not only provide comfort but also promote a healthier planet.
        </p>
        <p className="mb-6 leading-relaxed">
          Over the years, we have evolved into a full-line manufacturer of organic mattresses and bedding products proudly certified by the Global Organic Textile Standard (GOTS) and several other industry standards.
        </p>
        <p className="mb-8 leading-relaxed">
          We take pride in offering 100% private label solutions for businesses seeking to create their own unique sleep products. All our mattresses, covers, and cover components are manufactured exclusively for individual brands, ensuring that your customers receive a personalized experience.
        </p>
      </div>
    </Section>

    {/* Sustainable Technology Section from PDF */}
    <Section title="Sustainable Technology" bg="bg-eco-base">
        <p className="text-center text-eco-gray max-w-3xl mx-auto mb-12">
            Our commitment to sustainability doesn't stop at bedding. We strive to minimize waste, reduce our carbon footprint, and promote ethical labor practices throughout our supply chain using advanced machinery.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-sm group hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-200 mb-4 overflow-hidden rounded">
                    <img src="https://picsum.photos/seed/dryer/400/300" alt="Radio Frequency Dryer" className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
                </div>
                <h4 className="font-bold text-lg text-eco-green-dark mb-2">Radio Frequency Dryer</h4>
                <p className="text-sm text-eco-gray">Uses electromagnetic energy to dry latex cores efficiently from the inside out, significantly reducing energy consumption compared to conventional steam dryers.</p>
            </div>
            
            <div className="bg-white p-6 rounded shadow-sm group hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-200 mb-4 overflow-hidden rounded">
                    <img src="https://picsum.photos/seed/water/400/300" alt="Responsible Water Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
                </div>
                <h4 className="font-bold text-lg text-eco-green-dark mb-2">Responsible Water Management</h4>
                <p className="text-sm text-eco-gray">Advanced treatment plants purify water used in the washing process, allowing for recycling and ensuring zero toxic discharge into the environment.</p>
            </div>

            <div className="bg-white p-6 rounded shadow-sm group hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-200 mb-4 overflow-hidden rounded">
                    <img src="https://picsum.photos/seed/boiler/400/300" alt="Biomass Boiler" className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
                </div>
                <h4 className="font-bold text-lg text-eco-green-dark mb-2">Biomass Boiler</h4>
                <p className="text-sm text-eco-gray">Powered by sustainable biomass fuel sources (like rubber wood waste), reducing our reliance on fossil fuels for thermal energy generation.</p>
            </div>
        </div>
    </Section>

    <Section title="Our Promise">
       <ul className="space-y-4 max-w-2xl mx-auto">
         {['Cleaner sleep environments', 'Healthier rest cycles', 'Sustainable manufacturing', 'Long-lasting comfort', 'Transparent sourcing'].map((item, i) => (
           <li key={i} className="flex items-center gap-3 text-lg text-eco-green-dark">
             <CheckCircle2 className="w-5 h-5 text-eco-green" /> {item}
           </li>
         ))}
       </ul>
    </Section>
  </div>
);

export const Journey = () => (
  <div className="animate-fade-in">
    <PageHeader 
      title="Our Natural Journey" 
      subtitle="From Tree to Mattress: A cycle of sustainability."
      image="https://picsum.photos/seed/rubbertrees/1920/600"
    />
    
    <div className="py-20 container mx-auto px-6">
      <div className="space-y-24">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <span className="text-6xl font-serif text-eco-green/20">01</span>
             <h3 className="text-3xl font-serif text-eco-green-dark mb-4">Latex from Nature</h3>
             <p className="text-eco-gray leading-relaxed">
               Our journey begins in rubber plantations, where natural latex sap is carefully tapped from rubber trees — a renewable resource that regenerates without harming the tree. This milky sap is the foundation of every Eco Latex product.
             </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/sap/600/400" alt="Tapping" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
             <span className="text-6xl font-serif text-eco-green/20">02</span>
             <h3 className="text-3xl font-serif text-eco-green-dark mb-4">Processing & Foam Formation</h3>
             <p className="text-eco-gray leading-relaxed">
               The latex sap is purified and transformed into foam using precision molds. We create both Mono-Zone foam for uniform support and 7-Zone foam for targeted spinal alignment.
             </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/process/600/400" alt="Processing" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <span className="text-6xl font-serif text-eco-green/20">03</span>
             <h3 className="text-3xl font-serif text-eco-green-dark mb-4">Crafting & Delivery</h3>
             <p className="text-eco-gray leading-relaxed">
               Every product is cut, layered, and finished with organic covers. Finished products are compressed or flat-packed and shipped globally using eco-friendly packaging.
             </p>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/mattressmaking/600/400" alt="Manufacturing" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Sustainability = () => (
  <div className="animate-fade-in">
    <PageHeader 
      title="Sustainability & Certifications" 
      subtitle="Committed to the planet and your health."
      image="https://picsum.photos/seed/leaves/1920/600"
    />
    
    <Section title="Our Certifications">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { title: "GOLS", sub: "Global Organic Latex Standard" },
          { title: "GOTS", sub: "Global Organic Textile Standard" },
          { title: "OEKO-TEX", sub: "Standard 100 Class 1" },
          { title: "Eco Lab", sub: "VOC Testing Passed" },
          { title: "PFAS-Free", sub: "Verified Safe" },
          { title: "Fire Safety", sub: "UK BS 7177 & US 16 CFR 1633" },
        ].map((cert, i) => (
          <div key={i} className="border border-gray-200 p-8 flex flex-col items-center justify-center text-center hover:border-eco-green transition-colors">
            <div className="w-16 h-16 bg-eco-base rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-eco-green" />
            </div>
            <h4 className="font-bold text-lg">{cert.title}</h4>
            <p className="text-xs text-eco-gray uppercase tracking-widest mt-2">{cert.sub}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section title="Chemical-Free Manufacturing" bg="bg-eco-base">
       <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white p-4 rounded">
            <span className="text-red-500 font-bold text-xl">✕</span> No VOCs
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded">
            <span className="text-red-500 font-bold text-xl">✕</span> No Harmful Flame Retardants
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded">
            <span className="text-red-500 font-bold text-xl">✕</span> No Synthetic Fillers
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded">
            <span className="text-red-500 font-bold text-xl">✕</span> No Toxic Adhesives
          </div>
       </div>
    </Section>
  </div>
);