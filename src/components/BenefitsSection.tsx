import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { Salad, DollarSign, Clock, Heart, Utensils, Users } from 'lucide-react';
import BenefitImageCard from './BenefitImageCard';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Cocina Saludable",
      description: "Reduce hasta un 80% las calorías al cocinar sin aceite, disfrutando de platos crujientes y sabrosos sin culpa.",
      imageSrc: "/images/benefit-healthy.webp"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Aprobación Familiar",
      description: "Recetas que conquistan a todos: desde los más pequeños hasta los más exigentes, con versiones saludables de sus platos favoritos.",
      imageSrc: "/images/benefit-family.webp"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ahorro de tiempo",
      description: "Prepara comidas completas en 15-25 minutos, perfectas para un estilo de vida moderno y sin complicaciones.",
      imageSrc: "/images/benefit-time.webp"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Economía Familiar",
      description: "Recetas con ingredientes económicos que pueden ahorrarte hasta $200 semanales, evitando el gasto en comida rápida.",
      imageSrc: "/images/benefit-money.webp"
    }
  ];

  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-highlight-gold text-left">
          BENEFICIOS EN TU RUTINA
        </h2>
        <p className="font-sans text-xl text-gray-400 mb-12 text-left">
          Descubre cómo este recetario profesional puede transformar tu forma de cocinar y mejorar la vida de toda tu familia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitImageCard key={index} {...benefit} />
          ))}
        </div>

        <div className="text-left mt-12">
          <CtaButton href="https://pay.hotmart.com/I102633587P?off=y7ekz10e&checkoutMode=10" className="text-xl px-8 py-4">
            💚 SÍ, QUIERO LAS RECETAS
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;