
import InternationalHero from "@/components/international/InternationalHero";
import PartnersSection from "@/components/international/PartnersSection";
import GlobalProgramsTabs from "@/components/international/GlobalProgramsTabs";
import WorldMapSection from "@/components/international/WorldMapSection";
import InternationalStudentsSection from "@/components/international/InternationalStudentsSection";

const International = () => {
  return (
    <div className="min-h-screen pt-20">
      <InternationalHero />
      <PartnersSection />
      <GlobalProgramsTabs />
      <WorldMapSection />
      <InternationalStudentsSection />
    </div>
  );
};

export default International;
