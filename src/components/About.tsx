
import React from 'react';
import { Mail, MapPin, Award, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full -translate-y-1/2 blur-3xl" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="section-title text-center text-primary">About Me</h2>
          <p className="section-subtitle text-center mx-auto text-foreground/90">
            Get to know more about my background and achievements
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <AnimatedSection className="relative">
              <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/30 to-primary/20" />
                <div className="absolute inset-[3px] rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/e413134c-73c6-4f19-9b15-4a1bec0bb2c6.png" 
                    alt="Shalini Kashyap" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-7">
            <AnimatedSection delay={200} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary">
                Computer Science Student from Himachal Pradesh
              </h3>
              
              <p className="text-foreground/90">
                I'm a dedicated Computer Science student at NIT Hamirpur with a passion for web development and problem-solving. With a strong academic foundation and practical experience in various technologies, I strive to create impactful digital solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-foreground/70">shalinikashyap717@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-foreground/70">Nirmand, Himachal Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Study</p>
                    <p className="text-sm text-foreground/70">B.Tech in Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Degree</p>
                    <p className="text-sm text-foreground/70">National Institute of Technology</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 space-y-4">
                <h4 className="text-xl font-medium text-primary">Education</h4>
                
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-secondary shadow-sm border border-primary/20">
                    <p className="text-sm text-primary font-medium">Aug 2023 - Jun 2027</p>
                    <h5 className="font-medium mt-1 text-foreground">B.Tech - Computer Science and Engineering</h5>
                    <p className="text-sm text-foreground/70">National Institute of Technology Hamirpur</p>
                    <p className="text-sm font-medium mt-1 text-foreground/90">CGPA: 8.91</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-secondary shadow-sm border border-primary/20">
                    <p className="text-sm text-primary font-medium">May 2021 - Mar 2023</p>
                    <h5 className="font-medium mt-1 text-foreground">Intermediate - Science</h5>
                    <p className="text-sm text-foreground/70">Govt. Model Sr. Sec. School Nirmand</p>
                    <p className="text-sm font-medium mt-1 text-foreground/90">Percentage: 92.6%</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
