
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { certificationPrograms, doctoratPrograms, licensePrograms, masterPrograms } from "@/data/programsData";
import ProgramList from "./ProgramList";

const ProgramTabs = () => {
  return (
    <section className="py-16" id="programmes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Nos programmes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            L'IUHEG propose une large gamme de formations adaptées à vos ambitions professionnelles, de la licence au doctorat
          </p>
        </div>

        <Tabs defaultValue="licence" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="licence" id="licence" className="text-lg">Licences</TabsTrigger>
            <TabsTrigger value="master" id="master" className="text-lg">Masters</TabsTrigger>
            <TabsTrigger value="doctorat" id="doctorat" className="text-lg">Doctorats</TabsTrigger>
            <TabsTrigger value="certification" id="certifications" className="text-lg">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="licence">
            <ProgramList programs={licensePrograms} />
          </TabsContent>

          <TabsContent value="master">
            <ProgramList programs={masterPrograms} />
          </TabsContent>

          <TabsContent value="doctorat">
            <ProgramList programs={doctoratPrograms} />
          </TabsContent>

          <TabsContent value="certification">
            <ProgramList programs={certificationPrograms} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramTabs;
