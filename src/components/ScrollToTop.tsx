
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si nous avons un hash dans l'URL (comme #licences), faisons défiler jusqu'à cet élément
    if (hash) {
      // Petit délai pour s'assurer que la page est chargée
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Si l'élément avec l'ID spécifié n'existe pas, revenez simplement en haut
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      // Pas de hash, donc simplement défiler vers le haut
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
