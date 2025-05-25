
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Formations', path: '/formations' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'International', path: '/international' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.imgur.com/eIx2JbG.jpeg" 
              alt="IUHEG Logo" 
              className="h-16 w-auto"
            />
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-medium">Institut Universitaire</span>
              <span className="text-xs text-gray-500">Hautes Études de Guinée</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-university-blue ${
                  isActive(link.path) 
                    ? 'text-university-blue border-b-2 border-university-gold' 
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Admission Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-university-blue hover:bg-university-navy text-white"
            >
              <a 
                href="https://drive.google.com/file/d/1vPCtj0tlkIe6n6QYiy7r6rueqzX7PwOj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admission
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-university-blue focus:outline-none focus:text-university-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4 px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium transition-colors hover:text-university-blue ${
                    isActive(link.path) 
                      ? 'text-university-blue' 
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                asChild
                className="w-full bg-university-blue hover:bg-university-navy text-white"
              >
                <a 
                  href="https://drive.google.com/file/d/1vPCtj0tlkIe6n6QYiy7r6rueqzX7PwOj/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admission
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
