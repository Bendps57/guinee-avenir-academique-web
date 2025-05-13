
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import TeamMember from "@/components/TeamMember";
import { Book, GraduationCap, Globe, MessageSquare, University } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Mock data for homepage
  const featuredPrograms = [
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
      id: "master-finance",
      title: "Master en Finance",
      level: "Master",
      duration: "2 ans",
      description: "Spécialisation en finance d'entreprise, analyse financière et gestion de portefeuille pour futurs experts financiers.",
      icon: <GraduationCap className="h-5 w-5 text-university-blue" />
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Mamadou Diallo",
      role: "Président",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Prof. Fatoumata Barry",
      role: "Directrice Académique",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Dr. Ibrahim Touré",
      role: "Doyen de la Recherche",
      imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-20">
        <Hero 
          title="Façonnez votre avenir à l'IUHEG"
          subtitle="Excellence académique"
          description="L'Institut Universitaire des Hautes Études de Guinée forme les leaders de demain dans un environnement stimulant et international."
          imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          cta={{
            primary: { text: "Nos formations", link: "/formations" },
            secondary: { text: "En savoir plus", link: "/a-propos" }
          }}
        />
      </div>
      
      {/* Key Features */}
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
      
      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Nos formations phares</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez nos programmes d'excellence conçus pour répondre aux besoins du marché
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
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
          
          <div className="text-center mt-12">
            <Button asChild className="bg-university-blue hover:bg-university-navy">
              <Link to="/formations">Voir toutes nos formations</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* University Info */}
      <section className="py-16 bg-university-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">L'IUHEG en chiffres</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-university-gold">1000+</p>
                  <p className="mt-2">Étudiants</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-university-gold">50+</p>
                  <p className="mt-2">Professeurs</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-university-gold">15+</p>
                  <p className="mt-2">Programmes</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-university-gold">10+</p>
                  <p className="mt-2">Partenaires internationaux</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                  <Link to="/a-propos">Découvrir notre histoire</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="IUHEG Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-university-gold rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-university-blue font-bold text-center">
                  <span className="block text-2xl">10</span>
                  <span className="text-sm">Années d'excellence</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Notre équipe dirigeante</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les experts qui guident notre institution vers l'excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember 
                key={member.name}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-university-blue hover:bg-university-navy">
              <Link to="/a-propos#equipe">Voir toute l'équipe</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-university-blue text-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à rejoindre l'IUHEG ?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Entamez votre parcours académique dans notre université et découvrez un monde d'opportunités pour votre avenir professionnel.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-university-gold hover:bg-amber-500 text-university-blue font-medium">
                    Candidater maintenant
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                    Nous contacter
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Students at IUHEG"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
