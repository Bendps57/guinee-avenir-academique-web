
import { Container } from "@/components/ui/container";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    // Initialize map with the provided token
    mapboxgl.accessToken = mapboxToken;
    
    // Coordinates for Simanbossia, Commune de Ratoma (Conakry, Guinea)
    // Approximate coordinates based on the location name
    const coordinates = [-13.6317, 9.6512]; // Longitude, Latitude for Conakry area
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coordinates,
      zoom: 14
    });

    // Add navigation controls (zoom in/out)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker for the university location
    new mapboxgl.Marker({ color: '#3b82f6' })
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3 class="font-bold">IUHEG</h3><p>Simanbossia, Commune de Ratoma</p>')
      )
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken]);

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-university-blue mb-8 text-center">Nous trouver</h2>
        
        {!mapboxToken ? (
          <div className="mb-6">
            <p className="text-sm mb-2">Veuillez entrer votre Mapbox token pour afficher la carte:</p>
            <input
              type="text"
              placeholder="Entrez votre Mapbox token public"
              className="w-full p-2 border rounded"
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <p className="text-xs mt-1 text-gray-500">
              Vous pouvez obtenir un token sur <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">mapbox.com</a>
            </p>
          </div>
        ) : null}
        
        <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: "500px" }}>
          {mapboxToken ? (
            <div ref={mapContainer} className="w-full h-full" />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Entrez votre Mapbox token pour afficher la carte de localisation de l'IUHEG à Simanbossia, Commune de Ratoma</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default MapSection;
