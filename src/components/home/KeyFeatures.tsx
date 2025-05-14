
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { University, Globe, Book, MessageSquare } from "lucide-react";

const KeyFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Pourquoi choisir l'IUHEG</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez ce qui fait de notre institution un choix privilégié pour votre formation universitaire
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <div className="rounded-full bg-university-blue/10 p-4 mb-4">
                <University className="h-8 w-8 text-university-blue" />
              </div>
              <CardTitle className="text-xl">Excellence académique</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Des programmes rigoureux dispensés par des professeurs de renom international
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <div className="rounded-full bg-university-blue/10 p-4 mb-4">
                <Globe className="h-8 w-8 text-university-blue" />
              </div>
              <CardTitle className="text-xl">Perspective internationale</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Des partenariats avec des universités de renom à travers le monde
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <div className="rounded-full bg-university-blue/10 p-4 mb-4">
                <Book className="h-8 w-8 text-university-blue" />
              </div>
              <CardTitle className="text-xl">Programmes innovants</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Des cursus adaptés aux exigences du marché du travail actuel et futur
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <div className="rounded-full bg-university-blue/10 p-4 mb-4">
                <MessageSquare className="h-8 w-8 text-university-blue" />
              </div>
              <CardTitle className="text-xl">Soutien personnalisé</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Un accompagnement sur mesure pour la réussite de chaque étudiant
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
