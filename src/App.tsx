import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { QuickEstimate } from './components/QuickEstimate';
import { CoverageMap } from './components/CoverageMap';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        {/* Sticky Header / Navbar */}
        <Navbar />

        {/* Main One-Page Content */}
        <main className="flex-1">
          <Hero />
          <TrustBar />
          <AboutSection />
          <Services />
          <HowItWorks />
          <QuickEstimate />
          <CoverageMap />
          <FAQ />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating 24h WhatsApp Action */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
};

export default App;
