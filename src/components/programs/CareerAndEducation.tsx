
import { CircleCheck, GraduationCap } from "lucide-react";

interface CareerAndEducationProps {
  careers: string[];
  educationDescription: string;
  educationOptions: string[];
}

const CareerAndEducation = ({ careers, educationDescription, educationOptions }: CareerAndEducationProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* Débouchés */}
      <div className="bg-gradient-to-br from-university-blue/10 to-university-navy/10 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-university-blue">DÉBOUCHÉS</h2>
        <ul className="space-y-3">
          {careers.map((career, index) => (
            <li key={index} className="flex items-center">
              <CircleCheck className="h-5 w-5 text-university-gold mr-2 flex-shrink-0" />
              <span>{career}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Poursuite d'études */}
      <div className="bg-gradient-to-br from-university-blue/10 to-university-navy/10 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-university-blue">POURSUITE D'ÉTUDES</h2>
        <p className="text-gray-700 mb-4">
          {educationDescription}
        </p>
        <ul className="space-y-3">
          {educationOptions.map((option, index) => (
            <li key={index} className="flex items-center">
              <GraduationCap className="h-5 w-5 text-university-gold mr-2 flex-shrink-0" />
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerAndEducation;
