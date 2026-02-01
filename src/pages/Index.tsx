import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CrispMethodSection from "@/components/CrispMethodSection";
import EasierThanGoogleSection from "@/components/EasierThanGoogleSection";
import AirfryerMagicaSection from "@/components/AirfryerMagicaSection";
import SocialProofSection from "@/components/SocialProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import PriceComparisonBanner from "@/components/PriceComparisonBanner";
import DeliveryMethodSection from "@/components/DeliveryMethodSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import RestZone from "@/components/RestZone";
import CtaButton from "@/components/CtaButton";
import { useEffect } from "react";
import { trackViewContent } from "@/utils/facebookPixel";

const Index = () => {
  useEffect(() => {
    trackViewContent();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <UrgencyBanner />
      <HeroSection />
      
      <TheProblemSection />
      <BeforeAfterSection />
      
      <RestZone text="Hasta aquí, ¿ya te viste usando esto en tu día a día?" />

      <CrispMethodSection />
      <EasierThanGoogleSection />
      <AirfryerMagicaSection />
      
      <SocialProofSection />

      {/* CTA Anticipado */}
      <div className="bg-dark-bg py-10 px-6 text-center border-t border-gray-800">
        <p className="font-sans text-xl text-gray-400 mb-6 italic">Si esto ya te hace sentido, no necesitas leer todo.</p>
        <CtaButton href="#link-ancoragem" className="bg-highlight-gold hover:bg-yellow-600 text-dark-bg">
          ✨ QUIERO EMPEZAR AHORA
        </CtaButton>
      </div>

      <RestZone text="¿Te imaginas recuperar 40 minutos de tu tarde hoy mismo?" />

      <BenefitsSection />
      <TestimonialsSection />
      
      <RestZone text="El miedo a fallar termina cuando tienes el paso a paso exacto." />
      
      <BonusSection />
      <PriceComparisonBanner />
      <DeliveryMethodSection />
      <SpecialOfferSection />
      
      <TrustBadgesSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
};

export default Index;