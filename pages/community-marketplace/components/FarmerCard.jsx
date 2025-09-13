import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FarmerCard = ({ farmer, onViewProfile, onMessage }) => {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={farmer?.coverImage}
          alt={`${farmer?.name}'s farm`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            farmer?.isOnline ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
          }`}>
            {farmer?.isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start space-x-3 mb-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={farmer?.avatar}
              alt={farmer?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{farmer?.name}</h3>
            <p className="text-sm text-muted-foreground">{farmer?.location}</p>
            <div className="flex items-center space-x-1 mt-1">
              <Icon name="Star" size={14} className="text-accent fill-current" />
              <span className="text-sm font-medium">{farmer?.rating}</span>
              <span className="text-xs text-muted-foreground">({farmer?.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {farmer?.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {farmer?.specialties?.slice(0, 3)?.map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
          {farmer?.specialties?.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
              +{farmer?.specialties?.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Icon name="MapPin" size={12} />
            <span>{farmer?.distance} miles away</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Truck" size={12} />
            <span>Delivers {farmer?.deliveryDays}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onViewProfile(farmer)}
          >
            View Profile
          </Button>
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={() => onMessage(farmer)}
          >
            <Icon name="MessageCircle" size={14} className="mr-1" />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FarmerCard;