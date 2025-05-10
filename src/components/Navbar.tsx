import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const isActive = (item: string) => {
    const path = location.pathname;
    return (
      (item === 'Home' && path === '/') ||
      (item !== 'Home' && path === `/${item.toLowerCase()}`)
    );
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-augify-dark/95 py-2 shadow-lg backdrop-blur-sm' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <img 
            src="/lovable-uploads/dd644908-17ab-4a42-b8d2-04136cffb4e6.png" 
            alt="Augify Logo" 
            className="h-10 md:h-14"
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-augify-lime transition-colors z-50" 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Blog', 'Contact', 'Terms', 'Download'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={cn(
                'text-white hover:text-augify-lime transition-colors relative py-1 group',
                isActive(item) && 'text-augify-lime'
              )}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-augify-lime transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50">
            {/* Dimmed overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in full-screen menu panel */}
            <nav
              className={cn(
                'fixed top-0 right-0 h-screen w-2/3 bg-augify-dark z-50 p-8 pt-20 flex flex-col space-y-6 transform transition-transform duration-300 ease-in-out overflow-y-auto',
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              )}
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(17, 17, 17, 0.95), rgba(17, 17, 17, 0.95))',
              }}
            >
              {/* Close X */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              {['Home', 'About', 'Blog', 'Contact', 'Terms', 'Download'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={cn(
                    'text-white hover:text-augify-lime transition-colors text-xl',
                    isActive(item) && 'text-augify-lime'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
