import React from 'react';
import { cn } from '@/lib/utils';

const NoChefNeededSection: React.FC = () => {
  const features = [
    {
      title: "Recetas simples",
      description: "Instrucciones fáciles de seguir"
    },
    {
      title: "Pasos claros",
      description: "Cada paso detallado y explicado"
    },
    {
      title: "Ingredientes comunes",
      description: "Productos que encuentras en cualquier supermercado"
    },
    {
      title: "Resultados profesionales",
      description: "Platos que parecen de un chef experto"
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12">
          NO NECESITAS SER CHEF
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="font-sans text-xl font-bold mb-2">{feature.title}</h3>
              <p className="font-sans text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-dark-bg font-sans font-bold text-xl px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            ✨ Descubre el método hoy
          </button>
        </div>
      </div>
    </section>
  );
};

export default NoChefNeededSection;