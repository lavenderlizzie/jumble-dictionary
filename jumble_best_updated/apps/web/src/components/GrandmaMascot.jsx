import React from 'react';
import { motion } from 'framer-motion';

function GrandmaMascot({ message, position = 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-start gap-4 ${position === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Grandma SVG Illustration */}
      <div className="flex-shrink-0">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Head */}
          <circle cx="60" cy="45" r="25" fill="#f4d4c8" />
          
          {/* Hair (gray bun) */}
          <ellipse cx="60" cy="25" rx="28" ry="18" fill="#d4d4d8" />
          <circle cx="45" cy="28" r="8" fill="#d4d4d8" />
          <circle cx="75" cy="28" r="8" fill="#d4d4d8" />
          
          {/* Glasses */}
          <circle cx="52" cy="42" r="7" fill="none" stroke="#8b5cf6" strokeWidth="2" />
          <circle cx="68" cy="42" r="7" fill="none" stroke="#8b5cf6" strokeWidth="2" />
          <line x1="59" y1="42" x2="61" y2="42" stroke="#8b5cf6" strokeWidth="2" />
          <line x1="45" y1="42" x2="40" y2="40" stroke="#8b5cf6" strokeWidth="2" />
          <line x1="75" y1="42" x2="80" y2="40" stroke="#8b5cf6" strokeWidth="2" />
          
          {/* Eyes */}
          <circle cx="52" cy="42" r="3" fill="#4a5568" />
          <circle cx="68" cy="42" r="3" fill="#4a5568" />
          <circle cx="53" cy="41" r="1.5" fill="#ffffff" />
          <circle cx="69" cy="41" r="1.5" fill="#ffffff" />
          
          {/* Smile */}
          <path
            d="M 50 52 Q 60 58 70 52"
            stroke="#d97706"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Rosy cheeks */}
          <circle cx="45" cy="50" r="4" fill="#f9a8d4" opacity="0.6" />
          <circle cx="75" cy="50" r="4" fill="#f9a8d4" opacity="0.6" />
          
          {/* Body (cardigan) */}
          <rect x="35" y="65" width="50" height="45" rx="8" fill="#c084fc" />
          
          {/* Cardigan buttons */}
          <circle cx="60" cy="75" r="2.5" fill="#fbbf24" />
          <circle cx="60" cy="85" r="2.5" fill="#fbbf24" />
          <circle cx="60" cy="95" r="2.5" fill="#fbbf24" />
          
          {/* Arms */}
          <rect x="25" y="70" width="12" height="35" rx="6" fill="#f4d4c8" />
          <rect x="83" y="70" width="12" height="35" rx="6" fill="#f4d4c8" />
          
          {/* Hands */}
          <circle cx="31" cy="105" r="6" fill="#f4d4c8" />
          <circle cx="89" cy="105" r="6" fill="#f4d4c8" />
          
          {/* Pearl necklace */}
          <circle cx="52" cy="63" r="2" fill="#e5e7eb" />
          <circle cx="56" cy="62" r="2" fill="#e5e7eb" />
          <circle cx="60" cy="62" r="2" fill="#e5e7eb" />
          <circle cx="64" cy="62" r="2" fill="#e5e7eb" />
          <circle cx="68" cy="63" r="2" fill="#e5e7eb" />
        </svg>
      </div>

      {/* Speech Bubble */}
      {message && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className={`relative max-w-xs bg-white rounded-2xl shadow-lg p-4 border-2 border-primary/20 ${
            position === 'left' ? 'ml-2' : 'mr-2'
          }`}
        >
          <p className="text-sm body-text text-foreground">{message}</p>
          
          {/* Speech bubble tail */}
          <div
            className={`absolute top-6 ${
              position === 'left' ? '-left-3' : '-right-3'
            } w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ${
              position === 'left'
                ? 'border-r-[12px] border-r-white'
                : 'border-l-[12px] border-l-white'
            }`}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default GrandmaMascot;