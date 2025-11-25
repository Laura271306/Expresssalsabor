import React from 'react';
import { ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { cn } from '@/lib/utils';

const ValueStackSection: React.FC = () => {
  const tableData = [
    { item: "Colecciones (4)", value: "US$ 28", isTotal: false },
    { item: "Menús + listas de compras", value: "US$ 17", isTotal: false },
    { item: "Tablas de tiempos/temperaturas", value: "US$ 12", isTotal: false },
    { item: "Guía de limpieza", value: "US$ 7", isTotal: false },
    { item: "Bonos exclusivos (4)", value: "US$ 39", isTotal: false },
    { item: "VALOR TOTAL", value: "US$ 103", isTotal: true },
  ];

  return (
    <SectionWrapper bgColor="dark" id="link-ancoragem">
      <div className="flex justify-center">
        <div className="w-full max-w-[450px] bg-light-bg rounded-xl shadow-2xl p-5 md:p-8">
          
          {/* Image Top Placeholder */}
          <img 
            src="/images/kit-mockup-main.jpeg" 
            alt="Mockup del Kit Completo AirFryer" 
            className="w-full h-48 object-cover rounded-t-xl mb-[-30px]"
            loading="lazy"
          />

          <div className="bg-white p-4 rounded-b-xl">
            <h3 className="font-serif font-semibold text-[#4F4F4F] text-3xl md:text-4xl text-left mt-4">
              KIT COMPLETO AirFryer
            </h3>
            <p className="font-sans text-[#4F4F4F] text-lg text-left mb-6">
              +100 recetas exclusivas + bonificaciones incluidas
            </p>

            {/* Stack de Valor - TABELA VISUAL */}
            <div className="border border-gray-300 rounded-md overflow-hidden mb-6">
              {tableData.map((row, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex justify-between p-3 border-b border-gray-200 last:border-b-0",
                    row.isTotal ? "bg-gray-100" : ""
                  )}
                >
                  <span className={cn(
                    "font-sans text-base text-gray-800",
                    row.isTotal && "line-through text-gray-600"
                  )}>{row.item}</span>
                  <span className={cn(
                    "font-sans text-base text-gray-800 font-medium",
                    row.isTotal && "line-through text-gray-600"
                  )}>{row.value}</span>
                </div>
              ))}
              
              {/* Price Today Row */}
              <div className="flex justify-between items-center p-4 bg-[#F4F4F4] border-t-2 border-highlight-gold">
                <span className="font-sans text-lg font-bold text-dark-bg">PRECIO HOY (95% descuento)</span>
                <span className="font-sans text-2xl font-bold text-cta-primary">$5,90</span>
              </div>
            </div>

            {/* Price Highlight */}
            <p className="font-sans font-bold text-cta-primary text-3xl text-left mb-2">
              🔥 Hoy solo: $5,90 USD
            </p>
            
            {/* Savings Message */}
            <p className="font-sans text-xl text-left mb-6">
              <span className="line-through text-urgency-red">Valor total: $103 USD</span>
              <span className="font-bold text-urgency-red ml-2">(95% OFF)</span>
            </p>

            {/* CTA PRINCIPAL */}
            <div className="text-left">
              <CtaButton href="https://pay.hotmart.com/I102633587P?checkoutMode=10" className="mb-4">
                SÍ, QUIERO MIS RECETAS AHORA
              </CtaButton>
            </div>

            {/* Post-CTA Text */}
            <p className="font-sans text-lg text-dark-bg text-left mb-6">
              95% de descuento – acceso inmediato con pago único
            </p>
          </div>
          
          {/* Garantia Box */}
          <div className="bg-dark-bg p-6 rounded-lg mt-6 border border-highlight-gold/50 text-left">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-12 h-12 text-highlight-gold flex-shrink-0" />
              <div>
                <h4 className="font-sans font-bold text-white text-xl md:text-2xl mb-1">
                  Garantía de 14 Días
                </h4>
                <p className="font-sans text-white text-base leading-snug">
                  Pruébalo durante 14 días sin riesgo. Si no te convence el contenido, te devolvemos tu dinero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValueStackSection;