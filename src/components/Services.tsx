import {
  Code2,
  Smartphone,
  GraduationCap,
  Users,
  ShoppingCart,
  Globe2,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const getItServices = (t: (key: string) => string) => [
  {
    icon: Code2,
    title: t('services.it.webDev.title'),
    description: t('services.it.webDev.description'),
  },
  {
    icon: Smartphone,
    title: t('services.it.mobileDev.title'),
    description: t('services.it.mobileDev.description'),
  },
  {
    icon: GraduationCap,
    title: t('services.it.mentoring.title'),
    description: t('services.it.mentoring.description'),
  },
  {
    icon: Users,
    title: t('services.it.training.title'),
    description: t('services.it.training.description'),
  },
];


const getEcommerceServices = (t: (key: string) => string) => [
  {
    icon: ShoppingCart,
    title: t('services.ecommerce.intermediary.title'),
    description: t('services.ecommerce.intermediary.description'),
  },
  {
    icon: Globe2,
    title: t('services.ecommerce.crossBorder.title'),
    description: t('services.ecommerce.crossBorder.description'),
  },
];

export default function Services() {
  const { t, isRTL } = useLanguage();
  const itServices = getItServices(t);
  const ecommerceServices = getEcommerceServices(t);

  return (
    <section id="services" className="py-24 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="space-y-20">
          <ServiceCategory
            title={t('services.it.title')}
            description={t('services.it.subtitle')}
            services={itServices}
            color="blue"
          />

          <ServiceCategory
            title={t('services.ecommerce.title')}
            description={t('services.ecommerce.subtitle')}
            services={ecommerceServices}
            color="cyan"
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
  }>;
  color: 'blue' | 'green' | 'cyan';
}

function ServiceCategory({ title, description, services, color }: ServiceCategoryProps) {
  const colorClasses = {
    blue: {
      gradient: 'from-blue-600 to-blue-400',
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      border: 'border-blue-200',
    },
    green: {
      gradient: 'from-green-600 to-green-400',
      bg: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      border: 'border-green-200',
    },
    cyan: {
      gradient: 'from-cyan-600 to-cyan-400',
      bg: 'bg-cyan-50',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      border: 'border-cyan-200',
    },
  };

  const colors = colorClasses[color];

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className={`text-3xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-3`}>
          {title}
        </h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group`}
            >
              <div className={`${colors.iconBg} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={colors.iconColor} size={28} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
