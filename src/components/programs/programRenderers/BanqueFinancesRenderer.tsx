
import React from "react";
import ProgramContent from "../ProgramContent";
import { generateCommonStandardTexts } from "../utils/programDataUtils";

const BanqueFinancesRenderer = () => {
  const { facultyText, licence1Requirements, licence2Text, licence3Text, ctaTitle } = generateCommonStandardTexts();

  return (
    <ProgramContent
      title="Banque, Finances et Assurances"
      subtitle="Licence en Sciences Économiques"
      description="Formation d'excellence pour maîtriser les principes fondamentaux de la finance, de la banque et des assurances"
      imageUrl="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      
      introductionParagraphs={[
        "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La licence en Banque, Finances et Assurances prépare les diplômés à travailler dans le secteur financier en pleine évolution, dans les institutions bancaires, les compagnies d'assurances et diverses organisations financières.",
        "Ce programme offre aux étudiants une solide compréhension des mécanismes financiers, des produits bancaires, des techniques d'analyse financière et des principes d'assurance. Il forme des professionnels capables d'évaluer les risques, de gérer des portefeuilles d'investissement et de conseiller les clients sur leurs stratégies financières dans un environnement économique mondial en constante évolution."
      ]}
      
      skills={[
        "Analyse et interprétation des données financières",
        "Compréhension des marchés financiers et de leurs mécanismes",
        "Maîtrise des produits bancaires et d'assurance",
        "Évaluation et gestion des risques financiers",
        "Connaissance des réglementations bancaires et financières",
        "Conseil en stratégie financière et patrimoniale",
        "Gestion de portefeuille et analyse d'investissement",
        "Compétences en négociation et relation client"
      ]}
      
      curriculum={{
        year1: {
          description: "Au cours de la première année, l'objectif est de poser des bases solides en finance et en économie. Les étudiants acquièrent une compréhension des principes fondamentaux de la comptabilité, de l'économie, des mathématiques financières et du droit bancaire. Les compétences en analyse financière et en compréhension des marchés sont également développées. Ces semestres préparent les étudiants à des cours plus avancés et à des stages dans le secteur financier, où ils pourront appliquer leurs connaissances dans un contexte professionnel.",
          teachingHours: 390,
          personalWorkHours: 45,
          courses: [
            { course1: { name: "Introduction à la finance", credits: 6 }, course2: { name: "Économie monétaire", credits: 6 } },
            { course1: { name: "Comptabilité générale", credits: 6 }, course2: { name: "Mathématiques financières", credits: 6 } },
            { course1: { name: "Microéconomie", credits: 6 }, course2: { name: "Macroéconomie", credits: 6 } },
            { course1: { name: "Droit des affaires", credits: 6 }, course2: { name: "Introduction aux produits bancaires", credits: 6 } },
            { course1: { name: "Statistiques appliquées", credits: 6 }, course2: { name: "Anglais financier", credits: 6 } }
          ]
        },
        year2: {
          description: "Au cours de la deuxième année, le programme vise à approfondir la compréhension des étudiants des aspects avancés de la finance et des opérations bancaires. Les compétences en analyse financière, en gestion des risques, en marchés financiers et en droit bancaire sont renforcées. Les stages en institution financière offrent une expérience pratique précieuse, tandis que les projets d'analyse financière permettent d'appliquer les compétences dans des contextes réels. Ces semestres préparent les étudiants à des rôles plus spécialisés dans la finance, la banque et l'assurance, ainsi qu'à des carrières dans des établissements bancaires, des sociétés d'assurance, des cabinets de conseil financier et d'autres organisations du secteur financier.",
          teachingHours: 405,
          personalWorkHours: 35,
          courses: [
            { course1: { name: "Finance d'entreprise", credits: 6 }, course2: { name: "Gestion bancaire", credits: 6 } },
            { course1: { name: "Marchés financiers", credits: 6 }, course2: { name: "Droit bancaire et financier", credits: 6 } },
            { course1: { name: "Assurance et gestion des risques", credits: 6 }, course2: { name: "Comptabilité bancaire", credits: 6 } },
            { course1: { name: "Fiscalité des produits financiers", credits: 6 }, course2: { name: "Analyse financière", credits: 6 } },
            { course1: { name: "Économie internationale", credits: 6 }, course2: { name: "Marketing bancaire", credits: 6 } }
          ]
        },
        year3: {
          description: "La dernière année permet aux étudiants de se spécialiser davantage dans des domaines spécifiques de la finance, de la banque ou de l'assurance. Le stage en entreprise permet de mettre en pratique les connaissances acquises, d'acquérir de l'expérience professionnelle et de développer un réseau dans le secteur financier. Le projet de fin d'études démontre la maîtrise des concepts et des compétences financières. Ces semestres préparent les étudiants à entrer sur le marché du travail en tant que professionnels de la finance, de la banque ou de l'assurance. Les diplômés pourront occuper des postes de chargé de clientèle, d'analyste financier, de gestionnaire de patrimoine, de conseiller en assurance, et bien plus encore.",
          teachingHours: 420,
          personalWorkHours: 30,
          courses: [
            { course1: { name: "Gestion de portefeuille", credits: 6 }, course2: { name: "Finance internationale", credits: 6 } },
            { course1: { name: "Techniques bancaires avancées", credits: 6 }, course2: { name: "Produits dérivés et structurés", credits: 6 } },
            { course1: { name: "Gestion patrimoniale", credits: 6 }, course2: { name: "Réglementation bancaire et financière", credits: 6 } },
            { course1: { name: "Finance comportementale", credits: 6 }, course2: { name: "Évaluation des entreprises", credits: 6 } },
            { course1: { name: "Techniques actuarielles", credits: 6 }, course2: { name: "Financement de projet", credits: 6 } }
          ]
        }
      }}
      
      facultyText={facultyText}
      
      internshipText="La formation en Banque, Finance et Assurances est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans les institutions financières, mais également la mise en pratique des connaissances théoriques pour analyser et résoudre des problématiques financières réelles."
      
      seminars={[
        "Innovation financière et fintech",
        "Éthique et conformité dans le secteur financier",
        "Finance durable et investissement responsable",
        "Gestion de crise financière",
        "Analyse technique des marchés financiers",
        "Fusions et acquisitions",
        "Intelligence artificielle dans la finance",
        "Réglementation bancaire internationale"
      ]}
      
      seminarsDescription="Les séminaires spécialisés complètent la formation théorique en offrant aux étudiants une perspective pratique sur les enjeux actuels du secteur financier. Animés par des professionnels reconnus, ces sessions interactives permettent d'approfondir des sujets spécifiques, d'analyser des cas réels et de développer une compréhension fine des tendances et innovations qui façonnent l'avenir de la finance, de la banque et des assurances."
      
      careers={[
        "Chargé de clientèle bancaire",
        "Analyste financier",
        "Gestionnaire de patrimoine",
        "Conseiller en assurances",
        "Contrôleur des risques",
        "Gestionnaire de back-office bancaire",
        "Courtier en valeurs mobilières",
        "Responsable conformité"
      ]}
      
      educationDescription="Après l'obtention de la licence en Banque, Finances et Assurances, les diplômés peuvent poursuivre leurs études pour se spécialiser davantage et accéder à des postes à plus haute responsabilité dans le secteur financier."
      
      educationOptions={[
        "Master en Finance",
        "Master en Banque et Marchés Financiers",
        "Master en Gestion de Patrimoine",
        "Master en Actuariat et Gestion des Risques",
        "Master en Fintech et Innovation Financière",
        "MBA spécialisé en Finance",
        "Doctorat en Sciences Financières"
      ]}
      
      licence1Requirements={licence1Requirements}
      licence2Text={licence2Text}
      licence3Text={licence3Text}
      
      ctaTitle={ctaTitle}
      ctaDescription="Rejoignez notre programme de Banque, Finances et Assurances et développez les compétences essentielles pour exceller dans le monde financier en constante évolution."
    />
  );
};

export default BanqueFinancesRenderer;
