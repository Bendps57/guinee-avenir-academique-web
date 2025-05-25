
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExchangePrograms from "./ExchangePrograms";
import InternshipPrograms from "./InternshipPrograms";
import LanguageCenter from "./LanguageCenter";

const GlobalProgramsTabs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Programmes internationaux</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explorez les opportunités internationales offertes aux étudiants de l'IUHEG
          </p>
        </div>

        <Tabs defaultValue="exchanges" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="exchanges" className="text-lg">Échanges</TabsTrigger>
            <TabsTrigger value="internships" className="text-lg">Stages</TabsTrigger>
            <TabsTrigger value="languages" className="text-lg">Langues</TabsTrigger>
          </TabsList>

          <TabsContent value="exchanges">
            <ExchangePrograms />
          </TabsContent>

          <TabsContent value="internships">
            <InternshipPrograms />
          </TabsContent>

          <TabsContent value="languages">
            <LanguageCenter />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default GlobalProgramsTabs;
