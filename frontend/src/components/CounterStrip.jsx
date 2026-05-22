import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

function CounterItem({ icon, value, label, suffix = '+' }) {
  const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ''));
  const { count, ref } = useCountUp(numericValue, 2000);

  return (
    <motion.div ref={ref} className="flex flex-col items-center text-center px-3"
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div className="text-2xl md:text-3xl mb-2 text-green-light">{icon}</div>
      <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/70 text-xs mt-1 font-medium">{label}</div>
    </motion.div>
  );
}

export default function CounterStrip({ counters, className = '' }) {
  return (
    <div className={`bg-navy py-10 ${className}`}>
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {counters.map((counter, i) => (
            <CounterItem key={i} {...counter} />
          ))}
        </div>
      </div>
    </div>
  );
}
