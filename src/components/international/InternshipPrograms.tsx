
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InternshipPrograms = () => {
  const internshipOpportunities = [
    {
      company: "Total Énergies",
      location: "Multiple locations",
      description: "Stages dans divers départements pour les étudiants en gestion, ingénierie et économie."
    },
    {
      company: "Banque Mondiale",
      location: "Washington D.C., États-Unis",
      description: "Opportunités pour les étudiants en économie, finance et développement international."
    },
    {
      company: "Orange",
      location: "Paris, France",
      description: "Stages en technologie, marketing et gestion pour les étudiants en informatique et commerce."
    },
    {
      company: "Cabinet Deloitte",
      location: "Multiple locations",
      description: "Stages en audit, conseil et finance pour les étudiants en commerce et gestion."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="order-2 lg:order-1">
        <div className="grid grid-cols-1 gap-6">
          <h3 className="text-2xl font-bold text-university-blue mb-2">Stages internationaux</h3>
          <p className="text-gray-700 mb-2">
            L'IUHEG facilite l'accès à des opportunités de stages internationaux pour permettre à ses étudiants d'acquérir une expérience professionnelle précieuse dans un contexte multiculturel.
          </p>
          
          <div className="space-y-4">
            {internshipOpportunities.map((opportunity) => (
              <Card key={opportunity.company}>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-university-blue mb-1">{opportunity.company}</h4>
                  <p className="text-university-gold text-sm mb-2">{opportunity.location}</p>
                  <p className="text-gray-600">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-4">
            <Button className="bg-university-blue hover:bg-university-navy">
              Voir toutes les opportunités
            </Button>
          </div>
        </div>
      </div>
      
      <div className="order-1 lg:order-2 space-y-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://i.imgur.com/W5JkuQI.jpeg" 
            alt="Étudiants africains en stage" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <Card className="bg-gray-100">
          <CardContent className="p-6">
            <h4 className="text-xl font-semibold text-university-blue mb-4">Avantages des stages internationaux</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2">
                  ✓
                </div>
                <span>Développer des compétences interculturelles</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2">
                  ✓
                </div>
                <span>Acquérir une expérience professionnelle valorisante</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2">
                  ✓
                </div>
                <span>Renforcer les compétences linguistiques</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2">
                  ✓
                </div>
                <span>Créer un réseau professionnel international</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2">
                  ✓
                </div>
                <span>Se démarquer sur le marché du travail</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InternshipPrograms;
