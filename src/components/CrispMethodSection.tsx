import React from 'react';
import { ListChecks, Clock, ShoppingCart, CookingPot, Thermometer } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const CrispStep: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
    <div className="w-16 h-16 bg-highlight-gold/10 rounded-full flex items-center justify-center text-highlight-gold mb-4">
      {icon}
    </div>
    <h4 className="font-sans font-bold text-dark-bg text-lg mb-2">{title}</h4>
    <p className="font-sans text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const CrispMethodSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="light">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-dark-bg text-4xl md:text-5xl font-bold mb-6">
          ¿Por qué esto funciona cuando otras recetas fallan?
        </h2>
        <p className="font-sans text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          No es suerte. Es ciencia aplicada a tu Air Fryer. Usamos el sistema <span className="text-cta-primary font-bold">C.R.I.S.P.</span> para resultados infalibles:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <CrispStep 
            icon={<ListChecks className="w-8 h-8" />} 
            title="Clasificar" 
            description="Recetas organizadas por objetivo y tiempo real de preparación." 
          />
          <CrispStep 
            icon={<Clock className="w-8 h-8" />} 
            title="Reloj" 
            description="Tiempos exactos ajustados a la potencia real de tu máquina." 
          />
          <CrispStep 
            icon={<ShoppingCart className="w-8 h-8" />} 
            title="Ingredientes Accesibles" 
            description="Productos comunes que encuentras en cualquier supermercado, sin ingredientes raros ni caros." 
          />
          <CrispStep 
            icon={<CookingPot className="w-8 h-8" />} 
            title="Sazonar" 
            description="Mezclas de especias que activan el sabor sin usar grasas trans." 
          />
          <CrispStep 
            icon={<Thermometer className="w-8 h-8" />} 
            title="Precalentar" 
            description="El protocolo de 3 minutos para asegurar la máxima crocancia externa." 
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CrispMethodSection;