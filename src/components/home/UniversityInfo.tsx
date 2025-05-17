
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UniversityInfo = () => {
  return (
    <section className="py-16 bg-university-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">L'IUHEG en chiffres</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-university-gold">3900</p>
                <p className="mt-2">Étudiants</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-university-gold">1630</p>
                <p className="mt-2">Étudiants en licence professionnelle</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-university-gold">1470</p>
                <p className="mt-2">Étudiants en licence fondamentale</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-university-gold">800</p>
                <p className="mt-2">Étudiants en formation professionnelle (BTS)</p>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                <Link to="/a-propos">Découvrir notre histoire</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="IUHEG Campus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-university-gold rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-university-blue font-bold text-center">
                <span className="block text-2xl">10</span>
                <span className="text-sm">Années d'excellence</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityInfo;
