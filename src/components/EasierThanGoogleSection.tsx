import React from 'react';
import SectionWrapper from './SectionWrapper';
import { XCircle, CheckCircle2 } from 'lucide-react';
import CtaButton from './CtaButton';

const EasierThanGoogleSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-12 text-center md:text-left">
          Internet está lleno de recetas que <span className="text-urgency-red underline">no funcionan</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-[#282425] p-8 rounded-2xl border-l-8 border-urgency-red">
              <h3 className="font-sans font-bold text-urgency-red text-2xl mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-3" /> El Caos de Internet
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Pierdes 45 min buscando un video que valga la pena.</li>
                <li>• Tiempos de cocción que queman tu comida.</li>
                <li>• Ingredientes caros que solo consigues en otros países.</li>
                <li>• Publicidad molesta y videos de 20 min para algo simple.</li>
              </ul>
            </div>

            <div className="bg-cta-primary/10 p-8 rounded-2xl border-l-8 border-cta-primary">
              <h3 className="font-sans font-bold text-cta-primary text-2xl mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-3" /> El Método Airfryer Mágica
              </h3>
              <ul className="space-y-4 text-white">
                <li>• Abres el PDF y eliges en menos de 30 segundos.</li>
                <li>• Tiempos probados en +10 marcas diferentes.</li>
                <li>• Ingredientes que ya tienes en tu nevera.</li>
                <li>• Sin videos largos: directo al grano para que comas ya.</li>
              </ul>
            </div>
          </div>

          <div className="text-center md:text-left space-y-6">
            <h3 className="font-serif text-3xl text-highlight-gold italic">
              "Tu tiempo vale más que $6.90. Deja de buscar y empieza a disfrutar."
            </h3>
            <CtaButton href="#link-ancoragem">
              QUIERO EL MÉTODO ORGANIZADO
            </CtaButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EasierThanGoogleSection;