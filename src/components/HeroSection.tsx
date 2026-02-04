import React from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './CtaButton';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-dark-bg text-white py-12 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 md:space-y-8 text-left">
          <div className="inline-block bg-cta-primary text-dark-bg font-sans font-bold text-xs md:text-sm px-3 py-1 rounded-full mb-2 shadow-lg">
            ✨ EL MÉTODO QUE ESTÁ REVOLUCIONANDO LAS CENAS EN 10 MINUTOS
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
            Deja de ser esclavo de la cocina y recupera tu tiempo libre
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-gray-300 leading-relaxed">
            Descubre el secreto para platos crujientes y saludables sin ensuciar sartenes ni gastar en delivery.
          </p>

          <ul className="space-y-4 pt-4">
            <li className="flex items-start">
              <div className="bg-cta-primary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="font-sans text-lg"><strong>+600 Recetas</strong> que funcionan a la primera (Garantizado)</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cta-primary rounded-full p-1 mr-3 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="font-sans text-lg"><strong>Sin ingredientes raros:</strong> Todo lo tienes en tu despensa</span>
            </li>
          </ul>

          <div className="pt-6">
            <CtaButton href="#link-ancoragem" className="w-full md:w-auto text-xl py-6 px-12">
              SÍ, QUIERO COCINAR RÁPIDO Y RICO
            </CtaButton>
            <p className="text-gray-400 text-sm mt-3 flex items-center justify-center md:justify-start">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"></path></svg>
              Pago único. Acceso inmediato de por vida.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <img 
              src="/images/kit-mockup-main.jpeg" 
              alt="Kit Completo Air Fryer" 
              className="w-full h-auto rounded-2xl shadow-[0_0_50px_rgba(0,170,84,0.3)] border-4 border-highlight-gold/50"
            />
            <div className="absolute -bottom-6 -left-6 bg-urgency-red text-white p-4 rounded-xl shadow-2xl rotate-[-3deg] font-bold">
              <p className="text-xs uppercase">Oferta por tiempo limitado</p>
              <p className="text-2xl">95% DE DESCUENTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;