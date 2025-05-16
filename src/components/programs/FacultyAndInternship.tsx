
import { BookOpen, Users } from "lucide-react";

interface FacultyAndInternshipProps {
  facultyText: string;
  internshipText: string;
}

const FacultyAndInternship = ({ facultyText, internshipText }: FacultyAndInternshipProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* Enseignants */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-6 w-6 text-university-blue" />
          <h2 className="text-xl font-bold">ENSEIGNANTS</h2>
        </div>
        <p className="text-gray-700">
          {facultyText}
        </p>
      </div>
      
      {/* Stages */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-6 w-6 text-university-blue" />
          <h2 className="text-xl font-bold">STAGE</h2>
        </div>
        <p className="text-gray-700">
          {internshipText}
        </p>
      </div>
    </div>
  );
};

export default FacultyAndInternship;
