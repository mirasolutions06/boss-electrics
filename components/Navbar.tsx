import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center group" aria-label="Boss Electrics Home">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            className="!text-brand-600 font-bold !hover:bg-brand-50 !hover:text-brand-700 text-lg"
            onClick={() => window.location.href = 'tel:+447398868546'}
          >
            07398 868546
          </Button>
          <Button
            className="!bg-brand-500 !hover:bg-brand-600 text-white shadow-lg shadow-brand-500/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-6 space-y-4 shadow-lg absolute w-full h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-semibold text-slate-900 hover:text-brand-600 border-b border-slate-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            <Button variant="outline" className="w-full justify-center h-12 text-lg">Call 07398 868546</Button>
            <Button className="w-full justify-center h-12 text-lg" onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};