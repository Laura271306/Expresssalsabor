import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import WhatMakesUsUniqueSection from "@/components/WhatMakesUsUniqueSection";
import AirfryerMagicaSection from "@/components/AirfryerMagicaSection";
import SocialProofSection from "@/components/SocialProofSection";
import QuickPrepSection from "@/components/QuickPrepSection";
import BenefitsSection from "@/components/BenefitsSection";
import PriceComparisonBanner from "@/components/PriceComparisonBanner";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BonusSection from "@/components/BonusSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import NoChefNeededSection from "@/components/NoChefNeededSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import EasierThanGoogleSection from "@/components/EasierThanGoogleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <SocialProofSection />
      <QuickPrepSection />
      <BenefitsSection />
      <EasierThanGoogleSection />
      <TestimonialsSection /> {/* Nova seção adicionada aqui */}
      <PriceComparisonBanner />
      <BeforeAfterSection />
      
      {/* Bonos */}
      <BonusSection />
      
      <CompatibilitySection />
      <NoChefNeededSection />
      <SpecialOfferSection />
      <TrustBadgesSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
};

export default Index;