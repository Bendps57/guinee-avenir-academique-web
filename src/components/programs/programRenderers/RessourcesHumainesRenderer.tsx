
import React from "react";
import ProgramContent from "../ProgramContent";
import { generateCommonStandardTexts } from "../utils/programDataUtils";

const RessourcesHumainesRenderer = () => {
  const { facultyText, licence1Requirements, licence2Text, licence3Text, ctaTitle } = generateCommonStandardTexts();

  return (
    <ProgramContent
      title="Ressources Humaines"
      subtitle="Licence en Sciences de Gestion"
      description="Formation d'excellence aux métiers des ressources humaines et du management d'équipe"
      imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      
      introductionParagraphs={[
        "Depuis son ouverture en 2008, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) forme des étudiants passionnés. La licence en Ressources Humaines prépare les diplômés aux métiers de la gestion des ressources humaines, couvrant le recrutement, la gestion des compétences, les relations sociales et la paie.",
        "Ce programme offre aux étudiants une compréhension approfondie des enjeux humains dans l'entreprise, des techniques de management d'équipe, des aspects juridiques du travail et des nouvelles tendances de la digitalisation RH."
      ]}
      
      skills={[
        "Gestion administrative du personnel",
        "Techniques de recrutement et d'évaluation",
        "Management d'équipe et leadership",
        "Droit du travail et relations sociales",
        "Gestion de la formation et développement des compétences",
        "Gestion de la paie et des rémunérations",
        "Communication interne et externe",
        "Utilisation des SIRH (Systèmes d'Information RH)"
      ]}
      
      curriculum={{
        year1: {
          description: "Au cours de la première année, l'objectif est de poser des bases solides en gestion des ressources humaines. Les étudiants acquièrent une compréhension des principes fondamentaux de la psychologie du travail, du droit du travail, de la gestion administrative du personnel et des techniques de communication.",
          teachingHours: 360,
          personalWorkHours: 90,
          courses: [
            { course1: { name: "Introduction aux ressources humaines", credits: 6 }, course2: { name: "Psychologie du travail", credits: 6 } },
            { course1: { name: "Droit du travail fondamental", credits: 6 }, course2: { name: "Communication professionnelle", credits: 6 } },
            { course1: { name: "Gestion administrative du personnel", credits: 6 }, course2: { name: "Économie du travail", credits: 6 } },
            { course1: { name: "Comptabilité générale", credits: 6 }, course2: { name: "Statistiques appliquées", credits: 6 } },
            { course1: { name: "Informatique et bureautique", credits: 6 }, course2: { name: "Anglais professionnel", credits: 6 } }
          ]
        },
        year2: {
          description: "Au cours de la deuxième année, le programme vise à approfondir les compétences en gestion des ressources humaines. Vous développerez des compétences en recrutement, en formation, en gestion de la paie et en relations sociales.",
          teachingHours: 380,
          personalWorkHours: 70,
          courses: [
            { course1: { name: "Techniques de recrutement", credits: 6 }, course2: { name: "Formation professionnelle", credits: 6 } },
            { course1: { name: "Gestion de la paie", credits: 6 }, course2: { name: "Relations sociales", credits: 6 } },
            { course1: { name: "Évaluation des performances", credits: 6 }, course2: { name: "Droit social approfondi", credits: 6 } },
            { course1: { name: "Management d'équipe", credits: 6 }, course2: { name: "Gestion des conflits", credits: 6 } },
            { course1: { name: "Contrôle de gestion sociale", credits: 6 }, course2: { name: "Systèmes d'information RH", credits: 6 } }
          ]
        },
        year3: {
          description: "La dernière année permet aux étudiants de se spécialiser davantage en ressources humaines et de préparer leur transition vers le monde professionnel. Le programme couvre la gestion stratégique des RH, la digitalisation et les nouvelles tendances du management.",
          teachingHours: 400,
          personalWorkHours: 50,
          courses: [
            { course1: { name: "Gestion stratégique des RH", credits: 6 }, course2: { name: "Développement des compétences", credits: 6 } },
            { course1: { name: "Digitalisation RH", credits: 6 }, course2: { name: "Qualité de vie au travail", credits: 6 } },
            { course1: { name: "Négociation sociale", credits: 6 }, course2: { name: "Audit social", credits: 6 } },
            { course1: { name: "Management interculturel", credits: 6 }, course2: { name: "Innovation en RH", credits: 6 } },
            { course1: { name: "Projet professionnel RH", credits: 6 }, course2: { name: "Stage en entreprise", credits: 6 } }
          ]
        }
      }}
      
      facultyText={facultyText}
      
      internshipText="La formation en Ressources Humaines est hautement opérationnelle, offrant des stages en entreprise dès la première année jusqu'à la troisième année. Cette opportunité permet non seulement une immersion précoce dans les services RH, mais également la mise en pratique des techniques de gestion du personnel dans un contexte professionnel réel."
      
      seminars={[
        "Leadership et management d'équipe",
        "Transformation digitale des RH",
        "Diversité et inclusion en entreprise",
        "Bien-être au travail et prévention des risques psychosociaux",
        "Recrutement 2.0 et réseaux sociaux professionnels",
        "Gestion des talents et rétention",
        "Intelligence artificielle en RH"
      ]}
      
      seminarsDescription="Les séminaires spécialisés complètent la formation théorique en offrant aux étudiants une perspective pratique sur les enjeux actuels des ressources humaines. Ces sessions permettent d'approfondir des sujets spécifiques, d'analyser des cas réels et de développer une compréhension fine des évolutions du management humain en entreprise."
      
      careers={[
        "Responsable ressources humaines",
        "Chargé de recrutement",
        "Gestionnaire de paie",
        "Responsable formation",
        "Consultant RH",
        "Juriste en droit social",
        "Responsable relations sociales",
        "Chargé de développement RH"
      ]}
      
      educationDescription="Après l'obtention de la licence en Ressources Humaines, les diplômés peuvent poursuivre leurs études pour se spécialiser davantage et accéder à des postes à plus haute responsabilité dans la gestion des ressources humaines."
      
      educationOptions={[
        "Master en Gestion des Ressources Humaines",
        "Master en Management et Leadership",
        "Master en Droit Social",
        "Master en Psychologie du Travail",
        "MBA en Management des Ressources Humaines",
        "Doctorat en Sciences de Gestion"
      ]}
      
      licence1Requirements={licence1Requirements}
      licence2Text={licence2Text}
      licence3Text={licence3Text}
      
      ctaTitle={ctaTitle}
      ctaDescription="Rejoignez notre programme de Ressources Humaines et développez les compétences nécessaires pour exceller dans la gestion du capital humain en entreprise."
    />
  );
};

export default RessourcesHumainesRenderer;
