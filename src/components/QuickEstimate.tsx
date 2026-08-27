import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles, MapPin, Check } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export const QuickEstimate: React.FC = () => {
  const [serviceType, setServiceType] = useState('Moto Frete Urbano SP');
  const [urgency, setUrgency] = useState('Imediato / Urgente');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [details, setDetails] = useState('');

  const services = [
    'Moto Frete Urbano SP',
    'Delivery Corporativo & E-commerce',
    'Viagem Fora da Capital / Litoral',
    'Serviço Bancário / Cartório / Aeroporto',
    'Contrato Mensal / Motoboy Fixo',
  ];

  const urgencyOptions = [
    'Imediato / Urgente',
    'Hoje (Mesmo Dia)',
    'Agendado com Hora Marcada',
  ];

  const generateWhatsAppMessage = () => {
    let msg = `*Solicitação de Cotação - Coopstar Express*\n\n`;
    msg += `📦 *Serviço:* ${serviceType}\n`;
    msg += `⏱️ *Urgência:* ${urgency}\n`;
    if (origin) msg += `📍 *Origem:* ${origin}\n`;
    if (destination) msg += `🏁 *Destino:* ${destination}\n`;
    if (details) msg += `📝 *Observações:* ${details}\n`;
    msg += `\n_Enviado pelo Simulador do Site_`;
    return encodeURIComponent(msg);
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${companyData.whatsappRaw}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 bg-gradient-to-bl from-slate-950 via-red-950/25 to-slate-950 border-t border-red-900/30 relative overflow-hidden">
      {/* Background Image Layer with Blur & Contrast */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <img
          src="/images/bg-speed-neon.jpg"
          alt="Cotação e rotas expressas"
          className="w-full h-full object-cover scale-110 filter blur-md sm:blur-lg opacity-35 brightness-[0.55] contrast-[1.4] saturate-[1.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-transparent to-slate-950/85" />
      </div>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.15),transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-red-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Simulador de Chamada Rápida
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Calcule ou Solicite sua Corrida em 1 Clique
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Monte os detalhes da sua entrega e envie diretamente para nossa central no WhatsApp para retorno e cotação imediata.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <form onSubmit={handleWhatsAppSend} className="space-y-8">
            
            {/* Step 1: Select Service */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                Selecione a Modalidade de Serviço:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {services.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => setServiceType(svc)}
                    className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold text-left transition-all border flex items-center justify-between ${
                      serviceType === svc
                        ? 'bg-blue-600/20 text-white border-blue-500 shadow-sm shadow-blue-950'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <span>{svc}</span>
                    {serviceType === svc && <Check className="w-4 h-4 text-blue-400 shrink-0 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Urgency */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                Prazo / Urgência do Atendimento:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {urgencyOptions.map((urg) => (
                  <button
                    key={urg}
                    type="button"
                    onClick={() => setUrgency(urg)}
                    className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all border ${
                      urgency === urg
                        ? 'bg-blue-600/20 text-white border-blue-500 shadow-sm'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    {urg}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Origin & Destination */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                Locais de Coleta e Entrega:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <MapPin className="w-4 h-4 text-blue-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Bairro / Endereço de Coleta (Ex: Moema)"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/90 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Bairro / Cidade de Destino (Ex: Paulista ou Campinas)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/90 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <input
                type="text"
                placeholder="Observações complementares (Ex: 2 volumes leves, precisa de comprovante)"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/90 text-white placeholder-slate-500 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
              />
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:flex-1 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 text-base cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enviar Simulação no WhatsApp da Central</span>
              </button>

              <a
                href="#contato"
                className="w-full sm:w-auto py-4 px-6 rounded-xl font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center gap-2 text-sm transition-colors"
              >
                <Send className="w-4 h-4 text-red-400" />
                <span>Preencher Formulário</span>
              </a>
            </div>

            <p className="text-center text-xs text-slate-500">
              * Atendimento 24h. Resposta média em menos de 5 minutos por nossos operadores de plantão.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};
