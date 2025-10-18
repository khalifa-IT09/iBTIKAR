import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ContentItem {
  id: string;
  en: string;
  fr: string;
  section: string;
  type: 'text' | 'title' | 'description' | 'button' | 'stat' | 'service' | 'feature';
}

export interface AdminContent {
  hero: {
    tagline: ContentItem;
    companyName: ContentItem;
    subtitle: ContentItem;
    exploreServices: ContentItem;
    getInTouch: ContentItem;
    stats: {
      projects: ContentItem;
      years: ContentItem;
      clients: ContentItem;
      support: ContentItem;
    };
  };
  services: {
    title: ContentItem;
    subtitle: ContentItem;
    it: {
      title: ContentItem;
      subtitle: ContentItem;
      webDev: {
        title: ContentItem;
        description: ContentItem;
      };
      mobileDev: {
        title: ContentItem;
        description: ContentItem;
      };
      mentoring: {
        title: ContentItem;
        description: ContentItem;
      };
      training: {
        title: ContentItem;
        description: ContentItem;
      };
    };
    ecommerce: {
      title: ContentItem;
      subtitle: ContentItem;
      intermediary: {
        title: ContentItem;
        description: ContentItem;
      };
      crossBorder: {
        title: ContentItem;
        description: ContentItem;
      };
    };
  };
  about: {
    title: ContentItem;
    subtitle: ContentItem;
    features: {
      mission: {
        title: ContentItem;
        description: ContentItem;
      };
      excellence: {
        title: ContentItem;
        description: ContentItem;
      };
      trust: {
        title: ContentItem;
        description: ContentItem;
      };
      innovation: {
        title: ContentItem;
        description: ContentItem;
      };
    };
    whyChooseUs: {
      title: ContentItem;
      subtitle: ContentItem;
      benefits: ContentItem[];
    };
  };
  contact: {
    title: ContentItem;
    subtitle: ContentItem;
    form: {
      name: ContentItem;
      email: ContentItem;
      phone: ContentItem;
      service: ContentItem;
      message: ContentItem;
      sendMessage: ContentItem;
      thankYou: ContentItem;
      successMessage: ContentItem;
    };
    info: {
      email: {
        title: ContentItem;
        subtitle: ContentItem;
      };
      phone: {
        title: ContentItem;
        subtitle: ContentItem;
      };
      location: {
        title: ContentItem;
        subtitle: ContentItem;
      };
      support: {
        title: ContentItem;
        subtitle: ContentItem;
        button: ContentItem;
      };
    };
  };
  footer: {
    companyName: ContentItem;
    description: ContentItem;
    quickLinks: ContentItem;
    contactInfo: ContentItem;
    copyright: ContentItem;
  };
}

interface AdminContextType {
  isAdminMode: boolean;
  setIsAdminMode: (mode: boolean) => void;
  content: AdminContent;
  updateContent: (path: string, en: string, fr: string) => void;
  saveChanges: () => void;
  resetChanges: () => void;
  hasUnsavedChanges: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [content, setContent] = useState<AdminContent>({} as AdminContent);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Initialize content from existing locale files
  useEffect(() => {
    const initializeContent = async () => {
      try {
        const [enData, frData] = await Promise.all([
          import('../locales/en.json'),
          import('../locales/fr.json')
        ]);
        
        const en = enData.default;
        const fr = frData.default;
        
        const adminContent: AdminContent = {
          hero: {
            tagline: { id: 'hero.tagline', en: en.hero.tagline, fr: fr.hero.tagline, section: 'hero', type: 'text' },
            companyName: { id: 'hero.companyName', en: en.hero.companyName, fr: fr.hero.companyName, section: 'hero', type: 'title' },
            subtitle: { id: 'hero.subtitle', en: en.hero.subtitle, fr: fr.hero.subtitle, section: 'hero', type: 'description' },
            exploreServices: { id: 'hero.exploreServices', en: en.hero.exploreServices, fr: fr.hero.exploreServices, section: 'hero', type: 'button' },
            getInTouch: { id: 'hero.getInTouch', en: en.hero.getInTouch, fr: fr.hero.getInTouch, section: 'hero', type: 'button' },
            stats: {
              projects: { id: 'hero.stats.projects', en: en.hero.stats.projects, fr: fr.hero.stats.projects, section: 'hero', type: 'stat' },
              years: { id: 'hero.stats.years', en: en.hero.stats.years, fr: fr.hero.stats.years, section: 'hero', type: 'stat' },
              clients: { id: 'hero.stats.clients', en: en.hero.stats.clients, fr: fr.hero.stats.clients, section: 'hero', type: 'stat' },
              support: { id: 'hero.stats.support', en: en.hero.stats.support, fr: fr.hero.stats.support, section: 'hero', type: 'stat' },
            }
          },
          services: {
            title: { id: 'services.title', en: en.services.title, fr: fr.services.title, section: 'services', type: 'title' },
            subtitle: { id: 'services.subtitle', en: en.services.subtitle, fr: fr.services.subtitle, section: 'services', type: 'description' },
            it: {
              title: { id: 'services.it.title', en: en.services.it.title, fr: fr.services.it.title, section: 'services', type: 'title' },
              subtitle: { id: 'services.it.subtitle', en: en.services.it.subtitle, fr: fr.services.it.subtitle, section: 'services', type: 'description' },
              webDev: {
                title: { id: 'services.it.webDev.title', en: en.services.it.webDev.title, fr: fr.services.it.webDev.title, section: 'services', type: 'service' },
                description: { id: 'services.it.webDev.description', en: en.services.it.webDev.description, fr: fr.services.it.webDev.description, section: 'services', type: 'description' },
              },
              mobileDev: {
                title: { id: 'services.it.mobileDev.title', en: en.services.it.mobileDev.title, fr: fr.services.it.mobileDev.title, section: 'services', type: 'service' },
                description: { id: 'services.it.mobileDev.description', en: en.services.it.mobileDev.description, fr: fr.services.it.mobileDev.description, section: 'services', type: 'description' },
              },
              mentoring: {
                title: { id: 'services.it.mentoring.title', en: en.services.it.mentoring.title, fr: fr.services.it.mentoring.title, section: 'services', type: 'service' },
                description: { id: 'services.it.mentoring.description', en: en.services.it.mentoring.description, fr: fr.services.it.mentoring.description, section: 'services', type: 'description' },
              },
              training: {
                title: { id: 'services.it.training.title', en: en.services.it.training.title, fr: fr.services.it.training.title, section: 'services', type: 'service' },
                description: { id: 'services.it.training.description', en: en.services.it.training.description, fr: fr.services.it.training.description, section: 'services', type: 'description' },
              },
            },
            ecommerce: {
              title: { id: 'services.ecommerce.title', en: en.services.ecommerce.title, fr: fr.services.ecommerce.title, section: 'services', type: 'title' },
              subtitle: { id: 'services.ecommerce.subtitle', en: en.services.ecommerce.subtitle, fr: fr.services.ecommerce.subtitle, section: 'services', type: 'description' },
              intermediary: {
                title: { id: 'services.ecommerce.intermediary.title', en: en.services.ecommerce.intermediary.title, fr: fr.services.ecommerce.intermediary.title, section: 'services', type: 'service' },
                description: { id: 'services.ecommerce.intermediary.description', en: en.services.ecommerce.intermediary.description, fr: fr.services.ecommerce.intermediary.description, section: 'services', type: 'description' },
              },
              crossBorder: {
                title: { id: 'services.ecommerce.crossBorder.title', en: en.services.ecommerce.crossBorder.title, fr: fr.services.ecommerce.crossBorder.title, section: 'services', type: 'service' },
                description: { id: 'services.ecommerce.crossBorder.description', en: en.services.ecommerce.crossBorder.description, fr: fr.services.ecommerce.crossBorder.description, section: 'services', type: 'description' },
              },
            },
          },
          about: {
            title: { id: 'about.title', en: en.about.title, fr: fr.about.title, section: 'about', type: 'title' },
            subtitle: { id: 'about.subtitle', en: en.about.subtitle, fr: fr.about.subtitle, section: 'about', type: 'description' },
            features: {
              mission: {
                title: { id: 'about.features.mission.title', en: en.about.features.mission.title, fr: fr.about.features.mission.title, section: 'about', type: 'feature' },
                description: { id: 'about.features.mission.description', en: en.about.features.mission.description, fr: fr.about.features.mission.description, section: 'about', type: 'description' },
              },
              excellence: {
                title: { id: 'about.features.excellence.title', en: en.about.features.excellence.title, fr: fr.about.features.excellence.title, section: 'about', type: 'feature' },
                description: { id: 'about.features.excellence.description', en: en.about.features.excellence.description, fr: fr.about.features.excellence.description, section: 'about', type: 'description' },
              },
              trust: {
                title: { id: 'about.features.trust.title', en: en.about.features.trust.title, fr: fr.about.features.trust.title, section: 'about', type: 'feature' },
                description: { id: 'about.features.trust.description', en: en.about.features.trust.description, fr: fr.about.features.trust.description, section: 'about', type: 'description' },
              },
              innovation: {
                title: { id: 'about.features.innovation.title', en: en.about.features.innovation.title, fr: fr.about.features.innovation.title, section: 'about', type: 'feature' },
                description: { id: 'about.features.innovation.description', en: en.about.features.innovation.description, fr: fr.about.features.innovation.description, section: 'about', type: 'description' },
              },
            },
            whyChooseUs: {
              title: { id: 'about.whyChooseUs.title', en: en.about.whyChooseUs.title, fr: fr.about.whyChooseUs.title, section: 'about', type: 'title' },
              subtitle: { id: 'about.whyChooseUs.subtitle', en: en.about.whyChooseUs.subtitle, fr: fr.about.whyChooseUs.subtitle, section: 'about', type: 'description' },
              benefits: en.about.whyChooseUs.benefits.map((benefit: string, index: number) => ({
                id: `about.whyChooseUs.benefits.${index}`,
                en: benefit,
                fr: fr.about.whyChooseUs.benefits[index],
                section: 'about',
                type: 'text' as const
              }))
            },
          },
          contact: {
            title: { id: 'contact.title', en: en.contact.title, fr: fr.contact.title, section: 'contact', type: 'title' },
            subtitle: { id: 'contact.subtitle', en: en.contact.subtitle, fr: fr.contact.subtitle, section: 'contact', type: 'description' },
            form: {
              name: { id: 'contact.form.name', en: en.contact.form.name, fr: fr.contact.form.name, section: 'contact', type: 'text' },
              email: { id: 'contact.form.email', en: en.contact.form.email, fr: fr.contact.form.email, section: 'contact', type: 'text' },
              phone: { id: 'contact.form.phone', en: en.contact.form.phone, fr: fr.contact.form.phone, section: 'contact', type: 'text' },
              service: { id: 'contact.form.service', en: en.contact.form.service, fr: fr.contact.form.service, section: 'contact', type: 'text' },
              message: { id: 'contact.form.message', en: en.contact.form.message, fr: fr.contact.form.message, section: 'contact', type: 'text' },
              sendMessage: { id: 'contact.form.sendMessage', en: en.contact.form.sendMessage, fr: fr.contact.form.sendMessage, section: 'contact', type: 'button' },
              thankYou: { id: 'contact.form.thankYou', en: en.contact.form.thankYou, fr: fr.contact.form.thankYou, section: 'contact', type: 'text' },
              successMessage: { id: 'contact.form.successMessage', en: en.contact.form.successMessage, fr: fr.contact.form.successMessage, section: 'contact', type: 'text' },
            },
            info: {
              email: {
                title: { id: 'contact.info.email.title', en: en.contact.info.email.title, fr: fr.contact.info.email.title, section: 'contact', type: 'text' },
                subtitle: { id: 'contact.info.email.subtitle', en: en.contact.info.email.subtitle, fr: fr.contact.info.email.subtitle, section: 'contact', type: 'text' },
              },
              phone: {
                title: { id: 'contact.info.phone.title', en: en.contact.info.phone.title, fr: fr.contact.info.phone.title, section: 'contact', type: 'text' },
                subtitle: { id: 'contact.info.phone.subtitle', en: en.contact.info.phone.subtitle, fr: fr.contact.info.phone.subtitle, section: 'contact', type: 'text' },
              },
              location: {
                title: { id: 'contact.info.location.title', en: en.contact.info.location.title, fr: fr.contact.info.location.title, section: 'contact', type: 'text' },
                subtitle: { id: 'contact.info.location.subtitle', en: en.contact.info.location.subtitle, fr: fr.contact.info.location.subtitle, section: 'contact', type: 'text' },
              },
              support: {
                title: { id: 'contact.info.support.title', en: en.contact.info.support.title, fr: fr.contact.info.support.title, section: 'contact', type: 'text' },
                subtitle: { id: 'contact.info.support.subtitle', en: en.contact.info.support.subtitle, fr: fr.contact.info.support.subtitle, section: 'contact', type: 'text' },
                button: { id: 'contact.info.support.button', en: en.contact.info.support.button, fr: fr.contact.info.support.button, section: 'contact', type: 'button' },
              },
            },
          },
          footer: {
            companyName: { id: 'footer.companyName', en: en.footer.companyName, fr: fr.footer.companyName, section: 'footer', type: 'title' },
            description: { id: 'footer.description', en: en.footer.description, fr: fr.footer.description, section: 'footer', type: 'description' },
            quickLinks: { id: 'footer.quickLinks', en: en.footer.quickLinks, fr: fr.footer.quickLinks, section: 'footer', type: 'text' },
            contactInfo: { id: 'footer.contactInfo', en: en.footer.contactInfo, fr: fr.footer.contactInfo, section: 'footer', type: 'text' },
            copyright: { id: 'footer.copyright', en: en.footer.copyright, fr: fr.footer.copyright, section: 'footer', type: 'text' },
          },
        };
        
        setContent(adminContent);
      } catch (error) {
        console.error('Failed to initialize admin content:', error);
      }
    };

    initializeContent();
  }, []);

  const updateContent = (path: string, en: string, fr: string) => {
    setContent(prevContent => {
      const newContent = { ...prevContent };
      const keys = path.split('.');
      let current: any = newContent;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      const lastKey = keys[keys.length - 1];
      if (current[lastKey]) {
        current[lastKey] = { ...current[lastKey], en, fr };
      }
      
      setHasUnsavedChanges(true);
      return newContent;
    });
  };

  const saveChanges = async () => {
    try {
      // Here you would typically save to a backend API
      // For now, we'll save to localStorage as a demo
      localStorage.setItem('admin-content', JSON.stringify(content));
      setHasUnsavedChanges(false);
      alert('Changes saved successfully!');
    } catch (error) {
      console.error('Failed to save changes:', error);
      alert('Failed to save changes. Please try again.');
    }
  };

  const resetChanges = () => {
    // Reload from original locale files
    window.location.reload();
  };

  const value: AdminContextType = {
    isAdminMode,
    setIsAdminMode,
    content,
    updateContent,
    saveChanges,
    resetChanges,
    hasUnsavedChanges,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
