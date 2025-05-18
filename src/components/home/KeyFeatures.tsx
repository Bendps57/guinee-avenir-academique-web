
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { University, Globe, Book, MessageSquare, GraduationCap, Award } from "lucide-react";

const KeyFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Pourquoi choisir l'IUHEG</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une institution universitaire privée d'excellence qui forme les leaders de demain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <div className="rounded-full bg-university-blue/10 p-4 mb-4">
                <Award className="h-8 w-8 text-university-blue" />
              </div>
              <CardTitle className="text-xl">Diplômes reconnus</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Des diplômes reconnus au niveau international et répondant aux normes du système LMD
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
                <GraduationCap className="h-8 w-8 text-university-blue" />
              </div>
              <CardTitle className="text-xl">Corps professoral qualifié</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Des enseignants de haut niveau avec une riche expérience académique et professionnelle
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-col items-center text-center">
              <div className="rounded-full bg-university-blue/10 p-4 mb-4">
                <MessageSquare className="h-8 w-8 text-university-blue" />
              </div>
              <CardTitle className="text-xl">Accompagnement personnalisé</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Un suivi individuel pour favoriser la réussite académique et l'insertion professionnelle
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
