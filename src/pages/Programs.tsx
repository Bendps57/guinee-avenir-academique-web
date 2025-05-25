
import Hero from "@/components/Hero";
import AdmissionProcess from "@/components/AdmissionProcess";
import ProgramTabs from "@/components/ProgramTabs";
import ProgramSearchFilters from "@/components/ProgramSearchFilters";
import { useState } from "react";
import { licensePrograms, masterPrograms, btsPrograms, bachelorPlusFourPrograms } from "@/data/programs";

const Programs = () => {
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Combiner tous les programmes pour la recherche
  const allPrograms = [...licensePrograms, ...bachelorPlusFourPrograms, ...masterPrograms, ...btsPrograms];

  // Fonction de recherche
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="Programmes de Formation"
        subtitle="Excellence académique"
        description="L'IUHEG propose des formations d'excellence conçues pour vous préparer aux défis du monde professionnel actuel et futur."
        imageUrl="https://i.imgur.com/3QHE3wh.jpeg"
      />

      {/* Vue principale des programmes */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <ProgramSearchFilters
          onViewChange={setActiveView}
          activeView={activeView}
          onSearch={handleSearch}
        />
        <ProgramTabs viewMode={activeView} />
      </div>

      {/* Admission Process */}
      <AdmissionProcess />
    </div>
  );
};

export default Programs;
