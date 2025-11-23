import React from 'react';
import { cn } from '@/lib/utils';
import { ListChecks, Cake, ShoppingCart, Leaf, Gift } from 'lucide-react';

const SmallBonusesSection: React.FC = () => {
  const bonuses = [
    {
      icon: <ListChecks className="w-8 h-8" />,
      title: "Los 10 errores que arruinan tus recetas",
      description: "Guía para evitar los fallos más comunes"
    },
    {
      icon: <Cake className="w-8 h-8" />,
      title: "Paquete de postres en 10–12 minutos",
      description: "Deliciosos postres listos en minutos"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Lista inteligente de compras",
      description: "Optimiza tus compras para ahorrar tiempo y dinero"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Paquete especial sin gluten",
      description: "Recetas deliciosas para dietas especiales"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Sorpresas adicionales dentro",
      description: "Bonos exclusivos solo para ti"
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-4 text-highlight-gold">
          BONOS EXCLUSIVOS INCLUIDOS
        </h2>
        <p className="font-sans text-xl text-gray-400 text-center mb-12">
          Acceso a recursos valiosos que potencian tus resultados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 shadow-2xl border-2 border-highlight-gold transition-transform hover:scale-[1.02]">
              <div className="text-4xl text-highlight-gold mb-4 flex items-center justify-center w-12 h-12 bg-highlight-gold/10 rounded-full">
                {bonus.icon}
              </div>
              <h3 className="font-sans text-xl font-bold mb-2 text-white">{bonus.title}</h3>
              <p className="font-sans text-gray-300">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallBonusesSection;