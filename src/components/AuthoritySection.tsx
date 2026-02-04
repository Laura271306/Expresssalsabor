import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Award, ChefHat, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const AuthoritySection: React.FC = () => {
  const points = [
    {
      icon: <ChefHat className="w-8 h-8 text-highlight-gold" />,
      title: "Validado por Chefs",
      description: "El método C.R.I.S.P. fue desarrollado y probado por profesionales de la cocina rápida y saludable."
    },
    {
      icon: <Award className="w-8 h-8 text-highlight-gold" />,
      title: "Más de 5,000 Pruebas",
      description: "Cada receta fue testeada en múltiples modelos de Air Fryer para garantizar resultados perfectos y consistentes."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-highlight-gold" />,
      title: "Enfoque en la Rutina",
      description: "No son recetas de revista, sino soluciones reales para cenas rápidas y saludables de lunes a viernes."
    }
  ];

  return (
    <SectionWrapper bgColor="dark" border>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">
          ¿Quién está detrás de este método?
        </h2>
        <p className="font-serif text-xl text-gray-300 mb-12">
          No es un recetario improvisado. Es una estrategia de cocina validada para el éxito.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="p-6 bg-[#282425] rounded-xl shadow-lg border-t-4 border-highlight-gold/50">
              <div className="mb-4 flex justify-center">{point.icon}</div>
              <h3 className="font-sans text-lg font-bold text-white mb-2">{point.title}</h3>
              <p className="font-sans text-sm text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AuthoritySection;