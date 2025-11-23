import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';

const FinalCtaSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-sans font-bold text-white text-3xl md:text-4xl mb-8 text-left">
          ¿Listo para transformar tu Air Fryer?
        </h2>

        <div className="text-left">
          <CtaButton href="#link-ancoragem" variant="final" className="text-xl px-12 py-6">
            Empieza hoy
          </CtaButton>
        </div>

        <p className="font-sans text-white text-sm mt-5 mb-10 text-left">
          Acceso inmediato. Garantia de 7 dias.
        </p>

        <p className="font-sans text-gray-400 text-xs mt-10 text-left">
          © 2024 Expres al Sabor. Todos los derechos reservados.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default FinalCtaSection;