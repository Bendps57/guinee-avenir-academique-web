
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useContactFormSubmission } from "./ContactFormSubmission";
import ContactFormFields from "./ContactFormFields";
import ContactFormFallback from "./ContactFormFallback";

const ContactForm = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactFormSubmission();

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-university-blue mb-6">Envoyez-nous un message</h2>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <ContactFormFields formData={formData} onChange={handleChange} />
            <Button 
              type="submit" 
              className="w-full bg-university-blue hover:bg-university-navy"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </form>
          
          <ContactFormFallback />
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
