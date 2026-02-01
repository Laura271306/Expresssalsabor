import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, ListOrdered, ShoppingBag, Zap } from 'lucide-react';
import CtaButton from './CtaButton';

const NoChefNeededSection: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Recetas simples",
      description: "Instrucciones fáciles de seguir"
    },
    {
      icon: <ListOrdered className="w-7 h-7" />,
      title: "Pasos claros",
      description: "Cada paso detallado y explicado"
    },
    {
      icon: <ShoppingBag className="w-7 h-7" />,
      title: "Ingredientes comunes",
      description: "Productos que encuentras en cualquier supermercado"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Zero complicación",
      description: "Sin estrés, sin problemas"
    }
  ];

  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-12 text-dark-bg text-left">
          NO NECESITAS SER CHEF
        </h2>

        {/* Comparación directa con YouTube */}
        <div className="bg-white rounded-xl p-8 mb-12 shadow-2xl border-l-8 border-urgency-red">
            <p className="font-sans text-2xl md:text-3xl font-bold text-dark-bg mb-4 leading-tight">
                "En YouTube pierdes tiempo buscando. <br className="hidden md:block" />
                Aquí <span className="text-cta-primary">solo eliges y cocinas</span>."
            </p>
            <p className="font-sans text-lg text-gray-600">
                Olvida los videos largos para recetas que podrías entender en segundos. 
                Nuestras instrucciones van directo al grano para que recuperes tu tiempo.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-xl border-t-4 border-highlight-gold transition-transform hover:scale-[1.02]">
              <div className="w-14 h-14 bg-highlight-gold/10 rounded-full flex items-center justify-center mb-4 text-highlight-gold">
                {feature.icon}
              </div>
              <h3 className="font-sans text-xl font-bold mb-2 text-dark-bg">{feature.title}</h3>
              <p className="font-sans text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-left mt-12">
          <CtaButton 
            href="#link-ancoragem"
            variant="primary" 
            className="bg-highlight-gold hover:bg-yellow-600 text-dark-bg text-xl px-8 py-4 shadow-highlight-gold/50"
          >
            ✨ Resultados profesionales sin esfuerzo
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default NoChefNeededSection;