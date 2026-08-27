import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Clock, MapPin, Zap, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { companyData } from '../data/companyInfo';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const { isDarkMode, toggleDarkMode } = useTheme();

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
      {/* Top micro-bar with quick 24h status */}
      <div className="bg-slate-950/95 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Clock className="w-3.5 h-3.5" /> Plantão 24 Horas • Segunda a Segunda
            </span>
            <span className="text-slate-700">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-500" /> Moema, São Paulo - Toda SP e Região
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 font-medium">
            <span className="inline-flex items-center gap-1 text-blue-400 text-xs font-semibold">
              <Zap className="w-3 h-3 text-blue-500 fill-current" /> Motoboy Imediato ou Programado
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

          {/* Action Area: Dark Mode Toggle & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark Mode Toggle Button (Icon Only) */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer"
              title={isDarkMode ? "Modo Escuro Ativo (Clique para alterar)" : "Ativar Modo Escuro"}
              aria-label="Alternar modo escuro"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400 animate-pulse" />
              ) : (
                <Moon className="w-5 h-5 text-slate-300 hover:text-indigo-400 transition-colors" />
              )}
            </button>

            {/* WhatsApp CTA */}
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

          {/* Mobile Actions (Dark Mode Toggle + Mobile Menu Button) */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              title="Alternar Modo Escuro"
              aria-label="Alternar modo escuro"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-300" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Active Indicator & Dark Mode Toggle */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
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

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <button
                onClick={toggleDarkMode}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
                  <span>Modo Escuro para o Site Inteiro</span>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${isDarkMode ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-slate-400'}`}>
                  {isDarkMode ? 'ATIVADO' : 'DESATIVADO'}
                </span>
              </button>

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
