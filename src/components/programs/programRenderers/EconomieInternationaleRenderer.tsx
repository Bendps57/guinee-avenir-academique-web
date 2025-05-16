
import React from "react";
import ProgramContent from "../ProgramContent";

const EconomieInternationaleRenderer = () => {
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
};

export default EconomieInternationaleRenderer;
