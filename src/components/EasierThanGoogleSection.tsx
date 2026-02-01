import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Search, BookOpen, Clock, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';

const EasierThanGoogleSection: React.FC = () => {
  const comparisonPoints = [
    {
      icon: <Search className="w-6 h-6 text-urgency-red" />,
      title: "Búsqueda sin fin",
      description: "En Google, pasas horas buscando, comparando y filtrando recetas que rara vez funcionan en tu Air Fryer.",
      bgColor: "bg-urgency-red/10",
      borderColor: "border-urgency-red"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-cta-primary" />,
      title: "Solución Completa",
      description: "Con el Ebook, tienes +600 recetas probadas, tiempos exactos y planificación de comidas, todo en un solo lugar.",
      bgColor: "bg-cta-primary/10",
      borderColor: "border-cta-primary"
    }
  ];

  const benefitPoints = [
    { icon: <Clock className="w-5 h-5 text-highlight-gold" />, text: "Tiempos y temperaturas exactas garantizadas." },
    { icon: <Smartphone className="w-5 h-5 text-highlight-gold" />, text: "Acceso de por vida en móvil, tablet o PC." },
    { icon: <BookOpen className="w-5 h-5 text-highlight-gold" />, text: "Más fácil que seguir un video de YouTube." },
  ];

  return (
    <SectionWrapper bgColor="light" border>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-dark-bg text-left">
          MÁS FÁCIL QUE BUSCAR EN GOOGLE
        </h2>
        <p className="font-sans text-xl text-gray-700 mb-12 text-left">
          Deja de perder tiempo buscando recetas incompletas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {comparisonPoints.map((point, index) => (
            <div 
              key={index} 
              className={cn(
                "p-6 rounded-xl shadow-lg border-t-4",
                point.bgColor,
                point.borderColor
              )}
            >
              <div className="flex items-center mb-3">
                {point.icon}
                <h3 className="font-sans text-xl font-bold text-dark-bg ml-3">{point.title}</h3>
              </div>
              <p className="font-sans text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200 mb-12">
          <h3 className="font-sans text-2xl font-bold text-dark-bg mb-4 text-left">
            Con el Ebook Airfryer Mágica, tú obtienes:
          </h3>
          <ul className="space-y-3 text-left mb-8">
            {benefitPoints.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 mt-1 mr-3">{benefit.icon}</span>
                <span className="font-sans text-lg text-dark-bg">{benefit.text}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-left">
            <CtaButton href="#link-ancoragem">
              📖 ACCESO INMEDIATO AL RECETARIO
            </CtaButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EasierThanGoogleSection;