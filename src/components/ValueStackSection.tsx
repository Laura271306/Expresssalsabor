import React from 'react';
import { ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import CtaButton from './CtaButton';
import { cn } from '@/lib/utils';

const ValueStackSection: React.FC = () => {
  const tableData = [
    { item: "Coleções (4)", value: "US$ 28", isTotal: false },
    { item: "Menús + listas de compras", value: "US$ 17", isTotal: false },
    { item: "Tablas de tiempos/temperaturas", value: "US$ 12", isTotal: false },
    { item: "Guía de limpieza", value: "US$ 7", isTotal: false },
    { item: "Bonos exclusivos (4)", value: "US$ 39", isTotal: false },
    { item: "VALOR TOTAL", value: "US$ 103", isTotal: true },
  ];

  return (
    <SectionWrapper bgColor="dark">
      <div className="flex justify-center">
        <div className="w-full max-w-[450px] bg-light-bg rounded-xl shadow-2xl p-5 md:p-8">
          <img 
            src="/images/kit-mockup-main.jpeg" 
            alt="Mockup del Kit" 
            className="w-full h-48 object-cover rounded-t-xl mb-[-30px]"
            loading="lazy"
          />

          <div className="bg-white p-4 rounded-b-xl">
            <h3 className="font-serif font-semibold text-[#4F4F4F] text-3xl md:text-4xl text-left mt-4">
              KIT COMPLETO AirFryer
            </h3>

            <p className="font-sans text-sm font-bold text-highlight-gold mt-2 mb-4 text-left">
              “No es para leer, es para usar.”
            </p>
            
            <div className="border border-gray-300 rounded-md overflow-hidden mb-6 mt-4">
              {tableData.map((row, index) => (
                <div key={index} className={cn("flex justify-between p-3 border-b border-gray-200 last:border-b-0", row.isTotal ? "bg-gray-100" : "")}>
                  <span className={cn("font-sans text-base text-gray-800", row.isTotal && "line-through text-gray-600")}>{row.item}</span>
                  <span className={cn("font-sans text-base text-gray-800 font-medium", row.isTotal && "line-through text-gray-600")}>{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-4 bg-[#F4F4F4] border-t-2 border-highlight-gold">
                <span className="font-sans text-lg font-bold text-dark-bg">PRECIO HOY</span>
                <span className="font-sans text-2xl font-bold text-cta-primary">$6,90</span>
              </div>
            </div>

            <div className="text-left">
              <p className="font-sans text-sm text-dark-bg font-bold mb-4 italic text-center">
                “Abres, eliges, preparas. Fin.”
              </p>
              <CtaButton href="https://pay.hotmart.com/I102633587P?off=y7ekz10e&checkoutMode=10" className="mb-2">
                Quiero cocinar rápido, fácil y sin estrés
              </CtaButton>
              <p className="text-[12px] text-gray-600 text-center font-sans font-bold mt-2">
                Acceso inmediato. Sin complicaciones.
              </p>
            </div>
          </div>
          
          <div className="bg-dark-bg p-6 rounded-lg mt-6 border border-highlight-gold/50 text-left">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-12 h-12 text-highlight-gold flex-shrink-0" />
              <div>
                <h4 className="font-sans font-bold text-white text-xl">Garantía de 7 Días</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValueStackSection;