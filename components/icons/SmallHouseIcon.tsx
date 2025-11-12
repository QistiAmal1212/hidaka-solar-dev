import React from 'react';

export const SmallHouseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Roof */}
      <path d="M25 50 L50 30 L75 50 Z" />
      {/* Solar Panels */}
      <rect x="29" y="36" width="42" height="10" />
      <path d="M36 36 V 46" />
      <path d="M43 36 V 46" />
      <path d="M50 36 V 46" />
      <path d="M57 36 V 46" />
      <path d="M64 36 V 46" />
      {/* House Body */}
      <rect x="30" y="50" width="40" height="25" />
      {/* Door */}
      <rect x="45" y="60" width="10" height="15" />
      {/* Window */}
      <rect x="58" y="55" width="10" height="8" />
       {/* Bushes */}
      <path d="M22 75 Q 25 70 28 75" />
      <path d="M19 75 Q 22 70 25 75" />
      <path d="M72 75 Q 75 70 78 75" />
      <path d="M69 75 Q 72 70 75 75" />
      {/* Ground */}
      <path d="M15 75 H 85" />
    </g>
  </svg>
);
