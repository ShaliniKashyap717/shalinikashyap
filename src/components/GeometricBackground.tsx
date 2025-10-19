
import React from 'react';
import { motion } from 'framer-motion';

const GeometricBackground = () => {
  const numShapes = 15;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {Array.from({ length: numShapes }).map((_, i) => {
        const size = Math.random() * 60 + 20;
        const duration = Math.random() * 15 + 20;
        const delay = Math.random() * 5;
        const isCircle = Math.random() > 0.5;

        return (
          <motion.div
            key={i}
            className="absolute border border-primary/20"
            style={{
              width: size,
              height: size,
              borderRadius: isCircle ? '50%' : '0%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.3, 0.3, 0],
              scale: [0.5, 1, 1, 0.5],
            }}
            transition={{
              duration: duration,
              ease: "linear",
              repeat: Infinity,
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default GeometricBackground;
