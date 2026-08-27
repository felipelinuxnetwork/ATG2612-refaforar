import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShoppingBag, Compass, ShieldCheck, CheckCircle2, ArrowRight, X, MessageSquare, Phone } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { companyData } from '../data/companyInfo';

const iconMap = {
  Zap: Zap,
  ShoppingBag: ShoppingBag,
  Compass: Compass,
  ShieldCheck: ShieldCheck,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-slate-950 via-red-950/30 to-slate-950 border-t border-red-900/20 relative overflow-hidden">
      {/* Background Image Layer with Blur & Vibrant Contrast */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <img
          src="/images/service-motofrete.jpg"
          alt="Serviços de Moto Frete e Entregas Rápidas"
          className="w-full h-full object-cover scale-110 filter blur-md sm:blur-lg opacity-30 brightness-[0.5] contrast-[1.35] saturate-[1.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80" />
      </div>
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,27,27,0.18),transparent_75%)] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-900/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-bold uppercase tracking-wider">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Soluções Logísticas Sob Medida para Seu Negócio
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Da entrega urgente de um documento até a operação contínua de delivery corporativo faturado, conte com a experiência da Coopstar Express.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || Zap;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass-panel rounded-2xl p-8 border border-slate-800 hover:border-blue-600/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div className="overflow-hidden rounded-2xl">
                  {/* Service Photo with Badge */}
                  {service.imageUrl && (
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl mb-6 bg-slate-900">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/60 shadow-lg">
                        {service.tag}
                      </span>
                      <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-blue-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-lg border border-blue-400/30">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Recommended Pills */}
                  <div className="pt-4 border-t border-slate-800/80 mb-6">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Ideal para:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.recommendedFor.map((item, rIdx) => (
                        <span
                          key={rIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 text-xs border border-slate-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(`Olá! Gostaria de saber mais e solicitar o serviço de: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-md shadow-emerald-900/30 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Solicitar via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="py-3 px-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-colors flex items-center justify-center gap-1"
                    title="Ver detalhes completos"
                  >
                    <span>Detalhes</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-left max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-950 text-blue-300 border border-blue-800">
                    {selectedService.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {selectedService.imageUrl && (
                <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden mb-4 bg-slate-950">
                  <img
                    src={selectedService.imageUrl}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
              )}

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>{selectedService.fullDescription}</p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">O que está incluso:</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">Segmentos mais atendidos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.recommendedFor.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs border border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(`Olá! Gostaria de contratar/solicitar informações sobre ${selectedService.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  Pedir no WhatsApp
                </a>
                <a
                  href={`tel:${companyData.phonePrimaryRaw}`}
                  className="py-3 px-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  Ligar: {companyData.phonePrimary}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
