import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const EventLogger = ({ onLogEvent, recentEvents }) => {
  const [eventForm, setEventForm] = useState({
    shipmentId: '',
    eventType: '',
    location: '',
    description: '',
    temperature: '',
    photos: []
  });

  const eventTypeOptions = [
    { value: 'pickup', label: 'Pickup Completed' },
    { value: 'transit', label: 'In Transit Update' },
    { value: 'checkpoint', label: 'Quality Checkpoint' },
    { value: 'delivery', label: 'Delivery Completed' },
    { value: 'delay', label: 'Delay Reported' },
    { value: 'quality_issue', label: 'Quality Issue' },
    { value: 'temperature_alert', label: 'Temperature Alert' }
  ];

  const handleInputChange = (field, value) => {
    setEventForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const eventData = {
      ...eventForm,
      timestamp: new Date()?.toISOString(),
      id: `EVT-${Date.now()}`
    };
    onLogEvent(eventData);
    setEventForm({
      shipmentId: '',
      eventType: '',
      location: '',
      description: '',
      temperature: '',
      photos: []
    });
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'pickup': return 'Package';
      case 'transit': return 'Truck';
      case 'checkpoint': return 'CheckCircle';
      case 'delivery': return 'MapPin';
      case 'delay': return 'Clock';
      case 'quality_issue': return 'AlertTriangle';
      case 'temperature_alert': return 'Thermometer';
      default: return 'Activity';
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'pickup': return 'text-blue-600 bg-blue-50';
      case 'transit': return 'text-green-600 bg-green-50';
      case 'checkpoint': return 'text-purple-600 bg-purple-50';
      case 'delivery': return 'text-green-600 bg-green-50';
      case 'delay': return 'text-yellow-600 bg-yellow-50';
      case 'quality_issue': return 'text-red-600 bg-red-50';
      case 'temperature_alert': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Event Logging Form */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Log New Event</h3>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">GPS: Enabled</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Shipment ID"
              type="text"
              placeholder="Enter shipment ID"
              value={eventForm?.shipmentId}
              onChange={(e) => handleInputChange('shipmentId', e?.target?.value)}
              required
            />

            <Select
              label="Event Type"
              options={eventTypeOptions}
              value={eventForm?.eventType}
              onChange={(value) => handleInputChange('eventType', value)}
              placeholder="Select event type"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Location"
              type="text"
              placeholder="Current location"
              value={eventForm?.location}
              onChange={(e) => handleInputChange('location', e?.target?.value)}
              required
            />

            <Input
              label="Temperature (°C)"
              type="number"
              placeholder="Current temperature"
              value={eventForm?.temperature}
              onChange={(e) => handleInputChange('temperature', e?.target?.value)}
            />
          </div>

          <Input
            label="Description"
            type="text"
            placeholder="Additional details about the event"
            value={eventForm?.description}
            onChange={(e) => handleInputChange('description', e?.target?.value)}
          />

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center space-x-2">
              <Button type="button" variant="outline" size="sm">
                <Icon name="Camera" size={16} className="mr-2" />
                Add Photo
              </Button>
              <Button type="button" variant="outline" size="sm">
                <Icon name="Paperclip" size={16} className="mr-2" />
                Attach File
              </Button>
            </div>
            <Button type="submit" variant="default">
              <Icon name="Plus" size={16} className="mr-2" />
              Log Event
            </Button>
          </div>
        </form>
      </div>
      {/* Recent Events Timeline */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Recent Events</h3>
          <Button variant="outline" size="sm">
            <Icon name="Download" size={16} className="mr-2" />
            Export Log
          </Button>
        </div>

        <div className="space-y-4">
          {recentEvents?.map((event, index) => (
            <div key={event?.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getEventColor(event?.type)}`}>
                  <Icon name={getEventIcon(event?.type)} size={16} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{event?.title}</p>
                  <span className="text-xs text-muted-foreground">{event?.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{event?.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                  <span>Shipment: {event?.shipmentId}</span>
                  <span>Location: {event?.location}</span>
                  {event?.temperature && <span>Temp: {event?.temperature}°C</span>}
                </div>
              </div>
              {event?.hasPhotos && (
                <div className="flex-shrink-0">
                  <Icon name="Image" size={16} className="text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventLogger;