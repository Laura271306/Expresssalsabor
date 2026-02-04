import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';
import { Gift, Check } from 'lucide-react';
import { CHECKOUT_LINK } from '@/lib/constants';
import OptimizedImage from './OptimizedImage';

const SpecialOfferSection: React.FC = () => {
  const valueStack = [
    { item: "+600 Recetas", value: "US$ 39" },
    { item: "Guía de Compras Inteligentes", value: "US$ 25" },
    { item: "Tabla de Tiempos y Temperaturas", value: "US$ 15" },
    { item: "Menús Semanales", value: "US$ 10" },
    { item: "+ Bonos Exclusivos", value: "US$ 5" },
  ];

  const totalValue = 94;

  return (
    <section id="link-ancoragem" className="bg-dark-bg text-white py-16 md:py-20 px-4 md:px-6 border-t border-highlight-gold/20 scroll-mt-20">
      <div className="max-w-md mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-highlight-gold text-center md:text-left">
          OFERTA ESPECIAL
        </h2>
        <p className="font-sans text-base md:text-lg font-bold mb-8 text-urgency-red text-center md:text-left">
          ▲ SOLO HOY - ÚLTIMAS 12 PLAZAS
        </p>

        <div className="bg-white rounded-xl p-6 md:p-8 mb-8 shadow-[0_0_40px_rgba(0,170,84,0.3)] border-4 border-cta-primary text-dark-bg text-center">
          
          <OptimizedImage 
            src="/images/kit-mockup-main.jpeg" 
            alt="Mockup del Kit Completo AirFryer" 
            className="w-full h-40 md:h-48 object-cover rounded-lg mb-6"
            width={400}
            height={192} // h-48 is 192px
          />

          <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-dark-bg text-left">
            Valor Total del Kit: <span className="line-through text-gray-500 font-normal">${totalValue} USD</span>
          </h3>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-left">
            {valueStack.map((item, index) => (
              <div key={index} className="flex justify-between font-sans text-sm md:text-base text-gray-700 py-1.5 border-b border-gray-200 last:border-b-0">
                <span>{item.item}</span>
                <span className="font-bold">{item.value}</span>
              </div>
            ))}
          </div>
          
          <div className="mb-6 p-4 bg-cta-primary/10 rounded-lg border border-cta-primary">
            <p className="font-sans text-lg mb-1 text-dark-bg">
              <span className="line-through text-gray-500">Valor total: ${totalValue} USD</span>
            </p>
            <p className="font-sans text-2xl md:text-3xl text-urgency-red font-bold">
              🔥 Hoy solo: $6,90 USD
            </p>
          </div>
          
          <p className="font-sans text-7xl md:text-8xl font-extrabold text-urgency-red mb-2 leading-none">
            95%
          </p>
          <p className="font-sans text-xl md:text-2xl font-bold text-cta-primary mb-6">
            DE DESCUENTO
          </p>

          <CtaButton href={CHECKOUT_LINK} className="w-full text-lg md:text-xl px-4 py-4 mb-3">
            SÍ, QUIERO MIS RECETAS
          </CtaButton>
          
          <p className="text-[11px] md:text-[12px] text-gray-600 text-center font-sans font-bold mb-6">
            Pago único. Acceso de por vida.
          </p>
          
          <div className="bg-gray-900 p-4 rounded-lg text-white border border-highlight-gold/50 text-left">
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 md:w-8 md:h-8 text-highlight-gold flex-shrink-0" />
              <div>
                <h4 className="font-sans font-bold text-sm md:text-base">Garantía de 7 Días</h4>
                <p className="font-sans text-xs text-gray-300">
                  Si no te gusta, te devolvemos el 100% de tu inversión.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center md:text-left px-2">
          <p className="font-sans text-base text-gray-400 mb-6 italic">
            ¿Aún con dudas? El riesgo es todo nuestro.
          </p>
          <CtaButton href={CHECKOUT_LINK} className="w-full text-lg bg-cta-primary hover:bg-green-600 shadow-cta-primary/50">
            ACCEDER AHORA - 95% OFF
          </CtaButton>
          <p className="text-[12px] text-gray-500 font-sans mt-3">
            * Oferta válida para las próximas 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;