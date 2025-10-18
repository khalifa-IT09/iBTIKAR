import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SimpleAdminToggle from './components/SimpleAdminToggle';
import SimpleAdminPanel from './components/SimpleAdminPanel';
import AdminLoginPage from './components/AdminLoginPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  // Check if we're on the admin route
  useEffect(() => {
    const path = window.location.pathname;
    setIsAdminRoute(path === '/admin');
  }, []);

  // Handle admin login
  const handleAdminLogin = () => {
    setIsAdminMode(true);
  };

  // If we're on the admin route, show login page or admin panel
  if (isAdminRoute) {
    if (isAdminMode) {
      return <SimpleAdminPanel />;
    }
    return <AdminLoginPage onLogin={handleAdminLogin} />;
  }

  // Regular website
  return (
    <LanguageProvider>
      <ErrorBoundary>
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <Services />
            <About />
            <Contact />
          </main>
          <Footer />
          <SimpleAdminToggle onToggleAdmin={() => setIsAdminMode(true)} />
        </div>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export default App;
