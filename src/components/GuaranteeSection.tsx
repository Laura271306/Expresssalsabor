import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ShieldCheck, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const GuaranteeSection: React.FC = () => {
  return (
    <SectionWrapper bgColor="dark" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-highlight-gold/10 text-highlight-gold p-3 rounded-full mb-6">
          <ShieldCheck className="w-8 h-8 mr-3" />
          <h2 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wider">
            🛡️ GARANTIA INCONDICIONAL DE 14 DIAS
          </h2>
        </div>

        <p className="font-serif text-white text-3xl md:text-4xl mb-8 leading-snug">
          ¿No te gustó? Devolvemos 100% de tu dinero.
        </p>
        <p className="font-sans text-xl text-gray-300 mb-12">
          Sin preguntas, sin complicaciones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#282425] p-6 rounded-xl border-t-4 border-cta-primary shadow-xl">
            <h4 className="font-sans text-lg font-bold text-cta-primary mb-3 flex items-center">
              <Check className="w-5 h-5 mr-2" /> 1. Peça direto pelo site da Hotmart
            </h4>
            <p className="font-sans text-sm text-gray-400">
              O processo é simples e rápido, feito diretamente na plataforma de pagamento.
            </p>
          </div>
          <div className="bg-[#282425] p-6 rounded-xl border-t-4 border-cta-primary shadow-xl">
            <h4 className="font-sans text-lg font-bold text-cta-primary mb-3 flex items-center">
              <Check className="w-5 h-5 mr-2" /> 2. Receba o reembolso em até 48 horas
            </h4>
            <p className="font-sans text-sm text-gray-400">
              Após a solicitação, o estorno é processado rapidamente.
            </p>
          </div>
          <div className="bg-[#282425] p-6 rounded-xl border-t-4 border-cta-primary shadow-xl">
            <h4 className="font-sans text-lg font-bold text-cta-primary mb-3 flex items-center">
              <Check className="w-5 h-5 mr-2" /> 3. Pronto! Seu dinheiro volta à sua conta.
            </h4>
            <p className="font-sans text-sm text-gray-400">
              Sem burocracia, garantimos sua satisfação total.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GuaranteeSection;