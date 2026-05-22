import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, CheckCircle2, ArrowRight, FileText, Handshake, TrendingUp, Send, Loader2, ClipboardList, Wifi, Wheat, ShieldCheck, GraduationCap, Users } from 'lucide-react';
import toast from 'react-hot-toast';
import { submitCSR } from '../api';
import HeroBanner from '../components/HeroBanner';

const areas = [
  { icon: <ClipboardList size={24} />, title: 'CSR Projects', desc: 'End-to-end CSR project design, execution, and reporting.', color: '#1565C0' },
  { icon: <Wifi size={24} />, title: 'Digital Education Campaigns', desc: 'Large-scale awareness drives in partnership with corporates.', color: '#2E7D32' },
  { icon: <Wheat size={24} />, title: 'Rural Development Programs', desc: 'Technology-enabled development for rural communities.', color: '#F57C00' },
  { icon: <ShieldCheck size={24} />, title: 'Cyber Awareness Drives', desc: 'Corporate-sponsored cyber safety workshops.', color: '#E91E63' },
  { icon: <GraduationCap size={24} />, title: 'Skill Training Centers', desc: 'Co-branded skill development and training hubs.', color: '#2196F3' },
  { icon: <Users size={24} />, title: 'Community Partnerships', desc: 'Collaborative community development initiatives.', color: '#2E7D32' },
];

const tiers = [
  { icon: <Trophy size={32} />, title: 'Gold Partner', price: '₹5,00,000+', color: '#F57C00',
    benefits: ['Logo on all materials', 'Dedicated program', 'Annual report mention', 'Site visits', 'Social media promotion'] },
  { icon: <Award size={32} />, title: 'Silver Partner', price: '₹2,00,000+', color: '#607D8B', popular: true,
    benefits: ['Logo on digital campaigns', 'Program co-branding', 'Social media mention', 'Newsletter feature', 'Certificate of partnership'] },
  { icon: <Star size={32} />, title: 'Bronze Partner', price: '₹50,000+', color: '#8D6E63',
    benefits: ['Website listing', 'Newsletter mention', 'Certificate of appreciation', 'Annual impact report', 'Social acknowledgment'] },
];

const steps = [
  { icon: <FileText size={24} />, title: 'Reach Out', num: '01' },
  { icon: <Handshake size={24} />, title: 'Discuss Goals', num: '02' },
  { icon: <TrendingUp size={24} />, title: 'Design Program', num: '03' },
  { icon: <CheckCircle2 size={24} />, title: 'Create Impact', num: '04' },
];

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function CSR() {
  const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', tier: '', budget: '', message: '' });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setFormData(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitCSR(formData);
      toast.success("Thank you! Our partnerships team will contact you shortly.");
      setFormData({ company: '', name: '', email: '', phone: '', tier: '', budget: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to submit inquiry. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <HeroBanner title="CSR Partnerships" subtitle="Partner with purpose. Create lasting impact in rural India." breadcrumbs={['Home', 'CSR Partners']} />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="max-w-3xl mx-auto text-center">
            <span className="section-label">Partner With Us</span>
            <h2 className="section-title section-title-center">Creating Sustainable Impact Together</h2>
            <p className="text-gray-600 mt-6 leading-relaxed">RayVision Digital Empowerment Trust welcomes collaborations with corporations, educational institutions, government bodies, and social organizations to create sustainable digital empowerment programs across India.</p>
          </motion.div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <motion.div {...f} className="text-center mb-14">
            <h2 className="section-title section-title-center text-2xl">Areas of Collaboration</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 group border border-gray-100 hover:border-green-primary">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${a.color}15`, color: a.color }}>{a.icon}</div>
                <h3 className="text-base font-semibold text-navy mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>{a.title}</h3>
                <p className="text-gray-600 text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="text-center mb-14">
            <h2 className="section-title section-title-center">Partnership Tiers</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`card p-8 relative ${t.popular ? 'ring-2 ring-blue-primary shadow-xl' : ''}`}>
                {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-primary text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</div>}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${t.color}15`, color: t.color }}>{t.icon}</div>
                <h3 className="text-xl font-semibold text-navy mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{t.title}</h3>
                <div className="text-2xl font-bold mb-5" style={{ fontFamily: 'var(--font-heading)', color: t.color }}>{t.price}</div>
                <ul className="space-y-2.5 mb-6">
                  {t.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-green-primary flex-shrink-0 mt-0.5" />{b}</li>
                  ))}
                </ul>
                <button className={`btn w-full ${t.popular ? 'btn-primary' : 'btn-outline-dark'}`}>Get Started</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <motion.div {...f} className="text-center mb-14"><h2 className="section-title section-title-center text-2xl">How It Works</h2></motion.div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-primary via-green-primary to-orange" />
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-primary/20 flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <div className="text-blue-primary">{s.icon}</div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-primary text-white flex items-center justify-center text-xs font-bold">{s.num}</div>
                </div>
                <h3 className="text-sm font-semibold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="max-w-2xl mx-auto">
            <div className="text-center mb-10"><h2 className="section-title section-title-center text-2xl">CSR Partnership Inquiry</h2></div>
            <form onSubmit={handleSubmit} className="card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="form-label">Company Name <span className="required">*</span></label><input type="text" required value={formData.company} onChange={set('company')} className="form-input" placeholder="Your company" /></div>
                <div><label className="form-label">Contact Person <span className="required">*</span></label><input type="text" required value={formData.name} onChange={set('name')} className="form-input" placeholder="Your name" /></div>
                <div><label className="form-label">Email <span className="required">*</span></label><input type="email" required value={formData.email} onChange={set('email')} className="form-input" placeholder="email@company.com" /></div>
                <div><label className="form-label">Phone <span className="required">*</span></label><input type="tel" required value={formData.phone} onChange={set('phone')} className="form-input" placeholder="+91 XXXXX" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <div><label className="form-label">Partnership Type <span className="required">*</span></label>
                  <select required value={formData.tier} onChange={set('tier')} className="form-input">
                    <option value="">Select tier</option><option value="Gold">Gold Partner (₹5,00,000+)</option><option value="Silver">Silver Partner (₹2,00,000+)</option><option value="Bronze">Bronze Partner (₹50,000+)</option><option value="Custom">Custom Partnership</option>
                  </select></div>
                <div><label className="form-label">Estimated Budget</label><input type="text" value={formData.budget} onChange={set('budget')} className="form-input" placeholder="Optional" /></div>
              </div>
              <div className="mt-5"><label className="form-label">Message / Requirements</label><textarea rows={4} value={formData.message} onChange={set('message')} className="form-input resize-none" placeholder="Tell us about your CSR goals..." /></div>
              <button type="submit" disabled={loading} className="btn btn-green w-full mt-6 text-base">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Send Inquiry</>}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
