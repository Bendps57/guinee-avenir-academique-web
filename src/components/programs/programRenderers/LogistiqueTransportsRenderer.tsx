
import React from "react";
import ProgramContent from "../ProgramContent";
import { generateCommonStandardTexts } from "../utils/programDataUtils";

const LogistiqueTransportsRenderer = () => {
  const { facultyText, licence1Requirements, licence2Text, licence3Text, ctaTitle } = generateCommonStandardTexts();

  return (
    <ProgramContent
      title="Logistique et Transport (Supply Chain)"
      subtitle="Licence en Sciences Économiques"
      description="Formation d'excellence pour maîtriser les principes de la gestion logistique et des transports à l'échelle mondiale"
      imageUrl="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      
      introductionParagraphs={[
        "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La licence en Logistique et Transport prépare les diplômés à exceller dans la gestion des chaînes d'approvisionnement, l'optimisation des réseaux de transport et la planification logistique.",
        "Ce programme offre aux étudiants une solide compréhension des principes fondamentaux de la logistique, des techniques de gestion des transports, des stratégies d'optimisation de la chaîne d'approvisionnement et des compétences nécessaires pour réussir dans un environnement mondial complexe. Il prépare les étudiants à évoluer dans un secteur en constante évolution où l'expertise en logistique et transport est de plus en plus recherchée."
      ]}
      
      skills={[
        "Maîtrise des principes de gestion de la chaîne d'approvisionnement",
        "Compétences en planification et coordination logistique",
        "Connaissance des réglementations nationales et internationales du transport",
        "Capacité à optimiser les réseaux de distribution",
        "Aptitude à gérer des entrepôts et des flottes de véhicules",
        "Compréhension des technologies de suivi et de traçabilité",
        "Compétences en analyse des données logistiques et prise de décision"
      ]}
      
      curriculum={{
        year1: {
          description: "La première année pose les bases solides en logistique et transport. Les étudiants acquièrent une compréhension des principes fondamentaux de la chaîne d'approvisionnement, du transport multimodal, de la gestion des stocks et des aspects juridiques du transport de marchandises. Les compétences en planification logistique et en analyse des données sont également développées. Ces semestres préparent les étudiants à des cours plus avancés et à des stages en entreprise dans les années suivantes, où ils appliqueront leurs connaissances dans un contexte professionnel réel.",
          teachingHours: 385,
          personalWorkHours: 50,
          courses: [
            { course1: { name: "Introduction à la logistique", credits: 6 }, course2: { name: "Principes du transport", credits: 6 } },
            { course1: { name: "Mathématiques appliquées", credits: 6 }, course2: { name: "Statistiques pour la logistique", credits: 6 } },
            { course1: { name: "Économie des transports", credits: 6 }, course2: { name: "Droit du transport", credits: 6 } },
            { course1: { name: "Gestion des stocks", credits: 6 }, course2: { name: "Informatique logistique", credits: 6 } },
            { course1: { name: "Anglais des affaires", credits: 6 }, course2: { name: "Management des organisations", credits: 6 } }
          ]
        },
        year2: {
          description: "La deuxième année approfondit la compréhension des étudiants des aspects avancés de la logistique et du transport. Les compétences en optimisation des réseaux logistiques, en gestion des entrepôts, en transport international et en management de la qualité sont renforcées. Les stages en entreprise offrent une expérience pratique précieuse, tandis que les projets d'optimisation logistique permettent d'appliquer les compétences dans des contextes réels. Ces semestres préparent les étudiants à des rôles plus spécialisés dans la logistique et le transport, ainsi qu'à des carrières dans des entreprises de transport, des prestataires logistiques et des départements supply chain d'entreprises industrielles ou commerciales.",
          teachingHours: 410,
          personalWorkHours: 40,
          courses: [
            { course1: { name: "Gestion des entrepôts", credits: 6 }, course2: { name: "Transport international", credits: 6 } },
            { course1: { name: "Supply Chain Management", credits: 6 }, course2: { name: "Douane et commerce international", credits: 6 } },
            { course1: { name: "Management de la qualité", credits: 6 }, course2: { name: "Système d'information logistique", credits: 6 } },
            { course1: { name: "Gestion de projet logistique", credits: 6 }, course2: { name: "Achats et approvisionnements", credits: 6 } },
            { course1: { name: "Marketing des services logistiques", credits: 6 }, course2: { name: "Logistique durable", credits: 6 } }
          ]
        },
        year3: {
          description: "La dernière année permet aux étudiants de se spécialiser davantage dans un domaine particulier de la logistique et du transport. Le stage en entreprise permet de mettre en pratique les connaissances acquises, d'acquérir de l'expérience professionnelle et de développer un réseau professionnel. Le projet de fin d'études démontre la maîtrise des concepts et des compétences en logistique et transport. Ces semestres préparent les étudiants à entrer sur le marché du travail en tant que professionnels de la logistique, du transport, de la gestion de la chaîne d'approvisionnement ou dans d'autres domaines connexes. Les diplômés pourront occuper des postes de responsable logistique, de coordinateur de transport, de gestionnaire de flotte, d'analyste de la chaîne d'approvisionnement, et bien plus encore.",
          teachingHours: 425,
          personalWorkHours: 25,
          courses: [
            { course1: { name: "Stratégie logistique", credits: 6 }, course2: { name: "Management des opérations", credits: 6 } },
            { course1: { name: "Optimisation des réseaux de distribution", credits: 6 }, course2: { name: "Gestion des risques logistiques", credits: 6 } },
            { course1: { name: "Logistique internationale", credits: 6 }, course2: { name: "Transport multimodal avancé", credits: 6 } },
            { course1: { name: "Digitalisation de la chaîne logistique", credits: 6 }, course2: { name: "Lean management en logistique", credits: 6 } },
            { course1: { name: "Performance logistique", credits: 6 }, course2: { name: "Projet professionnel", credits: 6 } }
          ]
        }
      }}
      
      facultyText={facultyText}
      
      internshipText="La formation en logistique et transport est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions logistiques pour résoudre des problématiques spécifiques de l'entreprise."
      
      seminars={[
        "Optimisation des chaînes d'approvisionnement",
        "Nouvelles technologies en logistique",
        "Logistique urbaine et derniers kilomètres",
        "Transport international et intermodalité",
        "Green logistics et développement durable",
        "Gestion des entrepôts et plateformes logistiques",
        "Blockchain et traçabilité dans la supply chain",
        "Risk management en logistique"
      ]}
      
      seminarsDescription="Les séminaires sont conçus pour être interactifs et pratiques, avec des discussions animées, des études de cas concrets et des projets collaboratifs. Ils préparent les étudiants à relever les défis spécifiques du secteur de la logistique et des transports, tout en les tenant informés des dernières innovations et tendances du marché. Ces sessions permettent également aux étudiants de développer leur réseau professionnel et d'acquérir une expérience pratique précieuse."
      
      careers={[
        "Responsable logistique",
        "Coordinateur transport",
        "Supply chain manager",
        "Gestionnaire d'entrepôt",
        "Analyste logistique",
        "Consultant en supply chain",
        "Responsable des approvisionnements",
        "Planificateur de flux logistiques"
      ]}
      
      educationDescription="Après l'obtention de la licence en Logistique et Transport, plusieurs options s'offrent aux diplômés pour poursuivre leurs études et se spécialiser davantage selon leurs ambitions professionnelles."
      
      educationOptions={[
        "Master en Supply Chain Management",
        "Master en Logistique Internationale",
        "Master en Transport et Mobilité",
        "Master en Management des Opérations",
        "MBA spécialisé en Logistique",
        "Mastère spécialisé en Achats Internationaux",
        "Doctorat en Logistique et Gestion des Opérations"
      ]}
      
      licence1Requirements={licence1Requirements}
      licence2Text={licence2Text}
      licence3Text={licence3Text}
      
      ctaTitle={ctaTitle}
      ctaDescription="Rejoignez notre programme de Logistique et Transport et développez les compétences essentielles pour exceller dans la gestion moderne des chaînes d'approvisionnement."
    />
  );
};

export default LogistiqueTransportsRenderer;
