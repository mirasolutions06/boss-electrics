import React from 'react';
import { Phone, FileText, Wrench, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
    const steps = [
        {
            number: 1,
            title: 'Contact Us',
            description: 'Call or email us with your requirements. For emergencies, we aim to be with you within 60 minutes.',
            icon: Phone
        },
        {
            number: 2,
            title: 'Free Assessment',
            description: 'We provide a transparent, fixed-price quote with no hidden fees or obligation to proceed.',
            icon: FileText
        },
        {
            number: 3,
            title: 'Work Begins',
            description: 'Our certified electricians complete the work efficiently, adhering to all safety standards.',
            icon: Wrench
        },
        {
            number: 4,
            title: 'Certification',
            description: 'Upon completion, we issue all necessary NICEIC certificates and ensure you are 100% satisfied.',
            icon: CheckCircle2
        }
    ];

    return (
        <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Steps */}
                    <div>
                        <div className="inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-bold text-brand-700 mb-6 uppercase tracking-widest shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
                            How It Works
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-6 tracking-tight">
                            Simple, Transparent Process
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 font-medium">
                            From your first call to job completion, we make electrical work hassle-free.
                        </p>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="flex-shrink-0 relative">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-brand-500 group-hover:shadow-md transition-all duration-300 relative z-10">
                                            <step.icon className="w-5 h-5 text-slate-400 group-hover:text-brand-600 transition-colors" strokeWidth={2} />
                                        </div>
                                        {index !== steps.length - 1 && (
                                            <div className="absolute top-12 left-6 w-px h-full bg-slate-200 -ml-px group-hover:bg-brand-200 transition-colors delay-100"></div>
                                        )}
                                    </div>
                                    <div className="pb-2">
                                        <h3 className="text-xl font-black text-navy-900 mb-2 group-hover:text-brand-600 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                        {/* Professional Electrician Image */}
                        <img
                            src="/images/process-electrician.jpg"
                            alt="Professional electrician in safety gear working on electrical installation in modern building"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay Card - Floating Status */}
                        <div className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status</div>
                                <div className="text-lg font-black text-navy-900 leading-tight">Teams Active<br />In Your Area</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
