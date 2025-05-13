
import React from "react";

interface AdmissionStepProps {
  number: number;
  title: string;
  description: string;
}

const AdmissionStep = ({ number, title, description }: AdmissionStepProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-university-blue flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-university-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AdmissionProcess = () => {
  const admissionSteps = [
    {
      title: "Candidature",
      description: "Remplissez le formulaire d'inscription en ligne et soumettez les documents requis.",
    },
    {
      title: "Évaluation",
      description: "Votre dossier sera examiné par notre comité d'admission.",
    },
    {
      title: "Entretien",
      description: "Les candidats sélectionnés seront invités à un entretien avec nos responsables académiques.",
    },
    {
      title: "Décision",
      description: "Vous serez informé de la décision d'admission et des étapes suivantes pour l'inscription.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Processus d'admission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Suivez ces étapes pour rejoindre notre université
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {admissionSteps.map((step, index) => (
            <AdmissionStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-university-blue hover:bg-university-navy md:py-4 md:text-lg md:px-10">
            Candidater maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
