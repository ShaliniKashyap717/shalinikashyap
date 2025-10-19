
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 bg-secondary border-t border-border relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-display font-semibold mb-2">
              Shalini<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground">
              Computer Science Student at NIT Hamirpur
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            {/* <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Shalini Kashyap
            </p> */}
            
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
