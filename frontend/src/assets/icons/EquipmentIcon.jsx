import React from 'react';

export const EquipmentIcon = ({ className = '', ...props }) => (
  <svg 
    width="64" 
    height="64" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path 
      d="M6 5V19M18 5V19M6 5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5M6 5C6 6.10457 6.89543 7 8 7H16C17.1046 7 18 6.10457 18 5M6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19M6 19C6 17.8954 6.89543 17 8 17H16C17.1046 17 18 17.8954 18 19M3 9H21M3 15H21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
); 