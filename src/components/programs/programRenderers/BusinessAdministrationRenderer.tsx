
import React from "react";
import ProgramContent from "../ProgramContent";

const BusinessAdministrationRenderer = () => {
  return (
    <ProgramContent
      title="Business Administration"
      subtitle="Licence en Sciences Économiques"
      description="Formation d'excellence pour maîtriser les principes fondamentaux de la gestion d'entreprise"
      imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      
      introductionParagraphs={[
        "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants pasionnés et Une licence en administration des affaires est un programme de premier cycle universitaire conçu pour former les étudiants aux principes fondamentaux de la gestion d'entreprise.",
        "Le programme en Administration des Affaires est conçu pour fournir aux étudiants les connaissances fondamentales nécessaires à la gestion d'entreprises. Il couvre diverses disciplines de la gestion et vise à développer chez les étudiants la capacité d'appliquer ces connaissances en contexte professionnel. De plus, l'accent est mis sur le développement de compétences managériales transversales telles que le travail en équipe, la prise d'initiative, l'esprit d'analyse et de synthèse, la pensée critique, ainsi que la capacité à hiérarchiser les priorités."
      ]}
      
      skills={[
        "Gestion et leadership",
        "Compréhension des concepts financiers",
        "Compétences en marketing et en vente",
        "Gestion des ressources humaines",
        "Analyse des données et prise de décision",
        "Compréhension de la législation et de la réglementation des affaires",
        "Compétences en communication et en négociation",
        "Planification stratégique et résolution de problèmes"
      ]}
      
      curriculum={{
        year1: {
          description: "Au cours de la première année, l'objectif est de poser des bases solides en gestion d'entreprise. Les étudiants acquièrent une compréhension des principes fondamentaux du marketing, de la comptabilité, de la finance, de la gestion des ressources humaines et de la gestion d'entreprise en général. Les stages en entreprise offrent une expérience pratique précieuse et permettent aux étudiants d'appliquer leurs connaissances dans un contexte professionnel. Ces semestres préparent les étudiants à des cours plus avancés et à des rôles plus spécialisés dans le domaine de la Business Administration.",
          teachingHours: 305,
          personalWorkHours: 105,
          courses: [
            { course1: { name: "Economie Générale", credits: 6 }, course2: { name: "Finances Publiques", credits: 6 } },
            { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Méthodes Statistiques", credits: 6 } },
            { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Macroéconomie", credits: 6 } },
            { course1: { name: "Géographie Economique", credits: 6 }, course2: { name: "Droit Civil et administratif", credits: 6 } },
            { course1: { name: "Mathématiques", credits: 6 }, course2: { name: "Histoire des faits et de la pensée économiques", credits: 6 } }
          ]
        },
        year2: {
          description: "Au cours de la deuxième année, le programme vise à préparer les étudiants à des rôles plus avancés en gestion d'entreprise. Vous développerez des compétences plus avancées en marketing, en comptabilité de gestion, en finance d'entreprise, en gestion des opérations, en gestion de projet, en gestion des ressources humaines, et en stratégie d'entreprise. Ces compétences sont essentielles pour des postes de gestionnaire, de consultant en gestion, d'analyste d'entreprise, ou pour la poursuite d'études supérieures en Business Administration. Ces semestres vous permettront d'acquérir une compréhension plus approfondie des concepts et des pratiques liés à la gestion d'entreprise.",
          teachingHours: 345,
          personalWorkHours: 105,
          courses: [
            { course1: { name: "Théorie et Politique Monétaire", credits: 6 }, course2: { name: "Comptabilité Nationale", credits: 6 } },
            { course1: { name: "Informatique et Système d'Information", credits: 6 }, course2: { name: "Sociologie Générale", credits: 6 } },
            { course1: { name: "Programmation Linéaire", credits: 6 }, course2: { name: "Fiscalité générale 1 ou Economie Publique", credits: 6 } },
            { course1: { name: "Comptabilité Analytique d'Exploitation", credits: 6 }, course2: { name: "Eléments d'économie contemporaine ou Environnement économique et marchés financiers", credits: 6 } },
            { course1: { name: "Analyse et Evaluation Economique des Projets", credits: 6 }, course2: { name: "Méthodologie de la Recherche ou Economie du travail", credits: 6 } }
          ]
        },
        year3: {
          description: "La dernière année vous permet de vous spécialiser davantage en Business Administration et de préparer votre transition vers le monde professionnel. Vous développerez une compréhension plus approfondie des aspects avancés du marketing, de la finance, de la stratégie d'entreprise, de la gestion internationale, et de la gestion des ressources humaines. Les projets de fin d'études et les stages en entreprise fournissent une expérience pratique significative, tout en vous permettant de démontrer votre expertise. Ces semestres vous préparent également à poursuivre des études supérieures en gestion d'entreprise, en MBA (Master of Business Administration) ou dans d'autres domaines connexes.",
          teachingHours: 360,
          personalWorkHours: 90,
          courses: [
            { course1: { name: "Marketing", credits: 6 }, course2: { name: "Comptabilité des Sociétés", credits: 6 } },
            { course1: { name: "Contrôle de gestion", credits: 6 }, course2: { name: "Fiscalité d'Entreprise", credits: 6 } },
            { course1: { name: "Droit des Affaires", credits: 6 }, course2: { name: "Economie des ressources humaines ou Economie Financière", credits: 6 } },
            { course1: { name: "Gestion et Analyse Financière", credits: 6 }, course2: { name: "Econométrie ou Recherche Opérationnelle", credits: 6 } },
            { course1: { name: "Comptabilité Analytique d'Exploitation", credits: 6 }, course2: { name: "Gestion des opérations ou Analyse des valeurs mobilières", credits: 6 } }
          ]
        }
      }}
      
      facultyText="Nos enseignants, qu'ils soient africains ou européens, sont sélectionnés parmi les experts les plus qualifiés de leur domaine. Notre programme de formation, bien qu'il vous permette de comprendre en profondeur les aspects théoriques sous-jacents aux techniques de gestion de données, est principalement axé sur la pratique, garantissant ainsi une employabilité accrue."
      
      internshipText="La formation en gestion transport et logistique est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
      
      seminars={[
        "Leadership et Gestion de l'Équipe",
        "Marketing Stratégique",
        "Gestion Stratégique",
        "Gestion de Projet",
        "Négociation d'Affaires",
        "Entrepreneuriat et Création d'Entreprise",
        "Éthique des Affaires et Responsabilité Sociale des Entreprises (RSE)"
      ]}
      
      seminarsDescription="Les séminaires sont souvent interactifs, avec des discussions, des exercices pratiques, des études de cas et des projets. Ils visent à préparer les étudiants à des rôles plus spécialisés dans le marketing international et le commerce international, ainsi qu'à les tenir informés des dernières tendances et des meilleures pratiques du secteur. Les séminaires offrent également l'occasion de travailler sur des projets concrets et de mettre en application les compétences acquises dans un contexte professionnel."
      
      careers={[
        "Gestionnaire",
        "Analyste financier",
        "Spécialiste en marketing",
        "Consultant en gestion",
        "Entrepreneur",
        "Analyste des données",
        "Gestionnaire des ressources humaines"
      ]}
      
      educationDescription="Après avoir obtenu un diplôme en administration des affaires (BBA), de nombreuses possibilités de poursuite d'études s'offrent à vous si vous souhaitez approfondir vos compétences et vos connaissances ou vous spécialiser dans un domaine particulier."
      
      educationOptions={[
        "Master en Administration des Affaires (MBA)",
        "Master en Finance",
        "Master en Marketing",
        "Doctorat en Administration des Affaires (DBA)"
      ]}
      
      licence1Requirements={[
        "Avoir obtenu le diplôme du baccalauréat.",
        "Avoir une aisance en mathématiques."
      ]}
      
      licence2Text="Il convient de valider les semestres 1 et 2 de la première année, de posséder des connaissances solides en économie et d'être diplômé d'une école ou d'une université respectant le système LMD."
      
      licence3Text="Il est requis d'être en possession d'un diplôme de niveau Bac+2 en sciences ou d'un équivalent. Il est également nécessaire de valider l'ensemble des crédits de la première et de la deuxième année. En outre, il est impératif d'être issu d'une école ou d'une université respectant le système LMD."
      
      ctaTitle="Prêt à vous lancer dans l'aventure ?"
      ctaDescription="Rejoignez notre programme de Business Administration et développez les compétences nécessaires pour réussir dans le monde des affaires."
    />
  );
};

export default BusinessAdministrationRenderer;
