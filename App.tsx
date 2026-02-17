import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Certifications } from './components/Certifications';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { ContactCTA } from './components/ContactCTA';
import { ServiceArea } from './components/ServiceArea';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Certifications />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Faq />
        <ContactCTA />
        <ServiceArea />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;