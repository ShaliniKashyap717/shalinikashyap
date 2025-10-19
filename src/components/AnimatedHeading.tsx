import React, { useState } from "react";

export default function AnimatedHeading() {
  const [isHovered, setIsHovered] = useState(false);
  const text = "Hi, I'm ";
  const firstName = "Shalini ";
  const lastName = "Kashyap";

  return (
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight heading-container ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @keyframes aurora-glow {
          0%, 100% { 
            filter: brightness(1) drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
            transform: translateY(0px);
          }
          50% { 
            filter: brightness(1.3) drop-shadow(0 0 20px rgba(236, 72, 153, 0.8)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4));
            transform: translateY(-5px);
          }
        }

        @keyframes spiral-bounce {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-12px) rotate(-5deg) scale(1.08); }
          50% { transform: translateY(-8px) rotate(0deg) scale(1.12); }
          75% { transform: translateY(-12px) rotate(5deg) scale(1.08); }
          100% { transform: translateY(0px) rotate(0deg) scale(1); }
        }

        @keyframes neon-flicker {
          0%, 100% { 
            text-shadow: 
              0 0 10px rgba(139, 92, 246, 0.8),
              0 0 20px rgba(236, 72, 153, 0.6),
              0 0 30px rgba(59, 130, 246, 0.4);
            opacity: 1;
          }
          50% { 
            text-shadow: 
              0 0 20px rgba(34, 197, 94, 0.9),
              0 0 40px rgba(139, 92, 246, 0.7),
              0 0 60px rgba(236, 72, 153, 0.5);
            opacity: 0.95;
          }
        }

        @keyframes ink-dissolve {
          0% { 
            background: linear-gradient(90deg, #60a5fa 0%, #8b5cf6 25%, #ec4899 50%, #06b6d4 75%, #10b981 100%);
            background-size: 200% 100%;
            background-position: 100% center;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0.3));
          }
          50% { 
            background: linear-gradient(90deg, #10b981 0%, #06b6d4 25%, #ec4899 50%, #8b5cf6 75%, #60a5fa 100%);
            background-size: 200% 100%;
            background-position: 0% center;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 0 15px rgba(139, 92, 246, 0.6));
          }
          100% { 
            background: linear-gradient(90deg, #60a5fa 0%, #8b5cf6 25%, #ec4899 50%, #06b6d4 75%, #10b981 100%);
            background-size: 200% 100%;
            background-position: 100% center;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0.3));
          }
        }

        @keyframes holographic-shift {
          0% { 
            filter: hue-rotate(0deg) brightness(1);
            transform: translateY(0px) translateX(0px);
          }
          33% { 
            filter: hue-rotate(120deg) brightness(1.15);
            transform: translateY(-4px) translateX(-2px);
          }
          66% { 
            filter: hue-rotate(240deg) brightness(1.1);
            transform: translateY(-4px) translateX(2px);
          }
          100% { 
            filter: hue-rotate(360deg) brightness(1);
            transform: translateY(0px) translateX(0px);
          }
        }

        @keyframes floating-rise {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.06); }
        }

        .char, .name-char {
          display: inline-block;
          position: relative;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .char {
          background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        .char:hover {
          animation: aurora-glow 0.8s ease-in-out;
          text-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
        }

        .name-char {
          background: linear-gradient(135deg, #60a5fa 0%, #8b5cf6 25%, #ec4899 50%, #06b6d4 75%, #10b981 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .name-char:hover {
          animation: holographic-shift 0.9s ease-in-out;
          filter: drop-shadow(0 0 12px rgba(236, 72, 153, 0.8));
        }

        .hovered .char {
          animation: floating-rise 0.9s ease-in-out infinite;
          animation-delay: calc(var(--char-index) * 0.08s);
        }

        .hovered .name-char {
          animation: ink-dissolve 1.4s ease-in-out infinite, neon-flicker 0.7s ease-in-out infinite;
          animation-delay: calc(var(--char-index) * 0.1s), calc(var(--char-index) * 0.05s);
        }

        .nowrap {
          white-space: nowrap;
        }
      `}</style>

      <span>
        {text.split("").map((char, idx) =>
          char === " " ? " " : <span key={`text-${idx}`} className="char" style={{ "--char-index": idx }}>{char}</span>
        )}
      </span>

      <span>
        {firstName.split("").map((char, idx) =>
          char === " " ? " " : <span key={`first-${idx}`} className="name-char" style={{ "--char-index": idx }}>{char}</span>
        )}
      </span>

      <span className="nowrap">
        {lastName.split("").map((char, idx) => (
          <span key={`last-${idx}`} className="name-char" style={{ "--char-index": idx + firstName.length }}>{char}</span>
        ))}
      </span>
    </h1>
  );
}