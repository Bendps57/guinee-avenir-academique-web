
import { Container } from "@/components/ui/container";

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-university-blue mb-8 text-center">Nous trouver</h2>
        <div className="bg-gray-200 rounded-lg aspect-[16/9]">
          {/* Here you would integrate a map like Google Maps or OpenStreetMap */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Carte de localisation de l'IUHEG</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MapSection;
