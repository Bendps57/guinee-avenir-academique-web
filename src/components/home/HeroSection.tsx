
import Hero from "@/components/Hero";
import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-20">
      <Hero 
        title="Façonnez votre avenir à l'IUHEG"
        subtitle="Excellence académique"
        description="L'Institut Universitaire des Hautes Études de Guinée forme les leaders de demain dans un environnement stimulant et international."
        imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        cta={{
          primary: { 
            text: "Préinscription en ligne", 
            link: "/preinscription",
            icon: <ArrowRight />
          },
          secondary: { 
            text: "Demander des informations", 
            link: "/contact",
            icon: <Mail />
          }
        }}
      />
    </div>
  );
};

export default HeroSection;
