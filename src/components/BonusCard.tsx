import React from 'react';
import { cn } from '@/lib/utils';
import { Gift } from 'lucide-react';

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
      "relative p-6 rounded-xl shadow-2xl w-full",
      "bg-[#282425] border border-highlight-gold/50",
      "flex items-center gap-6",
      imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row',
      "max-w-3xl mx-auto"
    )}>
      <div className={cn(
        "w-1/3 h-40 flex items-center justify-center flex-shrink-0 rounded-lg overflow-hidden",
        "bg-transparent"
      )}>
        <img 
          src="/images/bonus-gift.jpeg" 
          alt="Caja de regalo dorada" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width="200" // Assuming a width for 1/3 of max-w-3xl (approx 200px)
          height="160" // h-40 is 160px
        />
      </div>

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