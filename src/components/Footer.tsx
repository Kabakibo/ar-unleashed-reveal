
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-augify-darkgray py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/dd644908-17ab-4a42-b8d2-04136cffb4e6.png" 
                alt="Augify Logo" 
                className="h-10"
              />
            </Link>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/people/Augify/100089403841519/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-augify-dark/50 text-white hover:bg-augify-lime hover:text-augify-dark transition-colors"
                aria-label="Follow us on Facebook"
              >
                <span className="sr-only">Follow us on Facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/augifyapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-augify-dark/50 text-white hover:bg-augify-lime hover:text-augify-dark transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <span className="sr-only">Follow us on LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/augify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-augify-dark/50 text-white hover:bg-augify-lime hover:text-augify-dark transition-colors"
                aria-label="Follow us on X"
              >
                <span className="sr-only">Follow us on X</span>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/70 hover:text-augify-lime transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/download" className="text-white/70 hover:text-augify-lime transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-augify-lime transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <a href="#help" className="text-white/70 hover:text-augify-lime transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white/70 hover:text-augify-lime transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Augify. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#terms" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
            <a href="#privacy" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
            <a href="#cookies" className="text-white/50 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
