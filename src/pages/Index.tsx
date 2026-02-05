import React, { Suspense, lazy } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import DeferredContent from "@/components/DeferredContent";

// Lazy loading all sections
const RecipeCarouselSection = lazy(() => import("@/components/RecipeCarouselSection"));
const TheProblemSection = lazy(() => import("@/components/TheProblemSection"));
const SolutionSection = lazy(() => import("@/components/SolutionSection"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const UserProfilesSection = lazy(() => import("@/components/UserProfilesSection"));
const RestZone = lazy(() => import("@/components/RestZone"));
const CrispMethodSection = lazy(() => import("@/components/CrispMethodSection"));
const AuthoritySection = lazy(() => import("@/components/AuthoritySection"));
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

const LoadingPlaceholder = () => <div className="h-20 w-full animate-pulse bg-gray-100" />;

const Index = () => {
  return (
    <div className="w-full min-h-screen">
      <UrgencyBanner />
      {/* Critical path: ONLY the Hero Section is rendered initially */}
      <HeroSection />

      {/* Everything else is deferred until interaction or idle */}
      <DeferredContent delay={2000}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <RecipeCarouselSection />
          <TheProblemSection />
          <SolutionSection />
          <BeforeAfterSection />

          <div className="bg-light-bg py-10 px-6 text-center">
            <p className="font-serif italic text-2xl text-dark-bg/80 max-w-3xl mx-auto leading-relaxed">
              “Si ya intentaste organizarte y no funcionó, el problema no eras tú. <span className="text-highlight-gold font-bold">Era el método.</span>”
            </p>
          </div>

          <UserProfilesSection />
          <RestZone text="Hasta aquí, ¿ya te viste usando esto en tu día a día?" />
          <CrispMethodSection />
          <AuthoritySection />
          <EasierThanGoogleSection />

          <div className="bg-white py-6 px-6 text-center">
            <p className="font-sans text-xl font-bold text-dark-bg">
              Más sencillo que perderse en Google.
            </p>
          </div>

          <AirfryerMagicaSection />
          <NoChefNeededSection />
          <CompatibilitySection />

          <div className="bg-dark-bg py-6 px-6 text-center border-t border-gray-800">
            <p className="font-sans text-xl font-bold text-highlight-gold">
              Funciona incluso si odias cocinar.
            </p>
          </div>

          <QuickPrepSection />
          <SocialProofSection />
          <BenefitsSection />
          <TestimonialsSection />
          <BonusSection />
          <PriceComparisonBanner />
          <DeliveryMethodSection />
          <HowItWorksInPractice />
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