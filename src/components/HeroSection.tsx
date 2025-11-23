import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { useIsMobile } from '@/hooks/use-mobile';
import { BookOpen, Check } from 'lucide-react';

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-dark-bg text-white py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Sutil fondo de textura para sensación premium */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contenido de texto */}
        <div className={cn(
          "space-y-6 md:space-y-8",
          isMobile ? "text-center" : "text-left"
        )}>
          <h1 className="font-sans text-4xl md:text-6xl font-bold leading-tight text-highlight-gold">
            ¿Cansado de perder tiempo en la cocina y comer siempre lo mismo, sin sabor?
          </h1>
          
          <p className="font-sans text-xl text-gray-300">
            Transforma tu Air Fryer en una máquina de cocina profesional con nuestras recetas exclusivas.
          </p>

          <ul className="space-y-3 pt-4">
            <li className="flex items-start justify-center lg:justify-start">
              <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0" />
              <span className="font-sans text-lg">Más de 600 recetas diseñadas específicamente para Air Fryer</span>
            </li>
            <li className="flex items-start justify-center lg:justify-start">
              <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0" />
              <span className="font-sans text-lg">Resultados perfectos en 10-15 minutos</span>
            </li>
            <li className="flex items-start justify-center lg:justify-start">
              <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0" />
              <span className="font-sans text-lg">Recetas saludables y deliciosas para toda la familia</span>
            </li>
          </ul>

          <CtaButton href="#link-ancoragem" className="mt-8 mx-auto lg:mx-0">
            💚 QUIERO MIS RECETAS AHORA
          </CtaButton>
        </div>

        {/* Imagen Placeholder (Simulando un mockup 3D del libro) */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* High-quality image placeholder */}
            <div className="bg-gray-700 h-80 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-highlight-gold/50 flex items-center justify-center p-8">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-highlight-gold mx-auto mb-4" />
                <h3 className="font-serif text-3xl font-bold text-white mb-2">Expreso al Sabor</h3>
                <p className="font-sans text-xl text-gray-300">Placeholder: Mockup 3D del Recetario Digital</p>
              </div>
            </div>
            {/* Floating element for "1000+ recetas" */}
            <div className="absolute -top-4 -right-4 bg-urgency-red text-white rounded-full p-3 px-6 font-bold text-lg shadow-xl rotate-3">
                +600 Recetas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;