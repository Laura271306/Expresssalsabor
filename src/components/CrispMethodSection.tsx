import React from 'react';
import { ListChecks, Clock, ShoppingCart, CookingPot, Thermometer } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { cn } from '@/lib/utils';

interface CrispStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CrispStep: React.FC<CrispStepProps> = ({ icon, title, description }) => (
  <div className="bg-light-bg p-6 rounded-xl text-center shadow-md">
    <div className="mx-auto w-12 h-12 flex items-center justify-center bg-cta-primary/10 rounded-full mb-4 text-cta-primary">
      {icon}
    </div>
    <h4 className="font-sans font-bold text-dark-bg text-lg mb-1">{title}</h4>
    <p className="font-sans text-dark-bg text-sm">{description}</p>
  </div>
);

const CrispMethodSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-serif text-white text-3xl md:text-4xl mb-4">
          ¿Por qué esto funciona cuando otras recetas fallan?
        </h2>
        <h3 className="font-sans font-semibold text-highlight-gold text-2xl mb-10">
          Aplicamos el Sistema C.R.I.S.P.:
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          <CrispStep icon={<ListChecks />} title="CLASIFICAR" description="Recetas por objetivo para decidir sin pensar" />
          <CrispStep icon={<Clock />} title="RELOJ" description="Tiempos exactos por alimento + ajustes por capacidad" />
          <CrispStep icon={<ShoppingCart />} title="INGREDIENTE" description="Sustitutos simples del súper" />
          <CrispStep icon={<CookingPot />} title="SAZONAR" description="Combinaciones probadas con menos aceite" />
          <CrispStep icon={<Thermometer />} title="PRECALENTAR" description="Protocolo 3-5 min para crocancia consistente" />
        </div>

        <div className="mt-10 bg-mint-green p-6 rounded-lg max-w-xl mx-auto">
          <p className="font-sans font-bold text-dark-bg text-lg">
            Resultado: platos listos en 10-15 min, incluso si eres principiante.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CrispMethodSection;