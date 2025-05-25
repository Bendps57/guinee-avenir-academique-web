
const AboutVision = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <img 
          src="https://i.imgur.com/7WKv5Rq.jpeg" 
          alt="Vision de l'IUHEG" 
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="order-1 lg:order-2">
        <h3 className="text-2xl md:text-3xl font-bold text-university-blue mb-6">Notre vision</h3>
        <p className="text-gray-700 mb-4">
          L'IUHEG aspire à devenir une référence en matière d'éducation supérieure en Afrique, reconnue internationalement pour l'excellence de ses programmes, la qualité de sa recherche et l'impact de ses diplômés sur la société.
        </p>
        <p className="text-gray-700 mb-4">
          Nous envisageons un avenir où nos étudiants et nos chercheurs contribuent significativement au développement économique, social et culturel de la Guinée et du continent africain, tout en s'intégrant dans un monde globalisé.
        </p>
        <p className="text-gray-700">
          Notre ambition est de former des leaders visionnaires, éthiques et compétents, capables de relever les défis contemporains et de façonner un avenir meilleur pour tous.
        </p>
      </div>
    </div>
  );
};

export default AboutVision;
