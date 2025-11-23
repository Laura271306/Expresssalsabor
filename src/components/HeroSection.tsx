import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contenido de texto */}
        <div className={cn(
          "space-y-8",
          isMobile ? "text-center" : "text-left"
        )}>
          <h1 className="font-sans text-4xl md:text-5xl font-bold leading-tight">
            ¿Cansado de perder tiempo en la cocina y comer siempre lo mismo, sin sabor?
          </h1>
          
          <p className="font-sans text-xl text-gray-300">
            Transforma tu Air Fryer en una máquina de cocina profesional con nuestras recetas exclusivas.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="font-sans text-lg">Más de 600 recetas diseñadas específicamente para Air Fryer</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="font-sans text-lg">Resultados perfectos en 10-15 minutos</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="font-sans text-lg">Recetas saludables y deliciosas para toda la familia</span>
            </li>
          </ul>

          <CtaButton className="mt-8">
            💚 QUIERO MIS RECETAS AHORA
          </CtaButton>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-sans text-2xl font-bold text-white mb-2">Familia Feliz</h3>
                <p className="font-sans text-lg text-gray-300">con 1000+ recetas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;