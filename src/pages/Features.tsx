import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Camera, TrendingUp, Compass, Waves, Mountain, TreePine, Star, LucideProps } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Interactive Map",
      description: "Explore Jharkhand with our interactive map featuring detailed location information and real-time analytics.",
      color: "text-primary",
      onClick: () => {
        document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Camera,
      title: "Photo Gallery",
      description: "Browse through categorized galleries of temples, waterfalls, hill stations, and other attractions.",
      color: "text-secondary",
      onClick: () => {
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: TrendingUp,
      title: "Tourism Analytics",
      description: "Get insights on visitor statistics, ratings, best times to visit, and trending destinations.",
      color: "text-accent",
      onClick: () => {
        document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Compass,
      title: "Smart Navigation",
      description: "Find the best routes and navigation assistance to reach your desired destinations.",
      color: "text-primary",
      onClick: () => {
        window.open('https://maps.google.com/maps?q=Jharkhand', '_blank');
      }
    },
    {
      icon: Waves,
      title: "Waterfall Guide",
      description: "Comprehensive guide to Jharkhand's spectacular waterfalls with seasonal information.",
      color: "text-secondary",
      onClick: () => {
        document.getElementById('waterfalls')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Mountain,
      title: "Hill Station Explorer",
      description: "Discover serene hill stations perfect for sunrise views and peaceful retreats.",
      color: "text-accent",
      onClick: () => {
        document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: TreePine,
      title: "Wildlife Sanctuaries",
      description: "Explore national parks and wildlife sanctuaries with detailed information about flora and fauna.",
      color: "text-primary",
      onClick: () => {
        document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: Star,
      title: "Top Rated Destinations",
      description: "Find the most popular and highly rated tourist destinations based on visitor reviews.",
      color: "text-secondary",
      onClick: () => {
        document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  return (
    <section className="py-16 bg-muted/30" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Explore Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Discover everything Jharkhand has to offer with our comprehensive tourism platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group interactive-card bg-card hover:bg-card/80 border border-border/50 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={feature.onClick}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-nature flex items-center justify-center mb-4 animate-pulse-glow`}>
                    <Icon className={`h-8 w-8 text-primary-foreground`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;