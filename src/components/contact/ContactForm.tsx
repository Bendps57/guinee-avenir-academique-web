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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Envoi du formulaire avec les données:", formData);

    try {
      // Première tentative avec l'API AJAX de FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/secretariat@iuheg.education", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `Nouveau message depuis IUHEG - ${formData.subject}`,
          _template: "table",
          _captcha: "false",
          _autoresponse: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais."
        })
      });

      console.log("Statut de la réponse:", response.status);
      
      const result = await response.json();
      console.log("Réponse du serveur:", result);

      if (response.ok && result.success) {
        toast({
          title: "Message envoyé avec succès",
          description: "Votre message a été envoyé à secretariat@iuheg.education. Vous devriez recevoir une confirmation par email.",
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
        console.error("Erreur de FormSubmit:", result);
        
        // Tentative de fallback avec une méthode alternative
        console.log("Tentative avec méthode alternative...");
        
        const fallbackResponse = await fetch("https://formspree.io/f/secretariat@iuheg.education", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            _subject: `Nouveau message depuis IUHEG - ${formData.subject}`
          })
        });

        if (fallbackResponse.ok) {
          toast({
            title: "Message envoyé (méthode alternative)",
            description: "Votre message a été envoyé avec succès via une méthode alternative.",
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
      }
    } catch (error) {
      console.error("Erreur complète d'envoi:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Impossible d'envoyer le message. Veuillez contacter directement secretariat@iuheg.education ou réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </form>
          
          {/* Contact direct en cas de problème */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
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
