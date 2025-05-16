
import { Calendar, CheckCircle } from "lucide-react";

interface ProgramSeminarsProps {
  seminars: string[];
  description: string;
}

const ProgramSeminars = ({ seminars, description }: ProgramSeminarsProps) => {
  return (
    <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-6 w-6 text-university-blue" />
        <h2 className="text-xl font-bold">SÉMINAIRES</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {seminars.map((seminar, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-university-gold mr-2 mt-1 flex-shrink-0" />
            <span>{seminar}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProgramSeminars;
