import React from 'react';
import Icon from '../../../components/AppIcon';

const SustainabilityTracker = () => {
  const impactMetrics = [
    {
      icon: 'Truck',
      label: 'Food Miles Reduced',
      value: '2,847',
      unit: 'miles',
      change: '+12%',
      color: 'text-success'
    },
    {
      icon: 'Users',
      label: 'Small Farms Supported',
      value: '156',
      unit: 'farms',
      change: '+8%',
      color: 'text-primary'
    },
    {
      icon: 'Trash2',
      label: 'Food Waste Prevented',
      value: '1,234',
      unit: 'lbs',
      change: '+15%',
      color: 'text-warning'
    },
    {
      icon: 'Leaf',
      label: 'Carbon Footprint Saved',
      value: '892',
      unit: 'kg CO₂',
      change: '+18%',
      color: 'text-accent'
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
          <Icon name="Leaf" size={16} className="text-success-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Community Impact</h3>
          <p className="text-sm text-muted-foreground">Our collective sustainability achievements</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {impactMetrics?.map((metric, index) => (
          <div key={index} className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Icon name={metric?.icon} size={16} className={metric?.color} />
                <span className="text-sm font-medium text-foreground">{metric?.label}</span>
              </div>
              <span className={`text-xs font-medium ${metric?.color}`}>{metric?.change}</span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-foreground">{metric?.value}</span>
              <span className="text-sm text-muted-foreground">{metric?.unit}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary bg-opacity-5 rounded-lg p-4 border border-primary border-opacity-20">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="Award" size={16} className="text-primary-foreground" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Community Achievement</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Together, we've created a more sustainable food system. Every purchase from local farmers 
              contributes to reducing environmental impact and supporting rural communities.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={12} />
                <span>This month</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="TrendingUp" size={12} />
                <span>Growing impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityTracker;