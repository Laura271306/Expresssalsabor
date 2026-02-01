import React from 'react';
import { cn } from '@/lib/utils';
import { X, Check } from 'lucide-react';
import CtaButton from './CtaButton';

const BeforeAfterSection: React.FC = () => {
  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-left mb-12">
          ¿CÓMO SERÁ TU VIDA A PARTIR DE HOY?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Antes */}
          <div className="bg-white border-4 border-urgency-red rounded-xl p-8 shadow-xl">
            <h3 className="font-serif text-3xl font-bold text-urgency-red mb-6 text-center flex items-center justify-center">
              <span className="text-4xl mr-3">🔻</span> Tu Rutina Hoy
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <X className="w-6 h-6 text-urgency-red mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg"><strong>Ansiedad y cansancio:</strong> La pregunta "¿qué cocino hoy?" se siente como una carga pesada al final del día.</span>
              </li>
              <li className="flex items-start">
                <X className="w-6 h-6 text-urgency-red mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg"><strong>Culpa por la salud:</strong> Comer comida grasienta o delivery porque no tienes energía para algo mejor.</span>
              </li>
              <li className="flex items-start">
                <X className="w-6 h-6 text-urgency-red mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg"><strong>Esclavo de la cocina:</strong> Perder tu poco tiempo libre limpiando sartenes y ollas llenas de grasa.</span>
              </li>
            </ul>
          </div>

          {/* Después */}
          <div className="bg-white border-4 border-cta-primary rounded-xl p-8 shadow-xl">
            <h3 className="font-serif text-3xl font-bold text-cta-primary mb-6 text-center flex items-center justify-center">
              <span className="text-4xl mr-3">🔺</span> Tu Nueva Realidad
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg"><strong>Paz y control:</strong> Llegas a casa y en 10 minutos tienes una cena de chef lista, sin pensar.</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg"><strong>Orgullo familiar:</strong> Ver la cara de felicidad de tus hijos y pareja comiendo algo sano que les encanta.</span>
              </li>
              <li className="flex items-start">
                <Check className="w-6 h-6 text-cta-primary mr-3 flex-shrink-0 mt-1" />
                <span className="font-sans text-lg"><strong>Tiempo para ti:</strong> Recuperas 45 minutos al día para descansar mientras la Air Fryer hace el trabajo sucio.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-left">
          <CtaButton href="#link-ancoragem">
            Quiero el después, no el antes
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;