
import { Book, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Course {
  name: string;
  credits: number;
}

interface CourseRow {
  course1: Course;
  course2: Course;
}

interface ProgramYearContentProps {
  description: string;
  teachingHours: number;
  personalWorkHours: number;
  courses: CourseRow[];
}

const ProgramYearContent = ({ 
  description, 
  teachingHours, 
  personalWorkHours, 
  courses 
}: ProgramYearContentProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4">
          <p className="text-gray-700">
            {description}
          </p>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center">
            <Book className="h-5 w-5 mr-2 text-university-blue" />
            <p className="text-sm">Enseignement: <span className="font-medium">{teachingHours} heures</span></p>
          </div>
          <div className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-university-blue" />
            <p className="text-sm">Travail personnel: <span className="font-medium">{personalWorkHours} heures</span></p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">PROGRAMMES</th>
                <th className="p-3 text-center">CRÉDITS</th>
                <th className="p-3 text-left">PROGRAMMES</th>
                <th className="p-3 text-center">CRÉDITS</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((row, index) => (
                <tr key={index} className={index < courses.length - 1 ? "border-b" : ""}>
                  <td className="p-3">{row.course1.name}</td>
                  <td className="p-3 text-center">{row.course1.credits}</td>
                  <td className="p-3">{row.course2.name}</td>
                  <td className="p-3 text-center">{row.course2.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramYearContent;
