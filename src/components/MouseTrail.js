import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      setTrail(prev => {
        const newTrail = [...prev, newPosition];
        if (newTrail.length > 10) {
          return newTrail.slice(1);
        }
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="mouse-trail" style={{ pointerEvents: 'none' }}>
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="trail-dot"
          style={{
            position: 'fixed',
            left: pos.x,
            top: pos.y,
            zIndex: 1000,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
