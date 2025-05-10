
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useOnClickOutside } from '@/hooks/use-click-outside';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle clicking outside the menu to close it
  useOnClickOutside([menuRef, buttonRef], () => {
    if (mobileMenuOpen && isMobile) {
      setMobileMenuOpen(false);
    }
  });

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, isMobile]);

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
        <Link to="/" className="relative z-10">
          <img 
            src="/lovable-uploads/dd644908-17ab-4a42-b8d2-04136cffb4e6.png" 
            alt="Augify Logo" 
            className="h-10 md:h-14"
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          ref={buttonRef}
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

        {/* Mobile Navigation - Full screen overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-augify-dark/98 z-0"
            aria-hidden="true"
          />
        )}
        
        {/* Mobile Navigation Menu */}
        <div 
          ref={menuRef}
          className={cn(
            'fixed top-0 right-0 bottom-0 w-64 transition-transform duration-300 ease-in-out transform p-8 pt-20 z-0',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          style={{ 
            background: 'linear-gradient(to bottom, rgba(34, 34, 34, 0.98), rgba(34, 34, 34, 0.98))'
          }}
        >
          <div className="flex flex-col space-y-6">
            {['Home', 'About', 'Blog', 'Contact', 'Terms', 'Download'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={cn(
                  'text-white hover:text-augify-lime transition-colors text-xl',
                  item === 'Home' && 'text-augify-lime'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
