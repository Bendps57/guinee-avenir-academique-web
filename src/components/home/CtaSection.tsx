
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-university-blue text-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez l'IUHEG pour une formation d'excellence</h2>
              <p className="text-lg mb-8 opacity-90">
                Inscrivez-vous dès maintenant et bénéficiez d'un enseignement de qualité et d'un diplôme reconnu au niveau international.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild 
                  className="bg-university-gold hover:bg-amber-500 text-university-blue font-medium"
                >
                  <a 
                    href="https://drive.google.com/file/d/1vPCtj0tlkIe6n6QYiy7r6rueqzX7PwOj/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Préinscrivez-vous maintenant
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                  <a href="/contact" className="flex items-center gap-2">
                    Nous contacter
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Étudiants à l'IUHEG"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
