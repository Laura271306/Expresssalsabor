import React from 'react';
import { cn } from '@/lib/utils';
import { Utensils, Clock, Thermometer, Zap } from 'lucide-react';

const WhatMakesUsUniqueSection: React.FC = () => {
  const features = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Recetas específicas para air fryer",
      description: "Cada receta está diseñada para aprovechar al máximo tu Air Fryer"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tiempos exactos",
      description: "Tiempos precisos para cada alimento y capacidad"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Temperaturas precisas",
      description: "Temperaturas optimizadas para resultados perfectos"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Técnicas probadas",
      description: "Métodos validados por chefs profesionales"
    }
  ];

  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12 text-left">
          🔥 Qué hace único a Expreso al Sabor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-xl border-t-4 border-highlight-gold transition-shadow duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-highlight-gold/10 rounded-full flex items-center justify-start mb-4 text-highlight-gold">
                {feature.icon}
              </div>
              <h3 className="font-sans text-xl font-bold mb-2">{feature.title}</h3>
              <p className="font-sans text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsUniqueSection;