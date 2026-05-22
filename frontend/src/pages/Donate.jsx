import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Monitor, ShieldCheck, Users, CreditCard, Info, Loader2, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { createDonationOrder, verifyPayment, loadRazorpay } from '../api';
import HeroBanner from '../components/HeroBanner';

const impactCards = [
  { amount: '₹500', desc: 'Provides digital training materials for 1 student', icon: '📚', color: '#2E7D32' },
  { amount: '₹1,000', desc: 'Sponsors a cyber safety awareness workshop', icon: '🛡️', color: '#1565C0' },
  { amount: '₹5,000', desc: 'Funds a full digital literacy camp for a village', icon: '🏘️', color: '#F57C00' },
];

const quickAmounts = [500, 1000, 2000, 5000];

const sponsorCards = [
  { icon: <Monitor size={24} />, title: 'Sponsor Digital Literacy Camp', amount: '₹10,000', color: '#1565C0' },
  { icon: <ShieldCheck size={24} />, title: 'Sponsor Cyber Safety Workshop', amount: '₹5,000', color: '#2E7D32' },
  { icon: <Users size={24} />, title: 'Sponsor Women Empowerment Session', amount: '₹8,000', color: '#E91E63' },
];

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Donate() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', pan: '', amount: 1000, custom: false });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setFormData(p => ({ ...p, [k]: e.target.value }));

  const selectAmount = (val) => setFormData(p => ({ ...p, amount: val, custom: false }));
  const enableCustom = () => setFormData(p => ({ ...p, custom: true, amount: '' }));

  const handleDonate = async (e) => {
    e.preventDefault();
    if (!formData.amount || formData.amount < 1) {
      toast.error('Please enter a valid donation amount');
      return;
    }
    setLoading(true);
    try {
      const Razorpay = await loadRazorpay();
      const { data } = await createDonationOrder({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        pan: formData.pan,
        amount: Number(formData.amount),
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency || 'INR',
        name: 'RayVision Digital Empowerment Trust',
        description: 'Donation',
        order_id: data.orderId,
        handler: async (response) => {
          try {
            await verifyPayment(response);
            toast.success('Thank you for your generous donation! A receipt has been sent to your email.');
          } catch (err) {
            toast.error('Payment verification failed. Please contact support.');
          }
        },
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        theme: { color: '#1565C0' },
      };
      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error(err.message || 'Failed to initiate payment. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <HeroBanner title="Support Our Mission" subtitle="Your contribution empowers communities and transforms lives across rural India." breadcrumbs={['Home', 'Donate']} />

      {/* Impact Cards */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="text-center mb-14">
            <span className="section-label">Your Impact</span>
            <h2 className="section-title section-title-center">Impact of Your Donation</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {impactCards.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-7 text-center group border-2 border-transparent hover:border-green-primary">
                <div className="text-4xl mb-4">{c.icon}</div>
                <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', color: c.color }}>{c.amount}</div>
                <p className="text-gray-600 text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <motion.div {...f} className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title section-title-center text-2xl">Make a Donation</h2>
            </div>
            <form onSubmit={handleDonate} className="card p-8 md:p-10">
              <div className="space-y-4">
                <div>
                  <label className="form-label">Full Name <span className="required">*</span></label>
                  <input type="text" required value={formData.name} onChange={set('name')} className="form-input" placeholder="Your full name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Email <span className="required">*</span></label>
                    <input type="email" required value={formData.email} onChange={set('email')} className="form-input" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="form-label">Phone</label>
                    <input type="tel" value={formData.phone} onChange={set('phone')} className="form-input" placeholder="+91 XXXXX" />
                  </div>
                </div>
                <div>
                  <label className="form-label">PAN Number <span className="text-gray-400 text-xs">(Optional — for 80G certificate)</span></label>
                  <input type="text" value={formData.pan} onChange={set('pan')} className="form-input" placeholder="ABCDE1234F" />
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="form-label">Donation Amount <span className="required">*</span></label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {quickAmounts.map(a => (
                      <button key={a} type="button" onClick={() => selectAmount(a)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          !formData.custom && formData.amount === a
                            ? 'bg-green-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}>
                        ₹{a.toLocaleString()}
                      </button>
                    ))}
                    <button type="button" onClick={enableCustom}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        formData.custom ? 'bg-green-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}>
                      Custom
                    </button>
                  </div>
                  {formData.custom && (
                    <input type="number" min="1" value={formData.amount} onChange={set('amount')}
                      className="form-input" placeholder="Enter amount in ₹" />
                  )}
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn btn-green w-full mt-6 text-base">
                {loading ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : <><Heart size={18} /> Donate Now</>}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <motion.div {...f} className="text-center mb-14">
            <h2 className="section-title section-title-center text-2xl">Sponsor a Program</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sponsorCards.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${s.color}15`, color: s.color }}>{s.icon}</div>
                <h3 className="font-semibold text-navy text-sm mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                <div className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)', color: s.color }}>{s.amount}</div>
                <button className="btn btn-outline-blue w-full text-sm">Sponsor This</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 80G Notice */}
      <section className="py-12 bg-blue-50">
        <div className="container-main">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <Info size={24} className="text-blue-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-semibold text-navy mb-1" style={{ fontFamily: 'var(--font-heading)' }}>80G Tax Benefit</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Donations to RayVision Digital Empowerment Trust are eligible for 80G income tax deduction. Provide your PAN number in the donation form above to receive your certificate via email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
