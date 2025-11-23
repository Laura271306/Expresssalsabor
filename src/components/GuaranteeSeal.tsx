import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GuaranteeSealProps {
  className?: string;
}

const GuaranteeSeal: React.FC<GuaranteeSealProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative w-36 h-36 md:w-44 md:h-44 mx-auto flex items-center justify-center p-1", 
      "rounded-full border-4 border-highlight-gold shadow-2xl shadow-highlight-gold/30", 
      "bg-dark-bg", 
      className
    )}>
      <div className="flex flex-col items-center justify-center text-center p-2">
        <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-cta-primary mb-1" />
        
        <p className="font-sans text-gray-300 text-sm md:text-base font-bold leading-tight uppercase">
          Garantía
        </p>
        
        <p className="font-serif text-highlight-gold text-3xl md:text-4xl font-extrabold leading-none mt-1">
          7 DÍAS
        </p>
        
        <p className="font-sans text-white text-xs md:text-sm leading-none mt-1">
          100% SATISFACCIÓN
        </p>
      </div>
    </div>
  );
};

export default GuaranteeSeal;