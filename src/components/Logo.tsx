import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: {
      badge: 'w-8 h-8 rounded-lg text-xs',
      title: 'text-base',
      sub: 'text-[9px]',
    },
    md: {
      badge: 'w-10 h-10 md:w-11 md:h-11 rounded-xl text-xs md:text-sm',
      title: 'text-lg md:text-xl',
      sub: 'text-[10px]',
    },
    lg: {
      badge: 'w-14 h-14 rounded-2xl text-base md:text-lg',
      title: 'text-2xl md:text-3xl',
      sub: 'text-xs',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 font-bold tracking-tight select-none ${className}`}>
      {/* Brand Icon Oval based on the authentic Coopstar Express Red Badge */}
      <div className="relative flex items-center justify-center">
        <div className={`${currentSize.badge} bg-gradient-to-br from-red-600 via-red-700 to-red-900 flex items-center justify-center shadow-lg shadow-red-700/30 border border-red-500/30 transform transition-transform hover:scale-105`}>
          <span className="text-white font-black tracking-wider">C★E</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse" title="Online 24h" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-white font-black uppercase tracking-tight ${currentSize.title}`}>
            COOPSTAR
          </span>
          <span className={`text-red-500 font-extrabold uppercase ${currentSize.title}`}>
            EXPRESS
          </span>
        </div>
        <span className={`${currentSize.sub} uppercase font-semibold tracking-wider text-slate-400 mt-0.5`}>
          Moto Frete & Logística 24h
        </span>
      </div>
    </div>
  );
};
