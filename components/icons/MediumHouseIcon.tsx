import React from 'react';

export const MediumHouseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Main Roof */}
      <path d="M25 50 L55 30 L85 50" />
       {/* Solar Panels Main Roof */}
      <rect x="29" y="37" width="52" height="10" />
      <path d="M37 37 V 47" /><path d="M45 37 V 47" /><path d="M53 37 V 47" /><path d="M61 37 V 47" /><path d="M69 37 V 47" /><path d="M77 37 V 47" />

      {/* House Body */}
      <path d="M30 50 V 80 H 60 V 50" />
      
      {/* Extension */}
      <path d="M60 55 V 80 H 80 V 55" />
      <path d="M60 55 A 10 10 0 0 1 70 45 A 10 10 0 0 1 80 55" />
       {/* Door */}
      <rect x="42" y="65" width="10" height="15" />
       {/* Windows */}
      <rect x="33" y="53" width="8" height="8" /><rect x="45" y="53" width="8" height="8" />
      <rect x="65" y="60" width="10" height="8" />

      {/* Ground line */}
      <path d="M20 80 H 85" />
    </g>
  </svg>
);
