
import { Button } from "@/components/ui/button";

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
          <a href="/contact#contact">Nous contacter</a>
        </Button>
        <Button 
          asChild 
          className="bg-university-gold hover:bg-yellow-600 text-white"
        >
          <a 
            href="https://drive.google.com/file/d/1vPCtj0tlkIe6n6QYiy7r6rueqzX7PwOj/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Candidater maintenant
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
