
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: "Advertise",
    description: "Capture the attention of your desired audience with immersive virtual content.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  },
  {
    title: "Inform",
    description: "Convey messages through means beyond the limitations of language.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Engage",
    description: "Engage with users, understand their interests, and get valuable feedback.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    title: "Entertain",
    description: "Bring a smile to your loved ones and audience with fun AR experiences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const featuresVisible = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !featuresVisible.current) {
          featuresVisible.current = true;
          
          if (featuresRef.current) {
            const features = featuresRef.current.querySelectorAll('.feature-card');
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.classList.add('opacity-100', 'translate-y-0');
                feature.classList.remove('opacity-0', 'translate-y-8');
              }, index * 150);
            });
          }
        }
      },
      { threshold: 0.3 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-augify-dark to-augify-darkgray relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="augify-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#c6d614" stopOpacity="1" />
                <stop offset="100%" stopColor="#c6d614" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="0" cy="0" r="30" fill="url(#augify-glow)">
              <animateMotion path="M10,50 Q25,25 50,50 T90,50" dur="15s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="100" r="20" fill="url(#augify-glow)">
              <animateMotion path="M90,50 Q75,25 50,50 T10,50" dur="20s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            <span className="text-stroke text-transparent">Transform</span> <span className="text-augify-lime">Your Reality</span>
          </h2>
          <p className="text-lg text-white/80">With Augify AR, you can unleash the power of augmented reality in seconds and create immersive experiences like never before.</p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="feature-card bg-augify-darkgray/50 backdrop-blur-sm p-6 rounded-xl border border-augify-lime/10 hover:border-augify-lime/30 transition-all duration-500 group opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon text-augify-lime mb-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
