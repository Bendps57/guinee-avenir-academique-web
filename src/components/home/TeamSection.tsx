
import { Button } from "@/components/ui/button";
import TeamMember from "@/components/TeamMember";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Makolo Kpoghomou",
      role: "Recteur",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
    },
    {
      name: "Amadou Cissoko",
      role: "Administrateur Général",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
    },
    {
      name: "Yuri Diallo",
      role: "Secrétaire Général",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
    },
    {
      name: "Bachir Balde",
      role: "Directeur IT Multimédia & Innovation",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
    },
    {
      name: "Mamadou Fall",
      role: "Directeur Marketing & Recrutement",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
    },
    {
      name: "Ramatoulaye Diallo",
      role: "Responsable Partenariat",
      imageUrl: "https://i.imgur.com/eIx2JbG.jpeg",
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Notre équipe dirigeante</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des professionnels chevronnés dévoués à l'excellence académique et à votre réussite
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <Link to="/a-propos">Voir toute l'équipe</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
