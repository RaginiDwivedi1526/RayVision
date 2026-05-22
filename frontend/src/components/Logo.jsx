import React from 'react';

export default function Logo({ className = '', size = 'default' }) {
  const sizes = {
    small: { width: 160, height: 48 },
    default: { width: 220, height: 56 },
    large: { width: 280, height: 72 },
  };

  const { width, height } = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={height} height={height} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pixel/dot pattern left */}
        <circle cx="8" cy="28" r="2.5" fill="#2196F3" opacity="0.5" />
        <circle cx="16" cy="22" r="2" fill="#2196F3" opacity="0.4" />
        <circle cx="8" cy="38" r="2" fill="#2196F3" opacity="0.3" />
        <circle cx="16" cy="32" r="2.5" fill="#2196F3" opacity="0.6" />
        <circle cx="8" cy="48" r="2" fill="#1565C0" opacity="0.4" />
        <circle cx="16" cy="42" r="2" fill="#1565C0" opacity="0.5" />

        {/* Main R letter */}
        <text x="40" y="56" fontFamily="Poppins, Arial, sans-serif" fontSize="44" fontWeight="800" fill="#1A2B5F" textAnchor="middle">R</text>

        {/* Human figure with raised hands */}
        <circle cx="58" cy="18" r="4" fill="#1565C0" />
        <path d="M58 22 L58 35 M52 26 L58 22 L64 26 M54 38 L58 35 L62 38" stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Orange star on top */}
        <polygon points="40,4 42,10 48,10 43,14 45,20 40,16 35,20 37,14 32,10 38,10" fill="#F57C00" />

        {/* Green swoosh at bottom */}
        <path d="M18 62 Q30 55 42 60 Q54 65 66 58" stroke="#43A047" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className="font-heading text-[1.1rem] font-extrabold leading-tight tracking-tight" style={{ color: '#1A2B5F', fontFamily: 'var(--font-heading)' }}>
          <span className="text-blue-primary">RAY</span>VISION
        </span>
        <span className="text-[0.55rem] font-semibold tracking-[0.12em] uppercase leading-tight" style={{ color: '#1A2B5F', fontFamily: 'var(--font-heading)' }}>
          Digital Empowerment Trust
        </span>
        <span className="text-[0.42rem] italic leading-tight" style={{ color: '#43A047', fontFamily: 'var(--font-body)' }}>
          Transforming Rural India Through Digital Empowerment
        </span>
      </div>
    </div>
  );
}
