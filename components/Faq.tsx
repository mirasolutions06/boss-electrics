import React from 'react';
import { Accordion } from './ui/Accordion';

const faqItems = [
  {
    id: '1',
    title: 'How much do your electrical services cost?',
    content: 'Our pricing is transparent and competitive. Small jobs start from £75, while larger projects like rewires or consumer unit upgrades are quoted individually. We always provide upfront, no-obligation quotes with no hidden fees. Emergency callouts may have a premium, but we\'ll always discuss costs before starting work.'
  },
  {
    id: '2',
    title: 'Do you offer 24/7 emergency callouts?',
    content: 'Yes! We provide 24/7 emergency electrical services across the UK. Our engineers aim to reach you within the hour for urgent situations like power outages, electrical faults, or safety hazards. Call us anytime—we\'re always ready to help.'
  },
  {
    id: '3',
    title: 'Are your electricians certified and qualified?',
    content: 'Absolutely. All our electricians are fully qualified, certified to industry standards (NICEIC/NAPIT ready - placeholder), and DBS checked. We maintain continuous professional development to stay current with the latest regulations and best practices.'
  },
  {
    id: '4',
    title: 'Do you work on both residential and commercial properties?',
    content: 'Yes, we handle both domestic and commercial electrical work. From home rewires and socket installations to commercial maintenance, PAT testing, and compliance inspections—we have the expertise and certifications for all property types.'
  },
  {
    id: '5',
    title: 'How quickly can I get an EICR certificate?',
    content: 'We typically complete EICR inspections within 2-4 hours depending on property size. For urgent cases (landlord compliance, property sales), we offer same-day or next-day appointments. Digital certificates are issued immediately upon completion and payment.'
  },
  {
    id: '6',
    title: 'Do you guarantee your work?',
    content: 'Yes! All our work comes with a workmanship guarantee. If any issues arise from our installation or repairs, we\'ll return to fix them at no extra cost. We also provide all necessary certification and compliance documentation for your records.'
  },
  {
    id: '7',
    title: 'Which areas do you cover?',
    content: 'We serve customers across the UK with a focus on providing fast, reliable service. Whether you\'re in a major city or a rural area, our network of qualified electricians can reach you. Contact us to confirm coverage in your specific location.'
  },
  {
    id: '8',
    title: 'What payment methods do you accept?',
    content: 'We accept all major payment methods including cash, bank transfer, credit/debit cards, and contactless payments. For larger projects, we can arrange payment plans or staged payments. Payment is typically due upon completion and your satisfaction with the work.'
  }
];

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-black text-navy-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 mb-8">
              Everything you need to know about our services, pricing, certifications, and availability.
            </p>
            <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
              <h4 className="font-bold text-navy-900 mb-2">Can't find your answer?</h4>
              <p className="text-sm text-slate-600 mb-4">Contact our support team directly for personalized assistance.</p>
              <a href="#contact" className="text-brand-600 font-bold hover:underline">Get in Touch &rarr;</a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};