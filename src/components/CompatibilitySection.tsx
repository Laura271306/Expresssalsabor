import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Zap, CookingPot, Scale } from 'lucide-react';

const CompatibilitySection: React.FC = () => {
  const models = [
    { title: "Grandes o pequeñas", description: "Funciona en cualquier tamaño", icon: <Scale /> },
    { title: "Analógicas o digitales", description: "Compatible con todos los tipos", icon: <Zap /> },
    { title: "Canasta simple o doble", description: "Adaptable a tu freidora", icon: <CookingPot /> }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-white">
          Compatible con cualquier modelo
        </h2>
        <p className="font-sans text-xl text-gray-400 mb-12">
          No necesitas una freidora cara. Las recetas funcionan en todos los modelos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <div key={index} className="bg-[#282425] rounded-xl p-6 shadow-xl border border-gray-700 transition-transform hover:scale-[1.02]">
              <div className="text-3xl mb-4 flex justify-center text-highlight-gold">
                {model.icon}
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-1">{model.title}</h3>
              <p className="font-sans text-gray-400 text-sm">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;