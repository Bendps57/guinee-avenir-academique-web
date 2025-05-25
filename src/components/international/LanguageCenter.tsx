
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const LanguageCenter = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold text-university-blue mb-6">Centre de langues</h3>
        <p className="text-gray-700 mb-4">
          L'IUHEG offre des cours de langues étrangères pour tous les niveaux, dispensés par des professeurs natifs ou ayant une parfaite maîtrise de la langue enseignée. Notre centre de langues est équipé des dernières technologies pour faciliter l'apprentissage.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h4 className="text-lg font-semibold text-university-blue mb-4">Langues proposées</h4>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-university-gold mr-2"></div>
              <span>Anglais</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-university-gold mr-2"></div>
              <span>Français</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-university-gold mr-2"></div>
              <span>Espagnol</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-university-gold mr-2"></div>
              <span>Allemand</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-university-gold mr-2"></div>
              <span>Chinois</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-university-gold mr-2"></div>
              <span>Arabe</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-lg font-semibold text-university-blue mb-4">Certifications internationales</h4>
          <p className="text-gray-600 mb-4">
            Notre centre prépare également aux examens de certification reconnus internationalement:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="h-5 w-5 text-university-gold mr-2" />
              <span>TOEFL et IELTS (anglais)</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-university-gold mr-2" />
              <span>DELF et DALF (français)</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-university-gold mr-2" />
              <span>DELE (espagnol)</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-university-gold mr-2" />
              <span>TestDaF (allemand)</span>
            </li>
            <li className="flex items-center">
              <Check className="h-5 w-5 text-university-gold mr-2" />
              <span>HSK (chinois)</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://i.imgur.com/tdFBKmx.jpeg" 
            alt="Centre de langues africain" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="bg-university-blue text-white p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">Clubs de langues et événements culturels</h4>
          <p className="mb-4">
            En complément des cours formels, notre université encourage la pratique des langues dans un cadre plus détendu à travers des clubs de conversation et des événements culturels.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2 mt-0.5">
                ✓
              </div>
              <span>Clubs de conversation hebdomadaires</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2 mt-0.5">
                ✓
              </div>
              <span>Projections de films en version originale</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2 mt-0.5">
                ✓
              </div>
              <span>Fêtes culturelles et semaines thématiques</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mr-2 mt-0.5">
                ✓
              </div>
              <span>Tandems linguistiques avec des étudiants internationaux</span>
            </li>
          </ul>
        </div>
        
        <div className="text-center p-6 bg-gray-100 rounded-lg">
          <p className="font-medium text-gray-700 mb-4">Pour plus d'informations sur nos cours de langues et les certifications</p>
          <Button className="bg-university-blue hover:bg-university-navy">
            Contacter le Centre de Langues
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageCenter;
