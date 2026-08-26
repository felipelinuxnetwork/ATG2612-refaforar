import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { companyData } from '../data/companyInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 select-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700 text-white text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Precisa de um motoboy agora? Fale no WhatsApp 24h!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded"
            title="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(companyData.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 border-2 border-white/20 transform transition-all duration-300 hover:scale-110 hover:shadow-emerald-600/40 group"
        aria-label="Falar com a Coopstar Express no WhatsApp 24h"
      >
        <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 text-[9px] font-bold text-white items-center justify-center">
            24
          </span>
        </span>
      </a>
    </div>
  );
};
