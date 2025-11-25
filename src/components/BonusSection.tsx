import React from 'react';
import { ShoppingBag, Clock, CalendarCheck, ListChecks, Cake, Leaf, Gift } from 'lucide-react';
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
  // Novos bônus adicionados
  {
    title: "Los 10 errores que arruinan tus recetas",
    description: "Guía esencial para identificar y corregir los fallos más comunes que impiden que tus platos queden crujientes y perfectos.",
    originalPrice: "De $15,00",
    imagePosition: 'left' as const,
    icon: <ListChecks />,
  },
  {
    title: "Paquete de postres en 10–12 minutos",
    description: "Recetas rápidas y deliciosas para satisfacer tu antojo de dulce sin pasar horas en la cocina. ¡Postres listos en un abrir y cerrar de ojos!",
    originalPrice: "De $18,00",
    imagePosition: 'right' as const,
    icon: <Cake />,
  },
  {
    title: "Paquete especial sin gluten",
    description: "Una colección de recetas aptas para dietas sin gluten, garantizando sabor y salud sin comprometer la textura crujiente de tu Air Fryer.",
    originalPrice: "De $22,00",
    imagePosition: 'left' as const,
    icon: <Leaf />,
  },
  {
    title: "Sorpresas adicionales dentro",
    description: "Acceso a contenido exclusivo y actualizaciones futuras que te ayudarán a llevar tus habilidades con la Air Fryer al siguiente nivel.",
    originalPrice: "De $10,00",
    imagePosition: 'right' as const,
    icon: <Gift />,
  },
];

const BonusSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark" border>
      <h2 className="font-serif text-highlight-gold text-4xl md:text-5xl mb-10 text-center md:text-left">
        🎁 Bonos Exclusivos
      </h2>

      <div className="flex flex-col flex-wrap justify-center gap-6 md:gap-8">
        {bonuses.map((bonus, index) => (
          <div key={index} className="w-full mx-auto max-w-3xl">
            <BonusCard {...bonus} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BonusSection;