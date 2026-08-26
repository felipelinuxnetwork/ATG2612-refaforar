import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { companyData } from '../data/companyInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Logo />
            <p className="text-slate-400 text-sm max-w-md leading-relaxed mt-3">
              Empresa especializada no serviço de moto frete, coletas rápidas e delivery empresarial. Há mais de 15 anos proporcionando pontualidade, segurança e tranquilidade para empresas e pessoas em toda São Paulo e região.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-2">
              <Clock className="w-4 h-4" />
              <span>Plantão 24h • Segunda a Segunda-feira</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-red-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-red-400 transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-red-400 transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-red-400 transition-colors">Simulador de Chamada</a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-red-400 transition-colors">Localização & Moema</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-red-400 transition-colors">Fale Conosco</a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Central & Atendimento
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>{companyData.phonePrimary} / {companyData.phoneSecondary}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>{companyData.emailContact}</span>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(companyData.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white border border-red-600/30 text-xs font-bold transition-all"
              >
                Chamar Motoboy no WhatsApp 24h
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Coopstar Express - Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span>Desenvolvido com Tecnologia de Alta Performance</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
