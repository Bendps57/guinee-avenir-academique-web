
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If we have a hash in the URL (like #contact), scroll to that element
    if (hash) {
      // Small delay to ensure the page is loaded
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If the element with the specified ID doesn't exist, just scroll to top
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      // No hash, so simply scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
