
import React from "react";
import ProgramContent from "../ProgramContent";
import { generateCommonEconomicsFirstYearCurriculum, generateCommonEconomicsSecondYearCurriculum, generateCommonStandardTexts } from "../utils/programDataUtils";

const EconomieAppliqueeRenderer = () => {
  const firstYear = generateCommonEconomicsFirstYearCurriculum();
  const secondYear = generateCommonEconomicsSecondYearCurriculum();
  const { facultyText, licence1Requirements, licence2Text, licence3Text, ctaTitle } = generateCommonStandardTexts();

  return (
    <ProgramContent
      title="Économie Appliquée"
      subtitle="Licence en Sciences Économiques"
      description="Formation d'excellence pour appliquer les principes économiques à des problèmes concrets"
      imageUrl="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      
      introductionParagraphs={[
        "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. Une licence en économie appliquée prépare les étudiants à une variété de carrières dans le secteur public, le secteur privé ou le monde académique. Les diplômés peuvent travailler dans des postes liés à l'analyse économique, à la politique économique, à la recherche économique, à la finance, au conseil, au commerce international et à de nombreux autres domaines. Elle constitue également une base solide pour des études supérieures en économie ou dans des domaines connexes.",
        "C'est un programme d'études universitaires qui vise à enseigner les principes fondamentaux de l'économie et à montrer comment ces principes peuvent être appliqués dans des contextes du monde réel."
      ]}
      
      skills={[
        "Compréhension des principes économiques.",
        "Analyse quantitative des données économiques.",
        "Compréhension des politiques économiques.",
        "Compréhension des interactions économiques internationales.",
        "Capacité à évaluer et à résoudre des problèmes économiques réels"
      ]}
      
      curriculum={{
        year1: {
          ...firstYear,
          description: "Au cours de la première année, l'objectif est de poser des bases solides en économie et en méthodes d'analyse. Les étudiants acquièrent une compréhension des concepts de base en microéconomie et en macroéconomie, ainsi que des compétences en mathématiques, statistiques et méthodes de recherche. L'introduction à l'économie appliquée les prépare à l'application de ces concepts à des problèmes économiques réels. Ces semestres jettent les bases nécessaires pour la suite du programme, qui inclura des cours plus avancés et des opportunités de spécialisation."
        },
        year2: {
          ...secondYear,
          description: "Au cours de la deuxième année, le programme vise à approfondir les compétences en économie appliquée et permettent aux étudiants de se spécialiser davantage dans des domaines spécifiques de leur choix. Les compétences de recherche sont renforcées, et les étudiants apprennent à concevoir, à mener et à présenter des projets de recherche en économie. Les domaines d'études tels que l'économie de la santé, l'économie de l'environnement et l'économie financière offrent des perspectives pratiques sur les applications de l'économie dans des secteurs spécifiques. Ces semestres préparent également les étudiants à leur future carrière professionnelle ou à des études supérieures en économie ou dans des domaines connexes."
        },
        year3: {
          description: "La dernière année, le programme vise à approfondir davantage les compétences en économie appliquée, à se spécialiser dans des domaines spécifiques de l'économie appliquée, et à préparer les étudiants à leur carrière future. Les séminaires de recherche avancée permettent aux étudiants de développer une expertise en recherche et d'appliquer leurs connaissances à des projets concrets. Les stages en entreprise offrent une expérience pratique, tandis que les cours spécialisés élargissent la compréhension des applications de l'économie appliquée dans des domaines particuliers. En fin de compte, ces semestres préparent les étudiants à une variété de carrières dans le secteur public, le secteur privé, le monde académique ou à des études supérieures en économie ou dans des domaines connexes.",
          teachingHours: 375,
          personalWorkHours: 75,
          courses: [
            { course1: { name: "Economie de la Guinée (Contexte Socio-économique de la Guinée)", credits: 6 }, course2: { name: "Analyse et évaluation des Projets de développement", credits: 6 } },
            { course1: { name: "Econométrie", credits: 6 }, course2: { name: "Economie Publique", credits: 6 } },
            { course1: { name: "Recherche Opérationnelle", credits: 6 }, course2: { name: "Economie de l'entreprise coopérative", credits: 6 } },
            { course1: { name: "Statistique Mathématique", credits: 6 }, course2: { name: "Population, Urbanisation, et Développement ou Economie des ressources naturelles", credits: 6 } },
            { course1: { name: "Economie de l'Environnement", credits: 6 }, course2: { name: "Dynamique économique ou Economie du travail", credits: 6 } }
          ]
        }
      }}
      
      facultyText={facultyText}
      
      internshipText="La formation en économie appliquée est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
      
      seminars={[
        "Discussions et Débats",
        "Travail en Groupe",
        "Analyse Critique",
        "Thèmes Spécifiques",
        "Présentations",
        "Travaux de Recherche"
      ]}
      
      seminarsDescription="Les séminaires sont conçus pour renforcer la compréhension des sujets clés de l'économie internationale, développer des compétences pratiques et encourager la réflexion critique. Ils offrent aux étudiants une opportunité d'interaction plus directe avec le matériel d'apprentissage et de collaborer avec leurs pairs pour résoudre des problèmes du monde réel."
      
      careers={[
        "Banque et Finance",
        "Gouvernement et Politiques Publiques",
        "Entreprise",
        "Organisations Internationales",
        "Enseignement et Recherche",
        "Journalisme Économique"
      ]}
      
      educationDescription="Après l'obtention d'une licence en gestion logistique et transport, vous avez plusieurs options pour poursuivre vos études et approfondir vos compétences dans ce domaine."
      
      educationOptions={[
        "Master en Économie Appliquée",
        "Master en Économie",
        "Master en Finance",
        "Master en Gestion des Affaires (MBA)",
        "Master en Économétrie",
        "Doctorat en Économie",
        "Programmes de Double Diplôme"
      ]}
      
      licence1Requirements={licence1Requirements}
      licence2Text={licence2Text}
      licence3Text={licence3Text}
      
      ctaTitle={ctaTitle}
      ctaDescription="Rejoignez notre programme d'Économie Appliquée et développez les compétences nécessaires pour résoudre des problèmes économiques concrets."
    />
  );
};

export default EconomieAppliqueeRenderer;
