import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calculator, ShieldCheck, Clock, CheckCircle, ArrowRight, Zap, MapPin } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-zinc-950">
      {/* Background Motorcycle Delivery Image with Dark Ambient Overlays */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <img
          src="/hero-bg.jpg"
          alt="Motoboy realizando entrega rápida em São Paulo - Coopstar Express"
          className="w-full h-full object-cover object-[center_35%] scale-110 filter blur-sm md:blur-md brightness-[0.55] contrast-[1.3] saturate-[1.4]"
        />
      </div>

      {/* Background Gradients & Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.25),transparent)] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copywriting */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/50 text-red-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Atendimento 24h • São Paulo, Grande SP e Litoral/Interior</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Sua entrega com <br className="hidden sm:inline" />
              <span className="text-gradient-red">Segurança, Rapidez</span> e Eficiência.
            </h1>

            {/* Subheading / Value explanation */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A <strong>Coopstar Express</strong> é referência há mais de 15 anos em serviços de moto frete, coletas urgentes, malotes corporativos, serviços bancários e delivery empresarial com sede estratégica em Moema - SP.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(companyData.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-xl shadow-blue-700/25 border border-blue-500/40 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 hover:shadow-blue-600/40"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Pedir Moto Frete Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#calculadora"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Calculator className="w-5 h-5 text-blue-400" />
                <span>Simular Orçamento</span>
              </a>
            </div>

            {/* Trust Highlights under CTA */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Saída Imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Protocolo Digital</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">24h / 7 dias por semana</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Logistics Card & Stats Preview */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Ambient Background Box Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/20 rounded-3xl blur-xl opacity-60" />
            
            <div className="relative glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-700/60 shadow-2xl">
              
              {/* Header of the card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Central de Despacho</h3>
                    <p className="text-xs text-slate-400">Moema • São Paulo - SP</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Operação Ativa 24h
                </span>
              </div>

              {/* Quick Services Snapshot */}
              <div className="space-y-3">
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80 flex items-center justify-between hover:border-blue-900/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">Moto Frete Urbano SP</div>
                      <div className="text-xs text-slate-400">Ponto a ponto, cartórios e bancos</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-400">Express</span>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80 flex items-center justify-between hover:border-blue-900/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">Delivery Corporativo</div>
                      <div className="text-xs text-slate-400">E-commerce, farmácias, autopeças</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400">Faturado</span>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800/80 flex items-center justify-between hover:border-blue-900/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-100">Viagens Intermunicipais</div>
                      <div className="text-xs text-slate-400">Interior e Litoral do Estado de SP</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-400">Regional</span>
                </div>
              </div>

              {/* Direct Call Box */}
              <div className="bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-900 rounded-xl p-4 border border-red-900/40">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Atendimento Imediato:</span>
                    <span className="text-base font-bold text-white">{companyData.phonePrimary}</span>
                  </div>
                  <a
                    href={`tel:${companyData.phonePrimaryRaw}`}
                    className="relative px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-black tracking-wide transition-all shadow-lg shadow-red-600/40 animate-pulse flex items-center justify-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>Ligar Agora</span>
                  </a>
                </div>
                <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-400" />
                  <span>Av. Jurucê, 898 - Moema - São Paulo</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
