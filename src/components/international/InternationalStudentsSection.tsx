
import { Button } from "@/components/ui/button";

const InternationalStudentsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-university-blue mb-6">Étudiants internationaux</h2>
            <p className="text-gray-700 mb-4">
              L'IUHEG accueille chaque année des étudiants de toutes nationalités. Notre équipe dédiée aux relations internationales offre un soutien complet pour faciliter l'intégration et assurer une expérience enrichissante.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mt-0.5 mr-2">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Assistance administrative</h4>
                  <p className="text-gray-600 text-sm">Aide pour les démarches de visa, l'inscription et les formalités administratives.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mt-0.5 mr-2">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Programme d'accueil</h4>
                  <p className="text-gray-600 text-sm">Orientation, visite du campus et de la ville, activités d'intégration.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mt-0.5 mr-2">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Aide au logement</h4>
                  <p className="text-gray-600 text-sm">Services pour trouver un logement adapté à vos besoins et votre budget.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs mt-0.5 mr-2">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Soutien linguistique et culturel</h4>
                  <p className="text-gray-600 text-sm">Cours de français pour débutants et activités pour découvrir la culture guinéenne.</p>
                </div>
              </div>
            </div>
            <Button className="bg-university-blue hover:bg-university-navy">
              Guide pour étudiants internationaux
            </Button>
          </div>
          <div>
            <img 
              src="https://i.imgur.com/HcOo4Vv.jpeg" 
              alt="Étudiants internationaux africains" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalStudentsSection;
