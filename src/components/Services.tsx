
import React from 'react';
import { Monitor, Server, Layout, Code, Search, Database } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GeometricBackground from './GeometricBackground';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Monitor className="w-10 h-10 text-primary" />,
    title: "Web Development",
    description: "Creating responsive websites and web applications with modern technologies like React, Next.js, and Tailwind CSS."
  },
  {
    icon: <Layout className="w-10 h-10 text-primary" />,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and crafting engaging user experiences that look great on all devices."
  },
  {
    icon: <Server className="w-10 h-10 text-primary" />,
    title: "Backend Development",
    description: "Building robust server-side applications with Node.js, Express, and MongoDB to power your web solutions."
  },
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Algorithm Development",
    description: "Creating efficient algorithms and data structures to solve complex computational problems."
  },
  {
    icon: <Database className="w-10 h-10 text-primary" />,
    title: "Database Design",
    description: "Designing and implementing database solutions using MongoDB, SQL, and other technologies."
  },
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "Technical Consulting",
    description: "Providing technical advice and consultation for projects and startups in the tech industry."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#222222]">
      <GeometricBackground />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="section-title text-center text-primary">My Services</h2>
          <p className="section-subtitle text-center mx-auto text-foreground/90">
            High-quality services and solutions I offer
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100} className="h-full">
              <div className="bg-black p-8 rounded-xl h-full border border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-foreground/90">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
