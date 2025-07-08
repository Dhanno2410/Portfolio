import React from 'react';

export const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 18.75h-9a9 9 0 0 0 9 0ZM16.5 18.75a9 9 0 0 1-9 0M15 15.75H9m6 0v.75m-6-.75v-.75m6 0v-2.25c0-1.02.51-1.95.8-2.65l.8-1.95c.3-.7.1-1.5-.4-2.1l-1.1-1.1a1.1 1.1 0 0 0-1.6 0l-1.1 1.1c-.5.6-.7 1.4-.4 2.1l.8 1.95c.3.7.8 1.63.8 2.65v2.25ZM9 15.75v-2.25c0-1.02.51-1.95.8-2.65l.8-1.95c.3-.7.1-1.5-.4-2.1l-1.1-1.1a1.1 1.1 0 0 0-1.6 0l-1.1 1.1c-.5.6-.7 1.4-.4 2.1l.8 1.95c.3.7.8 1.63.8 2.65v2.25Z"
    />
  </svg>
);
