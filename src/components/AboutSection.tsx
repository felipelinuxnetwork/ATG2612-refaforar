import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Image Layer with Blur & High Contrast */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-25 dark:opacity-30">
        <img
          src="/images/service-fleet.jpg"
          alt="Frota de motoboys Coopstar Express"
          className="w-full h-full object-cover scale-110 filter blur-xl saturate-200 contrast-125"
        />
        <div className="absolute inset-0 bg-slate-50/80 dark:bg-slate-950/80" />
      </div>

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
            <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 group">
              <img
                src="/images/service-fleet.jpg"
                alt="Equipe e frota de motoboys profissionais Coopstar Express"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Highlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-600/30">
                    15+
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">Anos de Tradição</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Atendimento em toda a Grande SP</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Quem Somos
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Tradição, Agilidade e Confiança em Cada Entrega
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              A <strong>Coopstar Express</strong> é uma empresa especializada em serviços de moto frete e entregas rápidas, atuando há mais de 15 anos no mercado corporativo e particular paulistano.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Desempenhamos uma função essencial para nossos parceiros: <strong>agilizar os mais diversos serviços operacionais, burocráticos e logísticos</strong>, com base estratégica em Moema e atendimento 24 horas por dia, 7 dias por semana.
            </p>

            {/* Checklist of differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Profissionais credenciados</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Agendamento com hora marcada</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Faturamento mensal PJ</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>Protocolo digital instantâneo</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com um representante da Coopstar Express.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all text-sm transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                Falar com Especialista via WhatsApp
              </a>

              <a
                href={`tel:${companyData.phonePrimaryRaw}`}
                className="py-3.5 px-6 rounded-xl font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 transition-colors text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Ligue: {companyData.phonePrimary}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
