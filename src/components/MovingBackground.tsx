
import React from 'react';

const MovingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Moving particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
      
      {/* Moving lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer"
            style={{
              top: `${20 + i * 30}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '8s',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MovingBackground;
