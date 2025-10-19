import React, { useRef, useEffect } from 'react';
import { GraduationCap, Calendar, Award, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  startDate: Date; // Added for sorting
  description: string;
  icon: React.ReactNode;
  type: 'education' | 'achievement' | 'experience';
}

const timelineItems: TimelineItem[] = [
  {
  title: "Top 6 out of 800+ teams in AlgoVerse Hackathon by IGDTUW-HackWithIndia",
  subtitle: "IGDTUW - HackWithIndia",
  date: "Jul 2025",
  startDate: new Date(2024, 6), // July 2024
  description: "Built an innovative solution in a competitive environment, demonstrating strong problem-solving, coding skills, and teamwork. Ranked among the top 6 teams out of 800+ participants nationwide.",
  icon: <Award className="w-4 h-4 text-white" />,
  type: 'achievement',
  emoji: "🏆",
},
{
  title: "Top 9.4% Rated Competitive Programmer (1758 Rating) on LeetCode",
  subtitle: "LeetCode & Competitive Programming",
  date: "Jun 2025",
  startDate: new Date(2025, 5), // June 2025
  description: "Achieved a 1758 rating on LeetCode, ranking in the top 9.4%. Solved 500+ problems across platforms including LeetCode, CodeChef, GeeksforGeeks, and Codeforces, strengthening problem-solving and algorithmic skills.",
  icon: <Award className="w-4 h-4 text-white" />,
  type: "achievement",
  emoji: "👩‍💻",
},


  {
    title: "Finalist (Top 4) in WiSE (Women in Software Engineering) hackathon by Texas Instruments",
    subtitle: "Texas Instruments",
    date: "Mar 2025 - Apr 2025",
    startDate: new Date(2025, 2),
    description: "Selected as one of the top 26 girls from over 10,000 applicants nationwide in the prestigious Women in Software Engineering (WiSE) Hackathon, organized by Texas Instruments after clearing three rigorous rounds. Received internship offer from Texas Instruments on excellent performance in WiSE Program",
    icon: <Award className="w-4 h-4 text-white" />,
    type: 'achievement',
    emoji: "💪",
  },
  {
    title: "Social Winter of Code (SWOC)",
    subtitle: "Open Source Contributor",
    date: "Jan 2025 - Feb 2025",
    startDate: new Date(2025, 0),
    description: "Enhanced UI/UX, fixed critical bugs, and implemented new features across 3 open-source projects, earning positive feedback from maintainers. Optimized front-end performance and refined interfaces to improve functionality and user experience.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    type: 'experience',
    emoji: "🔥",

  },
  {
    title: "AppTeam NITH",
    subtitle: "Coordinator",
    date: "Nov 2024 - Present",
    startDate: new Date(2024, 10),
    description: "Designed and developed the official Techfest app's UI/UX in Figma, aligning with event goals and user needs. Built a web app for the core club as part of the web team, using ReactJS to improve functionality and UX. Contributed to the Hack on Hills website, used for sponsor outreach and helping achieve 1000+ registrations.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    type: 'experience',
    emoji: "🚀",

  },
  {
    title: "Girlscript Summer of Code",
    subtitle: "Open Source Contributor",
    date: "Oct 2024 - Nov 2024",
    startDate: new Date(2024, 9),
    description: "Contributed to open-source projects, enhancing coding skills and teamwork. Participated in the Postman Challenge.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    type: 'experience',
    emoji: "💻",

  },
  {
    title: "Team .EXE, NIT Hamirpur",
    subtitle: "Volunteer Member",
    date: "Jan 2024 – Nov 2024",
    startDate: new Date(2024, 0),
    description: "Volunteered in the CSE departmental club, learning resume building in Overleaf, graphic design in Adobe Illustrator, and UI/UX in Figma. Contributed by pitching senior projects during the techfest, and handled art & craft work including banners and stall decoration.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    type: "experience",
    emoji: "🎨",
 
  },
  {
  title: "Class Representative",
  subtitle: "NIT Hamirpur",
  date: "Aug 2023 - Sept 2024",
  startDate: new Date(2023, 7), // August 2023
  description: "Represented a class of 120+ students, strengthening my leadership, team collaboration, and conflict resolution skills by coordinating with faculty, addressing student concerns, and ensuring smooth communication.",
  icon: <Briefcase className="w-4 h-4 text-white" />, 
  type: "experience",
  emoji: "🧑‍🤝‍🧑",
},

  {
    title: "National Institute of Technology Hamirpur",
    subtitle: "B.Tech - Computer Science and Engineering",
    date: "Aug 2023 - Jun 2027",
    startDate: new Date(2023, 7),
    description: "Currently pursuing my Bachelor's degree in Computer Science and Engineering with a CGPA of 8.91 (till 4th semester).",
    icon: <GraduationCap className="w-4 h-4 text-white" />,
    type: 'education',
    emoji: "🎓",

  },
  {
    title: "Top Rank in JEE Mains 2023",
    subtitle: "Academic Achievement",
    date: "2023",
    startDate: new Date(2023, 0),
    description: "Achieved a top 2.3% rank nationwide in JEE Mains 2023, one of the most competitive engineering entrance exams in India.",
    icon: <Award className="w-4 h-4 text-white" />,
    type: 'achievement',
    emoji: "🏆",

  },
 {
  title: "Govt. Model Sr. Sec. School, Nirmand",
  subtitle: "Intermediate - Science",
  date: "May 2021 - Mar 2023",
  startDate: new Date(2021, 4),
  description: "Completed my intermediate education with 92.6% in Science stream. Achieved State Rank 31 and topped my school in Class 12 board examinations.",
  icon: <GraduationCap className="w-4 h-4 text-white" />,
  type: 'education',
  emoji: "🧪",
},
{
  title: "10th Board Examinations (HPBOSE)",
  subtitle: "Matriculation",
  date: "Apr 2021",
  startDate: new Date(2021, 3), // March 2021
  description: "Secured State Rank 1 with a perfect 100% score in Himachal Pradesh Board of School Education Class 10 (Matriculation) examinations.",
  icon: <GraduationCap className="w-4 h-4 text-white" />,
  type: 'education',
  emoji: "📚",
},

  {
    title: "Always at the Top",
    subtitle: "Consistently Ranked First in Class",
    date: "Throughout School Years",
    startDate: new Date(2015, 0),
    description: "Consistently achieved the top rank in class throughout school years, never settling for second place.",
    icon: <Award className="w-4 h-4 text-white" />,
    type: 'achievement',
    emoji: "👑",
   
  }
];


// Sort items by start date, newest first
const sortedTimelineItems = [...timelineItems].sort((a, b) => 
  b.startDate.getTime() - a.startDate.getTime()
);

// Generate varied animations for each item
const getAnimationProps = (index: number) => {
  const animations = [
    { x: -300, y: -50, rotate: -20, scale: 0.8 }, // slide from left with tilt
    { x: 300, y: 50, rotate: 15, scale: 0.9 },   // slide from right
    { x: -250, y: 100, rotate: -10, scale: 0.7 }, // slide from bottom-left
    { x: 200, y: -80, rotate: 25, scale: 0.85 },  // slide from top-right
    { x: -400, y: 0, rotate: -30, scale: 0.6 },   // slide from far left
    { x: 0, y: -200, rotate: 0, scale: 0.5 },     // slide from top
    { x: -150, y: 150, rotate: -45, scale: 0.8 }, // slide from bottom-left diagonal
    { x: 350, y: -100, rotate: 35, scale: 0.9 },  // slide from top-right far
    { x: -500, y: 50, rotate: -25, scale: 0.7 },  // slide from far left
    { x: 100, y: 200, rotate: 20, scale: 0.6 }    // slide from bottom-right
  ];
  
  return animations[index % animations.length];
};

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, entryIndex) => {
          if (entry.isIntersecting) {
            // Staggered animation with random delay
            const delay = Math.random() * 200 + (entryIndex * 100);
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px -50px 0px'
      }
    );
    
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => observer.observe(item));
    }
    
    return () => {
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);
  
  const getIconBackground = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500';
      case 'achievement':
        return 'bg-green-500';
      case 'experience':
        return 'bg-purple-500';
      default:
        return 'bg-primary';
    }
  };
  
  return (
    <section id="timeline" className="section-padding relative overflow-hidden bg-black">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="section-title text-center text-primary">My Journey</h2>
          <p className="section-subtitle text-center mx-auto text-foreground/90">
            A chronological view of my academic and professional path
          </p>
        </AnimatedSection>
        
        <div className="flex justify-center gap-6 mt-6 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-foreground">Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-foreground">Achievement</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-foreground">Experience</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto relative" ref={timelineRef}>
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-primary/20 transform md:-translate-x-px"></div>
          
          {sortedTimelineItems.map((item, index) => {
            const animProps = getAnimationProps(index);
            return (
              <div 
                key={index} 
                className="timeline-item relative mb-12 md:mb-16 last:mb-0"
                style={{
                  transform: `translateX(${animProps.x}px) translateY(${animProps.y}px) rotate(${animProps.rotate}deg) scale(${animProps.scale})`,
                  opacity: 0,
                  transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <div className={`timeline-dot ${getIconBackground(item.type)} absolute left-4 md:left-1/2 top-2 transform -translate-x-1/2 z-10`}>
                  {item.icon}
                </div>
                
                <div className={`flex ${index % 2 === 0 ? 'md:justify-start md:pr-1/2' : 'md:justify-end md:pl-1/2'} ml-12 md:ml-0`}>
                  <div className={`timeline-card-content p-4 md:p-6 bg-secondary rounded-xl border border-primary/20 shadow-sm w-full md:max-w-md transition-all duration-500 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-2 text-sm text-primary font-medium mb-3 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground leading-tight">{item.title}</h3>
                    <p className="text-foreground/80 mb-3 text-sm md:text-base">{item.subtitle}</p>
                    <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
