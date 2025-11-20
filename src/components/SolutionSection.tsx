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
      <div className="grid lg:grid-cols-[60%_40%] gap-12 items-start">
        {/* Content (60% desktop) */}
        <div className="lg:col-span-1">
          <h3 className="font-serif uppercase text-dark-bg text-3xl md:text-4xl mb-2">
            airfryer mágica
          </h3>
          <h4 className="font-sans text-dark-bg text-xl mb-6">
            +1000 Recetas Fáciles, Rápidas y 100% Saludables
          </h4>

          <p className="font-sans text-dark-bg text-lg leading-relaxed mb-6">
            El recetario digital <span className="font-bold">DEFINITIVO</span> para aprovechar al máximo tu freidora de aire y sorprender a tu familia con resultados profesionales en minutos.
            <br /><br />
            Este no es un recetario más. Es el ÚNICO que incluye:
          </p>

          <ul className="list-none p-0">
            <CheckItem>
              +1000 recetas irresistibles y comprobadas – desde desayunos rápidos hasta cenas completas.
            </CheckItem>
            <CheckItem>
              Instrucciones paso a paso con fotos – sigue fácilmente cada preparación sin complicaciones.
            </CheckItem>
            <CheckItem>
              Valores nutricionales calculados – cuida tu salud sin renunciar al sabor.
            </CheckItem>
            <CheckItem>
              Compatible con cualquier modelo de Airfryer – no importa cuál tengas, ¡funciona igual!
            </CheckItem>
            <CheckItem>
              Método C.R.I.S.P. EXCLUSIVO – la estrategia secreta de chefs profesionales que garantiza resultados perfectos.
            </CheckItem>
            <CheckItem>
              Entrega inmediata – recibe el material al instante y empieza a cocinar hoy mismo.
            </CheckItem>
          </ul>
        </div>

        {/* Image (40% desktop) */}
        <div className="lg:col-span-1 relative">
          {/* Placeholder for Image: AirFryer with dishes coming out */}
          <div className="bg-gray-300 h-[400px] rounded-tr-md rounded-bl-md flex items-center justify-center text-gray-600 shadow-lg transition-all duration-300 hover:mt-[-41px] mt-0">
            [Placeholder: AirFryer com pratos saindo]
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SolutionSection;