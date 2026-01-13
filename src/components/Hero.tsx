import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import PortfolioToggle from './PortfolioToggle';
import Typed from 'typed.js';
import AnimatedHeading from './AnimatedHeading';
import heroImage from "@/assets/images/hero.png";

interface HeroProps {
  isCLI: boolean;
  onToggle: (mode: boolean) => void;
}


const Hero: React.FC<HeroProps> = ({ isCLI, onToggle }) => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, {
        strings: [
          'Full Stack Developer',
          'AI/ML Enthusiast',
          'Competitive Programmer',
          'Open Source Contributor'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        smartBackspace: true
      });
      
      return () => {
        typed.destroy();
      };
    }
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <AnimatedSection className="space-y-6">
              <p className="text-primary inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-medium">
                Computer Science and Engineering Student
              </p>
              
             <AnimatedHeading />
              
              <div className="text-lg md:text-xl text-muted-foreground max-w-xl flex">
                <span className="mr-2">I'm a</span>
                <span ref={typedTextRef} className="text-primary font-medium"></span>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 shadow-button hover:shadow-lg hover:translate-y-[-2px]"
                >
                  Contact Me
                </a>
                
                <a 
                  href="https://drive.google.com/file/d/10vnoyLJLHuYnqANl02cdd8wnNhFRUB_U/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg transition-all duration-300 hover:bg-secondary/80"
                >
                  Download Resume
                </a>
              </div>
              
            <div className="flex items-center gap-6 pt-6">
  <a 
    href="https://github.com/ShaliniKashyap717" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-foreground/70 hover:text-primary transition-colors duration-300"
  >
    <Github size={22} />
  </a>
  <a 
    href="https://www.linkedin.com/in/shalini-kashyap-nith/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-foreground/70 hover:text-primary transition-colors duration-300"
  >
    <Linkedin size={22} />
  </a>
  <div className="ml-4">
    <PortfolioToggle isCLI={isCLI} onToggle={onToggle} />
  </div>
</div>

            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5">
            <AnimatedSection delay={300} className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/40 animate-pulse-soft" />
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="Shalini Kashyap" 
                    className="w-full h-full object-cover object-center rounded-xl" 
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-sm" />
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
          <ChevronDown size={20} className="animate-bounce text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;