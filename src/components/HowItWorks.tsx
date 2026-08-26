import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Navigation, Clock, FileCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: PhoneCall,
      title: '1. Solicite em Segundos',
      description: 'Ligue ou chame no WhatsApp informando o local de coleta, entrega e horário desejado (imediato ou agendado).',
    },
    {
      number: '02',
      icon: Clock,
      title: '2. Coleta Imediata',
      description: 'Nosso motoboy credenciado mais próximo é direcionado para a retirada da sua encomenda com pontualidade.',
    },
    {
      number: '03',
      icon: Navigation,
      title: '3. Trajeto Otimizado',
      description: 'Deslocamento ágil e seguro utilizando rotas eficientes por toda a Capital, Grande SP ou cidades do Interior.',
    },
    {
      number: '04',
      icon: FileCheck,
      title: '4. Entrega & Protocolo',
      description: 'Entrega finalizada com coleta de assinatura/protocolo digital e confirmação instantânea para sua tranquilidade.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-slate-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            Processo Simples e Ágil
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Como Funciona a Coopstar Express
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Sem burocracia, sem filas e com a agilidade que a sua rotina e a sua empresa exigem.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-slate-950/80 border border-slate-800/90 rounded-2xl p-6 hover:border-red-600/40 transition-all group flex flex-col justify-between"
              >
                {/* Step Number Background */}
                <div className="text-4xl font-black text-slate-800/80 group-hover:text-red-950/80 transition-colors absolute top-4 right-5 select-none">
                  {step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-red-400">
                  <span>Passo {idx + 1} de 4</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
