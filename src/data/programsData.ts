
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

export const licensePrograms: ProgramType[] = [
  {
    id: "licence-gestion",
    title: "Gestion des Entreprises",
    level: "Licence",
    duration: "3 ans",
    description: "Formation complète en gestion, comptabilité, marketing et ressources humaines. Prépare à des postes de responsabilité dans tous types d'organisations.",
    iconName: "Book",
    modules: [
      "Comptabilité générale",
      "Marketing fondamental",
      "Gestion des ressources humaines",
      "Mathématiques financières",
      "Économie générale",
      "Droit des affaires",
      "Statistiques",
      "Communication d'entreprise"
    ],
    objectives: [
      "Acquérir une vision globale du fonctionnement de l'entreprise",
      "Maîtriser les outils de gestion et d'analyse financière",
      "Développer une capacité d'analyse et de résolution de problèmes",
      "Comprendre les enjeux du management contemporain"
    ],
    careers: [
      "Chargé de gestion administrative et financière",
      "Assistant ressources humaines",
      "Analyste junior",
      "Assistant marketing",
      "Conseiller commercial"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Étude du dossier académique et entretien de motivation."
  },
  {
    id: "licence-eco-gestion",
    title: "Économie et Gestion",
    level: "Licence",
    duration: "3 ans",
    description: "Double compétence en économie et gestion permettant d'appréhender les mécanismes économiques et les stratégies des entreprises.",
    iconName: "Book",
    modules: [
      "Macroéconomie",
      "Microéconomie",
      "Analyse économique",
      "Comptabilité analytique",
      "Finance d'entreprise",
      "Économétrie",
      "Politique économique",
      "Gestion financière"
    ],
    objectives: [
      "Comprendre les mécanismes économiques contemporains",
      "Développer une capacité d'analyse des marchés et des politiques publiques",
      "Maîtriser les outils de la gestion d'entreprise",
      "Acquérir une méthodologie rigoureuse d'analyse et de synthèse"
    ],
    careers: [
      "Chargé d'études économiques",
      "Analyste financier junior",
      "Contrôleur de gestion assistant",
      "Conseiller en développement économique",
      "Assistant de direction"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Étude du dossier académique et entretien de motivation."
  },
  {
    id: "licence-marketing",
    title: "Marketing et Communication",
    level: "Licence",
    duration: "3 ans",
    description: "Formation aux techniques modernes de marketing, de communication et de développement commercial dans un environnement digitalisé.",
    iconName: "Book",
    modules: [
      "Marketing fondamental",
      "Communication d'entreprise",
      "Comportement du consommateur",
      "Marketing digital",
      "Techniques de vente",
      "Relations publiques",
      "Stratégie de marque",
      "Community management"
    ],
    objectives: [
      "Maîtriser les fondamentaux du marketing stratégique et opérationnel",
      "Développer des compétences en communication traditionnelle et digitale",
      "Comprendre les comportements des consommateurs",
      "Savoir élaborer et mettre en œuvre un plan marketing"
    ],
    careers: [
      "Chargé de communication",
      "Assistant marketing",
      "Community manager",
      "Chargé de clientèle",
      "Assistant chef de produit",
      "Responsable marketing digital junior"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Étude du dossier académique et entretien de motivation."
  },
  {
    id: "licence-socio",
    title: "Sociologie",
    level: "Licence",
    duration: "3 ans",
    description: "Étude des faits sociaux, de la structure sociale et des dynamiques relationnelles pour comprendre les comportements collectifs.",
    iconName: "Book",
    modules: [
      "Introduction à la sociologie",
      "Méthodes de recherche en sciences sociales",
      "Sociologie du travail",
      "Anthropologie sociale",
      "Sociologie politique",
      "Sociologie de l'éducation",
      "Sociologie de la famille",
      "Statistiques appliquées aux sciences sociales"
    ],
    objectives: [
      "Acquérir une connaissance approfondie des théories sociologiques",
      "Maîtriser les méthodes d'enquête qualitative et quantitative",
      "Développer une capacité d'analyse des phénomènes sociaux",
      "Comprendre les dynamiques sociales contemporaines"
    ],
    careers: [
      "Chargé d'études sociologiques",
      "Assistant de recherche",
      "Médiateur social",
      "Coordonnateur de projets sociaux",
      "Conseiller en développement social"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Étude du dossier académique et entretien de motivation."
  },
  {
    id: "licence-banque",
    title: "Banque, Assurance et Finance",
    level: "Licence",
    duration: "3 ans",
    description: "Formation spécialisée dans les métiers de la finance, de la banque et de l'assurance avec maîtrise des outils d'analyse financière.",
    iconName: "Book",
    modules: [
      "Économie monétaire",
      "Droit bancaire",
      "Produits d'assurance",
      "Mathématiques financières",
      "Gestion de portefeuille",
      "Marchés financiers",
      "Finance d'entreprise",
      "Fiscalité"
    ],
    objectives: [
      "Maîtriser les fondamentaux de la finance et des produits bancaires et d'assurance",
      "Comprendre le fonctionnement des marchés financiers",
      "Développer des compétences en analyse financière et en gestion des risques",
      "Connaître les aspects réglementaires du secteur financier"
    ],
    careers: [
      "Conseiller clientèle bancaire",
      "Chargé de clientèle particuliers",
      "Gestionnaire back-office",
      "Assistant analyste crédit",
      "Agent d'assurance",
      "Conseiller en produits d'épargne"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Étude du dossier académique et entretien de motivation."
  },
  {
    id: "licence-gestion-projet",
    title: "Gestion de Projets",
    level: "Licence",
    duration: "3 ans",
    description: "Formation aux méthodologies de gestion de projets, aux outils de pilotage et au management d'équipes pluridisciplinaires.",
    iconName: "Book",
    modules: [
      "Fondamentaux de la gestion de projet",
      "Planification et ordonnancement",
      "Gestion des ressources",
      "Outils informatiques de gestion de projet",
      "Management d'équipe",
      "Gestion des risques",
      "Qualité et certification",
      "Communication de projet"
    ],
    objectives: [
      "Maîtriser les méthodologies et outils de la gestion de projets",
      "Développer des compétences en leadership et en coordination d'équipe",
      "Savoir gérer un projet de sa conception à sa clôture",
      "Acquérir des techniques d'analyse et de résolution de problèmes complexes"
    ],
    careers: [
      "Assistant chef de projet",
      "Coordonnateur de projet junior",
      "Planificateur de projet",
      "Assistant PMO (Project Management Office)",
      "Consultant junior en organisation"
    ],
    admissionRequirements: "Baccalauréat ou équivalent. Étude du dossier académique et entretien de motivation."
  }
];

export const masterPrograms: ProgramType[] = [
  {
    id: "master-management",
    title: "Management des Organisations",
    level: "Master",
    duration: "2 ans",
    description: "Formation avancée en stratégie d'entreprise, leadership et prise de décision pour les futurs dirigeants et cadres supérieurs.",
    iconName: "GraduationCap",
    modules: [
      "Stratégie d'entreprise",
      "Leadership et management d'équipe",
      "Théorie des organisations",
      "Gestion du changement",
      "Business Intelligence",
      "Entrepreneuriat",
      "Éthique des affaires",
      "Management international"
    ],
    objectives: [
      "Développer une vision stratégique et globale de l'entreprise",
      "Renforcer les compétences en leadership et en prise de décision",
      "Maîtriser les outils avancés d'analyse et de pilotage",
      "Savoir gérer le changement et l'innovation en entreprise"
    ],
    careers: [
      "Cadre dirigeant",
      "Directeur opérationnel",
      "Consultant en management",
      "Responsable de département",
      "Chef de projet senior",
      "Entrepreneur"
    ],
    admissionRequirements: "Licence ou équivalent. Sélection sur dossier, tests et entretien. Expérience professionnelle valorisée."
  },
  {
    id: "master-finance",
    title: "Finance et Comptabilité",
    level: "Master",
    duration: "2 ans",
    description: "Maîtrise des outils d'analyse financière, de la gestion comptable avancée et des stratégies d'investissement.",
    iconName: "GraduationCap",
    modules: [
      "Comptabilité approfondie",
      "Audit financier",
      "Contrôle de gestion",
      "Finance d'entreprise avancée",
      "Fiscalité internationale",
      "Gestion de trésorerie",
      "Normes comptables internationales",
      "Fusion-acquisition"
    ],
    objectives: [
      "Maîtriser les techniques avancées de comptabilité et de finance",
      "Développer une expertise en analyse financière et en évaluation d'entreprise",
      "Comprendre les enjeux de la gouvernance financière",
      "Savoir élaborer et mettre en œuvre des stratégies financières"
    ],
    careers: [
      "Directeur financier",
      "Contrôleur de gestion",
      "Auditeur financier",
      "Analyste financier",
      "Expert-comptable (après stage professionnel)",
      "Conseiller en fusion-acquisition"
    ],
    admissionRequirements: "Licence en finance, comptabilité, gestion ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "master-marketing",
    title: "Marketing et Communication Digitale",
    level: "Master",
    duration: "2 ans",
    description: "Formation aux stratégies marketing avancées, à la communication multicanale et aux techniques de marketing digital.",
    iconName: "GraduationCap",
    modules: [
      "Stratégie marketing",
      "Marketing digital avancé",
      "E-commerce et modèles d'affaires numériques",
      "Social media management",
      "SEO/SEM avancé",
      "Data marketing",
      "Expérience utilisateur (UX)",
      "Gestion de marque"
    ],
    objectives: [
      "Développer une expertise en marketing stratégique et digital",
      "Maîtriser les outils d'analyse et de mesure de performance marketing",
      "Savoir concevoir et déployer des campagnes marketing omnicanales",
      "Comprendre les enjeux de la transformation digitale pour les marques"
    ],
    careers: [
      "Directeur marketing",
      "Chef de produit",
      "Responsable marketing digital",
      "Brand manager",
      "Consultant en stratégie digitale",
      "Directeur de la communication"
    ],
    admissionRequirements: "Licence en marketing, communication, commerce ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "master-economie",
    title: "Économie Appliquée",
    level: "Master",
    duration: "2 ans",
    description: "Analyse économique approfondie, modélisation économétrique et compréhension des enjeux macroéconomiques actuels.",
    iconName: "GraduationCap",
    modules: [
      "Macroéconomie avancée",
      "Économétrie appliquée",
      "Évaluation des politiques publiques",
      "Économie du développement",
      "Commerce international",
      "Finance internationale",
      "Économie des ressources naturelles",
      "Modélisation économique"
    ],
    objectives: [
      "Développer une expertise en analyse économique et économétrique",
      "Comprendre les enjeux économiques internationaux contemporains",
      "Maîtriser les méthodes quantitatives appliquées à l'économie",
      "Savoir évaluer l'impact des politiques économiques"
    ],
    careers: [
      "Économiste",
      "Chargé d'études économiques",
      "Analyste de marché",
      "Consultant en politiques publiques",
      "Chercheur en économie",
      "Chargé de mission dans les institutions internationales"
    ],
    admissionRequirements: "Licence en économie, mathématiques appliquées ou équivalent. Sélection sur dossier, tests et entretien."
  },
  {
    id: "master-droit",
    title: "Droit des Affaires",
    level: "Master",
    duration: "2 ans",
    description: "Formation approfondie en droit commercial, droit des sociétés et réglementation des affaires internationales.",
    iconName: "GraduationCap",
    modules: [
      "Droit des sociétés approfondi",
      "Droit des contrats d'affaires",
      "Droit fiscal des entreprises",
      "Droit de la concurrence",
      "Propriété intellectuelle",
      "Droit du commerce international",
      "Contentieux des affaires",
      "Droit des procédures collectives"
    ],
    objectives: [
      "Acquérir une expertise juridique solide en droit des affaires",
      "Maîtriser les aspects juridiques de la vie des entreprises",
      "Comprendre les implications juridiques des opérations commerciales",
      "Savoir anticiper et gérer les risques juridiques"
    ],
    careers: [
      "Juriste d'entreprise",
      "Avocat d'affaires (après formation complémentaire)",
      "Directeur juridique",
      "Consultant juridique",
      "Responsable conformité",
      "Expert en droit commercial international"
    ],
    admissionRequirements: "Licence en droit ou équivalent. Sélection sur dossier, tests et entretien."
  }
];

export const certificationPrograms: ProgramType[] = [
  {
    id: "cert-management",
    title: "Management et Leadership",
    level: "Certification",
    duration: "6 mois",
    description: "Développement des compétences de leadership, gestion d'équipe et conduite du changement pour cadres et dirigeants.",
    iconName: "BookOpen",
    modules: [
      "Leadership situationnel",
      "Gestion des talents",
      "Communication managériale",
      "Résolution de conflits",
      "Gestion du changement",
      "Performance d'équipe",
      "Intelligence émotionnelle"
    ],
    objectives: [
      "Renforcer ses compétences en leadership et en management d'équipe",
      "Développer une communication efficace et motivante",
      "Savoir gérer les situations difficiles et les conflits",
      "Maîtriser les techniques de conduite du changement"
    ],
    careers: [
      "Cette certification s'adresse aux professionnels en poste souhaitant renforcer leurs compétences managériales"
    ],
    admissionRequirements: "Expérience professionnelle de 3 ans minimum, de préférence en position d'encadrement. Entretien de motivation."
  },
  {
    id: "cert-marketing",
    title: "Marketing Digital",
    level: "Certification",
    duration: "4 mois",
    description: "Formation aux outils et stratégies de marketing numérique, réseaux sociaux et référencement.",
    iconName: "BookOpen",
    modules: [
      "Fondamentaux du marketing digital",
      "Stratégie de contenu",
      "SEO/SEM",
      "Social media marketing",
      "E-mail marketing",
      "Analyse de données marketing",
      "Publicité digitale"
    ],
    objectives: [
      "Maîtriser les différents leviers du marketing digital",
      "Savoir élaborer une stratégie de présence en ligne cohérente",
      "Développer des compétences en analyse de données marketing",
      "Optimiser la visibilité et la performance digitale"
    ],
    careers: [
      "Cette certification s'adresse aux professionnels du marketing traditionnel souhaitant se spécialiser dans le digital, aux entrepreneurs et aux responsables communication"
    ],
    admissionRequirements: "Connaissance de base en marketing. Sélection sur entretien de motivation."
  },
  {
    id: "cert-gestion-projet",
    title: "Gestion de Projets",
    level: "Certification",
    duration: "3 mois",
    description: "Méthodologies de gestion de projet (PRINCE2, PMI), outils de planification et suivi de projet.",
    iconName: "BookOpen",
    modules: [
      "Fondamentaux de la gestion de projet",
      "Méthodologie PRINCE2",
      "Approche PMI",
      "Outils de planification",
      "Gestion des parties prenantes",
      "Gestion des risques projet",
      "Reporting et tableaux de bord"
    ],
    objectives: [
      "Maîtriser les méthodologies reconnues de gestion de projet",
      "Savoir utiliser les outils de planification et de suivi",
      "Développer des compétences en communication de projet",
      "Être capable de gérer efficacement les ressources et les risques"
    ],
    careers: [
      "Cette certification s'adresse aux professionnels impliqués dans la gestion de projets ou souhaitant évoluer vers ce domaine"
    ],
    admissionRequirements: "Expérience professionnelle de 2 ans minimum. Sélection sur entretien de motivation."
  },
  {
    id: "cert-finance",
    title: "Analyse Financière",
    level: "Certification",
    duration: "4 mois",
    description: "Techniques d'analyse financière, évaluation d'entreprise et gestion de portefeuille d'investissement.",
    iconName: "BookOpen",
    modules: [
      "Analyse des états financiers",
      "Évaluation d'entreprise",
      "Gestion de portefeuille",
      "Analyse des investissements",
      "Modélisation financière",
      "Gestion des risques financiers",
      "Finance d'entreprise"
    ],
    objectives: [
      "Maîtriser les techniques d'analyse et de diagnostic financier",
      "Savoir évaluer la performance financière d'une entreprise",
      "Développer des compétences en modélisation financière",
      "Comprendre les mécanismes d'évaluation et d'investissement"
    ],
    careers: [
      "Cette certification s'adresse aux professionnels de la finance, de la comptabilité, aux managers et entrepreneurs souhaitant renforcer leurs compétences financières"
    ],
    admissionRequirements: "Connaissance de base en finance et comptabilité. Sélection sur entretien de motivation."
  }
];

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
