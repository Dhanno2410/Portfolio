
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
