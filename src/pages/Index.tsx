import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import MapSection from "@/components/MapSection";
import FooterSection from "@/components/FooterSection";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MenuSection />
      <BentoGrid />
      <ReviewsSection />
      <MapSection />
      <FooterSection />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
