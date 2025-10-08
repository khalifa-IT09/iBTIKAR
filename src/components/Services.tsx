import {
  Code2,
  Smartphone,
  GraduationCap,
  Users,
  Truck,
  Package,
  Globe,
  TrendingUp,
} from 'lucide-react';

const itServices = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile solutions that engage users and drive business growth.',
  },
  {
    icon: GraduationCap,
    title: 'Career Mentoring',
    description: 'Professional guidance and mentorship to help individuals advance their tech careers.',
  },
  {
    icon: Users,
    title: 'Teaching & Training',
    description: 'Comprehensive training programs in cutting-edge technologies and best practices.',
  },
];

const logisticsServices = [
  {
    icon: Truck,
    title: 'Transportation Services',
    description: 'Reliable and efficient transportation solutions for domestic and international shipping.',
  },
  {
    icon: Package,
    title: 'Warehousing',
    description: 'Secure storage facilities with advanced inventory management systems.',
  },
];

const tradeServices = [
  {
    icon: Globe,
    title: 'International Trade',
    description: 'Facilitating global trade operations with expertise in import and export regulations.',
  },
  {
    icon: TrendingUp,
    title: 'Trade Consulting',
    description: 'Strategic consulting services to optimize your international trade operations.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across IT, logistics, and trade to power your business growth
          </p>
        </div>

        <div className="space-y-20">
          <ServiceCategory
            title="IT & Technology Solutions"
            description="Cutting-edge technology services to transform your digital presence"
            services={itServices}
            color="blue"
          />

          <ServiceCategory
            title="Logistics Services"
            description="Streamlined logistics solutions for seamless operations"
            services={logisticsServices}
            color="green"
          />

          <ServiceCategory
            title="Trade Services"
            description="Expert trade services connecting you to global markets"
            services={tradeServices}
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
