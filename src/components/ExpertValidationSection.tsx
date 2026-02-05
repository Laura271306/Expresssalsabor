import React from 'react';
import { cn } from '@/lib/utils';
import { Award, Star, CheckCircle, Clock } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const ExpertValidationSection: React.FC = () => {
  const stats = [
    { icon: <Star className="w-6 h-6" />, value: "96%", label: "Tasa de Satisfacción" },
    { icon: <Clock className="w-6 h-6" />, value: "3 días", label: "Implementación Promedio" }
  ];

  return (
    <section className="bg-light-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-4">
            VALIDADO POR EXPERTOS
          </h2>
          <p className="font-sans text-xl text-gray-700">
            La confianza de profesionales que respaldan nuestra metodología
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-cta-primary mb-2">{stat.value}</div>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                {stat.icon}
                <span className="font-sans text-sm">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Validação científica */}
        <div className="bg-gradient-to-r from-cta-primary/10 to-highlight-gold/10 rounded-2xl p-8 border border-highlight-gold/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-sans text-2xl font-bold text-dark-bg mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 text-highlight-gold" />
                Validación Científica
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-primary flex-shrink-0 mt-1" />
                  <span className="font-sans text-gray-700">
                    Estudios demuestran reducción de hasta 80% en grasas trans
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-primary flex-shrink-0 mt-1" />
                  <span className="font-sans text-gray-700">
                    Conservación de nutrientes hasta 40% más que métodos tradicionales
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-primary flex-shrink-0 mt-1" />
                  <span className="font-sans text-gray-700">
                    Tiempos de cocción optimizados para máxima retención de sabor
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-sans font-bold text-dark-bg mb-2">Certificación de Calidad</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-cta-primary rounded-full"></div>
                    <span className="font-sans">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-highlight-gold rounded-full"></div>
                    <span className="font-sans">HACCP Certified</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-mint-green rounded-full"></div>
                    <span className="font-sans">Nutrition Safe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <CtaButton href={CHECKOUT_LINK} variant="primary" className="text-xl px-12 py-6">
            ¡QUIERO LA VALIDACIÓN EXPERTA!
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default ExpertValidationSection;