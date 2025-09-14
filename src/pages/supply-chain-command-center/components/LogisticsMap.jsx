import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LogisticsMap = ({ shipments, onShipmentSelect }) => {
  const [selectedShipment, setSelectedShipment] = useState(null);

  const handleMarkerClick = (shipment) => {
    setSelectedShipment(shipment);
    onShipmentSelect(shipment);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Live Shipment Tracking</h3>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} className="mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-96 bg-muted">
        {/* Mock Map Interface */}
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Supply Chain Logistics Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=40.7128,-74.0060&z=8&output=embed"
          className="w-full h-full"
        />
        
        {/* Map Overlay Controls */}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-foreground">On Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-xs text-foreground">Delayed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-xs text-foreground">Alert</span>
            </div>
          </div>
        </div>

        {/* Active Shipments Counter */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{shipments?.length}</p>
            <p className="text-xs text-muted-foreground">Active Shipments</p>
          </div>
        </div>

        {/* Mock Shipment Markers */}
        <div className="absolute inset-0 pointer-events-none">
          {shipments?.slice(0, 5)?.map((shipment, index) => (
            <div
              key={shipment?.id}
              className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg cursor-pointer pointer-events-auto ${
                shipment?.status === 'Delivered' ? 'bg-green-500' :
                shipment?.status === 'Delayed' ? 'bg-red-500' :
                shipment?.status === 'Quality Check' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}
              style={{
                top: `${20 + index * 15}%`,
                left: `${30 + index * 10}%`
              }}
              onClick={() => handleMarkerClick(shipment)}
              title={`${shipment?.id} - ${shipment?.status}`}
            />
          ))}
        </div>
      </div>
      {selectedShipment && (
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-foreground">{selectedShipment?.id}</h4>
              <p className="text-sm text-muted-foreground">
                {selectedShipment?.origin} → {selectedShipment?.destination}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">ETA: {selectedShipment?.eta}</p>
              <p className="text-xs text-muted-foreground">Temp: {selectedShipment?.temperature}°C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogisticsMap;