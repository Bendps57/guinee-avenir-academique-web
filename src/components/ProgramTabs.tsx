
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  licensePrograms, 
  doctoratPrograms, 
  masterPrograms,
  btsPrograms,
  bachelorPlusFourPrograms
} from "@/data/programsData";
import ProgramList from "./ProgramList";

interface ProgramTabsProps {
  viewMode: "grid" | "list";
}

const ProgramTabs = ({ viewMode }: ProgramTabsProps) => {
  return (
    <section className="py-8" id="programmes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="licence" className="w-full">
          <TabsList className="grid w-full md:grid-cols-6 grid-cols-3 mb-12 gap-2">
            <TabsTrigger value="licence" id="licence" className="text-lg">Licences</TabsTrigger>
            <TabsTrigger value="bachelor4" id="bachelor4" className="text-lg">BAC+4</TabsTrigger>
            <TabsTrigger value="master" id="master" className="text-lg">Masters</TabsTrigger>
            <TabsTrigger value="doctorat" id="doctorat" className="text-lg">Doctorats</TabsTrigger>
            <TabsTrigger value="bts" id="bts" className="text-lg">BTS</TabsTrigger>
            <TabsTrigger value="certification" id="certifications" className="text-lg">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="licence">
            <ProgramList programs={licensePrograms} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="bachelor4">
            <ProgramList programs={bachelorPlusFourPrograms} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="master">
            <ProgramList programs={masterPrograms} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="doctorat">
            <ProgramList programs={doctoratPrograms} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="bts">
            <ProgramList programs={btsPrograms} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="certification">
            <ProgramList programs={[]} viewMode={viewMode} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramTabs;
