
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Book, BookOpen, GraduationCap, University } from "lucide-react";

const Programs = () => {
  // Données réelles des programmes basées sur www.iuheg.education
  const licensePrograms = [
    {
      id: "licence-gestion",
      title: "Gestion des Entreprises",
      level: "Licence",
      duration: "3 ans",
      description: "Formation complète en gestion, comptabilité, marketing et ressources humaines. Prépare à des postes de responsabilité dans tous types d'organisations.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-eco-gestion",
      title: "Économie et Gestion",
      level: "Licence",
      duration: "3 ans",
      description: "Double compétence en économie et gestion permettant d'appréhender les mécanismes économiques et les stratégies des entreprises.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-marketing",
      title: "Marketing et Communication",
      level: "Licence",
      duration: "3 ans",
      description: "Formation aux techniques modernes de marketing, de communication et de développement commercial dans un environnement digitalisé.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-socio",
      title: "Sociologie",
      level: "Licence",
      duration: "3 ans",
      description: "Étude des faits sociaux, de la structure sociale et des dynamiques relationnelles pour comprendre les comportements collectifs.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-banque",
      title: "Banque, Assurance et Finance",
      level: "Licence",
      duration: "3 ans",
      description: "Formation spécialisée dans les métiers de la finance, de la banque et de l'assurance avec maîtrise des outils d'analyse financière.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    },
    {
      id: "licence-gestion-projet",
      title: "Gestion de Projets",
      level: "Licence",
      duration: "3 ans",
      description: "Formation aux méthodologies de gestion de projets, aux outils de pilotage et au management d'équipes pluridisciplinaires.",
      icon: <Book className="h-5 w-5 text-university-blue" />
    }
  ];

  const masterPrograms = [
    {
      id: "master-management",
      title: "Management des Organisations",
      level: "Master",
      duration: "2 ans",
      description: "Formation avancée en stratégie d'entreprise, leadership et prise de décision pour les futurs dirigeants et cadres supérieurs.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    },
    {
      id: "master-finance",
      title: "Finance et Comptabilité",
      level: "Master",
      duration: "2 ans",
      description: "Maîtrise des outils d'analyse financière, de la gestion comptable avancée et des stratégies d'investissement.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    },
    {
      id: "master-marketing",
      title: "Marketing et Communication Digitale",
      level: "Master",
      duration: "2 ans",
      description: "Formation aux stratégies marketing avancées, à la communication multicanale et aux techniques de marketing digital.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    },
    {
      id: "master-economie",
      title: "Économie Appliquée",
      level: "Master",
      duration: "2 ans",
      description: "Analyse économique approfondie, modélisation économétrique et compréhension des enjeux macroéconomiques actuels.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    },
    {
      id: "master-droit",
      title: "Droit des Affaires",
      level: "Master",
      duration: "2 ans",
      description: "Formation approfondie en droit commercial, droit des sociétés et réglementation des affaires internationales.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    }
  ];

  const certificationPrograms = [
    {
      id: "cert-management",
      title: "Management et Leadership",
      level: "Certification",
      duration: "6 mois",
      description: "Développement des compétences de leadership, gestion d'équipe et conduite du changement pour cadres et dirigeants.",
      icon: <BookOpen className="h-5 w-5 text-university-blue" />
    },
    {
      id: "cert-marketing",
      title: "Marketing Digital",
      level: "Certification",
      duration: "4 mois",
      description: "Formation aux outils et stratégies de marketing numérique, réseaux sociaux et référencement.",
      icon: <BookOpen className="h-5 w-5 text-university-blue" />
    },
    {
      id: "cert-gestion-projet",
      title: "Gestion de Projets",
      level: "Certification",
      duration: "3 mois",
      description: "Méthodologies de gestion de projet (PRINCE2, PMI), outils de planification et suivi de projet.",
      icon: <BookOpen className="h-5 w-5 text-university-blue" />
    },
    {
      id: "cert-finance",
      title: "Analyse Financière",
      level: "Certification",
      duration: "4 mois",
      description: "Techniques d'analyse financière, évaluation d'entreprise et gestion de portefeuille d'investissement.",
      icon: <BookOpen className="h-5 w-5 text-university-blue" />
    }
  ];

  const doctoratPrograms = [
    {
      id: "doctorat-gestion",
      title: "Sciences de Gestion",
      level: "Doctorat",
      duration: "3 ans",
      description: "Programme doctoral de recherche en management, stratégie d'entreprise et théories des organisations.",
      icon: <University className="h-5 w-5 text-university-blue" />
    },
    {
      id: "doctorat-economie",
      title: "Sciences Économiques",
      level: "Doctorat",
      duration: "3 ans",
      description: "Recherche avancée en économie théorique et appliquée, modélisation économétrique et analyse de politiques.",
      icon: <University className="h-5 w-5 text-university-blue" />
    },
    {
      id: "doctorat-socio",
      title: "Sociologie",
      level: "Doctorat",
      duration: "3 ans",
      description: "Recherche approfondie sur les dynamiques sociales, l'analyse des comportements collectifs et les transformations sociétales.",
      icon: <University className="h-5 w-5 text-university-blue" />
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="Programmes de Formation"
        subtitle="Excellence académique"
        description="L'IUHEG propose des formations d'excellence conçues pour vous préparer aux défis du monde professionnel actuel et futur."
        imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* Programs Tabs */}
      <section className="py-16" id="programmes">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Nos programmes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'IUHEG propose une large gamme de formations adaptées à vos ambitions professionnelles, de la licence au doctorat
            </p>
          </div>

          <Tabs defaultValue="licence" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="licence" id="licence" className="text-lg">Licences</TabsTrigger>
              <TabsTrigger value="master" id="master" className="text-lg">Masters</TabsTrigger>
              <TabsTrigger value="doctorat" id="doctorat" className="text-lg">Doctorats</TabsTrigger>
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

            <TabsContent value="doctorat">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctoratPrograms.map((program) => (
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
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-university-blue hover:bg-university-navy md:py-4 md:text-lg md:px-10">
              Candidater maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
