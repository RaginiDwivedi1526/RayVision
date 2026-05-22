import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';

const quickLinks = [
  { path: '/about', label: 'About' },
  { path: '/programs', label: 'Programs' },
  { path: '/volunteer', label: 'Volunteer' },
  { path: '/donate', label: 'Donate' },
  { path: '/contact', label: 'Contact' },
];

const programLinks = [
  { label: 'Digital Literacy' },
  { label: 'Cyber Safety' },
  { label: 'Skill Development' },
  { label: 'Women Empowerment' },
  { label: 'Smart Village Initiative' },
];

const socialLinks = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="w-full px-4 md:px-8 xl:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
                <circle cx="8" cy="28" r="2.5" fill="#2196F3" opacity="0.5" />
                <circle cx="16" cy="22" r="2" fill="#2196F3" opacity="0.4" />
                <circle cx="16" cy="32" r="2.5" fill="#2196F3" opacity="0.6" />
                <text x="40" y="56" fontFamily="Poppins, Arial" fontSize="44" fontWeight="800" fill="white" textAnchor="middle">R</text>
                <polygon points="40,4 42,10 48,10 43,14 45,20 40,16 35,20 37,14 32,10 38,10" fill="#F57C00" />
                <path d="M18 62 Q30 55 42 60 Q54 65 66 58" stroke="#43A047" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </svg>
              <div>
                <div className="font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="text-blue-secondary">RAY</span>VISION
                </div>
                <div className="text-[0.55rem] uppercase tracking-wider text-gray-300">Digital Empowerment Trust</div>
              </div>
            </div>
            <p className="text-green-light text-xs font-medium mb-2 italic">
              Transforming Rural India Through Digital Empowerment
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Empowering communities through technology, digital education, innovation, and social impact initiatives.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-primary transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative pb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-green-primary rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ path, label }) => (
                <li key={label}>
                  <Link to={path} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-primary rounded-full flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative pb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Programs
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-green-primary rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {programLinks.map(({ label }) => (
                <li key={label}>
                  <Link to="/programs" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-primary rounded-full flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-5 relative pb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Us
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-green-primary rounded-full" />
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-green-primary" />
                RayVision Digital Empowerment Trust, India
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone size={16} className="flex-shrink-0 text-green-primary" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@rayvisiontech.com" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <Mail size={16} className="flex-shrink-0 text-green-primary" />
                  info@rayvisiontech.com
                </a>
              </li>
              <li>
                <a href="https://www.rayvisiontech.com" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <Globe size={16} className="flex-shrink-0 text-green-primary" />
                  www.rayvisiontech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="w-full px-4 md:px-8 xl:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p>© 2026 RayVision Digital Empowerment Trust. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Transparency Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
