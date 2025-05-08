
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (phoneRef.current && textRef.current) {
        const scrollPos = window.scrollY;
        phoneRef.current.style.transform = `translateY(${scrollPos * 0.1}px)`;
        textRef.current.style.transform = `translateY(${scrollPos * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-augify-dark pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#c6d614_0%,_transparent_65%)]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div ref={textRef} className="space-y-8 pt-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
              Blow your audience with <span className="text-augify-lime">Augmented Reality</span> in seconds
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              The single best free AR mobile app you will ever have to use! Simply snap a photo, upload a video and voilà!
            </p>
            
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl md:text-2xl text-white font-medium">Are you an early adopter?</p>
              <p className="text-xl md:text-2xl text-augify-lime font-medium">What are you waiting for?</p>
              
              <div className="pt-4">
                <Link 
                  to="/download" 
                  className="inline-block bg-augify-lime text-augify-dark font-bold px-8 py-4 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-augify-lime/30"
                >
                  Download Now
                </Link>
              </div>
            </div>
          </div>
          
          <div ref={phoneRef} className="relative flex justify-center items-center lg:justify-end animate-float">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 bg-augify-lime/50 rounded-xl blur-xl opacity-50 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-augify-dark/90 to-augify-dark rounded-xl p-4 backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/b563fbba-8d9f-49ad-87a8-5392fdb0497b.png" 
                  alt="Augify AR App Screenshot" 
                  className="w-full rounded-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-augify-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
