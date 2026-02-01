import React from 'react';
import { cn } from '@/lib/utils';
import { Utensils, Clock, Thermometer, Zap } from 'lucide-react';
import CtaButton from './CtaButton';

const WhatMakesUsUniqueSection: React.FC = () => {
  const features = [
    {
      icon: <Utensils className="w-7 h-7" />,
      title: "Recetas específicas",
      description: "Diseñadas para aprovechar al máximo tu Air Fryer"
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Tiempos exactos",
      description: "Tiempos precisos para cada alimento"
    },
    {
      icon: <Thermometer className="w-7 h-7" />,
      title: "Temperaturas precisas",
      description: "Optimizadas para resultados perfectos"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Técnicas probadas",
      description: "Métodos validados por profesionales"
    }
  ];

  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12 text-left">
          🔥 Qué hace único a Expreso al Sabor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-xl border-t-4 border-highlight-gold transition-shadow duration-300 hover:shadow-2xl">
              <div className="w-14 h-14 bg-highlight-gold/10 rounded-full flex items-center justify-center mb-4 text-highlight-gold">
                {feature.icon}
              </div>
              <h3 className="font-sans text-xl font-bold mb-2">{feature.title}</h3>
              <p className="font-sans text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-left">
          <CtaButton href="#link-ancoragem">
            Quiero cocinar sin complicaciones
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsUniqueSection;