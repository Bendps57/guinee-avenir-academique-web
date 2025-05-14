
import { Button } from "@/components/ui/button";
import ProgramCard from "@/components/ProgramCard";
import { Book } from "lucide-react";
import { Link } from "react-router-dom";

interface ProgramType {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  iconName: string;
}

const FeaturedPrograms = () => {
  // Mock data for homepage featured programs
  const featuredPrograms: ProgramType[] = [
    {
      id: "licence-gestion",
      title: "Licence en Gestion des Entreprises",
      level: "Licence",
      duration: "3 ans",
      description: "Formation complète en gestion, comptabilité, marketing et ressources humaines pour les futurs managers.",
      iconName: "Book"
    },
    {
      id: "licence-informatique",
      title: "Licence en Informatique",
      level: "Licence",
      duration: "3 ans",
      description: "Formation en programmation, bases de données, réseaux et systèmes d'information pour les métiers du numérique.",
      iconName: "Book"
    },
    {
      id: "master-finance",
      title: "Master en Finance",
      level: "Master",
      duration: "2 ans",
      description: "Spécialisation en finance d'entreprise, analyse financière et gestion de portefeuille pour futurs experts financiers.",
      iconName: "GraduationCap"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Nos formations phares</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes d'excellence conçus pour répondre aux besoins du marché
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program) => (
            <ProgramCard 
              key={program.id}
              id={program.id}
              title={program.title}
              level={program.level}
              duration={program.duration}
              description={program.description}
              iconName={program.iconName}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-university-blue hover:bg-university-navy">
            <Link to="/formations" className="flex items-center gap-2">
              Découvrez nos formations
              <Book className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
