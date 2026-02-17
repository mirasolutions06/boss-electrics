import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-white">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50/50 via-white to-white pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 mb-8 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-600 mr-2.5 animate-pulse"></span>
              Premier East London Electricians
            </div>

            <h1 className="text-5xl font-black tracking-tight text-navy-900 sm:text-6xl md:text-7xl mb-8 leading-[1.1] text-balance">
              Reliable, Qualified <span className="text-brand-600 relative inline-block">
                Electricians
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> You Can Trust
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium text-balance">
              Fast response times, certified professionals, and transparent pricing. Emergency callouts available 24/7 across the UK.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/20 px-8 h-14 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get a Quote
              </Button>
              <Button variant="outline" size="lg" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white h-14 text-lg px-8">
                <a href="tel:+447398868546" className="flex items-center gap-2">Call Now</a>
              </Button>
            </div>


          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none perspective-1000">
            <div className="relative aspect-[4/3] rounded-3xl bg-slate-200 shadow-2xl shadow-navy-900/10 overflow-hidden group border border-slate-300">
              <img
                src="/images/hero-electrician.jpg"
                alt="Professional certified electrician in high-visibility vest working on modern electrical panel in UK home"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>

            {/* Floating Badge - Updated with urgent orange */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hover:scale-105 transition-all duration-300 cursor-pointer text-left group/badge"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover/badge:text-urgent-600 transition-colors">Status</span>
              </div>
              <div className="text-2xl font-black text-navy-900 mb-0.5">Available</div>
              <div className="text-sm font-medium text-urgent-600 underline decoration-urgent-200 underline-offset-4">Book Emergency Callout</div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};