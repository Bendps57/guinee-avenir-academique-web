
import HeroSection from "@/components/home/HeroSection";
import KeyFeatures from "@/components/home/KeyFeatures";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import UniversityInfo from "@/components/home/UniversityInfo";
import TeamSection from "@/components/home/TeamSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Key Features */}
      <KeyFeatures />
      
      {/* Featured Programs */}
      <FeaturedPrograms />
      
      {/* University Info */}
      <UniversityInfo />
      
      {/* Team */}
      <TeamSection />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Index;
