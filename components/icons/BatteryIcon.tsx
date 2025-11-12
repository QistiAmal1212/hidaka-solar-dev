
import React from 'react';

export const BatteryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V7.618a1 1 0 01.553-.894L9 4l6 3v10l-6 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20v-4.519L15 12l-6-3.481V4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.5l-6 3-6-3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.5l-6-3" />
    </svg>
);
