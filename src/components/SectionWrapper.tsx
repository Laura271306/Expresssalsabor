import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'dark' | 'light' | 'dark-bg-2';
  border?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className, 
  id, 
  bgColor = 'light', 
  border = false 
}) => {
  const bgClasses = {
    light: 'bg-light-bg', // #ECECEC
    dark: 'bg-dark-bg', // #181415
    'dark-bg-2': 'bg-[#181617]', // Slightly different dark for testimonials
  };

  // py-32 maps roughly to 120px desktop, py-20 to 80px tablet, py-12 to 60px mobile
  const paddingClasses = "py-12 md:py-20 lg:py-32 px-5 md:px-10"; 
  
  const borderClasses = border 
    ? 'border-y-2 border-white/5' 
    : '';

  return (
    <section 
      id={id}
      className={cn(
        bgClasses[bgColor],
        paddingClasses,
        borderClasses,
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;