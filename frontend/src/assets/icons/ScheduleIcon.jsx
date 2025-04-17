import React from 'react';

export const ScheduleIcon = ({ className = '', ...props }) => (
  <svg 
    width="64" 
    height="64" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect 
      x="3" 
      y="4" 
      width="18" 
      height="18" 
      rx="2" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M3 10H21" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M8 2V6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M16 2V6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
); 