import React, { Suspense, lazy } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import PersonaQuiz from "@/components/PersonaQuiz";
import TransformGuaranteeSection from "@/components/TransformGuaranteeSection";
import DeferredContent from "@/components/DeferredContent";

// ... (mantendo todos os imports lazy existentes)

const Index = () => {
  return (
    <div className="w-full min-h-screen">
      <UrgencyBanner />
      <HeroSection />
      
      {/* Quiz de Personas */}
      <section className="py-12 px-6 bg-light-bg">
        <div className="max-w-4xl mx-auto">
          <PersonaQuiz />
        </div>
      </section>

      {/* Seção de Garantia Transformadora - aparece após o quiz */}
      <TransformGuaranteeSection />

      {/* ... (mantendo todo o resto do conteúdo existente) */}
    </div>
  );
};

export default Index;