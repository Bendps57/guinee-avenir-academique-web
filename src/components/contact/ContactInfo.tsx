
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-university-blue mb-6">Informations de contact</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 flex items-start space-x-4">
            <div className="rounded-full bg-university-blue/10 p-3 flex-shrink-0">
              <MapPin className="h-6 w-6 text-university-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Adresse</h3>
              <p className="text-gray-600">123 Boulevard de l'Université</p>
              <p className="text-gray-600">Conakry, Guinée</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-start space-x-4">
            <div className="rounded-full bg-university-blue/10 p-3 flex-shrink-0">
              <Phone className="h-6 w-6 text-university-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
              <p className="text-gray-600">
                <a href="tel:+224123456789" className="hover:text-university-blue">
                  +224 12 345 6789
                </a>
              </p>
              <p className="text-gray-600">
                <a href="tel:+224987654321" className="hover:text-university-blue">
                  +224 98 765 4321
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-start space-x-4">
            <div className="rounded-full bg-university-blue/10 p-3 flex-shrink-0">
              <Mail className="h-6 w-6 text-university-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:contact@iuheg.education" className="hover:text-university-blue">
                  contact@iuheg.education
                </a>
              </p>
              <p className="text-gray-600">
                <a href="mailto:admissions@iuheg.education" className="hover:text-university-blue">
                  admissions@iuheg.education
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Horaires d'ouverture</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Lundi - Vendredi</span>
                <span className="font-medium">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Samedi</span>
                <span className="font-medium">09:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dimanche</span>
                <span className="font-medium">Fermé</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <SocialLinks />
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://www.facebook.com/IUHEG/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-university-blue">
        <span className="sr-only">Facebook</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/iuheg-institut-universitaire-des-hautes-etudes-de-guin%C3%A9e/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-university-blue">
        <span className="sr-only">LinkedIn</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  );
};

export default ContactInfo;
