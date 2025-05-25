
const WorldMapSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-university-blue mb-4">Notre présence mondiale</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            L'IUHEG est connecté à un réseau mondial d'institutions académiques et de partenaires professionnels
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-lg">Carte du monde avec nos partenaires</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
