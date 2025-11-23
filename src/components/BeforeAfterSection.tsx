import React from 'react';
import { cn } from '@/lib/utils';
import { X, Check } from 'lucide-react';

const BeforeAfterSection: React.FC = () => {
  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12">
          ANTES Y DESPUÉS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Antes */}
          <div className="bg-white border-4 border-urgency-red rounded-xl p-8 shadow-xl">
            <h3 className="font-sans text-3xl font-bold text-urgency-red mb-6 text-center flex items-center justify-center">
              <span className="text-4xl mr-3">🔻</span> Antes
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="w-6 h-6 text-urgency-red mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg">Recetas blandas</span>
              </li>
              <li className="flex items-start">
                <X className="w-6 h-6 text-urgency-red mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg">Resultados impredecibles</span>
              </li>
              <li className="flex items-start">
                <X className="w-6 h-6 text-urgency-red mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg">Mucha frustración</span>
              </li>
            </ul>
          </div>

          {/* Después */}
          <div className="bg-white border-4 border-cta-primary rounded-xl p-8 shadow-xl">
            <h3 className="font-sans text-3xl font-bold text-cta-primary mb-6 text-center flex items-center justify-center">
              <span className="text-4xl mr-3">🔺</span> Después
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg">Crocancia perfecta</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg">10–15 minutos</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg">Resultados garantizados</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;