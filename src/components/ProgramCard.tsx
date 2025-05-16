
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, BookOpen, GraduationCap, University } from "lucide-react";
import { Link } from "react-router-dom";

interface ProgramCardProps {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  iconName?: string;
  modules?: string[];
  objectives?: string[];
  careers?: string[];
  admissionRequirements?: string;
}

const ProgramCard = ({ 
  id, 
  title, 
  level, 
  duration, 
  description, 
  iconName, 
  modules, 
  objectives, 
  careers, 
  admissionRequirements 
}: ProgramCardProps) => {
  const renderIcon = () => {
    switch (iconName) {
      case "Book":
        return <Book className="h-5 w-5 text-university-blue" />;
      case "BookOpen":
        return <BookOpen className="h-5 w-5 text-university-blue" />;
      case "GraduationCap":
        return <GraduationCap className="h-5 w-5 text-university-blue" />;
      case "University":
        return <University className="h-5 w-5 text-university-blue" />;
      default:
        return <Book className="h-5 w-5 text-university-blue" />;
    }
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border-t-4 border-t-university-gold">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {renderIcon()}
          <span className="text-sm font-medium text-university-blue">{level}</span>
        </div>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <span className="font-medium">Durée:</span> {duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>
        
        {modules && modules.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Quelques modules</h4>
            <div className="flex flex-wrap gap-2">
              {modules.slice(0, 3).map((module, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  {module}
                </span>
              ))}
              {modules.length > 3 && (
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  +{modules.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-university-blue hover:bg-university-navy">
          <Link to={`/formations/${id}`}>Voir les détails</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
