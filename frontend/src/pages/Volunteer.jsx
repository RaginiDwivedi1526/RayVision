import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Laptop, Building2, Send, CheckCircle2, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { submitVolunteer } from '../api';
import HeroBanner from '../components/HeroBanner';

const roles = [
  { icon: <GraduationCap size={28} />, title: 'Field Trainer', desc: 'Conduct digital literacy and cyber safety sessions in rural villages.', color: '#2E7D32' },
  { icon: <Laptop size={28} />, title: 'Digital Mentor', desc: 'Guide youth and women in learning practical digital skills online or offline.', color: '#1565C0' },
  { icon: <Building2 size={28} />, title: 'Community Coordinator', desc: 'Coordinate with local communities, NGOs, and institutions to expand our reach.', color: '#F57C00' },
];

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Volunteer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', state: '', interest: '', message: '' });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setFormData(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitVolunteer(formData);
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: '', email: '', phone: '', city: '', state: '', interest: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to submit. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <HeroBanner title="Become a Volunteer" subtitle="Join a growing movement transforming communities through technology and education." breadcrumbs={['Home', 'Volunteer']} />

      {/* Why Volunteer */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="max-w-3xl mx-auto text-center mb-14">
            <span className="section-label">Make a Difference</span>
            <h2 className="section-title section-title-center">Why Volunteer With Us?</h2>
            <p className="text-gray-600 mt-6">
              Become part of a growing movement dedicated to transforming communities through education, technology, and innovation. Whether you are a student, professional, educator, or social worker — your contribution can help build a digitally empowered India.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {roles.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-7 text-center group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${r.color}15`, color: r.color }}>{r.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <motion.div {...f} className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title section-title-center text-2xl">Volunteer Application Form</h2>
            </div>
            <form onSubmit={handleSubmit} className="card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 space-y-4 md:space-y-0">
                <div>
                  <label className="form-label">Full Name <span className="required">*</span></label>
                  <input type="text" required value={formData.name} onChange={set('name')} className="form-input" placeholder="Your full name" />
                </div>
                <div>
                  <label className="form-label">Email Address <span className="required">*</span></label>
                  <input type="email" required value={formData.email} onChange={set('email')} className="form-input" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="form-label">Phone Number <span className="required">*</span></label>
                  <input type="tel" required value={formData.phone} onChange={set('phone')} className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="form-label">City <span className="required">*</span></label>
                  <input type="text" required value={formData.city} onChange={set('city')} className="form-input" placeholder="Your city" />
                </div>
                <div>
                  <label className="form-label">State <span className="required">*</span></label>
                  <input type="text" required value={formData.state} onChange={set('state')} className="form-input" placeholder="Your state" />
                </div>
                <div>
                  <label className="form-label">Area of Interest <span className="required">*</span></label>
                  <select required value={formData.interest} onChange={set('interest')} className="form-input">
                    <option value="">Select area</option>
                    <option value="Field Trainer">Field Trainer</option>
                    <option value="Digital Mentor">Digital Mentor</option>
                    <option value="Community Coordinator">Community Coordinator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label className="form-label">Message / Tell us about yourself</label>
                <textarea rows={4} value={formData.message} onChange={set('message')} className="form-input resize-none" placeholder="Tell us about your experience and motivation..." />
              </div>
              <button type="submit" disabled={loading} className="btn btn-green w-full mt-6 text-base">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : <><Send size={18} /> Submit Application</>}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
