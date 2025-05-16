import React from "react";
import ProgramContent from "./ProgramContent";

interface SpecialProgramRendererProps {
  programId: string;
}

const SpecialProgramRenderer = ({ programId }: SpecialProgramRendererProps) => {
  // Business Administration
  if (programId === "business-administration") {
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
  }

  // Marketing International
  if (programId === "marketing-commerce-international") {
    return (
      <ProgramContent
        title="Marketing et Commerce International"
        subtitle="Licence en Sciences Économiques"
        description="Formation d'excellence pour maîtriser les principes du marketing international et du commerce mondial"
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        
        introductionParagraphs={[
          "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La licence en marketing et commerce international prépare les diplômés à travailler dans des entreprises multinationales, des agences de marketing, des organismes gouvernementaux liés au commerce et à occuper divers postes liés au commerce international. La maîtrise des langues étrangères et la compréhension des marchés mondiaux sont des atouts importants dans ce domaine.",
          "Ce programme offre aux étudiants une solide compréhension des principes du marketing, des techniques de vente, des stratégies d'expansion internationale et des compétences nécessaires pour réussir dans un environnement commercial mondial. Il prépare les étudiants à évoluer dans un environnement commercial mondial en constante évolution, où l'expertise en marketing et commerce international est de plus en plus précieuse."
        ]}
        
        skills={[
          "Compréhension des principes du marketing et de la vente.",
          "Connaissance des concepts clés du commerce international.",
          "Capacité à élaborer des stratégies de marketing pour des marchés internationaux.",
          "Compétences en gestion de la chaîne d'approvisionnement internationale.",
          "Compréhension des enjeux économiques mondiaux.",
          "Maîtrise des langues étrangères pour la communication internationale."
        ]}
        
        curriculum={{
          year1: {
            description: "Au cours de la première année, l'objectif est de poser des bases solides en marketing et commerce international. Les étudiants acquièrent une compréhension des principes fondamentaux du marketing, de la recherche de marché, de la gestion de produits et des aspects juridiques du commerce international. Les compétences en communication marketing et en gestion de la chaîne d'approvisionnement sont également développées. Ces semestres préparent les étudiants à des cours plus avancés et à des stages en entreprise dans les semestres suivants, où ils appliqueront leurs connaissances dans un contexte professionnel.",
            teachingHours: 375,
            personalWorkHours: 60,
            courses: [
              { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Macroéconomie", credits: 6 } },
              { course1: { name: "Mathématiques", credits: 6 }, course2: { name: "Statistiques descriptive", credits: 6 } },
              { course1: { name: "Contexte éco & social", credits: 6 }, course2: { name: "Hist. Faits éco. & soc", credits: 6 } },
              { course1: { name: "Economie générale", credits: 6 }, course2: { name: "Comptabilité des Sociétés Commerciales", credits: 6 } },
              { course1: { name: "Comptabilité générale", credits: 6 }, course2: { name: "Droit civil et administratif", credits: 6 } }
            ]
          },
          year2: {
            description: "Au cours de la deuxième année, le programme vise à approfondir la compréhension des étudiants des aspects avancés du marketing international. Les compétences en marketing international, en négociation internationale, en gestion de projets internationaux et en management interculturel sont renforcées. Les stages en entreprise à l'étranger offrent une expérience pratique précieuse, tandis que les projets de marketing international vous permettent d'appliquer vos compétences dans des contextes du monde réel. Ces semestres vous préparent à des rôles plus spécialisés dans le marketing et le commerce international, ainsi qu'à des carrières dans des entreprises multinationales, des agences de marketing international, le commerce international et d'autres domaines liés au commerce mondial.",
            teachingHours: 420,
            personalWorkHours: 30,
            courses: [
              { course1: { name: "Recherche opérationnelle", credits: 6 }, course2: { name: "Entrepreneurship", credits: 6 } },
              { course1: { name: "Comptabilité analytique d'exploitation", credits: 6 }, course2: { name: "Gestion et analyse financière", credits: 6 } },
              { course1: { name: "Droit des affaires", credits: 6 }, course2: { name: "Economie et Commerce International", credits: 6 } },
              { course1: { name: "Gestion des opérations", credits: 6 }, course2: { name: "Introduction à la gestion des ressources humaines", credits: 6 } },
              { course1: { name: "Marketing", credits: 6 }, course2: { name: "Management", credits: 6 } }
            ]
          },
          year3: {
            description: "La dernière année vous donnent l'occasion de vous spécialiser davantage dans un domaine particulier du marketing international et du commerce international. Le stage en entreprise vous permet de mettre en pratique ce que vous avez appris, d'acquérir de l'expérience professionnelle et de développer un réseau professionnel. Le projet de fin d'études démontre votre maîtrise des concepts et des compétences du marketing international. En fin de compte, ces semestres vous préparent à entrer sur le marché du travail en tant que professionnel du marketing international, du commerce international, de la gestion de produits à l'échelle mondiale ou dans d'autres domaines liés au commerce international. Vous pourriez occuper des postes de spécialiste du marketing international, de gestionnaire de projet, de consultant en commerce international, de responsable de la chaîne d'approvisionnement internationale, et bien plus encore.",
            teachingHours: 435,
            personalWorkHours: 15,
            courses: [
              { course1: { name: "Stratégie de gestion", credits: 6 }, course2: { name: "Publicité ou circuit de Distribution", credits: 6 } },
              { course1: { name: "Gestion PME/PMI", credits: 6 }, course2: { name: "Promotion des ventes ou gestion des ventes", credits: 6 } },
              { course1: { name: "Méthode quantitatives en Marketing", credits: 6 }, course2: { name: "Séminaire en marketing ou comportement organisationnel", credits: 6 } },
              { course1: { name: "Marketing international", credits: 6 }, course2: { name: "Recherche en Marketing", credits: 6 } },
              { course1: { name: "Marketing de service", credits: 6 }, course2: { name: "Stratégie de Marketing", credits: 6 } }
            ]
          }
        }}
        
        facultyText="Nos enseignants, qu'ils soient africains ou européens, sont sélectionnés parmi les experts les plus qualifiés de leur domaine. Notre programme de formation, bien qu'il vous permette de comprendre en profondeur les aspects théoriques sous-jacents aux techniques de gestion de données, est principalement axé sur la pratique, garantissant ainsi une employabilité accrue."
        
        internshipText="La formation en gestion transport et logistique est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
        
        seminars={[
          "Négociation Internationale",
          "Gestion de la Chaîne d'Approvisionnement Internationale",
          "Marketing Numérique International",
          "Stratégies Marketing Internationales",
          "Étude de Cas en Commerce International",
          "Gestion de Projets Internationaux",
          "Responsabilité Sociale des Entreprises dans un Contexte International",
          "Langues Étrangères en Affaires Internationales"
        ]}
        
        seminarsDescription="Les séminaires sont souvent interactifs, avec des discussions, des exercices pratiques, des études de cas et des projets. Ils visent à préparer les étudiants à des rôles plus spécialisés dans le marketing international et le commerce international, ainsi qu'à les tenir informés des dernières tendances et des meilleures pratiques du secteur. Les séminaires offrent également l'occasion de travailler sur des projets concrets et de mettre en application les compétences acquises dans un contexte professionnel."
        
        careers={[
          "Responsable Marketing International",
          "Responsable des Ventes Internationales",
          "Gestionnaire de la Chaîne d'Approvisionnement Internationale",
          "Analyste en Commerce International",
          "Consultant en Marketing International",
          "Gestionnaire de Produit International"
        ]}
        
        educationDescription="Après avoir obtenu une licence en marketing et commerce international, vous avez plusieurs options pour la poursuite de vos études, en fonction de vos objectifs de carrière et de vos intérêts."
        
        educationOptions={[
          "Master en Marketing International",
          "Master en Commerce International",
          "Master en Gestion",
          "Master en Administration des Affaires (MBA)",
          "Master en Marketing Digital",
          "Ph.D. en Marketing ou Commerce International",
          "Certifications Professionnelles"
        ]}
        
        licence1Requirements={[
          "Avoir obtenu le diplôme du baccalauréat.",
          "Avoir une aisance en mathématiques."
        ]}
        
        licence2Text="Il convient de valider les semestres 1 et 2 de la première année, de posséder des connaissances solides en économie et d'être diplômé d'une école ou d'une université respectant le système LMD."
        
        licence3Text="Il est requis d'être en possession d'un diplôme de niveau Bac+2 en sciences ou d'un équivalent. Il est également nécessaire de valider l'ensemble des crédits de la première et de la deuxième année. En outre, il est impératif d'être issu d'une école ou d'une université respectant le système LMD."
        
        ctaTitle="Prêt à vous lancer dans l'aventure ?"
        ctaDescription="Rejoignez notre programme de Marketing et Commerce International et développez les compétences nécessaires pour réussir dans le monde des affaires globalisé."
      />
    );
  }

  // Économie Appliquée
  if (programId === "economie-appliquee") {
    return (
      <ProgramContent
        title="Économie Appliquée"
        subtitle="Licence en Sciences Économiques"
        description="Formation d'excellence pour appliquer les principes économiques à des problèmes concrets"
        imageUrl="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        
        introductionParagraphs={[
          "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. Une licence en économie appliquée prépare les étudiants à une variété de carrières dans le secteur public, le secteur privé ou le monde académique. Les diplômés peuvent travailler dans des postes liés à l'analyse économique, à la politique économique, à la recherche économique, à la finance, au conseil, au commerce international et à de nombreux autres domaines. Elle constitue également une base solide pour des études supérieures en économie ou dans des domaines connexes.",
          "C'est un programme d'études universitaires qui vise à enseigner les principes fondamentaux de l'économie et à montrer comment ces principes peuvent être appliqués dans des contextes du monde réel."
        ]}
        
        skills={[
          "Compréhension des principes économiques.",
          "Analyse quantitative des données économiques.",
          "Compréhension des politiques économiques.",
          "Compréhension des interactions économiques internationales.",
          "Capacité à évaluer et à résoudre des problèmes économiques réels"
        ]}
        
        curriculum={{
          year1: {
            description: "Au cours de la première année, l'objectif est de poser des bases solides en économie et en méthodes d'analyse. Les étudiants acquièrent une compréhension des concepts de base en microéconomie et en macroéconomie, ainsi que des compétences en mathématiques, statistiques et méthodes de recherche. L'introduction à l'économie appliquée les prépare à l'application de ces concepts à des problèmes économiques réels. Ces semestres jettent les bases nécessaires pour la suite du programme, qui inclura des cours plus avancés et des opportunités de spécialisation.",
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
            description: "Au cours de la deuxième année, le programme vise à approfondir les compétences en économie appliquée et permettent aux étudiants de se spécialiser davantage dans des domaines spécifiques de leur choix. Les compétences de recherche sont renforcées, et les étudiants apprennent à concevoir, à mener et à présenter des projets de recherche en économie. Les domaines d'études tels que l'économie de la santé, l'économie de l'environnement et l'économie financière offrent des perspectives pratiques sur les applications de l'économie dans des secteurs spécifiques. Ces semestres préparent également les étudiants à leur future carrière professionnelle ou à des études supérieures en économie ou dans des domaines connexes.",
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
            description: "La dernière année, le programme vise à approfondir davantage les compétences en économie appliquée, à se spécialiser dans des domaines spécifiques de l'économie appliquée, et à préparer les étudiants à leur carrière future. Les séminaires de recherche avancée permettent aux étudiants de développer une expertise en recherche et d'appliquer leurs connaissances à des projets concrets. Les stages en entreprise offrent une expérience pratique, tandis que les cours spécialisés élargissent la compréhension des applications de l'économie appliquée dans des domaines particuliers. En fin de compte, ces semestres préparent les étudiants à une variété de carrières dans le secteur public, le secteur privé, le monde académique ou à des études supérieures en économie ou dans des domaines connexes.",
            teachingHours: 375,
            personalWorkHours: 75,
            courses: [
              { course1: { name: "Economie de la Guinée (Contexte Socio-économique de la Guinée)", credits: 6 }, course2: { name: "Analyse et évaluation des Projets de développement", credits: 6 } },
              { course1: { name: "Econométrie", credits: 6 }, course2: { name: "Economie Publique", credits: 6 } },
              { course1: { name: "Recherche Opérationnelle", credits: 6 }, course2: { name: "Economie de l'entreprise coopérative", credits: 6 } },
              { course1: { name: "Statistique Mathématique", credits: 6 }, course2: { name: "Population, Urbanisation, et Développement ou Economie des ressources naturelles", credits: 6 } },
              { course1: { name: "Economie de l'Environnement", credits: 6 }, course2: { name: "Dynamique économique ou Economie du travail", credits: 6 } }
            ]
          }
        }}
        
        facultyText="Nos enseignants, qu'ils soient africains ou européens, sont sélectionnés parmi les experts les plus qualifiés de leur domaine. Notre programme de formation, bien qu'il vous permette de comprendre en profondeur les aspects théoriques sous-jacents aux techniques de gestion de données, est principalement axé sur la pratique, garantissant ainsi une employabilité accrue."
        
        internshipText="La formation en économie appliquée est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
        
        seminars={[
          "Discussions et Débats",
          "Travail en Groupe",
          "Analyse Critique",
          "Thèmes Spécifiques",
          "Présentations",
          "Travaux de Recherche"
        ]}
        
        seminarsDescription="Les séminaires sont conçus pour renforcer la compréhension des sujets clés de l'économie internationale, développer des compétences pratiques et encourager la réflexion critique. Ils offrent aux étudiants une opportunité d'interaction plus directe avec le matériel d'apprentissage et de collaborer avec leurs pairs pour résoudre des problèmes du monde réel."
        
        careers={[
          "Banque et Finance",
          "Gouvernement et Politiques Publiques",
          "Entreprise",
          "Organisations Internationales",
          "Enseignement et Recherche",
          "Journalisme Économique"
        ]}
        
        educationDescription="Après l'obtention d'une licence en gestion logistique et transport, vous avez plusieurs options pour poursuivre vos études et approfondir vos compétences dans ce domaine."
        
        educationOptions={[
          "Master en Économie Appliquée",
          "Master en Économie",
          "Master en Finance",
          "Master en Gestion des Affaires (MBA)",
          "Master en Économétrie",
          "Doctorat en Économie",
          "Programmes de Double Diplôme"
        ]}
        
        licence1Requirements={[
          "Avoir obtenu le diplôme du baccalauréat.",
          "Avoir une aisance en mathématiques."
        ]}
        
        licence2Text="Il convient de valider les semestres 1 et 2 de la première année, de posséder des connaissances solides en économie et d'être diplômé d'une école ou d'une université respectant le système LMD."
        
        licence3Text="Il est requis d'être en possession d'un diplôme de niveau Bac+2 en sciences ou d'un équivalent. Il est également nécessaire de valider l'ensemble des crédits de la première et de la deuxième année. En outre, il est impératif d'être issu d'une école ou d'une université respectant le système LMD."
        
        ctaTitle="Prêt à vous lancer dans l'aventure ?"
        ctaDescription="Rejoignez notre programme d'Économie Appliquée et développez les compétences nécessaires pour résoudre des problèmes économiques concrets."
      />
    );
  }

  // Économie Internationale
  if (programId === "economie-internationale") {
    return (
      <ProgramContent
        title="Économie Internationale"
        subtitle="Licence en Sciences Économiques"
        description="Formation d'excellence pour comprendre les dynamiques économiques mondiales"
        imageUrl="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        
        introductionParagraphs={[
          "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La licence en économie internationale est un programme d'études supérieures qui se concentre sur l'analyse des économies mondiales et des relations économiques internationales. Ce programme permet aux étudiants de comprendre les forces qui façonnent l'économie mondiale, les politiques commerciales, les finances internationales, la mondialisation et bien d'autres aspects liés à l'économie internationale.",
          "Ce programme offre une base solide pour comprendre les dynamiques économiques mondiales et les opportunités de carrière qui s'y rattachent."
        ]}
        
        skills={[
          "Compréhension des théories et des modèles économiques liés à l'économie internationale.",
          "Analyse des politiques commerciales et des relations économiques internationales.",
          "Compétences en finance internationale et gestion des risques.",
          "Compréhension de la mondialisation et de ses conséquences.",
          "Compétences en statistiques et en méthodologie de recherche"
        ]}
        
        curriculum={{
          year1: {
            description: "Au cours de la première année, les étudiants acquièrent des bases solides en économie, en mathématiques, en statistiques et en gestion. Ils apprennent à analyser des données économiques, à comprendre les principes économiques fondamentaux et à appliquer ces connaissances dans un contexte d'entreprise. L'économétrie devient une compétence essentielle pour analyser des données économiques de manière rigoureuse. Les aspects de l'économie internationale, de la politique économique et des finances publiques sont explorés en détail.",
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
            description: "Au cours de la deuxième année, le programme vise à approfondir votre compréhension de l'économie internationale et à vous permettre de vous spécialiser davantage dans des domaines spécifiques de votre choix. Vous développerez des compétences en recherche avancée, en analyse économique et en compréhension des enjeux économiques mondiaux. Le séminaire de recherche vous permettra d'appliquer vos connaissances à des projets concrets et d'affiner vos compétences de recherche. En fin de compte, cette année vous préparera à poursuivre des études supérieures ou à entrer sur le marché du travail avec une expertise solide en économie internationale.",
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
            description: "Au cours de la deuxième année, le programme vise à approfondir vos connaissances dans des domaines spécifiques de l'économie internationale et à vous préparer à votre carrière future. Vous pouvez choisir de vous orienter vers un stage en entreprise pour acquérir une expérience professionnelle, ou vous pouvez approfondir vos compétences de recherche en menant un projet de recherche avancé. Ces semestres vous permettent de développer une expertise plus spécialisée et de vous préparer à des études supérieures ou à une carrière dans le domaine de l'économie internationale.",
            teachingHours: 405,
            personalWorkHours: 45,
            courses: [
              { course1: { name: "Commerce International", credits: 6 }, course2: { name: "Conjoncture Economique et Financière", credits: 6 } },
              { course1: { name: "Relations Economiques Internationales", credits: 6 }, course2: { name: "Finance Internationale", credits: 6 } },
              { course1: { name: "Economie du Développement", credits: 6 }, course2: { name: "Tiers monde : économie et politique ou Economie industrielle", credits: 6 } },
              { course1: { name: "Organisations Internationales : ONU et ses institutions spécialisées", credits: 6 }, course2: { name: "Droit du commerce international ou Anglais économique", credits: 6 } },
              { course1: { name: "Droit International Economique", credits: 6 }, course2: { name: "Economie des ressources humaines ou Monnaie et institutions financières", credits: 6 } }
            ]
          }
        }}
        
        facultyText="Nos enseignants, qu'ils soient africains ou européens, sont sélectionnés parmi les experts les plus qualifiés de leur domaine. Notre programme de formation, bien qu'il vous permette de comprendre en profondeur les aspects théoriques sous-jacents aux techniques de gestion de données, est principalement axé sur la pratique, garantissant ainsi une employabilité accrue."
        
        internshipText="La formation en licence business administration est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
        
        seminars={[
          "Négociations Commerciales Internationales",
          "Analyse des Données Économiques",
          "Politiques Économiques Internationales",
          "Études de Cas sur la Mondialisation",
          "Séminaires de Recherche"
        ]}
        
        seminarsDescription="Les séminaires sont conçus pour renforcer la compréhension des sujets clés de l'économie internationale, développer des compétences pratiques et encourager la réflexion critique. Ils offrent aux étudiants une opportunité d'interaction plus directe avec le matériel d'apprentissage et de collaborer avec leurs pairs pour résoudre des problèmes du monde réel."
        
        careers={[
          "Banque et Finance",
          "Gouvernement et Politiques Publiques",
          "Entreprise",
          "Organisations Internationales",
          "Enseignement et Recherche",
          "Journalisme Économique"
        ]}
        
        educationDescription="Après l'obtention d'une licence en gestion logistique et transport, vous avez plusieurs options pour poursuivre vos études et approfondir vos compétences dans ce domaine."
        
        educationOptions={[
          "Master en Économie Appliquée",
          "Master en Économie",
          "Master en Finance",
          "Master en Gestion des Affaires (MBA)",
          "Master en Économétrie",
          "Doctorat en Économie",
          "Programmes de Double Diplôme"
        ]}
        
        licence1Requirements={[
          "Avoir obtenu le diplôme du baccalauréat.",
          "Avoir une aisance en mathématiques."
        ]}
        
        licence2Text="Il convient de valider les semestres 1 et 2 de la première année, de posséder des connaissances solides en économie et d'être diplômé d'une école ou d'une université respectant le système LMD."
        
        licence3Text="Il est requis d'être en possession d'un diplôme de niveau Bac+2 en sciences ou d'un équivalent. Il est également nécessaire de valider l'ensemble des crédits de la première et de la deuxième année. En outre, il est impératif d'être issu d'une école ou d'une université respectant le système LMD."
        
        ctaTitle="Prêt à vous lancer dans l'aventure ?"
        ctaDescription="Rejoignez notre programme d'Économie Internationale et développez les compétences nécessaires pour comprendre et agir dans l'économie mondiale."
      />
    );
  }

  // Logistique et Transports (Supply Chain)
  if (programId === "logistique-transports") {
    return (
      <ProgramContent
        title="Logistique et Transports (Supply Chain)"
        subtitle="Licence en Sciences Économiques"
        description="Formation d'excellence pour maîtriser la gestion des chaînes logistiques et du transport"
        imageUrl="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        
        introductionParagraphs={[
          "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La gestion logistique et le transport jouent un rôle essentiel dans de nombreuses industries, notamment la distribution, la fabrication, le commerce de détail, la santé, et bien d'autres. Les diplômés de ce domaine sont en demande pour assurer le bon déroulement des opérations et garantir la livraison efficace de biens et de services.",
          "Une licence en transport et logistique prépare les étudiants à des carrières dans des domaines tels que la gestion de la chaîne d'approvisionnement, la logistique, la gestion des opérations de transport, la gestion des entrepôts, la gestion des stocks, la planification des transports et bien d'autres. Elle constitue également une base solide pour des études supérieures en logistique ou dans des domaines connexes."
        ]}
        
        skills={[
          "Planification et coordination des opérations logistiques",
          "Gestion de la chaîne d'approvisionnement",
          "Gestion des opérations de transport",
          "Gestion des stocks et de la demande",
          "Utilisation de la technologie de l'information en logistique",
          "Gestion de la qualité et de la performance",
          "Conformité réglementaire en matière de transport",
          "Analyse des coûts et de l'efficacité des opérations logistiques"
        ]}
        
        curriculum={{
          year1: {
            description: "Au cours de la première année, l'objectif est de poser des bases solides en logistique, en gestion des transports et en gestion de la chaîne d'approvisionnement. Les étudiants acquièrent une compréhension des principes fondamentaux, des compétences mathématiques et statistiques, et des bases de la technologie en logistique. Ils commencent également à explorer des aspects liés au commerce international et à la gestion des opérations internationales. Ces semestres jettent les bases nécessaires pour la suite du programme, qui inclura des cours plus avancés, des stages en entreprise et des projets de recherche.",
            teachingHours: 375,
            personalWorkHours: 60,
            courses: [
              { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Macroéconomie", credits: 6 } },
              { course1: { name: "Mathématiques", credits: 6 }, course2: { name: "Statistiques descriptive", credits: 6 } },
              { course1: { name: "Contexte éco & social", credits: 6 }, course2: { name: "Hist. Faits éco. & soc", credits: 6 } },
              { course1: { name: "Economie générale", credits: 6 }, course2: { name: "Comptabilité des Sociétés Commerciales", credits: 6 } },
              { course1: { name: "Comptabilité générale", credits: 6 }, course2: { name: "Droit civil et administratif", credits: 6 } }
            ]
          },
          year2: {
            description: "Au cours de la deuxième année, le programme vise à approfondir les compétences en gestion des transports, en gestion de la chaîne d'approvisionnement et en logistique. Les étudiants abordent des sujets plus avancés, notamment la durabilité, la qualité, l'automatisation, l'analyse de données et la gestion internationale. Les stages en entreprise offrent une expérience pratique dans le domaine, tandis que les projets de recherche développent des compétences de recherche avancée. Ces semestres préparent les étudiants à des carrières dans des domaines tels que la gestion logistique, la planification des transports, la gestion de la chaîne d'approvisionnement, la gestion des stocks et bien d'autres.",
            teachingHours: 420,
            personalWorkHours: 30,
            courses: [
              { course1: { name: "Recherche opérationnelle", credits: 6 }, course2: { name: "Entrepreneurship", credits: 6 } },
              { course1: { name: "Comptabilité analytique d'exploitation", credits: 6 }, course2: { name: "Gestion et analyse financière", credits: 6 } },
              { course1: { name: "Droit des affaires", credits: 6 }, course2: { name: "Economie et Commerce International", credits: 6 } },
              { course1: { name: "Gestion des opérations", credits: 6 }, course2: { name: "Introduction à la gestion des ressources humaines", credits: 6 } },
              { course1: { name: "Marketing", credits: 6 }, course2: { name: "Management", credits: 6 } }
            ]
          },
          year3: {
            description: "La dernière année est conçue pour approfondir votre expertise dans le domaine de la logistique et du transport, et pour vous préparer à votre carrière professionnelle. La spécialisation vous permet de vous concentrer sur un domaine spécifique de la logistique qui correspond à vos intérêts et à vos objectifs de carrière. Les stages en entreprise vous donnent une expérience pratique et vous aident à établir des contacts professionnels. Les projets de fin d'études démontrent votre capacité à appliquer vos compétences et à résoudre des problèmes logistiques réels. En fin de compte, ces semestres vous préparent à entrer sur le marché du travail en tant que professionnel de la logistique et du transport.",
            teachingHours: 450,
            personalWorkHours: 0,
            courses: [
              { course1: { name: "Logistique générale", credits: 6 }, course2: { name: "Droit des transports", credits: 6 } },
              { course1: { name: "Gestion de chaîne d'approvisionnements", credits: 6 }, course2: { name: "Douane et transit", credits: 6 } },
              { course1: { name: "Gestion d'entrepôts et de plateformes", credits: 6 }, course2: { name: "Transports routiers et ferroviaires de personnes et marchandises", credits: 6 } },
              { course1: { name: "Hygiène, Santé, Sécurité et Environnement", credits: 6 }, course2: { name: "Transports maritime, fluvial et opérations portuaires", credits: 6 } },
              { course1: { name: "Gestion de la Production et de la Qualité", credits: 6 }, course2: { name: "Transports aériens de marchandises, de passagers et opérations aéroportuaires", credits: 6 } }
            ]
          }
        }}
        
        facultyText="Nos enseignants, qu'ils soient africains ou européens, sont sélectionnés parmi les experts les plus qualifiés de leur domaine. Notre programme de formation, bien qu'il vous permette de comprendre en profondeur les aspects théoriques sous-jacents aux techniques de gestion de données, est principalement axé sur la pratique, garantissant ainsi une employabilité accrue."
        
        internshipText="La formation en gestion transport et logistique est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
        
        seminars={[
          "Discussions et Débats",
          "Travail en Groupe",
          "Analyse Critique",
          "Thèmes Spécifiques",
          "Présentations",
          "Travaux de Recherche"
        ]}
        
        seminarsDescription="Les séminaires sont conçus pour renforcer la compréhension des sujets clés de l'économie internationale, développer des compétences pratiques et encourager la réflexion critique. Ils offrent aux étudiants une opportunité d'interaction plus directe avec le matériel d'apprentissage et de collaborer avec leurs pairs pour résoudre des problèmes du monde réel."
        
        careers={[
          "Responsable Logistique",
          "Gestionnaire de Chaîne d'Approvisionnement",
          "Responsable de Transport",
          "Analyste en Logistique",
          "Gestionnaire de Stocks",
          "Consultant en Logistique",
          "Spécialiste de la Chaîne d'Approvisionnement International",
          "Gestionnaire de Projet Logistique"
        ]}
        
        educationDescription="Après l'obtention d'une licence en gestion logistique et transport, vous avez plusieurs options pour poursuivre vos études et approfondir vos compétences dans ce domaine."
        
        educationOptions={[
          "Master en Gestion Logistique et Transport",
          "Master en Administration des Affaires (MBA)",
          "Master en Ingénierie des Transports",
          "Master en Gestion de la Chaîne d'Approvisionnement",
          "Doctorat en Logistique et Transport",
          "Certifications Professionnelles : Formation Continue et Cours en Ligne"
        ]}
        
        licence1Requirements={[
          "Avoir obtenu le diplôme du baccalauréat.",
          "Avoir une aisance en mathématiques."
        ]}
        
        licence2Text="Il convient de valider les semestres 1 et 2 de la première année, de posséder des connaissances solides en économie et d'être diplômé d'une école ou d'une université respectant le système LMD."
        
        licence3Text="Il est requis d'être en possession d'un diplôme de niveau Bac+2 en sciences ou d'un équivalent. Il est également nécessaire de valider l'ensemble des crédits de la première et de la deuxième année. En outre, il est impératif d'être issu d'une école ou d'une université respectant le système LMD."
        
        ctaTitle="Prêt à vous lancer dans l'aventure ?"
        ctaDescription="Rejoignez notre programme de Logistique et Transports et développez les compétences nécessaires pour exceller dans la gestion des chaînes d'approvisionnement mondiales."
      />
    );
  }

  // Banque Finances/Banque Assurances
  if (programId === "banque-finances-assurances") {
    return (
      <ProgramContent
        title="Banque Finances / Banque Assurances"
        subtitle="Licence en Sciences Économiques"
        description="Formation d'excellence pour comprendre les mécanismes bancaires et financiers"
        imageUrl="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        
        introductionParagraphs={[
          "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. Une licence en banque et finance est un programme d'études supérieures axé sur les domaines de la banque, de la finance et des services financiers. Ce programme vise à former les étudiants aux principes fondamentaux de la finance, de l'investissement, de la gestion bancaire, de l'analyse financière et d'autres aspects liés à la gestion de l'argent et des ressources financières.",
          "Les diplômés d'une licence en banque et finance sont préparés à travailler dans des banques, des sociétés de gestion d'actifs, des institutions financières, des sociétés d'investissement, des cabinets d'audit, des entreprises multinationales, ou à poursuivre des études supérieures en finance, en économie ou en gestion. Ce programme offre une base solide pour les carrières liées à la gestion de l'argent et des ressources financières."
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
        ctaDescription="Rejoignez notre programme Banque Finances / Banque Assurances et développez les compétences nécessaires pour réussir dans le monde financier."
      />
    );
  }

  // Comptabilité et gestion
  if (programId === "comptabilite-gestion") {
    return (
      <ProgramContent
        title="Comptabilité et Gestion"
        subtitle="Licence en Sciences Économiques"
        description="Formation d'excellence pour maîtriser les principes de comptabilité et de gestion d'entreprise"
        imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        
        introductionParagraphs={[
          "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. Une licence en économie appliquée prépare les étudiants à une variété de carrières dans le secteur public, le secteur privé ou le monde académique. Les diplômés peuvent travailler dans des postes liés à l'analyse économique, à la politique économique, à la recherche économique, à la finance, au conseil, au commerce international et à de nombreux autres domaines. Elle constitue également une base solide pour des études supérieures en économie ou dans des domaines connexes.",
          "C'est un programme d'études universitaires qui vise à enseigner les principes fondamentaux de l'économie et à montrer comment ces principes peuvent être appliqués dans des contextes du monde réel."
        ]}
        
        skills={[
          "Compréhension des principes économiques",
          "Analyse quantitative des données économiques",
          "Compréhension des politiques économiques",
          "Compréhension des interactions économiques internationales",
          "Capacité à évaluer et à résoudre des problèmes économiques réels"
        ]}
        
        curriculum={{
          year1: {
            description: "Au cours de la première année, l'objectif est de poser des bases solides en économie et en méthodes d'analyse. Les étudiants acquièrent une compréhension des concepts de base en microéconomie et en macroéconomie, ainsi que des compétences en mathématiques, statistiques et méthodes de recherche. L'introduction à l'économie appliquée les prépare à l'application de ces concepts à des problèmes économiques réels. Ces semestres jettent les bases nécessaires pour la suite du programme, qui inclura des cours plus avancés et des opportunités de spécialisation.",
            teachingHours: 305,
            personalWorkHours: 105,
            courses: [
              { course1: { name: "Economie Générale", credits: 6 }, course2: { name: "Finances Publiques", credits: 6 } },
              { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Méthodes Statistiques", credits: 6 } },
              { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Microéconomie", credits: 6 } },
              { course1: { name: "Géographie Economique", credits: 6 }, course2: { name: "Droit Civil et administratif", credits: 6 } },
              { course1: { name: "Mathématiques", credits: 6 }, course2: { name: "Histoire des faits et de la pensée économiques", credits: 6 } }
            ]
          },
          year2: {
            description: "Au cours de la deuxième année, le programme vise à approfondir les compétences en économie appliquée et permettent aux étudiants de se spécialiser davantage dans des domaines spécifiques de leur choix. Les compétences de recherche sont renforcées, et les étudiants apprennent à concevoir, à mener et à présenter des projets de recherche en économie. Les domaines d'études tels que l'économie de la santé, l'économie de l'environnement et l'économie financière offrent des perspectives pratiques sur les applications de l'économie dans des secteurs spécifiques. Ces semestres préparent également les étudiants à leur future carrière professionnelle ou à des études supérieures en économie ou dans des domaines connexes.",
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
            description: "La dernière année, le programme vise à approfondir davantage les compétences en économie appliquée, à se spécialiser dans des domaines spécifiques de l'économie appliquée, et à préparer les étudiants à leur carrière future. Les séminaires de recherche avancée permettent aux étudiants de développer une expertise en recherche et d'appliquer leurs connaissances à des projets concrets. Les stages en entreprise offrent une expérience pratique, tandis que les cours spécialisés élargissent la compréhension des applications de l'économie appliquée dans des domaines particuliers. En fin de compte, ces semestres préparent les étudiants à une variété de carrières dans le secteur public, le secteur privé, le monde académique ou à des études supérieures en économie ou dans des domaines connexes.",
            teachingHours: 375,
            personalWorkHours: 75,
            courses: [
              { course1: { name: "Economie de la Guinée (Contexte Socio-économique de la Guinée)", credits: 6 }, course2: { name: "Analyse et évaluation des Projets de développement", credits: 6 } },
              { course1: { name: "Econométrie", credits: 6 }, course2: { name: "Economie Publique", credits: 6 } },
              { course1: { name: "Recherche Opérationnelle", credits: 6 }, course2: { name: "Economie de l'entreprise coopérative", credits: 6 } },
              { course1: { name: "Statistique Mathématique", credits: 6 }, course2: { name: "Population, Urbanisation, et Développement ou Economie des ressources naturelles", credits: 6 } },
              { course1: { name: "Economie de l'Environnement", credits: 6 }, course2: { name: "Dynamique économique ou Economie du travail", credits: 6 } }
            ]
          }
        }}
        
        facultyText="Nos enseignants, qu'ils soient africains ou européens, sont sélectionnés parmi les experts les plus qualifiés de leur domaine. Notre programme de formation, bien qu'il vous permette de comprendre en profondeur les aspects théoriques sous-jacents aux techniques de gestion de données, est principalement axé sur la pratique, garantissant ainsi une employabilité accrue."
        
        internshipText="La formation en économie appliquée est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans le monde professionnel, mais également la mise en pratique de solutions informatiques pour résoudre des problématiques spécifiques de l'entreprise."
        
        seminars={[
          "Discussions et Débats",
          "Travail en Groupe",
          "Analyse Critique",
          "Thèmes Spécifiques",
          "Présentations",
          "Travaux de Recherche"
        ]}
        
        seminarsDescription="Les séminaires sont conçus pour renforcer la compréhension des sujets clés de l'économie internationale, développer des compétences pratiques et encourager la réflexion critique. Ils offrent aux étudiants une opportunité d'interaction plus directe avec le matériel d'apprentissage et de collaborer avec leurs pairs pour résoudre des problèmes du monde réel."
        
        careers={[
          "Banque et Finance",
          "Gouvernement et Politiques Publiques",
          "Entreprise",
          "Organisations Internationales",
          "Enseignement et Recherche",
          "Journalisme Économique"
        ]}
        
        educationDescription="Après l'obtention d'une licence en gestion logistique et transport, vous avez plusieurs options pour poursuivre vos études et approfondir vos compétences dans ce domaine."
        
        educationOptions={[
          "Master en Économie Appliquée",
          "Master en Économie",
          "Master en Finance",
          "Master en Gestion des Affaires (MBA)",
          "Master en Économétrie",
          "Doctorat en Économie",
          "Programmes de Double Diplôme"
        ]}
        
        licence1Requirements={[
          "Avoir obtenu le diplôme du baccalauréat.",
          "Avoir une aisance en mathématiques."
        ]}
        
        licence2Text="Il convient de valider les semestres 1 et 2 de la première année, de posséder des connaissances solides en économie et d'être diplômé d'une école ou d'une université respectant le système LMD."
        
        licence3Text="Il est requis d'être en possession d'un diplôme de niveau Bac+2 en sciences ou d'un équivalent. Il est également nécessaire de valider l'ensemble des crédits de la première et de la deuxième année. En outre, il est impératif d'être issu d'une école ou d'une université respectant le système LMD."
        
        ctaTitle="Prêt à vous lancer dans l'aventure ?"
        ctaDescription="Rejoignez notre programme de Comptabilité et Gestion et développez les compétences nécessaires pour exceller dans le domaine de la finance et de la gestion d'entreprise."
      />
    );
  }

  return null;
};

export default SpecialProgramRenderer;
