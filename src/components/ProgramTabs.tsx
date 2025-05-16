
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { certificationPrograms, doctoratPrograms, licensePrograms, masterPrograms } from "@/data/programsData";
import ProgramList from "./ProgramList";

interface ProgramTabsProps {
  viewMode: "grid" | "list";
}

const ProgramTabs = ({ viewMode }: ProgramTabsProps) => {
  return (
    <section className="py-8" id="programmes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="licence" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="licence" id="licence" className="text-lg">Licences</TabsTrigger>
            <TabsTrigger value="master" id="master" className="text-lg">Masters</TabsTrigger>
            <TabsTrigger value="doctorat" id="doctorat" className="text-lg">Doctorats</TabsTrigger>
            <TabsTrigger value="certification" id="certifications" className="text-lg">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="licence">
            <ProgramList programs={licensePrograms} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="master">
            <ProgramList programs={masterPrograms} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="doctorat">
            <ProgramList programs={doctoratPrograms} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="certification">
            <ProgramList programs={certificationPrograms} viewMode={viewMode} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramTabs;
