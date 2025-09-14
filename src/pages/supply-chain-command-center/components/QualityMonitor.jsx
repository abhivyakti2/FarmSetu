import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QualityMonitor = ({ qualityData, onViewAlert, onResolveAlert }) => {
  const getAlertSeverity = (severity) => {
    switch (severity) {
      case 'Critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getMetricStatus = (value, threshold) => {
    if (value > threshold?.critical) return 'critical';
    if (value > threshold?.warning) return 'warning';
    return 'normal';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical': return 'text-red-600';
      case 'warning': return 'text-yellow-600';
      case 'normal': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quality Metrics Overview */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Quality Monitoring</h3>
          <Button variant="outline" size="sm">
            <Icon name="Settings" size={16} className="mr-2" />
            Configure
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {qualityData?.metrics?.map((metric) => {
            const status = getMetricStatus(metric?.current, metric?.thresholds);
            return (
              <div key={metric?.id} className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Icon name={metric?.icon} size={20} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{metric?.name}</span>
                  </div>
                  <Icon 
                    name={status === 'critical' ? 'AlertTriangle' : status === 'warning' ? 'AlertCircle' : 'CheckCircle'} 
                    size={16} 
                    className={getStatusColor(status)} 
                  />
                </div>
                <div className="space-y-1">
                  <p className={`text-2xl font-bold ${getStatusColor(status)}`}>
                    {metric?.current}{metric?.unit}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Range: {metric?.thresholds?.min}-{metric?.thresholds?.max}{metric?.unit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Active Quality Alerts */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Active Quality Alerts</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              {qualityData?.alerts?.filter(alert => alert?.status === 'Active')?.length} active
            </span>
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} className="mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {qualityData?.alerts?.map((alert) => (
            <div 
              key={alert?.id} 
              className={`border rounded-lg p-4 ${getAlertSeverity(alert?.severity)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="AlertTriangle" size={16} />
                    <span className="font-medium">{alert?.title}</span>
                    <span className="text-xs px-2 py-1 bg-background rounded-full">
                      {alert?.severity}
                    </span>
                  </div>
                  <p className="text-sm mb-2">{alert?.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Shipment: {alert?.shipmentId}</span>
                    <span>Location: {alert?.location}</span>
                    <span>Time: {alert?.timestamp}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onViewAlert(alert?.id)}
                  >
                    View
                  </Button>
                  {alert?.status === 'Active' && (
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => onResolveAlert(alert?.id)}
                    >
                      Resolve
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Temperature Trend Chart */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Temperature Trends</h3>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Icon name="TrendingUp" size={48} className="text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">Temperature trend visualization</p>
            <p className="text-sm text-muted-foreground">Real-time monitoring data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityMonitor;