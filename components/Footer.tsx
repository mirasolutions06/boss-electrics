import React from 'react';
import { Logo } from './ui/Logo';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Logo variant="light" />
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted UK electricians. Safety, compliance, and quality workmanship guaranteed on every job.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About</a></li>
              <li><a href="#reviews" className="hover:text-brand-400 transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-brand-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Emergency Callouts</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Consumer Unit Upgrades</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Rewiring</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">EV Charger Installation</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">EICR Certificates</a></li>
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300 mb-6">
              <li>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                <a href="tel:+447398868546" className="hover:text-white font-semibold">07398 868546</a>
              </li>
              <li>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:info@bosselectrics.co.uk" className="hover:text-white font-semibold">info@bosselectrics.co.uk</a>
              </li>
              <li>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Coverage</div>
                <span className="font-semibold">Serving all UK areas</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <h5 className="text-sm font-semibold mb-3">Service Areas</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, Bristol, Liverpool, and surrounding areas
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; {currentYear} Boss Electrics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};