import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, ShieldCheck, GraduationCap, Heart, Building2, Target, HandHelping, Quote } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';

const metrics = [
  { icon: <Users size={26} />, value: '12,500+', label: 'Individuals Reached', color: '#1565C0' },
  { icon: <BookOpen size={26} />, value: '250+', label: 'Digital Literacy Camps', color: '#2E7D32' },
  { icon: <ShieldCheck size={26} />, value: '120+', label: 'Cyber Awareness Workshops', color: '#F57C00' },
  { icon: <GraduationCap size={26} />, value: '3,000+', label: 'Youth Trained', color: '#1565C0' },
  { icon: <Heart size={26} />, value: '2,200+', label: 'Women Empowered', color: '#E91E63' },
  { icon: <Building2 size={26} />, value: '75+', label: 'Rural Centers', color: '#2E7D32' },
];

const photos = [
  { src: '/images/gallery/1.png', label: 'Digital Literacy Camps' },
  { src: '/images/gallery/2.png', label: 'Skill Development Training' },
  { src: '/images/gallery/3.png', label: 'Women Digital Empowerment' },
  { src: '/images/gallery/4.png', label: 'Cyber Safety Awareness' },
  { src: '/images/gallery/5.png', label: 'Rural Digital Centers' },
  { src: '/images/gallery/6.png', label: 'Students Empowered' },
  { src: '/images/gallery/7.png', label: 'Community Engagement' },
  { src: '/images/gallery/8.png', label: 'Digital Outreach Programs' },
];

const progress = [
  { percent: 85, label: 'Beneficiaries improved their digital skills', color: '#1565C0' },
  { percent: 78, label: 'Women learners gained financial independence', color: '#E91E63' },
  { percent: 90, label: 'Students showed better academic performance', color: '#2E7D32' },
  { percent: 88, label: 'Communities feel more aware and secure online', color: '#F57C00' },
];

const stories = [
  { name: 'Ramesh Kumar', img: '/images/gallery/1.png', quote: 'After attending digital literacy classes, I started my online services center in my village and now earn a stable income.' },
  { name: 'Meena Sharma', img: '/images/gallery/2.png', quote: 'I learned digital marketing and now run my own handmade products business online.' },
  { name: 'Arjun Patel', img: '/images/gallery/3.png', quote: 'The computer training helped me get a job in a private company in the city.' },
];

const goals = [
  { icon: <Users size={20} />, text: 'Reach 50,000+ Individuals by 2026' },
  { icon: <Building2 size={20} />, text: 'Establish 200+ Rural Digital Centers' },
  { icon: <GraduationCap size={20} />, text: 'Train 10,000+ Youth in Advanced Digital Skills' },
  { icon: <Heart size={20} />, text: 'Empower 5,000+ Women Entrepreneurs' },
  { icon: <HandHelping size={20} />, text: 'Build a Strong Network of Digital Volunteers' },
];

function CircleChart({ percent, color, label }) {
  const r = 42, c = 2 * Math.PI * r, off = c - (percent / 100) * c;
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} stroke="#e5e7eb" strokeWidth="6" fill="none" />
          <motion.circle cx="50" cy="50" r={r} stroke={color} strokeWidth="6" fill="none" strokeLinecap="round"
            initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: off }}
            viewport={{ once: true }} transition={{ duration: 1.5, ease: 'easeOut' }} strokeDasharray={c} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)', color }}>{percent}%</span>
        </div>
      </div>
      <p className="text-gray-600 text-xs text-center max-w-[110px]">{label}</p>
    </motion.div>
  );
}

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Impact() {
  return (
    <div>
      <HeroBanner title="Our Impact" subtitle="Every number represents a life empowered, a community strengthened, and a step towards a digitally inclusive India." breadcrumbs={['Home', 'Impact']} />

      {/* Metrics */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="text-center mb-14">
            <h2 className="section-title section-title-center">Making a Measurable Difference</h2>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">Our initiatives have reached thousands across rural India, equipping them with the skills and knowledge to build a better future.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {metrics.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="card p-5 text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${m.color}15`, color: m.color }}>{m.icon}</div>
                <div className="text-xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>{m.value}</div>
                <div className="text-gray-500 text-xs mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <motion.div {...f} className="mb-14"><span className="section-label">Gallery</span><h2 className="section-title">Impact in Action</h2></motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
                <div className="relative overflow-hidden rounded-xl">
                  <img src={p.src} alt={p.label} className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-medium">{p.label}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs font-medium mt-2 text-center">{p.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress + Quote */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="mb-14"><h2 className="section-title">Transforming Lives, Strengthening Communities</h2></motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {progress.map((p, i) => <CircleChart key={i} {...p} />)}
            </div>
            <motion.div {...f} className="bg-blue-50 rounded-2xl p-8 relative">
              <Quote size={48} className="text-green-primary/20 absolute top-4 left-4" />
              <p className="text-gray-700 text-base leading-relaxed italic mb-6 pl-4 relative z-10">
                "RayVision has changed the way our village looks at technology. Earlier we were afraid of phones and online services, now we use them confidently for education, payments, and business."
              </p>
              <div className="flex items-center gap-3 pl-4">
                <div className="w-10 h-10 rounded-full bg-blue-primary/10 text-blue-primary font-bold text-sm flex items-center justify-center">S</div>
                <div><div className="font-semibold text-navy text-sm" style={{ fontFamily: 'var(--font-heading)' }}>Sushila Devi</div><div className="text-gray-500 text-xs">Beneficiary</div></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stories + Goals */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...f}>
              <h3 className="section-title text-2xl mb-8">Stories of Change</h3>
              <div className="space-y-5">
                {stories.map((s, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
                    <img src={s.img} alt={s.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{s.name}</h4>
                      <p className="text-gray-600 text-sm italic">"{s.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...f} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="section-title text-2xl mb-8">Our Future Goals</h3>
              <div className="space-y-4">
                {goals.map((g, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-green-primary/10 text-green-primary flex items-center justify-center flex-shrink-0">{g.icon}</div>
                    <span className="text-gray-700 text-sm font-medium">{g.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
