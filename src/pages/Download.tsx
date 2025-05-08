
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { QrCode, Download as DownloadIcon } from 'lucide-react';

const Download = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Store links
  const googlePlayLink = "https://play.google.com/store/apps/details?id=com.augify.app&pcampaignid=web_share";
  const appleStoreLink = "https://apps.apple.com/us/app/augify/id6741703505";

  // Function to detect mobile devices and open the appropriate store
  const openAppStore = (storeLink: string) => {
    window.open(storeLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-augify-dark text-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-augify-lime">Download</span> Augify
            </h1>
            <p className="text-xl text-white/80">
              Get started with Augify today and transform your reality in seconds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-augify-darkgray/50 backdrop-blur-sm rounded-xl p-8 border border-augify-lime/10 hover:border-augify-lime/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <QrCode className="w-48 h-48 text-augify-lime" />
                <div className="absolute w-48 h-48 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(googlePlayLink)}`}
                      alt="Google Play QR Code"
                      className="w-36 h-36"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Android
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Download Augify for Android devices from the Google Play Store.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => openAppStore(googlePlayLink)}
                  className="bg-augify-lime text-augify-dark font-medium px-6 py-3 rounded-lg inline-flex items-center transition-all hover:shadow-lg hover:shadow-augify-lime/20"
                >
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  <span>Get it on Google Play</span>
                </button>
              </div>
            </div>
            
            <div className="bg-augify-darkgray/50 backdrop-blur-sm rounded-xl p-8 border border-augify-lime/10 hover:border-augify-lime/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <QrCode className="w-48 h-48 text-augify-lime" />
                <div className="absolute w-48 h-48 flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(appleStoreLink)}`}
                      alt="App Store QR Code"
                      className="w-36 h-36"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                iOS
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Download Augify for iOS devices from the App Store.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => openAppStore(appleStoreLink)}
                  className="bg-augify-lime text-augify-dark font-medium px-6 py-3 rounded-lg inline-flex items-center transition-all hover:shadow-lg hover:shadow-augify-lime/20"
                >
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  <span>Get it on App Store</span>
                </button>
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
