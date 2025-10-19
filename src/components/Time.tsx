
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
    title: "Top 4 Finalist in WiSE (Women in Software Engineering) hackathon",
    subtitle: "Texas Instruments",
    date: "Mar 2025 - Apr 2025",
    startDate: new Date(2025, 2), // Feb 2025
    description: "Selected as one of the top 26 girls from over 10,000 applicants nationwide in the prestigious Women in Software Engineering (WiSE) Hackathon, organized by Texas Instruments after clearing two rounds of Online Assesment and Virtual Hackathon.",
    icon: <Award className="w-3 h-3 text-white" />,
    type: 'achievement'
  },
  {
    title: "Social Winter of Code (SWOC)",
    subtitle: "Open Source Contributor",
    date: "Jan 2025 - Feb 2025",
    startDate: new Date(2025, 0), // Jan 2025
    description: "Enhanced UI/UX, fixed critical bugs, and implemented new features across 3 open-source projects, earning positive feedback from maintainers. Optimized front-end performance and refined interfaces to improve functionality and user experience.",
    icon: <Briefcase className="w-3 h-3 text-white" />,
    type: 'experience'
  },
  {
    title: "AppTeam NITH",
    subtitle: "Executive Member",
    date: "Nov 2024 - Present",
    startDate: new Date(2024, 10), // Nov 2024
    description: "Designed and developed the official Techfest app's UI/UX in Figma, aligning with event goals and user needs. Built a web app for the core club as part of the web team, using ReactJS to improve functionality and UX. Contributed to the Hack on Hills website, used for sponsor outreach and helping achieve 1000+ registrations.",
    icon: <Briefcase className="w-3 h-3 text-white" />,
    type: 'experience'
  },
  {
    title: "Girlscript Summer of Code",
    subtitle: "Open Source Contributor",
    date: "Oct 2024 - Nov 2024",
    startDate: new Date(2024, 9), // Oct 2024
    description: "Contributed to open-source projects, enhancing coding skills and teamwork. Participated in the Postman Challenge.",
    icon: <Briefcase className="w-3 h-3 text-white" />,
    type: 'experience'
  },
  {
  title: "Team .EXE, NIT Hamirpur",
  subtitle: "Volunteer Member",
  date: "Jan 2024 – Nov 2024",
  startDate: new Date(2024, 0), // Jan 2025
  description: "Volunteered in the CSE departmental club, learning resume building in Overleaf, graphic design in Adobe Illustrator, and UI/UX in Figma. Contributed by pitching senior projects during the techfest, and handled art & craft work including banners and stall decoration.",
  icon: <Briefcase className="w-3 h-3 text-white" />,
  type: "experience"
},
{
  title: "Class Representative",
  subtitle: "National Institute of Technology Hamirpur",
  date: "Aug 2023 - Aug 2024",
  startDate: new Date(2023, 7), // Aug 2023
  description: "Elected as the Class Representative for the CSE batch, demonstrating strong leadership and communication skills by acting as a bridge between faculty and students, organizing meetings, and addressing academic and administrative concerns effectively.",
  icon: <Briefcase className="w-3 h-3 text-white" />, // You can use any relevant icon here
  type: "experience"
},


  {
    title: "National Institute of Technology Hamirpur",
    subtitle: "B.Tech - Computer Science and Engineering",
    date: "Aug 2023 - Jun 2027",
    startDate: new Date(2023, 7), // Aug 2023
    description: "Currently pursuing my Bachelor's degree in Computer Science and Engineering with a CGPA of 8.87.",
    icon: <GraduationCap className="w-3 h-3 text-white" />,
    type: 'education'
  },
  {
    title: "Top Rank in JEE Mains 2023",
    subtitle: "Academic Achievement",
    date: "2023",
    startDate: new Date(2023, 0), // Jan 2023 (approximate)
    description: "Achieved a top 2.5% rank nationwide in JEE Mains 2023, one of the most competitive engineering entrance exams in India.",
    icon: <Award className="w-3 h-3 text-white" />,
    type: 'achievement'
  },
  {
    title: "Govt. Model Sr. Sec. School Nirmand",
    subtitle: "Intermediate - Science",
    date: "May 2021 - Mar 2023",
    startDate: new Date(2021, 4), // May 2021
    description: "Completed my intermediate education with 92.6% in Science stream.",
    icon: <GraduationCap className="w-3 h-3 text-white" />,
    type: 'education'
  },
  {
    title: "Rank 1 in 10th Grade",
    subtitle: "Himachal Pradesh State Board",
    date: "2021",
    startDate: new Date(2021, 0), // Jan 2021 (approximate)
    description: "Achieved Rank 1 in 10th Grade Himachal Pradesh State Board Examination with a perfect score of 100%.",
    icon: <Award className="w-3 h-3 text-white" />,
    type: 'achievement'
  },
  {
    title: "Always at the Top",
    subtitle: "Consistently Ranked First in Class",
    date: "Throughout School Years",
    startDate: new Date(2015, 0), // Example start date, adjust as needed
    description: "Consistently achieved the top rank in class throughout school years, never settling for second place.",
    icon: <Award className="w-3 h-3 text-white" />,
    type: 'achievement'
  }
];

// Sort items by start date, newest first
const sortedTimelineItems = [...timelineItems].sort((a, b) => 
  b.startDate.getTime() - a.startDate.getTime()
);

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
        rootMargin: '0px 0px -100px 0px'
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
        
        <div className="max-w-3xl mx-auto relative" ref={timelineRef}>
          <div className="absolute top-0 bottom-0 left-0 md:left-1/2 w-px bg-primary/20 transform md:translate-x-px"></div>
          
          {sortedTimelineItems.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item animate-on-scroll relative flex flex-col md:flex-row md:even:flex-row-reverse gap-8 md:gap-16 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
            >
              <div className={`timeline-dot ${getIconBackground(item.type)} z-10`}>
                {item.icon}
              </div>
              
              <div className="flex items-center md:w-1/2 md:text-right md:even:text-left">
                <div className="p-5 bg-secondary rounded-xl border border-primary/20 shadow-sm w-full transition-all duration-300 hover:shadow-lg hover:border-primary/40">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-foreground/80 mb-2">{item.subtitle}</p>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
