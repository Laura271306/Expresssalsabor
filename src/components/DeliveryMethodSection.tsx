import React from 'react';
import { Mail, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const DeliveryMethodSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light" border className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans font-bold text-dark-bg text-2xl md:text-3xl mb-8 text-center md:text-left">
          Entrega Inmediata y Compatibilidad Total
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-cta-primary/10 rounded-full flex items-center justify-center text-cta-primary mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-dark-bg text-lg mb-2">Acceso Instantáneo</h3>
            <p className="font-sans text-gray-700 text-sm">
              Recibe un correo con el enlace de descarga al instante. Sin esperas.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-dark-bg text-lg mb-2">PDF Interactivo</h3>
            <p className="font-sans text-gray-700 text-sm">
              Llévalo en tu móvil o tablet. Ideal para seguir los pasos mientras cocinas.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-urgency-red/10 rounded-full flex items-center justify-center text-urgency-red mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-dark-bg text-lg mb-2">100% Compatible</h3>
            <p className="font-sans text-gray-700 text-sm">
              Ninja, Philips, Cosori... funciona en cualquier marca y tamaño de freidora.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DeliveryMethodSection;