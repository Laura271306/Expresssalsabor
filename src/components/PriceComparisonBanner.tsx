import React from 'react';
import { cn } from '@/lib/utils';
import { DollarSign, Gift } from 'lucide-react';

const PriceComparisonBanner: React.FC = () => {
  return (
    <div className="bg-light-bg py-8 px-6 border-t border-b border-gray-300">
      <div className="max-w-4xl mx-auto flex items-center justify-center text-center">
        <p className="font-sans text-xl md:text-2xl font-bold text-dark-bg leading-snug">
          <DollarSign className="inline w-6 h-6 text-cta-primary mr-2 mb-1" />
          El precio de este recetario es menor que una porción de patatas fritas de Delivery, 
          <span className="text-highlight-gold ml-2">¡y viene con bonos exclusivos!</span>
          <Gift className="inline w-6 h-6 text-highlight-gold ml-2 mb-1" />
        </p>
      </div>
    </div>
  );
};

export default PriceComparisonBanner;