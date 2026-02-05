import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { Check } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-dark-bg text-white py-12 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 md:space-y-8 text-left">
          <div className="inline-block bg-cta-primary text-dark-bg font-sans font-bold text-xs md:text-sm px-3 py-1 rounded-full mb-2 shadow-lg">
            ✨ BESTSELLER: +5,000 Clientes Satisfechos
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            ¿Cansado de perder tiempo en la cocina y comer siempre lo mismo, sin sabor?
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-gray-300">
            Transforma tu Air Fryer en una máquina de cocina profesional con nuestras recetas exclusivas.
          </p>

          <ul className="space-y-3 pt-2 md:pt-4">
            <li className="flex items-start">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-cta-primary mr-3 flex-shrink-0" />
              <span className="font-sans text-base md:text-lg">Más de 600 recetas diseñadas específicamente para Air Fryer</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-cta-primary mr-3 flex-shrink-0" />
              <span className="font-sans text-base md:text-lg">Resultados perfectos en 10-15 minutos</span>
            </li>
          </ul>

          <p className="font-sans text-highlight-gold font-bold text-base md:text-lg italic">
            "Si sabes presionar botones, sabes usar este método."
          </p>
          
          <div className="pt-2 md:pt-4">
            <CtaButton href="#link-ancoragem" className="w-full md:w-auto">
              Quiero dejar de perder tiempo
            </CtaButton>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm md:max-w-md">
            <img 
              src="/images/kit-mockup-main.jpeg" 
              alt="Kit Completo Air Fryer" 
              width="450"
              height="450"
              className="w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-highlight-gold/50 object-cover"
              style={{ maxHeight: '450px' }}
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute -top-4 -right-2 md:-right-4 bg-urgency-red text-white rounded-full p-2 px-4 md:p-3 md:px-6 font-bold text-base md:text-lg shadow-xl rotate-3">
                +600 Recetas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;