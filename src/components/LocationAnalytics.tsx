import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Camera, TrendingUp, MapPin, Clock, Thermometer } from "lucide-react";

interface LocationAnalyticsProps {
  locationId: string;
  locationName: string;
}

const LocationAnalytics = ({ locationId, locationName }: LocationAnalyticsProps) => {
  // Mock analytics data - in real app this would come from API
  const getAnalyticsData = (id: string) => {
    const mockData: Record<string, any> = {
      'ranchi': {
        visitors: '2.5M',
        rating: 4.6,
        photos: '15K+',
        trend: '+15%',
        bestTime: 'Oct-Mar',
        popularity: 'Very High',
        attractions: ['Rock Garden', 'Tagore Hill', 'Kanke Dam', 'Ranchi Lake', 'Hundru Falls'],
        weather: '24°C',
        category: 'Capital City',
      },
      'jamshedpur': {
        visitors: '1.8M',
        rating: 4.5,
        photos: '12K+',
        trend: '+18%',
        bestTime: 'Nov-Feb',
        popularity: 'Very High',
        attractions: ['Jubilee Park', 'Dimna Lake', 'Dalma Sanctuary', 'Tata Steel Zoo'],
        weather: '26°C',
        category: 'Steel City',
      },
      'dhanbad': {
        visitors: '1.2M',
        rating: 4.3,
        photos: '7K+',
        trend: '+10%',
        bestTime: 'Oct-Mar',
        popularity: 'High',
        attractions: ['Maithon Dam', 'Topchanchi Lake', 'Panchet Dam', 'Bhatinda Falls'],
        weather: '28°C',
        category: 'Coal Capital',
      },
      'hazaribagh': {
        visitors: '800K',
        rating: 4.7,
        photos: '6K+',
        trend: '+20%',
        bestTime: 'Nov-Mar',
        popularity: 'Medium',
        attractions: ['Hazaribagh National Park', 'Canary Hill', 'Konar Dam', 'Rajrappa Temple'],
        weather: '22°C',
        category: 'Wildlife Haven',
      },
      'deoghar': {
        visitors: '3.2M',
        rating: 4.8,
        photos: '20K+',
        trend: '+25%',
        bestTime: 'All Year',
        popularity: 'Very High',
        attractions: ['Baidyanath Temple', 'Nandan Pahar', 'Tapovan', 'Satsang Ashram'],
        weather: '25°C',
        category: 'Spiritual Capital',
      },
      'gaya': {
        visitors: '2.1M',
        rating: 4.7,
        photos: '14K+',
        trend: '+16%',
        bestTime: 'Oct-Mar',
        popularity: 'High',
        attractions: ['Mahabodhi Temple', 'Bodhi Tree', 'Vishnupad Temple', 'Ancient Monasteries'],
        weather: '27°C',
        category: 'Sacred Heritage',
      },
      'hundru-falls': {
        visitors: '800K',
        rating: 4.8,
        photos: '9K+',
        trend: '+22%',
        bestTime: 'Jul-Oct',
        popularity: 'High',
        attractions: ['Waterfall Viewing', 'Rock Climbing', 'Swimming', 'Photography'],
        weather: '26°C',
        category: 'Natural Wonder',
      },
      'netarhat': {
        visitors: '600K',
        rating: 4.7,
        photos: '7K+',
        trend: '+18%',
        bestTime: 'Nov-Feb',
        popularity: 'High',
        attractions: ['Sunrise Point', 'Magnolia Point', 'Pine Forests', 'Hill Trekking'],
        weather: '18°C',
        category: 'Queen of Hills',
      },
      'betla-national-park': {
        visitors: '400K',
        rating: 4.6,
        photos: '5K+',
        trend: '+15%',
        bestTime: 'Nov-Jun',
        popularity: 'Medium',
        attractions: ['Tiger Safari', 'Elephant Rides', 'Bird Watching', 'Ancient Forts'],
        weather: '24°C',
        category: 'Wildlife Kingdom',
      },
      'rourkela': {
        visitors: '900K',
        rating: 4.4,
        photos: '6K+',
        trend: '+12%',
        bestTime: 'Oct-Mar',
        popularity: 'Medium',
        attractions: ['Hanuman Vatika', 'Vedvyas Temple', 'Mandira Dam', 'Steel Plant'],
        weather: '26°C',
        category: 'Industrial Spirit',
      },
      'default': {
        visitors: 'N/A',
        rating: 'N/A',
        photos: 'N/A',
        trend: 'N/A',
        bestTime: 'N/A',
        popularity: 'N/A',
        attractions: [],
        weather: 'N/A',
        category: 'N/A',
      }
    };

    return mockData[id] || mockData['default'];
  };

  const data = getAnalyticsData(locationId);

  return (
    <div className="space-y-4">
      <Card className="glass shadow-glow animate-fade-in">
        <CardHeader className="pb-3">
          <CardTitle className="text-primary-foreground flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Tourism Analytics - {locationName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-4 w-4 text-primary-foreground mr-1" />
              </div>
              <div className="text-sm text-primary-foreground/80">Annual Visitors</div>
              <div className="text-lg font-bold text-primary-foreground">{data.visitors}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
              </div>
              <div className="text-sm text-primary-foreground/80">Rating</div>
              <div className="text-lg font-bold text-primary-foreground">{data.rating}/5</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Camera className="h-4 w-4 text-primary-foreground mr-1" />
              </div>
              <div className="text-sm text-primary-foreground/80">Photos Shared</div>
              <div className="text-lg font-bold text-primary-foreground">{data.photos}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
              </div>
              <div className="text-sm text-primary-foreground/80">Growth</div>
              <div className="text-lg font-bold text-green-400">{data.trend}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-primary-foreground mr-2" />
                <span className="text-sm text-primary-foreground/80">Best Time to Visit</span>
              </div>
              <Badge variant="secondary" className="bg-secondary/20 text-primary-foreground">
                {data.bestTime}
              </Badge>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-primary-foreground mr-2" />
                <span className="text-sm text-primary-foreground/80">Category</span>
              </div>
              <Badge variant="outline" className="text-primary-foreground border-primary-foreground/30">
                {data.category}
              </Badge>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <Thermometer className="h-4 w-4 text-primary-foreground mr-2" />
                <span className="text-sm text-primary-foreground/80">Current Weather</span>
              </div>
              <div className="text-primary-foreground font-medium">{data.weather}</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm text-primary-foreground/80 mb-2">Popular Activities</div>
            <div className="flex flex-wrap gap-2">
              {data.attractions.map((attraction: string, index: number) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-primary-foreground border-primary/30 bg-primary/10"
                >
                  {attraction}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationAnalytics;