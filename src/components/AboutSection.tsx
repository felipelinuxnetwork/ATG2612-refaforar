import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-900/40 border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Team & Fleet Image Presentation */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 group">
              <img
                src="/images/service-fleet.jpg"
                alt="Equipe e frota de motoboys profissionais Coopstar Express"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 flex items-center justify-center font-black text-lg">
                    15+
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Anos de Mercado</h4>
                    <p className="text-xs text-slate-400">Atendimento ininterrupto em toda SP</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Operação 24h
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copywriting and Values */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> Quem Somos
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Tradição, Agilidade e Confiança em Cada Corrida
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A <strong>Coopstar Express</strong> é uma empresa especializada no serviço de entregas e coletas rápidas, atuando há mais de 15 anos no mercado paulistano.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Desempenhamos uma função essencial para nossos clientes: <strong>agilizar os mais diversos serviços operacionais e corporativos</strong>, tornando-nos uma empresa de destaque com base estratégica em Moema, com prontidão 24 horas por dia de Segunda a Segunda-feira.
            </p>

            {/* Checklist of differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Profissionais uniformizados</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Agendamento com hora marcada</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Faturamento para empresas (PJ)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Protocolo digital instantâneo</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com um representante da Coopstar Express.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-bold text-white bg-red-600 hover:bg-red-500 flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Falar com Representante
              </a>

              <a
                href={`tel:${companyData.phonePrimaryRaw}`}
                className="py-3.5 px-6 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-red-400" />
                Ligar: {companyData.phonePrimary}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
