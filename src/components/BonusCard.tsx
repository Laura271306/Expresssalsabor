import React from 'react';
import { cn } from '@/lib/utils';
import { Gift } from 'lucide-react';

interface BonusCardProps {
  title: string;
  description: string;
  originalPrice: string;
  imagePosition: 'left' | 'right';
  icon: React.ReactNode; // Keeping icon prop but not using it for the visual, only for potential future use
}

const BonusCard: React.FC<BonusCardProps> = ({ title, description, originalPrice, imagePosition, icon }) => {
  return (
    <div className={cn(
      "relative p-6 rounded-xl shadow-2xl w-full",
      "bg-[#282425] border border-highlight-gold/50", // Dark background, subtle gold border
      "flex flex-col md:flex-row items-center gap-6", // Added flex-col and md:flex-row
      imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row', // Adjusted for md screens
      "max-w-3xl mx-auto"
    )}>
      {/* Image Placeholder (Now using the uploaded image) */}
      <div className={cn(
        "w-full md:w-1/3 h-40 flex items-center justify-center flex-shrink-0 rounded-lg overflow-hidden", // Adjusted width
        "bg-transparent" // Remove background color as the image has its own dark background
      )}>
        <img 
          src="/images/bonus-gift.jpeg" 
          alt="Caja de regalo dorada" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3 text-center md:text-left"> {/* Adjusted width and added text alignment */}
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