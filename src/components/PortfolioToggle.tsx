
import React from 'react';
import { Terminal, Monitor } from 'lucide-react';

interface PortfolioToggleProps {
  isCLI: boolean;
  onToggle: (mode: boolean) => void;
  isFixed?: boolean;
}

const PortfolioToggle: React.FC<PortfolioToggleProps> = ({ isCLI, onToggle, isFixed = false }) => {
  const containerClasses = isFixed 
    ? "fixed top-4 right-4 z-50" 
    : "inline-block";

  return (
    <div className={containerClasses}>
      <div className="bg-black/90 backdrop-blur-sm border border-primary/30 rounded-lg p-1 flex items-center gap-1 h-12">
        <button
          onClick={() => onToggle(false)}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all text-sm font-medium h-10 ${
            !isCLI 
              ? 'bg-primary text-primary-foreground shadow-sm' 
              : 'text-foreground/70 hover:text-foreground hover:bg-primary/10'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span>GUI</span>
        </button>
        <button
          onClick={() => onToggle(true)}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all text-sm font-medium h-10 ${
            isCLI 
              ? 'bg-pink-600 text-white shadow-sm' 
              : 'text-foreground/70 hover:text-foreground hover:bg-primary/10'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>CLI</span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioToggle;
