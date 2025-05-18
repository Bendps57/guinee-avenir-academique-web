
import Hero from "@/components/Hero";
import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-20">
      <Hero 
        title="IUHEG - Au rythme du progrès depuis 16 ans !"
        subtitle="Excellence académique"
        description="L'Institut Universitaire des Hautes Études de Guinée vous offre une formation d'excellence avec des diplômes reconnus au niveau international."
        videoUrl="https://www.iuheg.education/presentation.mp4"
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
