"use client";

import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { BonusesSection } from "@/components/sections/BonusesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

// Novas seções estratégicas baseadas nos criativos do usuário
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
      <HeroSection />
      
      {/* Nova seção: A Verdade Sua Air Fryer */}
      <AirFryerTruthSection />
      
      {/* Nova seção: Quiz Interativo */}
      <DiscoverYourProfileQuiz />
      
      {/* Solution Section - Mantendo original */}
      <SolutionSection />
      
      {/* Nova seção: O Método C.R.I.S.P. que los Chefs Usan */}
      <CrispMethodSection />
      
      {/* Benefits Section - Mantendo original */}
      <BenefitsSection />
      
      {/* Nova seção: O Que Você Está Perdendo Realmente */}
      <WhatYoureLosingSection />
      
      {/* Bonuses Section - Mantendo original */}
      <BonusesSection />
      
      {/* Nova seção: Bônus por Participação */}
      <BonusParticipationSection />
      
      {/* Testimonials Section - Mantendo original */}
      <TestimonialsSection />
      
      {/* Nova seção: Perguntas que Você Está Fazendo */}
      <QuestionsYoureAskingSection />
      
      {/* Nova seção: Garantia de Transformação */}
      <TransformationGuaranteeSection />
      
      {/* FAQ Section - Mantendo original */}
      <FAQSection />
      
      {/* Nova seção: Imagine Isso na Sua Cozinha */}
      <ImagineInYourKitchenSection />
      
      {/* CTA Section - Mantendo original */}
      <CTASection />
      
      {/* Footer - Mantendo original */}
      <Footer />
      
      {/* Made With Dyad - Mantendo original */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;