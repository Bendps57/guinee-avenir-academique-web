import Hero from "@/components/Hero";
import InternationalPartner from "@/components/InternationalPartner";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Globe } from "lucide-react";

const International = () => {
  // Updated international partners
  const partners = [
    {
      name: "HEC Maroc",
      country: "Maroc",
      logo: "https://i.imgur.com/pKAb0uH.png",
      description: "Partenariat stratégique avec l'École des Hautes Études Commerciales du Maroc pour les échanges d'étudiants et la recherche conjointe.",
      website: "https://www.hec.ac.ma/"
    },
    {
      name: "Brest Business School",
      country: "France",
      logo: "https://i.imgur.com/si5BfMS.jpeg",
      description: "Collaboration en management et business avec des programmes d'échange et de double diplôme.",
      website: "https://brest-bs.com/"
    },
    {
      name: "CESTE Université",
      country: "Espagne",
      logo: "https://i.imgur.com/cVqCkeE.jpeg",
      description: "Partenariat pour les programmes de gestion, commerce international et technologies.",
      website: "https://www.ceste.es/"
    }
  ];

  // Mock data for exchange programs
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
      eligibility: "Tous les niveaux d'études."
    }
  ];

  // Mock data for internship opportunities
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Hero 
        title="Dimension Internationale"
        subtitle="Un monde d'opportunités"
        description="Découvrez comment l'IUHEG s'ouvre sur le monde et offre des opportunités internationales à ses étudiants."
        imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-2">
              <Globe className="text-university-blue h-7 w-7 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-university-blue">Nos partenaires internationaux</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'IUHEG a développé un réseau de partenaires académiques à travers le monde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <InternationalPartner 
                key={partner.name}
                name={partner.name}
                country={partner.country}
                logo={partner.logo}
                description={partner.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Global Programs Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Programmes internationaux</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explorez les opportunités internationales offertes aux étudiants de l'IUHEG
            </p>
          </div>

          <Tabs defaultValue="exchanges" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="exchanges" className="text-lg">Échanges</TabsTrigger>
              <TabsTrigger value="internships" className="text-lg">Stages</TabsTrigger>
              <TabsTrigger value="languages" className="text-lg">Langues</TabsTrigger>
            </TabsList>

            <TabsContent value="exchanges">
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
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Étudiants en échange" 
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
            </TabsContent>

            <TabsContent value="internships">
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
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Stage international" 
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
            </TabsContent>

            <TabsContent value="languages">
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
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Centre de langues" 
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* World Map */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Notre présence mondiale</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'IUHEG est connecté à un réseau mondial d'institutions académiques et de partenaires professionnels
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-lg">Carte du monde avec nos partenaires</p>
              {/* In a real implementation, you would include an actual map here */}
            </div>
          </div>
        </div>
      </section>

      {/* International Students */}
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
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Étudiants internationaux" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default International;
