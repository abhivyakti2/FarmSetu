import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ShipmentCard from './components/ShipmentCard';
import LogisticsMap from './components/LogisticsMap';
import QualityMonitor from './components/QualityMonitor';
import EventLogger from './components/EventLogger';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import IntegrationHub from './components/IntegrationHub';

const SupplyChainCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedShipment, setSelectedShipment] = useState(null);

  // Mock data for shipments
  const mockShipments = [
    {
      id: "SHP-2025-001",
      product: "Organic Tomatoes",
      origin: "Green Valley Farm, CA",
      destination: "Fresh Market, NY",
      status: "In Transit",
      priority: "High",
      eta: "Jan 12, 2:30 PM",
      temperature: "4.2",
      farmer: "Maria Rodriguez",
      farmerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
    },
    {
      id: "SHP-2025-002",
      product: "Free-Range Eggs",
      origin: "Sunrise Poultry, TX",
      destination: "Organic Store, FL",
      status: "Quality Check",
      priority: "Medium",
      eta: "Jan 12, 4:15 PM",
      temperature: "3.8",
      farmer: "John Thompson",
      farmerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    {
      id: "SHP-2025-003",
      product: "Grass-Fed Beef",
      origin: "Prairie Ranch, MT",
      destination: "Premium Butcher, CA",
      status: "Delivered",
      priority: "High",
      eta: "Completed",
      temperature: "2.1",
      farmer: "Sarah Wilson",
      farmerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    {
      id: "SHP-2025-004",
      product: "Organic Apples",
      origin: "Mountain Orchard, WA",
      destination: "City Market, OR",
      status: "Delayed",
      priority: "Low",
      eta: "Jan 13, 10:00 AM",
      temperature: "1.5",
      farmer: "David Chen",
      farmerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    }
  ];

  // Mock quality monitoring data
  const mockQualityData = {
    metrics: [
      {
        id: 1,
        name: "Temperature",
        current: 3.2,
        unit: "°C",
        icon: "Thermometer",
        thresholds: { min: 0, max: 5, warning: 4, critical: 6 }
      },
      {
        id: 2,
        name: "Humidity",
        current: 65,
        unit: "%",
        icon: "Droplets",
        thresholds: { min: 60, max: 80, warning: 75, critical: 85 }
      },
      {
        id: 3,
        name: "Transit Time",
        current: 18,
        unit: "hrs",
        icon: "Clock",
        thresholds: { min: 12, max: 24, warning: 20, critical: 26 }
      }
    ],
    alerts: [
      {
        id: "ALT-001",
        title: "Temperature Spike Detected",
        description: "Shipment SHP-2025-001 experienced temperature increase above threshold",
        severity: "High",
        status: "Active",
        shipmentId: "SHP-2025-001",
        location: "Interstate 80, NV",
        timestamp: "2 hours ago"
      },
      {
        id: "ALT-002",
        title: "Delivery Delay Alert",
        description: "Traffic conditions causing 2-hour delay for multiple shipments",
        severity: "Medium",
        status: "Active",
        shipmentId: "SHP-2025-004",
        location: "Highway 101, CA",
        timestamp: "4 hours ago"
      }
    ]
  };

  // Mock recent events
  const mockRecentEvents = [
    {
      id: "EVT-001",
      type: "checkpoint",
      title: "Quality Checkpoint Passed",
      description: "All quality parameters within acceptable range",
      shipmentId: "SHP-2025-001",
      location: "Distribution Center, NV",
      temperature: "3.8",
      timestamp: "2 hours ago",
      hasPhotos: true
    },
    {
      id: "EVT-002",
      type: "delay",
      title: "Traffic Delay Reported",
      description: "Heavy traffic causing estimated 2-hour delay",
      shipmentId: "SHP-2025-004",
      location: "Highway 101, CA",
      temperature: "1.5",
      timestamp: "4 hours ago",
      hasPhotos: false
    },
    {
      id: "EVT-003",
      type: "delivery",
      title: "Delivery Completed",
      description: "Successfully delivered to Premium Butcher",
      shipmentId: "SHP-2025-003",
      location: "Premium Butcher, CA",
      temperature: "2.1",
      timestamp: "6 hours ago",
      hasPhotos: true
    }
  ];

  // Mock analytics data
  const mockAnalyticsData = {
    totalShipments: "1,247",
    onTimeDelivery: 94,
    qualityIssues: 23,
    consumerScans: "8,456",
    fraudPrevention: {
      blocked: 47,
      monitored: 1247,
      accuracy: 98.7
    },
    consumerEngagement: [
      {
        metric: "QR Code Scans",
        value: "8,456",
        description: "Total consumer scans this month",
        period: "This month",
        icon: "QrCode"
      },
      {
        metric: "Farmer Connections",
        value: "2,341",
        description: "Direct farmer-consumer interactions",
        period: "This month",
        icon: "Users"
      },
      {
        metric: "Trust Score",
        value: "96.8%",
        description: "Consumer trust rating",
        period: "Current",
        icon: "Shield"
      }
    ]
  };

  // Mock integrations data
  const mockIntegrations = [
    {
      id: 1,
      name: "SAP ERP",
      category: "Enterprise Resource Planning",
      description: "Integrate with SAP for inventory and order management",
      status: "Connected",
      icon: "Database",
      lastSync: "2 minutes ago"
    },
    {
      id: 2,
      name: "FedEx API",
      category: "Logistics",
      description: "Real-time shipping and tracking integration",
      status: "Connected",
      icon: "Truck",
      lastSync: "5 minutes ago"
    },
    {
      id: 3,
      name: "IoT Sensors",
      category: "Monitoring",
      description: "Temperature and humidity sensor data",
      status: "Pending",
      icon: "Thermometer",
      lastSync: "1 hour ago"
    },
    {
      id: 4,
      name: "Blockchain Network",
      category: "Verification",
      description: "Immutable transaction recording",
      status: "Connected",
      icon: "Shield",
      lastSync: "1 minute ago"
    },
    {
      id: 5,
      name: "WMS Platform",
      category: "Warehouse Management",
      description: "Warehouse operations integration",
      status: "Disconnected",
      icon: "Package",
      lastSync: "Never"
    },
    {
      id: 6,
      name: "Analytics Suite",
      category: "Business Intelligence",
      description: "Advanced analytics and reporting",
      status: "Connected",
      icon: "BarChart3",
      lastSync: "10 minutes ago"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'shipments', label: 'Shipments', icon: 'Package' },
    { id: 'quality', label: 'Quality Monitor', icon: 'Shield' },
    { id: 'events', label: 'Event Logger', icon: 'Activity' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
    { id: 'integrations', label: 'Integrations', icon: 'Plug' }
  ];

  const handleViewShipmentDetails = (shipmentId) => {
    const shipment = mockShipments?.find(s => s?.id === shipmentId);
    setSelectedShipment(shipment);
  };

  const handleUpdateShipmentStatus = (shipmentId) => {
    console.log('Updating status for shipment:', shipmentId);
  };

  const handleLogEvent = (eventData) => {
    console.log('Logging new event:', eventData);
  };

  const handleViewAlert = (alertId) => {
    console.log('Viewing alert:', alertId);
  };

  const handleResolveAlert = (alertId) => {
    console.log('Resolving alert:', alertId);
  };

  const handleConnectIntegration = (integrationId, apiKey) => {
    console.log('Connecting integration:', integrationId, 'with API key');
  };

  const handleDisconnectIntegration = (integrationId) => {
    console.log('Disconnecting integration:', integrationId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Shipments</p>
                    <p className="text-2xl font-bold text-primary">{mockShipments?.filter(s => s?.status !== 'Delivered')?.length}</p>
                  </div>
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Quality Alerts</p>
                    <p className="text-2xl font-bold text-red-600">{mockQualityData?.alerts?.filter(a => a?.status === 'Active')?.length}</p>
                  </div>
                  <Icon name="AlertTriangle" size={24} className="text-red-600" />
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">On-Time Rate</p>
                    <p className="text-2xl font-bold text-green-600">94%</p>
                  </div>
                  <Icon name="Clock" size={24} className="text-green-600" />
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Consumer Scans</p>
                    <p className="text-2xl font-bold text-blue-600">8,456</p>
                  </div>
                  <Icon name="QrCode" size={24} className="text-blue-600" />
                </div>
              </div>
            </div>
            {/* Map and Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <LogisticsMap 
                shipments={mockShipments} 
                onShipmentSelect={setSelectedShipment}
              />
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {mockRecentEvents?.slice(0, 5)?.map((event) => (
                    <div key={event?.id} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Activity" size={16} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{event?.title}</p>
                        <p className="text-xs text-muted-foreground">{event?.shipmentId} • {event?.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'shipments':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Active Shipments</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Download" size={16} className="mr-2" />
                  Export
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockShipments?.map((shipment) => (
                <ShipmentCard
                  key={shipment?.id}
                  shipment={shipment}
                  onViewDetails={handleViewShipmentDetails}
                  onUpdateStatus={handleUpdateShipmentStatus}
                />
              ))}
            </div>
          </div>
        );

      case 'quality':
        return (
          <QualityMonitor
            qualityData={mockQualityData}
            onViewAlert={handleViewAlert}
            onResolveAlert={handleResolveAlert}
          />
        );

      case 'events':
        return (
          <EventLogger
            onLogEvent={handleLogEvent}
            recentEvents={mockRecentEvents}
          />
        );

      case 'analytics':
        return (
          <AnalyticsDashboard analyticsData={mockAnalyticsData} />
        );

      case 'integrations':
        return (
          <IntegrationHub
            integrations={mockIntegrations}
            onConnectIntegration={handleConnectIntegration}
            onDisconnectIntegration={handleDisconnectIntegration}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="w-full">
        {/* Page Header */}
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Supply Chain Command Center</h1>
                <p className="text-primary-foreground/80 mt-2">
                  Comprehensive supply chain visibility and management dashboard
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-primary-foreground/80">Last Updated</p>
                  <p className="font-medium">Jan 11, 2025 10:09 AM</p>
                </div>
                <Button variant="secondary" size="sm">
                  <Icon name="RefreshCw" size={16} className="mr-2" />
                  Refresh Data
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderTabContent()}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-foreground">AgriTrace</p>
                <p className="text-sm text-muted-foreground">Supply Chain Command Center</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} AgriTrace. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SupplyChainCommandCenter;