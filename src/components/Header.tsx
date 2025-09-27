import { Button } from "@/components/ui/button";
import { MapPin, Camera, Compass, Waves } from "lucide-react";

const Header = () => {
  const navigationItems = [
    { name: "Destinations", icon: MapPin, id: "interactive-map" },
    { name: "Gallery", icon: Camera, id: "gallery" },
    { name: "Features", icon: Compass, id: "features" },
    { name: "Waterfalls", icon: Waves, id: "waterfalls" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-4xl font-semibold text-black font-serif tracking-tight drop-shadow-lg animate-pulse">
            Vananchal
          </span>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="text-foreground hover:text-primary transition-smooth hover-lift animate-scale-pulse relative group bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 border border-primary/20"
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Icon className="h-4 w-4 mr-2 group-hover:animate-bounce-soft" />
                  {item.name}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md -z-10"></div>
                </Button>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button 
              variant="default"
              size="sm"
              className="bg-gradient-nature hover:bg-gradient-waterfall text-primary-foreground shadow-nature hover-lift animate-pulse-glow"
              onClick={() => {
                document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Compass className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;