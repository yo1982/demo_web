
import { useCallback } from 'react';

// Define gtag and fbq on the window object for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: { [key: string]: any }) => void;
    fbq?: (command: string, action: string, params?: { [key: string]: any }) => void;
  }
}

export const useAnalytics = () => {
  const trackPageView = useCallback((path: string) => {
    // Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        'page_path': path,
      });
      console.log(`Analytics: Page view tracked for ${path} (GA)`);
    }

    // Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
      console.log(`Analytics: Page view tracked for ${path} (Meta)`);
    }
  }, []);

  const trackEvent = useCallback((eventName: string, params: { [key: string]: any }) => {
    // Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
      console.log(`Analytics: Event '${eventName}' tracked (GA)`, params);
    }
    
    // Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, params);
      console.log(`Analytics: Event '${eventName}' tracked (Meta)`, params);
    }
  }, []);

  return { trackPageView, trackEvent };
};
