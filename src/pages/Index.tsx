import React, { useEffect } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import RestZone from "@/components/RestZone";
import CtaButton from "@/components/CtaButton";
import { CHECKOUT_LINK } from "@/lib/constants";

// Static Imports (Ensuring all components are available immediately for smooth scrolling)
import UserProfilesSection from "@/components/UserProfilesSection";
import CrispMethodSection from "@/components/CrispMethodSection";
import EasierThanGoogleSection from "@/components/EasierThanGoogleSection";
import AirfryerMagicaSection from "@/components/AirfryerMagicaSection";
import NoChefNeededSection from "@/components/NoChefNeededSection";
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
import CompatibilitySection from "@/components/CompatibilitySection";
import QuickPrepSection from "@/components/QuickPrepSection";
import HowItWorksInPractice from "@/components/HowItWorksInPractice";

const Index = () => {
  useEffect(() => {
    // PageView is fired in FacebookPixel.tsx
  }, []);

  return (
    <div className="w-full min-h-screen">
      <UrgencyBanner />
      <HeroSection />
      
      <TheProblemSection />
      <BeforeAfterSection />

      {/* Alivio Emocional / Normalización */}
      <div className="bg-light-bg py-10 px-6 text-center">
        <p className="font-serif italic text-2xl text-dark-bg/80 max-w-3xl mx-auto leading-relaxed">
          “Si ya intentaste organizarte y no funcionó, el problema no eras tú. <span className="text-highlight-gold font-bold">Era el método.</span>”
        </p>
      </div>

      <UserProfilesSection />
      
      <RestZone text="Hasta aquí, ¿ya te viste usando esto en tu día a día?" />

      <CrispMethodSection />
      <EasierThanGoogleSection />
      
      {/* Repetición Clave 1 */}
      <div className="bg-white py-6 px-6 text-center">
        <p className="font-sans text-xl font-bold text-dark-bg">
          Más sencillo que perderse en Google.
        </p>
      </div>

      <AirfryerMagicaSection />
      <NoChefNeededSection />
      
      <CompatibilitySection />

      {/* Repetición Clave 2 */}
      <div className="bg-dark-bg py-6 px-6 text-center border-t border-gray-800">
        <p className="font-sans text-xl font-bold text-highlight-gold">
          Funciona incluso si odias cocinar.
        </p>
      </div>

      <QuickPrepSection />
      
      <SocialProofSection />

      {/* CTA Anticipado (Agora aponta para o checkout) */}
      <div className="bg-dark-bg py-10 px-6 text-center border-t border-gray-800">
        <p className="font-sans text-xl text-gray-400 mb-6 italic">Si esto ya te hace sentido, no necesitas leer todo.</p>
        <p className="font-sans text-2xl font-bold text-white mb-4">
          ¡Aprovecha el 95% de descuento antes de que termine la oferta!
        </p>
        <CtaButton href={CHECKOUT_LINK} className="bg-highlight-gold hover:bg-yellow-600 text-dark-bg">
          ✨ QUIERO EMPEZAR AHORA
        </CtaButton>
      </div>

      <RestZone text="¿Te imaginas recuperar 40 minutos de tu tarde hoy mismo?" />

      <BenefitsSection />

      {/* Repetição Clave 3 */}
      <div className="bg-light-bg py-6 px-6 text-center border-y border-gray-200">
        <p className="font-sans text-xl font-bold text-dark-bg">
          Diseñado para comidas reales de tu rutina diaria.
        </p>
      </div>

      <TestimonialsSection />
      
      <RestZone text="El miedo a fallar termina cuando tienes el paso a paso exacto." />
      
      <BonusSection />
      <PriceComparisonBanner />
      <DeliveryMethodSection />

      {/* Frase de decisão + bloco de uso */}
      <div className="bg-white pt-20 pb-10 px-6 text-center">
        <p className="font-serif text-3xl font-bold text-dark-bg mb-10">
          Si esto ya te hace sentido, no necesitas pensarlo tanto.
        </p>
      </div>
      
      <HowItWorksInPractice />
      
      <SpecialOfferSection />
      
      <TrustBadgesSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
};

export default Index;