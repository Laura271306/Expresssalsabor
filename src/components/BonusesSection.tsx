import React from 'react';
import { cn } from '@/lib/utils';

const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      icon: "📋",
      title: "Los 10 errores que arruinan tus recetas",
      description: "Guía para evitar los fallos más comunes"
    },
    {
      icon: "🍰",
      title: "Paquete de postres en 10–12 minutos",
      description: "Deliciosos postres listos en minutos"
    },
    {
      icon: "🛒",
      title: "Lista inteligente de compras",
      description: "Optimiza tus compras para ahorrar tiempo y dinero"
    },
    {
      icon: "🌱",
      title: "Paquete especial sin gluten",
      description: "Recetas deliciosas para dietas especiales"
    },
    {
      icon: "🎁",
      title: "Sorpresas adicionales dentro",
      description: "Bonos exclusivos solo para ti"
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12">
          BONOS EXCLUSIVOS INCLUIDOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-yellow-500">
              <div className="text-4xl text-yellow-400 mb-4">{bonus.icon}</div>
              <h3 className="font-sans text-xl font-bold mb-2">{bonus.title}</h3>
              <p className="font-sans text-gray-300">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;