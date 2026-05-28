import React from 'react';
import { motion } from 'framer-motion';

function NoMatchesSpeechBubble({ quote }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center justify-center gap-6 py-10 px-4"
    >
      {/* Speech Bubble */}
      <div className="speech-bubble speech-bubble-pointer max-w-sm sm:max-w-md text-center sm:text-right flex-1 order-1 sm:order-1">
        <p className="text-[18px] sm:text-[20px] font-bold mb-2 leading-snug">
          "{quote}"
        </p>
        <p className="text-[14px] sm:text-[16px] opacity-90 font-medium">
          No matching words found — try another combination!
        </p>
      </div>

      {/* Kalamity Kate Mascot */}
      <div className="w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 order-2 sm:order-2 drop-shadow-xl relative">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          aria-label="Kalamity Kate Mascot"
        >
          {/* Hair Back */}
          <circle cx="50" cy="45" r="35" fill="#f97316" />
          {/* Face */}
          <circle cx="50" cy="55" r="28" fill="#ffedd5" />
          {/* Hair Front / Bangs */}
          <path d="M 15 45 Q 50 10 85 45 Q 50 30 15 45" fill="#ea580c" />
          {/* Eyes */}
          <circle cx="40" cy="52" r="4" fill="#0f172a" />
          <circle cx="60" cy="52" r="4" fill="#0f172a" />
          {/* Freckles */}
          <circle cx="35" cy="60" r="2" fill="#fca5a5" opacity="0.8" />
          <circle cx="65" cy="60" r="2" fill="#fca5a5" opacity="0.8" />
          {/* Frown/Grimace for "no matches" */}
          <path d="M 42 70 Q 50 65 58 70" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Glasses */}
          <circle cx="40" cy="52" r="12" stroke="#ec4899" strokeWidth="3" fill="none" />
          <circle cx="60" cy="52" r="12" stroke="#ec4899" strokeWidth="3" fill="none" />
          <line x1="52" y1="52" x2="48" y2="52" stroke="#ec4899" strokeWidth="3" />
          {/* Body/Shoulders */}
          <path d="M 25 100 Q 50 75 75 100" fill="#ec4899" />
        </svg>
      </div>
    </motion.div>
  );
}

export default NoMatchesSpeechBubble;