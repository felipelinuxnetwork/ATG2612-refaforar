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
    <section className="relative z-10 py-10 bg-white border-y border-slate-200 shadow-lg overflow-hidden text-slate-900">
      {/* Subtle Light Contrast Background with Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
        <img
          src="/images/bg-speed-neon.jpg"
          alt="Estradas e rotas de entrega rápidas"
          className="w-full h-full object-cover scale-110 filter blur-xl saturate-200 contrast-150"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/90 border border-slate-200/90 hover:border-blue-500/50 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-800">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
