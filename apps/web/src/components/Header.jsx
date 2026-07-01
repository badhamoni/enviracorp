
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Logo from '@/components/Logo.jsx';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'technologies', 'industries', 'why-enriva', 'process', 'contact'];
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const titles = {
      home: 'Home',
      services: 'Services',
      technologies: 'Technologies',
      industries: 'Industries',
      'why-enriva': 'About Us',
      process: 'Process',
      contact: 'Contact Us',
    };
    document.title = `Enriva | ${titles[activeSection] || 'Enriva'}`;
  }, [activeSection]);

  const navLinks = [
    { name: 'Home', href: '#home', type: 'anchor' },
    { name: 'Services', href: '#services', type: 'anchor' },
    { name: 'Technologies', href: '#technologies', type: 'anchor' },
    { name: 'Industries', href: '#industries', type: 'anchor' },
    { name: 'About Us', href: '#why-enriva', type: 'anchor' },
    { name: 'Contact Us', href: '#contact', type: 'anchor' },
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
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              const homeElement = document.getElementById('home');
              if (homeElement) {
                homeElement.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setActiveSection('home');
            }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
          >
            <Logo showTagline={true} size={48} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold transition-all duration-200 hover:text-primary ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-white/70 border-b-2 border-transparent pb-1'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`text-sm font-semibold transition-all duration-200 hover:text-primary ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-white/70 border-b-2 border-transparent pb-1'
                  }`}
                >
                  {link.name}
                </a>
              )
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
                  link.type === 'route' ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`text-lg font-semibold transition-colors ${
                        activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
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
                  )
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
