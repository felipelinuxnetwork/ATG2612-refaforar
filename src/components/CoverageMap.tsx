import React from 'react';
import { MapPin, Navigation, Clock, Shield, ExternalLink, Phone } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export const CoverageMap: React.FC = () => {
  return (
    <section id="cobertura" className="py-24 bg-slate-100 text-slate-900 border-b border-slate-200 relative overflow-hidden">
      {/* Background Image Layer with Blur & High Contrast */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-20">
        <img
          src="/images/bg-coverage.jpg"
          alt="Mapa digital de rotas de logística de São Paulo"
          className="w-full h-full object-cover scale-110 filter blur-xl saturate-200 contrast-125"
        />
        <div className="absolute inset-0 bg-slate-100/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Localização Estratégica & Cobertura
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Base em Moema com Atuação em Toda a Grande SP
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Localização privilegiada na Zona Sul de São Paulo, permitindo rápido acesso às principais vias e corredores expressos da capital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Operating Hours and Coverage Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Headquarters Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 space-y-5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-600 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Sede Central Moema</h3>
                  <p className="text-sm text-slate-700 font-semibold mt-0.5">{companyData.address.full}</p>
                  <p className="text-xs text-slate-500 mt-1">Av. Jurucê, 898 - Moema - São Paulo - SP</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Plantão 24 Horas:</strong> Atendimento ininterrupto</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Central Telefônica:</strong> {companyData.phonePrimary} / {companyData.phoneSecondary}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <Shield className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Atendimento:</strong> Pessoa Física, Empresas e Contratos Mensais</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Av.+Juruc%C3%AA,+898+-+Moema+-+S%C3%A3o+Paulo+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Abrir Rota no Google Maps / GPS</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Coverage Regions Pills */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 space-y-3 shadow-md">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Principais Regiões de Atendimento Diário:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
                {companyData.coverageAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Frame */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-700 ml-2">Moema, São Paulo • Base Operacional</span>
              </div>
              <span className="text-[11px] text-emerald-700 bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Base 24 Horas
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
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
