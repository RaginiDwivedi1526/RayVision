import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/programs', label: 'Our Programs' },
  { path: '/impact', label: 'Impact' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/volunteer', label: 'Volunteer' },
  { path: '/donate', label: 'Donate' },
  { path: '/csr', label: 'CSR Partnerships' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b transition-all duration-300 ${
      isScrolled ? 'shadow-lg border-transparent' : 'border-gray-100'
    }`}>
      <div className="w-full px-4 md:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20 lg:h-[88px]">
          <Link to="/" className="flex-shrink-0 z-10 cursor-pointer hover:opacity-90 transition-opacity block">
            <Logo size="default" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path}
                className={`px-3 py-2 text-[0.9rem] font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  location.pathname === path
                    ? 'text-blue-primary bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:text-blue-primary hover:bg-gray-50'
                }`}>
                {label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/donate" className="hidden sm:inline-flex btn btn-green text-sm !py-2 !px-5">
              Donate Now
            </Link>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu">
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden overflow-hidden bg-white border-t border-gray-100">
            <div className="w-full px-4 md:px-8 py-3 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link key={path} to={path}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === path
                      ? 'text-blue-primary bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                  }`}>
                  {label}
                </Link>
              ))}
              <Link to="/donate" className="block w-full text-center btn btn-green mt-3 text-sm">
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
