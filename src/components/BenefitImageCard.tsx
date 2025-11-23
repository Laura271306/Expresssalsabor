import React from 'react';
import { cn } from '@/lib/utils';

interface BenefitImageCardProps {
  imagePlaceholder: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitImageCard: React.FC<BenefitImageCardProps> = ({ imagePlaceholder, icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]">
      {/* Image Placeholder Area */}
      <div className="h-40 bg-gray-300 flex items-center justify-center text-gray-600">
        {imagePlaceholder}
      </div>

      {/* Content Area */}
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 flex items-center justify-center text-highlight-gold mr-3">
            {icon}
          </div>
          <h3 className="font-sans text-xl font-bold text-dark-bg">{title}</h3>
        </div>
        <p className="font-sans text-gray-700 text-base leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitImageCard;