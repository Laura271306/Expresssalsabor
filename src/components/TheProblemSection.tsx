import React from 'react';
import { cn } from '@/lib/utils';
import { XCircle, CheckCircle } from 'lucide-react';
import CtaButton from './CtaButton';

const TheProblemSection: React.FC = () => {
  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12 text-urgency-red text-left">
          ❌ El problema no es tu air fryer.
        </h2>

        <div className="bg-[#282425] rounded-xl p-8 mb-12 shadow-xl border border-urgency-red/50">
          <h3 className="font-sans text-2xl font-bold mb-6 text-urgency-red flex items-center justify-start">
            <XCircle className="w-6 h-6 mr-3" /> Problemas más comunes:
          </h3>
          <ul className="space-y-4 text-left mb-8">
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">Patatas blandas</span>
            </li>
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">Carnes sin punto</span>
            </li>
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">Recetas que siempre fallan</span>
            </li>
          </ul>
          
          <CtaButton href="#link-ancoragem" className="bg-urgency-red hover:bg-red-700">
            Esto me pasa a mí
          </CtaButton>
        </div>

        <div className="bg-cta-primary/20 rounded-xl p-8 shadow-2xl shadow-cta-primary/30 border border-cta-primary">
          <h3 className="font-sans text-2xl font-bold mb-4 text-cta-primary flex items-center justify-start">
            <CheckCircle className="w-6 h-6 mr-3" /> La verdad:
          </h3>
          <p className="font-sans text-xl text-white text-left">
            La air fryer funciona bien, solo necesitas el método correcto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProblemSection;