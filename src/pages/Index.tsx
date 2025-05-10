
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position when component mounts or route changes
    window.scrollTo(0, 0);
    
    // Additional cleanup for any potential mobile menu states
    document.body.style.overflow = '';
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-augify-dark text-white">
      <Navbar />
      <main className="flex flex-col space-y-0">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
