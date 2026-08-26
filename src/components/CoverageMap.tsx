import React from 'react';
import { MapPin, Navigation, Clock, Shield, ExternalLink, Phone } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export const CoverageMap: React.FC = () => {
  return (
    <section id="cobertura" className="py-24 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            Localização & Cobertura
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Base Central em Moema com Atuação em Toda SP
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Localização privilegiada na Zona Sul de São Paulo, permitindo rápido acesso às principais vias e corredores expressos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Operating Hours and Coverage Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Headquarters Card */}
            <div className="bg-slate-950/90 rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sede Central Moema</h3>
                  <p className="text-sm text-slate-300 font-medium mt-0.5">{companyData.address.full}</p>
                  <p className="text-xs text-slate-400 mt-1">Av. Jurucê, 898 - Moema - São Paulo - SP</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Plantão 24 Horas:</strong> Atendimento ininterrupto</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Phone className="w-4 h-4 text-red-500 shrink-0" />
                  <span><strong>Central Telefônica:</strong> {companyData.phonePrimary} / {companyData.phoneSecondary}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>Atendimento:</strong> Pessoa Física, Jurídica e Contratos</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Av.+Juruc%C3%AA,+898+-+Moema+-+S%C3%A3o+Paulo+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-red-500" />
                  <span>Abrir no Google Maps / GPS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Coverage Regions Pills */}
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Principais Regiões de Atendimento Diário:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {companyData.coverageAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Frame */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-semibold text-slate-400 ml-2">Mapa de Localização • Moema, SP</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Base Aberta 24h
              </span>
            </div>

            <div className="flex-1 w-full min-h-[380px] sm:min-h-[460px]">
              <iframe
                title="Coopstar Express Moema Localização"
                src="https://maps.google.com/maps?q=Av.+Juruc%C3%AA,+898+-+Moema+-+S%C3%A3o+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.1]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
