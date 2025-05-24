
import { ProgramType } from '../types/programTypes';

// License/Bachelor (BAC+4)
export const bachelorPlusFourPrograms: ProgramType[] = [
  {
    id: "genie-informatique",
    title: "Génie Informatique",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation approfondie en ingénierie informatique couvrant les aspects matériels et logiciels des systèmes informatiques.",
    iconName: "BookOpen",
    modules: [
      "Architecture des ordinateurs",
      "Systèmes d'exploitation",
      "Algorithmique avancée",
      "Programmation orientée objet",
      "Bases de données",
      "Réseaux informatiques",
      "Sécurité informatique",
      "Intelligence artificielle"
    ],
    objectives: [
      "Maîtriser la conception de systèmes informatiques complexes",
      "Développer des compétences en programmation et architecture logicielle",
      "Comprendre les enjeux de la sécurité informatique",
      "Savoir intégrer des solutions matérielles et logicielles"
    ],
    careers: [
      "Ingénieur informaticien",
      "Architecte système",
      "Développeur logiciel",
      "Administrateur réseau",
      "Consultant en systèmes d'information"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "informatique-decisionnelle",
    title: "Informatique Décisionnelle",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation aux outils et méthodes d'aide à la décision, business intelligence et analyse prédictive pour les entreprises.",
    iconName: "BookOpen",
    modules: [
      "Entrepôts de données",
      "ETL et intégration de données",
      "Reporting et tableaux de bord",
      "OLAP et analyse multidimensionnelle",
      "Visualisation de données",
      "Data mining",
      "Analyse prédictive",
      "Gouvernance des données"
    ],
    objectives: [
      "Maîtriser les techniques de business intelligence",
      "Développer des compétences en traitement et analyse de données",
      "Comprendre la transformation des données en informations décisionnelles",
      "Savoir concevoir des solutions d'aide à la décision"
    ],
    careers: [
      "Consultant en informatique décisionnelle",
      "Data analyst",
      "Chef de projet BI",
      "Architecte de données",
      "Responsable solutions décisionnelles"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  }
];
