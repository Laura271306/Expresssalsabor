import React from 'react';
import { cn } from '@/lib/utils';
import { DollarSign, Gift } from 'lucide-react';

const PriceComparisonBanner: React.FC = () => {
  return (
    <div className="bg-light-bg py-8 px-6 border-t border-b border-gray-300">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <p className="font-sans text-xl md:text-2xl font-bold text-dark-bg leading-snug mb-4">
          <DollarSign className="inline w-6 h-6 text-cta-primary mr-2 mb-1" />
          El precio de este recetario es menor que una porción de patatas fritas de Delivery, 
          <span className="text-highlight-gold ml-2">¡y viene con bonos exclusivos!</span>
          <Gift className="inline w-6 h-6 text-highlight-gold ml-2 mb-1" />
        </p>
        
        {/* New Comparison Text */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-lg">
          <p className="font-sans text-lg font-bold text-dark-bg mb-2">
            Libro físico de recetas: <span className="text-urgency-red">$25-40 USD</span> (Con el mismo contenido)
          </p>
          <p className="font-sans text-base text-gray-700">
            Y entregamos mucho más. <span className="font-bold text-cta-primary">Descarga rápida y acceso en cualquier lugar</span> por el celular, tablet o computador.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceComparisonBanner;