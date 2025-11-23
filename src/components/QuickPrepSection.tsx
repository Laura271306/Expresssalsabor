import React from 'react';
import { cn } from '@/lib/utils';

const QuickPrepSection: React.FC = () => {
  const recipes = [
    "Cenas completas",
    "Pizzas sin gluten",
    "Postres rápidos",
    "Carnes jugosas por dentro y doradas por fuera"
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12">
          EN SOLO 10–15 MINUTOS PODRÁS PREPARAR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="font-sans text-xl font-bold">{recipe}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPrepSection;