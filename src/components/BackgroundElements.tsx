import { useEffect, useState } from 'react';

const BackgroundElements = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Parallax background shapes */}
      <div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute top-1/2 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-2xl"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-xl"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-float opacity-60`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            transform: `translateY(${scrollY * (0.02 + Math.random() * 0.03)}px)`
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundElements;