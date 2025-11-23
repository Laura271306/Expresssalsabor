import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { Salad, DollarSign, Clock, Heart } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Salad className="w-8 h-8" />,
      title: "Comer saludable",
      description: "Reduce grasas hasta un 80% sin sacrificar sabor"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Ahorro en familia",
      description: "Ahorra hasta $200 semanales en comida"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Ahorro de tiempo",
      description: "Prepara cenas en 10-15 minutos"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comidas familiares deliciosas",
      description: "Platos que toda la familia amará"
    }
  ];

  return (
    <section className="bg-light-bg text-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-12">
          BENEFICIOS EXCLUSIVOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-xl text-center border-b-4 border-highlight-gold transition-shadow duration-300 hover:shadow-2xl">
              <div className="w-12 h-12 bg-highlight-gold/10 text-highlight-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="font-sans text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="font-sans text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CtaButton href="#link-ancoragem" className="text-xl px-8 py-4">
            💚 QUIERO ESTA GUÍA YA
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;