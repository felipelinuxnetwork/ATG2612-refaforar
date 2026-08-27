import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { faqData } from '../data/faq';
import { companyData } from '../data/companyInfo';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-zinc-950 via-slate-900/80 to-slate-950 border-t border-slate-800/60 relative overflow-hidden">
      {/* Background Image Overlay with Blur & Contrast */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <img
          src="/images/bg-faq-contact.jpg"
          alt="Suporte e atendimento Coopstar Express"
          className="w-full h-full object-cover scale-110 filter blur-md sm:blur-lg opacity-30 brightness-[0.5] contrast-[1.35] saturate-[1.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-transparent to-slate-950/85" />
      </div>
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.1),transparent_70%)] pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Perguntas & Respostas Frequentes
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tire suas principais dúvidas sobre contratação, faturamento corporativo, prazos e tipos de serviço.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden cursor-pointer ${
                  isOpen
                    ? 'bg-slate-900/90 border-blue-600/40 shadow-lg shadow-blue-950/20'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 to-slate-900 border border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Ainda possui alguma dúvida específica?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Fale diretamente com nossa central de atendimento em Moema.</p>
          </div>

          <a
            href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre os serviços de moto frete da Coopstar Express.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-2 shrink-0 transition-colors shadow-md shadow-emerald-950/40"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
