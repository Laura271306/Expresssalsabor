import React from 'react';
import { cn } from '@/lib/utils';

interface BonusCardProps {
  title: string;
  description: string;
  originalPrice: string;
  imagePosition: 'left' | 'right';
  icon: React.ReactNode;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, description, originalPrice, imagePosition, icon }) => {
  return (
    <div className={cn(
      "relative p-5 rounded-lg shadow-xl border border-[#474750] w-full",
      "bg-gradient-to-br from-[#2F2B2C] to-dark-bg",
      "flex items-center gap-4",
      imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'
    )}>
      {/* Image/Icon (50% width placeholder) */}
      <div className="w-1/3 h-24 flex items-center justify-center text-white text-4xl flex-shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div className="w-2/3">
        <h4 className="font-serif text-highlight-gold text-xl md:text-2xl mb-1 leading-tight">
          {title}
        </h4>
        <p className="font-sans text-body-text text-sm mb-2">
          {description}
        </p>
        <p className="font-sans text-sm font-bold">
          <span className="line-through text-urgency-red mr-2">{originalPrice}</span>
          <span className="text-cta-primary">A GRATIS!</span>
        </p>
      </div>
    </div>
  );
};

export default BonusCard;