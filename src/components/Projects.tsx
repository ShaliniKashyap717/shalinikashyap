
import React, { useState } from 'react';
import { ExternalLink, Github, Grid3x3, RotateCcw } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: "WanderWise",
    description: "WanderWise is a travel companion application that enhances user experiences by incorporating real-time data analysis and social connectivity. It enables users to share their live locations, find ideal meeting points, and track their travel insights dynamically.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Botpress", "JWT Tokens", "NumPy", "Pandas", "Matplotlib", "Chart.js", "Scikit-learn"],
    links: { github: "https://github.com/ShaliniKashyap717/TIWiSE" }
  },
  {
    title: "BreatheSafe",
    description: "BreatheSafe is a platform that monitors real-time air quality, predicts health risks using ML, detects pollution anomalies, and sends AI-generated environmental reports with actionable insights.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    tech: ["MERN Stack", "Flask", "Streamlit", "scikit-learn", "Langchain.js", "Botpress"],
    links: { github: "https://github.com/ShaliniKashyap717/breatheSafe" }
  },
  {
    title: "SmartParkr",
    description: "SmartParkr is a real-time dynamic parking pricing system that simulates live parking data, calculates dynamic prices based on occupancy/demand, and visualizes trends using Bokeh. Built with Pathway for real-time streaming and Pandas for data transformation.",
    image: "https://images.unsplash.com/photo-1563720227542-2cc4bb8c3c2e?w=600&h=400&fit=crop",
    tech: ["Pathway", "Bokeh", "Panel", "Pandas", "NumPy", "Python"],
    links: { github: "https://github.com/ShaliniKashyap717/SmartParkr" }
  },
  {
    title: "MoodBloom",
    description: "MoodBloom is a mental health application that helps users track their mood and emotions and give AI-powered guidance.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    tech: ["MongoDb", "ExpressJs", "ReactJs", "NodeJs", "Gemini API", "JWT Tokens", "EJS", "D3.js"],
    links: { github: "https://github.com/ShaliniKashyap717/moodbloom" }
  },
  {
    title: "DualCare",
    description: "DualCare is an AI-powered, voice-first mental health companion for teenagers and senior citizens. Features include mood detection, empathetic check-ins, and music therapy suggestions using Spotify API.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    tech: ["OmniDimension", "Node.js", "LangChainJS", "React.js", "TypeScript", "Spotify API"],
    links: { github: "https://github.com/ShaliniKashyap717/DualCare" }
  },
  {
    title: "SolvAI",
    description: "SolvAI is a Streamlit-powered app that predicts molecular solubility (logS) using curated chemical descriptors and a Logistic Regression model. Designed for researchers in chemistry and drug discovery.",
    image: "https://images.unsplash.com/photo-1532634734-2a27c3b4e14b?w=600&h=400&fit=crop",
    tech: ["Python", "scikit-learn", "Streamlit", "Logistic Regression"],
    links: { github: "https://github.com/ShaliniKashyap717/SolvAI" }
  },
  {
    title: "Task Management Software",
    description: "A comprehensive task management application built with React JS and styled with Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    tech: ["React JS", "Tailwind CSS", "Font Awesome"],
    links: {
      github: "https://github.com/ShaliniKashyap717/To-DO-list",
      live: "https://mytaskmanagementsoftware.netlify.app/"
    }
  },
  {
    title: "E-bookstore",
    description: "A full-stack e-commerce web application built with the MERN stack, offering seamless book browsing, cart management, and secure checkout experience.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    tech: ["MongoDB", "Express.js", "React JS", "Node.js"],
    links: { github: "https://github.com/ShaliniKashyap717/ecommerce_web_app" }
  },
  {
    title: "SenioScan",
    description: "SenioScan predicts whether an individual is a senior citizen (65+) using health, lifestyle, and clinical data from the NHANES dataset. Extended into a Streamlit application for real-world healthcare screening use cases.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    tech: ["Python", "Streamlit", "XGBoost", "Random Forest", "CatBoost", "SVM", "AdaBoost", "Pandas", "GridSearchCV"],
    links: { github: "https://github.com/ShaliniKashyap717/SenioScan" }
  },
  {
    title: "BidBuddy",
    description: "BidBuddy is a real-time, voice-driven auction platform with AI-powered bidding suggestions, auto-bid support, and a live dashboard. Built using Next.js, Express.js, and OmniDimension for natural voice commands.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    tech: ["Next.js", "TypeScript", "Express.js", "Socket.io", "OmniDimension", "MongoDB", "Chart.js"],
    links: { github: "https://github.com/ShaliniKashyap717/BidBuddy" }
  },
  {
    title: "Drumkit",
    description: "A virtual drumkit application that provides an interactive musical experience through the browser.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { github: "https://github.com/ShaliniKashyap717/Drumkit" }
  }
];


const Projects: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const toggleTechStack = (projectIndex: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectIndex)) {
      newExpanded.delete(projectIndex);
    } else {
      newExpanded.add(projectIndex);
    }
    setExpandedProjects(newExpanded);
  };

  const renderProjectCard = (project: Project, index: number) => (
    <Card className="bg-gradient-to-br from-secondary/80 to-secondary/60 backdrop-blur-md border-primary/20 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-primary/60 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/60 backdrop-blur-md rounded-full hover:bg-primary/80 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/60 backdrop-blur-md rounded-full hover:bg-primary/80 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl text-primary group-hover:text-primary/90 transition-colors text-center">
          {project.title}
        </CardTitle>
        <CardDescription className="text-foreground/70 text-sm md:text-base leading-relaxed text-center">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {(expandedProjects.has(index) ? project.tech : project.tech.slice(0, 5)).map((tech, i) => (
            <span key={i} className="text-xs py-1 px-3 bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <button
              onClick={() => toggleTechStack(index)}
              className="text-xs py-1 px-3 bg-muted/30 text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer backdrop-blur-sm"
            >
              {expandedProjects.has(index) 
                ? 'Show less' 
                : `+${project.tech.length - 5} more`
              }
            </button>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 gap-4 justify-center">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors font-medium"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Aesthetic Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="section-title text-primary mb-4">My Projects</h2>
              <p className="section-subtitle text-foreground/90 max-w-2xl mx-auto">
                Showcasing innovative solutions through modern web applications
              </p>
            </div>
          </AnimatedSection>

          {/* Toggle Button */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 p-1 bg-secondary/60 backdrop-blur-md rounded-full border border-primary/20">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  viewMode === 'carousel' 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
                <span className="text-sm font-medium">Carousel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
                <span className="text-sm font-medium">Grid</span>
              </button>
            </div>
          </div>

          <AnimatedSection delay={200}>
            {viewMode === 'carousel' ? (
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent className="ml-0">
                  {projects.map((project, index) => (
                    <CarouselItem key={index} className="pl-0 basis-full">
                      <div className="px-2 md:px-4 max-w-2xl mx-auto">
                        {renderProjectCard(project, index)}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Custom Enhanced Arrow Buttons */}
                <CarouselPrevious className="hidden md:flex -left-16 w-16 h-16 bg-gradient-to-r from-primary/20 to-pink-500/20 backdrop-blur-md border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/30 transition-all duration-300 hover:scale-110 rounded-full shadow-lg hover:shadow-primary/20" />
                <CarouselNext className="hidden md:flex -right-16 w-16 h-16 bg-gradient-to-r from-primary/20 to-pink-500/20 backdrop-blur-md border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/30 transition-all duration-300 hover:scale-110 rounded-full shadow-lg hover:shadow-primary/20" />
              </Carousel>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                  <div key={index} className="w-full">
                    {renderProjectCard(project, index)}
                  </div>
                ))}
              </div>
            )}
          </AnimatedSection>

          {/* Bottom Decorative Elements */}
          <div className="flex justify-center mt-16 space-x-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-pink-500/20 backdrop-blur-md animate-float" style={{animationDelay: '0s'}}></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-primary/20 backdrop-blur-md animate-float" style={{animationDelay: '1s'}}></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-md animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
