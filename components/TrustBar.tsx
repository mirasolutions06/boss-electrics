import React from 'react';
import { ShieldCheck, Award, Zap, Banknote, Home, Building2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
    const badges = [
        {
            icon: ShieldCheck,
            title: 'Fully Insured',
            description: 'Complete coverage for your peace of mind'
        },
        {
            icon: Award,
            title: 'NICEIC/NAPIT Ready',
            description: 'Certification standards maintained'
        },
        {
            icon: Zap,
            title: 'Same-Day Callouts',
            description: 'Emergency response when you need it'
        },
        {
            icon: Banknote,
            title: 'Upfront Pricing',
            description: 'No hidden fees, transparent quotes'
        },
        {
            icon: Home,
            title: 'Domestic Services',
            description: 'Expert home electrical solutions'
        },
        {
            icon: Building2,
            title: 'Commercial Services',
            description: 'Professional business installations'
        }
    ];

    return (
        <section className="py-12 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
                    {badges.map((badge, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300"
                            >
                                <h3 className="text-sm font-bold text-navy-900 mb-1 leading-tight">
                                    {badge.title}
                                </h3>
                                <p className="text-xs text-slate-500 leading-snug font-medium max-w-[140px]">
                                    {badge.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
