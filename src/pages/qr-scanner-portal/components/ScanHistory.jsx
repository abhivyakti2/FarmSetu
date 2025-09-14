import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ScanHistory = ({ onScanSelect }) => {
  const scanHistory = [
    {
      id: 1,
      productName: "Organic Roma Tomatoes",
      farmerName: "Maria Rodriguez",
      farmName: "Sunrise Organic Farm",
      scanDate: "2024-09-11",
      scanTime: "10:05 AM",
      image: "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=200&h=200&fit=crop",
      location: "Salinas Valley, CA",
      certifications: ["USDA Organic", "Non-GMO"]
    },
    {
      id: 2,
      productName: "Heritage Carrots",
      farmerName: "John Thompson",
      farmName: "Valley View Farm",
      scanDate: "2024-09-10",
      scanTime: "2:30 PM",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200&h=200&fit=crop",
      location: "Napa Valley, CA",
      certifications: ["Organic", "Biodynamic"]
    },
    {
      id: 3,
      productName: "Fresh Spinach",
      farmerName: "Sarah Chen",
      farmName: "Green Leaf Gardens",
      scanDate: "2024-09-09",
      scanTime: "11:15 AM",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop",
      location: "Monterey County, CA",
      certifications: ["USDA Organic"]
    },
    {
      id: 4,
      productName: "Bell Peppers Mix",
      farmerName: "Roberto Martinez",
      farmName: "Sunny Acres Farm",
      scanDate: "2024-09-08",
      scanTime: "4:45 PM",
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=200&h=200&fit=crop",
      location: "Central Valley, CA",
      certifications: ["Organic", "Fair Trade"]
    },
    {
      id: 5,
      productName: "Baby Lettuce",
      farmerName: "Emma Wilson",
      farmName: "Fresh Fields Farm",
      scanDate: "2024-09-07",
      scanTime: "9:20 AM",
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=200&h=200&fit=crop",
      location: "Salinas Valley, CA",
      certifications: ["USDA Organic", "Rainforest Alliance"]
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday?.setDate(yesterday?.getDate() - 1);

    if (date?.toDateString() === today?.toDateString()) {
      return 'Today';
    } else if (date?.toDateString() === yesterday?.toDateString()) {
      return 'Yesterday';
    } else {
      return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="w-full h-full bg-background">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Scan History</h2>
            <p className="text-muted-foreground">Your food transparency journey</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="History" size={16} />
            <span>{scanHistory?.length} scans</span>
          </div>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="p-6 border-b border-border">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-2xl font-bold text-primary mb-1">{scanHistory?.length}</div>
            <div className="text-xs text-muted-foreground">Products Scanned</div>
          </div>
          <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/20">
            <div className="text-2xl font-bold text-secondary mb-1">5</div>
            <div className="text-xs text-muted-foreground">Farmers Met</div>
          </div>
          <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
            <div className="text-2xl font-bold text-accent mb-1">100%</div>
            <div className="text-xs text-muted-foreground">Organic</div>
          </div>
        </div>
      </div>
      {/* History List */}
      <div className="flex-1 overflow-y-auto">
        {scanHistory?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
              <Icon name="QrCode" size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No Scans Yet</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Start scanning QR codes to discover the stories behind your food
            </p>
            <Button variant="default">
              <Icon name="Camera" size={16} className="mr-2" />
              Start Scanning
            </Button>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            {scanHistory?.map((scan) => (
              <div
                key={scan?.id}
                onClick={() => onScanSelect?.(scan)}
                className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-all duration-200 cursor-pointer hover:border-primary/30"
              >
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image 
                      src={scan?.image} 
                      alt={scan?.productName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground truncate">{scan?.productName}</h4>
                        <p className="text-sm text-muted-foreground">by {scan?.farmerName}</p>
                      </div>
                      <div className="text-right flex-shrink-0 ml-2">
                        <div className="text-sm font-medium text-foreground">{formatDate(scan?.scanDate)}</div>
                        <div className="text-xs text-muted-foreground">{scan?.scanTime}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <Icon name="MapPin" size={12} className="mr-1" />
                        {scan?.location}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Building" size={12} className="mr-1" />
                        {scan?.farmName}
                      </span>
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-1">
                      {scan?.certifications?.map((cert, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          <Icon name="Shield" size={10} className="mr-1" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Arrow */}
                  <div className="flex-shrink-0">
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Footer Actions */}
      <div className="p-6 border-t border-border bg-card">
        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1">
            <Icon name="Download" size={16} className="mr-2" />
            Export History
          </Button>
          <Button variant="default" className="flex-1">
            <Icon name="Share" size={16} className="mr-2" />
            Share Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanHistory;