import { useState } from "react";
import Hero from "@/components/Hero";
import InteractiveMap from "@/components/InteractiveMap";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import BackgroundElements from "@/components/BackgroundElements";
import Features from "@/pages/Features";
import Waterfalls from "@/pages/Waterfalls";

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <main className="relative">
      <BackgroundElements />
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
{/* Interactive Map Section */}
<section className="py-16 bg-muted/30" id="interactive-map">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
        Discover Amazing Places
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
        Discover famous cities and tourist destinations. Click on any location to learn more
      </p>
    </div>
    <div className="max-w-6xl mx-auto">
      <InteractiveMap />
    </div>
  </div>
</section>

{/* Chatbot Button */}
<div className="fixed bottom-6 right-6 z-50">
  <button 
    onClick={() => setIsChatbotOpen(true)}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
    Chat with us
  </button>
</div>

{/* Chatbot Popup */}
<div 
  className={`fixed right-6 z-50 transition-all duration-300 ${
    isChatbotOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
  }`}
  style={{ 
    width: 'clamp(300px, 90vw, 400px)',
    height: 'clamp(400px, 80vh, 600px)',
    bottom: 'calc(80px + 1.5rem)' // Position above the button with margin
  }}
>
  <div className="h-full flex flex-col bg-white shadow-xl rounded-lg border border-gray-200">
    {/* Header */}
    <div className="flex-shrink-0 flex justify-between items-center px-6 py-4 border-b bg-gray-50 rounded-t-lg">
      <h3 className="text-lg font-medium text-gray-900">Travel Assistant</h3>
      <button 
        onClick={() => setIsChatbotOpen(false)}
        className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    {/* Chatbot iframe */}
    <div className="flex-1 rounded-b-lg overflow-hidden">
      <iframe 
        src="https://vanancha.netlify.app/" 
        className="w-full h-full border-0"
        title="Travel Assistant Chatbot"
        loading="lazy"
        allow="microphone"
      />
    </div>
  </div>
</div>

{/* Overlay */}
{isChatbotOpen && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-50 z-40"
    onClick={() => setIsChatbotOpen(false)}
  />
)}

{/* Features Section */}
<Features />

      {/* Waterfalls Section */}
      <Waterfalls />

      {/* Gallery Section */}
      <Gallery />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Explore Nature</h3>
              <p className="text-primary-foreground/80">
                Discover the natural beauty and cultural heritage through our comprehensive tourism guide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Tourist Destinations</li>
                <li>Waterfall Tours</li>
                <li>Wildlife Sanctuaries</li>
                <li>Cultural Heritage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Visit Amazing Places</h3>
              <p className="text-primary-foreground/80">
                Plan your journey to experience the untamed beauty of forests, waterfalls, and hills in the heart of India.
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Tourism Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
