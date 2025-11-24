import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import WhatMakesUsUniqueSection from "@/components/WhatMakesUsUniqueSection";
import AirfryerMagicaSection from "@/components/AirfryerMagicaSection";
import QuickPrepSection from "@/components/QuickPrepSection";
import BenefitsSection from "@/components/BenefitsSection";
import PriceComparisonBanner from "@/components/PriceComparisonBanner"; // Import new component
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import SmallBonusesSection from "@/components/SmallBonusesSection";
import BonusSection from "@/components/BonusSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import NoChefNeededSection from "@/components/NoChefNeededSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import TestPurchaseButton from "@/components/TestPurchaseButton"; // Import Test Button
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
      <QuickPrepSection />
      <BenefitsSection />
      <PriceComparisonBanner /> {/* New component added here */}
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

      {/* Botão de Teste de Compra (REMOVER APÓS O TESTE) */}
      <TestPurchaseButton />
    </div>
  );
};

export default Index;