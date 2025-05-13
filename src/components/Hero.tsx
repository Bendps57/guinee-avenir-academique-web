
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  cta?: {
    primary?: { text: string; link: string };
    secondary?: { text: string; link: string };
  };
}

const Hero = ({
  title,
  subtitle,
  description,
  imageUrl,
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
                  <a href={cta.primary.link}>{cta.primary.text}</a>
                </Button>
              )}
              
              {cta.secondary && (
                <Button 
                  asChild
                  variant="outline" 
                  className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg"
                >
                  <a href={cta.secondary.link}>{cta.secondary.text}</a>
                </Button>
              )}
            </div>
          )}
        </div>
        
        {/* Image */}
        {imageUrl && (
          <div className="lg:w-1/2 z-10">
            <img 
              src={imageUrl} 
              alt="IUHEG University"
              className="rounded-lg shadow-xl w-full object-cover h-auto lg:h-[500px]" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
