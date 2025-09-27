import { useState } from "react";
import { MapPin, Mountain, Camera, TreePine, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LocationAnalytics from "./LocationAnalytics";

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    {
      "id": "ranchi",
      "name": "Ranchi", 
      "type": "Capital City",
      "icon": MapPin,
      "position": { "top": "58%", "left": "42%" },
      "description": "Welcome to Ranchi - Jharkhand's vibrant capital nestled amidst rolling hills and cascading waterfalls! 🌄 Often called the 'City of Waterfalls,' Ranchi offers a perfect blend of urban sophistication and natural splendor. Experience the cool climate, explore ancient tribal heritage, and witness stunning landscapes that make this city a hidden gem of Eastern India.",
      "attractions": ["Rock Garden", "Tagore Hill", "Kanke Dam", "Ranchi Lake", "Hundru Falls", "Jonha Falls"]
    },
    {
      "id": "jamshedpur",
      "name": "Jamshedpur",
      "type": "Steel City", 
      "icon": MapPin,
      "position": { "top": "72%", "left": "62%" },
      "description": "Discover Jamshedpur - India's first planned steel city that beautifully blends industry with nature! 🏭🌳 Founded by Jamsetji Tata, this green city boasts wide tree-lined avenues, pristine parks, and innovative urban planning. Experience the unique charm where roaring factories coexist with tranquil lakes and lush green spaces.",
      "attractions": ["Jubilee Park", "Tata Steel Zoological Park", "Dimna Lake", "Dalma Wildlife Sanctuary", "Tata Steel Works", "Riverside Park"]
    },
    {
      "id": "dhanbad",
      "name": "Dhanbad",
      "type": "Coal Capital", 
      "icon": MapPin,
      "position": { "top": "38%", "left": "68%" },
      "description": "Explore Dhanbad - the coal capital of India where energy meets adventure! ⛏️💎 This bustling city powers the nation while offering surprising natural beauty. From engineering marvels at coal mines to serene dam sites, Dhanbad presents a fascinating contrast of industrial might and scenic landscapes waiting to be discovered.",
      "attractions": ["Maithon Dam", "Topchanchi Lake", "Bhatinda Falls", "Jharia Coal Fields", "Panchet Dam", "Birsa Munda Park"]
    },
    {
      "id": "hazaribagh",
      "name": "Hazaribagh",
      "type": "Nature Retreat", 
      "icon": MapPin,
      "position": { "top": "32%", "left": "45%" },
      "description": "Escape to Hazaribagh - where 'thousand gardens' meet wilderness adventures! 🦌🌿 Nestled in the heart of Jharkhand, this picturesque town is your gateway to wildlife encounters and tranquil landscapes. Home to one of India's oldest national parks, Hazaribagh offers pristine forests, ancient temples, and breathtaking viewpoints.",
      "attractions": ["Hazaribagh National Park", "Canary Hill", "Konar Dam", "Rajrappa Temple", "Surya Temple", "Hazaribagh Lake"]
    },
    {
      "id": "deoghar",
      "name": "Deoghar", 
      "type": "Spiritual Haven",
      "icon": MapPin,
      "position": { "top": "25%", "left": "55%" },
      "description": "Experience divine bliss at Deoghar - Jharkhand's spiritual capital! 🛕✨ Home to one of the twelve Jyotirlingas, this sacred city attracts millions of devotees seeking blessings at Baba Baidyanath Temple. Feel the spiritual energy, witness ancient rituals, and immerse yourself in religious traditions that date back centuries.",
      "attractions": ["Baidyanath Jyotirlinga", "Nandan Pahar", "Tapovan", "Satsang Ashram", "Triyuginarayan Temple", "Shivaganga"]
    },
    {
      "id": "gaya",
      "name": "Gaya",
      "type": "Sacred Crossroads", 
      "icon": MapPin,
      "position": { "top": "22%", "left": "35%" },
      "description": "Step into enlightenment at Gaya - where Buddhism meets ancient history! ☸️📿 Just across the Jharkhand border, this sacred city is where Lord Buddha attained enlightenment. Explore world heritage sites, meditate under the Bodhi Tree, and feel the spiritual aura that has attracted seekers for over 2,500 years.",
      "attractions": ["Mahabodhi Temple", "Bodhi Tree", "Great Buddha Statue", "Ancient monasteries", "Vishnupad Temple", "Barabar Caves"]
    },
    {
      "id": "hundru-falls",
      "name": "Hundru Falls",
      "type": "Natural Wonder", 
      "icon": Mountain,
      "position": { "top": "62%", "left": "48%" },
      "description": "Witness nature's power at Hundru Falls - Jharkhand's majestic 98-meter waterfall! 💦🌈 Where the Subarnarekha River plunges dramatically over rugged cliffs, creating a spectacular curtain of water. Feel the mist on your face, hear the thunderous roar, and capture unforgettable moments at one of India's most picturesque waterfalls.",
      "attractions": ["Waterfall viewing", "Photography spots", "Rock climbing", "Swimming pools", "Picnic areas", "Nature trails"]
    },
    {
      "id": "netarhat",
      "name": "Netarhat", 
      "type": "Queen of Hills",
      "icon": TreePine,
      "position": { "top": "68%", "left": "28%" },
      "description": "Discover Netarhat - Jharkhand's best-kept secret hill station! 🏔️🌅 Perched at 3,700 feet, this 'Queen of Chotanagpur' offers breathtaking sunrise views, pine-scented air, and tranquil landscapes. Escape the heat and unwind in this peaceful retreat where every viewpoint tells a story of natural beauty.",
      "attractions": ["Sunrise Point", "Magnolia Point", "Lower Ghaghri Falls", "Netarhat Dam", "Pine Forests", "Sunset Point"]
    },
    {
      "id": "betla-national-park",
      "name": "Betla National Park",
      "type": "Wildlife Kingdom", 
      "icon": TreePine,
      "position": { "top": "75%", "left": "25%" },
      "description": "Enter the wild kingdom of Betla - Jharkhand's premier tiger territory! 🐯🌿 Established in 1974, this national park offers thrilling safaris through dense forests where tigers, elephants, and leopards roam free. Experience the raw beauty of nature, ancient ruins, and diverse ecosystems in this wildlife enthusiast's paradise.",
      "attractions": ["Tiger Safari", "Elephant Rides", "Bird Watching", "Palamau Fort", "Betla Fort", "Lodh Falls"]
    },
    {
      "id": "rourkela",
      "name": "Rourkela",
      "type": "Steel & Spirit", 
      "icon": MapPin,
      "position": { "top": "82%", "left": "38%" },
      "description": "Explore Rourkela - where steel strength meets cultural richness! 🏗️🎭 This industrial hub on the banks of Brahmani River combines modern infrastructure with traditional Odisha-Jharkhand culture. From massive steel plants to serene temples, Rourkela offers a unique blend of industrial marvels and spiritual tranquility.",
      "attractions": ["Hanuman Vatika", "Vedvyas Temple", "Indira Gandhi Park", "Mandira Dam", "Nehru Traffic Park", "Rourkela Steel Plant"]
    }
  ];

  return (
    <div className="relative w-full h-[600px] bg-gradient-forest rounded-xl overflow-hidden shadow-nature">
      {/* Map Background with actual Jharkhand map image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url('/src/assets/jharkhand-real-map.png')`,
            filter: 'brightness(0.8) contrast(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-75"></div>
      </div>

      {/* Location markers */}
      {locations.map((location) => {
        const Icon = location.icon;
        return (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ top: location.position.top, left: location.position.left }}
            onClick={() => setSelectedLocation(location.id)}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-waterfall hover-lift animate-pulse-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="absolute top-0 left-0 w-12 h-12 bg-primary/30 rounded-full animate-ping"></div>
            </div>
          </div>
        );
      })}
    {/* Enhanced Location details popup with analytics */}
    {selectedLocation && (
      <div className="absolute bottom-6 left-6 right-6 max-h-[70vh] overflow-y-auto animate-fade-in">
        {locations
          .filter((loc) => loc.id === selectedLocation)
          .map((location) => (
            <div key={location.id} className="space-y-4">
              <Card className="glass shadow-glow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-primary-foreground flex items-center">
                      <location.icon className="h-5 w-5 mr-2" />
                      {location.name}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedLocation(null)}
                      className="text-primary-foreground hover:text-primary hover-scale bg-black/20 backdrop-blur-sm"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <CardDescription className="text-primary-foreground/80">
                    {location.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Location Information Section */}
                  <div className="mb-6">
                    <h4 className="text-primary-foreground font-medium mb-3 text-lg">Location Details</h4>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      {location.description}
                    </p>
                  </div>

                  {/* Key Attractions */}
                  <div className="mb-6">
                    <h4 className="text-primary-foreground font-medium mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.attractions.map((attraction, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-primary/20 text-primary-foreground text-sm rounded-lg hover-scale cursor-pointer transition-all duration-200"
                        >
                          {attraction}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics Dashboard */}
              <LocationAnalytics 
                locationId={location.id} 
                locationName={location.name}
              />
            </div>
          ))}
      </div>
    )}

      {/* Map legend */}
      <div className="absolute top-4 right-4">
        <Card className="glass">
          <CardContent className="p-3">
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-primary-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Cities
              </div>
              <div className="flex items-center text-primary-foreground">
                <Mountain className="h-4 w-4 mr-2" />
                Waterfalls
              </div>
              <div className="flex items-center text-primary-foreground">
                <TreePine className="h-4 w-4 mr-2" />
                Parks & Hill Stations
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;