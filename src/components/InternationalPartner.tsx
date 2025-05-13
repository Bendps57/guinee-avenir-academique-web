
import { Card, CardContent } from "@/components/ui/card";

interface InternationalPartnerProps {
  name: string;
  country: string;
  logo: string;
  description?: string;
}

const InternationalPartner = ({ 
  name, 
  country, 
  logo, 
  description 
}: InternationalPartnerProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-center p-6 bg-gray-50 h-32">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-h-20 max-w-full"
        />
      </div>
      <CardContent className="flex-grow p-6 pt-4">
        <h3 className="text-lg font-semibold mb-1 text-university-blue">{name}</h3>
        <p className="text-sm font-medium text-university-gold mb-3">{country}</p>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default InternationalPartner;
