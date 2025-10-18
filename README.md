# iBTIKAR IT SOLUTIONS Website

A modern, responsive website for iBTIKAR IT SOLUTIONS, showcasing our comprehensive range of IT solutions, logistics services, and international trade expertise.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, and PWA support
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and Open Graph
- **Form Validation**: Comprehensive client-side validation
- **Error Handling**: Error boundaries and graceful error recovery
- **Testing**: Unit tests with Vitest and React Testing Library
- **CI/CD**: Automated testing and deployment with GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library
- **PWA**: Vite PWA Plugin
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kgs-group.git
cd kgs-group
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example .env.local
```

4. Update environment variables in `.env.local`:
```env
VITE_APP_TITLE=iBTIKAR IT SOLUTIONS
VITE_APP_EMAIL=contact@ibtikar.com
VITE_APP_PHONE=+222 22 09 09 32
# Add your form integration keys
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🧪 Testing

Run tests:
```bash
npm run test
```

Run tests with coverage:
```bash
npm run test:coverage
```

Run tests in watch mode:
```bash
npm run test:ui
```

## 🏗️ Building

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📱 PWA Features

The website includes Progressive Web App features:
- Offline support
- Installable on mobile devices
- Push notifications (configurable)
- App-like experience

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# App Configuration
VITE_APP_TITLE=iBTIKAR IT SOLUTIONS
VITE_APP_DESCRIPTION=Professional IT solutions, logistics services, and international trade services
VITE_APP_URL=https://ibtikar.com
VITE_APP_EMAIL=contact@ibtikar.com
VITE_APP_PHONE=+222 22 09 09 32

# Form Integration (choose one)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
# OR
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Social Media
VITE_LINKEDIN_URL=https://linkedin.com/company/ibtikar
VITE_FACEBOOK_URL=https://facebook.com/ibtikar
VITE_TWITTER_URL=https://twitter.com/ibtikar
```

### Form Integration

Choose one of the following form integration methods:

#### Option 1: Formspree
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Add your form endpoint to `VITE_FORMSPREE_ENDPOINT`

#### Option 2: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com)
2. Create a service and template
3. Add your credentials to the environment variables

## 🚀 Deployment

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Push to main branch
3. GitHub Actions will automatically deploy

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## 📊 Performance

The website is optimized for performance with:
- Code splitting and lazy loading
- Image optimization
- Bundle size optimization
- Caching strategies
- PWA features

## 🔒 Security

- Environment variables for sensitive data
- Form validation and sanitization
- HTTPS enforcement
- Content Security Policy headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or support, please contact:
- Email: contact@ibtikar.com
- Phone: +222 22 09 09 32

## 🌟 Services

- **IT Solutions**: Web Development, Mobile Apps, Career Mentoring, Training
- **Logistics**: Transportation, Warehousing, Supply Chain Management
- **Trade Services**: International Trade, Consulting, Market Analysis

---

Built with ❤️ by iBTIKAR IT SOLUTIONS
