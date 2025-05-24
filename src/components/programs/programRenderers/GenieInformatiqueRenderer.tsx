
import ProgramContent from "../ProgramContent";

const GenieInformatiqueRenderer = () => {
  return (
    <ProgramContent
      // Hero Section
      title="Master Professionnel en Génie Informatique"
      subtitle="Excellence technologique et innovation"
      description="Formation de haut niveau pour répondre aux défis technologiques de la révolution numérique"
      imageUrl="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      
      // Introduction
      introductionParagraphs={[
        "Le monde est en pleine transformation numérique, avec une croissance exponentielle des données, des objets connectés et des technologies de l'information. Les entreprises et les organisations de tous les secteurs sont confrontées à des défis technologiques complexes, nécessitant des compétences pointues en informatique.",
        "L'intelligence artificielle (IA) et le big data sont des domaines en pleine expansion, offrant des opportunités considérables dans des secteurs tels que la santé, la finance, l'industrie et la recherche. La demande de professionnels qualifiés en IA et en big data est en forte croissance à l'échelle mondiale.",
        "Les cyberattaques sont de plus en plus fréquentes et sophistiquées, menaçant la sécurité des données et des systèmes informatiques. La cybersécurité est devenue un enjeu majeur pour les entreprises, les gouvernements et les particuliers, nécessitant des experts capables de protéger les infrastructures numériques.",
        "Ce programme de Master en Génie Informatique vise à former des acteurs clés de la transformation numérique, capables de développer des solutions innovantes pour les entreprises, les administrations et la société civile."
      ]}
      
      // Skills
      skills={[
        "Maîtrise des langages de programmation et des outils de développement",
        "Conception et développement d'applications logicielles et web",
        "Gestion de bases de données et de systèmes d'information",
        "Administration de réseaux et de systèmes informatiques",
        "Analyse et traitement de données massives (big data)",
        "Développement d'applications d'intelligence artificielle",
        "Sécurité des systèmes informatiques et des réseaux",
        "Gestion de projets informatiques",
        "Capacité à mener des recherches et à innover dans le domaine de l'informatique"
      ]}
      
      // Curriculum
      curriculum={{
        year1: {
          description: "Première année axée sur les fondamentaux avancés et l'initiation à la spécialisation",
          teachingHours: 600,
          personalWorkHours: 400,
          courses: [
            {
              course1: { name: "Programmation Avancée", credits: 6 },
              course2: { name: "Bases de données avancées", credits: 6 }
            },
            {
              course1: { name: "Réseaux Avancés", credits: 6 },
              course2: { name: "Systèmes d'exploitation avancés", credits: 6 }
            },
            {
              course1: { name: "Intelligence Artificielle", credits: 6 },
              course2: { name: "Cybersécurité", credits: 6 }
            },
            {
              course1: { name: "Big Data et Analytics", credits: 6 },
              course2: { name: "Cloud Computing", credits: 6 }
            },
            {
              course1: { name: "Développement logiciel", credits: 6 },
              course2: { name: "Gestion de projets informatiques", credits: 6 }
            }
          ]
        },
        year2: {
          description: "Deuxième année de spécialisation et projets professionnels",
          teachingHours: 400,
          personalWorkHours: 500,
          courses: [
            {
              course1: { name: "Méthodologie de recherche", credits: 6 },
              course2: { name: "Logiciels d'analyse spécialisés", credits: 6 }
            },
            {
              course1: { name: "Système d'information et de communication", credits: 3 },
              course2: { name: "Anglais des affaires", credits: 6 }
            },
            {
              course1: { name: "Stage professionnel", credits: 9 },
              course2: { name: "Techniques de communication professionnelle", credits: 6 }
            },
            {
              course1: { name: "Rédaction et soutenance du mémoire", credits: 24 },
              course2: { name: "Projet de fin d'études", credits: 0 }
            }
          ]
        },
        year3: {
          description: "Programme complet en 2 ans",
          teachingHours: 0,
          personalWorkHours: 0,
          courses: []
        }
      }}
      
      // Faculty and Internship
      facultyText="L'équipe pédagogique est composée d'enseignants-chercheurs spécialisés en informatique et de professionnels experts dans leurs domaines. Nos intervenants issus du monde professionnel apportent leur expertise pratique et leur connaissance des dernières technologies et tendances du marché."
      internshipText="Le stage professionnel de 4 à 6 mois permet aux étudiants d'appliquer leurs connaissances théoriques dans un contexte professionnel réel. Il peut être effectué dans des entreprises technologiques, des centres de recherche, des start-ups ou des institutions publiques travaillant sur des projets informatiques innovants."
      
      // Seminars
      seminars={[
        "Intelligence Artificielle et Machine Learning",
        "Cybersécurité et protection des données",
        "Développement d'applications mobiles",
        "Cloud Computing et DevOps",
        "Blockchain et cryptomonnaies",
        "Internet des Objets (IoT)",
        "Réalité virtuelle et augmentée",
        "Analyse de données et Business Intelligence"
      ]}
      seminarsDescription="Des séminaires spécialisés sont organisés régulièrement pour approfondir les domaines d'expertise et découvrir les dernières innovations technologiques."
      
      // Career and Education
      careers={[
        "Architecte de systèmes d'information",
        "Ingénieur en développement logiciel",
        "Administrateur de réseaux et de systèmes",
        "Expert en cybersécurité",
        "Data scientist",
        "Ingénieur en intelligence artificielle",
        "Chef de projet informatique",
        "Consultant en technologies de l'information",
        "Enseignant-chercheur en informatique",
        "Entrepreneur dans le domaine du numérique"
      ]}
      educationDescription="Les diplômés peuvent poursuivre leurs études en doctorat pour se spécialiser davantage dans la recherche en informatique."
      educationOptions={[
        "Doctorat en Informatique",
        "Doctorat en Intelligence Artificielle",
        "Doctorat en Cybersécurité",
        "Certifications professionnelles spécialisées"
      ]}
      
      // Admission Requirements
      licence1Requirements={[
        "Licence en informatique, génie logiciel ou équivalent",
        "Solides compétences en programmation (Java, Python, C++)",
        "Bonnes bases en mathématiques et algorithmique",
        "Maîtrise des concepts de base des systèmes d'exploitation",
        "Connaissances en bases de données et réseaux"
      ]}
      licence2Text="Les candidats titulaires d'une licence en mathématiques appliquées, génie électrique ou disciplines connexes peuvent être admis après évaluation de leur dossier et de leurs compétences en programmation."
      licence3Text="Une mise à niveau pourra être proposée aux candidats ayant un profil atypique mais démontrant une forte motivation et des capacités d'apprentissage en informatique."
      
      // Call to Action
      ctaTitle="Rejoignez la révolution numérique"
      ctaDescription="Devenez un expert en génie informatique et contribuez aux innovations technologiques de demain. Notre programme vous prépare aux métiers d'avenir dans un secteur en constante évolution."
    />
  );
};

export default GenieInformatiqueRenderer;
