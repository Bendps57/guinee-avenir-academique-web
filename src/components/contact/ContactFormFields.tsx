
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "./ContactFormSubmission";

interface ContactFormFieldsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactFormFields = ({ formData, onChange }: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet</Label>
          <Input 
            id="name" 
            name="name"
            placeholder="Votre nom" 
            required
            value={formData.name}
            onChange={onChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            placeholder="votre.email@exemple.com" 
            required
            value={formData.email}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Téléphone</Label>
        <Input 
          id="phone" 
          name="phone" 
          type="tel" 
          placeholder="Votre numéro de téléphone"
          value={formData.phone}
          onChange={onChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Sujet</Label>
        <Input 
          id="subject" 
          name="subject"
          placeholder="Sujet de votre message" 
          required
          value={formData.subject}
          onChange={onChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message"
          placeholder="Votre message..." 
          rows={5}
          required
          value={formData.message}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default ContactFormFields;
