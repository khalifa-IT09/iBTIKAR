import { Target, Award, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const getFeatures = (t: (key: string) => string) => [
  {
    icon: Target,
    title: t('about.features.mission.title'),
    description: t('about.features.mission.description'),
  },
  {
    icon: Award,
    title: t('about.features.excellence.title'),
    description: t('about.features.excellence.description'),
  },
  {
    icon: Shield,
    title: t('about.features.trust.title'),
    description: t('about.features.trust.description'),
  },
  {
    icon: Zap,
    title: t('about.features.innovation.title'),
    description: t('about.features.innovation.description'),
  },
];

const getWhyChooseUs = (t: (key: string) => string) => [
  t('about.whyChooseUs.benefits.0'),
  t('about.whyChooseUs.benefits.1'),
  t('about.whyChooseUs.benefits.2'),
  t('about.whyChooseUs.benefits.3'),
  t('about.whyChooseUs.benefits.4'),
  t('about.whyChooseUs.benefits.5'),
];

export default function About() {
  const { t, isRTL } = useLanguage();
  const features = getFeatures(t);
  const whyChooseUs = getWhyChooseUs(t);

  return (
    <section id="about" className="py-24 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
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
                {t('about.whyChooseUs.title')}
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                {t('about.whyChooseUs.subtitle')}
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
                  5+
                </div>
                <div className="text-gray-600 font-medium">{t('about.stats.years')}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-gray-600 font-medium">{t('about.stats.projects')}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-gray-600 font-medium">{t('about.stats.clients')}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">{t('about.stats.support')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
