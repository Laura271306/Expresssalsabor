import React from 'react';
import { cn } from '@/lib/utils';

const WhatMakesUsUniqueSection: React.FC = () => {
  const features = [
    {
      title: "Recetas específicas para air fryer",
      description: "Cada receta está diseñada para aprovechar al máximo tu Air Fryer"
    },
    {
      title: "Tiempos exactos",
      description: "Tiempos precisos para cada alimento y capacidad"
    },
    {
      title: "Temperaturas precisas",
      description: "Temperaturas optimizadas para resultados perfectos"
    },
    {
      title: "Técnicas probadas",
      description: "Métodos validados por chefs profesionales"
    }
  ];

  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12">
          🔥 Qué hace único a Expreso al Sabor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">{index + 1}</span>
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