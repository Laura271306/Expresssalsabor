import React from 'react';
import { cn } from '@/lib/utils';

interface ImageTestimonialCardProps {
  src: string;
  alt: string;
}

const ImageTestimonialCard: React.FC<ImageTestimonialCardProps> = ({ src, alt }) => {
  return (
    <div className={cn(
      "w-full mx-auto rounded-xl overflow-hidden shadow-2xl",
      "border-4 border-highlight-gold/50 transition-transform duration-300 hover:scale-[1.02]"
    )}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default ImageTestimonialCard;