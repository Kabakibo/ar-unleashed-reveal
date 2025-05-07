
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-augify-dark text-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              <span className="text-augify-lime">Terms</span> of Service
            </h1>
            <p className="text-xl text-white/80 mb-10 text-center">
              Please read these terms and conditions carefully before using Augify.
            </p>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Augify, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              
              <h2>2. User Account</h2>
              <p>
                To use certain features of the app, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account information.
              </p>
              
              <h2>3. Privacy Policy</h2>
              <p>
                Your use of Augify is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              
              <h2>4. Content</h2>
              <p>
                Users are solely responsible for the content they create, upload, and share using our platform. You represent and warrant that you have all necessary rights to the content you share.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
