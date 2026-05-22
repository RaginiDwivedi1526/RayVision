import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Impact from './pages/Impact';
import Gallery from './pages/Gallery';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import CSR from './pages/CSR';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';

const pageTitles = {
  '/': 'Home | RayVision Digital Empowerment Trust',
  '/about': 'About Us | RayVision Digital Empowerment Trust',
  '/programs': 'Our Programs | RayVision Digital Empowerment Trust',
  '/impact': 'Our Impact | RayVision Digital Empowerment Trust',
  '/gallery': 'Gallery | RayVision Digital Empowerment Trust',
  '/volunteer': 'Volunteer | RayVision Digital Empowerment Trust',
  '/donate': 'Donate | RayVision Digital Empowerment Trust',
  '/csr': 'CSR Partnerships | RayVision Digital Empowerment Trust',
  '/contact': 'Contact Us | RayVision Digital Empowerment Trust',
  '/admin': 'Admin Dashboard | RayVision Digital Empowerment Trust',
};

function ScrollToTopAndTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageTitles[pathname] || 'RayVision Digital Empowerment Trust';
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopAndTitle />
      <Toaster position="top-right" toastOptions={{
        duration: 3000,
        style: { fontFamily: 'Inter, sans-serif', fontSize: '14px' },
        success: { style: { background: '#E8F5E9', color: '#1B5E20', border: '1px solid #A5D6A7' } },
        error: { style: { background: '#FFEBEE', color: '#B71C1C', border: '1px solid #EF9A9A' } },
      }} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
