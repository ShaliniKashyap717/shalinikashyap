
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { toast } from "@/hooks/use-toast";
import GeometricBackground from './GeometricBackground';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulating form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <GeometricBackground />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="section-title text-center text-primary">Contact Me</h2>
          <p className="section-subtitle text-center mx-auto text-foreground/90">
            Let's connect and discuss your projects
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <div className="bg-black/70 p-6 rounded-xl border border-primary/20 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-full text-primary mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:shalinikashyap717@gmail.com" 
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      shalinikashyap717@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-full text-primary mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-foreground/80">Nirmand, Himachal Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-full text-primary mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-foreground/80">+917807023557</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
  <h4 className="font-medium mb-3 text-foreground">Find me on</h4>
  <div className="flex gap-4">
    <a 
      href="https://github.com/ShaliniKashyap717" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2.5 bg-black/50 rounded-full text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all"
      aria-label="GitHub"
    >
      <Github className="w-5 h-5" />
    </a>
    <a 
      href="https://www.linkedin.com/in/shalini-kashyap-nith/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2.5 bg-black/50 rounded-full text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-5 h-5" />
    </a>
    <a 
      href="https://leetcode.com/ShaliniKashyap717/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2.5 bg-black/50 rounded-full text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all"
      aria-label="LeetCode"
    >
      <ExternalLink className="w-5 h-5" />
    </a>
  </div>
</div>

            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-3" delay={200}>
            <div className="bg-black/70 p-6 md:p-8 rounded-xl border border-primary/20 shadow-sm backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-6 text-primary">Send Me a Message</h3>
              
              <form action="https://formspree.io/f/xrblkgga" method="POST" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-black/50 text-foreground"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-black/50 text-foreground"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-black/50 text-foreground"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none bg-black/50 text-foreground"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
