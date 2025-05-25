
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ExchangePrograms = () => {
  const exchangePrograms = [
    {
      title: "Programme Erasmus+",
      description: "Séjours d'études dans des universités européennes partenaires pour une durée d'un semestre ou d'une année académique.",
      eligibility: "Étudiants en licence (à partir de la 2ème année) et en master."
    },
    {
      title: "Programme d'échange nord-américain",
      description: "Opportunités d'études au Canada et aux États-Unis dans des institutions reconnues.",
      eligibility: "Étudiants en licence (à partir de la 3ème année) et en master."
    },
    {
      title: "Échanges régionaux africains",
      description: "Séjours académiques dans des universités partenaires en Afrique pour favoriser la coopération régionale.",
      eligibility: "Tous les niveaux d'études."
    },
    {
      title: "Summer Schools internationales",
      description: "Programmes intensifs d'été dans diverses disciplines, offerts par nos partenaires internationaux.",
      eligibility: "Tous les niveaux d'étudiants."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold text-university-blue mb-6">Programmes d'échanges universitaires</h3>
        <p className="text-gray-700 mb-6">
          L'IUHEG offre à ses étudiants la possibilité de passer une partie de leur cursus dans l'une de nos universités partenaires à travers le monde. Ces expériences enrichissantes permettent d'acquérir une perspective internationale précieuse et de développer des compétences interculturelles essentielles.
        </p>

        <div className="space-y-4">
          {exchangePrograms.map((program) => (
            <Card key={program.title} className="overflow-hidden">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-university-blue mb-2">{program.title}</h4>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium mr-2">Éligibilité:</span>
                  <span>{program.eligibility}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" 
            alt="Étudiants africains en échange" 
            className="w-full h-64 object-cover"
          />
        </div>

        <Card className="bg-university-blue text-white">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold mb-4">Témoignage</h4>
            <p className="italic mb-4">
              "Mon semestre d'échange à Brest Business School a été une expérience transformative. J'ai non seulement amélioré mon français, mais j'ai aussi développé une perspective entièrement nouvelle sur ma discipline et créé un réseau international qui me sera utile dans ma carrière."
            </p>
            <p className="font-medium">- Mariama Diallo, Étudiante en 3ème année de Commerce International</p>
          </CardContent>
        </Card>

        <Card className="border-university-gold border-2">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-university-blue mb-4">Comment candidater</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-university-gold mr-2 mt-0.5" />
                <span>Consultez la liste des universités partenaires</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-university-gold mr-2 mt-0.5" />
                <span>Vérifiez votre éligibilité pour le programme souhaité</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-university-gold mr-2 mt-0.5" />
                <span>Préparez votre dossier de candidature</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-university-gold mr-2 mt-0.5" />
                <span>Soumettez votre candidature au Bureau International</span>
              </li>
            </ul>
            <div className="mt-4">
              <Button className="bg-university-blue hover:bg-university-navy">
                En savoir plus
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExchangePrograms;
