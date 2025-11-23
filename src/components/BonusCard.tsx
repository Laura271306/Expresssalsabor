import React from 'react';
import { cn } from '@/lib/utils';
import { Gift } from 'lucide-react';

interface BonusCardProps {
  title: string;
  description: string;
  originalPrice: string;
  imagePosition: 'left' | 'right';
  icon: React.ReactNode; // Used for the content area, but we simulate the gift box image
}

const BonusCard: React.FC<BonusCardProps> = ({ title, description, originalPrice, imagePosition, icon }) => {
  return (
    <div className={cn(
      "relative p-6 rounded-xl shadow-2xl w-full",
      "bg-[#282425] border border-highlight-gold/50", // Dark background, subtle gold border
      "flex items-center gap-6",
      imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row',
      "max-w-3xl mx-auto"
    )}>
      {/* Image Placeholder (Simulating Gift Box) */}
      <div className={cn(
        "w-1/3 h-40 flex items-center justify-center flex-shrink-0 rounded-lg",
        "bg-highlight-gold/10 text-highlight-gold"
      )}>
        <Gift className="w-16 h-16" />
        {/* Placeholder: Imagen Caja de Regalo Dorada */}
      </div>

      {/* Content */}
      <div className="w-2/3">
        <h4 className="font-serif text-highlight-gold text-2xl md:text-3xl mb-2 leading-tight">
          {title}
        </h4>
        <p className="font-sans text-gray-300 text-base mb-3">
          {description}
        </p>
        <p className="font-sans text-base font-bold">
          <span className="line-through text-urgency-red mr-2">{originalPrice}</span>
          <span className="text-cta-primary text-lg">A GRATIS!</span>
        </p>
      </div>
    </div>
  );
};

export default BonusCard;