
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

    console.log("Envoi du formulaire avec FormSubmit:", formData);

    try {
      const response = await fetch("https://formsubmit.co/ajax/secretariat@iuheg.education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `Nouveau message depuis IUHEG - ${formData.subject}`,
          _template: "table"
        })
      });

      console.log("Réponse FormSubmit:", response);

      if (response.ok) {
        const result = await response.json();
        console.log("Résultat FormSubmit:", result);

        toast({
          title: "Message envoyé avec succès",
          description: "Votre message a été envoyé à secretariat@iuheg.education. Nous vous répondrons dans les plus brefs délais.",
        });
        
        resetForm();
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Impossible d'envoyer le message. Veuillez contacter directement secretariat@iuheg.education ou réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
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
