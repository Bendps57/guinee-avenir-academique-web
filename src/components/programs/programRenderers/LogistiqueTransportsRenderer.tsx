
import React from "react";
import ProgramContent from "../ProgramContent";
import { generateCommonStandardTexts } from "../utils/programDataUtils";
import { getLogisticsSeminars } from "../utils/seminarUtils";
import { getLogisticsCareers } from "../utils/careerUtils";

const LogistiqueTransportsRenderer = () => {
  const { facultyText, licence1Requirements, licence2Text, licence3Text, ctaTitle } = generateCommonStandardTexts();
  const { seminars, seminarsDescription } = getLogisticsSeminars();
  const careers = getLogisticsCareers();

  return (
    <ProgramContent
      title="Logistique et Transports (Supply Chain)"
      subtitle="Licence en Sciences Économiques"
      description="Formation d'excellence pour maîtriser la gestion des chaînes logistiques et du transport"
      imageUrl="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      
      introductionParagraphs={[
        "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La gestion logistique et le transport jouent un rôle essentiel dans de nombreuses industries, notamment la distribution, la fabrication, le commerce de détail, la santé, et bien d'autres. Les diplômés de ce domaine sont en demande pour assurer le bon déroulement des opérations et garantir la livraison efficace de biens et de services.",
        "Une licence en transport et logistique prépare les étudiants à des carrières dans des domaines tels que la gestion de la chaîne d'approvisionnement, la logistique, la gestion des opérations de transport, la gestion des entrepôts, la gestion des stocks, la planification des transports et bien d'autres. Elle constitue également une base solide pour des études supérieures en logistique ou dans des domaines connexes."
      ]}
      
      skills={[
        "Planification et coordination des opérations logistiques",
        "Gestion de la chaîne d'approvisionnement",
        "Gestion des opérations de transport",
        "Gestion des stocks et de la demande",
        "Utilisation de la technologie de l'information en logistique",
        "Gestion de la qualité et de la performance",
        "Conformité réglementaire en matière de transport",
        "Analyse des coûts et de l'efficacité des opérations logistiques"
      ]}
      
      curriculum={{
        year1: {
          description: "Au cours de la première année, l'objectif est de poser des bases solides en logistique, en gestion des transports et en gestion de la chaîne d'approvisionnement. Les étudiants acquièrent une compréhension des principes fondamentaux, des compétences mathématiques et statistiques, et des bases de la technologie en logistique. Ils commencent également à explorer des aspects liés au commerce international et à la gestion des opérations internationales. Ces semestres jettent les bases nécessaires pour la suite du programme, qui inclura des cours plus avancés, des stages en entreprise et des projets de recherche.",
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
          description: "Au cours de la deuxième année, le programme vise à approfondir les compétences en gestion des transports, en gestion de la chaîne d'approvisionnement et en logistique. Les étudiants abordent des sujets plus avancés, notamment la durabilité, la qualité, l'automatisation, l'analyse de données et la gestion internationale. Les stages en entreprise offrent une expérience pratique dans le domaine, tandis que les projets de recherche développent des compétences de recherche avancée. Ces semestres préparent les étudiants à des carrières dans des domaines tels que la gestion logistique, la planification des transports, la gestion de la chaîne d'approvisionnement, la gestion des stocks et bien d'autres.",
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
          description: "La dernière année est conçue pour approfondir votre expertise dans le domaine de la logistique et du transport, et pour vous préparer à votre carrière professionnelle. La spécialisation vous permet de vous concentrer sur un domaine spécifique de la logistique qui correspond à vos intérêts et à vos objectifs de carrière. Les stages en entreprise vous donnent une expérience pratique et vous aident à établir des contacts professionnels. Les projets de fin d'études démontrent votre capacité à appliquer vos compétences et à résoudre des problèmes logistiques réels. En fin de compte, ces semestres vous préparent à entrer sur le marché du travail en tant que professionnel de la logistique et du transport.",
          teachingHours: 450,
          personalWorkHours: 0,
          courses: [
            { course1: { name: "Logistique générale", credits: 6 }, course2: { name: "Droit des transports", credits: 6 } },
            { course1: { name: "Gestion de chaîne d'approvisionnements", credits: 6 }, course2: { name: "Douane et transit", credits: 6 } },
            { course1: { name: "Gestion d'entrepôts et de plateformes", credits: 6 }, course2: { name: "Transports routiers et ferroviaires de personnes et marchandises", credits: 6 } },
            { course1: { name: "Hygiène, Santé, Sécurité et Environnement", credits: 6 }, course2: { name: "Transports maritime, fluvial et opérations portuaires", credits: 6 } },
            { course1: { name: "Gestion de la Production et de la Qualité", credits: 6 }, course2: { name: "Transports aériens de marchandises, de passagers et opérations aéroportuaires", credits: 6 } }
          ]
        }
      }}
      
      facultyText={facultyText}
      
      internshipText="La formation en gestion transport et logistique est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
      
      seminars={seminars}
      
      seminarsDescription={seminarsDescription}
      
      careers={careers}
      
      educationDescription="Après l'obtention d'une licence en gestion logistique et transport, vous avez plusieurs options pour poursuivre vos études et approfondir vos compétences dans ce domaine."
      
      educationOptions={[
        "Master en Gestion Logistique et Transport",
        "Master en Administration des Affaires (MBA)",
        "Master en Ingénierie des Transports",
        "Master en Gestion de la Chaîne d'Approvisionnement",
        "Doctorat en Logistique et Transport",
        "Certifications Professionnelles : Formation Continue et Cours en Ligne"
      ]}
      
      licence1Requirements={licence1Requirements}
      licence2Text={licence2Text}
      licence3Text={licence3Text}
      
      ctaTitle={ctaTitle}
      ctaDescription="Rejoignez notre programme de Logistique et Transports et développez les compétences nécessaires pour exceller dans la gestion des chaînes d'approvisionnement mondiales."
    />
  );
};

export default LogistiqueTransportsRenderer;
