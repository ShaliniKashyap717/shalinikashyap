import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MovingBackground from '@/components/MovingBackground';
import CLI from '@/components/CLI';
import PortfolioToggle from '@/components/PortfolioToggle';
import Skills from '@/components/Skills';

const Index: React.FC = () => {
  const [isCLI, setIsCLI] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = "Shalini Kashyap | Portfolio";
    
    // Initialize animation observer
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.animate)');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      
      elements.forEach((element) => {
        observer.observe(element);
      });
    };
    
    // Call once on page load
    setTimeout(animateOnScroll, 100);
    
    // Recheck for new elements occasionally (helpful for dynamic content)
    const interval = setInterval(animateOnScroll, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleToggle = (cliMode: boolean) => {
    setIsCLI(cliMode);
  };
  
  if (isCLI) {
    return (
      <div className="min-h-screen relative">
        <PortfolioToggle isCLI={isCLI} onToggle={handleToggle} isFixed={true} />
        <CLI />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background relative">
      <MovingBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="bg-background">
          <Hero isCLI={isCLI} onToggle={handleToggle} />
        </div>
        <div className="bg-black transition-colors duration-1000">
          <About />
        </div>
        <div className="bg-background transition-colors duration-1000">
          <Projects />
        </div>
        <div className="bg-black transition-colors duration-1000">
          <Skills />
        </div>
        <div className="bg-background transition-colors duration-1000">
          <Timeline />
        </div>
        <div className="bg-[#333333] transition-colors duration-1000">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;