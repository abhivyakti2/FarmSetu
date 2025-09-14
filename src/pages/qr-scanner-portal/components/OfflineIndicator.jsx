import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showNotification && isOnline) return null;

  return (
    <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      showNotification ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg border ${
        isOnline 
          ? 'bg-success text-success-foreground border-success/20' 
          : 'bg-warning text-warning-foreground border-warning/20'
      }`}>
        <Icon 
          name={isOnline ? "Wifi" : "WifiOff"} 
          size={20} 
        />
        <div>
          <div className="font-medium text-sm">
            {isOnline ? 'Back Online' : 'Offline Mode'}
          </div>
          <div className="text-xs opacity-90">
            {isOnline 
              ? 'Syncing data...' :'Scans will sync when connection returns'
            }
          </div>
        </div>
        {!isOnline && (
          <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default OfflineIndicator;