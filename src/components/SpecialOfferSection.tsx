import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { Gift, Check } from 'lucide-react';

const SpecialOfferSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-dark-bg to-[#0f0d0e] text-white py-20 px-6 border-t border-highlight-gold/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-8 text-highlight-gold flex items-center justify-center">
          <Gift className="w-8 h-8 mr-3" /> OFERTA ESPECIAL – SOLO HOY
        </h2>

        <div className="bg-[#282425] rounded-xl p-8 mb-8 shadow-[0_0_40px_rgba(0,170,84,0.3)] border-4 border-cta-primary">
          <h3 className="font-sans text-2xl font-bold mb-6 text-white">Contenido del kit completo:</h3>
          <ul className="space-y-4 text-left mb-8">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
              <span className="font-sans text-lg">Libro digital con más de 600 recetas</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
              <span className="font-sans text-lg">Acceso inmediato a todo el contenido</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
              <span className="font-sans text-lg">Todos los bonos exclusivos</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
              <span className="font-sans text-lg">Actualizaciones de por vida</span>
            </li>
          </ul>

          <div className="mb-8 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <p className="font-sans text-xl mb-2">
              <span className="line-through text-gray-400">$97 USD</span>
              <span className="text-cta-primary text-4xl font-bold ml-4">$9.90 USD</span>
            </p>
            <p className="font-sans text-xl text-cta-primary font-bold">
              🟢 95% de descuento SOLO HOY
            </p>
          </div>

          <CtaButton href="#link-ancoragem" className="text-xl px-8 py-4 mb-6">
            OBTENER ACCESO INMEDIATO
          </CtaButton>

          <p className="font-sans text-lg text-gray-400">
            Garantía de 7 días: Si no quedas satisfecho, te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;