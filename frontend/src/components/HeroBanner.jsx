import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="relative min-h-[320px] md:min-h-[380px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-green-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 container-main w-full">
        {breadcrumbs.length > 0 && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} className="flex items-center gap-2 text-sm text-white/60 mb-4">
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-white/40">›</span>}
                <span className={i === breadcrumbs.length - 1 ? 'text-white/90' : ''}>{crumb}</span>
              </React.Fragment>
            ))}
          </motion.div>
        )}

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </motion.h1>

        {subtitle && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="w-16 h-1 bg-green-primary rounded-full mb-4" />
            <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">{subtitle}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
