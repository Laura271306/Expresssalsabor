import React from 'react';
import { cn } from '@/lib/utils';
import { CookingPot, Check } from 'lucide-react';
import CtaButton from './CtaButton';

const AirfryerMagicaSection: React.FC = () => {
  const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start mb-3">
      <Check className="w-6 h-6 mr-3 text-cta-primary flex-shrink-0 mt-1" />
      <span className="font-sans text-lg text-gray-700 leading-snug">{children}</span>
    </li>
  );

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-6">
            AIRFRYER MÁGICA
          </h2>
          <h3 className="font-sans text-2xl font-bold text-dark-bg mb-6">
            +600 Recetas Fáciles, Rápidas y 100% Saludables
          </h3>
          
          <p className="font-sans text-xl text-gray-700 mb-6 leading-relaxed">
            El recetario digital definitivo para aprovechar al máximo tu freidora de aire y sorprender a tu familia con resultados profesionales en minutos.
          </p>

          <ul className="list-none p-0 mb-8">
            <CheckItem>
              <span className="font-bold text-cta-primary">+600 recetas sin gluten y sin aceite</span> – desde desayunos rápidos hasta cenas completas y sobremesas deliciosas.
            </CheckItem>
            <CheckItem>
              <span className="font-bold text-cta-primary">Instrucciones paso a paso con fotos</span> – sigue fácilmente cada preparación sin complicaciones.
            </CheckItem>
            <CheckItem>
              <span className="font-bold text-cta-primary">Compatible con cualquier modelo</span> – no importa cuál tengas, ¡funciona igual!
            </CheckItem>
          </ul>

          <div className="text-left">
            <CtaButton href="#link-ancoragem" className="text-xl">
              🚀 QUIERO EMPEZAR AHORA
            </CtaButton>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <img 
              src="/images/kit-mockup-main.jpeg" 
              alt="Mockup del libro de recetas Airfryer Mágica" 
              className="w-full h-auto rounded-xl shadow-2xl border-4 border-highlight-gold/50 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirfryerMagicaSection;