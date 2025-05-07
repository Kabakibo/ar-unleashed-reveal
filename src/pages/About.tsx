
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-augify-dark text-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              About <span className="text-augify-lime">Augify</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 text-center">
              Learn more about our mission to transform reality with augmented reality technology.
            </p>
            
            <div className="prose prose-lg max-w-none prose-invert">
              <p>
                Augify is a revolutionary AR mobile app that allows users to create and share augmented reality experiences with ease. Our mission is to make augmented reality technology accessible to everyone, regardless of technical expertise.
              </p>
              <p>
                Founded in 2023, Augify has quickly become a leader in the AR space, with thousands of users worldwide using our platform to create immersive experiences for entertainment, education, marketing, and more.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
