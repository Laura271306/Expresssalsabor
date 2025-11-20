import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import SectionWrapper from './SectionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();

  // Banner de Urgência (Sticky: não, apenas top)
  const UrgencyBanner = () => (
    <div className="bg-urgency-red text-white text-center font-sans font-bold text-sm py-3 px-5">
      🔥 OFERTA VÁLIDA SOLO HOY • ¡Compra ahora! • Bonificaciones incluidas
    </div>
  );

  // Background: Gradiente radial escuro (#161314 → #090A0E)
  const heroBgClasses = "bg-dark-bg relative overflow-hidden";
  
  // Using a placeholder image for the AirFryer
  const AirFryerImage = () => (
    <div className={cn(
      "relative h-full w-full",
      isMobile ? "h-[300px]" : "lg:h-[600px]"
    )}>
      {/* Placeholder for AirFryer image with ready dishes */}
      <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center text-white text-xs">
        [Placeholder: AirFryer com pratos ready]
      </div>
      {/* Mask gradient (fade bottom 10-15%) - simulated with overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </div>
  );

  return (
    <>
      <UrgencyBanner />
      <SectionWrapper 
        bgColor="dark" 
        className={cn(
          heroBgClasses, 
          "min-h-[550px] md:min-h-[700px] flex items-center py-16 md:py-24"
        )}
      >
        <div className={cn(
          "grid gap-8 items-center w-full",
          // Layout Mobile-First: reverse mobile
          isMobile ? "grid-cols-1" : "lg:grid-cols-2 lg:gap-16"
        )}>
          {/* Text Content (50% width desktop, reverse mobile) */}
          <div className={cn(
            "order-2 lg:order-1",
            isMobile ? "text-center" : "text-left"
          )}>
            <h1 className="font-serif text-white font-semibold leading-tight mb-5"
              style={{ fontSize: isMobile ? '25px' : '32px' }}
            >
              ¿Cansado de perder tiempo en la cocina, comer siempre lo mismo, sin sabor y pagando delivery cada semana?
            </h1>

            <p className="font-sans text-body-text/90 mb-8"
              style={{ fontSize: isMobile ? '13px' : '16px', lineHeight: 1.5 }}
            >
              A mí también me pasaba...
              <br /><br />
              Hasta que descubrí el <span className="font-bold text-highlight-gold">SECRETO</span> que TODO chef casero necesita saber.
              Ahora mis 2,847 clientes preparan cenas profesionales en 15 minutos.
              Sin recetas fallidas. Sin ingredientes raros. Sin culpa.
            </p>

            <CtaButton href="#link-ancoragem" className="mt-6">
              SÍ, QUIERO TRANSFORMAR MI AIRFRYER
            </CtaButton>
          </div>

          {/* Image Content (50% width desktop, reverse mobile) */}
          <div className={cn(
            "order-1 lg:order-2",
            isMobile ? "h-[300px]" : "h-full"
          )}>
            <AirFryerImage />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default HeroSection;