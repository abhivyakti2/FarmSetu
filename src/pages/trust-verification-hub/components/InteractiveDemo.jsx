import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedProduce, setSelectedProduce] = useState('tomatoes');

  const produceOptions = {
    tomatoes: {
      name: "Organic Cherry Tomatoes",
      farmer: "Maria Rodriguez",
      farm: "Sunshine Valley Farm",
      location: "Fresno, CA",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop&crop=center",
      harvestDate: "2025-01-08",
      certifications: ["USDA Organic", "Fair Trade"],
      journey: [
        { stage: "Farm", date: "2025-01-08", location: "Sunshine Valley Farm, CA", status: "Harvested" },
        { stage: "Processing", date: "2025-01-08", location: "Valley Fresh Processing, CA", status: "Cleaned & Packed" },
        { stage: "Distribution", date: "2025-01-09", location: "FreshLink Distribution, CA", status: "Quality Checked" },
        { stage: "Retail", date: "2025-01-10", location: "Green Grocer Market, CA", status: "Available for Sale" }
      ]
    },
    apples: {
      name: "Honeycrisp Apples",
      farmer: "James Chen",
      farm: "Mountain View Orchards",
      location: "Yakima, WA",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop&crop=center",
      harvestDate: "2025-01-05",
      certifications: ["USDA Organic", "IPM Certified"],
      journey: [
        { stage: "Farm", date: "2025-01-05", location: "Mountain View Orchards, WA", status: "Harvested" },
        { stage: "Storage", date: "2025-01-05", location: "Cold Storage Facility, WA", status: "Temperature Controlled" },
        { stage: "Distribution", date: "2025-01-07", location: "Northwest Distributors, WA", status: "Quality Inspected" },
        { stage: "Retail", date: "2025-01-09", location: "Fresh Market Store, WA", status: "Ready for Purchase" }
      ]
    },
    lettuce: {
      name: "Organic Butter Lettuce",
      farmer: "Sarah Thompson",
      farm: "Green Leaf Gardens",
      location: "Salinas, CA",
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop&crop=center",
      harvestDate: "2025-01-09",
      certifications: ["USDA Organic", "Good Agricultural Practices"],
      journey: [
        { stage: "Farm", date: "2025-01-09", location: "Green Leaf Gardens, CA", status: "Fresh Harvested" },
        { stage: "Processing", date: "2025-01-09", location: "Fresh Cut Processing, CA", status: "Washed & Packaged" },
        { stage: "Cold Chain", date: "2025-01-09", location: "Refrigerated Transport, CA", status: "Temperature Monitored" },
        { stage: "Retail", date: "2025-01-10", location: "Organic Market, CA", status: "Shelf Ready" }
      ]
    }
  };

  const demoSteps = [
    {
      title: "Select Produce",
      description: "Choose a product to trace its journey from farm to table",
      icon: "Apple"
    },
    {
      title: "Scan QR Code",
      description: "Simulate scanning the QR code on the product packaging",
      icon: "QrCode"
    },
    {
      title: "View Farm Information",
      description: "Learn about the farmer and farming practices used",
      icon: "MapPin"
    },
    {
      title: "Track Supply Chain",
      description: "Follow the product\'s journey through the supply chain",
      icon: "Truck"
    },
    {
      title: "Verify Certifications",
      description: "Check authentic certifications and quality standards",
      icon: "Award"
    }
  ];

  const currentProduce = produceOptions?.[selectedProduce];

  useEffect(() => {
    let interval;
    if (isPlaying && currentStep < demoSteps?.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, 3000);
    } else if (currentStep >= demoSteps?.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, demoSteps?.length]);

  const startDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const nextStep = () => {
    if (currentStep < demoSteps?.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Demo</h3>
        <p className="text-muted-foreground">Experience how AgriTrace tracks produce from farm to table</p>
      </div>
      {/* Demo Controls */}
      <div className="flex items-center justify-between mb-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center space-x-4">
          <select 
            value={selectedProduce}
            onChange={(e) => setSelectedProduce(e?.target?.value)}
            className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
          >
            <option value="tomatoes">Cherry Tomatoes</option>
            <option value="apples">Honeycrisp Apples</option>
            <option value="lettuce">Butter Lettuce</option>
          </select>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={startDemo} disabled={isPlaying}>
              <Icon name="Play" size={16} className="mr-2" />
              Start Demo
            </Button>
            <Button variant="outline" size="sm" onClick={resetDemo}>
              <Icon name="RotateCcw" size={16} className="mr-2" />
              Reset
            </Button>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {demoSteps?.length}
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          {demoSteps?.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                index <= currentStep 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {index < currentStep ? (
                  <Icon name="Check" size={16} />
                ) : (
                  index + 1
                )}
              </div>
              {index < demoSteps?.length - 1 && (
                <div className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                  index < currentStep ? 'bg-primary' : 'bg-muted'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold text-foreground mb-1">{demoSteps?.[currentStep]?.title}</h4>
          <p className="text-sm text-muted-foreground">{demoSteps?.[currentStep]?.description}</p>
        </div>
      </div>
      {/* Demo Content */}
      <div className="bg-background rounded-lg border border-border p-6 min-h-[400px]">
        {currentStep === 0 && (
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
              <Image 
                src={currentProduce?.image} 
                alt={currentProduce?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="text-xl font-semibold text-foreground mb-2">{currentProduce?.name}</h5>
            <p className="text-muted-foreground mb-4">From {currentProduce?.farm}</p>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={14} />
                <span>{currentProduce?.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={14} />
                <span>Harvested {currentProduce?.harvestDate}</span>
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 bg-muted rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 bg-foreground rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 bg-background rounded grid grid-cols-8 gap-0.5 p-1">
                  {Array.from({ length: 64 })?.map((_, i) => (
                    <div key={i} className={`w-full h-full ${Math.random() > 0.5 ? 'bg-foreground' : 'bg-background'}`}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="animate-pulse">
              <Icon name="Scan" size={32} className="text-primary mx-auto mb-3" />
              <p className="text-lg font-medium text-foreground mb-2">Scanning QR Code...</p>
              <p className="text-sm text-muted-foreground">Connecting to blockchain database</p>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt={currentProduce?.farmer}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-lg font-semibold text-foreground mb-1">{currentProduce?.farmer}</h5>
              <p className="text-sm text-muted-foreground mb-3">{currentProduce?.farm}</p>
              <div className="flex justify-center">
                <Button variant="outline" size="sm">
                  <Icon name="MessageCircle" size={14} className="mr-2" />
                  Contact Farmer
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h6 className="text-sm font-medium text-foreground mb-2">Farm Location</h6>
                <p className="text-sm text-muted-foreground">{currentProduce?.location}</p>
              </div>
              <div>
                <h6 className="text-sm font-medium text-foreground mb-2">Harvest Date</h6>
                <p className="text-sm text-muted-foreground">{currentProduce?.harvestDate}</p>
              </div>
              <div>
                <h6 className="text-sm font-medium text-foreground mb-2">Farming Practices</h6>
                <p className="text-sm text-muted-foreground">Organic, sustainable farming methods with integrated pest management</p>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-foreground mb-4">Supply Chain Journey</h5>
            {currentProduce?.journey?.map((step, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-sm font-medium text-foreground">{step?.stage}</h6>
                    <span className="text-xs text-muted-foreground">{step?.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{step?.location}</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-success">{step?.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold text-foreground mb-4">Verified Certifications</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProduce?.certifications?.map((cert, index) => (
                  <div key={index} className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Award" size={20} className="text-success" />
                      <div>
                        <h6 className="text-sm font-medium text-foreground">{cert}</h6>
                        <p className="text-xs text-muted-foreground">Verified by blockchain</p>
                      </div>
                      <Icon name="CheckCircle" size={16} className="text-success ml-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center p-6 bg-success/10 rounded-lg">
              <Icon name="ShieldCheck" size={32} className="text-success mx-auto mb-3" />
              <h6 className="text-lg font-semibold text-foreground mb-2">Verification Complete</h6>
              <p className="text-sm text-muted-foreground">This produce has been verified through our blockchain system with 100% authenticity guarantee.</p>
            </div>
          </div>
        )}
      </div>
      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={prevStep} 
          disabled={currentStep === 0}
        >
          <Icon name="ChevronLeft" size={16} className="mr-2" />
          Previous
        </Button>
        
        <div className="flex items-center space-x-2">
          {!isPlaying && currentStep < demoSteps?.length - 1 && (
            <Button variant="outline" onClick={startDemo}>
              <Icon name="Play" size={16} className="mr-2" />
              Auto Play
            </Button>
          )}
          {isPlaying && (
            <Button variant="outline" onClick={() => setIsPlaying(false)}>
              <Icon name="Pause" size={16} className="mr-2" />
              Pause
            </Button>
          )}
        </div>
        
        <Button 
          variant="outline" 
          onClick={nextStep} 
          disabled={currentStep === demoSteps?.length - 1}
        >
          Next
          <Icon name="ChevronRight" size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default InteractiveDemo;