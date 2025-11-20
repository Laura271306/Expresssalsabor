import React from 'react';
import { ShoppingBag, Clock, CalendarCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import BonusCard from './BonusCard';

const bonuses = [
  {
    title: "Guia de Compras Inteligentes",
    description: "Con esta guía sabrás qué comprar, en qué cantidad y cómo ahorrar dinero, manteniendo la calidad y el sabor de tus recetas en la AirFryer.",
    originalPrice: "De $76,00",
    imagePosition: 'left' as const,
    icon: <ShoppingBag />,
  },
  {
    title: "Tabla de tiempos y temperaturas AirFryer",
    description: "Accede a una tabla práctica y detallada con los tiempos y temperaturas exactos para cada alimento, y consigue resultados perfectos en tu AirFryer ¡siempre!",
    originalPrice: "De $54,00",
    imagePosition: 'right' as const,
    icon: <Clock />,
  },
  {
    title: "Menús semanales listos para usar",
    description: "Recibe menús semanales completos, diseñados para aprovechar al máximo tu AirFryer, con opciones rápidas, saludables y deliciosas para toda la familia.",
    originalPrice: "De $25,00",
    imagePosition: 'right' as const,
    icon: <CalendarCheck />,
  },
];

const BonusSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light" border>
      <h2 className="font-serif text-highlight-gold text-4xl md:text-5xl mb-10 text-center md:text-left">
        🎁 Bonos Exclusivos
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
        {bonuses.map((bonus, index) => (
          <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
            <BonusCard {...bonus} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BonusSection;