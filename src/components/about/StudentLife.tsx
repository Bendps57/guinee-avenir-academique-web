
const StudentLife = () => {
  const benefits = [
    "Plus de 20 clubs et associations étudiantes",
    "Activités sportives et culturelles régulières",
    "Service de soutien et d'orientation pour les étudiants",
    "Événements et conférences avec des intervenants de renom"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Vie étudiante</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            L'expérience à l'IUHEG va bien au-delà des salles de classe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-university-blue mb-4">Une communauté dynamique</h3>
            <p className="text-gray-700 mb-4">
              À l'IUHEG, nous croyons que l'apprentissage ne se limite pas aux cours et aux examens. Notre campus vibrant offre une multitude d'opportunités pour développer vos talents, poursuivre vos passions et créer des liens durables.
            </p>
            <p className="text-gray-700 mb-4">
              Des clubs et associations aux événements culturels, des compétitions sportives aux conférences et ateliers, il y a toujours quelque chose qui se passe sur notre campus.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-university-gold flex items-center justify-center text-university-blue font-bold text-xs">
                    ✓
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://i.imgur.com/Xg9XCAv.jpeg" 
              alt="Vie étudiante à l'IUHEG" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://i.imgur.com/W5JkuQI.jpeg" 
              alt="Vie étudiante à l'IUHEG" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://i.imgur.com/VfhpUkC.jpeg" 
              alt="Vie étudiante à l'IUHEG" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://i.imgur.com/tdFBKmx.jpeg" 
              alt="Vie étudiante à l'IUHEG" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
