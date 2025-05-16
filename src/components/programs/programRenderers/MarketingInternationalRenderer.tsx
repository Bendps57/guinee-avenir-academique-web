
import React from "react";
import ProgramContent from "../ProgramContent";
import { generateCommonStandardTexts } from "../utils/programDataUtils";
import { getMarketingSeminars } from "../utils/seminarUtils";

const MarketingInternationalRenderer = () => {
  const { facultyText, licence1Requirements, licence2Text, licence3Text, ctaTitle } = generateCommonStandardTexts();
  const { seminars, seminarsDescription } = getMarketingSeminars();

  return (
    <ProgramContent
      title="Marketing et Commerce International"
      subtitle="Licence en Sciences Économiques"
      description="Formation d'excellence pour maîtriser les principes du marketing international et du commerce mondial"
      imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      
      introductionParagraphs={[
        "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La licence en marketing et commerce international prépare les diplômés à travailler dans des entreprises multinationales, des agences de marketing, des organismes gouvernementaux liés au commerce et à occuper divers postes liés au commerce international. La maîtrise des langues étrangères et la compréhension des marchés mondiaux sont des atouts importants dans ce domaine.",
        "Ce programme offre aux étudiants une solide compréhension des principes du marketing, des techniques de vente, des stratégies d'expansion internationale et des compétences nécessaires pour réussir dans un environnement commercial mondial. Il prépare les étudiants à évoluer dans un environnement commercial mondial en constante évolution, où l'expertise en marketing et commerce international est de plus en plus précieuse."
      ]}
      
      skills={[
        "Compréhension des principes du marketing et de la vente.",
        "Connaissance des concepts clés du commerce international.",
        "Capacité à élaborer des stratégies de marketing pour des marchés internationaux.",
        "Compétences en gestion de la chaîne d'approvisionnement internationale.",
        "Compréhension des enjeux économiques mondiaux.",
        "Maîtrise des langues étrangères pour la communication internationale."
      ]}
      
      curriculum={{
        year1: {
          description: "Au cours de la première année, l'objectif est de poser des bases solides en marketing et commerce international. Les étudiants acquièrent une compréhension des principes fondamentaux du marketing, de la recherche de marché, de la gestion de produits et des aspects juridiques du commerce international. Les compétences en communication marketing et en gestion de la chaîne d'approvisionnement sont également développées. Ces semestres préparent les étudiants à des cours plus avancés et à des stages en entreprise dans les semestres suivants, où ils appliqueront leurs connaissances dans un contexte professionnel.",
          teachingHours: 375,
          personalWorkHours: 60,
          courses: [
            { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Macroéconomie", credits: 6 } },
            { course1: { name: "Mathématiques", credits: 6 }, course2: { name: "Statistiques descriptive", credits: 6 } },
            { course1: { name: "Contexte éco & social", credits: 6 }, course2: { name: "Hist. Faits éco. & soc", credits: 6 } },
            { course1: { name: "Economie générale", credits: 6 }, course2: { name: "Comptabilité des Sociétés Commerciales", credits: 6 } },
            { course1: { name: "Comptabilité générale", credits: 6 }, course2: { name: "Droit civil et administratif", credits: 6 } }
          ]
        },
        year2: {
          description: "Au cours de la deuxième année, le programme vise à approfondir la compréhension des étudiants des aspects avancés du marketing international. Les compétences en marketing international, en négociation internationale, en gestion de projets internationaux et en management interculturel sont renforcées. Les stages en entreprise à l'étranger offrent une expérience pratique précieuse, tandis que les projets de marketing international vous permettent d'appliquer vos compétences dans des contextes du monde réel. Ces semestres vous préparent à des rôles plus spécialisés dans le marketing et le commerce international, ainsi qu'à des carrières dans des entreprises multinationales, des agences de marketing international, le commerce international et d'autres domaines liés au commerce mondial.",
          teachingHours: 420,
          personalWorkHours: 30,
          courses: [
            { course1: { name: "Recherche opérationnelle", credits: 6 }, course2: { name: "Entrepreneurship", credits: 6 } },
            { course1: { name: "Comptabilité analytique d'exploitation", credits: 6 }, course2: { name: "Gestion et analyse financière", credits: 6 } },
            { course1: { name: "Droit des affaires", credits: 6 }, course2: { name: "Economie et Commerce International", credits: 6 } },
            { course1: { name: "Gestion des opérations", credits: 6 }, course2: { name: "Introduction à la gestion des ressources humaines", credits: 6 } },
            { course1: { name: "Marketing", credits: 6 }, course2: { name: "Management", credits: 6 } }
          ]
        },
        year3: {
          description: "La dernière année vous donnent l'occasion de vous spécialiser davantage dans un domaine particulier du marketing international et du commerce international. Le stage en entreprise vous permet de mettre en pratique ce que vous avez appris, d'acquérir de l'expérience professionnelle et de développer un réseau professionnel. Le projet de fin d'études démontre votre maîtrise des concepts et des compétences du marketing international. En fin de compte, ces semestres vous préparent à entrer sur le marché du travail en tant que professionnel du marketing international, du commerce international, de la gestion de produits à l'échelle mondiale ou dans d'autres domaines liés au commerce international. Vous pourriez occuper des postes de spécialiste du marketing international, de gestionnaire de projet, de consultant en commerce international, de responsable de la chaîne d'approvisionnement internationale, et bien plus encore.",
          teachingHours: 435,
          personalWorkHours: 15,
          courses: [
            { course1: { name: "Stratégie de gestion", credits: 6 }, course2: { name: "Publicité ou circuit de Distribution", credits: 6 } },
            { course1: { name: "Gestion PME/PMI", credits: 6 }, course2: { name: "Promotion des ventes ou gestion des ventes", credits: 6 } },
            { course1: { name: "Méthode quantitatives en Marketing", credits: 6 }, course2: { name: "Séminaire en marketing ou comportement organisationnel", credits: 6 } },
            { course1: { name: "Marketing international", credits: 6 }, course2: { name: "Recherche en Marketing", credits: 6 } },
            { course1: { name: "Marketing de service", credits: 6 }, course2: { name: "Stratégie de Marketing", credits: 6 } }
          ]
        }
      }}
      
      facultyText={facultyText}
      
      internshipText="La formation en gestion transport et logistique est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
      
      seminars={seminars}
      
      seminarsDescription={seminarsDescription}
      
      careers={[
        "Responsable Marketing International",
        "Responsable des Ventes Internationales",
        "Gestionnaire de la Chaîne d'Approvisionnement Internationale",
        "Analyste en Commerce International",
        "Consultant en Marketing International",
        "Gestionnaire de Produit International"
      ]}
      
      educationDescription="Après avoir obtenu une licence en marketing et commerce international, vous avez plusieurs options pour la poursuite de vos études, en fonction de vos objectifs de carrière et de vos intérêts."
      
      educationOptions={[
        "Master en Marketing International",
        "Master en Commerce International",
        "Master en Gestion",
        "Master en Administration des Affaires (MBA)",
        "Master en Marketing Digital",
        "Ph.D. en Marketing ou Commerce International",
        "Certifications Professionnelles"
      ]}
      
      licence1Requirements={licence1Requirements}
      licence2Text={licence2Text}
      licence3Text={licence3Text}
      
      ctaTitle={ctaTitle}
      ctaDescription="Rejoignez notre programme de Marketing et Commerce International et développez les compétences nécessaires pour réussir dans le monde des affaires globalisé."
    />
  );
};

export default MarketingInternationalRenderer;
