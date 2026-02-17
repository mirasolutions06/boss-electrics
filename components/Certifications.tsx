import React from 'react';

export const Certifications: React.FC = () => {
    const certifications = [
        {
            name: 'NICEIC',
            description: 'Approved Contractor',
            logo: '/logos/niceic.png'
        },
        {
            name: 'NAPIT',
            description: 'Registered Member',
            logo: '/logos/napit.jpg'
        },
        {
            name: 'City & Guilds',
            description: 'Qualified Engineers',
            logo: '/logos/city-guilds.png'
        }
    ];

    return (
        <section className="py-16 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-navy-900 mb-3">
                        Accredited & Certified
                    </h2>
                    <p className="text-sm text-slate-600 max-w-xl mx-auto">
                        Our electricians maintain the highest industry standards and certifications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="w-36 h-36 mb-4 bg-white rounded-lg flex items-center justify-center p-3">
                                <img
                                    src={cert.logo}
                                    alt={`${cert.name} - ${cert.description}`}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <h3 className="text-base font-black text-navy-900 mb-1">
                                {cert.name}
                            </h3>
                            <p className="text-xs text-slate-600 font-medium">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
