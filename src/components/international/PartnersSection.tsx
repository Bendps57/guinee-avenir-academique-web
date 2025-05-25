
import InternationalPartner from "@/components/InternationalPartner";
import { Globe } from "lucide-react";

const PartnersSection = () => {
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

  return (
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
  );
};

export default PartnersSection;
