
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-augify-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="w-full h-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-augify-lime/20 via-augify-dark to-augify-dark"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 relative">
            <div className="absolute -inset-1 bg-augify-lime rounded-full blur-md opacity-30 animate-pulse"></div>
            <span className="relative bg-augify-dark text-augify-lime px-6 py-2 rounded-full text-lg font-medium border border-augify-lime/30">
              Ready to transform your reality?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Start creating amazing <span className="text-augify-lime">AR experiences</span> today
          </h2>
          
          <p className="text-xl text-white/80 mb-10">
            Join thousands of users who are already enhancing their world with Augify AR technology. Download now and unlock your creative potential.
          </p>
          
          <Link 
            to="/download" 
            className="inline-block bg-augify-lime text-augify-dark font-bold px-8 py-4 rounded-lg text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-augify-lime/30 group"
          >
            Download Now 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
