import React from 'react';
import { cn } from '@/lib/utils';
import { CookingPot, Check, Zap, Clock, Thermometer, Pizza, Cookie, Beef, Timer } from 'lucide-react';
import CtaButton from './CtaButton';
import { CHECKOUT_LINK } from '@/lib/constants';

const AirfryerMagicaSection: React.FC = () => {
  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Técnicas de chefs" },
    { icon: <Clock className="w-5 h-5" />, text: "Tiempos exactos" },
    { icon: <Thermometer className="w-5 h-5" />, text: "Calor optimizado" },
  ];

  const recipeTypes = [
    { title: "Cenas en 12 min", icon: <Beef className="w-5 h-5" /> },
    { title: "Pizzas crujientes", icon: <Pizza className="w-5 h-5" /> },
    { title: "Postres Express", icon: <Cookie className="w-5 h-5" /> },
    { title: "Carnes Doradas", icon: <Timer className="w-5 h-5" /> }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-bg mb-4">
            AIRFRYER MÁGICA
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            {features.map((f, i) => (
              <span key={i} className="flex items-center gap-2 bg-highlight-gold/10 text-highlight-gold px-3 py-1 rounded-full text-sm font-bold">
                {f.icon} {f.text}
              </span>
            ))}
          </div>

          <p className="font-sans text-lg font-bold text-cta-primary mb-6 italic">
            “Pensado para decidir rápido, no para estudiar.”
          </p>
          
          <p className="font-sans text-xl text-gray-700 mb-2 leading-relaxed">
            No es solo un libro, es el <span className="font-bold text-dark-bg">mapa exacto</span> para que tu freidora deje de ser un adorno y se convierta en tu mejor aliada.
          </p>
          <p className="font-sans text-highlight-gold font-bold mb-6">
            "Pensado para resolver comidas reales, no recetas bonitas."
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {recipeTypes.map((type, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-light-bg rounded-lg border border-gray-200">
                <span className="text-highlight-gold">{type.icon}</span>
                <span className="font-sans font-bold text-sm text-dark-bg">{type.title}</span>
              </div>
            ))}
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <span className="text-lg text-gray-700">+600 recetas probadas (sin fallos)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-cta-primary flex-shrink-0" />
              <span className="text-lg text-gray-700">Paso a paso visual y ultra-rápido</span>
            </li>
          </ul>

          <CtaButton href={CHECKOUT_LINK} className="text-xl">
            🚀 QUIERO EL MAPA COMPLETO
          </CtaButton>
        </div>
        
        <div className="relative group">
          <img 
            src="/images/kit-mockup-main.jpeg" 
            alt="Libro Airfryer Mágica" 
            className="w-full h-auto rounded-xl shadow-2xl border-4 border-highlight-gold/50 transition-transform group-hover:scale-[1.01]"
            loading="lazy"
            width="450"
            height="450"
          />
        </div>
      </div>
    </section>
  );
};

export default AirfryerMagicaSection;