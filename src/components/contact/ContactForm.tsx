
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Créer le mailto link avec toutes les informations
    const subject = encodeURIComponent(`Contact IUHEG: ${formData.subject}`);
    const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}

Message:
${formData.message}
    `);
    
    // Ouvrir le client email avec les données pré-remplies
    window.location.href = `mailto:secretariat@iuheg.education?subject=${subject}&body=${body}`;

    // Simuler l'envoi pour l'interface utilisateur
    setTimeout(() => {
      toast({
        title: "Message préparé",
        description: "Votre client email s'est ouvert avec le message pré-rempli. Envoyez-le pour nous contacter.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-university-blue mb-6">Envoyez-nous un message</h2>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input 
                  id="name" 
                  name="name"
                  placeholder="Votre nom" 
                  required
                  value={formData.name}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-university-blue hover:bg-university-navy"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Préparation..." : "Envoyer le message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
