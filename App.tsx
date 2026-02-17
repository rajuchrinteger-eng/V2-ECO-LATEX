import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Truck, UserCheck, Phone, ChevronRight, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { Home } from './pages/Home';
import { About, Journey, Sustainability } from './pages/BrandPages';
import { Manufacturing, Packaging, CustomB2B } from './pages/OperationsPages';
import { Products } from './pages/Products';
import { Contact, DealerInquiry } from './pages/ContactPages';

// --- Shared Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

interface NavLinkProps {
  to: string;
  children?: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
  colorClass?: string;
  hoverClass?: string;
  activeClass?: string;
}

const NavLink = ({ 
  to, 
  children, 
  onClick, 
  mobile = false,
  colorClass = 'text-eco-text',
  hoverClass = 'hover:text-eco-green',
  activeClass = 'text-eco-green'
}: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        transition-colors duration-300 font-medium tracking-wide
        ${mobile 
          ? 'block text-2xl py-2 border-b border-eco-sand/30 text-eco-text hover:text-eco-green' 
          : `text-sm uppercase ${isActive ? activeClass : colorClass} ${hoverClass}`
        }
      `}
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pages where the navbar sits on top of a dark/image header
  const darkHeaderPages = ['/', '/about', '/journey', '/manufacturing', '/sustainability', '/custom-b2b', '/packaging'];
  const hasDarkHeader = darkHeaderPages.includes(location.pathname);

  // Determine styles based on state
  const isTransparent = !scrolled && hasDarkHeader;

  const navColor = isTransparent ? 'text-white' : 'text-eco-text';
  const navHover = isTransparent ? 'hover:text-eco-beige' : 'hover:text-eco-green';
  const navActive = isTransparent ? 'text-eco-beige' : 'text-eco-green';
  
  const menuIcon = isTransparent ? 'text-white' : 'text-eco-green-dark';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center h-16 md:h-20">
        {/* Logo - h-12 on mobile, h-16 on desktop to be large without breaking padding */}
        <Link to="/" className="flex items-center group">
          <img 
            src="https://superb-moccasin-plat1phm0l.edgeone.app/ecolatexlogo%20(1)s.png" 
            alt="ECO LATEX Logo" 
            className={`h-12 md:h-16 w-auto transition-all duration-300 object-contain ${isTransparent ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/" colorClass={navColor} hoverClass={navHover} activeClass={navActive}>Home</NavLink>
          <NavLink to="/about" colorClass={navColor} hoverClass={navHover} activeClass={navActive}>About</NavLink>
          <NavLink to="/products" colorClass={navColor} hoverClass={navHover} activeClass={navActive}>Products</NavLink>
          <NavLink to="/manufacturing" colorClass={navColor} hoverClass={navHover} activeClass={navActive}>Manufacturing</NavLink>
          <NavLink to="/sustainability" colorClass={navColor} hoverClass={navHover} activeClass={navActive}>Sustainability</NavLink>
          <NavLink to="/contact" colorClass={navColor} hoverClass={navHover} activeClass={navActive}>Contact</NavLink>
          <Link to="/dealer-inquiry" className="bg-eco-green hover:bg-eco-green-dark text-white text-xs uppercase tracking-widest px-5 py-3 rounded transition-colors">
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(true)} className={`lg:hidden transition-colors ${menuIcon}`}>
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-[#F9F8F6] z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-eco-green-dark">
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col px-10 gap-4 mt-8">
           <NavLink to="/" mobile onClick={() => setIsOpen(false)}>Home</NavLink>
           <NavLink to="/about" mobile onClick={() => setIsOpen(false)}>About</NavLink>
           <NavLink to="/journey" mobile onClick={() => setIsOpen(false)}>Our Journey</NavLink>
           <NavLink to="/products" mobile onClick={() => setIsOpen(false)}>Products</NavLink>
           <NavLink to="/manufacturing" mobile onClick={() => setIsOpen(false)}>Manufacturing</NavLink>
           <NavLink to="/sustainability" mobile onClick={() => setIsOpen(false)}>Sustainability</NavLink>
           <NavLink to="/custom-b2b" mobile onClick={() => setIsOpen(false)}>B2B Solutions</NavLink>
           <NavLink to="/contact" mobile onClick={() => setIsOpen(false)}>Contact</NavLink>
           <div className="mt-8">
              <Link to="/dealer-inquiry" onClick={() => setIsOpen(false)} className="block text-center w-full bg-eco-green text-white py-4 text-sm uppercase tracking-widest">
                Become a Dealer
              </Link>
           </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-eco-green-dark text-white/80 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img 
                 src="https://superb-moccasin-plat1phm0l.edgeone.app/ecolatexlogo%20(1)s.png" 
                 alt="ECO LATEX Logo" 
                 className="h-14 w-auto object-contain brightness-0 invert"
               />
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              Naturally crafted latex sleep systems from Sri Lanka. Designed for healthier sleep, sustainable living, and long-lasting comfort.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/journey" className="hover:text-white transition-colors">Our Journey</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/packaging" className="hover:text-white transition-colors">Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Business</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/custom-b2b" className="hover:text-white transition-colors">Custom & B2B</Link></li>
              <li><Link to="/dealer-inquiry" className="hover:text-white transition-colors">Dealer Inquiry</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-sm font-light">
              <p className="flex items-start gap-3">
                <Truck className="w-4 h-4 mt-1 shrink-0" />
                <span>
                  Lalan Eco-Latex<br/>
                  Lot 72, Phase III, KEPZ<br/>
                  Katunayake, Sri Lanka
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@ecolatex.com" className="hover:text-white">info@ecolatex.com</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+94 11 234 5678</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Eco Latex. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- App Root ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-eco-text">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/products" element={<Products />} />
            <Route path="/custom-b2b" element={<CustomB2B />} />
            <Route path="/packaging" element={<Packaging />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dealer-inquiry" element={<DealerInquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
