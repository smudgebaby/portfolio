import { useEffect } from 'react';

interface MetaTagsConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

export const useMetaTags = (config: MetaTagsConfig) => {
  useEffect(() => {
    // Update title
    document.title = config.title;

    // Helper function to set or update meta tag
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) ||
                    document.querySelector(`meta[property="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        const attrName = name.startsWith('og:') ? 'property' : 'name';
        element.setAttribute(attrName, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', config.description);
    if (config.keywords) {
      setMetaTag('keywords', config.keywords);
    }
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    const imageUrl = config.image || './images/urban-2.jpg';
    const pageUrl = config.url || window.location.href;

    setMetaTag('og:title', config.title);
    setMetaTag('og:description', config.description);
    setMetaTag('og:image', imageUrl);
    setMetaTag('og:url', pageUrl);
    setMetaTag('og:type', config.type || 'website');
    setMetaTag('og:site_name', 'Xinyi Photography');

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', config.title);
    setMetaTag('twitter:description', config.description);
    setMetaTag('twitter:image', imageUrl);

    // Additional SEO tags
    setMetaTag('theme-color', '#0a0a0a');
    setMetaTag('author', 'Xinyi');

  }, [config]);
};
