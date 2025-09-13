import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveActivityMap = () => {
  const [activeScans, setActiveScans] = useState([]);

  const scanLocations = [
    { id: 1, city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194, product: "Organic Tomatoes" },
    { id: 2, city: "London", country: "UK", lat: 51.5074, lng: -0.1278, product: "Fresh Lettuce" },
    { id: 3, city: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, product: "Premium Rice" },
    { id: 4, city: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, product: "Organic Apples" },
    { id: 5, city: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050, product: "Fresh Herbs" },
    { id: 6, city: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832, product: "Maple Syrup" },
    { id: 7, city: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777, product: "Basmati Rice" },
    { id: 8, city: "São Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333, product: "Coffee Beans" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLocation = scanLocations?.[Math.floor(Math.random() * scanLocations?.length)];
      const newScan = {
        ...randomLocation,
        timestamp: new Date(),
        id: Date.now()
      };
      
      setActiveScans(prev => {
        const updated = [newScan, ...prev?.slice(0, 4)];
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPositionStyle = (lat, lng) => {
    // Convert lat/lng to percentage positions on the map
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return {
      left: `${Math.max(5, Math.min(95, x))}%`,
      top: `${Math.max(5, Math.min(95, y))}%`
    };
  };

  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Live Scanning Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch as consumers around the world discover the stories behind their food in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* World Map */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-6 border border-border shadow-organic">
              <div className="relative w-full h-80 lg:h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg overflow-hidden">
                {/* World Map SVG */}
                <svg 
                  viewBox="0 0 1000 500" 
                  className="absolute inset-0 w-full h-full opacity-20"
                  fill="var(--color-primary)"
                >
                  <path d="M150,100 L200,80 L280,90 L350,85 L400,95 L450,88 L500,92 L550,87 L600,93 L650,89 L700,94 L750,91 L800,96 L850,93 L150,100 Z"/>
                  <path d="M100,150 L180,140 L250,145 L320,142 L380,148 L440,144 L500,149 L560,146 L620,151 L680,148 L740,152 L800,149 L100,150 Z"/>
                  <path d="M120,200 L200,190 L270,195 L340,192 L400,198 L460,194 L520,199 L580,196 L640,201 L700,198 L760,202 L820,199 L120,200 Z"/>
                  <path d="M80,250 L160,240 L230,245 L300,242 L360,248 L420,244 L480,249 L540,246 L600,251 L660,248 L720,252 L780,249 L80,250 Z"/>
                  <path d="M140,300 L220,290 L290,295 L360,292 L420,298 L480,294 L540,299 L600,296 L660,301 L720,298 L780,302 L840,299 L140,300 Z"/>
                </svg>

                {/* Scanning Points */}
                {scanLocations?.map((location) => (
                  <div
                    key={location?.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={getPositionStyle(location?.lat, location?.lng)}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-conversion rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-conversion rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                ))}

                {/* Network Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="var(--color-conversion)" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                  {scanLocations?.slice(0, 4)?.map((_, index) => (
                    <line
                      key={index}
                      x1={`${20 + index * 20}%`}
                      y1={`${30 + index * 15}%`}
                      x2={`${60 + index * 10}%`}
                      y2={`${50 + index * 10}%`}
                      stroke="url(#connectionGradient)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 500}ms` }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 border border-border shadow-organic">
              <div className="flex items-center mb-6">
                <Icon name="Activity" size={24} className="text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">Recent Scans</h3>
              </div>
              
              <div className="space-y-4">
                {activeScans?.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon name="Loader" size={32} className="text-muted-foreground mx-auto mb-3 animate-spin" />
                    <p className="text-muted-foreground">Waiting for scan activity...</p>
                  </div>
                ) : (
                  activeScans?.map((scan) => (
                    <div key={scan?.id} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg animate-grow">
                      <div className="w-2 h-2 bg-conversion rounded-full mt-2 animate-pulse"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {scan?.product}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {scan?.city}, {scan?.country}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {scan?.timestamp?.toLocaleTimeString()}
                        </p>
                      </div>
                      <Icon name="QrCode" size={16} className="text-primary flex-shrink-0" />
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total scans today</span>
                  <span className="font-semibold text-primary">12,847</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityMap;