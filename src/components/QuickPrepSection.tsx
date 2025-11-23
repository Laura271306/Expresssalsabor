import React from 'react';
import { cn } from '@/lib/utils';
import { Timer } from 'lucide-react';

const QuickPrepSection: React.FC = () => {
  const recipes = [
    "Cenas completas",
    "Pizzas sin gluten",
    "Postres rápidos",
    "Carnes jugosas por dentro y doradas por fuera"
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12 text-highlight-gold">
          EN SOLO 10–15 MINUTOS PODRÁS PREPARAR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 shadow-xl border border-gray-700 transition-transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-cta-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <Timer className="text-white w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-bold text-white">{recipe}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPrepSection;