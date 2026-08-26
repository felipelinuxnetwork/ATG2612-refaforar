import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Clock, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { companyData } from '../data/companyInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem Somos', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Simulador', href: '#calculadora' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar with quick contact and 24h badge */}
      <div className="bg-slate-900/90 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <Clock className="w-3.5 h-3.5" /> Atendimento 24 Horas de Segunda a Segunda
            </span>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-red-500" /> Moema, São Paulo - SP
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${companyData.phonePrimaryRaw}`}
              className="hover:text-red-400 transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-red-500" /> {companyData.phonePrimary}
            </a>
            <span className="text-slate-600">/</span>
            <a 
              href={`tel:${companyData.phoneSecondaryRaw}`}
              className="hover:text-red-400 transition-colors font-medium"
            >
              {companyData.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800/80 py-3'
            : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyData.phonePrimaryRaw}`}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/70 flex items-center gap-1.5 transition-all"
              title="Ligar agora"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span className="hidden xl:inline">Ligue:</span> {companyData.phonePrimary}
            </a>

            <a
              href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(companyData.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-700/20 border border-red-500/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <a
                href={`tel:${companyData.phonePrimaryRaw}`}
                className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-500" />
                Ligue: {companyData.phonePrimary} / {companyData.phoneSecondary}
              </a>

              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(companyData.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center gap-2 shadow-lg shadow-red-900/30"
              >
                <MessageSquare className="w-4 h-4" />
                Solicitar Motoboy via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
