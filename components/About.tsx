import React from 'react';

export const About: React.FC = () => {
  const values = [
    {
      title: 'Always On Time',
      description: 'We respect your schedule. Our electricians arrive when promised and complete work within agreed timeframes.'
    },
    {
      title: 'Spotlessly Tidy',
      description: 'We treat your property with care. Dust sheets, boot covers, and thorough cleanup after every job—guaranteed.'
    },
    {
      title: 'Clear Communication',
      description: 'No jargon, no surprises. We explain the work, provide upfront quotes, and keep you informed every step of the way.'
    },
    {
      title: 'Certified Electricians',
      description: 'All our engineers are fully qualified, DBS checked, and maintain the highest industry standards and certifications.'
    },
    {
      title: 'Work Guarantee',
      description: 'Every job comes with our workmanship guarantee. If there\'s an issue, we\'ll make it right—no questions asked.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Fixed-price quotes with no hidden fees. You\'ll always know exactly what you\'re paying for before we start.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700 mb-6 uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-6 tracking-tight">
            Setting the Standard in Electrical Safety
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            We're not just electricians—we're your trusted partners in electrical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-500"></div>

                <h3 className="text-xl font-black text-navy-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};