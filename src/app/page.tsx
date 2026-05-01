import HeroSection from "@/components/sections/HeroSection";
import SectionDivider from "@/components/sections/SectionDivider";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowToOrderSection from "@/components/sections/HowToOrderSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <SectionDivider type="waves-down" />
      
      <FeaturesSection />
      
      <SectionDivider type="curve-up" />
      
      <HowToOrderSection />
      
      <SectionDivider type="waves-down" />
      
      <FAQSection />
      
      <SectionDivider type="curve-up" />
      
      <CTASection />
      
      <SectionDivider type="triangle" />
      
      <FooterSection />
    </main>
  );
}