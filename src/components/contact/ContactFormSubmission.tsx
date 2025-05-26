
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const useContactFormSubmission = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
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

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("=== DÉBUT DE L'ENVOI DU FORMULAIRE ===");
    console.log("Données du formulaire:", formData);

    const formSubmitData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      _subject: `Nouveau message depuis IUHEG - ${formData.subject}`,
      _template: "table",
      _captcha: "false",
      _next: "https://iuheg.education/contact?success=true"
    };

    console.log("Données envoyées à FormSubmit:", formSubmitData);

    try {
      console.log("Tentative d'envoi vers FormSubmit...");
      
      const response = await fetch("https://formsubmit.co/ajax/ben.wemmert@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formSubmitData)
      });

      console.log("Statut de la réponse:", response.status);
      console.log("Headers de la réponse:", [...response.headers.entries()]);

      const responseText = await response.text();
      console.log("Réponse brute:", responseText);

      let result;
      try {
        result = JSON.parse(responseText);
        console.log("Réponse JSON parsée:", result);
      } catch (parseError) {
        console.error("Erreur de parsing JSON:", parseError);
        result = { message: responseText };
      }

      if (response.ok) {
        console.log("✅ SUCCÈS - Email envoyé avec succès");
        
        toast({
          title: "Message envoyé avec succès",
          description: "Votre message a été envoyé à ben.wemmert@gmail.com. Nous vous répondrons dans les plus brefs délais.",
        });
        
        resetForm();
      } else {
        console.error("❌ ERREUR - Réponse non-OK:", response.status, result);
        throw new Error(`Erreur ${response.status}: ${result.message || 'Erreur inconnue'}`);
      }
    } catch (error) {
      console.error("❌ ERREUR COMPLÈTE:", error);
      console.error("Type d'erreur:", typeof error);
      console.error("Message d'erreur:", error instanceof Error ? error.message : String(error));
      
      toast({
        title: "Erreur d'envoi",
        description: `Impossible d'envoyer le message. Détails: ${error instanceof Error ? error.message : 'Erreur inconnue'}. Veuillez contacter directement ben.wemmert@gmail.com.`,
        variant: "destructive",
      });
    } finally {
      console.log("=== FIN DE L'ENVOI DU FORMULAIRE ===");
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
