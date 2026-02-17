import React from 'react';
import { ContactForm } from './ContactForm';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get Your Quote
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us about your electrical needs and we'll get back to you with a transparent, no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Contact Cards */}
          <div className="bg-white rounded-xl p-6 shadow-soft border border-slate-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-black text-navy-900 mb-2">Call Us</h3>
            <p className="text-slate-600 text-sm mb-3">Speak to our team directly</p>
            <a href="tel:+447398868546" className="text-brand-600 font-semibold hover:underline">
              07398 868546
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-slate-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-black text-navy-900 mb-2">Email Us</h3>
            <p className="text-slate-600 text-sm mb-3">Send us your requirements</p>
            <a href="mailto:info@bosselectrics.co.uk" className="text-brand-600 font-semibold hover:underline">
              info@bosselectrics.co.uk
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-slate-100 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-black text-navy-900 mb-2">Opening Hours</h3>
            <p className="text-slate-600 text-sm mb-3">24/7 Emergency Service</p>
            <p className="text-brand-600 font-semibold">
              Mon-Fri: 8am-6pm<br />
              Sat: 9am-4pm
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};