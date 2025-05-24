
import { ProgramType } from '../types/programTypes';

// BTS
export const btsPrograms: ProgramType[] = [
  {
    id: "bts-comptabilite-gestion",
    title: "Comptabilité & Gestion",
    level: "BTS",
    duration: "2 ans",
    description: "Formation pratique aux techniques comptables, à la gestion financière et à l'analyse des coûts.",
    iconName: "Book",
    modules: [
      "Comptabilité générale",
      "Fiscalité",
      "Gestion financière",
      "Comptabilité analytique",
      "Droit des affaires",
      "Économie d'entreprise",
      "Communication professionnelle",
      "Informatique comptable"
    ],
    objectives: [
      "Acquérir les techniques fondamentales de la comptabilité",
      "Développer des compétences en gestion financière de base",
      "Comprendre le cadre juridique et fiscal des entreprises",
      "Savoir utiliser les logiciels de comptabilité"
    ],
    careers: [
      "Comptable",
      "Assistant comptable",
      "Gestionnaire de paie",
      "Assistant en cabinet d'expertise comptable",
      "Assistant contrôle de gestion"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier."
  },
  {
    id: "bts-informatique-gestion",
    title: "Informatique & Gestion",
    level: "BTS",
    duration: "2 ans",
    description: "Formation aux compétences informatiques appliquées à la gestion d'entreprise et aux systèmes d'information.",
    iconName: "Book",
    modules: [
      "Développement d'applications",
      "Bases de données",
      "Systèmes d'information",
      "Réseaux",
      "Analyse et conception",
      "Gestion de projets informatiques",
      "Économie et management",
      "Communication professionnelle"
    ],
    objectives: [
      "Acquérir des compétences en développement et maintenance d'applications",
      "Développer des savoir-faire en gestion de systèmes d'information",
      "Comprendre les besoins informatiques des entreprises",
      "Savoir travailler en équipe sur des projets informatiques"
    ],
    careers: [
      "Développeur d'applications",
      "Technicien en informatique de gestion",
      "Assistant chef de projet informatique",
      "Technicien de maintenance informatique",
      "Gestionnaire de parc informatique"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier."
  },
  {
    id: "bts-logistique-transport",
    title: "Logistique & Transport",
    level: "BTS",
    duration: "2 ans",
    description: "Formation aux techniques de gestion logistique, d'organisation des transports et d'optimisation des flux.",
    iconName: "Book",
    modules: [
      "Organisation des flux de marchandises",
      "Gestion des stocks",
      "Transport multimodal",
      "Droit du transport",
      "Gestion d'entrepôt",
      "Logistique internationale",
      "Informatique appliquée à la logistique",
      "Relation clients-fournisseurs"
    ],
    objectives: [
      "Acquérir les techniques de gestion des flux logistiques",
      "Développer des compétences en organisation du transport",
      "Comprendre les aspects réglementaires du transport",
      "Savoir optimiser une chaîne logistique"
    ],
    careers: [
      "Agent de transit",
      "Technicien en logistique",
      "Gestionnaire de stocks",
      "Responsable d'exploitation transport",
      "Assistant logistique"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier."
  },
  {
    id: "bts-transit-douane",
    title: "Transit & Douane",
    level: "BTS",
    duration: "2 ans",
    description: "Spécialisation dans les procédures douanières, le transit international et la réglementation du commerce extérieur.",
    iconName: "Book",
    modules: [
      "Réglementation douanière",
      "Transit international",
      "Procédures import-export",
      "Documentation du commerce international",
      "Incoterms",
      "Fiscalité internationale",
      "Logistique internationale",
      "Anglais professionnel"
    ],
    objectives: [
      "Maîtriser les procédures douanières et de transit",
      "Développer des compétences en documentation internationale",
      "Comprendre la réglementation du commerce extérieur",
      "Savoir gérer les opérations de dédouanement"
    ],
    careers: [
      "Déclarant en douane",
      "Agent de transit",
      "Technicien en logistique internationale",
      "Assistant import-export",
      "Agent de fret international"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier."
  },
  {
    id: "bts-transit-commerce-int",
    title: "Transit/Commerce International",
    level: "BTS",
    duration: "2 ans",
    description: "Formation aux techniques du commerce international combinées aux procédures de transit et douanes.",
    iconName: "Book",
    modules: [
      "Techniques du commerce international",
      "Transit et douane",
      "Négociation commerciale internationale",
      "Marketing international",
      "Logistique internationale",
      "Financement international",
      "Droit international",
      "Langues étrangères appliquées"
    ],
    objectives: [
      "Acquérir des compétences en techniques commerciales internationales",
      "Développer des savoir-faire en procédures douanières",
      "Comprendre les spécificités des marchés internationaux",
      "Savoir gérer des opérations d'import-export complètes"
    ],
    careers: [
      "Assistant commerce international",
      "Agent de transit international",
      "Chargé de clientèle export",
      "Assistant import-export",
      "Gestionnaire d'opérations internationales"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier."
  },
  {
    id: "bts-cuisine-patisserie",
    title: "Cuisine & Pâtisserie",
    level: "BTS",
    duration: "2 ans",
    description: "Formation professionnelle aux arts culinaires et techniques de pâtisserie avec gestion de production culinaire.",
    iconName: "Book",
    modules: [
      "Techniques culinaires avancées",
      "Pâtisserie professionnelle",
      "Sciences appliquées à l'alimentation",
      "Gestion de production culinaire",
      "Marketing en restauration",
      "Hygiène et sécurité alimentaire",
      "Gestion d'entreprise de restauration",
      "Innovation culinaire"
    ],
    objectives: [
      "Maîtriser les techniques culinaires et de pâtisserie professionnelles",
      "Développer des compétences en gestion de production culinaire",
      "Comprendre les normes d'hygiène et de sécurité alimentaire",
      "Savoir gérer un établissement de restauration"
    ],
    careers: [
      "Chef de cuisine",
      "Chef pâtissier",
      "Responsable de production culinaire",
      "Chef de partie",
      "Gérant de restaurant"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier."
  },
  {
    id: "bts-design-infographie",
    title: "Design & Infographie",
    level: "BTS",
    duration: "2 ans",
    description: "Formation aux techniques du design graphique, création visuelle et communication par l'image.",
    iconName: "Book",
    modules: [
      "Design graphique",
      "Infographie et PAO",
      "Dessin et illustration",
      "Typographie",
      "Web design",
      "Communication visuelle",
      "Marketing et stratégie de communication",
      "Gestion de projets créatifs"
    ],
    objectives: [
      "Maîtriser les outils et techniques de création graphique",
      "Développer une sensibilité artistique et un sens créatif",
      "Comprendre les stratégies de communication visuelle",
      "Savoir répondre à un cahier des charges créatif"
    ],
    careers: [
      "Infographiste",
      "Designer graphique",
      "Maquettiste",
      "Webdesigner",
      "Illustrateur",
      "Assistant directeur artistique"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et book créatif."
  },
  {
    id: "bts-sante-soins",
    title: "Santé & Soins Infirmiers",
    level: "BTS",
    duration: "2 ans",
    description: "Formation aux techniques de soins infirmiers et à la prise en charge des patients dans différents contextes médicaux.",
    iconName: "Book",
    modules: [
      "Soins infirmiers fondamentaux",
      "Anatomie et physiologie",
      "Pharmacologie",
      "Pathologies et soins spécifiques",
      "Psychologie et communication",
      "Santé publique",
      "Éthique et déontologie",
      "Stages cliniques"
    ],
    objectives: [
      "Acquérir les techniques de soins infirmiers de base",
      "Développer des compétences en relation patient-soignant",
      "Comprendre les principaux processus pathologiques",
      "Savoir travailler en équipe pluridisciplinaire"
    ],
    careers: [
      "Aide-soignant qualifié",
      "Assistant en soins",
      "Technicien de santé",
      "Assistant médical",
      "Préparateur en établissement de santé"
    ],
    admissionRequirements: "Baccalauréat ou équivalent, de préférence filière scientifique ou ST2S. Sélection sur dossier et entretien."
  }
];
