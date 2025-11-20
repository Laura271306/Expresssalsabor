import React from 'react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';

const FinalCtaSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark" className="text-center">
      <h2 className="font-sans font-bold text-white text-3xl md:text-4xl mb-8">
        ¿Listo para transformar tu Air Fryer?
      </h2>

      <CtaButton href="#link-ancoragem" variant="final" className="mx-auto text-xl px-12 py-6">
        Empieza hoy
      </CtaButton>

      <p className="font-sans text-white text-sm mt-5 mb-10">
        Acceso inmediato. Garantia de 7 dias.
      </p>

      <p className="font-sans text-gray-400 text-xs mt-10">
        © 2024 Expres al Sabor. Todos los derechos reservados.
      </p>
    </SectionWrapper>
  );
};

export default FinalCtaSection;