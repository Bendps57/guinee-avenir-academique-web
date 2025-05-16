
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Book, BookOpen, Clock, GraduationCap, University } from "lucide-react";
import { Link } from "react-router-dom";

interface ProgramRowProps {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  iconName?: string;
  modules?: string[];
}

const ProgramRow = ({ id, title, level, duration, description, iconName, modules }: ProgramRowProps) => {
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-l-university-gold">
      <div className="flex flex-col md:flex-row">
        <div className="flex-grow p-6">
          <div className="flex items-center gap-2 mb-2">
            {renderIcon()}
            <span className="text-sm font-medium text-university-blue">{level}</span>
            <div className="flex items-center gap-1 ml-4">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">{duration}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          
          {modules && modules.length > 0 && (
            <div className="hidden md:flex flex-wrap gap-2 mt-2">
              {modules.slice(0, 3).map((module, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  {module}
                </span>
              ))}
              {modules.length > 3 && (
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  +{modules.length - 3} autres
                </span>
              )}
            </div>
          )}
        </div>
        
        <div className="p-4 md:p-6 bg-gray-50 flex items-center">
          <Button asChild className="bg-university-blue hover:bg-university-navy">
            <Link to={`/formations/${id}`}>Voir les détails</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProgramRow;
