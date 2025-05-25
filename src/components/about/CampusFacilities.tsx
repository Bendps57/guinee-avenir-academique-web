
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CampusFacilities = () => {
  const facilities = [
    {
      title: "Bibliothèque moderne",
      description: "Une bibliothèque de pointe avec plus de 20,000 ouvrages et des ressources numériques."
    },
    {
      title: "Laboratoires informatiques",
      description: "Des laboratoires équipés des dernières technologies pour la pratique et la recherche."
    },
    {
      title: "Salles de conférence",
      description: "Des espaces modernes pour les cours, séminaires et événements académiques."
    },
    {
      title: "Centre sportif",
      description: "Des installations sportives complètes pour le bien-être physique des étudiants."
    },
    {
      title: "Cafétéria",
      description: "Un espace de restauration proposant une alimentation variée et équilibrée."
    },
    {
      title: "Espaces d'étude",
      description: "Des zones dédiées au travail individuel et en groupe."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Nos installations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les infrastructures modernes de notre campus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility) => (
              <Card key={facility.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-university-blue">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="h-64 md:h-full bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="Campus IUHEG" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-university-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Visite du campus</h3>
              <p className="mb-4">Venez découvrir notre campus et nos installations lors d'une visite guidée.</p>
              <a href="#" className="inline-block px-4 py-2 bg-white text-university-blue font-medium rounded hover:bg-gray-100 transition-colors">
                Planifier une visite
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusFacilities;
