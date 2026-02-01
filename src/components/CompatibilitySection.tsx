import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Zap, CookingPot, Scale } from 'lucide-react';
import CtaButton from './CtaButton';

const CompatibilitySection: React.FC = () => {
  const models = [
    { title: "Grandes o pequeñas", description: "Funciona en cualquier tamaño", icon: <Scale className="w-7 h-7" /> },
    { title: "Analógicas o digitales", description: "Compatible con todos los tipos", icon: <Zap className="w-7 h-7" /> },
    { title: "Canasta simple o doble", description: "Adaptable a tu freidora", icon: <CookingPot className="w-7 h-7" /> }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-white text-left">
          Funciona con cualquier air fryer
        </h2>
        <p className="font-sans text-xl text-gray-400 mb-12 text-left">
          No importa la marca ni el modelo. Estas recetas han sido probadas en freidoras de todos los tipos para garantizar tu éxito.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {models.map((model, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 shadow-xl border border-gray-200/20 transition-transform hover:scale-[1.02] text-left">
              <div className="w-14 h-14 mb-4 flex justify-center items-center text-highlight-gold bg-highlight-gold/10 rounded-full">
                {model.icon}
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-1">{model.title}</h3>
              <p className="font-sans text-gray-400 text-sm">{model.description}</p>
            </div>
          ))}
        </div>

        <div className="text-left">
          <CtaButton href="#link-ancoragem" className="bg-highlight-gold hover:bg-yellow-600 text-dark-bg">
            ✔ PROBAR EN MI AIR FRYER
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;