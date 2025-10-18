// Analytics utility for tracking user interactions and performance

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

class Analytics {
  private isEnabled: boolean;
  private googleAnalyticsId: string | null;

  constructor() {
    this.isEnabled = import.meta.env.PROD;
    this.googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || null;
    
    if (this.isEnabled && this.googleAnalyticsId) {
      this.initializeGoogleAnalytics();
    }
  }

  private initializeGoogleAnalytics() {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.googleAnalyticsId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', this.googleAnalyticsId!);
  }

  trackEvent(event: AnalyticsEvent) {
    if (!this.isEnabled) {
      console.log('Analytics event:', event);
      return;
    }

    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  }

  trackPageView(page: string) {
    if (!this.isEnabled) {
      console.log('Page view:', page);
      return;
    }

    if (window.gtag) {
      window.gtag('config', this.googleAnalyticsId!, {
        page_path: page,
      });
    }
  }

  trackFormSubmission(formName: string) {
    this.trackEvent({
      action: 'form_submit',
      category: 'engagement',
      label: formName,
    });
  }

  trackButtonClick(buttonName: string) {
    this.trackEvent({
      action: 'button_click',
      category: 'engagement',
      label: buttonName,
    });
  }

  trackScrollToSection(section: string) {
    this.trackEvent({
      action: 'scroll_to_section',
      category: 'navigation',
      label: section,
    });
  }
}

// Create singleton instance
export const analytics = new Analytics();

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

