
import Hero from "@/components/Hero";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProgramProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const HeroProgram = ({ title, subtitle, description, imageUrl }: HeroProgramProps) => {
  return (
    <>
      <Hero 
        title={title}
        subtitle={subtitle}
        description={description}
        imageUrl={imageUrl}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/formations" className="flex items-center text-university-blue hover:text-university-navy transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Retour aux formations</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroProgram;
