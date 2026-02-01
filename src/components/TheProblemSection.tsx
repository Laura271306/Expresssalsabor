import React from 'react';
import { cn } from '@/lib/utils';
import { XCircle, CheckCircle } from 'lucide-react';
import CtaButton from './CtaButton';

const TheProblemSection: React.FC = () => {
  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-urgency-red text-left">
          ❌ El problema no es tu air fryer.
        </h2>

        <div className="bg-[#282425] rounded-xl p-8 mb-12 shadow-xl border border-urgency-red/50">
          <h3 className="font-sans text-2xl font-bold mb-6 text-urgency-red flex items-center justify-start">
            <XCircle className="w-6 h-6 mr-3" /> Lo que realmente te frustra:
          </h3>
          <ul className="space-y-6 text-left mb-8">
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">
                El <strong>estrés mental</strong> de llegar a casa cansado y no tener ni idea de qué cocinar que sea rápido y rico.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">
                La <strong>frustración</strong> de gastar dinero en ingredientes para que la receta termine siendo incomible o aburrida.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">
                La <strong>culpa</strong> de terminar pidiendo delivery caro y poco saludable porque "es más fácil" que pelear con la cocina.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-urgency-red mr-3 text-xl font-bold">•</span>
              <span className="font-sans text-xl text-gray-200">
                Sentir que tienes un aparato de 100 dólares acumulando polvo porque <strong>no sabes cómo sacarle provecho</strong>.
              </span>
            </li>
          </ul>
          
          <CtaButton href="#link-ancoragem" className="bg-urgency-red hover:bg-red-700">
            Esto me pasa a mí
          </CtaButton>
        </div>

        <div className="bg-cta-primary/20 rounded-xl p-8 shadow-2xl shadow-cta-primary/30 border border-cta-primary">
          <h3 className="font-sans text-2xl font-bold mb-4 text-cta-primary flex items-center justify-start">
            <CheckCircle className="w-6 h-6 mr-3" /> La verdad:
          </h3>
          <p className="font-sans text-xl text-white text-left">
            Tu Air Fryer es una herramienta de libertad, solo te falta la hoja de ruta correcta para dejar de sufrir en la cocina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProblemSection;