import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EventCard = ({ event, onJoinEvent }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString) => {
    const time = new Date(`2000-01-01T${timeString}`);
    return time?.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative h-32 overflow-hidden">
        <Image
          src={event?.image}
          alt={event?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded-lg text-center">
            <div className="text-xs font-medium">{formatDate(event?.date)?.split(' ')?.[1]}</div>
            <div className="text-lg font-bold leading-none">{formatDate(event?.date)?.split(' ')?.[2]}</div>
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            event?.type === 'Market' ? 'bg-success text-success-foreground' :
            event?.type === 'Farm Visit' ? 'bg-accent text-accent-foreground' :
            'bg-secondary text-secondary-foreground'
          }`}>
            {event?.type}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-foreground mb-2 line-clamp-1">{event?.title}</h4>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event?.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={14} />
            <span>{formatTime(event?.startTime)} - {formatTime(event?.endTime)}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="MapPin" size={14} />
            <span className="line-clamp-1">{event?.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Users" size={14} />
            <span>{event?.attendees} attending • {event?.maxAttendees - event?.attendees} spots left</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={event?.organizer?.avatar}
                alt={event?.organizer?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground">by {event?.organizer?.name}</span>
          </div>
          <Button
            variant={event?.isJoined ? "outline" : "default"}
            size="sm"
            onClick={() => onJoinEvent(event)}
            disabled={event?.attendees >= event?.maxAttendees}
          >
            {event?.isJoined ? (
              <>
                <Icon name="Check" size={12} className="mr-1" />
                Joined
              </>
            ) : event?.attendees >= event?.maxAttendees ? (
              'Full'
            ) : (
              <>
                <Icon name="Plus" size={12} className="mr-1" />
                Join
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;