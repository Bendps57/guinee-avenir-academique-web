
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AboutHistory from "./AboutHistory";
import AboutVision from "./AboutVision";
import AboutValues from "./AboutValues";

const AboutTabs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="histoire" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="histoire" className="text-lg">Histoire</TabsTrigger>
            <TabsTrigger value="vision" className="text-lg">Vision</TabsTrigger>
            <TabsTrigger value="valeurs" className="text-lg">Valeurs</TabsTrigger>
          </TabsList>

          <TabsContent value="histoire">
            <AboutHistory />
          </TabsContent>

          <TabsContent value="vision">
            <AboutVision />
          </TabsContent>

          <TabsContent value="valeurs">
            <AboutValues />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutTabs;
