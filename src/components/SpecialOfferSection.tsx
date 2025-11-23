import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { Gift, Check } from 'lucide-react';
import GuaranteeSeal from './GuaranteeSeal';

const SpecialOfferSection: React.FC = () => {
  return (
    <section className="bg-dark-bg text-white py-20 px-6 border-t border-highlight-gold/20">
      <div className="max-w-md mx-auto">
        <h2 className="font-sans text-4xl md:text-5xl font-bold mb-8 text-highlight-gold text-left">
          OFERTA ESPECIAL
        </h2>
        <p className="font-sans text-lg font-bold mb-8 text-urgency-red text-left">
          ▲ SOLO HOY - OFERTA LIMITADA A 12 VAGAS
        </p>

        {/* Main Offer Card (Light interior) */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-[0_0_40px_rgba(0,170,84,0.3)] border-4 border-cta-primary text-dark-bg text-center">
          
          {/* Image Placeholder */}
          <div className="h-48 bg-gray-300 rounded-lg mb-6 flex items-center justify-center text-gray-600">
            [Placeholder: Mockup del Kit]
          </div>

          <h3 className="font-sans text-2xl font-bold mb-2">KIT COMPLETO AirFryer</h3>
          <p className="font-sans text-lg mb-4">+1000 recetas sin gluten + bonificaciones incluidas</p>

          <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
            <p className="font-sans text-xl mb-2">
              <span className="line-through text-gray-500">Valor total: $94 USD</span>
            </p>
            <p className="font-sans text-xl text-urgency-red font-bold">
              🔥 Hoy solo: $5,90 USD
            </p>
          </div>
          
          <p className="font-sans text-7xl font-bold text-cta-primary mb-6">
            95%
          </p>

          <CtaButton href="#link-ancoragem" className="text-xl px-8 py-4 mb-4 mx-auto">
            SÍ, QUIERO MIS RECETAS AHORA
          </CtaButton>

          <p className="font-sans text-sm text-gray-600 mb-6">
            95% de descuento – acceso inmediato con pago único
          </p>
          
          {/* Guarantee Seal */}
          <div className="mt-6">
            <GuaranteeSeal className="w-24 h-24 md:w-28 md:h-28" />
            <p className="font-sans text-gray-600 text-sm mt-2">
              Pruébalo durante 7 días sin riesgo. Si no te convence el contenido, te devolvemos tu dinero.
            </p>
          </div>
        </div>
        
        {/* Secondary CTA */}
        <p className="font-sans text-lg text-gray-400 mb-4 text-left">
          ¿Aún no estás seguro? Mira lo que dicen nuestros clientes satisfechos 👇
        </p>
        <div className="text-left">
          <CtaButton href="#link-ancoragem" className="text-xl px-8 py-4 bg-cta-primary hover:bg-green-600 shadow-cta-primary/50">
            ACCEDER AHORA - 95% OFF
          </CtaButton>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;