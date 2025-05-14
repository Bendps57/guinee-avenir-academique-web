
import { Button } from "@/components/ui/button";
import TeamMember from "@/components/TeamMember";
import { Link } from "react-router-dom";

const TeamSection = () => {
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
  );
};

export default TeamSection;
