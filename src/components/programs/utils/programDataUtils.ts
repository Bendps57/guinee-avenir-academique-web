
import { ProgramCurriculumData } from "../types/programTypes";

export const generateCommonEconomicsFirstYearCurriculum = (): ProgramCurriculumData["year1"] => {
  return {
    description: "Au cours de la première année, l'objectif est de poser des bases solides en économie et en méthodes d'analyse. Les étudiants acquièrent une compréhension des concepts de base en microéconomie et en macroéconomie, ainsi que des compétences en mathématiques, statistiques et méthodes de recherche.",
    teachingHours: 305,
    personalWorkHours: 105,
    courses: [
      { course1: { name: "Economie Générale", credits: 6 }, course2: { name: "Finances Publiques", credits: 6 } },
      { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Méthodes Statistiques", credits: 6 } },
      { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Macroéconomie", credits: 6 } },
      { course1: { name: "Géographie Economique", credits: 6 }, course2: { name: "Droit Civil et administratif", credits: 6 } },
      { course1: { name: "Mathématiques", credits: 6 }, course2: { name: "Histoire des faits et de la pensée économiques", credits: 6 } }
    ]
  };
};

export const generateCommonEconomicsSecondYearCurriculum = (): ProgramCurriculumData["year2"] => {
  return {
    description: "Au cours de la deuxième année, le programme vise à approfondir les compétences en économie appliquée et permettent aux étudiants de se spécialiser davantage dans des domaines spécifiques de leur choix.",
    teachingHours: 345,
    personalWorkHours: 105,
    courses: [
      { course1: { name: "Théorie et Politique Monétaire", credits: 6 }, course2: { name: "Comptabilité Nationale", credits: 6 } },
      { course1: { name: "Informatique et Système d'Information", credits: 6 }, course2: { name: "Sociologie Générale", credits: 6 } },
      { course1: { name: "Programmation Linéaire", credits: 6 }, course2: { name: "Fiscalité générale 1 ou Economie Publique", credits: 6 } },
      { course1: { name: "Comptabilité Analytique d'Exploitation", credits: 6 }, course2: { name: "Eléments d'économie contemporaine ou Environnement économique et marchés financiers", credits: 6 } },
      { course1: { name: "Analyse et Evaluation Economique des Projets", credits: 6 }, course2: { name: "Méthodologie de la Recherche ou Economie du travail", credits: 6 } }
    ]
  };
};

export const generateCommonStandardTexts = () => {
  return {
    facultyText: "Nos enseignants, qu'ils soient africains ou européens, sont sélectionnés parmi les experts les plus qualifiés de leur domaine. Notre programme de formation, bien qu'il vous permette de comprendre en profondeur les aspects théoriques sous-jacents aux techniques de gestion de données, est principalement axé sur la pratique, garantissant ainsi une employabilité accrue.",
    licence1Requirements: [
      "Avoir obtenu le diplôme du baccalauréat.",
      "Avoir une aisance en mathématiques."
    ],
    licence2Text: "Il convient de valider les semestres 1 et 2 de la première année, de posséder des connaissances solides en économie et d'être diplômé d'une école ou d'une université respectant le système LMD.",
    licence3Text: "Il est requis d'être en possession d'un diplôme de niveau Bac+2 en sciences ou d'un équivalent. Il est également nécessaire de valider l'ensemble des crédits de la première et de la deuxième année. En outre, il est impératif d'être issu d'une école ou d'une université respectant le système LMD.",
    ctaTitle: "Prêt à vous lancer dans l'aventure ?"
  };
};
