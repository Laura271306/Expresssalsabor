import React, { Suspense, lazy } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import DeferredContent from "@/components/DeferredContent";

// Seções principais
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const TheProblemSection = lazy(() => import("@/components/TheProblemSection"));
const CrispMethodSection = lazy(() => import("@/components/CrispMethodSection"));
const EasierThanGoogleSection = lazy(() => import("@/components/EasierThanGoogleSection"));

// Quiz interativo
const InteractiveQuizSection = lazy(() => import("@/components/InteractiveQuizSection"));

// Seções de benefícios (sem repetição)
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const CompleteBenefitsSection = lazy(() => import("@/components/CompleteBenefitsSection"));

// Seções de objeções e dúvidas
const CommonObjectionsSection = lazy(() => import("@/components/CommonObjectionsSection"));
const ExpertValidationSection = lazy(() => import("@/components/ExpertValidationSection"));
const CompatibilityGuideSection = lazy(() => import("@/components/CompatibilityGuideSection"));

// Seções de prova social (mais realistas)
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ResultsGallerySection = lazy(() => import("@/components/ResultsGallerySection"));

// Seções de oferta
const SpecialOfferSection = lazy(() => import("@/components/SpecialOfferSection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const FinalCtaSection = lazy(() => import("@/components/FinalCtaSection"));
const TrustBadgesSection = lazy(() => import("@/components/TrustBadgesSection"));
const DeliveryMethodSection = lazy(() => import("@/components/DeliveryMethodSection"));

const LoadingPlaceholder = () => <div className="h-20 w-full animate-pulse bg-gray-100" />;

const Index = () => {
  return (
    <div className="w-full min-h-screen font-sans selection:bg-cta-primary selection:text-white">
      <UrgencyBanner />
      <HeroSection />
      
      {/* Quiz abaixo do HERO */}
      <InteractiveQuizSection />
      
      <DeferredContent delay={1000}>
        <Suspense fallback={<LoadingPlaceholder />}>
          {/* Seção 1: Problema e Solução */}
          <SocialProofSection />
          <TheProblemSection />
          
          <div className="bg-light-bg py-16 px-6 text-center">
            <p className="font-serif italic text-3xl md:text-4xl text-dark-bg/80 max-w-4xl mx-auto leading-relaxed">
              "El delivery es caro, el microondas es aburrido y las sartenes son un caos. <br className="hidden md:block" /> 
              <span className="text-highlight-gold font-bold">Tu Air Fryer es la solución, pero necesitas el mapa correcto.</span>"
            </p>
          </div>

          <CrispMethodSection />
          <EasierThanGoogleSection />
          
          {/* Seção 2: Benefícios Principais */}
          <BenefitsSection />
          <CompleteBenefitsSection />
          
          {/* Seção 3: Prova Social Real */}
          <TestimonialsSection />
          <ResultsGallerySection />
          
          {/* Seção 4: Objeções e Dúvidas */}
          <CommonObjectionsSection />
          <ExpertValidationSection />
          <CompatibilityGuideSection />
          
          {/* Seção 5: Oferta e Garantia */}
          <SpecialOfferSection />
          <TrustBadgesSection />
          <GuaranteeSection />
          <DeliveryMethodSection />
          
          {/* Seção 6: FAQ e CTA Final */}
          <FaqSection />
          <FinalCtaSection />
        </Suspense>
      </DeferredContent>
    </div>
  );
};

export default Index;