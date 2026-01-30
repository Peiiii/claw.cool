
import React from 'react';

export const ClawIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2v10" />
    <path d="M18.4 4.6l-4.2 4.2" />
    <path d="M5.6 4.6l4.2 4.2" />
    <path d="M22 12h-6" />
    <path d="M2 12h6" />
    <path d="M18.4 19.4l-4.2-4.2" />
    <path d="M5.6 19.4l4.2-4.2" />
    <path d="M12 22v-10" />
  </svg>
);
