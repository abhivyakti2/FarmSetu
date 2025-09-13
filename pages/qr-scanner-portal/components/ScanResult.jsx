import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ScanResult = ({ scanData, onClose, onNewScan }) => {
  const [activeTab, setActiveTab] = useState('story');

  // Mock data based on scan result
  const productData = {
    name: "Organic Roma Tomatoes",
    variety: "Roma Heritage Variety",
    harvestDate: "2024-09-08",
    farmer: {
      name: "Maria Rodriguez",
      farm: "Sunrise Organic Farm",
      location: "Salinas Valley, California",
      photo: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face",
      message: `Hello! I'm Maria, and I've been growing organic tomatoes for over 15 years. These Roma tomatoes were grown with love and care using sustainable farming practices. I hope you enjoy them as much as I enjoyed growing them for you!`,
      contact: "maria@sunriseorganicfarm.com"
    },
    certifications: [
      { name: "USDA Organic", icon: "Shield", verified: true },
      { name: "Non-GMO Project", icon: "Leaf", verified: true },
      { name: "Fair Trade", icon: "Heart", verified: true }
    ],
    nutrition: {
      calories: 18,
      vitamin_c: "28% DV",
      potassium: "237mg",
      lycopene: "High"
    },
    sustainability: {
      water_usage: "30% less than conventional",
      carbon_footprint: "Low",
      soil_health: "Regenerative practices",
      biodiversity: "Pollinator-friendly"
    },
    journey: [
      { stage: "Planted", date: "2024-06-15", location: "Greenhouse", status: "completed" },
      { stage: "Transplanted", date: "2024-07-01", location: "Field Block A", status: "completed" },
      { stage: "Harvested", date: "2024-09-08", location: "Field Block A", status: "completed" },
      { stage: "Packed", date: "2024-09-08", location: "Packing Facility", status: "completed" },
      { stage: "Shipped", date: "2024-09-09", location: "Distribution Center", status: "completed" },
      { stage: "Retail", date: "2024-09-10", location: "Your Store", status: "current" }
    ]
  };

  const tabs = [
    { id: 'story', label: 'Farm Story', icon: 'User' },
    { id: 'journey', label: 'Journey', icon: 'MapPin' },
    { id: 'nutrition', label: 'Nutrition', icon: 'Heart' },
    { id: 'impact', label: 'Impact', icon: 'Leaf' }
  ];

  return (
    <div className="w-full h-full bg-background overflow-y-auto">
      {/* Success Animation Header */}
      <div className="bg-gradient-to-br from-primary to-secondary p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <Icon name="CheckCircle" size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Scan Successful!</h2>
          <p className="text-white/90">Discover the story behind your food</p>
        </div>
      </div>
      {/* Product Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 bg-muted rounded-xl overflow-hidden flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=400&h=400&fit=crop" 
              alt="Roma Tomatoes"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">{productData?.name}</h3>
            <p className="text-muted-foreground mb-2">{productData?.variety}</p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center text-primary">
                <Icon name="Calendar" size={16} className="mr-1" />
                Harvested {productData?.harvestDate}
              </span>
              <span className="flex items-center text-secondary">
                <Icon name="MapPin" size={16} className="mr-1" />
                {productData?.farmer?.location}
              </span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-2 mt-4">
          {productData?.certifications?.map((cert, index) => (
            <div key={index} className="flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              <Icon name={cert?.icon} size={14} />
              <span>{cert?.name}</span>
              {cert?.verified && <Icon name="CheckCircle" size={14} className="text-primary" />}
            </div>
          ))}
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab?.id
                  ? 'border-primary text-primary bg-primary/5' :'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'story' && (
          <div className="space-y-6">
            {/* Farmer Profile */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src={productData?.farmer?.photo} 
                    alt={productData?.farmer?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground">{productData?.farmer?.name}</h4>
                  <p className="text-muted-foreground">{productData?.farmer?.farm}</p>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {productData?.farmer?.location}
                  </p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed mb-4">{productData?.farmer?.message}</p>
              <Button variant="outline" size="sm">
                <Icon name="Mail" size={16} className="mr-2" />
                Contact Farmer
              </Button>
            </div>

            {/* Farm Location Map */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border">
                <h4 className="font-semibold text-foreground">Farm Location</h4>
              </div>
              <div className="h-48">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Sunrise Organic Farm"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=36.6777,-121.6555&z=14&output=embed"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'journey' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-4">Supply Chain Journey</h4>
            {productData?.journey?.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 pb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  step?.status === 'completed' ? 'bg-primary text-white' :
                  step?.status === 'current' ? 'bg-accent text-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {step?.status === 'completed' ? (
                    <Icon name="Check" size={16} />
                  ) : step?.status === 'current' ? (
                    <Icon name="MapPin" size={16} />
                  ) : (
                    <Icon name="Circle" size={16} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-medium text-foreground">{step?.stage}</h5>
                    <span className="text-sm text-muted-foreground">{step?.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step?.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-4">Nutritional Information</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(productData?.nutrition)?.map(([key, value]) => (
                <div key={key} className="bg-card rounded-lg p-4 border border-border text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">{key?.replace('_', ' ')}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground mb-4">Environmental Impact</h4>
            <div className="space-y-3">
              {Object.entries(productData?.sustainability)?.map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-card rounded-lg border border-border">
                  <span className="text-foreground capitalize">{key?.replace('_', ' ')}</span>
                  <span className="text-primary font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Action Buttons */}
      <div className="p-6 border-t border-border bg-card">
        <div className="flex space-x-3">
          <Button variant="outline" onClick={onNewScan} className="flex-1">
            <Icon name="QrCode" size={16} className="mr-2" />
            Scan Another
          </Button>
          <Button variant="default" className="flex-1">
            <Icon name="Share" size={16} className="mr-2" />
            Share Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanResult;