
import Hero from "@/components/Hero";
import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-20">
      <Hero 
        title="IUHEG - Au rythme du progrès depuis 16 ans !"
        subtitle="Excellence académique"
        description="L'Institut Universitaire des Hautes Études de Guinée vous offre une formation d'excellence avec des diplômes reconnus au niveau international."
        imageUrl="https://i.imgur.com/zXdwdhF.jpeg"
        cta={{
          primary: { 
            text: "Dossier de préinscription", 
            link: "https://drive.google.com/file/d/1vPCtj0tlkIe6n6QYiy7r6rueqzX7PwOj/view?usp=drive_link",
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
