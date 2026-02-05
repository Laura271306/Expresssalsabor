import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Star, Globe, Clock } from 'lucide-react';

interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Metric: React.FC<MetricProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="text-cta-primary mb-2">{icon}</div>
    <p className="font-sans text-3xl md:text-4xl font-bold text-highlight-gold leading-none mb-1">
      {value}
    </p>
    <p className="font-sans text-sm md:text-base text-gray-300 uppercase tracking-wider">
      {label}
    </p>
  </div>
);

const SocialProofSection: React.FC = () => {
  const metrics = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: "1,200+",
      label: "Clientes Satisfechos"
    },
    {
      icon: <Star className="w-8 h-8 fill-cta-primary" />,
      value: "96%",
      label: "de Satisfacción"
    },
    {
      icon: <Star className="w-8 h-8 fill-cta-primary" />,
      value: "890",
      label: "Evaluaciones 5 Estrellas"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "8",
      label: "Países"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "2 días",
      label: "Implementación Promedio"
    },
  ];

  return (
    <section className="bg-dark-bg text-white py-10 px-6 border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-sans text-xl font-bold text-white text-center mb-8 uppercase tracking-widest">
          Un valor total de $149
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {metrics.map((metric, index) => (
            <Metric key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;