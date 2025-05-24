
import React from "react";
import ProgramContent from "../ProgramContent";
import { generateCommonEconomicsFirstYearCurriculum, generateCommonEconomicsSecondYearCurriculum, generateCommonStandardTexts } from "../utils/programDataUtils";

const CommerceInternationalRenderer = () => {
  const firstYear = generateCommonEconomicsFirstYearCurriculum();
  const secondYear = generateCommonEconomicsSecondYearCurriculum();
  const { facultyText, licence1Requirements, licence2Text, licence3Text, ctaTitle } = generateCommonStandardTexts();

  return (
    <ProgramContent
      title="Commerce International"
      subtitle="Licence en Sciences Économiques"
      description="Formation d'excellence aux techniques du commerce international et aux négociations interculturelles"
      imageUrl="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      
      introductionParagraphs={[
        "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La licence en Commerce International prépare les diplômés à maîtriser les techniques du commerce mondial, les stratégies d'exportation et d'importation, ainsi que la négociation interculturelle.",
        "Ce programme offre aux étudiants une compréhension approfondie des mécanismes du commerce international, des réglementations douanières, des stratégies de développement international et des spécificités culturelles des différents marchés mondiaux."
      ]}
      
      skills={[
        "Maîtrise des techniques de négociation internationale",
        "Compréhension des réglementations douanières et juridiques",
        "Développement de stratégies d'import-export",
        "Gestion des opérations commerciales internationales",
        "Analyse des marchés internationaux",
        "Communication interculturelle",
        "Gestion des risques internationaux",
        "Financement du commerce international"
      ]}
      
      curriculum={{
        year1: {
          ...firstYear,
          description: "Au cours de la première année, l'objectif est de poser des bases solides en commerce international. Les étudiants acquièrent une compréhension des principes fondamentaux du commerce mondial, des techniques douanières, du marketing international et des bases juridiques du commerce international."
        },
        year2: {
          ...secondYear,
          description: "Au cours de la deuxième année, le programme vise à approfondir les compétences en commerce international. Vous développerez des compétences avancées en négociation interculturelle, en financement international, en logistique internationale et en gestion des risques commerciaux."
        },
        year3: {
          description: "La dernière année vous permet de vous spécialiser davantage en commerce international et de préparer votre transition vers le monde professionnel. Vous développerez une expertise en développement de marchés internationaux, en stratégies d'internationalisation et en gestion des partenariats commerciaux internationaux.",
          teachingHours: 380,
          personalWorkHours: 70,
          courses: [
            { course1: { name: "Négociation commerciale internationale", credits: 6 }, course2: { name: "Financement du commerce international", credits: 6 } },
            { course1: { name: "Stratégies d'internationalisation", credits: 6 }, course2: { name: "Gestion des risques commerciaux", credits: 6 } },
            { course1: { name: "Logistique internationale", credits: 6 }, course2: { name: "Droit commercial international", credits: 6 } },
            { course1: { name: "Marketing interculturel", credits: 6 }, course2: { name: "Développement de marchés export", credits: 6 } },
            { course1: { name: "Veille économique internationale", credits: 6 }, course2: { name: "Projet de développement international", credits: 6 } }
          ]
        }
      }}
      
      facultyText={facultyText}
      
      internshipText="La formation en commerce international est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel international, mais également la mise en pratique des techniques commerciales pour développer des marchés à l'international."
      
      seminars={[
        "Négociation interculturelle avancée",
        "Techniques douanières et réglementaires",
        "Développement de partenariats internationaux",
        "Innovation dans le commerce international",
        "E-commerce international",
        "Géopolitique et commerce mondial",
        "Fintech et paiements internationaux"
      ]}
      
      seminarsDescription="Les séminaires spécialisés complètent la formation théorique en offrant aux étudiants une perspective pratique sur les enjeux actuels du commerce international. Ces sessions permettent d'approfondir des sujets spécifiques, d'analyser des cas réels et de développer une compréhension fine des évolutions du commerce mondial."
      
      careers={[
        "Responsable import-export",
        "Directeur commercial international",
        "Agent de transit international",
        "Négociateur commercial international",
        "Consultant en développement international",
        "Chargé de développement export",
        "Responsable de zone internationale"
      ]}
      
      educationDescription="Après l'obtention de la licence en Commerce International, les diplômés peuvent poursuivre leurs études pour se spécialiser davantage et accéder à des postes à plus haute responsabilité dans le commerce international."
      
      educationOptions={[
        "Master en Commerce International",
        "Master en Marketing International",
        "Master en Négociation Internationale",
        "Master en Supply Chain Internationale",
        "MBA International Business",
        "Doctorat en Commerce International"
      ]}
      
      licence1Requirements={licence1Requirements}
      licence2Text={licence2Text}
      licence3Text={licence3Text}
      
      ctaTitle={ctaTitle}
      ctaDescription="Rejoignez notre programme de Commerce International et développez les compétences nécessaires pour réussir dans le commerce mondial."
    />
  );
};

export default CommerceInternationalRenderer;
