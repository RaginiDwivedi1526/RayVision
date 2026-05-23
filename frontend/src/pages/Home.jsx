import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Monitor, ShieldCheck, Briefcase, Users, Building2,
  Heart, HandHelping, Handshake, ArrowRight, GraduationCap,
  Smartphone, Globe, BookOpen, CheckCircle2, Quote,
  Lightbulb, Star, ChevronRight, Home as HomeIcon
} from 'lucide-react';
import CounterStrip from '../components/CounterStrip';

const heroCounters = [
  { icon: <Users size={26} />, value: 5000, label: 'Individuals Empowered' },
  { icon: <BookOpen size={26} />, value: 100, label: 'Digital Literacy Camps' },
  { icon: <Building2 size={26} />, value: 50, label: 'Rural Offices' },
  { icon: <GraduationCap size={26} />, value: 1000, label: 'Students Trained' },
  { icon: <Handshake size={26} />, value: 25, label: 'Partner Organizations' },
];

const programs = [
  { icon: <Monitor size={26} />, title: 'Digital Literacy Programs', desc: 'Computer education, internet awareness & digital payments for all.', image: '/images/gallery/1.png' },
  { icon: <ShieldCheck size={26} />, title: 'Cyber Safety Awareness', desc: 'Workshops on cybercrime prevention and internet safety.', image: '/images/gallery/2.png' },
  { icon: <Briefcase size={26} />, title: 'Skill Development Initiatives', desc: 'Training in graphic design, AI tools, freelancing & more.', image: '/images/gallery/3.png' },
  { icon: <Users size={26} />, title: 'Women Digital Empowerment', desc: 'Digital education, financial literacy & online earning for women.', image: '/images/gallery/4.png' },
  { icon: <Building2 size={26} />, title: 'Smart Village Projects', desc: 'Technology-enabled learning in rural regions.', image: '/images/gallery/5.png' },
];

const whyChoose = [
  { icon: <HomeIcon size={24} />, title: 'Community Focused', desc: 'We work directly with grassroots communities to create real impact.', color: '#2E7D32' },
  { icon: <Lightbulb size={24} />, title: 'Technology Driven', desc: 'Our initiatives combine innovation with practical digital solutions.', color: '#1565C0' },
  { icon: <Star size={24} />, title: 'Youth Empowerment', desc: 'We help young individuals build future-ready skills.', color: '#F57C00' },
  { icon: <CheckCircle2 size={24} />, title: 'Transparent & Accountable', desc: 'We believe in ethical operations and measurable social impact.', color: '#2E7D32' },
];

const testimonials = [
  { quote: 'RayVision is creating real digital awareness in rural communities.', author: 'Community Partner' },
  { quote: 'The training programs helped students learn valuable digital skills.', author: 'Volunteer Trainer' },
  { quote: 'A truly impactful initiative for the future of Digital India.', author: 'Supporter' },
];

const galleryImages = [
  '/images/gallery/6.png',
  '/images/gallery/7.png',
  '/images/gallery/8.png',
  '/images/gallery/1.png',
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/2.png" alt="Digital classroom in rural India" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        </div>
        <div className="relative z-10 container-main section-padding">
          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Empowering Communities Through
            </motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-secondary mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}>
              Technology & Digital Inclusion
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              RayVision Digital Empowerment Trust is dedicated to bridging the digital divide by providing technology education, cyber awareness, digital literacy, and skill development opportunities to underserved communities across India.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4">
              <Link to="/volunteer" className="btn btn-primary text-base">Become a Volunteer</Link>
              <Link to="/donate" className="btn btn-outline text-base">Support Our Mission</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <CounterStrip counters={heroCounters} className="bg-gradient-to-r from-navy-dark via-navy to-navy-dark" />

      {/* ===== WELCOME ===== */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Welcome to RayVision Digital Empowerment Trust</h2>
              <p className="text-gray-600 leading-relaxed mb-4 mt-6">
                We are a non-profit organization focused on building a digitally empowered and inclusive India. We work with rural communities, students, women, and underserved populations to provide access to technology, digital education, cyber safety awareness, and future-ready skills.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mission is to create opportunities through innovation, education, and community-driven development initiatives.
              </p>
              <Link to="/about" className="btn btn-outline-blue">Learn More About Us <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <img src="/images/gallery/3.png" alt="RayVision rural digital center"
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
              <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 bg-blue-primary text-white rounded-xl px-5 py-4 shadow-lg">
                <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>50+</div>
                <div className="text-xs font-medium">Rural Digital Centers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="section-label">What We Do</span>
            <h2 className="section-title section-title-center">Our Programs</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Empowering individuals and communities with knowledge, skills and technology for a better tomorrow.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {programs.map((prog, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card group">
                <div className="relative h-40 overflow-hidden">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-primary/10 text-blue-primary flex items-center justify-center mb-3 -mt-10 relative z-10 bg-white shadow-md border border-gray-100">
                    {prog.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{prog.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{prog.desc}</p>
                  <Link to="/programs" className="text-blue-primary text-xs font-semibold mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="section-title section-title-center">Why Choose Us</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center group border border-gray-100 hover:border-green-primary">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CREATING IMPACT ===== */}
      <section className="section-padding bg-navy text-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-green-light text-sm font-semibold uppercase tracking-wider mb-2 block">Our Impact</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Creating Impact That Matters</h2>
              <ul className="space-y-4 mb-8">
                {['Digital education for rural communities', 'Practical skills for better livelihood', 'Safe and secure digital environment', 'Inclusive growth and equal opportunities'].map((point, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-green-light flex-shrink-0" />
                    <span className="text-white/80 text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/impact" className="btn btn-green">See Our Impact <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="/images/gallery/4.png" alt="Digital payments training"
                className="rounded-2xl shadow-2xl w-full object-cover h-[420px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="section-title section-title-center">Our Work in Action</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden rounded-xl">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-10">
            <Link to="/gallery" className="btn btn-outline-blue">View Full Gallery <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <h2 className="section-title section-title-center">What People Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card p-7 border-b-4 border-navy relative">
                <Quote size={32} className="text-green-primary/30 mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
                <p className="text-navy font-semibold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DONATION CTA ===== */}
      <section className="section-padding bg-gradient-to-r from-navy via-blue-primary to-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-20 w-48 h-48 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-white rounded-full" />
        </div>
        <div className="container-main relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Be a Part of the Digital Transformation
              </h2>
              <p className="text-blue-light text-base max-w-xl">
                Your support helps us reach more communities and create a future-ready rural India.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate" className="btn btn-green text-base">Donate Now <Heart size={18} /></Link>
              <Link to="/volunteer" className="btn btn-outline text-base">Become a Volunteer <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
