
import ProgramContent from "../ProgramContent";

const AdministrationFiscaleRenderer = () => {
  const programData = {
    // Hero
    title: "Master Professionnel en Administration Fiscale",
    subtitle: "Formation de haut niveau",
    description: "Programme rigoureux et professionnalisant visant à former des cadres compétents, éthiques et aptes à exercer des fonctions de responsabilité au sein des administrations fiscales, des entreprises, des cabinets de conseil juridique et fiscal.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    
    // Introduction
    introductionParagraphs: [
      "Le Master Professionnel en Administration Fiscale proposé par l'Institut Universitaire des Hautes Études de Guinée (IUHEG) est un programme de formation de haut niveau conçu pour répondre aux besoins croissants en compétences spécialisées dans le domaine de la fiscalité.",
      "Ce programme rigoureux et professionnalisant vise à former des cadres compétents, éthiques et aptes à exercer des fonctions de responsabilité au sein des administrations fiscales, des entreprises, des cabinets de conseil juridique et fiscal, ainsi que dans d'autres organisations publiques et privées.",
      "Le programme se distingue par une approche pédagogique combinant des enseignements théoriques approfondis avec des mises en situation pratiques, des études de cas concrets et l'intervention de professionnels reconnus du secteur fiscal.",
      "Il met un accent particulier sur la compréhension des enjeux fiscaux nationaux et internationaux, la maîtrise des procédures fiscales, la capacité d'analyse et de résolution de problèmes complexes, ainsi que sur le développement des compétences managériales et de communication indispensables à l'exercice de fonctions d'encadrement."
    ],
    
    // Skills
    skills: [
      "Comprendre et appliquer la législation fiscale guinéenne et les conventions fiscales internationales",
      "Analyser et interpréter les textes fiscaux et la jurisprudence",
      "Établir les déclarations fiscales et maîtriser les procédures de paiement des impôts et taxes",
      "Réaliser des audits fiscaux et des contrôles fiscaux",
      "Gérer les contentieux fiscaux et représenter les contribuables devant les instances compétentes",
      "Conseiller les entreprises et les particuliers en matière de planification fiscale et d'optimisation fiscale légale",
      "Utiliser les outils informatiques et les logiciels spécialisés en matière fiscale",
      "Rédiger des rapports d'analyse fiscale clairs et précis",
      "Communiquer efficacement à l'oral et à l'écrit sur des questions fiscales complexes",
      "Travailler en équipe et encadrer des collaborateurs",
      "Adopter une démarche éthique et responsable dans l'exercice de leurs fonctions"
    ],
    
    // Curriculum
    curriculum: {
      year1: {
        description: "La première année pose les fondements théoriques et juridiques nécessaires à la compréhension des mécanismes fiscaux.",
        teachingHours: 320,
        personalWorkHours: 400,
        courses: [
          {
            course1: { name: "Introduction au Droit et Droit Civil", credits: 6 },
            course2: { name: "Principes d'Économie Générale", credits: 6 }
          },
          {
            course1: { name: "Droit Fiscal Général", credits: 6 },
            course2: { name: "Procédure Fiscale et Contentieux Fiscal", credits: 6 }
          },
          {
            course1: { name: "Impôt sur les Sociétés (IS)", credits: 6 },
            course2: { name: "Taxe sur la Valeur Ajoutée (TVA)", credits: 6 }
          },
          {
            course1: { name: "Autres Impôts et Taxes sur les Entreprises", credits: 4 },
            course2: { name: "IRPP", credits: 6 }
          },
          {
            course1: { name: "Fiscalité du Patrimoine et Mutations", credits: 4 },
            course2: { name: "", credits: 0 }
          }
        ]
      },
      year2: {
        description: "La deuxième année approfondit les aspects pratiques et internationaux de la fiscalité, avec une spécialisation en gestion fiscale.",
        teachingHours: 280,
        personalWorkHours: 360,
        courses: [
          {
            course1: { name: "Planification et Gestion du Risque Fiscal", credits: 4 },
            course2: { name: "Informatique et Gestion Fiscale", credits: 4 }
          },
          {
            course1: { name: "Principes de Fiscalité Internationale", credits: 4 },
            course2: { name: "Droit Fiscal Comparé", credits: 4 }
          },
          {
            course1: { name: "Économie Publique", credits: 4 },
            course2: { name: "Finances Publiques et Gestion Budgétaire", credits: 4 }
          },
          {
            course1: { name: "Méthodologie de la Recherche en Fiscalité", credits: 4 },
            course2: { name: "Stage Professionnel", credits: 8 }
          },
          {
            course1: { name: "Mémoire de fin d'études", credits: 12 },
            course2: { name: "", credits: 0 }
          }
        ]
      },
      year3: {
        description: "Stage professionnel obligatoire et rédaction du mémoire de fin d'études sous supervision académique.",
        teachingHours: 120,
        personalWorkHours: 480,
        courses: [
          {
            course1: { name: "Stage professionnel en entreprise", credits: 15 },
            course2: { name: "Séminaires professionnels", credits: 5 }
          },
          {
            course1: { name: "Rédaction du mémoire", credits: 15 },
            course2: { name: "Soutenance", credits: 5 }
          },
          {
            course1: { name: "Projet de recherche appliquée", credits: 10 },
            course2: { name: "Conférences spécialisées", credits: 10 }
          }
        ]
      }
    },
    
    // Faculty and Internship
    facultyText: "L'équipe pédagogique est composée d'enseignants-chercheurs qualifiés et de professionnels reconnus du secteur fiscal. Nos intervenants incluent des inspecteurs des impôts, des conseillers fiscaux, des avocats spécialisés et des experts internationaux en fiscalité.",
    internshipText: "Un stage professionnel obligatoire de 6 mois en fin de formation offre aux étudiants l'opportunité d'appliquer leurs acquis théoriques dans un environnement professionnel réel et de faciliter leur insertion sur le marché du travail. Les stages peuvent être effectués au sein de l'administration fiscale, d'entreprises ou de cabinets de conseil.",
    
    // Seminars
    seminarsDescription: "Des séminaires thématiques animés par des experts permettent d'approfondir des sujets d'actualité fiscale.",
    seminars: [
      "Digitalisation de l'administration fiscale",
      "Lutte contre l'évasion fiscale internationale",
      "Fiscalité minière en Guinée",
      "Conventions fiscales internationales",
      "Éthique et déontologie fiscale",
      "Contrôle fiscal moderne",
      "Contentieux fiscal complexe",
      "Prix de transfert"
    ],
    
    // Career and Education
    careers: [
      "Administration Fiscale : Inspecteur des impôts, Contrôleur des impôts, Chef de service fiscal",
      "Entreprises : Responsable fiscal, Directeur fiscal, Chef comptable et fiscal",
      "Cabinets de Conseil : Consultant fiscal, Juriste fiscaliste, Avocat fiscaliste",
      "Organisations Internationales : Experts en fiscalité",
      "Secteur Bancaire et Financier : Spécialiste en fiscalité",
      "Enseignement et Recherche : Enseignants-chercheurs en droit fiscal"
    ],
    educationDescription: "Les diplômés peuvent poursuivre leurs études vers un doctorat en sciences économiques ou juridiques pour une carrière dans l'enseignement supérieur et la recherche.",
    educationOptions: [
      "Doctorat en Sciences Économiques",
      "Doctorat en Droit",
      "Formations spécialisées en fiscalité internationale",
      "Certifications professionnelles en audit fiscal"
    ],
    
    // Admission Requirements
    licence1Requirements: [
      "Licence en droit, économie, gestion ou équivalent avec mention",
      "Excellent dossier académique",
      "Test d'admission écrit (droit, économie, culture générale)",
      "Entretien de motivation devant un jury",
      "Lettre de motivation détaillée",
      "Projet professionnel défini"
    ],
    licence2Text: "L'admission en deuxième année est possible pour les titulaires d'un Master 1 en droit fiscal, économie ou gestion, sous réserve d'équivalences et de l'avis du comité pédagogique.",
    licence3Text: "Possibilité d'admission directe en stage pour les professionnels justifiant d'au moins 5 années d'expérience dans le domaine fiscal, après validation des acquis professionnels.",
    
    // Call to Action
    ctaTitle: "Rejoignez l'excellence en administration fiscale",
    ctaDescription: "Intégrez un programme d'élite qui forme les futurs leaders de l'administration fiscale guinéenne. Bénéficiez d'une formation de qualité internationale reconnue par les professionnels du secteur."
  };

  return <ProgramContent {...programData} />;
};

export default AdministrationFiscaleRenderer;
