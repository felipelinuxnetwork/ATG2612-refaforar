import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: {
      img: 'h-8 sm:h-9',
      sub: 'text-[9px]',
    },
    md: {
      img: 'h-10 sm:h-11 md:h-12',
      sub: 'text-[10px]',
    },
    lg: {
      img: 'h-14 sm:h-16',
      sub: 'text-xs',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center">
        <img
          src="/images/logo.png"
          alt="Coopstar Express Logo Oficial"
          className={`${currentSize.img} w-auto object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-200`}
        />
        <div className="absolute -top-0.5 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse" title="Online 24h" />
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="text-xs font-bold text-white tracking-wide uppercase">
          Coopstar Express
        </span>
        <span className={`${currentSize.sub} font-semibold uppercase tracking-wider text-slate-400`}>
          Moto Frete & Logística 24h
        </span>
      </div>
    </div>
  );
};
