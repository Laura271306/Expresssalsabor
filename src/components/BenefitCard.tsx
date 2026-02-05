import React from 'react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className={cn(
      "relative bg-white p-6 pt-10 rounded-lg shadow-xl overflow-hidden",
      "transition-transform duration-300 hover:scale-[1.02] group",
      "w-full max-w-[270px] mx-auto"
    )}>
      {/* Image/Icon Placeholder Area */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center">
        {/* Placeholder for image/visual */}
        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-4xl text-dark-bg shadow-md group-hover:shadow-lg transition-shadow duration-300">
          {icon}
        </div>
      </div>

      <h4 className="font-serif text-highlight-gold text-2xl mt-4 mb-2 text-center">
        {title}
      </h4>
      <p className="font-sans text-dark-bg text-base leading-snug text-center">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;