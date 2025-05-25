import { Book, GraduationCap, Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-university-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">IUHEG</h3>
            <p className="text-gray-300 mb-4">
              Institut Universitaire des Hautes Études de Guinée, une université 
              d'excellence dédiée à former les leaders de demain.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/IUHEG/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-university-gold">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/iuheg-institut-universitaire-des-hautes-etudes-de-guinée/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-university-gold">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-university-gold">Accueil</Link></li>
              <li><Link to="/formations" className="text-gray-300 hover:text-university-gold">Formations</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-university-gold">À Propos</Link></li>
              <li><Link to="/international" className="text-gray-300 hover:text-university-gold">Coopération Internationale</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-university-gold">Contact</Link></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Formations</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Book className="h-4 w-4 mr-2 text-university-gold" />
                <Link to="/formations" className="text-gray-300 hover:text-university-gold">
                  Licences/BAC+3
                </Link>
              </li>
              <li className="flex items-center">
                <Book className="h-4 w-4 mr-2 text-university-gold" />
                <Link to="/formations" className="text-gray-300 hover:text-university-gold">
                  Licences/BAC+4
                </Link>
              </li>
              <li className="flex items-center">
                <GraduationCap className="h-4 w-4 mr-2 text-university-gold" />
                <Link to="/formations" className="text-gray-300 hover:text-university-gold">
                  Masters
                </Link>
              </li>
              <li className="flex items-center">
                <Book className="h-4 w-4 mr-2 text-university-gold" />
                <Link to="/formations" className="text-gray-300 hover:text-university-gold">
                  BTS
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-university-gold mt-1" />
                <span className="text-gray-300">Soumanbossia - Commune de Ratoma - Conakry - BP : 1134</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-university-gold" />
                <a href="mailto:contact@iuheg.education" className="text-gray-300 hover:text-university-gold">contact@iuheg.education</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-university-gold" />
                <a href="tel:+224622158404" className="text-gray-300 hover:text-university-gold">+224 622 15 84 04</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} IUHEG. Tous droits réservés.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center">
            <Link to="/mentions-legales" className="text-gray-400 hover:text-university-gold text-sm">Mentions légales</Link>
            <Link to="/confidentialite" className="text-gray-400 hover:text-university-gold text-sm">Politique de confidentialité</Link>
            <a href="https://www.elimyt.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-university-gold text-sm flex items-center">
              Créé par eLimyt <Heart className="h-3 w-3 ml-1 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
