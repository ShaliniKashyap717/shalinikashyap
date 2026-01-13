
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/images/logo.png";




const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  {name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      setIsScrolled(scrollTop > 20);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = scrollTop + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 glass-effect backdrop-blur-xl' : 'py-5 bg-transparent'
    }`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between relative">
          <a 
            href="#home" 
            className="text-xl font-display font-semibold tracking-tight relative z-[60] flex items-center"
          >
            <img 
              src={logo}
              alt="SK Logo" 
              className="h-10 w-10 transform rotate-[270deg] rounded-lg object-cover p-1"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center z-[60]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
          
          <div className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center md:hidden transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-xl ${activeSection === link.href.substring(1) ? 'text-primary font-medium' : 'text-foreground/80'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
