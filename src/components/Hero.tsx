
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  cta?: {
    primary?: { 
      text: string; 
      link: string;
      icon?: React.ReactNode;
    };
    secondary?: { 
      text: string; 
      link: string;
      icon?: React.ReactNode;
    };
  };
}

const Hero = ({
  title,
  subtitle,
  description,
  imageUrl,
  videoUrl,
  cta,
}: HeroProps) => {
  return (
    <div className="relative overflow-hidden bg-university-blue text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 z-10">
          <div className="flex items-start mb-2">
            <div className="h-1 w-20 bg-university-gold mt-4 mr-4"></div>
            {subtitle && <p className="text-lg text-university-gold font-medium">{subtitle}</p>}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              {description}
            </p>
          )}
          
          {cta && (
            <div className="flex flex-wrap gap-4">
              {cta.primary && (
                <Button 
                  asChild
                  className="bg-university-gold hover:bg-amber-500 text-university-blue font-semibold px-8 py-6 text-lg"
                >
                  {cta.primary.link.startsWith('http') ? (
                    <a href={cta.primary.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {cta.primary.text}
                      {cta.primary.icon}
                    </a>
                  ) : (
                    <Link to={cta.primary.link} className="flex items-center gap-2">
                      {cta.primary.text}
                      {cta.primary.icon}
                    </Link>
                  )}
                </Button>
              )}
              
              {cta.secondary && (
                <Button 
                  asChild
                  variant="outline" 
                  className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg"
                >
                  {cta.secondary.link.startsWith('http') ? (
                    <a href={cta.secondary.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {cta.secondary.text}
                      {cta.secondary.icon}
                    </a>
                  ) : (
                    <Link to={cta.secondary.link} className="flex items-center gap-2">
                      {cta.secondary.text}
                      {cta.secondary.icon}
                    </Link>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
        
        {/* Media (Image or Video) */}
        <div className="lg:w-1/2 z-10">
          {videoUrl ? (
            <video 
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg shadow-xl w-full object-cover h-auto lg:h-[500px]" 
            />
          ) : imageUrl ? (
            <img 
              src={imageUrl} 
              alt="IUHEG University"
              className="rounded-lg shadow-xl w-full object-cover h-auto lg:h-[500px]" 
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Hero;
