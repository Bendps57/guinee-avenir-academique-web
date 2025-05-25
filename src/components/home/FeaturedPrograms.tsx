
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
  // Featured programs from IUHEG website - Licence Informatique Décisionnelle en première position
  const featuredPrograms: ProgramType[] = [
    {
      id: "informatique-decisionnelle",
      title: "Licence Informatique Décisionnelle",
      level: "Licence",
      duration: "3 ans",
      description: "Formation spécialisée en analyse de données, business intelligence et aide à la décision pour les entreprises modernes.",
      iconName: "Book"
    },
    {
      id: "business-administration",
      title: "Business Administration",
      level: "Licence",
      duration: "3 ans",
      description: "Formation complète en gestion d'entreprise, marketing, finance, et ressources humaines pour les futurs managers.",
      iconName: "Book"
    },
    {
      id: "marketing-international",
      title: "Marketing et Commerce International",
      level: "Licence",
      duration: "3 ans",
      description: "Formation en marketing international, commerce mondial et stratégies d'expansion pour réussir dans un environnement commercial mondialisé.",
      iconName: "Book"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Nos formations phares</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes d'excellence conçus pour répondre aux exigences du marché du travail
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
              Découvrez toutes nos formations
              <Book className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
