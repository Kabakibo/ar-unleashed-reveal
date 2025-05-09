
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone } from 'lucide-react';

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
              <div className="absolute -inset-0.5 bg-augify-lime/50 rounded-[40px] blur-xl opacity-50 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-br from-augify-dark/90 to-augify-dark rounded-[40px] p-3 backdrop-blur-sm border border-augify-lime/20">
                {/* Smartphone frame with app screenshot */}
                <div className="relative rounded-[32px] overflow-hidden border-8 border-black bg-black">
                  {/* Top notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>
                  
                  <div className="pt-5 pb-8 px-1">
                    {/* App screenshot */}
                    <div className="relative">
                      {/* App UI elements */}
                      <div className="bg-augify-dark rounded-xl overflow-hidden">
                        {/* AR View */}
                        <div className="relative aspect-[9/16] overflow-hidden">
                          {/* Background image representing AR view */}
                          <div className="absolute inset-0 bg-gradient-to-b from-augify-darkgray to-augify-dark"></div>
                          
                          {/* AR elements */}
                          <div className="absolute inset-0">
                            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-24 h-24 rounded-full bg-augify-lime/20 flex items-center justify-center animate-pulse">
                                <Smartphone className="w-12 h-12 text-augify-lime" />
                              </div>
                            </div>
                            
                            <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                              <div className="px-5 py-2 bg-augify-lime/90 rounded-full text-augify-dark font-bold text-sm">
                                AR Active
                              </div>
                            </div>
                            
                            {/* AR grid lines */}
                            <div className="absolute inset-0">
                              <div className="w-full h-full grid grid-cols-6 grid-rows-12 gap-0.5 opacity-20">
                                {Array(72).fill(0).map((_, i) => (
                                  <div key={i} className="border border-augify-lime/30"></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* App controls at bottom */}
                        <div className="px-4 py-3 flex justify-between items-center">
                          <div className="w-10 h-10 rounded-full bg-augify-lime/20 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-augify-lime/80"></div>
                          </div>
                          <div className="w-14 h-14 rounded-full bg-augify-lime flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full border-2 border-augify-dark"></div>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-augify-lime/20 flex items-center justify-center">
                            <div className="w-5 h-5 text-augify-lime">AR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home button/indicator */}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-500 rounded-full"></div>
                </div>
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
