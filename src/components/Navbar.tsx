import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

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
          className="md:hidden text-white hover:text-augify-lime transition-colors" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
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
                item === 'Home' && 'text-augify-lime'
              )}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-augify-lime transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Overlay + Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex overflow-hidden touch-none">
            {/* Dimmed background (left 1/3) */}
            <div
              className="w-1/3 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in menu (right 2/3) */}
            <div
              className={cn(
                'w-2/3 h-screen z-50 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col',
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
                'bg-augify-dark' // BRAND COLOR ✅
              )}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-col space-y-6 px-6 overflow-y-auto">
                {['Home', 'About', 'Blog', 'Contact', 'Terms', 'Download'].map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white text-lg hover:text-augify-lime transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
