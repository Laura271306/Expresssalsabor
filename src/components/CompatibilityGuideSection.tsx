import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Zap, Scale, Clock } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const CompatibilityGuideSection: React.FC = () => {
  const features = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Todos los tamaños",
      description: "Desde 2 Qt hasta 8 Qt, funciona en cualquier capacidad"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tecnologías avanzadas",
      description: "Compatible con convección, vapor y combinadas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Controles digitales",
      description: "Funciona con botones, táctil y app controlada"
    }
  ];

  return (
    <section className="bg-light-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-4">
            COMPATIBILIDAD TOTAL
          </h2>
          <p className="font-sans text-xl text-gray-700">
            Funciona con cualquier modelo y marca de Air Fryer del mercado
          </p>
        </div>

        {/* Características de compatibilidad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-cta-primary/10 rounded-full flex items-center justify-center text-cta-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-sans text-xl font-bold text-dark-bg mb-2">{feature.title}</h3>
              <p className="font-sans text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Garantía de compatibilidad */}
        <div className="bg-gradient-to-r from-highlight-gold/10 to-cta-primary/10 rounded-2xl p-8 border border-highlight-gold/30">
          <div className="text-center mb-6">
            <h3 className="font-sans text-2xl font-bold text-dark-bg mb-4">
              Garantía de Compatibilidad
            </h3>
            <p className="font-sans text-gray-700">
              Si tu Air Fryer no funciona con nuestro método, te devolvemos el 100% de tu dinero
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-highlight-gold mb-2">100%</div>
              <p className="font-sans text-gray-600">Compatibilidad Garantizada</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cta-primary mb-2">24h</div>
              <p className="font-sans text-gray-600">Soporte Rápido</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-urgency-red mb-2">7 días</div>
              <p className="font-sans text-gray-600">Prueba Sin Riesgo</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <CtaButton href={CHECKOUT_LINK} variant="primary" className="text-xl px-12 py-6">
            ¡QUIERO COMPATIBILIDAD TOTAL!
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default CompatibilityGuideSection;