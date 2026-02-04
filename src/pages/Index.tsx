import React, { Suspense, lazy } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import DeferredContent from "@/components/DeferredContent";

const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const TheProblemSection = lazy(() => import("@/components/TheProblemSection"));
const CrispMethodSection = lazy(() => import("@/components/CrispMethodSection"));
const EasierThanGoogleSection = lazy(() => import("@/components/EasierThanGoogleSection"));
const RecipeCarouselSection = lazy(() => import("@/components/RecipeCarouselSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const BonusSection = lazy(() => import("@/components/BonusSection"));
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
      
      <DeferredContent delay={1000}>
        <Suspense fallback={<LoadingPlaceholder />}>
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
          <RecipeCarouselSection />
          <BenefitsSection />
          <TestimonialsSection />
          <BonusSection />
          <DeliveryMethodSection />
          <SpecialOfferSection />
          <TrustBadgesSection />
          <GuaranteeSection />
          <FaqSection />
          <FinalCtaSection />
        </Suspense>
      </DeferredContent>
    </div>
  );
};

export default Index;