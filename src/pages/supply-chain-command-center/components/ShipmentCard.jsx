import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ShipmentCard = ({ shipment, onViewDetails, onUpdateStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Transit': return 'text-blue-600 bg-blue-50';
      case 'Delivered': return 'text-green-600 bg-green-50';
      case 'Delayed': return 'text-red-600 bg-red-50';
      case 'Quality Check': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Package" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{shipment?.id}</h3>
            <p className="text-sm text-muted-foreground">{shipment?.product}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment?.status)}`}>
            {shipment?.status}
          </span>
          <span className={`text-xs font-medium ${getPriorityColor(shipment?.priority)}`}>
            {shipment?.priority}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-muted-foreground">Origin</p>
          <p className="text-sm font-medium text-foreground">{shipment?.origin}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Destination</p>
          <p className="text-sm font-medium text-foreground">{shipment?.destination}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">ETA</p>
          <p className="text-sm font-medium text-foreground">{shipment?.eta}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Temperature</p>
          <p className="text-sm font-medium text-foreground">{shipment?.temperature}°C</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image 
            src={shipment?.farmerAvatar} 
            alt={shipment?.farmer}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-xs text-muted-foreground">{shipment?.farmer}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onUpdateStatus(shipment?.id)}
          >
            Update
          </Button>
          <Button 
            variant="default" 
            size="sm"
            onClick={() => onViewDetails(shipment?.id)}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentCard;