import React from 'react';
import { Check } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { cn } from '@/lib/utils';

const SolutionSection: React.FC = () => {
  const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start mb-4">
      <Check className="w-6 h-6 mr-3 text-cta-primary flex-shrink-0 mt-1" />
      <span className="font-sans font-bold text-lg text-dark-bg leading-snug">{children}</span>
    </li>
  );

  return (
    <SectionWrapper bgColor="light" border>
      <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
        {/* Content (60% desktop) */}
        <div className="lg:col-span-1">
          <h3 className="font-serif uppercase text-dark-bg text-3xl md:text-4xl mb-2">
            AIRFRYER MÁGICA
          </h3>
          <h4 className="font-sans text-dark-bg text-xl mb-6 font-bold">
            +600 Recetas Fáciles, Rápidas y 100% Saludables
          </h4>

          <div className="space-y-4 mb-8">
            <p className="font-sans text-dark-bg text-lg leading-relaxed">
              El recetario digital <strong>definitivo</strong> para <strong>aprovechar al máximo</strong> tu freidora de aire y <strong>sorprender a tu familia</strong> con <strong>resultados profesionales en minutos</strong>.
            </p>
          </div>

          <ul className="list-none p-0">
            <CheckItem>
              <strong>+600 recetas variadas y probadas</strong> – desde desayunos rápidos hasta cenas completas y <strong>sobremesas deliciosas</strong> para todos los gustos.
            </CheckItem>
            <CheckItem>
              <strong>Recetarios adicionales de regalo</strong> – Guías especializadas <strong>sin gluten y sin aceite</strong> incluidas como adición exclusiva.
            </CheckItem>
            <CheckItem>
              Instrucciones <strong>paso a paso con fotos</strong> y <strong>horarios exactos</strong> – sigue fácilmente cada preparación sin complicaciones.
            </CheckItem>
            <CheckItem>
              <strong>Valores nutricionales calculados</strong> – cuida tu salud sin renunciar al sabor.
            </CheckItem>
            <CheckItem>
              <strong>Lista de compras inteligente</strong> – sabrás exactamente qué comprar y en qué cantidad.
            </CheckItem>
            <CheckItem>
              <strong>Menú de 1 mes programado</strong> – comida planificada para todo el mes, <strong>sin estrés</strong>.
            </CheckItem>
            <CheckItem>
              Compatible con <strong>cualquier modelo de Airfryer</strong> – no importa cuál tengas, <strong>¡funciona igual!</strong>
            </CheckItem>
            <CheckItem>
              <strong>Entrega inmediata</strong> – recibe el material al instante y <strong>empieza a cocinar hoy mismo</strong>.
            </CheckItem>
          </ul>
        </div>

        {/* Image (40% desktop) */}
        <div className="lg:col-span-1">
          <div className="relative group">
            <img 
              src="/images/solution-main.png" 
              alt="Familia disfrutando recetas de Airfryer Mágica" 
              width="600"
              height="600"
              className="w-full h-auto rounded-xl shadow-2xl border-4 border-highlight-gold/30 transition-transform group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SolutionSection;