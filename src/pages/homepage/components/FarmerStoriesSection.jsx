import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FarmerStoriesSection = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const farmerStories = [
    {
      id: 1,
      name: "Maria Rodriguez",
      location: "Salinas Valley, California",
      cropType: "Organic Lettuce & Herbs",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face",
      story: `After joining AgriTrace, I've seen a 40% increase in my income. Consumers now know the care I put into growing pesticide-free lettuce, and they're willing to pay for that quality and transparency.`,
      incomeIncrease: "40%",
      yearsExperience: 15,
      certifications: ["USDA Organic", "Fair Trade", "Water Conservation"],
      monthlyScans: 2847,
      rating: 4.9
    },
    {
      id: 2,
      name: "James Thompson",
      location: "Iowa Heartland",
      cropType: "Heritage Corn & Soybeans",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      story: `AgriTrace helped me connect directly with food manufacturers who value heritage varieties. My grandfather's corn seeds are now feeding families across the country, and they know exactly where it comes from.`,
      incomeIncrease: "35%",
      yearsExperience: 22,
      certifications: ["Non-GMO", "Heritage Variety", "Sustainable Farming"],
      monthlyScans: 1923,
      rating: 4.8
    },
    {
      id: 3,
      name: "Priya Patel",
      location: "Punjab, India",
      cropType: "Basmati Rice",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      story: `Through blockchain verification, international buyers now trust the authenticity of my basmati rice. The transparency has opened doors to premium markets I never thought possible for a small farmer like me.`,
      incomeIncrease: "55%",
      yearsExperience: 18,
      certifications: ["Geographical Indication", "Organic", "Export Quality"],
      monthlyScans: 3456,
      rating: 5.0
    },
    {
      id: 4,
      name: "Carlos Mendoza",
      location: "Michoacán, Mexico",
      cropType: "Avocados & Citrus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      story: `The QR codes on my avocados tell the story of three generations of farming. Customers love knowing about our traditional growing methods and sustainable water practices. It's made all the difference.`,
      incomeIncrease: "42%",
      yearsExperience: 28,
      certifications: ["Rainforest Alliance", "Water Steward", "Family Farm"],
      monthlyScans: 2134,
      rating: 4.9
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % farmerStories?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % farmerStories?.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + farmerStories?.length) % farmerStories?.length);
  };

  const currentFarmer = farmerStories?.[currentStory];

  return (
    <section className="bg-gradient-to-br from-muted/30 to-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Farmer Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real farmers sharing how AgriTrace has transformed their connection with consumers and improved their livelihoods
          </p>
        </div>

        <div className="relative">
          {/* Main Story Card */}
          <div className="bg-card rounded-2xl shadow-organic border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <Image
                  src={currentFarmer?.image}
                  alt={`${currentFarmer?.name} - ${currentFarmer?.cropType} farmer`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-primary">+{currentFarmer?.incomeIncrease}</div>
                      <div className="text-xs text-muted-foreground">Income Increase</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-conversion">{currentFarmer?.monthlyScans?.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Monthly Scans</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < Math.floor(currentFarmer?.rating) ? "fill-current" : "opacity-30"} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{currentFarmer?.rating}/5.0</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{currentFarmer?.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span className="text-sm">{currentFarmer?.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Icon name="Wheat" size={16} className="mr-2" />
                    <span className="text-sm">{currentFarmer?.cropType}</span>
                  </div>
                </div>

                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{currentFarmer?.story}"
                </blockquote>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentFarmer?.certifications?.map((cert, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Award" size={16} className="mr-2 text-secondary" />
                  <span>{currentFarmer?.yearsExperience} years of farming experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevStory}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-organic"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>

            {/* Story Indicators */}
            <div className="flex space-x-3">
              {farmerStories?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStory === index 
                      ? 'bg-primary scale-125' :'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors shadow-organic"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>

          {/* Additional Stories Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {farmerStories?.slice(0, 3)?.map((farmer, index) => (
              <div 
                key={farmer?.id}
                className={`bg-card rounded-lg p-6 border border-border cursor-pointer transition-all duration-300 hover:shadow-organic ${
                  currentStory === index ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setCurrentStory(index)}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={farmer?.image}
                    alt={farmer?.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{farmer?.name}</h4>
                    <p className="text-xs text-muted-foreground">{farmer?.cropType}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {farmer?.story?.substring(0, 120)}...
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-primary font-semibold">+{farmer?.incomeIncrease} income</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={12} 
                        className={i < Math.floor(farmer?.rating) ? "fill-current" : "opacity-30"} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerStoriesSection;