import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AnalyticsDashboard = ({ analyticsData }) => {
  const MetricCard = ({ title, value, change, icon, color = "primary" }) => (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className={`text-2xl font-bold text-${color}`}>{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              <Icon 
                name={change?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                size={16} 
                className={change?.trend === 'up' ? 'text-green-600' : 'text-red-600'} 
              />
              <span className={`text-sm ml-1 ${change?.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {change?.value}% vs last month
              </span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 bg-${color}/10 rounded-lg flex items-center justify-center`}>
          <Icon name={icon} size={24} className={`text-${color}`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Shipments"
          value={analyticsData?.totalShipments}
          change={{ trend: 'up', value: 12 }}
          icon="Package"
          color="primary"
        />
        <MetricCard
          title="On-Time Delivery"
          value={`${analyticsData?.onTimeDelivery}%`}
          change={{ trend: 'up', value: 5 }}
          icon="Clock"
          color="green-600"
        />
        <MetricCard
          title="Quality Issues"
          value={analyticsData?.qualityIssues}
          change={{ trend: 'down', value: 8 }}
          icon="AlertTriangle"
          color="red-600"
        />
        <MetricCard
          title="Consumer Scans"
          value={analyticsData?.consumerScans}
          change={{ trend: 'up', value: 23 }}
          icon="QrCode"
          color="blue-600"
        />
      </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delivery Performance Chart */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Delivery Performance</h3>
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-2" />
              Export
            </Button>
          </div>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="BarChart3" size={48} className="text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Delivery performance chart</p>
              <p className="text-sm text-muted-foreground">Weekly delivery metrics</p>
            </div>
          </div>
        </div>

        {/* Quality Trends Chart */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Quality Trends</h3>
            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Configure
            </Button>
          </div>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="LineChart" size={48} className="text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Quality trend analysis</p>
              <p className="text-sm text-muted-foreground">Temperature & condition monitoring</p>
            </div>
          </div>
        </div>
      </div>
      {/* Fraud Prevention Insights */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Fraud Prevention Insights</h3>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Shield" size={16} className="mr-2" />
              Security Report
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              View Alerts
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={32} className="text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">{analyticsData?.fraudPrevention?.blocked}</p>
            <p className="text-sm text-muted-foreground">Fraud Attempts Blocked</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Eye" size={32} className="text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600">{analyticsData?.fraudPrevention?.monitored}</p>
            <p className="text-sm text-muted-foreground">Shipments Monitored</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="TrendingUp" size={32} className="text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-purple-600">{analyticsData?.fraudPrevention?.accuracy}%</p>
            <p className="text-sm text-muted-foreground">Detection Accuracy</p>
          </div>
        </div>
      </div>
      {/* Consumer Engagement Analytics */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Consumer Engagement</h3>
          <Button variant="outline" size="sm">
            <Icon name="Users" size={16} className="mr-2" />
            View Details
          </Button>
        </div>

        <div className="space-y-4">
          {analyticsData?.consumerEngagement?.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name={item?.icon} size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-foreground">{item?.metric}</p>
                  <p className="text-sm text-muted-foreground">{item?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">{item?.value}</p>
                <p className="text-xs text-muted-foreground">{item?.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;