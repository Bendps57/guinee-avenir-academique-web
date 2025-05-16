
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgramYearContent from "./ProgramYearContent";

interface YearData {
  description: string;
  teachingHours: number;
  personalWorkHours: number;
  courses: {
    course1: {
      name: string;
      credits: number;
    };
    course2: {
      name: string;
      credits: number;
    };
  }[];
}

interface ProgramCurriculumProps {
  year1: YearData;
  year2: YearData;
  year3: YearData;
}

const ProgramCurriculum = ({ year1, year2, year3 }: ProgramCurriculumProps) => {
  return (
    <Tabs defaultValue="licence1" className="mb-12">
      <h2 className="text-2xl font-bold mb-6">PROGRAMME DE FORMATION</h2>
      <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
        <TabsTrigger value="licence1">Licence 1</TabsTrigger>
        <TabsTrigger value="licence2">Licence 2</TabsTrigger>
        <TabsTrigger value="licence3">Licence 3</TabsTrigger>
      </TabsList>
      
      <TabsContent value="licence1">
        <ProgramYearContent 
          description={year1.description}
          teachingHours={year1.teachingHours}
          personalWorkHours={year1.personalWorkHours}
          courses={year1.courses}
        />
      </TabsContent>
      
      <TabsContent value="licence2">
        <ProgramYearContent 
          description={year2.description}
          teachingHours={year2.teachingHours}
          personalWorkHours={year2.personalWorkHours}
          courses={year2.courses}
        />
      </TabsContent>
      
      <TabsContent value="licence3">
        <ProgramYearContent 
          description={year3.description}
          teachingHours={year3.teachingHours}
          personalWorkHours={year3.personalWorkHours}
          courses={year3.courses}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ProgramCurriculum;
