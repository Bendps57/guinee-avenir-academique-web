
import Hero from "@/components/Hero";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TeamMember from "@/components/TeamMember";

const About = () => {
  // Updated team members
  const teamMembers = [
    {
      name: "Makolo Kpoghomou",
      role: "Recteur",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
      bio: "M. Kpoghomou dirige l'institution avec une vision stratégique et un engagement pour l'excellence académique."
    },
    {
      name: "Amadou Cissoko",
      role: "Administrateur Général",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
      bio: "M. Cissoko supervise l'administration générale et les opérations de l'université."
    },
    {
      name: "Yuri Diallo",
      role: "Secrétaire Général",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
      bio: "M. Diallo coordonne les activités administratives et assure la liaison entre les différents services."
    },
    {
      name: "Bachir Balde",
      role: "Directeur IT Multimédia & Innovation",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
      bio: "M. Balde dirige les initiatives technologiques et d'innovation de l'université."
    },
    {
      name: "Mamadou Fall",
      role: "Directeur Marketing & Recrutement",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
      bio: "M. Fall développe les stratégies de marketing et supervise le recrutement des étudiants."
    },
    {
      name: "Ramatoulaye Diallo",
      role: "Responsable Partenariat",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
      bio: "Mme. Diallo développe et maintient les partenariats stratégiques de l'IUHEG."
    },
  ];

  // Campus facilities
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="À propos de l'IUHEG"
        subtitle="Notre histoire et notre vision"
        description="Découvrez qui nous sommes et ce qui nous motive à façonner l'avenir de l'éducation en Guinée."
        imageUrl="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* About Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="histoire" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="histoire" className="text-lg">Histoire</TabsTrigger>
              <TabsTrigger value="vision" className="text-lg">Vision</TabsTrigger>
              <TabsTrigger value="valeurs" className="text-lg">Valeurs</TabsTrigger>
            </TabsList>

            <TabsContent value="histoire">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-university-blue mb-6">Notre histoire</h3>
                  <p className="text-gray-700 mb-4">
                    Fondé en 2010, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) est né de la volonté de créer un établissement d'enseignement supérieur d'excellence en Guinée, répondant aux standards internationaux.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Nos débuts modestes avec trois programmes et moins de 100 étudiants ont évolué pour devenir l'une des institutions académiques les plus respectées de la région. Au fil des années, nous avons développé notre offre de formation, élargi nos infrastructures et renforcé nos partenariats internationaux.
                  </p>
                  <p className="text-gray-700">
                    Aujourd'hui, l'IUHEG est fier d'accueillir plus de 1000 étudiants dans divers programmes, de la licence au doctorat, et de compter parmi les acteurs majeurs de l'enseignement supérieur en Afrique de l'Ouest.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://i.imgur.com/zXdwdhF.jpeg" 
                    alt="Histoire de l'IUHEG" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute -bottom-5 -left-5 bg-university-gold p-4 rounded shadow-lg">
                    <p className="text-university-blue font-bold">Depuis 2010</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vision">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img 
                    src="https://i.imgur.com/7WKv5Rq.jpeg" 
                    alt="Vision de l'IUHEG" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-university-blue mb-6">Notre vision</h3>
                  <p className="text-gray-700 mb-4">
                    L'IUHEG aspire à devenir une référence en matière d'éducation supérieure en Afrique, reconnue internationalement pour l'excellence de ses programmes, la qualité de sa recherche et l'impact de ses diplômés sur la société.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Nous envisageons un avenir où nos étudiants et nos chercheurs contribuent significativement au développement économique, social et culturel de la Guinée et du continent africain, tout en s'intégrant dans un monde globalisé.
                  </p>
                  <p className="text-gray-700">
                    Notre ambition est de former des leaders visionnaires, éthiques et compétents, capables de relever les défis contemporains et de façonner un avenir meilleur pour tous.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="valeurs">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-university-blue mb-6 text-center">Nos valeurs fondamentales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-university-blue/10 flex items-center justify-center mb-4">
                        <span className="text-university-blue font-bold text-xl">1</span>
                      </div>
                      <CardTitle className="text-xl">Excellence</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-600">
                      Nous visons l'excellence dans tous les aspects de notre travail, de l'enseignement à la recherche en passant par l'administration.
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-university-blue/10 flex items-center justify-center mb-4">
                        <span className="text-university-blue font-bold text-xl">2</span>
                      </div>
                      <CardTitle className="text-xl">Intégrité</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-600">
                      Nous agissons avec honnêteté, transparence et responsabilité dans toutes nos interactions et décisions.
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-university-blue/10 flex items-center justify-center mb-4">
                        <span className="text-university-blue font-bold text-xl">3</span>
                      </div>
                      <CardTitle className="text-xl">Innovation</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-600">
                      Nous encourageons la créativité, l'adaptabilité et l'esprit d'initiative pour répondre aux défis actuels et futurs.
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-university-blue/10 flex items-center justify-center mb-4">
                        <span className="text-university-blue font-bold text-xl">4</span>
                      </div>
                      <CardTitle className="text-xl">Inclusion</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-600">
                      Nous valorisons la diversité et créons un environnement où chacun se sent respecté et peut s'épanouir.
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-university-blue/10 flex items-center justify-center mb-4">
                        <span className="text-university-blue font-bold text-xl">5</span>
                      </div>
                      <CardTitle className="text-xl">Engagement social</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-600">
                      Nous sommes déterminés à avoir un impact positif sur notre communauté et sur la société dans son ensemble.
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="text-center pb-2">
                      <div className="mx-auto w-12 h-12 rounded-full bg-university-blue/10 flex items-center justify-center mb-4">
                        <span className="text-university-blue font-bold text-xl">6</span>
                      </div>
                      <CardTitle className="text-xl">Collaboration</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-600">
                      Nous favorisons les partenariats et le travail d'équipe pour atteindre des objectifs communs.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50" id="equipe">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Notre équipe dirigeante</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les experts qui guident notre institution vers l'excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember 
                key={member.name}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
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

      {/* Student Life */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Vie étudiante</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'expérience à l'IUHEG va bien au-delà des salles de classe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-university-blue mb-4">Une communauté dynamique</h3>
              <p className="text-gray-700 mb-4">
                À l'IUHEG, nous croyons que l'apprentissage ne se limite pas aux cours et aux examens. Notre campus vibrant offre une multitude d'opportunités pour développer vos talents, poursuivre vos passions et créer des liens durables.
              </p>
              <p className="text-gray-700 mb-4">
                Des clubs et associations aux événements culturels, des compétitions sportives aux conférences et ateliers, il y a toujours quelque chose qui se passe sur notre campus.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs">
                    ✓
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Plus de 20 clubs et associations étudiantes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs">
                    ✓
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Activités sportives et culturelles régulières</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs">
                    ✓
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Service de soutien et d'orientation pour les étudiants</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs">
                    ✓
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Événements et conférences avec des intervenants de renom</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://i.imgur.com/Xg9XCAv.jpeg" 
                alt="Vie étudiante à l'IUHEG" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://i.imgur.com/W5JkuQI.jpeg" 
                alt="Vie étudiante à l'IUHEG" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://i.imgur.com/VfhpUkC.jpeg" 
                alt="Vie étudiante à l'IUHEG" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://i.imgur.com/tdFBKmx.jpeg" 
                alt="Vie étudiante à l'IUHEG" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
