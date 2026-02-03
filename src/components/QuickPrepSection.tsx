import React from 'react';
import { cn } from '@/lib/utils';
import { Timer, Pizza, Cookie, Beef } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const QuickPrepSection: React.FC = () => {
  const recipes = [
    { title: "Cenas completas", icon: <Beef className="text-highlight-gold w-6 h-6" /> },
    { title: "Pizzas sin gluten", icon: <Pizza className="text-highlight-gold w-6 h-6" /> },
    { title: "Postres rápidos", icon: <Cookie className="text-highlight-gold w-6 h-6" /> },
    { title: "Carnes jugosas y doradas", icon: <Timer className="text-highlight-gold w-6 h-6" /> }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-highlight-gold text-left uppercase">
          Pensado para tu día a día
        </h2>
        <p className="font-sans text-xl text-gray-400 mb-12 text-left">
          No son recetas para "ocasiones especiales" que requieren ingredientes raros. Es comida real para tu rutina diaria, lista en 10–15 minutos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 shadow-xl border border-gray-700 flex items-center gap-4 transition-transform hover:scale-[1.02]">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                {recipe.icon}
              </div>
              <h3 className="font-sans text-xl font-bold text-white text-left">{recipe.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-left">
          <CtaButton href={CHECKOUT_LINK} className="bg-mint-green hover:bg-green-500 text-dark-bg shadow-mint-green/30">
            🔥 VER RECETAS RÁPIDAS
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default QuickPrepSection;