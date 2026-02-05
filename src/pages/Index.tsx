"use client";

import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
// Assumindo que estes componentes existem ou serão criados
import HeroSection from "@/components/sections/HeroSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BonusesSection from "@/components/sections/BonusesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

// Novas seções estratégicas (usando exportação nomeada)
import { AirFryerTruthSection } from "@/components/sections/AirFryerTruthSection";
import { CrispMethodSection } from "@/components/sections/CrispMethodSection";
import { WhatYoureLosingSection } from "@/components/sections/WhatYoureLosingSection";
import { TransformationGuaranteeSection } from "@/components/sections/TransformationGuaranteeSection";
import { DiscoverYourProfileQuiz } from "@/components/sections/DiscoverYourProfileQuiz";
import { QuestionsYoureAskingSection } from "@/components/sections/QuestionsYoureAskingSection";
import { BonusParticipationSection } from "@/components/sections/BonusParticipationSection";
import { ImagineInYourKitchenSection } from "@/components/sections/ImagineInYourKitchenSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mantendo original */}
      {/* Nota: Se HeroSection, SolutionSection, etc. não existirem, o app pode falhar. 
         Estou assumindo que eles existem ou que você os criará, mas estou focando nas novas seções. */}
      {/* Se eles não existirem, vou usar um fallback simples para evitar erros */}
      
      {/* Seção 1: Hero Section (Placeholder se não existir) */}
      {typeof HeroSection === 'function' ? <HeroSection /> : <div className="p-16 text-center text-2xl">Hero Section Placeholder</div>}
      
      {/* Nova seção: A Verdade Sua Air Fryer (Após Hero) */}
      <AirFryerTruthSection />
      
      {/* Nova seção: Quiz Interativo (Após Hero) */}
      <DiscoverYourProfileQuiz />
      
      {/* Seção 2: Solution Section (Placeholder se não existir) */}
      {typeof SolutionSection === 'function' ? <SolutionSection /> : <div className="p-16 text-center text-2xl">Solution Section Placeholder</div>}
      
      {/* Nova seção: O Método C.R.I.S.P. que los Chefs Usan (Após SolutionSection) */}
      <CrispMethodSection />
      
      {/* Seção 3: Benefits Section (Placeholder se não existir) */}
      {typeof BenefitsSection === 'function' ? <BenefitsSection /> : <div className="p-16 text-center text-2xl">Benefits Section Placeholder</div>}
      
      {/* Nova seção: O Que Você Está Perdendo Realmente (Antes da oferta) */}
      <WhatYoureLosingSection />
      
      {/* Seção 4: Bonuses Section (Placeholder se não existir) */}
      {typeof BonusesSection === 'function' ? <BonusesSection /> : <div className="p-16 text-center text-2xl">Bonuses Section Placeholder</div>}
      
      {/* Nova seção: Bônus por Participação (No final) */}
      <BonusParticipationSection />
      
      {/* Seção 5: Testimonials Section (Placeholder se não existir) */}
      {typeof TestimonialsSection === 'function' ? <TestimonialsSection /> : <div className="p-16 text-center text-2xl">Testimonials Section Placeholder</div>}
      
      {/* Nova seção: Perguntas que Você Está Fazendo (Expandir FAQ atual) */}
      <QuestionsYoureAskingSection />
      
      {/* Nova seção: Garantia de Transformação (Após garantia atual) */}
      <TransformationGuaranteeSection />
      
      {/* Seção 6: FAQ Section (Placeholder se não existir) */}
      {typeof FAQSection === 'function' ? <FAQSection /> : <div className="p-16 text-center text-2xl">FAQ Section Placeholder</div>}
      
      {/* Nova seção: Imagine Isso na Sua Cozinha (Antes do CTA final) */}
      <ImagineInYourKitchenSection />
      
      {/* Seção 7: CTA Section (Placeholder se não existir) */}
      {typeof CTASection === 'function' ? <CTASection /> : <div className="p-16 text-center text-2xl">CTA Section Placeholder</div>}
      
      {/* Seção 8: Footer (Placeholder se não existir) */}
      {typeof Footer === 'function' ? <Footer /> : <div className="p-16 text-center text-2xl">Footer Placeholder</div>}
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;