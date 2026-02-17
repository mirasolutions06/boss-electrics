import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    email: z.string().email('Please enter a valid email address'),
    postcode: z.string().min(5, 'Please enter a valid UK postcode'),
    service: z.string().min(1, 'Please select a service'),
    message: z.string().min(10, 'Please provide more details (at least 10 characters)'),
    consent: z.boolean().refine((val) => val === true, {
        message: 'You must agree to be contacted'
    })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', data);

        // Set submitted state first
        setIsSubmitted(true);

        // Reset form after a delay to prevent state conflict
        setTimeout(() => {
            reset();
        }, 100);

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };


    const services = [
        'Emergency Callout',
        'Consumer Unit Upgrade',
        'Full/Partial Rewire',
        'Fault Finding',
        'EV Charger Installation',
        'Lighting & LED Upgrades',
        'EICR / Safety Certificate',
        'Commercial Maintenance',
        'Other'
    ];

    // Show success message if form was submitted
    if (isSubmitted) {
        return (
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center animate-fade-in">
                <h3 className="text-2xl font-black text-green-900 mb-2">
                    Request Received
                </h3>
                <p className="text-green-700 font-medium">
                    We've received your quote request and will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm font-bold text-green-800 hover:text-green-900 underline"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                        Full Name *
                    </label>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                            } focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all`}
                        placeholder="John Smith"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                        Phone Number *
                    </label>
                    <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        inputMode="numeric"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                            } focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all`}
                        placeholder="07398 868546"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                        Email Address *
                    </label>
                    <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                            } focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="postcode" className="block text-sm font-semibold text-navy-900 mb-2">
                        Postcode *
                    </label>
                    <input
                        {...register('postcode')}
                        type="text"
                        id="postcode"
                        autoCapitalize="characters"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.postcode ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                            } focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all`}
                        placeholder="SW1A 1AA"
                    />
                    {errors.postcode && (
                        <p className="mt-1 text-sm text-red-600">{errors.postcode.message}</p>
                    )}
                </div>
            </div>

            {/* Service Needed */}
            <div>
                <label htmlFor="service" className="block text-sm font-semibold text-navy-900 mb-2">
                    Service Needed *
                </label>
                <select
                    {...register('service')}
                    id="service"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all`}
                >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                        <option key={service} value={service}>
                            {service}
                        </option>
                    ))}
                </select>
                {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                )}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    Tell Us About Your Project *
                </label>
                <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none`}
                    placeholder="Please describe the electrical work you need..."
                />
                {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
            </div>

            {/* Consent */}
            <div className="flex items-start">
                <input
                    {...register('consent')}
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500"
                />
                <label htmlFor="consent" className="ml-3 text-sm text-slate-700">
                    I agree to be contacted by Boss Electrics regarding my quote request.
                    We respect your privacy and will never share your information with third parties.
                </label>
            </div>
            {errors.consent && (
                <p className="text-sm text-red-600">{errors.consent.message}</p>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Request Quote
                    </>
                )}
            </button>
        </form>
    );
};
