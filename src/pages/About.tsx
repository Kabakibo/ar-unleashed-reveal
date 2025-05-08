
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
            
            <div className="prose prose-lg max-w-none prose-invert">
              <h2 className="text-3xl font-bold text-augify-lime mb-6">Story of Augify</h2>
              <p className="mb-8">
                It all started with a birthday card...and the rest is history!
              </p>
              
              <h2 className="text-3xl font-bold text-augify-lime mb-6">What does augify mean anyway?</h2>
              <p className="mb-4">
                As I was shopping for a card for my son's 12th birthday, I was looking for a goofy one that would convey my love and admiration for who he had become. However, as much as I enjoyed looking for a card, I felt they all lacked personalization. So I thought it would be fun if I could immortalize this card by adding an augmented reality short selfie video of me telling my son how much I loved him. He could see it now, or 15 years later, for as long as he has this card, the AR experience will remind him of that moment. I told myself, there must be an app for that, right? Well, I was wrong, there isn't one, hence, I thought I had stumbled on a great app idea I could develop. First I needed to be able to describe it...but I quickly realized that there isn't a verb to describe the process of creating an augmented reality experience based on a specific item...and, prophetically, the word just came out of my mouth, I want to AUGIFY this birthday card!
              </p>
              
              <p className="mt-6 p-6 bg-augify-darkgray/50 rounded-lg border border-augify-lime/20">
                <strong>Augify:</strong> [awg-ee-fahy], verb (used with or without object), aug.i.fied, aug.i.fy.ing, to describe the process of creating an augmented reality experience based on a target or marker.<br />
                <em>Example: I want to augify this birthday card.</em>
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
