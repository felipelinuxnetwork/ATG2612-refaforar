import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Clock, MapPin, Zap } from 'lucide-react';
import { Logo } from './Logo';
import { companyData } from '../data/companyInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const navLinks = [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'sobre', label: 'Sobre Nós', href: '#sobre' },
    { id: 'servicos', label: 'Serviços', href: '#servicos' },
    { id: 'como-funciona', label: 'Como Funciona', href: '#como-funciona' },
    { id: 'calculadora', label: 'Cotação', href: '#calculadora' },
    { id: 'cobertura', label: 'Cobertura', href: '#cobertura' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy: identify the currently viewed section
      const scrollPosition = window.scrollY + 160;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const item = navLinks[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar with quick 24h status (no phone numbers) */}
      <div className="bg-slate-950/95 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Clock className="w-3.5 h-3.5" /> Plantão 24 Horas • Segunda a Segunda
            </span>
            <span className="text-slate-700">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-red-500" /> Moema, São Paulo - Toda SP e Região
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 font-medium">
            <span className="inline-flex items-center gap-1 text-red-400 text-xs font-semibold">
              <Zap className="w-3 h-3 text-red-500 fill-current" /> Motoboy Imediato ou Programado
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar with Active Scroll Spy */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-slate-800 py-2.5'
            : 'bg-slate-950/85 backdrop-blur-sm border-b border-slate-800/50 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1">
            <Logo />
          </a>

          {/* Desktop Navigation Links with Visual Active Section Tracking (Scroll Spy) */}
          <div className="hidden lg:flex items-center bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 space-x-1 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30 ring-1 ring-blue-400/40 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action CTA: WhatsApp 24h (Phone removed as requested) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(companyData.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-md shadow-emerald-700/25 border border-emerald-500/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Active Indicator */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                        : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(companyData.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
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
