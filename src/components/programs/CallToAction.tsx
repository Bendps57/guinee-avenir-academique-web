
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  description: string;
}

const CallToAction = ({ title, description }: CallToActionProps) => {
  return (
    <div className="text-center bg-gradient-to-r from-university-blue to-university-navy p-8 rounded-lg text-white mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-6 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild className="bg-white text-university-blue hover:bg-gray-100">
          <Link to="/contact">Nous contacter</Link>
        </Button>
        <Button asChild className="bg-university-gold hover:bg-yellow-600 text-white">
          <Link to="/preinscription">S'inscrire maintenant</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
