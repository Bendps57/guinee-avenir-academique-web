
import { ProgramType } from '../types/programTypes';

// License/Bachelor (BAC+3)
export const licensePrograms: ProgramType[] = [
  {
    id: "business-administration",
    title: "Business Administration",
    level: "Licence",
    duration: "3 ans",
    description: "Programme de formation en administration des affaires offrant une compréhension approfondie des principes de gestion, de finance et de stratégie d'entreprise.",
    iconName: "Book",
    modules: [
      "Principes de management",
      "Finance d'entreprise",
      "Marketing stratégique",
      "Comportement organisationnel",
      "Gestion des opérations",
      "Droit des affaires",
      "Économie managériale",
      "Commerce international"
    ],
    objectives: [
      "Développer une vision globale de la gestion d'entreprise",
      "Maîtriser les outils d'analyse et de prise de décision stratégique",
      "Acquérir des compétences en leadership et gestion d'équipe",
      "Comprendre l'environnement économique et juridique des entreprises"
    ],
    careers: [
      "Gestionnaire d'entreprise",
      "Analyste d'affaires",
      "Consultant en management",
      "Responsable de projet",
      "Entrepreneur"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  },
  {
    id: "commerce-international",
    title: "Commerce International",
    level: "Licence",
    duration: "3 ans",
    description: "Formation aux techniques du commerce international, stratégies d'exportation et importation, et négociation interculturelle.",
    iconName: "Book",
    modules: [
      "Techniques du commerce international",
      "Incoterms et contrats internationaux",
      "Douane et réglementation internationale",
      "Marketing international",
      "Supply chain internationale",
      "Financement du commerce international",
      "Négociation interculturelle",
      "Gestion des risques internationaux"
    ],
    objectives: [
      "Maîtriser les techniques de négociation internationale",
      "Comprendre les aspects juridiques et réglementaires du commerce international",
      "Développer des stratégies d'import-export efficaces",
      "Savoir gérer les opérations commerciales internationales"
    ],
    careers: [
      "Responsable import-export",
      "Directeur commercial international",
      "Agent de transit international",
      "Négociateur commercial international",
      "Consultant en développement international"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  },
  {
    id: "comptabilite-gestion",
    title: "Comptabilité et Gestion",
    level: "Licence",
    duration: "3 ans",
    description: "Formation complète en techniques comptables, gestion financière et contrôle de gestion pour futures carrières en finance d'entreprise.",
    iconName: "Book",
    modules: [
      "Comptabilité générale",
      "Comptabilité analytique",
      "Droit fiscal",
      "Contrôle de gestion",
      "Finance d'entreprise",
      "Systèmes d'information comptable",
      "Audit interne",
      "Analyse financière"
    ],
    objectives: [
      "Maîtriser les principes et techniques comptables",
      "Développer des compétences en analyse financière et budgétaire",
      "Comprendre les aspects juridiques et fiscaux de la gestion",
      "Savoir mettre en place des outils de pilotage financier"
    ],
    careers: [
      "Comptable",
      "Contrôleur de gestion",
      "Auditeur interne",
      "Responsable administratif et financier",
      "Conseiller fiscal",
      "Trésorier d'entreprise"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  },
  {
    id: "ressources-humaines",
    title: "Ressources Humaines",
    level: "Licence",
    duration: "3 ans",
    description: "Formation aux métiers des ressources humaines couvrant le recrutement, la gestion des compétences, les relations sociales et la paie.",
    iconName: "Book",
    modules: [
      "Gestion administrative du personnel",
      "Recrutement et intégration",
      "Formation et développement des compétences",
      "Relations sociales",
      "Gestion de la paie",
      "Droit du travail",
      "SIRH et digitalisation RH",
      "Gestion prévisionnelle des emplois"
    ],
    objectives: [
      "Maîtriser les processus de gestion des ressources humaines",
      "Développer des compétences en management d'équipe et leadership",
      "Comprendre les aspects juridiques et sociaux de la GRH",
      "Savoir élaborer et mettre en œuvre une politique RH"
    ],
    careers: [
      "Responsable ressources humaines",
      "Chargé de recrutement",
      "Gestionnaire de paie",
      "Responsable formation",
      "Consultant RH",
      "Juriste en droit social"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  },
  {
    id: "logistique-transports",
    title: "Logistiques & Transport (Supply Chain)",
    level: "Licence",
    duration: "3 ans",
    description: "Formation complète en gestion de la chaîne logistique, transport et distribution, optimisation des flux de marchandises.",
    iconName: "Book",
    modules: [
      "Gestion de la chaîne logistique",
      "Transport multimodal",
      "Entreposage et gestion des stocks",
      "Planification et ordonnancement",
      "Systèmes d'information logistique",
      "Achats et approvisionnement",
      "Logistique internationale",
      "Lean management"
    ],
    objectives: [
      "Maîtriser les méthodes d'optimisation de la chaîne logistique",
      "Développer des compétences en gestion des transports et distribution",
      "Comprendre les enjeux de la logistique internationale",
      "Savoir implémenter des solutions d'amélioration continue"
    ],
    careers: [
      "Responsable logistique",
      "Responsable transport",
      "Supply chain manager",
      "Gestionnaire de stocks",
      "Planificateur de production",
      "Acheteur logistique"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  },
  {
    id: "banque-finances-assurances",
    title: "Banque Finances / Banque Assurances",
    level: "Licence",
    duration: "3 ans",
    description: "Formation aux métiers de la banque, de l'assurance et de la finance, incluant produits financiers, gestion de patrimoine et analyse financière.",
    iconName: "Book",
    modules: [
      "Économie monétaire et financière",
      "Produits bancaires et financiers",
      "Techniques d'assurance",
      "Gestion de patrimoine",
      "Réglementation bancaire",
      "Analyse financière",
      "Risques financiers et assurantiels",
      "Fiscalité des produits financiers"
    ],
    objectives: [
      "Maîtriser les produits et services bancaires et d'assurance",
      "Développer des compétences en conseil financier et patrimonial",
      "Comprendre les mécanismes des marchés financiers",
      "Savoir analyser et gérer les risques financiers"
    ],
    careers: [
      "Conseiller bancaire",
      "Gestionnaire de patrimoine",
      "Agent d'assurance",
      "Analyste crédit",
      "Chargé de clientèle professionnelle",
      "Conseiller en produits financiers"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  }
];
