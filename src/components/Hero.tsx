import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Compass } from "lucide-react";
import heroImage from "@/assets/jharkhand-hero.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax effect */}
      <div 
        className="absolute inset-0 scale-110 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px) scale(1.1)`
        }}
      >
        <img
          src={heroImage}
          alt="Jharkhand Natural Beauty" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Animated background elements with mouse interaction */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float hover-pulse"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)`,
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-bounce-soft hover-scale"
          style={{ 
            transform: `translate(-${mousePosition.x * 0.3}px, ${mousePosition.y * 0.5}px)`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-20 w-8 h-8 bg-accent/30 rounded-full animate-scale-pulse hover-rotate"
          style={{ 
            transform: `translate(${mousePosition.x * 0.4}px, -${mousePosition.y * 0.2}px)`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute top-60 left-1/2 w-3 h-3 bg-primary/40 rounded-full animate-wiggle"
          style={{ 
            transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.4}px)`,
            animationDelay: '0.5s'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover
            <span className="block text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
              Jharkhand
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore the untamed beauty of waterfalls, lush forests, and majestic hills in the heart of India
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-nature hover-lift px-8 py-4 text-lg font-semibold"
              onClick={() => {
                document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Compass className="h-5 w-5 mr-2" />
              Start Exploring
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-glow px-8 py-4 text-lg"
              onClick={() => {
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Camera className="h-5 w-5 mr-2" />
              View Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80">Tourist Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">15+</div>
              <div className="text-primary-foreground/80">Magnificent Waterfalls</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">8</div>
              <div className="text-primary-foreground/80">National Parks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;