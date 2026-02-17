import React from 'react';

export const ServiceArea: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-bold text-navy-900 mb-6 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-600 mr-2.5"></span>
            London Coverage
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-6">Areas We Cover</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Strategically positioned across East London for rapid response.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* List */}
          {/* List */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl h-full flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>

            <h3 className="text-3xl font-black text-navy-900 mb-8 flex items-center text-balance relative z-10">
              Key Locations
            </h3>
            <div className="grid grid-cols-1 gap-3 flex-grow relative z-10">
              {['Hackney & Dalston', 'Stratford & Bow', 'Canary Wharf', 'Shoreditch', 'Bethnal Green', 'Walthamstow', 'Whitechapel', 'Islington', 'Docklands'].map((area) => (
                <div key={area} className="flex items-center p-3 hover:bg-slate-50 rounded-xl transition-all duration-300 cursor-default border border-transparent hover:border-slate-100 group/item">
                  <div className="w-2 h-2 rounded-full bg-brand-200 group-hover/item:bg-brand-500 mr-4 transition-colors"></div>
                  <span className="text-slate-600 font-bold text-lg group-hover/item:text-navy-900 transition-colors">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-navy-950 rounded-2xl text-center relative z-10 shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              <p className="text-white font-black text-lg tracking-wide relative z-10">
                + All London M25 Boroughs
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 min-h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative transform transition-transform hover:scale-[1.005] duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79462.50796687041!2d-0.084627!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1647856585824!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Boss Electrics Service Area"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};