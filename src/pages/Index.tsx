import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import WhatMakesUsUniqueSection from "@/components/WhatMakesUsUniqueSection";
import SolutionSection from "@/components/SolutionSection"; // Using SolutionSection instead of AirfryerMagicaSection
import CrispMethodSection from "@/components/CrispMethodSection"; // Importing CrispMethodSection
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

const Index = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Barra superior */}
      <UrgencyBanner />
      
      {/* Secciones en orden */}
      <HeroSection />
      <TheProblemSection />
      <WhatMakesUsUniqueSection />
      <SolutionSection /> {/* Using SolutionSection */}
      <CrispMethodSection /> {/* Adding CrispMethodSection */}
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