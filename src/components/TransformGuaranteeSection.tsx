import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ShieldCheck, Check, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const TransformGuaranteeSection: React.FC = () => {
  const guaranteePoints = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Garantia de 7 Dias",
      description: "Se não transformar sua cozinha, devolvemos 100%"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Sem Perguntas",
      description: "Processo simples e rápido sem burocracia"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Resposta em 48h",
      description: "Reembolso processado em até 2 dias úteis"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Suporte Personalizado",
      description: "Ajuda para garantir seu sucesso na cozinha"
    }
  ];

  return (
    <SectionWrapper bgColor="dark" border>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-highlight-gold/10 text-highlight-gold p-3 rounded-full mb-6">
          <ShieldCheck className="w-8 h-8 mr-3" />
          <h2 className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-wider">
            🛡️ GARANTIA DE TRANSFORMAÇÃO
          </h2>
        </div>

        <p className="font-serif text-white text-3xl md:text-4xl mb-8 leading-snug">
          Teste por 7 dias. Se não funcionar, devolvemos tudo.
        </p>
        <p className="font-sans text-xl text-gray-300 mb-12">
          Risco zero. Você só tem a ganhar tempo e sabor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {guaranteePoints.map((point, index) => (
            <div key={index} className="bg-[#282425] p-6 rounded-xl shadow-xl border-t-4 border-cta-primary">
              <div className="mb-4 flex justify-center">{point.icon}</div>
              <h4 className="font-sans text-lg font-bold text-white mb-2">{point.title}</h4>
              <p className="font-sans text-sm text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cta-primary/20 rounded-xl p-6 shadow-2xl shadow-cta-primary/30 border border-cta-primary">
          <h3 className="font-sans text-xl font-bold text-white mb-2">
            Como funciona:
          </h3>
          <ol className="font-sans text-white text-left space-y-2">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <span>Use o método por até 7 dias</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <span>Se não transformar sua cozinha, solicite reembolso direto na plataforma</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <span>Receba 100% do seu valor de volta em até 48 horas</span>
            </li>
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TransformGuaranteeSection;