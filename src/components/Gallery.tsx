import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Mountain, Camera, TreePine, X, ChevronLeft, ChevronRight, Church, Waves } from "lucide-react";

import hundruFalls from "@/assets/hundru-falls.jpg";
import jonhaFalls from "@/assets/jonha-falls.jpg";
import netarhatSunrise from "@/assets/netarhat-sunrise.jpg";
import rockGarden from "@/assets/rock-garden.jpg";
import betlaNationalPark from "@/assets/betla-national-park.jpg";
import dassamFalls from "@/assets/dassam-falls.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Places', icon: Camera },
    { id: 'temples', name: 'Temples', icon: Church },
    { id: 'waterfalls', name: 'Waterfalls', icon: Waves },
    { id: 'hills', name: 'Hill Stations', icon: Mountain },
    { id: 'others', name: 'Others', icon: TreePine }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Hundru Falls",
      location: "Ranchi",
      image: hundruFalls,
      icon: Waves,
      category: "waterfalls",
      description: "98-meter high spectacular waterfall creating one of the highest water falls in the state",
    },
    {
      id: 2,
      title: "Jonha Falls",
      location: "Ranchi",
      image: jonhaFalls,
      icon: Waves,
      category: "waterfalls",
      description: "Beautiful waterfall surrounded by dense forests and cave formations",
    },
    {
      id: 3,
      title: "Netarhat Sunrise",
      location: "Netarhat",
      image: netarhatSunrise,
      icon: Mountain,
      category: "hills",
      description: "Queen of Chotanagpur plateau offering breathtaking sunrise views",
    },
    {
      id: 4,
      title: "Rock Garden",
      location: "Ranchi",
      image: rockGarden,
      icon: TreePine,
      category: "others",
      description: "Beautiful landscaped gardens with decorative rock formations and sculptures",
    },
    {
      id: 5,
      title: "Betla National Park",
      location: "Palamu",
      image: betlaNationalPark,
      icon: TreePine,
      category: "others",
      description: "Dense forest reserve home to tigers, elephants, and diverse wildlife",
    },
    {
      id: 6,
      title: "Dassam Falls",
      location: "Taimara",
      image: dassamFalls,
      icon: Waves,
      category: "waterfalls",
      description: "Powerful waterfall with multiple streams creating misty rainbow effects",
    },
    {
      id: 7,
      title: "Baidyanath Temple",
      location: "Deoghar",
      image: hundruFalls, // Placeholder - replace with temple image
      icon: Church,
      category: "temples",
      description: "One of the twelve Jyotirlingas, sacred pilgrimage site"
    },
    {
      id: 8,
      title: "Rajrappa Temple",
      location: "Ramgarh",
      image: netarhatSunrise, // Placeholder - replace with temple image
      icon: Church,
      category: "temples",
      description: "Temple dedicated to Goddess Chinnamasta at river confluence"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Photo Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Experience the breathtaking beauty of Jharkhand through our curated collection of stunning destinations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`hover-lift transition-smooth animate-scale-pulse ${
                  isActive 
                    ? 'bg-gradient-nature text-primary-foreground shadow-nature' 
                    : 'hover:bg-gradient-waterfall hover:text-primary-foreground border-primary/20'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
                {isActive && <span className="ml-2 text-xs bg-primary-foreground/20 px-2 py-0.5 rounded-full">
                  {filteredItems.length}
                </span>}
              </Button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className="group interactive-card cursor-pointer overflow-hidden bg-card border-border/50"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <Camera className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">View Details</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <Badge variant="outline" className="text-xs border-primary/30">
                      <Icon className="h-3 w-3 mr-1" />
                      {item.location}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <Badge 
                      variant="secondary" 
                      className="capitalize bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {item.category.replace('_', ' ')}
                    </Badge>
                    <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      Click to view
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {filteredItems
                .filter((item) => item.id === selectedImage)
                .map((item) => (
                  <div key={item.id} className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    />
                    
                    {/* Image info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                      <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 mb-2">{item.description}</p>
                      <div className="flex items-center text-white/60">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Close button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(null);
                      }}
                      className="absolute top-4 right-4 text-white hover:text-primary hover-scale bg-black/20 backdrop-blur-sm"
                    >
                      <X className="h-5 w-5" />
                    </Button>

                    {/* Navigation buttons */}
                    <Button
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
                        const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
                        setSelectedImage(filteredItems[prevIndex].id);
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary bg-black/20 backdrop-blur-sm hover-scale"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
                        const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
                        setSelectedImage(filteredItems[nextIndex].id);
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary bg-black/20 backdrop-blur-sm hover-scale"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;