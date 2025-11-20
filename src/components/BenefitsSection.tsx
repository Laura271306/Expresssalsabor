import React from 'react';
import { Utensils, Users, Clock, DollarSign } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import BenefitCard from './BenefitCard';
import CtaButton from './CtaButton';

const benefits = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "🍳 Cocina Saludable",
    description: "Reduce hasta un 80% las calorías al cocinar sin aceite, disfrutando de platos crujientes y sabrosos sin culpa.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "👨‍👩‍👧 Aprobación Familiar",
    description: "Recetas que conquistan a todos: desde los más pequeños hasta los más exigentes, con versiones saludables de sus platos favoritos.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "⏰ Ahorro de tiempo",
    description: "Prepara comidas completas en 15-25 minutos, perfectas para un estilo de vida moderno y sin complicaciones.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "💰 Economía Familiar",
    description: "Recetas con ingredientes económicos que pueden ahorrarte hasta $200 semanales, evitando el gasto en comida rápida.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark">
      <div className="text-center">
        <h2 className="font-serif text-body-text text-4xl md:text-5xl mb-4">
          ⭐ Beneficios Exclusivos
        </h2>
        <p className="font-sans text-white text-sm mb-10 md:mb-16 max-w-3xl mx-auto">
          Descubre cómo este recetario profesional puede transformar tu forma de cocinar y mejorar la vida de toda tu familia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 justify-center">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <CtaButton href="#link-ancoragem" className="mt-16 mx-auto">
          SÍ, QUIERO LAS RECETAS
        </CtaButton>
      </div>
    </SectionWrapper>
  );
};

export default BenefitsSection;