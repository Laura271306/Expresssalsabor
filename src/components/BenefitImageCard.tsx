import React from 'react';
import { cn } from '@/lib/utils';

interface BenefitImageCardProps {
  imageSrc: string; // Cambiado de imagePlaceholder a imageSrc
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitImageCard: React.FC<BenefitImageCardProps> = ({ imageSrc, icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]">
      {/* Image Area */}
      <div className="h-40 bg-gray-300 flex items-center justify-center text-gray-600 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={`Imagen para el beneficio: ${title}`} 
          className="w-full h-full object-cover"
          loading="lazy" // Added lazy loading
        />
      </div>

      {/* Content Area */}
      <div className="p-5">
        <div className="flex items-center mb-3">
          {/* Icon Container Styling */}
          <div className="w-10 h-10 flex items-center justify-center bg-highlight-gold/10 rounded-full text-highlight-gold mr-3">
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