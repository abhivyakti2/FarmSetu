import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

import Image from '../../../components/AppImage';

const MessageModal = ({ farmer, isOpen, onClose, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('general');

  const messageTemplates = {
    general: "Hi! I\'m interested in learning more about your farm and produce.",
    availability: "What produce do you currently have available for purchase?",
    delivery: "Do you offer delivery to my area? I'm located in [Your Location].",
    visit: "I\'d love to visit your farm. Do you offer farm tours?",
    custom: ""
  };

  const handleSend = () => {
    if (message?.trim()) {
      onSendMessage(farmer, message);
      setMessage('');
      onClose();
    }
  };

  const handleTemplateSelect = (type) => {
    setMessageType(type);
    setMessage(messageTemplates?.[type]);
  };

  if (!isOpen || !farmer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg border border-border max-w-md w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={farmer?.avatar}
                alt={farmer?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{farmer?.name}</h3>
              <p className="text-sm text-muted-foreground">{farmer?.location}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>
        
        <div className="p-4 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Message Templates
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={messageType === 'general' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleTemplateSelect('general')}
              >
                General Inquiry
              </Button>
              <Button
                variant={messageType === 'availability' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleTemplateSelect('availability')}
              >
                Availability
              </Button>
              <Button
                variant={messageType === 'delivery' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleTemplateSelect('delivery')}
              >
                Delivery
              </Button>
              <Button
                variant={messageType === 'visit' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleTemplateSelect('visit')}
              >
                Farm Visit
              </Button>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e?.target?.value)}
              placeholder="Type your message here..."
              className="w-full h-32 p-3 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Response Time</p>
                <p className="text-xs text-muted-foreground">
                  {farmer?.name} typically responds within {farmer?.responseTime || '2-4 hours'}.
                  {farmer?.isOnline && ' They are currently online!'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 p-4 border-t border-border">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button 
            onClick={handleSend} 
            disabled={!message?.trim()}
            className="flex-1"
          >
            <Icon name="Send" size={16} className="mr-2" />
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;