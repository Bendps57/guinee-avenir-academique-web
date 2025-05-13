
import React from "react";

export interface ProgramType {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  iconName?: string;
}

export const licensePrograms: ProgramType[] = [
  {
    id: "licence-gestion",
    title: "Gestion des Entreprises",
    level: "Licence",
    duration: "3 ans",
    description: "Formation complète en gestion, comptabilité, marketing et ressources humaines. Prépare à des postes de responsabilité dans tous types d'organisations.",
    iconName: "Book"
  },
  {
    id: "licence-eco-gestion",
    title: "Économie et Gestion",
    level: "Licence",
    duration: "3 ans",
    description: "Double compétence en économie et gestion permettant d'appréhender les mécanismes économiques et les stratégies des entreprises.",
    iconName: "Book"
  },
  {
    id: "licence-marketing",
    title: "Marketing et Communication",
    level: "Licence",
    duration: "3 ans",
    description: "Formation aux techniques modernes de marketing, de communication et de développement commercial dans un environnement digitalisé.",
    iconName: "Book"
  },
  {
    id: "licence-socio",
    title: "Sociologie",
    level: "Licence",
    duration: "3 ans",
    description: "Étude des faits sociaux, de la structure sociale et des dynamiques relationnelles pour comprendre les comportements collectifs.",
    iconName: "Book"
  },
  {
    id: "licence-banque",
    title: "Banque, Assurance et Finance",
    level: "Licence",
    duration: "3 ans",
    description: "Formation spécialisée dans les métiers de la finance, de la banque et de l'assurance avec maîtrise des outils d'analyse financière.",
    iconName: "Book"
  },
  {
    id: "licence-gestion-projet",
    title: "Gestion de Projets",
    level: "Licence",
    duration: "3 ans",
    description: "Formation aux méthodologies de gestion de projets, aux outils de pilotage et au management d'équipes pluridisciplinaires.",
    iconName: "Book"
  }
];

export const masterPrograms: ProgramType[] = [
  {
    id: "master-management",
    title: "Management des Organisations",
    level: "Master",
    duration: "2 ans",
    description: "Formation avancée en stratégie d'entreprise, leadership et prise de décision pour les futurs dirigeants et cadres supérieurs.",
    iconName: "GraduationCap"
  },
  {
    id: "master-finance",
    title: "Finance et Comptabilité",
    level: "Master",
    duration: "2 ans",
    description: "Maîtrise des outils d'analyse financière, de la gestion comptable avancée et des stratégies d'investissement.",
    iconName: "GraduationCap"
  },
  {
    id: "master-marketing",
    title: "Marketing et Communication Digitale",
    level: "Master",
    duration: "2 ans",
    description: "Formation aux stratégies marketing avancées, à la communication multicanale et aux techniques de marketing digital.",
    iconName: "GraduationCap"
  },
  {
    id: "master-economie",
    title: "Économie Appliquée",
    level: "Master",
    duration: "2 ans",
    description: "Analyse économique approfondie, modélisation économétrique et compréhension des enjeux macroéconomiques actuels.",
    iconName: "GraduationCap"
  },
  {
    id: "master-droit",
    title: "Droit des Affaires",
    level: "Master",
    duration: "2 ans",
    description: "Formation approfondie en droit commercial, droit des sociétés et réglementation des affaires internationales.",
    iconName: "GraduationCap"
  }
];

export const certificationPrograms: ProgramType[] = [
  {
    id: "cert-management",
    title: "Management et Leadership",
    level: "Certification",
    duration: "6 mois",
    description: "Développement des compétences de leadership, gestion d'équipe et conduite du changement pour cadres et dirigeants.",
    iconName: "BookOpen"
  },
  {
    id: "cert-marketing",
    title: "Marketing Digital",
    level: "Certification",
    duration: "4 mois",
    description: "Formation aux outils et stratégies de marketing numérique, réseaux sociaux et référencement.",
    iconName: "BookOpen"
  },
  {
    id: "cert-gestion-projet",
    title: "Gestion de Projets",
    level: "Certification",
    duration: "3 mois",
    description: "Méthodologies de gestion de projet (PRINCE2, PMI), outils de planification et suivi de projet.",
    iconName: "BookOpen"
  },
  {
    id: "cert-finance",
    title: "Analyse Financière",
    level: "Certification",
    duration: "4 mois",
    description: "Techniques d'analyse financière, évaluation d'entreprise et gestion de portefeuille d'investissement.",
    iconName: "BookOpen"
  }
];

export const doctoratPrograms: ProgramType[] = [
  {
    id: "doctorat-gestion",
    title: "Sciences de Gestion",
    level: "Doctorat",
    duration: "3 ans",
    description: "Programme doctoral de recherche en management, stratégie d'entreprise et théories des organisations.",
    iconName: "University"
  },
  {
    id: "doctorat-economie",
    title: "Sciences Économiques",
    level: "Doctorat",
    duration: "3 ans",
    description: "Recherche avancée en économie théorique et appliquée, modélisation économétrique et analyse de politiques.",
    iconName: "University"
  },
  {
    id: "doctorat-socio",
    title: "Sociologie",
    level: "Doctorat",
    duration: "3 ans",
    description: "Recherche approfondie sur les dynamiques sociales, l'analyse des comportements collectifs et les transformations sociétales.",
    iconName: "University"
  }
];
