
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
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Navigation links configuration
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Terms', path: '/terms' },
    { name: 'Download', path: '/download' },
  ];

  // Close mobile menu when navigating
  const handleNavigation = () => {
    setMobileMenuOpen(false);
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
        <Link to="/" className="relative z-50">
          <img 
            src="/lovable-uploads/dd644908-17ab-4a42-b8d2-04136cffb4e6.png" 
            alt="Augify Logo" 
            className="h-10 md:h-14"
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          ref={buttonRef}
          className="md:hidden text-white hover:text-augify-lime transition-colors z-50" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'text-white hover:text-augify-lime transition-colors relative py-1 group',
                window.location.pathname === item.path && 'text-augify-lime'
              )}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-augify-lime transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation - Overlay with fixed positioning */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-augify-dark/98 z-40 md:hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-4">
              <Link to="/" onClick={handleNavigation}>
                <img 
                  src="/lovable-uploads/dd644908-17ab-4a42-b8d2-04136cffb4e6.png" 
                  alt="Augify Logo" 
                  className="h-10"
                />
              </Link>
              {/* Close button is already defined above in the header */}
            </div>
            
            <div className="flex flex-col items-center justify-center flex-grow">
              <div 
                ref={menuRef}
                className="w-full px-8 py-8 flex flex-col space-y-8 items-center"
              >
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      'text-white text-2xl hover:text-augify-lime transition-colors',
                      window.location.pathname === item.path && 'text-augify-lime'
                    )}
                    onClick={handleNavigation}
                  >
                    {item.name}
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
