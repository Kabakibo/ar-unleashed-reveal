
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-augify-dark text-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-augify-lime">Augify</span> Blog
            </h1>
            <p className="text-xl text-white/80">
              Stay updated with the latest news and tips about augmented reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-augify-darkgray/50 backdrop-blur-sm rounded-xl overflow-hidden border border-augify-lime/10 hover:border-augify-lime/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-augify-dark/50"></div>
                <div className="p-6">
                  <span className="text-augify-lime text-sm">May {i * 2}, 2023</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">
                    The Future of Augmented Reality
                  </h3>
                  <p className="text-white/70 mb-4">
                    Discover how augmented reality is revolutionizing the way we interact with the world around us.
                  </p>
                  <a href="#read-more" className="text-augify-lime hover:underline inline-flex items-center">
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
