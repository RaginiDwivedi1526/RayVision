import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="text-center px-6">
        <div className="text-[120px] md:text-[180px] font-extrabold text-navy/10 leading-none" style={{ fontFamily: 'var(--font-heading)' }}>404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-navy -mt-10 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/" className="btn btn-primary"><Home size={18} /> Back to Home</Link>
          <button onClick={() => window.history.back()} className="btn btn-outline-blue"><ArrowLeft size={18} /> Go Back</button>
        </div>
      </motion.div>
    </div>
  );
}
