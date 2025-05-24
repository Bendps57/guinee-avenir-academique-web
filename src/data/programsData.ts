export interface ProgramType {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  iconName?: string;
  modules?: string[];
  objectives?: string[];
  careers?: string[];
  admissionRequirements?: string;
}

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
    id: "marketing-digital",
    title: "Marketing Digital",
    level: "Licence",
    duration: "3 ans",
    description: "Formation aux techniques modernes du marketing numérique incluant la stratégie de contenu, les réseaux sociaux et l'analyse de données.",
    iconName: "Book",
    modules: [
      "Fondamentaux du marketing numérique",
      "Stratégie de contenu",
      "Marketing des réseaux sociaux",
      "SEO et SEM",
      "Analyse de données marketing",
      "E-commerce",
      "UX/UI Design",
      "Marketing mobile"
    ],
    objectives: [
      "Maîtriser les outils et techniques du marketing digital",
      "Développer des stratégies marketing multicanales efficaces",
      "Analyser et interpréter les données pour optimiser les campagnes",
      "Concevoir des expériences utilisateur engageantes"
    ],
    careers: [
      "Responsable marketing digital",
      "Chef de projet web marketing",
      "Community manager",
      "Spécialiste SEO/SEM",
      "Consultant en stratégie digitale"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  },
  {
    id: "marketing-commerce-international",
    title: "Marketing et Commerce International",
    level: "Licence",
    duration: "3 ans",
    description: "Programme combinant marketing et commerce à l'échelle internationale, préparant aux défis du marché mondial et aux stratégies d'internationalisation.",
    iconName: "Book",
    modules: [
      "Marketing international",
      "Négociation commerciale",
      "Gestion interculturelle",
      "Logistique internationale",
      "Droit international des affaires",
      "Stratégies d'exportation",
      "Marketing mix global",
      "Études de marchés internationaux"
    ],
    objectives: [
      "Comprendre les spécificités des marchés internationaux",
      "Développer des compétences en négociation interculturelle",
      "Maîtriser les techniques de marketing adaptées aux différents marchés",
      "Élaborer des stratégies d'entrée sur les marchés étrangers"
    ],
    careers: [
      "Responsable export",
      "Chef de produit international",
      "Chargé de développement international",
      "Conseiller en commerce extérieur",
      "Responsable de zone export"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  },
  {
    id: "economie-appliquee",
    title: "Économie Appliquée",
    level: "Licence",
    duration: "3 ans",
    description: "Formation en économie pratique fournissant des outils d'analyse économique applicables à divers secteurs et problématiques contemporaines.",
    iconName: "Book",
    modules: [
      "Microéconomie",
      "Macroéconomie",
      "Économétrie",
      "Mathématiques pour économistes",
      "Analyse des politiques économiques",
      "Économie du développement",
      "Économie de l'environnement",
      "Statistiques économiques"
    ],
    objectives: [
      "Maîtriser les concepts et théories économiques fondamentaux",
      "Développer des compétences en analyse quantitative et modélisation",
      "Comprendre les mécanismes économiques contemporains",
      "Savoir appliquer les théories économiques à des cas concrets"
    ],
    careers: [
      "Analyste économique",
      "Chargé d'études économiques",
      "Consultant en politiques publiques",
      "Économiste d'entreprise",
      "Analyste de marché"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Sélection sur dossier et entretien de motivation."
  },
  {
    id: "economie-internationale",
    title: "Économie Internationale",
    level: "Licence",
    duration: "3 ans",
    description: "Étude des relations économiques internationales, des échanges commerciaux et des politiques économiques à l'échelle mondiale.",
    iconName: "Book",
    modules: [
      "Théories du commerce international",
      "Finance internationale",
      "Intégration économique",
      "Organisations économiques internationales",
      "Géopolitique économique",
      "Mondialisation et développement",
      "Politique monétaire internationale",
      "Économie des pays émergents"
    ],
    objectives: [
      "Comprendre les mécanismes de l'économie mondiale",
      "Analyser les flux commerciaux et financiers internationaux",
      "Maîtriser les outils d'analyse des marchés globaux",
      "Évaluer l'impact des politiques économiques internationales"
    ],
    careers: [
      "Économiste international",
      "Analyste des marchés internationaux",
      "Conseiller en commerce international",
      "Chargé d'études économiques internationales",
      "Consultant en stratégie internationale"
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
  }
];

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
    id: "hardware-engineering",
    title: "Hardware Engineering",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Spécialisation dans la conception, développement et maintenance des composants matériels informatiques.",
    iconName: "BookOpen",
    modules: [
      "Électronique numérique",
      "Microprocesseurs et microcontrôleurs",
      "Conception de circuits intégrés",
      "Systèmes embarqués",
      "FPGA et ASIC",
      "Architecture matérielle avancée",
      "Fiabilité des systèmes",
      "IoT et systèmes connectés"
    ],
    objectives: [
      "Maîtriser la conception de composants matériels informatiques",
      "Développer des compétences en électronique numérique",
      "Comprendre l'architecture des systèmes embarqués",
      "Savoir implémenter des solutions IoT complètes"
    ],
    careers: [
      "Ingénieur hardware",
      "Concepteur de systèmes embarqués",
      "Architecte matériel",
      "Ingénieur IoT",
      "Spécialiste en électronique numérique"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "genie-logiciel",
    title: "Génie Logiciel",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation spécialisée dans le développement, la conception et la maintenance de logiciels complexes et robustes.",
    iconName: "BookOpen",
    modules: [
      "Analyse et conception de logiciels",
      "Programmation avancée",
      "Architecture logicielle",
      "Méthodologies agiles",
      "Tests et qualité logicielle",
      "DevOps",
      "Patrons de conception",
      "Développement mobile et web"
    ],
    objectives: [
      "Maîtriser les méthodes et outils de développement logiciel",
      "Développer des compétences en architecture et conception",
      "Comprendre les enjeux de la qualité logicielle",
      "Savoir gérer un projet de développement complet"
    ],
    careers: [
      "Ingénieur logiciel",
      "Architecte logiciel",
      "Chef de projet de développement",
      "Développeur full-stack",
      "Ingénieur qualité logicielle"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "software-programming",
    title: "Software Programming",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation approfondie aux langages de programmation, frameworks et environnements de développement modernes.",
    iconName: "BookOpen",
    modules: [
      "Langages de programmation avancés",
      "Développement frontend",
      "Développement backend",
      "Frameworks modernes",
      "Bases de données relationnelles et NoSQL",
      "API et services web",
      "Développement mobile cross-platform",
      "Cloud computing"
    ],
    objectives: [
      "Maîtriser plusieurs langages et paradigmes de programmation",
      "Développer des compétences en développement full-stack",
      "Comprendre les architectures modernes (microservices, serverless)",
      "Savoir développer des applications performantes et scalables"
    ],
    careers: [
      "Développeur logiciel",
      "Développeur full-stack",
      "Ingénieur DevOps",
      "Développeur d'applications mobiles",
      "Architecte cloud"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "robotics",
    title: "Robotics",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Étude de la conception, programmation et contrôle des systèmes robotiques autonomes et semi-autonomes.",
    iconName: "BookOpen",
    modules: [
      "Mécanique robotique",
      "Capteurs et actionneurs",
      "Intelligence artificielle pour la robotique",
      "Traitement d'image et vision par ordinateur",
      "Systèmes de contrôle",
      "Robotique mobile",
      "Robotique industrielle",
      "Robotique collaborative"
    ],
    objectives: [
      "Maîtriser la conception et programmation de systèmes robotiques",
      "Développer des compétences en IA appliquée à la robotique",
      "Comprendre les systèmes de perception et d'interaction",
      "Savoir implémenter des solutions robotiques complètes"
    ],
    careers: [
      "Ingénieur en robotique",
      "Développeur de systèmes robotiques",
      "Ingénieur en automatisme",
      "Concepteur de systèmes autonomes",
      "Chef de projet en robotique"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "networking",
    title: "Networking",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Spécialisation dans la conception, implémentation et sécurisation des infrastructures réseau modernes.",
    iconName: "BookOpen",
    modules: [
      "Protocoles réseau",
      "Architecture des réseaux",
      "Sécurité réseau",
      "Réseaux sans fil et mobiles",
      "Administration système",
      "Cloud networking",
      "SDN et NFV",
      "Virtualisation et conteneurisation"
    ],
    objectives: [
      "Maîtriser les technologies réseau avancées",
      "Développer des compétences en sécurité des infrastructures",
      "Comprendre les architectures cloud et virtualisées",
      "Savoir concevoir et déployer des réseaux d'entreprise"
    ],
    careers: [
      "Administrateur réseau",
      "Ingénieur réseau",
      "Spécialiste en sécurité réseau",
      "Architecte cloud",
      "Consultant en infrastructures IT"
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
  },
  {
    id: "big-data",
    title: "Big Data",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation aux techniques et outils de traitement, stockage et analyse des données massives.",
    iconName: "BookOpen",
    modules: [
      "Architectures big data",
      "Hadoop et MapReduce",
      "Spark et traitement distribué",
      "NoSQL et bases de données distribuées",
      "Streaming et traitement temps réel",
      "Data lakes",
      "Gouvernance des données massives",
      "Sécurité des données"
    ],
    objectives: [
      "Maîtriser les infrastructures et frameworks big data",
      "Développer des compétences en traitement distribué",
      "Comprendre les enjeux du stockage et de l'analyse de données massives",
      "Savoir implémenter des pipelines de données complexes"
    ],
    careers: [
      "Ingénieur big data",
      "Architecte de données",
      "Data engineer",
      "Consultant en infrastructures de données",
      "Chef de projet big data"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "ia-intelligence-artificielle",
    title: "IA Intelligence Artificielle",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Spécialisation dans les algorithmes d'intelligence artificielle, apprentissage automatique et systèmes intelligents.",
    iconName: "BookOpen",
    modules: [
      "Apprentissage automatique",
      "Réseaux de neurones profonds",
      "Traitement du langage naturel",
      "Vision par ordinateur",
      "Systèmes multi-agents",
      "IA symbolique",
      "Robotique intelligente",
      "Éthique et IA responsable"
    ],
    objectives: [
      "Maîtriser les algorithmes et techniques d'intelligence artificielle",
      "Développer des compétences en apprentissage profond",
      "Comprendre les applications de l'IA dans divers domaines",
      "Savoir concevoir et déployer des systèmes intelligents"
    ],
    careers: [
      "Ingénieur en intelligence artificielle",
      "Data scientist",
      "Chercheur en IA",
      "Spécialiste NLP/Computer Vision",
      "Consultant en solutions IA"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "data-science",
    title: "Data Science",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation interdisciplinaire combinant statistiques, informatique et expertise métier pour extraire de la valeur des données.",
    iconName: "BookOpen",
    modules: [
      "Statistiques avancées",
      "Machine learning",
      "Traitement et nettoyage des données",
      "Visualisation de données",
      "Programmation pour la data science",
      "Analyse prédictive",
      "Big data analytics",
      "Méthodologies de projets data"
    ],
    objectives: [
      "Maîtriser les méthodes statistiques et d'apprentissage automatique",
      "Développer des compétences en extraction et préparation des données",
      "Comprendre le cycle de vie des projets data",
      "Savoir communiquer des insights basés sur les données"
    ],
    careers: [
      "Data scientist",
      "Analyste de données",
      "Spécialiste en machine learning",
      "Consultant en data science",
      "Chercheur en analyse de données"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "data-mining",
    title: "Data Mining",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Spécialisation dans les techniques d'extraction de connaissances à partir de données structurées et non structurées.",
    iconName: "BookOpen",
    modules: [
      "Algorithmique pour le data mining",
      "Classification et clustering",
      "Détection d'anomalies",
      "Association rules",
      "Text mining",
      "Web mining",
      "Analytics temps réel",
      "Évaluation de modèles"
    ],
    objectives: [
      "Maîtriser les techniques d'extraction de connaissances",
      "Développer des compétences en modélisation prédictive",
      "Comprendre les enjeux de la découverte de patterns",
      "Savoir appliquer les algorithmes adaptés aux différents types de données"
    ],
    careers: [
      "Ingénieur en data mining",
      "Analyste de données avancé",
      "Consultant en analytics",
      "Spécialiste en modélisation prédictive",
      "Expert en extraction de connaissances"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "miage",
    title: "MIAGE",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Méthodes Informatiques Appliquées à la Gestion des Entreprises - Formation combinant informatique et gestion pour les systèmes d'information.",
    iconName: "BookOpen",
    modules: [
      "Systèmes d'information",
      "Génie logiciel",
      "Bases de données avancées",
      "ERP et CRM",
      "Gestion de projet informatique",
      "Business intelligence",
      "Audit informatique",
      "Gouvernance IT"
    ],
    objectives: [
      "Maîtriser les méthodes de conception et gestion de SI",
      "Développer des compétences en gestion de projet informatique",
      "Comprendre les enjeux business des solutions informatiques",
      "Savoir aligner IT et stratégie d'entreprise"
    ],
    careers: [
      "Chef de projet SI",
      "Consultant ERP/CRM",
      "Architecte fonctionnel",
      "Business analyst",
      "Responsable applicatif"
    ],
    admissionRequirements: "Baccalauréat scientifique ou économique. Sélection sur dossier, tests et entretien."
  },
  {
    id: "genie-civil",
    title: "Génie Civil",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation aux sciences et techniques de la construction, conception et maintenance des infrastructures et bâtiments.",
    iconName: "BookOpen",
    modules: [
      "Résistance des matériaux",
      "Mécanique des sols",
      "Béton armé",
      "Structures métalliques",
      "Hydraulique urbaine",
      "Géotechnique",
      "Management de projet BTP",
      "BIM et maquette numérique"
    ],
    objectives: [
      "Maîtriser les techniques de conception et dimensionnement structurel",
      "Développer des compétences en gestion de projet de construction",
      "Comprendre les aspects réglementaires et normatifs",
      "Savoir utiliser les outils numériques de conception"
    ],
    careers: [
      "Ingénieur génie civil",
      "Conducteur de travaux",
      "Ingénieur structures",
      "Chef de projet construction",
      "Ingénieur bureau d'études"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "batiment",
    title: "Bâtiment",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Spécialisation dans la conception, construction et gestion de bâtiments résidentiels, commerciaux et industriels.",
    iconName: "BookOpen",
    modules: [
      "Technologie du bâtiment",
      "Gros œuvre et second œuvre",
      "Thermique du bâtiment",
      "Acoustique et éclairage",
      "Rénovation et réhabilitation",
      "Économie de la construction",
      "Bâtiments intelligents",
      "Construction durable"
    ],
    objectives: [
      "Maîtriser les techniques de conception et construction de bâtiments",
      "Développer des compétences en gestion de projets immobiliers",
      "Comprendre les aspects énergétiques et environnementaux",
      "Savoir intégrer les nouvelles technologies dans le bâtiment"
    ],
    careers: [
      "Architecte (après complément de formation)",
      "Conducteur de travaux bâtiment",
      "Chargé d'affaires construction",
      "Expert en bâtiment",
      "Responsable de programmes immobiliers"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "pont-chaussee",
    title: "Pont & Chaussée",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation spécialisée dans la conception, construction et maintenance des ouvrages d'art et infrastructures routières.",
    iconName: "BookOpen",
    modules: [
      "Conception des ponts",
      "Infrastructure routière",
      "Dimensionnement des chaussées",
      "Ouvrages d'art",
      "Maintenance des infrastructures",
      "Géotechnique routière",
      "Matériaux innovants",
      "Impact environnemental"
    ],
    objectives: [
      "Maîtriser les techniques de conception d'infrastructures de transport",
      "Développer des compétences en gestion et maintenance d'ouvrages",
      "Comprendre les contraintes géotechniques et environnementales",
      "Savoir concevoir des solutions durables"
    ],
    careers: [
      "Ingénieur ouvrages d'art",
      "Ingénieur infrastructures",
      "Chef de projet routier",
      "Expert technique en génie civil",
      "Responsable maintenance d'infrastructures"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "environnement",
    title: "Environnement",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation aux sciences et techniques environnementales, gestion des ressources naturelles et développement durable.",
    iconName: "BookOpen",
    modules: [
      "Écologie et biodiversité",
      "Gestion des ressources naturelles",
      "Traitement des eaux",
      "Gestion des déchets",
      "Énergies renouvelables",
      "Impact environnemental",
      "Droit de l'environnement",
      "Management environnemental"
    ],
    objectives: [
      "Maîtriser les approches de protection et gestion environnementale",
      "Développer des compétences en évaluation d'impact environnemental",
      "Comprendre les enjeux du développement durable",
      "Savoir proposer des solutions écologiques innovantes"
    ],
    careers: [
      "Ingénieur environnement",
      "Consultant en développement durable",
      "Responsable HSE",
      "Chargé d'études environnementales",
      "Expert en gestion des ressources"
    ],
    admissionRequirements: "Baccalauréat scientifique ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "sciences-infirmieres",
    title: "Sciences Infirmières",
    level: "Licence BAC+4",
    duration: "4 ans",
    description: "Formation approfondie aux soins infirmiers incluant pratiques avancées, recherche en santé et gestion des soins.",
    iconName: "BookOpen",
    modules: [
      "Soins infirmiers avancés",
      "Pharmacologie clinique",
      "Pathologies complexes",
      "Gestion des soins",
      "Éthique médicale",
      "Recherche en sciences infirmières",
      "Santé publique",
      "Pratiques spécialisées"
    ],
    objectives: [
      "Maîtriser les techniques de soins infirmiers avancés",
      "Développer des compétences en coordination des soins",
      "Comprendre les aspects éthiques et légaux de la profession",
      "Savoir participer à des projets de recherche en santé"
    ],
    careers: [
      "Infirmier(ère) spécialisé(e)",
      "Cadre de santé",
      "Coordinateur de soins",
      "Infirmier(ère) de recherche clinique",
      "Formateur en soins infirmiers"
    ],
    admissionRequirements: "Baccalauréat scientifique ou ST2S. Sélection sur dossier, tests et entretien."
  }
];

// Master
export const masterPrograms: ProgramType[] = [
  {
    id: "administration-fiscale",
    title: "Administration Fiscale",
    level: "Master",
    duration: "2 ans",
    description: "Programme de formation de haut niveau conçu pour former des cadres compétents et éthiques dans le domaine de l'administration fiscale.",
    iconName: "GraduationCap",
    modules: [
      "Droit fiscal général",
      "Procédure fiscale et contentieux",
      "Fiscalité des entreprises",
      "Fiscalité internationale",
      "Gestion fiscale et informatique",
      "Finances publiques",
      "Économie publique",
      "Méthodologie de recherche"
    ],
    objectives: [
      "Former des spécialistes de haut niveau en administration fiscale",
      "Développer des capacités d'analyse critique et de résolution de problèmes",
      "Maîtriser les techniques de gestion fiscale et de contrôle fiscal",
      "Acquérir des compétences managériales et de communication",
      "Promouvoir l'éthique dans les professions fiscales"
    ],
    careers: [
      "Inspecteur des impôts",
      "Contrôleur des impôts",
      "Chef de service fiscal",
      "Responsable fiscal d'entreprise",
      "Consultant fiscal",
      "Expert en fiscalité internationale"
    ],
    admissionRequirements: "Licence en droit, économie, gestion ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "banque-monnaie-finance",
    title: "Banque Monnaie Finance",
    level: "Master",
    duration: "2 ans",
    description: "Formation avancée aux mécanismes monétaires et financiers, marchés de capitaux et gestion bancaire.",
    iconName: "GraduationCap",
    modules: [
      "Économie monétaire avancée",
      "Marchés financiers internationaux",
      "Gestion bancaire",
      "Finance de marché",
      "Politique monétaire",
      "Gestion des risques financiers",
      "Régulation bancaire",
      "Fintech et innovation financière"
    ],
    objectives: [
      "Maîtriser les mécanismes des marchés monétaires et financiers",
      "Développer une expertise en gestion des institutions financières",
      "Comprendre les politiques monétaires et leurs impacts",
      "Savoir analyser et gérer les risques financiers complexes"
    ],
    careers: [
      "Analyste financier",
      "Gestionnaire de portefeuille",
      "Risk manager",
      "Trader",
      "Consultant en finance",
      "Responsable en institution financière"
    ],
    admissionRequirements: "Licence en économie, finance, gestion ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "finances-publiques-fiscalite",
    title: "Finances Publiques & Fiscalité",
    level: "Master",
    duration: "2 ans",
    description: "Spécialisation en finances des administrations publiques, systèmes fiscaux et politiques budgétaires.",
    iconName: "GraduationCap",
    modules: [
      "Droit fiscal approfondi",
      "Finances publiques nationales et internationales",
      "Politique budgétaire",
      "Comptabilité publique",
      "Fiscalité des entreprises et des particuliers",
      "Contrôle fiscal et contentieux",
      "Évaluation des politiques publiques",
      "Gouvernance financière publique"
    ],
    objectives: [
      "Maîtriser les règles et mécanismes des finances publiques",
      "Développer une expertise en fiscalité nationale et internationale",
      "Comprendre les enjeux des politiques budgétaires",
      "Savoir analyser l'impact économique des décisions fiscales"
    ],
    careers: [
      "Conseiller fiscal",
      "Expert en finances publiques",
      "Consultant en fiscalité",
      "Cadre dans l'administration fiscale",
      "Responsable financier secteur public",
      "Chercheur en économie publique"
    ],
    admissionRequirements: "Licence en droit, économie, gestion ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "audit-controle-gestion",
    title: "Audit Control de Gestion",
    level: "Master",
    duration: "2 ans",
    description: "Formation aux techniques d'audit financier, contrôle de gestion et pilotage de la performance.",
    iconName: "GraduationCap",
    modules: [
      "Audit financier",
      "Contrôle de gestion approfondi",
      "Audit interne et opérationnel",
      "Systèmes d'information pour le contrôle",
      "Management de la performance",
      "Normes comptables internationales",
      "Business intelligence",
      "Gestion des risques"
    ],
    objectives: [
      "Maîtriser les techniques d'audit et de contrôle de gestion",
      "Développer des compétences en pilotage de la performance",
      "Comprendre les enjeux de la gouvernance d'entreprise",
      "Savoir concevoir et mettre en œuvre des systèmes de contrôle efficaces"
    ],
    careers: [
      "Auditeur interne ou externe",
      "Contrôleur de gestion",
      "Directeur administratif et financier",
      "Consultant en audit et contrôle",
      "Risk manager",
      "Responsable reporting financier"
    ],
    admissionRequirements: "Licence en comptabilité, finance, gestion ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "droit-administration-judiciaire",
    title: "Droit & Administration Judiciaire",
    level: "Master",
    duration: "2 ans",
    description: "Formation approfondie en droit judiciaire, procédures et administration de la justice.",
    iconName: "GraduationCap",
    modules: [
      "Droit processuel",
      "Organisation judiciaire",
      "Administration de la justice",
      "Contentieux administratif",
      "Droit pénal approfondi",
      "Procédures civiles et pénales",
      "Modes alternatifs de règlement des conflits",
      "Éthique juridique et judiciaire"
    ],
    objectives: [
      "Maîtriser les procédures judiciaires et administratives",
      "Développer une expertise en matière de contentieux",
      "Comprendre le fonctionnement de l'administration judiciaire",
      "Savoir gérer des dossiers juridiques complexes"
    ],
    careers: [
      "Avocat (après formation complémentaire)",
      "Greffier",
      "Juriste d'entreprise",
      "Conseiller juridique",
      "Médiateur juridique",
      "Responsable juridique"
    ],
    admissionRequirements: "Licence en droit ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "intervention-developpement-social",
    title: "Intervention & Développement Social",
    level: "Master",
    duration: "2 ans",
    description: "Formation aux méthodologies d'intervention sociale, politiques sociales et développement communautaire.",
    iconName: "GraduationCap",
    modules: [
      "Politiques sociales avancées",
      "Méthodes d'intervention sociale",
      "Développement communautaire",
      "Évaluation des programmes sociaux",
      "Management des organisations sociales",
      "Psychologie sociale",
      "Ingénierie sociale",
      "Éthique de l'intervention sociale"
    ],
    objectives: [
      "Maîtriser les approches d'intervention et de développement social",
      "Développer des compétences en conception et gestion de projets sociaux",
      "Comprendre les dynamiques sociales et territoriales",
      "Savoir évaluer l'impact des politiques sociales"
    ],
    careers: [
      "Directeur d'établissement social",
      "Chargé de développement social",
      "Consultant en ingénierie sociale",
      "Responsable de programmes sociaux",
      "Coordinateur de projets communautaires",
      "Expert en politiques sociales"
    ],
    admissionRequirements: "Licence en sciences sociales, sociologie, psychologie ou équivalent. Sélection sur dossier, tests et entretien."
  }
];

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

// Export the collection of all programs
export const doctoratPrograms: ProgramType[] = [
  {
    id: "doctorat-gestion",
    title: "Sciences de Gestion",
    level: "Doctorat",
    duration: "3 ans",
    description: "Programme doctoral de recherche en management, stratégie d'entreprise et théories des organisations.",
    iconName: "University",
    modules: [
      "Épistémologie des sciences de gestion",
      "Méthodologie de recherche avancée",
      "Théories des organisations",
      "Management stratégique",
      "Séminaires thématiques",
      "Techniques quantitatives et qualitatives",
      "Rédaction scientifique"
    ],
    objectives: [
      "Développer des capacités de recherche de haut niveau en sciences de gestion",
      "Contribuer à l'avancement des connaissances dans le domaine du management",
      "Maîtriser les méthodes de recherche qualitatives et quantitatives",
      "Savoir communiquer ses résultats de recherche à la communauté scientifique"
    ],
    careers: [
      "Enseignant-chercheur",
      "Chercheur en centre de recherche",
      "Consultant expert",
      "Directeur de recherche et développement",
      "Responsable d'études"
    ],
    admissionRequirements: "Master recherche ou équivalent avec mention. Projet de recherche détaillé. Sélection sur dossier et entretien avec comité scientifique."
  },
  {
    id: "doctorat-economie",
    title: "Sciences Économiques",
    level: "Doctorat",
    duration: "3 ans",
    description: "Recherche avancée en économie théorique et appliquée, modélisation économétrique et analyse de politiques.",
    iconName: "University",
    modules: [
      "Théorie économique avancée",
      "Économétrie avancée",
      "Méthodes de recherche",
      "Modélisation mathématique",
      "Séminaires thématiques",
      "Économie du développement",
      "Publications scientifiques"
    ],
    objectives: [
      "Développer des capacités de recherche de haut niveau en sciences économiques",
      "Maîtriser les outils avancés d'analyse économique et économétrique",
      "Contribuer à l'avancement des connaissances économiques",
      "Savoir formuler des recommandations de politiques économiques fondées sur la recherche"
    ],
    careers: [
      "Enseignant-chercheur en économie",
      "Économiste dans les organisations internationales",
      "Analyste économique senior",
      "Conseiller en politiques publiques",
      "Directeur d'études économiques"
    ],
    admissionRequirements: "Master recherche en économie ou équivalent avec mention. Projet de recherche détaillé. Sélection sur dossier et entretien avec comité scientifique."
  },
  {
    id: "doctorat-socio",
    title: "Sociologie",
    level: "Doctorat",
    duration: "3 ans",
    description: "Recherche approfondie sur les dynamiques sociales, l'analyse des comportements collectifs et les transformations sociétales.",
    iconName: "University",
    modules: [
      "Théories sociologiques contemporaines",
      "Méthodologie de recherche avancée",
      "Analyse qualitative approfondie",
      "Techniques quantitatives en sociologie",
      "Séminaires thématiques",
      "Sociologie des organisations",
      "Publications scientifiques"
    ],
    objectives: [
      "Développer des capacités de recherche de haut niveau en sociologie",
      "Maîtriser les méthodes d'investigation sociologique avancées",
      "Contribuer à l'avancement des connaissances sur les phénomènes sociaux",
      "Analyser de façon critique les transformations sociales contemporaines"
    ],
    careers: [
      "Enseignant-chercheur en sociologie",
      "Chercheur dans des instituts de recherche",
      "Expert en politiques sociales",
      "Consultant en développement social",
      "Directeur d'études sociologiques"
    ],
    admissionRequirements: "Master recherche en sociologie ou discipline connexe avec mention. Projet de recherche détaillé. Sélection sur dossier et entretien avec comité scientifique."
  }
];

// Exporting all programs combined for search functionality
export const allPrograms = [
  ...licensePrograms,
  ...bachelorPlusFourPrograms,
  ...masterPrograms,
  ...btsPrograms,
  ...doctoratPrograms
];
