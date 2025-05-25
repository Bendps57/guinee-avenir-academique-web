
const AboutHistory = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-university-blue mb-6">Notre histoire</h3>
        <p className="text-gray-700 mb-4">
          Fondé en 2010, l'Institut Universitaire des Hautes Études de Guinée (IUHEG) est né de la volonté de créer un établissement d'enseignement supérieur d'excellence en Guinée, répondant aux standards internationaux.
        </p>
        <p className="text-gray-700 mb-4">
          Nos débuts modestes avec trois programmes et moins de 100 étudiants ont évolué pour devenir l'une des institutions académiques les plus respectées de la région. Au fil des années, nous avons développé notre offre de formation, élargi nos infrastructures et renforcé nos partenariats internationaux.
        </p>
        <p className="text-gray-700">
          Aujourd'hui, l'IUHEG est fier d'accueillir plus de 1000 étudiants dans divers programmes, de la licence au doctorat, et de compter parmi les acteurs majeurs de l'enseignement supérieur en Afrique de l'Ouest.
        </p>
      </div>
      <div className="relative">
        <img 
          src="https://i.imgur.com/zXdwdhF.jpeg" 
          alt="Histoire de l'IUHEG" 
          className="rounded-lg shadow-lg w-full"
        />
        <div className="absolute -bottom-5 -left-5 bg-university-gold p-4 rounded shadow-lg">
          <p className="text-university-blue font-bold">Depuis 2010</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;
