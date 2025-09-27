import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Waves, MapPin, Camera, Star, Clock, Thermometer } from "lucide-react";
import hundruFalls from "@/assets/hundru-falls.jpg";
import dassamFalls from "@/assets/dassam-falls.jpg";
import jonhaFalls from "@/assets/jonha-falls.jpg";

const Waterfalls = () => {
  const waterfalls = [
    {
      id: 1,
      name: "Hundru Falls",
      location: "Ranchi",
      height: "98 meters",
      image: hundruFalls,
      rating: 4.8,
      bestTime: "July - October",
      temperature: "26°C",
      description: "Spectacular 98-meter high waterfall on the Subarnarekha River, offering breathtaking views and photography opportunities.",
      features: ["Photography", "Trekking", "Rock Climbing", "Nature Walk"],
      difficulty: "Moderate"
    },
    {
      id: 2,
      name: "Dassam Falls",
      location: "Ranchi", 
      height: "44 meters",
      image: dassamFalls,
      rating: 4.6,
      bestTime: "August - November",
      temperature: "24°C",
      description: "Beautiful waterfall formed by Kanchi River, surrounded by lush green forests and rocky terrain.",
      features: ["Swimming", "Photography", "Picnic", "Nature Walk"],
      difficulty: "Easy"
    },
    {
      id: 3,
      name: "Jonha Falls",
      location: "Ranchi",
      height: "43 meters", 
      image: jonhaFalls,
      rating: 4.7,
      bestTime: "July - September",
      temperature: "25°C",
      description: "Also known as Gautamdhara, this sacred waterfall is perfect for spiritual retreats and meditation.",
      features: ["Meditation", "Photography", "Spiritual Visit", "Cave Exploration"],
      difficulty: "Easy"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30" id="waterfalls">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Magnificent Waterfalls
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Experience the power and beauty of Jharkhand's cascading waterfalls
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {waterfalls.map((waterfall, index) => (
            <Card 
              key={waterfall.id} 
              className="group interactive-card overflow-hidden bg-card border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={waterfall.image}
                  alt={waterfall.name}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground shadow-nature">
                    <Waves className="h-3 w-3 mr-1" />
                    {waterfall.height}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-white text-sm font-medium">{waterfall.rating}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-foreground">{waterfall.name}</span>
                  <Badge variant="outline" className="text-muted-foreground">
                    {waterfall.difficulty}
                  </Badge>
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{waterfall.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {waterfall.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <div>
                      <div className="text-foreground font-medium">Best Time</div>
                      <div className="text-muted-foreground">{waterfall.bestTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Thermometer className="h-4 w-4 mr-2 text-secondary" />
                    <div>
                      <div className="text-foreground font-medium">Temperature</div>
                      <div className="text-muted-foreground">{waterfall.temperature}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-foreground mb-2">Activities</div>
                  <div className="flex flex-wrap gap-2">
                    {waterfall.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs bg-secondary/20 text-secondary-foreground hover-scale"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground shadow-nature hover-lift"
                    onClick={() => {
                      document.getElementById('interactive-map')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Map
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 hover:bg-secondary hover:text-secondary-foreground hover-scale"
                    onClick={() => {
                      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Waterfalls;