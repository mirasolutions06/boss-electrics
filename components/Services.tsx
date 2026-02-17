import React from 'react';
import {
  AlertTriangle,
  ClipboardCheck,
  Home,
  Plug,
  Lightbulb,
  Wrench,
  Zap,
  Cable,
  Building2,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'emergency',
    title: 'Emergency Callouts',
    icon: AlertTriangle,
    features: ['24/7 Rapid Response', 'Power Outage Solutions', 'No Call-Out Fee', 'Same-Day Service']
  },
  {
    id: 'consumer-unit',
    title: 'Consumer Unit Upgrades',
    icon: Zap,
    features: ['Modern Fuse Box Installation', 'RCD Protection', 'Surge Protection', 'Full Certification']
  },
  {
    id: 'rewiring',
    title: 'Full & Partial Rewires',
    icon: Cable,
    features: ['Complete House Rewiring', 'Partial Circuit Upgrades', 'Minimal Disruption', 'Safety Certificates Included']
  },
  {
    id: 'fault-finding',
    title: 'Fault Finding',
    icon: Wrench,
    features: ['Advanced Diagnostics', 'Circuit Testing', 'Quick Resolution', 'Transparent Pricing']
  },
  {
    id: 'ev',
    title: 'EV Charger Installation',
    icon: Plug,
    features: ['Home Charging Points', 'OZEV Grant Approved', 'Smart Chargers', 'Commercial Solutions']
  },
  {
    id: 'lighting',
    title: 'Lighting & LED Upgrades',
    icon: Lightbulb,
    features: ['Energy-Efficient LED', 'Smart Lighting Systems', 'Garden & Outdoor Lighting', 'Emergency Lighting']
  },
  {
    id: 'eicr',
    title: 'EICR / Safety Certificates',
    icon: ClipboardCheck,
    features: ['Landlord Certificates', 'Homebuyer Reports', 'Commercial EICRs', 'Fast Turnaround']
  },
  {
    id: 'commercial',
    title: 'Commercial Maintenance',
    icon: Building2,
    features: ['Planned Maintenance', 'Emergency Repairs', 'PAT Testing', 'Compliance Inspections']
  },
  {
    id: 'sockets',
    title: 'Sockets & Switches',
    icon: Home,
    features: ['Additional Socket Installation', 'USB Charging Points', 'Smart Switches', 'Outdoor Sockets']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">

        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-6 tracking-tight">Electrical Services</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Professional, compliant work across London and East London. From quick fixes to major installations, we deliver excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-soft hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:border-brand-200 group-hover:bg-white transition-all duration-300 mb-6">
                    <service.icon className="h-6 w-6 text-slate-500 group-hover:text-brand-600 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-navy-900 mb-2">{service.title}</h3>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-600">
                      <div className="mt-1.5 mr-3 h-1.5 w-1.5 rounded-full bg-brand-400 shrink-0"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-50 text-sm font-bold text-navy-900 group-hover:bg-navy-900 group-hover:text-white transition-all duration-300"
                >
                  Get Quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};