
import Hero from "@/components/Hero";
import AdmissionProcess from "@/components/AdmissionProcess";
import ProgramTabs from "@/components/ProgramTabs";
import ProgramSearchFilters from "@/components/ProgramSearchFilters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Programs = () => {
  const [activeView, setActiveView] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="Programmes de Formation"
        subtitle="Excellence académique"
        description="L'IUHEG propose des formations d'excellence conçues pour vous préparer aux défis du monde professionnel actuel et futur."
        imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* View Switcher */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Tabs defaultValue="by-level" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
            <TabsTrigger value="by-level">Par Niveau</TabsTrigger>
            <TabsTrigger value="by-domain">Par Domaine</TabsTrigger>
          </TabsList>

          <TabsContent value="by-level">
            {/* Programs Tabs by Level */}
            <ProgramSearchFilters onViewChange={setActiveView} activeView={activeView} />
            <ProgramTabs viewMode={activeView} />
          </TabsContent>

          <TabsContent value="by-domain">
            {/* Programs by Domain - Will be implemented later */}
            <div className="py-8 text-center">
              <p className="text-gray-600">Les formations par domaine seront disponibles prochainement</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Admission Process */}
      <AdmissionProcess />
    </div>
  );
};

export default Programs;
