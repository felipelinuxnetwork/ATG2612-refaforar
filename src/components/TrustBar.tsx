import React from 'react';
import { Award, Clock, ShieldCheck, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '+15 Anos',
      label: 'De Tradição & Confiança',
      description: 'Atuação consolidada no mercado paulistano',
    },
    {
      icon: Clock,
      value: '24 Horas',
      label: 'De Segunda a Segunda',
      description: 'Atendimento contínuo dia e noite',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Segurança & Protocolo',
      description: 'Comprovantes digitais em cada entrega',
    },
    {
      icon: MapPin,
      value: 'Toda SP',
      label: 'Capital, ABC & Interior',
      description: 'Rotas urbanas e intermunicipais',
    },
  ];

  return (
    <section className="relative z-10 py-10 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-red-900/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-200">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
