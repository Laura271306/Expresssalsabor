import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhatMakesUsUniqueSection from "@/components/WhatMakesUsUniqueSection";
import CrispMethodSection from "@/components/CrispMethodSection";
import AirfryerMagicaSection from "@/components/AirfryerMagicaSection";
import SocialProofSection from "@/components/SocialProofSection";
import QuickPrepSection from "@/components/QuickPrepSection";
import BenefitsSection from "@/components/BenefitsSection";
import EasierThanGoogleSection from "@/components/EasierThanGoogleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NoChefNeededSection from "@/components/NoChefNeededSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import BonusSection from "@/components/BonusSection";
import PriceComparisonBanner from "@/components/PriceComparisonBanner";
import DeliveryMethodSection from "@/components/DeliveryMethodSection";
import ValueStackSection from "@/components/ValueStackSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
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
      {/* 1. ATENCIÓN Y URGENCIA (Hook) */}
      <UrgencyBanner />
      <HeroSection />
      
      {/* 2. AGITACIÓN DEL PROBLEMA Y CONTRASTE (Empatía) */}
      <TheProblemSection />
      <BeforeAfterSection />
      
      {/* 3. LA SOLUCIÓN Y EL MECANISMO ÚNICO (Lógica) */}
      <WhatMakesUsUniqueSection />
      <CrispMethodSection />
      <AirfryerMagicaSection />
      
      {/* 4. PRUEBA SOCIAL Y ESPECIFICIDAD (Autoridad) */}
      <SocialProofSection />
      <QuickPrepSection />
      
      {/* 5. DESEO Y BENEFICIOS EMOCIONALES (Transformación) */}
      <BenefitsSection />
      <EasierThanGoogleSection />
      <TestimonialsSection />
      
      {/* 6. MATANDO OBJECIONES (Seguridad) */}
      <NoChefNeededSection />
      <CompatibilitySection />
      
      {/* 7. VALOR Y OFERTA (The Pitch) */}
      <BonusSection />
      <PriceComparisonBanner />
      <DeliveryMethodSection />
      <ValueStackSection /> {/* Adicionado aqui para ancoragem */}
      <SpecialOfferSection />
      
      {/* 8. CIERRE Y SEGURIDAD (Risk Reversal) */}
      <TrustBadgesSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
};

export default Index;