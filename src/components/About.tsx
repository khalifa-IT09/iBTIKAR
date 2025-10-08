import { Target, Award, Shield, Zap, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Committed to delivering exceptional value and building long-term partnerships with our clients.',
  },
  {
    icon: Award,
    title: 'Industry Excellence',
    description: 'Recognized for our expertise and consistent delivery of high-quality services across all sectors.',
  },
  {
    icon: Shield,
    title: 'Trusted Partner',
    description: 'Building trust through transparency, reliability, and unwavering commitment to client success.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technologies and innovative approaches to solve complex challenges.',
  },
];

const whyChooseUs = [
  'Comprehensive service offerings across multiple industries',
  'Experienced team of professionals with proven track records',
  'Customer-centric approach with 24/7 support',
  'Competitive pricing without compromising quality',
  'Global reach with local expertise',
  'Agile methodologies and rapid delivery',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Khalifa Groupe Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diversified service provider delivering excellence across IT solutions, logistics operations,
            and international trade services. We combine industry expertise with innovative approaches to
            help businesses thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                We stand out in the industry by combining deep expertise across multiple domains
                with a genuine commitment to client success. Our integrated approach allows us to
                deliver comprehensive solutions that drive real business results.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="text-gray-600 font-medium">Years in Business</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
