
import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Review {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Professor, NIT Hamirpur",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    text: "Shalini is an exceptional student who consistently demonstrates remarkable aptitude in computer science concepts. Her problem-solving skills and dedication to learning set her apart from her peers.",
    rating: 5
  },
  {
    name: "Ankit Sharma",
    role: "Mentor, AppTeam NITH",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    text: "Working with Shalini on the Techfest app was a pleasure. Her UI/UX designs were not only visually appealing but also intuitive and user-friendly. She has a natural talent for understanding user needs.",
    rating: 5
  },
  {
    name: "Priya Gupta",
    role: "Open Source Maintainer, SWOC",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    text: "Shalini's contributions to our project have been invaluable. She identified and fixed critical bugs while also implementing new features that enhanced the overall functionality. Her code is clean, well-documented, and follows best practices.",
    rating: 4
  },
  {
    name: "Rahul Verma",
    role: "Project Partner",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    text: "I had the opportunity to collaborate with Shalini on a web development project. Her technical skills are impressive, and she has a keen eye for detail. She's also a great team player who communicates effectively.",
    rating: 5
  }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  
  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };
  
  return (
    <section id="reviews" className="section-padding relative overflow-hidden bg-[#1A1F2C]">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="section-title text-center text-primary">Client Reviews</h2>
          <p className="section-subtitle text-center mx-auto text-foreground/90">
            What people say about my work and collaborations
          </p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="absolute top-10 left-0 text-primary/10">
            <Quote className="w-24 h-24" />
          </div>
          
          <div className="relative z-10">
            <div className="transition-all duration-500 transform">
              <AnimatedSection key={currentIndex} className="px-4">
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 md:p-10 glass-card border border-primary/20">
                  <div className="flex justify-center mb-6">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {[...Array(5 - reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i + reviews[currentIndex].rating} className="w-5 h-5 text-yellow-200" />
                    ))}
                  </div>
                  
                  <p className="text-center text-lg md:text-xl italic text-foreground mb-8">
                    "{reviews[currentIndex].text}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-primary">
                      <img 
                        src={reviews[currentIndex].image} 
                        alt={reviews[currentIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-lg text-primary">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-foreground/80">{reviews[currentIndex].role}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevReview}
                className="p-3 rounded-full bg-black/50 border border-primary/20 hover:bg-primary/10 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextReview}
                className="p-3 rounded-full bg-black/50 border border-primary/20 hover:bg-primary/10 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
