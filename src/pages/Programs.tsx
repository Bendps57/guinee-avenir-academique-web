
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Book, BookOpen, GraduationCap } from "lucide-react";

const Programs = () => {
  // Mock data for programs
  const licensePrograms = [
    {
      id: "licence-gestion",
      title: "Licence en Gestion des Entreprises",
      level: "Licence",
      duration: "3 ans",
      description: "Formation complète en gestion, comptabilité, marketing et ressources humaines pour les futurs managers.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-informatique",
      title: "Licence en Informatique",
      level: "Licence",
      duration: "3 ans",
      description: "Formation en programmation, bases de données, réseaux et systèmes d'information pour les métiers du numérique.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-commerce",
      title: "Licence en Commerce International",
      level: "Licence",
      duration: "3 ans",
      description: "Étude des marchés internationaux, du droit des affaires et des langues étrangères pour les carrières dans le commerce mondial.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-communication",
      title: "Licence en Communication",
      level: "Licence",
      duration: "3 ans",
      description: "Formation aux techniques de communication, marketing digital, relations publiques et médias pour les métiers de la communication.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-droit",
      title: "Licence en Droit",
      level: "Licence",
      duration: "3 ans",
      description: "Étude du droit civil, pénal, des affaires et international pour les carrières juridiques.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    }
  ];

  const masterPrograms = [
    {
      id: "master-finance",
      title: "Master en Finance",
      level: "Master",
      duration: "2 ans",
      description: "Spécialisation en finance d'entreprise, analyse financière et gestion de portefeuille pour futurs experts financiers.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    },
    {
      id: "master-management",
      title: "Master en Management International",
      level: "Master",
      duration: "2 ans",
      description: "Formation avancée en stratégie d'entreprise, management interculturel et commerce international.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    },
    {
      id: "master-informatique",
      title: "Master en Informatique et Systèmes d'Information",
      level: "Master",
      duration: "2 ans",
      description: "Spécialisation en développement de logiciels, intelligence artificielle et gestion de projets informatiques.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    },
    {
      id: "master-marketing",
      title: "Master en Marketing Digital",
      level: "Master",
      duration: "2 ans",
      description: "Formation avancée en stratégies marketing digitales, analyse de données et communication numérique.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    }
  ];

  const certificationPrograms = [
    {
      id: "cert-project-management",
      title: "Certification en Gestion de Projet",
      level: "Certification",
      duration: "3 mois",
      description: "Formation intensive aux méthodologies de gestion de projet, outils et bonnes pratiques.",
      icon: <BookOpen className="h-5 w-5 text-university-blue" />
    },
    {
      id: "cert-data-analysis",
      title: "Certification en Analyse de Données",
      level: "Certification",
      duration: "4 mois",
      description: "Formation pratique aux outils d'analyse de données, statistiques et visualisation.",
      icon: <BookOpen className="h-5 w-5 text-university-blue" />
    },
    {
      id: "cert-digital-marketing",
      title: "Certification en Marketing Digital",
      level: "Certification",
      duration: "3 mois",
      description: "Maîtrise des stratégies de marketing en ligne, SEO, médias sociaux et publicité digitale.",
      icon: <BookOpen className="h-5 w-5 text-university-blue" />
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="Programmes de Formation"
        subtitle="Construisez votre avenir"
        description="Découvrez nos formations d'excellence conçues pour vous préparer aux défis du monde professionnel."
        imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* Programs Tabs */}
      <section className="py-16" id="programmes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Nos programmes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'IUHEG propose une large gamme de formations adaptées à vos objectifs professionnels
            </p>
          </div>

          <Tabs defaultValue="licence" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="licence" id="licence" className="text-lg">Licences</TabsTrigger>
              <TabsTrigger value="master" id="master" className="text-lg">Masters</TabsTrigger>
              <TabsTrigger value="certification" id="certifications" className="text-lg">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="licence">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {licensePrograms.map((program) => (
                  <ProgramCard 
                    key={program.id}
                    id={program.id}
                    title={program.title}
                    level={program.level}
                    duration={program.duration}
                    description={program.description}
                    icon={program.icon}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="master">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {masterPrograms.map((program) => (
                  <ProgramCard 
                    key={program.id}
                    id={program.id}
                    title={program.title}
                    level={program.level}
                    duration={program.duration}
                    description={program.description}
                    icon={program.icon}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certification">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificationPrograms.map((program) => (
                  <ProgramCard 
                    key={program.id}
                    id={program.id}
                    title={program.title}
                    level={program.level}
                    duration={program.duration}
                    description={program.description}
                    icon={program.icon}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Processus d'admission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Suivez ces étapes pour rejoindre notre université
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-university-blue flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-university-blue">Candidature</h3>
              <p className="text-gray-600">
                Remplissez le formulaire d'inscription en ligne et soumettez les documents requis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-university-blue flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-university-blue">Évaluation</h3>
              <p className="text-gray-600">
                Votre dossier sera examiné par notre comité d'admission.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-university-blue flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-university-blue">Entretien</h3>
              <p className="text-gray-600">
                Les candidats sélectionnés seront invités à un entretien avec nos responsables académiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-university-blue flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 text-university-blue">Décision</h3>
              <p className="text-gray-600">
                Vous serez informé de la décision d'admission et des étapes suivantes pour l'inscription.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-university-blue hover:bg-university-navy md:py-4 md:text-lg md:px-10">
              Candidater maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
