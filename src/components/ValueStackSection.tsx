import React from 'react';
import { ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { cn } from '@/lib/utils';
import GuaranteeSeal from './GuaranteeSeal';

const ValueStackSection: React.FC = () => {
  const tableData = [
    { item: "Colecciones (4)", value: "US$ 28", isTotal: false },
    { item: "Menús + listas de compras", value: "US$ 17", isTotal: false },
    { item: "Tablas de tiempos/temperaturas", value: "US$ 12", isTotal: false },
    { item: "Guía de limpieza", value: "US$ 7", isTotal: false },
    { item: "Bônus exclusivos (4)", value: "US$ 39", isTotal: false },
    { item: "VALOR TOTAL", value: "US$ 103", isTotal: true },
  ];

  return (
    <SectionWrapper bgColor="dark" id="link-ancoragem">
      <div className="flex justify-center">
        <div className="w-full max-w-[450px] bg-light-bg rounded-xl shadow-2xl p-5 md:p-8">
          
          {/* Image Top Placeholder */}
          <div className="h-48 bg-gray-300 mb-[-30px] rounded-t-xl flex items-center justify-center text-gray-600">
            [Placeholder: Logo/Produto Image]
          </div>

          <div className="bg-white p-4 rounded-b-xl">
            <h3 className="font-sans font-semibold text-[#4F4F4F] text-3xl md:text-4xl text-left mt-4">
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
            </p>

            {/* CTA PRINCIPAL */}
            <div className="text-left">
              <CtaButton href="#" className="mb-4">
                SÍ, QUIERO MIS RECETAS AHORA
              </CtaButton>
            </div>

            {/* Post-CTA Text */}
            <p className="font-sans text-lg text-dark-bg text-left mb-6">
              95% de descuento – acceso inmediato con pago único
            </p>
          </div>
          
          {/* Garantia Seal */}
          <div className="mt-6 text-center">
            <GuaranteeSeal />
            <p className="font-sans text-white text-sm mt-4">
              Pruébalo durante 7 días sin riesgo. Si no te convence el contenido, te devolvemos tu dinero.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValueStackSection;