
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Facebook, Twitter, Mail, Globe } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07142D] pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 w-fit">
                <img 
                  src="https://horizons-cdn.hostinger.com/20ca65c8-d3a5-4752-985d-9d132d257b18/6e791480efc8f6a590f5dfa853150b44.png" 
                  alt="Enriva Logo" 
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>
              <span className="text-xs uppercase tracking-widest text-primary mt-3 font-bold">
                Talent. Technology. Transformation.
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Delivering engineering excellence and measurable business impact through cutting-edge technology solutions, quality engineering, and global expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-primary transition-colors text-sm">Industries</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Quality Engineering</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Software Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">DevOps & Cloud</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">AI & Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">IT Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@enrivacorp.com" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  info@enrivacorp.com
                </a>
              </li>
              <li>
                <a href="https://www.enrivacorp.com" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm">
                  <Globe className="w-4 h-4" />
                  www.enrivacorp.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Enriva Corporation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
