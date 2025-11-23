import React from 'react';
import { cn } from '@/lib/utils';
import { Timer, Pizza, Cookie, Beef } from 'lucide-react';

const QuickPrepSection: React.FC = () => {
  const recipes = [
    { title: "Cenas completas", icon: <Beef className="text-highlight-gold w-6 h-6" /> },
    { title: "Pizzas sin gluten", icon: <Pizza className="text-highlight-gold w-6 h-6" /> },
    { title: "Postres rápidos", icon: <Cookie className="text-highlight-gold w-6 h-6" /> },
    { title: "Carnes jugosas y doradas", icon: <Timer className="text-highlight-gold w-6 h-6" /> }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12 text-highlight-gold">
          EN SOLO 10–15 MINUTOS PODRÁS PREPARAR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 shadow-xl border border-gray-700 flex items-center gap-4 transition-transform hover:scale-[1.02]">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                {recipe.icon}
              </div>
              <h3 className="font-sans text-xl font-bold text-white text-left">{recipe.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickPrepSection;