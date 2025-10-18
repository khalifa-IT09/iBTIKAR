import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from '../hooks/useForm';
import { useLanguage } from '../contexts/LanguageContext';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
  } = useForm(initialFormData);
  const { t, isRTL } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="text-green-600" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {t('contact.form.thankYou')}
                      </h3>
                      <p className="text-gray-600">
                        {t('contact.form.successMessage')}
                      </p>
                    </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')} {t('contact.form.required')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <div id="name-error" className="mt-1 flex items-center text-red-600 text-sm">
                          <AlertCircle size={16} className="mr-1" />
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.email')} {t('contact.form.required')}
                        </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <div id="email-error" className="mt-1 flex items-center text-red-600 text-sm">
                          <AlertCircle size={16} className="mr-1" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.phone')}
                        </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+222 22 09 09 32"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <div id="phone-error" className="mt-1 flex items-center text-red-600 text-sm">
                          <AlertCircle size={16} className="mr-1" />
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.service')} {t('contact.form.required')}
                        </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          errors.service ? 'border-red-500' : 'border-gray-300'
                        }`}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                      >
                            <option value="">{t('contact.form.selectService')}</option>
                            <option value="web-development">{t('contact.form.services.webDev')}</option>
                            <option value="mobile-development">{t('contact.form.services.mobileDev')}</option>
                            <option value="career-mentoring">{t('contact.form.services.mentoring')}</option>
                            <option value="training">{t('contact.form.services.training')}</option>
                            <option value="ecommerce-intermediary">{t('contact.form.services.ecommerceIntermediary')}</option>
                            <option value="cross-border-shopping">{t('contact.form.services.crossBorderShopping')}</option>
                            <option value="other">{t('contact.form.services.other')}</option>
                      </select>
                      {errors.service && (
                        <div id="service-error" className="mt-1 flex items-center text-red-600 text-sm">
                          <AlertCircle size={16} className="mr-1" />
                          {errors.service}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.message')} {t('contact.form.required')}
                        </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && (
                      <div id="message-error" className="mt-1 flex items-center text-red-600 text-sm">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>{t('contact.form.sending')}</span>
                          </>
                        ) : (
                          <>
                            <span>{t('contact.form.sendMessage')}</span>
                            <Send size={18} />
                          </>
                        )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600" size={24} />
                </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact.info.email.title')}</h3>
                      <a href="mailto:contact@ibtikar.com" className="text-blue-600 hover:text-blue-700">
                        contact@ibtikar.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">{t('contact.info.email.subtitle')}</p>
                    </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600" size={24} />
                </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact.info.phone.title')}</h3>
                      <a href="tel:+22222090932" className="text-blue-600 hover:text-blue-700">
                        +222 22 09 09 32
                      </a>
                      <p className="text-sm text-gray-500 mt-1">{t('contact.info.phone.subtitle')}</p>
                    </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-cyan-600" size={24} />
                </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t('contact.info.location.title')}</h3>
                      <p className="text-gray-600">Global Offices</p>
                      <p className="text-sm text-gray-500 mt-1">{t('contact.info.location.subtitle')}</p>
                    </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="font-semibold mb-2 text-lg">{t('contact.info.support.title')}</h3>
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {t('contact.info.support.subtitle')}
              </p>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {t('contact.info.support.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
