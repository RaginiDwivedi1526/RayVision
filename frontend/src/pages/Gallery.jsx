import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';

const categories = [
  'All',
  'Digital Literacy Workshops',
  'Rural Awareness Camps',
  'Student Training Sessions',
  'Women Empowerment Programs',
  'Community Outreach Initiatives',
];

const allPhotos = [
  { src: '/images/gallery/1.jpg', cat: 'Digital Literacy Workshops', label: 'Basic computer training session' },
  { src: '/images/gallery/2.jpg', cat: 'Digital Literacy Workshops', label: 'Internet awareness workshop' },
  { src: '/images/gallery/3.jpg', cat: 'Digital Literacy Workshops', label: 'Digital payments training' },
  { src: '/images/gallery/4.jpg', cat: 'Rural Awareness Camps', label: 'Village outreach camp' },
  { src: '/images/gallery/5.jpg', cat: 'Rural Awareness Camps', label: 'Cyber safety awareness drive' },
  { src: '/images/gallery/6.jpg', cat: 'Rural Awareness Camps', label: 'Community engagement session' },
  { src: '/images/gallery/1.jpg', cat: 'Student Training Sessions', label: 'Graphic design training' },
  { src: '/images/gallery/2.jpg', cat: 'Student Training Sessions', label: 'AI tools workshop' },
  { src: '/images/gallery/3.jpg', cat: 'Student Training Sessions', label: 'Video editing course' },
  { src: '/images/gallery/4.jpg', cat: 'Women Empowerment Programs', label: 'Women digital literacy class' },
  { src: '/images/gallery/5.jpg', cat: 'Women Empowerment Programs', label: 'Financial literacy workshop' },
  { src: '/images/gallery/6.jpg', cat: 'Women Empowerment Programs', label: 'Entrepreneurship session' },
  { src: '/images/gallery/1.jpg', cat: 'Community Outreach Initiatives', label: 'Smart village initiative' },
  { src: '/images/gallery/2.jpg', cat: 'Community Outreach Initiatives', label: 'Digital Seva Kendra launch' },
  { src: '/images/gallery/3.jpg', cat: 'Community Outreach Initiatives', label: 'Community digital center' },
  { src: '/images/gallery/4.jpg', cat: 'Digital Literacy Workshops', label: 'E-governance awareness' },
  { src: '/images/gallery/5.jpg', cat: 'Student Training Sessions', label: 'Freelancing workshop' },
  { src: '/images/gallery/6.jpg', cat: 'Rural Awareness Camps', label: 'Rural tech camp' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeTab === 'All' ? allPhotos : allPhotos.filter(p => p.cat === activeTab);

  const openLightbox = (i) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
  const nextImage = () => setLightbox((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));

  return (
    <div>
      <HeroBanner title="Our Gallery" subtitle="Moments of transformation, learning, and community empowerment." breadcrumbs={['Home', 'Gallery']} />

      <section className="section-padding bg-white">
        <div className="container-main">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 space-x-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === cat ? 'bg-green-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.div key={photo.src}
                  layout initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => openLightbox(i)}>
                  <img src={photo.src} alt={photo.label} className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-white text-sm font-medium">{photo.label}</span>
                    <span className="text-white/60 text-xs">{photo.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}>
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/80 hover:text-white z-10">
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white/80 hover:text-white z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <ChevronLeft size={24} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white/80 hover:text-white z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <ChevronRight size={24} />
            </button>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
              <img src={filtered[lightbox]?.src} alt={filtered[lightbox]?.label}
                className="w-full max-h-[80vh] object-contain rounded-lg" />
              <div className="text-center mt-4">
                <p className="text-white font-medium">{filtered[lightbox]?.label}</p>
                <p className="text-white/50 text-sm">{lightbox + 1} / {filtered.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
