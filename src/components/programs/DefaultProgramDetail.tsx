
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

interface DefaultProgramDetailProps {
  program: {
    id: string;
    title: string;
    level: string;
    duration: string;
    description: string;
    modules?: string[];
    objectives?: string[];
    careers?: string[];
    admissionRequirements?: string;
  };
}

const DefaultProgramDetail = ({ program }: DefaultProgramDetailProps) => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/formations" className="flex items-center text-university-blue hover:text-university-navy transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            <span>Retour aux formations</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">{program.title}</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-university-blue/10 text-university-blue px-3 py-1 rounded-full text-sm font-medium">
              {program.level}
            </span>
            <span className="text-gray-500 text-sm">{program.duration}</span>
          </div>
          <p className="text-gray-700 mb-6">{program.description}</p>
          
          {program.modules && program.modules.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Modules du programme</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {program.modules.map((module, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-university-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {program.objectives && program.objectives.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Objectifs du programme</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {program.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-university-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {program.careers && program.careers.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Débouchés professionnels</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {program.careers.map((career, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-university-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {program.admissionRequirements && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Conditions d'admission</h2>
              <p className="text-gray-700">{program.admissionRequirements}</p>
            </div>
          )}
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-university-blue/10 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Intéressé par ce programme?</h2>
          <p className="text-gray-700 mb-4">Contactez-nous pour en savoir plus ou pour commencer votre procédure d'inscription.</p>
          <div className="flex gap-4 justify-center">
            <Button asChild className="bg-university-blue hover:bg-university-navy">
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-university-blue text-university-blue hover:bg-university-blue/10"
            >
              <a 
                href="https://drive.google.com/file/d/1vPCtj0tlkIe6n6QYiy7r6rueqzX7PwOj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                S'inscrire
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultProgramDetail;
