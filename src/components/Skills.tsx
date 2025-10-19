import React, { useState } from 'react';
import { Code, PenTool, Server, Database, Layout, Braces } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    imageSrc: string;
    link: string;
  }[];
}

const skillCategories: SkillCategory[] = [
 {
  title: "Programming Languages",
  icon: <Code className="w-6 h-6 text-primary" />,
  skills: [
    { name: "C++", imageSrc: "https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg", link: "https://www.cplusplus.com/" },
    { name: "JavaScript", imageSrc: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg", link: "https://www.javascript.com/" },
    { name: "Python", imageSrc: "https://profilinator.rishav.dev/skills-assets/python-original.svg", link: "https://www.python.org/" },
    { name: "Bash", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg", link: "https://www.gnu.org/software/bash/" },
  ]
},

  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: [
      { name: "React JS", imageSrc: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg", link: "https://reactjs.org/" },
      { name: "Next JS", imageSrc: "https://profilinator.rishav.dev/skills-assets/nextjs.png", link: "https://nextjs.org/" },
      { name: "Tailwind CSS", imageSrc: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg", link: "https://www.tailwindcss.com/" },
      { name: "Bootstrap", imageSrc: "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg", link: "https://getbootstrap.com/docs/3.4/javascript/" },
      { name: "jQuery", imageSrc: "https://profilinator.rishav.dev/skills-assets/jquery.png", link: "https://jquery.com/" },
      { name: "HTML5", imageSrc: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg", link: "https://en.wikipedia.org/wiki/HTML5" },
      { name: "CSS3", imageSrc: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg", link: "https://www.w3schools.com/css/" },
      { name: "TypeScript", imageSrc: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg", link: "https://www.typescriptlang.org/" },
    ]
  },
 {
  title: "Backend & Databases",
  icon: <Server className="w-6 h-6 text-primary" />,
  skills: [
    // 🧠 Backend Technologies
    { 
      name: "Node JS", 
      imageSrc: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg", 
      link: "https://nodejs.org/" 
    },
    { 
      name: "Express JS", 
      imageSrc: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg", 
      link: "https://expressjs.com/" 
    },
    { 
      name: "Nginx", 
      imageSrc: "https://profilinator.rishav.dev/skills-assets/nginx-original.svg", 
      link: "https://www.nginx.com/" 
    },

    // 🗄️ Databases
    { 
      name: "MongoDB", 
      imageSrc: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg", 
      link: "https://www.mongodb.com/" 
    },
    { 
      name: "MySQL", 
      imageSrc: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg", 
      link: "https://www.mysql.com/" 
    },
    { 
      name: "SQLite", 
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg", 
      link: "https://www.sqlite.org/" 
    },
  ]
}

,
  {
    title: "Tools & Technologies",
    icon: <PenTool className="w-6 h-6 text-primary" />,
    skills: [
      { name: "GitHub", imageSrc: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg", link: "https://github.com/" },
      { name: "Docker", imageSrc: "https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg", link: "https://www.docker.com/" },
      { name: "Figma", imageSrc: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg", link: "https://www.figma.com/" },
      { name: "Illustrator", imageSrc: "https://profilinator.rishav.dev/skills-assets/adobe_illustrator-icon.svg", link: "https://www.adobe.com/in/products/illustrator.html" },
      { name: "Photoshop", imageSrc: "https://profilinator.rishav.dev/skills-assets/photoshop-plain.svg", link: "https://www.adobe.com/in/products/photoshop.html" },
      { name: "Linux", imageSrc: "https://profilinator.rishav.dev/skills-assets/linux-original.svg", link: "https://www.linux.org/" },
      { name: "WordPress", imageSrc: "https://profilinator.rishav.dev/skills-assets/wordpress.png", link: "https://wordpress.com/" },
      { name: "LaTeX", imageSrc: "https://profilinator.rishav.dev/skills-assets/latex.png", link: "https://www.latex-project.org/" },
    ]
  },
  {
    title: "Data Visualization & Analysis",
    icon: <Braces className="w-6 h-6 text-primary" />,
    skills: [
      { name: "Chart.js", imageSrc: "https://profilinator.rishav.dev/skills-assets/logo-title.svg", link: "https://www.chartjs.org/" },
      { name: "D3.js", imageSrc: "https://profilinator.rishav.dev/skills-assets/d3js-original.svg", link: "https://d3js.org/" },
      { name: "Matplotlib", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg", link: "https://matplotlib.org/" },
      { name: "Seaborn", imageSrc: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg", link: "https://seaborn.pydata.org/" },
      { name: "Pandas", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg", link: "https://pandas.pydata.org/" },
      { name: "NumPy", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg", link: "https://numpy.org/" },
      { name: "Plotly", imageSrc: "https://images.plot.ly/logo/new-branding/plotly-logomark.png", link: "https://plotly.com/" },
      { name: "PowerBI", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", link: "https://powerbi.microsoft.com/" },
    ]
  },
  {
    title: "AI/ML Libraries",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: [
      { name: "TensorFlow", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", link: "https://www.tensorflow.org/" },
      { name: "Scikit-learn", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", link: "https://scikit-learn.org/" },
      { name: "PyTorch", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg", link: "https://pytorch.org/" },
      { name: "Keras", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", link: "https://keras.io/" },
      { name: "OpenCV", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", link: "https://opencv.org/" },
{ 
  name: "SpaCy", 
  imageSrc: "https://upload.wikimedia.org/wikipedia/commons/8/88/SpaCy_logo.svg", 
  link: "https://spacy.io/" 
}

    ]
  }
];

const SkillCarousel: React.FC<{ skills: typeof skillCategories[0]['skills'], animate?: boolean }> = ({ skills, animate = true }) => {
  const [isHovering, setIsHovering] = useState(false);
  const allSkills = animate ? [...skills, ...skills] : skills;

  return (
    <div className="relative w-full overflow-hidden bg-secondary/40 rounded-lg py-8">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-container {
          display: flex;
          ${animate ? 'animation: scroll-left 29.8s linear infinite;' : 'justify-content: center;'}
        }
        .carousel-container.paused {
          animation-play-state: paused;
        }
        .skill-item {
          flex: 0 0 auto;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div 
        className={`carousel-container ${isHovering ? 'paused' : ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {allSkills.map((skill, i) => (
          <div key={i} className="skill-item">
            <a 
              href={skill.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-200 flex items-center justify-center"
            >
              <img src={skill.imageSrc} alt={skill.name} className="h-16 w-16 object-contain" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-blue-500">My Skills</h2>
          <p className="text-center text-gray-400 mt-2">
            The technologies and tools I work with
          </p>
        </div>

        <div className="space-y-8 mt-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <div className="bg-gray-900 rounded-xl p-5 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-blue-500/10">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium text-blue-500">{category.title}</h3>
                </div>

             <SkillCarousel skills={category.skills} animate={category.skills.length > 4} />

              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-6">
            <h3 className="text-xl font-medium mb-4 text-center text-blue-500">Coursework</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Analysis & Design of Algorithms",
  "Artificial Intelligence",
  "Computer Networks",
  "Computer Organization & Architecture",
  "Data Structures",
  "Discrete Structures",
  "Graph Theory",
  "Object-oriented Programming (OOP)",
  "Operating Systems",
  "Optimization Techniques",
  "Probability & Applied Statistics",
  "Theory of Computation"
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-3 rounded-lg flex items-center justify-center text-center border border-blue-500/20 shadow-sm"
                >
                  <span className="text-sm font-medium text-gray-200">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;