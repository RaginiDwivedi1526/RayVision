import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Target, Heart, Compass, Users, BookOpen, Building2, GraduationCap, Handshake, ArrowRight } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import CounterStrip from '../components/CounterStrip';

const counters = [
  { icon: <Users size={26} />, value: 5000, label: 'Individuals Empowered' },
  { icon: <BookOpen size={26} />, value: 100, label: 'Digital Literacy Camps' },
  { icon: <Building2 size={26} />, value: 50, label: 'Rural Offices' },
  { icon: <GraduationCap size={26} />, value: 1000, label: 'Students Trained' },
  { icon: <Handshake size={26} />, value: 25, label: 'Partner Organizations' },
];

const vmvaCards = [
  { icon: <Eye size={28} />, title: 'Our Vision', desc: 'To create a future where every individual has equal access to digital opportunities, technology, and knowledge regardless of geography or background.', color: '#1565C0' },
  { icon: <Target size={28} />, title: 'Our Mission', desc: 'To empower rural and underserved communities through digital literacy, cyber awareness, skill development, and technology-driven social initiatives.', color: '#2E7D32' },
  { icon: <Heart size={28} />, title: 'Our Values', desc: 'Integrity & Transparency • Inclusivity & Equality • Innovation & Excellence • Collaboration & Respect • Accountability & Impact', color: '#F57C00' },
  { icon: <Compass size={28} />, title: 'Our Approach', desc: 'Community-centric approach with practical, innovative and sustainable digital solutions for long-term impact.', color: '#2196F3' },
];

const timeline = [
  { year: '2021', text: 'RayVision was founded with the mission to promote digital literacy in rural India.' },
  { year: '2022', text: 'Started digital literacy camps and established our first rural digital learning center.' },
  { year: '2023', text: 'Expanded programs to include skill development, cyber safety awareness and women empowerment.' },
  { year: '2024', text: 'Reached 50+ rural centers and impacted thousands of lives across multiple states.' },
  { year: '2025 & Beyond', text: 'Continuing our mission to build a digitally empowered and inclusive India.' },
];

const teamMembers = [
  { img: 'https://picsum.photos/seed/team1/300/300', name: 'Rahul Verma', role: 'Founder & Director' },
  { img: 'https://picsum.photos/seed/team2/300/300', name: 'Priya Singh', role: 'Program Manager' },
  { img: 'https://picsum.photos/seed/team3/300/300', name: 'Amit Patel', role: 'Technology Lead' },
  { img: 'https://picsum.photos/seed/team4/300/300', name: 'Sneha Gupta', role: 'Community Outreach' },
];

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function About() {
  return (
    <div>
      <HeroBanner title="About Us" subtitle="Empowering communities through technology, education and digital opportunities." breadcrumbs={['Home', 'About Us']} />

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...f}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Introduction to RayVision Digital Empowerment Trust</h2>
              <p className="text-gray-600 leading-relaxed mb-4 mt-6">RayVision Digital Empowerment Trust is a registered non-profit organization working towards building a digitally inclusive and empowered India. We focus on bridging the digital divide by delivering digital literacy, skill development, cyber safety awareness and technology access to rural and underserved communities.</p>
              <p className="text-gray-600 leading-relaxed mb-8">We believe that technology has the power to transform lives and communities. Our mission is to ensure that no one is left behind in India's digital journey.</p>
              <Link to="/volunteer" className="btn btn-primary">Join Our Mission <ArrowRight size={18} /></Link>
            </motion.div>
            <motion.div {...f} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://picsum.photos/seed/aboutoff/600/450" alt="RayVision office" className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VMVA Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vmvaCards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-7 text-center group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}>{card.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="mb-14">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Our Journey</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-primary via-green-primary to-orange rounded-full" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="relative pl-12">
                    <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-white border-[3px] border-green-primary shadow-md" />
                    <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <span className="text-blue-primary font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>{item.year}</span>
                      <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div {...f} transition={{ duration: 0.6, delay: 0.3 }}>
              <img src="https://picsum.photos/seed/training1/600/500" alt="Training session" className="rounded-2xl shadow-xl w-full object-cover h-[450px] sticky top-24" />
            </motion.div>
          </div>
        </div>
      </section>

      <CounterStrip counters={counters} />

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <motion.div {...f} className="mb-14">
            <span className="section-label">Our People</span>
            <h2 className="section-title">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mt-4">Our team is a blend of passionate educators, technologists, and social workers committed to bringing digital empowerment to every rural community.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {teamMembers.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-4 border-white">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-navy text-sm" style={{ fontFamily: 'var(--font-heading)' }}>{m.name}</h4>
                <p className="text-gray-500 text-xs">{m.role}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...f} className="text-center">
            <Link to="/about" className="btn btn-outline-blue">Meet Our Team <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
