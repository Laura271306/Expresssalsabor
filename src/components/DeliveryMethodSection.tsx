import React from 'react';
import { Mail, Smartphone, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const DeliveryMethodSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light" border className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans font-bold text-dark-bg text-2xl md:text-3xl mb-8 text-center md:text-left">
          ¿Cómo y cuándo recibiré mi material?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paso 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-cta-primary/10 rounded-full flex items-center justify-center text-cta-primary mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-dark-bg text-lg mb-2">Acceso Instantáneo</h3>
            <p className="font-sans text-gray-700 text-sm">
              Tras completar tu pago, recibirás automáticamente un correo con el enlace de descarga de todo el material. Sin esperas.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-dark-bg text-lg mb-2">Formato Digital (PDF)</h3>
            <p className="font-sans text-gray-700 text-sm">
              Podrás leerlo en tu móvil, tablet o computadora. Llévalo contigo a la cocina o al supermercado con total comodidad.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-12 h-12 bg-urgency-red/10 rounded-full flex items-center justify-center text-urgency-red mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-sans font-bold text-dark-bg text-lg mb-2">Cocina Hoy Mismo</h3>
            <p className="font-sans text-gray-700 text-sm">
              No hay envíos físicos ni demoras. Elige tu primera receta y prepárala en menos de 15 minutos hoy mismo.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DeliveryMethodSection;