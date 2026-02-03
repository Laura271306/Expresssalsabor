import React, { useEffect, lazy, Suspense } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import TheProblemSection from "@/components/TheProblemSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import RestZone from "@/components/RestZone";
import CtaButton from "@/components/CtaButton";
import { CHECKOUT_LINK } from "@/lib/constants";

// Lazy Imports (Below the fold)
const UserProfilesSection = lazy(() => import("@/components/UserProfilesSection"));
const CrispMethodSection = lazy(() => import("@/components/CrispMethodSection"));
const EasierThanGoogleSection = lazy(() => import("@/components/EasierThanGoogleSection"));
const AirfryerMagicaSection = lazy(() => import("@/components/AirfryerMagicaSection"));
const NoChefNeededSection = lazy(() => import("@/components/NoChefNeededSection"));
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const BonusSection = lazy(() => import("@/components/BonusSection"));
const PriceComparisonBanner = lazy(() => import("@/components/PriceComparisonBanner"));
const DeliveryMethodSection = lazy(() => import("@/components/DeliveryMethodSection"));
const SpecialOfferSection = lazy(() => import("@/components/SpecialOfferSection"));
const TrustBadgesSection = lazy(() => import("@/components/TrustBadgesSection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const FinalCtaSection = lazy(() => import("@/components/FinalCtaSection"));
const CompatibilitySection = lazy(() => import("@/components/CompatibilitySection"));
const QuickPrepSection = lazy(() => import("@/components/QuickPrepSection"));
const HowItWorksInPractice = lazy(() => import("@/components/HowItWorksInPractice"));

const LoadingFallback = () => (
  <div className="h-16 bg-gray-100 animate-pulse"></div>
);

const Index = () => {
  useEffect(() => {
    // trackViewContent removido conforme solicitado. PageView é disparado no FacebookPixel.tsx
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

      <Suspense fallback={<LoadingFallback />}>
        <UserProfilesSection />
      </Suspense>
      
      <RestZone text="Hasta aquí, ¿ya te viste usando esto en tu día a día?" />

      <Suspense fallback={<LoadingFallback />}>
        <CrispMethodSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <EasierThanGoogleSection />
      </Suspense>
      
      {/* Repetición Clave 1 */}
      <div className="bg-white py-6 px-6 text-center">
        <p className="font-sans text-xl font-bold text-dark-bg">
          Más sencillo que perderse en Google.
        </p>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <AirfryerMagicaSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <NoChefNeededSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <CompatibilitySection />
      </Suspense>

      {/* Repetición Clave 2 */}
      <div className="bg-dark-bg py-6 px-6 text-center border-t border-gray-800">
        <p className="font-sans text-xl font-bold text-highlight-gold">
          Funciona incluso si odias cocinar.
        </p>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <QuickPrepSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <SocialProofSection />
      </Suspense>

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

      <Suspense fallback={<LoadingFallback />}>
        <BenefitsSection />
      </Suspense>

      {/* Repetição Clave 3 */}
      <div className="bg-light-bg py-6 px-6 text-center border-y border-gray-200">
        <p className="font-sans text-xl font-bold text-dark-bg">
          Diseñado para comidas reales de tu rutina diaria.
        </p>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>
      
      <RestZone text="El miedo a fallar termina cuando tienes el paso a paso exacto." />
      
      <Suspense fallback={<LoadingFallback />}>
        <BonusSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <PriceComparisonBanner />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <DeliveryMethodSection />
      </Suspense>

      {/* Frase de decisão + bloco de uso */}
      <div className="bg-white pt-20 pb-10 px-6 text-center">
        <p className="font-serif text-3xl font-bold text-dark-bg mb-10">
          Si esto ya te hace sentido, no necesitas pensarlo tanto.
        </p>
      </div>
      
      <Suspense fallback={<LoadingFallback />}>
        <HowItWorksInPractice />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <SpecialOfferSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <TrustBadgesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <GuaranteeSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <FaqSection />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <FinalCtaSection />
      </Suspense>
    </div>
  );
};

export default Index;