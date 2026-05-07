import StickyHeroSection from "@/components/sections/StickyHeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SectionDivider from "@/components/sections/SectionDivider";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FullImageSection from "@/components/sections/FullImageSection";
import HowToOrderSection from "@/components/sections/HowToOrderSection";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import MapSection from "@/components/sections/MapSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <StickyHeroSection />
      <AboutSection />

      <SectionDivider type="waves-down" />

      <ServicesSection />


      <SectionDivider type="curve-up" />

      <FeaturesSection />
      
      <FullImageSection />
      
      <SectionDivider type="curve-up" />
      
      <HowToOrderSection />
      
      <SectionDivider type="waves-down" />
      
      <PhotoGallerySection />
      
      <SectionDivider type="curve-up" />
      
      <CTASection />
      
      <SectionDivider type="triangle" />
      
      <FAQSection />

      <SectionDivider type="waves-down" />
      
      <MapSection />
      
      <FooterSection />
    </main>
  );
}