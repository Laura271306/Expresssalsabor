import React from 'react';
import SectionWrapper from './SectionWrapper';

const CompatibilitySection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark">
      <div className="text-center">
        {/* Compatibility Box */}
        <div className="bg-mint-green p-5 rounded-lg max-w-3xl mx-auto mb-10">
          <p className="font-sans font-bold text-dark-bg text-lg">
            ⚡ Compatible con <span className="font-extrabold">TODAS</span> las marcas:
            <br className="md:hidden" />
            Philips, Ninja, Cosori, Instant Pot y más.
          </p>
        </div>

        <h2 className="font-serif text-white text-2xl md:text-3xl mb-6 max-w-4xl mx-auto">
          Imagina tener más de 600 recetas que ya fueron probadas y ajustadas para cada modelo de AirFryer.
        </h2>

        <p className="font-sans text-highlight-gold text-lg leading-relaxed max-w-3xl mx-auto">
          Sin desperdiciar ingredientes ni frustrarte con resultados mediocres.
          <br /><br />
          Mientras otros gastan horas buscando recetas que no funcionan, tú tendrás en minutos un plan probado que garantiza resultados deliciosos.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default CompatibilitySection;