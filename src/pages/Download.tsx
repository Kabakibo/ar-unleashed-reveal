
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Download = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-augify-dark text-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-augify-lime">Download</span> Augify AR
            </h1>
            <p className="text-xl text-white/80">
              Get started with Augify AR today and transform your reality in seconds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-augify-darkgray/50 backdrop-blur-sm rounded-xl p-8 border border-augify-lime/10 hover:border-augify-lime/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-augify-lime">
                  <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                  <path d="m12 19-2 3" />
                  <path d="m12 19 2 3" />
                  <path d="m12 5-2-3" />
                  <path d="m12 5 2-3" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Android
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Download Augify AR for Android devices from the Google Play Store.
              </p>
              <div className="flex justify-center">
                <a 
                  href="#download-android" 
                  className="bg-augify-lime text-augify-dark font-medium px-6 py-3 rounded-lg inline-flex items-center transition-all hover:shadow-lg hover:shadow-augify-lime/20"
                >
                  <span>Get it on Google Play</span>
                </a>
              </div>
            </div>
            
            <div className="bg-augify-darkgray/50 backdrop-blur-sm rounded-xl p-8 border border-augify-lime/10 hover:border-augify-lime/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-augify-lime">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                iOS
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Download Augify AR for iOS devices from the App Store.
              </p>
              <div className="flex justify-center">
                <a 
                  href="#download-ios" 
                  className="bg-augify-lime text-augify-dark font-medium px-6 py-3 rounded-lg inline-flex items-center transition-all hover:shadow-lg hover:shadow-augify-lime/20"
                >
                  <span>Get it on App Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Download;
