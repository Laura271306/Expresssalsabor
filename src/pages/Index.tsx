import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsSection from "@/components/BenefitsSection";
import CrispMethodSection from "@/components/CrispMethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import ValueStackSection from "@/components/ValueStackSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";

const Index = () => {
  return (
    <div className="w-full min-h-screen">
      {/* BLOCO 1: HERO */}
      <HeroSection />
      
      {/* BLOCO 2: AGITAÇÃO + REVELAÇÃO DA SOLUÇÃO */}
      <SolutionSection />
      
      {/* BLOCO 3: BENEFÍCIOS EM 4 CARDS */}
      <BenefitsSection />
      
      {/* BLOCO 4: MÉTODO C.R.I.S.P. EXPLICADO */}
      <CrispMethodSection />
      
      {/* BLOCO 5: TESTIMONIOS */}
      <TestimonialsSection />
      
      {/* BLOCO 6: BÔNUS EXCLUSIVOS */}
      <BonusSection />
      
      {/* BLOCO 7: SECTION ANCHOR + STACK DE VALOR */}
      <ValueStackSection />
      
      {/* BLOCO 8: COMPATIBILIDADE + FINAL (Text part) */}
      <CompatibilitySection />
      
      {/* BLOCO 9: FAQ - OBJEÇÕES */}
      <FaqSection />
      
      {/* BLOCO 10: CTA FINAL */}
      <FinalCtaSection />
    </div>
  );
};

export default Index;