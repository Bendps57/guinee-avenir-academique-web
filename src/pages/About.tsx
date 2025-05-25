
import Hero from "@/components/Hero";
import AboutTabs from "@/components/about/AboutTabs";
import TeamSection from "@/components/about/TeamSection";
import CampusFacilities from "@/components/about/CampusFacilities";
import StudentLife from "@/components/about/StudentLife";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="À propos de l'IUHEG"
        subtitle="Notre histoire et notre vision"
        description="Découvrez qui nous sommes et ce qui nous motive à façonner l'avenir de l'éducation en Guinée."
        imageUrl="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* About Tabs */}
      <AboutTabs />

      {/* Team Section */}
      <TeamSection />

      {/* Campus Facilities */}
      <CampusFacilities />

      {/* Student Life */}
      <StudentLife />
    </div>
  );
};

export default About;
