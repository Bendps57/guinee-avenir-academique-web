
import TeamMember from "@/components/TeamMember";

const TeamSection = () => {
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

  return (
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
  );
};

export default TeamSection;
