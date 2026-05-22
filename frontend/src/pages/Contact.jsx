import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send, Loader2 } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '../components/SocialIcons';
import toast from 'react-hot-toast';
import { submitContact } from '../api';
import HeroBanner from '../components/HeroBanner';

const contactInfo = [
  { icon: <MapPin size={22} />, title: 'Our Address', lines: ['RayVision Digital Empowerment Trust', 'India'], color: '#1565C0' },
  { icon: <Phone size={22} />, title: 'Phone Number', lines: ['+91 98765 43210'], href: 'tel:+919876543210', color: '#2E7D32' },
  { icon: <Mail size={22} />, title: 'Email Address', lines: ['info@rayvisiontech.com'], href: 'mailto:info@rayvisiontech.com', color: '#F57C00' },
  { icon: <Globe size={22} />, title: 'Website', lines: ['www.rayvisiontech.com'], href: 'https://www.rayvisiontech.com', color: '#2196F3' },
];

const socials = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook', color: '#1877F2' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram', color: '#E4405F' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn', color: '#0A66C2' },
  { Icon: YoutubeIcon, href: '#', label: 'YouTube', color: '#FF0000' },
];

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setFormData(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(formData);
      toast.success("Thank you! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <HeroBanner title="Contact Us" subtitle="We'd love to hear from you. Reach out and let's connect." breadcrumbs={['Home', 'Contact Us']} />

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left */}
            <motion.div {...f} className="lg:col-span-2">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title text-2xl md:text-3xl mb-8">Let's Connect</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${info.color}15`, color: info.color }}>{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-navy text-sm mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{info.title}</h3>
                      {info.lines.map((l, j) => info.href
                        ? <a key={j} href={info.href} className="text-gray-600 text-sm hover:text-blue-primary transition-colors block">{l}</a>
                        : <p key={j} className="text-gray-600 text-sm">{l}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Follow Us</h3>
                <div className="flex gap-2">
                  {socials.map(({ Icon, href, label, color }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                      style={{ backgroundColor: `${color}15`, color }}><Icon size={18} /></a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div {...f} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="card p-8 md:p-10">
                <h3 className="text-xl font-semibold text-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Send us a Message</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div><label className="form-label">Full Name <span className="required">*</span></label><input type="text" required value={formData.name} onChange={set('name')} className="form-input" placeholder="Your name" /></div>
                  <div><label className="form-label">Email Address <span className="required">*</span></label><input type="email" required value={formData.email} onChange={set('email')} className="form-input" placeholder="your@email.com" /></div>
                  <div><label className="form-label">Phone Number</label><input type="tel" value={formData.phone} onChange={set('phone')} className="form-input" placeholder="+91 XXXXX" /></div>
                  <div><label className="form-label">Subject <span className="required">*</span></label><input type="text" required value={formData.subject} onChange={set('subject')} className="form-input" placeholder="What is this about?" /></div>
                </div>
                <div className="mt-5"><label className="form-label">Message <span className="required">*</span></label><textarea rows={5} required value={formData.message} onChange={set('message')} className="form-input resize-none" placeholder="Write your message here..." /></div>
                <button type="submit" disabled={loading} className="btn btn-green w-full mt-6 text-base">
                  {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[350px] bg-gray-100 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-blue-primary/5 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-blue-primary/10 flex items-center justify-center mx-auto mb-3"><MapPin size={28} className="text-blue-primary" /></div>
            <h3 className="text-base font-semibold text-navy mb-1" style={{ fontFamily: 'var(--font-heading)' }}>RayVision Digital Empowerment Trust</h3>
            <p className="text-gray-500 text-sm">India</p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #1A2B5F 1px, transparent 0)`, backgroundSize: '30px 30px' }} />
      </section>
    </div>
  );
}
