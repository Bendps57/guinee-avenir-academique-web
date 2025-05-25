
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Envoi du formulaire avec EmailJS:", formData);

    try {
      // Configuration EmailJS - vous devrez configurer ces valeurs dans votre compte EmailJS
      const result = await emailjs.send(
        'service_iuheg', // Service ID à configurer
        'template_contact', // Template ID à configurer  
        {
          to_email: 'secretariat@iuheg.education',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        },
        'your_public_key' // Clé publique à configurer
      );

      console.log("EmailJS résultat:", result);

      if (result.status === 200) {
        toast({
          title: "Message envoyé avec succès",
          description: "Votre message a été envoyé à secretariat@iuheg.education. Nous vous répondrons dans les plus brefs délais.",
        });
        
        // Reset du formulaire
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Erreur lors de l'envoi avec EmailJS");
      }
    } catch (error) {
      console.error("Erreur EmailJS:", error);
      
      // Méthode de fallback avec Netlify Forms
      try {
        console.log("Tentative avec Netlify Forms...");
        
        const formElement = e.target as HTMLFormElement;
        const netlifyFormData = new FormData(formElement);
        netlifyFormData.append('form-name', 'contact');
        
        const netlifyResponse = await fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(netlifyFormData as any).toString()
        });

        if (netlifyResponse.ok) {
          toast({
            title: "Message envoyé (Netlify)",
            description: "Votre message a été envoyé avec succès via Netlify Forms.",
          });
          
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
          });
        } else {
          throw new Error("Toutes les méthodes d'envoi ont échoué");
        }
      } catch (fallbackError) {
        console.error("Erreur complète d'envoi:", fallbackError);
        toast({
          title: "Erreur d'envoi",
          description: "Impossible d'envoyer le message. Veuillez contacter directement secretariat@iuheg.education ou réessayer plus tard.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-university-blue mb-6">Envoyez-nous un message</h2>
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6" name="contact" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            
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
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </form>
          
          {/* Instructions pour EmailJS */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Configuration requise :</strong><br />
              Pour activer l'envoi d'emails, vous devez configurer EmailJS avec vos clés dans le code.
              <br />
              <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="underline">
                Créez un compte EmailJS gratuit
              </a>
            </p>
          </div>
          
          {/* Contact direct en cas de problème */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Problème avec le formulaire ?</strong><br />
              Contactez-nous directement : 
              <a href="mailto:secretariat@iuheg.education" className="text-university-blue hover:underline ml-1">
                secretariat@iuheg.education
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
