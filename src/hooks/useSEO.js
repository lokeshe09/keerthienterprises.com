import { useEffect } from 'react';

const useSEO = ({ title, description, canonical }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
    if (canonical) {
      const linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        // Handle both relative and absolute paths if needed, 
        // but for now just set what's passed.
        linkCanonical.setAttribute('href', canonical);
      }
    }
  }, [title, description, canonical]);
};

export default useSEO;
