import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import WhatMakesUsUniqueSection from "@/components/WhatMakesUsUniqueSection";
import AirfryerMagicaSection from "@/components/AirfryerMagicaSection";
import QuickPrepSection from "@/components/QuickPrepSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BonusesSection from "@/components/BonusesSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import NoChefNeededSection from "@/components/NoChefNeededSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";

const Index = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Barra superior */}
      <UrgencyBanner />
      
      {/* Secciones en orden */}
      <HeroSection />
      <TheProblemSection />
      <WhatMakesUsUniqueSection />
      <AirfryerMagicaSection />
      <QuickPrepSection />
      <BenefitsSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <BonusesSection />
      <CompatibilitySection />
      <NoChefNeededSection />
      <SpecialOfferSection />
    </div>
  );
};

export default Index;