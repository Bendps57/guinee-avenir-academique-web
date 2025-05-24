
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  licensePrograms, 
  masterPrograms,
  btsPrograms,
  bachelorPlusFourPrograms
} from "@/data/programs";
import ProgramList from "./ProgramList";

interface ProgramTabsProps {
  viewMode: "grid" | "list";
}

const ProgramTabs = ({ viewMode }: ProgramTabsProps) => {
  return (
    <section className="py-8" id="programmes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="licence" className="w-full">
          <TabsList className="grid w-full md:grid-cols-4 grid-cols-2 mb-12 gap-2">
            <TabsTrigger value="licence" id="licence" className="text-lg">Licences/BAC+3</TabsTrigger>
            <TabsTrigger value="bachelor4" id="bachelor4" className="text-lg">Licences/BAC+4</TabsTrigger>
            <TabsTrigger value="master" id="master" className="text-lg">Masters</TabsTrigger>
            <TabsTrigger value="bts" id="bts" className="text-lg">BTS</TabsTrigger>
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

          <TabsContent value="bts">
            <ProgramList programs={btsPrograms} viewMode={viewMode} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramTabs;
