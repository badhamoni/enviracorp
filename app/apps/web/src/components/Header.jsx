
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'technologies', 'industries', 'why-enriva', 'process'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Industries', href: '#industries' },
    { name: 'About Us', href: '#why-enriva' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#07142D]/90 backdrop-blur-md border-white/10 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
            <img
              src="/assets/enriva-logo.png"
              alt="Enriva logo"
              className="h-11 w-auto object-contain"
              width="220"
              height="44"
            />
            <span className="hidden sm:inline-flex items-center gap-3 text-white/80 text-[10px] uppercase tracking-[0.55em] leading-tight">
              <span className="h-8 w-px bg-white/25" />
              TALENT. TECHNOLOGY. TRANSFORMATION.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`text-sm font-semibold transition-all duration-200 hover:text-primary ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#07142D] border-white/10">
              <SheetHeader>
                <SheetTitle className="text-white text-left font-extrabold">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={`text-lg font-semibold transition-colors ${
                      activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
