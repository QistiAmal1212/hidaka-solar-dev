import React from 'react';

export const LargeHouseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Roof */}
      <path d="M20 50 L50 30 L80 50 Z" />
      {/* Solar Panels */}
      <rect x="24" y="37" width="52" height="10" />
      <path d="M31.5 37 V 47" /><path d="M39 37 V 47" /><path d="M46.5 37 V 47" /><path d="M54 37 V 47" /><path d="M61.5 37 V 47" /><path d="M69 37 V 47" />
       {/* Antenna */}
      <path d="M70 34 L 70 30" /><path d="M66 30 H 74" /><path d="M68 32 H 72" />
      
      {/* House Body */}
      <rect x="25" y="50" width="50" height="30" />
      
      {/* Entrance */}
      <path d="M40 80 V 68 H 60 V 80" />
      <path d="M38 68 L 50 60 L 62 68" />
      
      {/* Windows */}
      <rect x="30" y="55" width="8" height="8" /><rect x="41" y="55" width="8" height="8" />
      <rect x="62" y="55" width="8" height="8" /><rect x="51" y="55" width="8" height="8" />
      
       {/* Bushes */}
      <path d="M17 80 Q 20 75 23 80" /><path d="M14 80 Q 17 75 20 80" />
      <path d="M77 80 Q 80 75 83 80" /><path d="M74 80 Q 77 75 80 80" />
      
      {/* Ground */}
      <path d="M10 80 H 90" />
    </g>
  </svg>
);
