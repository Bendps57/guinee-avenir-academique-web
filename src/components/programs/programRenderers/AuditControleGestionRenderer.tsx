
import ProgramContent from "../ProgramContent";

const AuditControleGestionRenderer = () => {
  const programData = {
    // Hero
    title: "Master Professionnel en Audit et Contrôle de Gestion",
    subtitle: "Formation rigoureuse alliant théorie et pratique",
    description: "Programme conçu pour répondre aux besoins croissants de professionnels qualifiés dans les domaines de l'audit et du contrôle de gestion. Formation d'excellence pour former des cadres compétents en analyse financière, gestion des risques et pilotage de la performance.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    
    // Introduction
    introductionParagraphs: [
      "L'environnement économique et financier actuel est marqué par une complexité croissante due à la mondialisation, l'évolution rapide des technologies, et des exigences réglementaires de plus en plus strictes. Les entreprises, quelles que soient leur taille et leur domaine d'activité, doivent assurer une gestion efficace de leurs ressources, garantir la transparence de leurs informations financières, et répondre aux attentes des parties prenantes en matière de performance et de responsabilité.",
      "Dans ce contexte, les métiers de l'audit et du contrôle de gestion jouent un rôle central. Ils permettent aux organisations de piloter leur performance, de maîtriser leurs risques et de s'adapter aux mutations de leur environnement. Ces fonctions sont également essentielles pour répondre aux enjeux liés à la gouvernance, à la conformité et à la compétitivité.",
      "Ce master s'appuie sur une pédagogie alliant théorie et pratique, avec des cours dispensés par des cadres académiques et professionnels, des études de cas réels, des stages, et des projets de recherche appliquée.",
      "Le programme répond aux attentes des apprenants souhaitant acquérir une expertise et des compétences transversales en finance, management, et stratégie, tout en s'adaptant à l'évolution des métiers, en intégrant des compétences en digitalisation, analyse de données (big data) et gestion des risques."
    ],
    
    // Skills
    skills: [
      "Analyser et interpréter les données financières, comptables et non financières pour orienter la prise de décision stratégique",
      "Mettre en place et piloter des systèmes de contrôle interne garantissant la fiabilité des processus et des informations",
      "Évaluer et optimiser la performance des organisations, en intégrant les dimensions économique, sociale et environnementale",
      "Accompagner les entreprises dans leur conformité réglementaire, notamment face aux normes internationales d'audit et de reporting",
      "Maîtriser les techniques de contrôle budgétaire et de reporting",
      "Utiliser des outils informatiques spécialisés (ERP, logiciels de gestion, Excel avancé)",
      "Identifier les risques financiers, opérationnels et stratégiques",
      "Élaborer des plans d'action pour minimiser ces risques",
      "Développer et suivre des tableaux de bord pertinents",
      "Comprendre les normes internationales (IFRS, SOX) et leur impact sur les pratiques",
      "Rédiger des rapports clairs et structurés à destination de différents publics",
      "Présenter des résultats de manière convaincante et pédagogique"
    ],
    
    // Curriculum
    curriculum: {
      year1: {
        description: "La première année établit les fondements techniques et analytiques nécessaires à la maîtrise de l'audit et du contrôle de gestion.",
        teachingHours: 300,
        personalWorkHours: 450,
        courses: [
          {
            course1: { name: "Comptabilité financière avancée", credits: 6 },
            course2: { name: "Audit interne et externe", credits: 6 }
          },
          {
            course1: { name: "Systèmes d'information de gestion", credits: 6 },
            course2: { name: "Normes comptables et réglementations financières", credits: 6 }
          },
          {
            course1: { name: "Gestion financière", credits: 6 },
            course2: { name: "", credits: 0 }
          }
        ]
      },
      year2: {
        description: "La deuxième année approfondit les aspects stratégiques et pratiques de l'audit et du contrôle de gestion.",
        teachingHours: 280,
        personalWorkHours: 420,
        courses: [
          {
            course1: { name: "Gestion des risques", credits: 6 },
            course2: { name: "Fiscalité et réglementation des entreprises", credits: 6 }
          },
          {
            course1: { name: "Gestion de la performance", credits: 6 },
            course2: { name: "Audit financier et comptable", credits: 6 }
          },
          {
            course1: { name: "Contrôle de gestion", credits: 6 },
            course2: { name: "", credits: 0 }
          }
        ]
      },
      year3: {
        description: "La troisième année se concentre sur la recherche appliquée et l'expérience professionnelle.",
        teachingHours: 120,
        personalWorkHours: 600,
        courses: [
          {
            course1: { name: "Méthodologie de recherche", credits: 6 },
            course2: { name: "Logiciels d'analyses spécialisés", credits: 6 }
          },
          {
            course1: { name: "Système d'information et de communication", credits: 3 },
            course2: { name: "Anglais des affaires", credits: 6 }
          },
          {
            course1: { name: "Stage professionnel", credits: 9 },
            course2: { name: "", credits: 0 }
          },
          {
            course1: { name: "Techniques de communication professionnelle", credits: 6 },
            course2: { name: "Rédaction et soutenance du mémoire", credits: 24 }
          }
        ]
      }
    },
    
    // Faculty and Internship
    facultyText: "L'équipe pédagogique combine des enseignants-chercheurs qualifiés et des professionnels expérimentés du secteur. Nos intervenants incluent des auditeurs certifiés, des contrôleurs de gestion, des directeurs financiers, et des consultants spécialisés dans l'audit et le contrôle.",
    internshipText: "Un stage professionnel obligatoire de 4 à 6 mois permet aux étudiants d'appliquer leurs connaissances dans un environnement professionnel réel. Les stages peuvent être effectués dans des cabinets d'audit, entreprises, institutions publiques ou organisations à but non lucratif.",
    
    // Seminars
    seminarsDescription: "Des séminaires thématiques animés par des experts permettent d'approfondir les sujets d'actualité en audit et contrôle de gestion.",
    seminars: [
      "Audit et transformation numérique (big data, IA, blockchain)",
      "Audits environnementaux et sociaux (ESG)",
      "Gestion des fraudes et cybersécurité",
      "Business Intelligence et tableaux de bord",
      "Normes IFRS et évolutions comptables",
      "Audit assisté par ordinateur (AAO)",
      "Gouvernance d'entreprise et éthique",
      "Contrôle de gestion stratégique"
    ],
    
    // Career and Education
    careers: [
      "Auditeur interne ou externe dans des cabinets spécialisés (KPMG, EY, Deloitte, PwC)",
      "Contrôleur de gestion en entreprise",
      "Directeur administratif et financier (DAF)",
      "Consultant en audit et contrôle",
      "Risk manager et spécialiste en gestion des risques",
      "Responsable reporting financier",
      "Analyste financier",
      "Responsable de la performance organisationnelle",
      "Consultant en stratégie et performance",
      "Chef de projet financier et transformation"
    ],
    educationDescription: "Les diplômés peuvent poursuivre leurs études vers un doctorat ou obtenir des certifications professionnelles reconnues internationalement.",
    educationOptions: [
      "Doctorat en Sciences de Gestion",
      "Certification CPA (Certified Public Accountant)",
      "Certification CIA (Certified Internal Auditor)",
      "Certification CMA (Certified Management Accountant)",
      "Diplôme d'expertise comptable (DEC, DSCG)",
      "Certification CFA (Chartered Financial Analyst)"
    ],
    
    // Admission Requirements
    licence1Requirements: [
      "Licence en gestion, comptabilité, finance, économie ou équivalent",
      "Excellent dossier académique avec mention",
      "Expérience professionnelle appréciée",
      "Test d'admission écrit (comptabilité, finance, analyse)",
      "Entretien de motivation devant un jury",
      "Projet professionnel cohérent avec les objectifs du master"
    ],
    licence2Text: "L'admission en deuxième année est possible pour les titulaires d'un Master 1 en gestion, comptabilité ou finance, sous réserve d'équivalences et de l'avis du comité pédagogique.",
    licence3Text: "Possibilité d'admission directe en stage pour les professionnels justifiant d'au moins 5 années d'expérience dans les domaines de l'audit ou du contrôle de gestion, après validation des acquis professionnels.",
    
    // Call to Action
    ctaTitle: "Rejoignez l'excellence en audit et contrôle de gestion",
    ctaDescription: "Intégrez un programme de formation d'élite qui forme les futurs experts en audit et contrôle de gestion. Bénéficiez d'une formation pratique reconnue par les professionnels du secteur et ouvrant sur des carrières internationales."
  };

  return <ProgramContent {...programData} />;
};

export default AuditControleGestionRenderer;
