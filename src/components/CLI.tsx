
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, HelpCircle } from 'lucide-react';

interface Command {
  name: string;
  description: string;
  action: () => string;
}

const CLI: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; content: string }>>([
    { type: 'output', content: 'Welcome to Shalini Kashyap\'s Portfolio CLI!' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' }
  ]);
  const [showGuide, setShowGuide] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Command[] = [
    {
      name: 'help',
      description: 'Show all available commands',
      action: () => {
        const commandList = commands.map(cmd => `  ${cmd.name.padEnd(12)} - ${cmd.description}`).join('\n');
        return `Available commands:\n${commandList}`;
      }
    },
    {
      name: 'about',
      description: 'Display information about Shalini',
      action: () => `Name: Shalini Kashyap
Education: B.Tech Computer Science & Engineering at NIT Hamirpur
CGPA: 8.87
Location: Nirmand, Himachal Pradesh
Email: shalinikashyap717@gmail.com

I'm a dedicated Computer Science student with a passion for web development and problem-solving. With strong academic foundation and practical experience in various technologies, I strive to create impactful digital solutions.`
    },
    {
      name: 'projects',
      description: 'List all projects',
      action: () => `Projects:

1. WanderWise
   - Description: Travel companion app with real-time data analysis and social connectivity
   - Tech: MongoDB, Express.js, React.js, Node.js, Botpress, JWT, NumPy, Pandas
   - GitHub: https://github.com/ShaliniKashyap717/TIWiSE

2. MoodBloom
   - Description: Mental health app for mood tracking with AI-powered guidance
   - Tech: MongoDB, Express.js, React.js, Node.js, Gemini API, JWT, EJS, D3.js
   - GitHub: https://github.com/ShaliniKashyap717/moodbloom

3. Task Management Software
   - Description: Comprehensive task management application
   - Tech: React JS, Tailwind CSS, Font Awesome
   - GitHub: https://github.com/ShaliniKashyap717/To-DO-list
   - Live: https://mytaskmanagementsoftware.netlify.app/

4. E-bookstore
   - Description: Full-stack e-commerce web application for books
   - Tech: MongoDB, Express.js, React JS, Node.js
   - GitHub: https://github.com/ShaliniKashyap717/ecommerce_web_app

5. Drumkit
   - Description: Virtual drumkit application for interactive musical experience
   - Tech: HTML, CSS, JavaScript
   - GitHub: https://github.com/ShaliniKashyap717/Drumkit`
    },
    {
      name: 'skills',
      description: 'Display technical skills',
      action: () => `Technical Skills:

Programming Languages:
  • C/C++, Python, JavaScript, TypeScript

Web Development:
  • Frontend: React.js, HTML5, CSS3, Tailwind CSS
  • Backend: Node.js, Express.js
  • Database: MongoDB, SQL

Tools & Technologies:
  • Git, GitHub
  • JWT Authentication
  • RESTful APIs
  • Responsive Design

Other:
  • Data Structures & Algorithms
  • UI/UX Design
  • Problem Solving`
    },
    {
      name: 'timeline',
      description: 'Show education and experience timeline',
      action: () => `Timeline:

Aug 2023 - Jun 2027 (Expected)
  B.Tech - Computer Science and Engineering
  National Institute of Technology Hamirpur
  CGPA: 8.87

May 2021 - Mar 2023
  Intermediate - Science
  Govt. Model Sr. Sec. School Nirmand
  Percentage: 92.6%

Experience & Achievements:
  • Active contributor to open source projects
  • Participated in various coding competitions
  • Built multiple full-stack web applications
  • Strong focus on problem-solving and algorithm development`
    },
    {
      name: 'services',
      description: 'List available services',
      action: () => `Services I Offer:

1. Web Development
   Creating responsive websites and web applications with modern technologies like React, Next.js, and Tailwind CSS.

2. UI/UX Design
   Designing intuitive user interfaces and crafting engaging user experiences that look great on all devices.

3. Backend Development
   Building robust server-side applications with Node.js, Express, and MongoDB to power your web solutions.

4. Algorithm Development
   Creating efficient algorithms and data structures to solve complex computational problems.

5. Database Design
   Designing and implementing database solutions using MongoDB, SQL, and other technologies.

6. Technical Consulting
   Providing technical advice and consultation for projects and startups in the tech industry.`
    },
    {
      name: 'contact',
      description: 'Display contact information',
      action: () => `Contact Information:

Email: shalinikashyap717@gmail.com
Location: Nirmand, Himachal Pradesh, India
GitHub: https://github.com/ShaliniKashyap717
LinkedIn: https://linkedin.com/in/shalini-kashyap

Feel free to reach out for collaborations, opportunities, or just to connect!`
    },
    {
      name: 'resume',
      description: 'Get resume download link',
      action: () => `Resume Download:

You can download my latest resume from:
https://drive.google.com/file/d/1Pda93mrtY-6JKMjUi1rWalO7CyTxh0rb/view?usp=sharing

The resume includes detailed information about my education, projects, skills, and achievements.`
    },
    {
      name: 'clear',
      description: 'Clear the terminal screen',
      action: () => {
        setHistory([
          { type: 'output', content: 'Welcome to Shalini Kashyap\'s Portfolio CLI!' },
          { type: 'output', content: 'Type "help" to see available commands.' },
          { type: 'output', content: '' }
        ]);
        return '';
      }
    }
  ];

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    const foundCommand = commands.find(cmd => cmd.name === trimmedCommand);
    
    if (foundCommand) {
      const output = foundCommand.action();
      if (output) {
        setHistory(prev => [...prev, 
          { type: 'input', content: `$ ${command}` },
          { type: 'output', content: output },
          { type: 'output', content: '' }
        ]);
      } else {
        setHistory(prev => [...prev, { type: 'input', content: `$ ${command}` }]);
      }
    } else if (trimmedCommand === '') {
      setHistory(prev => [...prev, { type: 'input', content: '$ ' }]);
    } else {
      setHistory(prev => [...prev, 
        { type: 'input', content: `$ ${command}` },
        { type: 'output', content: `Command not found: ${command}. Type "help" for available commands.` },
        { type: 'output', content: '' }
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-pink-400 font-mono relative">
      {/* Command Guide Toggle */}
      <button
        onClick={() => setShowGuide(!showGuide)}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        title="Toggle Command Guide"
      >
        <HelpCircle className="w-2.5 h-2.5 text-pink-400" />
      </button>

      {/* Command Guide */}
      {showGuide && (
        <div className="fixed top-16 right-4 z-40 bg-gray-900 border border-pink-400 rounded-lg p-4 max-w-md">
          <h3 className="text-pink-400 font-bold mb-3 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            Command Guide
          </h3>
          <div className="space-y-1 text-sm">
            {commands.map((cmd) => (
              <div key={cmd.name} className="flex">
                <span className="text-yellow-400 font-semibold w-16">{cmd.name}</span>
                <span className="text-gray-300">- {cmd.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Terminal */}
      <div className="container mx-auto p-4 h-screen flex flex-col">
        <div className="bg-gray-900 border border-pink-400 rounded-lg flex-1 flex flex-col">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 rounded-t-lg border-b border-pink-400 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-pink-400 ml-4">shalini@portfolio:~$</span>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-gray-800"
          >
            {history.map((item, index) => (
              <div key={index} className={`${item.type === 'input' ? 'text-pink-400' : 'text-gray-300'} whitespace-pre-wrap`}>
                {item.content}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-pink-400">
            <div className="flex items-center">
              <span className="text-pink-400 mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-pink-400 outline-none caret-pink-400"
                placeholder="Type a command..."
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CLI;
