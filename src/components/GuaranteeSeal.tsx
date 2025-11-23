import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GuaranteeSealProps {
  className?: string;
}

const GuaranteeSeal: React.FC<GuaranteeSealProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative w-32 h-32 md:w-40 md:h-40 mx-auto flex items-center justify-center",
      className
    )}>
      {/* Outer Ring (Gold/Highlight) */}
      <div className="absolute inset-0 rounded-full bg-highlight-gold opacity-20 animate-pulse"></div>
      
      {/* Inner Seal (Dark background) */}
      <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-dark-bg border-4 border-highlight-gold shadow-xl flex flex-col items-center justify-center p-2 text-center">
        <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-cta-primary mb-1" />
        <p className="font-sans text-white text-xs md:text-sm font-bold leading-tight">
          GARANTÍA
        </p>
        <p className="font-sans text-highlight-gold text-xl md:text-2xl font-extrabold leading-none">
          7 DÍAS
        </p>
        <p className="font-sans text-white text-[10px] md:text-xs leading-none mt-0.5">
          100% SATISFACCIÓN
        </p>
      </div>
    </div>
  );
};

export default GuaranteeSeal;