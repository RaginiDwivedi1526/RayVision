import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, ShieldCheck, Briefcase, Users, Building2, CheckCircle2, Laptop, Smartphone, CreditCard, Globe, AlertTriangle, Scale, Palette, TrendingUp, Bot, Video, School, BookOpen, GraduationCap, Handshake } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';

const programs = [
  { num: '1', icon: <Monitor size={26} />, title: 'Digital Literacy Programs', desc: 'We provide basic computer training, internet awareness, and digital payment education to help individuals become confident in using digital tools.',
    bullets: ['Basic Computer & Internet Training', 'Smartphone & App Usage', 'Digital Payments & Online Transactions', 'E-Governance Services Awareness'],
    impact: { value: '2500+', label: 'Individuals Trained' }, image: '/images/gallery/1.png' },
  { num: '2', icon: <ShieldCheck size={26} />, title: 'Cyber Safety Awareness', desc: 'Our cyber safety initiatives educate communities about online safety, cybercrime prevention, and responsible internet usage.',
    bullets: ['Online Fraud & Scam Awareness', 'Cyberbullying Prevention', 'Social Media Safety', 'Cyber Laws & Reporting Guidance'],
    impact: { value: '120+', label: 'Awareness Workshops' }, image: '/images/gallery/2.png' },
  { num: '3', icon: <Briefcase size={26} />, title: 'Skill Development Initiatives', desc: 'We equip youth with in-demand digital skills to enhance employability and support entrepreneurship.',
    bullets: ['Graphic Design', 'Digital Marketing', 'AI Tools & Productivity', 'Video Editing', 'Freelancing & Online Work'],
    impact: { value: '1000+', label: 'Youth Skilled' }, image: '/images/gallery/3.png' },
  { num: '4', icon: <Users size={26} />, title: 'Women Digital Empowerment', desc: 'We empower women with digital knowledge, financial literacy, and online earning opportunities for self-reliance.',
    bullets: ['Digital Literacy for Women', 'Online Earning Opportunities', 'Financial Literacy & Digital Banking', 'Entrepreneurship & Small Business Support'],
    impact: { value: '800+', label: 'Women Empowered' }, image: '/images/gallery/4.png' },
  { num: '5', icon: <Building2 size={26} />, title: 'Smart Village Projects', desc: 'We build technology-enabled infrastructure and digital access points to bring opportunities to rural communities.',
    bullets: ['Rural Digital Centers', 'Smart Classrooms', 'Digital Seva Kendra', 'Community Information Access'],
    impact: { value: '50+', label: 'Rural Centers Established' }, image: '/images/gallery/5.png' },
];

const footerStats = [
  { icon: <Users size={22} />, value: '5000+', label: 'Individuals Empowered' },
  { icon: <BookOpen size={22} />, value: '100+', label: 'Digital Literacy Camps' },
  { icon: <Building2 size={22} />, value: '50+', label: 'Rural Offices' },
  { icon: <Handshake size={22} />, value: '25+', label: 'Partner Organizations' },
];

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Programs() {
  return (
    <div>
      <HeroBanner title="Our Programs" subtitle="Empowering individuals and communities with knowledge, skills and technology for a better tomorrow." breadcrumbs={['Home', 'Our Programs']} />

      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="text-center mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="section-title section-title-center">Programs Designed for Real Change</h2>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">At RayVision Digital Empowerment Trust, our programs are designed to bridge the digital divide and create sustainable impact in rural and underserved communities across India.</p>
          </motion.div>

          <div className="space-y-24">
            {programs.map((prog, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div key={i} {...f} className={`grid lg:grid-cols-2 gap-10 items-center`}>
                  <div className={`${!isEven ? 'lg:order-2' : ''} overflow-hidden rounded-2xl shadow-xl`}>
                    <img src={prog.image} alt={prog.title} className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-primary/10 text-blue-primary flex items-center justify-center">{prog.icon}</div>
                      <div>
                        <span className="text-xs text-gray-400 font-semibold">{prog.num}.</span>
                        <h3 className="text-xl md:text-2xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>{prog.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-5">{prog.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {prog.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-green-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-4 bg-blue-50 rounded-xl px-6 py-4 border border-blue-primary/20">
                      <div>
                        <div className="text-xs text-blue-primary font-semibold uppercase tracking-wider">Impact So Far</div>
                        <div className="text-2xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>{prog.impact.value}</div>
                        <div className="text-sm text-gray-600">{prog.impact.label}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="container-main">
          <motion.div {...f} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Building a <span className="text-green-secondary">Digitally Empowered</span> India</h2>
            <p className="text-white/70 text-sm max-w-2xl mx-auto">Through our programs, we aim to create an inclusive digital ecosystem where everyone has equal access to technology, knowledge and opportunities.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-green-light flex items-center justify-center mx-auto mb-3">{s.icon}</div>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{s.value}</div>
                <div className="text-white/60 text-xs mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
