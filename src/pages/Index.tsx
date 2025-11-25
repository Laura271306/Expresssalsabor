import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import WhatMakesUsUniqueSection from "@/components/WhatMakesUsUniqueSection";
import AirfryerMagicaSection from "@/components/AirfryerMagicaSection";
import SocialProofSection from "@/components/SocialProofSection";
import QuickPrepSection from "@/components/QuickPrepSection";
import BenefitsSection from "@/components/BenefitsSection";
import PriceComparisonBanner from "@/components/PriceComparisonBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import SmallBonusesSection from "@/components/SmallBonusesSection";
import BonusSection from "@/components/BonusSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import NoChefNeededSection from "@/components/NoChefNeededSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import { useEffect } from "react";
import { trackViewContent } from "@/utils/facebookPixel";

const Index = () => {
  useEffect(() => {
    // Track ViewContent when the page loads
    trackViewContent();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Barra superior */}
      <UrgencyBanner />
      
      {/* Seções em ordem */}
      <HeroSection />
      <TheProblemSection />
      <WhatMakesUsUniqueSection />
      <AirfryerMagicaSection />
      <SocialProofSection /> {/* Novo componente adicionado aqui */}
      <QuickPrepSection />
      <BenefitsSection />
      <PriceComparisonBanner />
      <TestimonialsSection />
      <BeforeAfterSection />
      
      {/* Bonos */}
      <SmallBonusesSection />
      <BonusSection />
      
      <CompatibilitySection />
      <NoChefNeededSection />
      <SpecialOfferSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
};

export default Index;