import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, ListOrdered, ShoppingBag, ChefHat } from 'lucide-react';

const NoChefNeededSection: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Recetas simples",
      description: "Instrucciones fáciles de seguir"
    },
    {
      icon: <ListOrdered className="w-6 h-6" />,
      title: "Pasos claros",
      description: "Cada paso detallado y explicado"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Ingredientes comunes",
      description: "Productos que encuentras en cualquier supermercado"
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: "Resultados profesionales",
      description: "Platos que parecen de un chef experto"
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          NO NECESITAS SER CHEF
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 shadow-xl border border-gray-700 transition-transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-highlight-gold/10 rounded-full flex items-center justify-center mb-4 text-highlight-gold">
                {feature.icon}
              </div>
              <h3 className="font-sans text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="font-sans text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#link-ancoragem"
            className="bg-highlight-gold hover:bg-yellow-600 text-dark-bg font-sans font-bold text-xl px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-highlight-gold/50 inline-block uppercase tracking-wider"
          >
            ✨ Descubre el método hoy
          </a>
        </div>
      </div>
    </section>
  );
};

export default NoChefNeededSection;