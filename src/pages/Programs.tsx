
import Hero from "@/components/Hero";
import AdmissionProcess from "@/components/AdmissionProcess";
import ProgramTabs from "@/components/ProgramTabs";

const Programs = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="Programmes de Formation"
        subtitle="Excellence académique"
        description="L'IUHEG propose des formations d'excellence conçues pour vous préparer aux défis du monde professionnel actuel et futur."
        imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* Programs Tabs */}
      <ProgramTabs />

      {/* Admission Process */}
      <AdmissionProcess />
    </div>
  );
};

export default Programs;
