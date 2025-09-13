import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const PlatformStatistics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({
    totalTransactions: 0,
    verifiedFarms: 0,
    preventedFraud: 0,
    activeUsers: 0
  });

  const finalStats = {
    totalTransactions: 2847563,
    verifiedFarms: 15420,
    preventedFraud: 1247,
    activeUsers: 89650
  };

  // Animate counters on component mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        totalTransactions: Math.floor(finalStats?.totalTransactions * progress),
        verifiedFarms: Math.floor(finalStats?.verifiedFarms * progress),
        preventedFraud: Math.floor(finalStats?.preventedFraud * progress),
        activeUsers: Math.floor(finalStats?.activeUsers * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const monthlyData = [
    { month: 'Jul', transactions: 180000, farms: 1200, fraud: 45 },
    { month: 'Aug', transactions: 220000, farms: 1450, fraud: 52 },
    { month: 'Sep', transactions: 285000, farms: 1680, fraud: 38 },
    { month: 'Oct', transactions: 320000, farms: 1890, fraud: 41 },
    { month: 'Nov', transactions: 380000, farms: 2150, fraud: 29 },
    { month: 'Dec', transactions: 425000, farms: 2380, fraud: 33 },
    { month: 'Jan', transactions: 465000, farms: 2650, fraud: 27 }
  ];

  const fraudPreventionData = [
    { name: 'Fake QR Codes', value: 45, color: '#DC2626' },
    { name: 'Identity Theft', value: 28, color: '#D97706' },
    { name: 'Data Tampering', value: 18, color: '#059669' },
    { name: 'Duplicate Claims', value: 9, color: '#2563EB' }
  ];

  const regionData = [
    { region: 'North America', farms: 6800, transactions: 1200000 },
    { region: 'Europe', farms: 4200, transactions: 850000 },
    { region: 'Asia Pacific', farms: 3100, transactions: 620000 },
    { region: 'Latin America', farms: 1320, transactions: 177563 }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'trends', label: 'Trends', icon: 'TrendingUp' },
    { id: 'fraud', label: 'Fraud Prevention', icon: 'Shield' },
    { id: 'regions', label: 'Regional Data', icon: 'Globe' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Platform Statistics</h3>
        <p className="text-muted-foreground">Real-time insights into platform performance and impact</p>
      </div>
      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-background rounded-lg border border-border p-4 text-center">
          <Icon name="Activity" size={24} className="text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground mb-1">
            {animatedStats?.totalTransactions?.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Total Transactions</div>
        </div>
        
        <div className="bg-background rounded-lg border border-border p-4 text-center">
          <Icon name="MapPin" size={24} className="text-success mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground mb-1">
            {animatedStats?.verifiedFarms?.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Verified Farms</div>
        </div>
        
        <div className="bg-background rounded-lg border border-border p-4 text-center">
          <Icon name="ShieldCheck" size={24} className="text-warning mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground mb-1">
            {animatedStats?.preventedFraud?.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Fraud Cases Prevented</div>
        </div>
        
        <div className="bg-background rounded-lg border border-border p-4 text-center">
          <Icon name="Users" size={24} className="text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground mb-1">
            {animatedStats?.activeUsers?.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Active Users</div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border pb-4">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === tab?.id
                ? 'bg-primary text-primary-foreground shadow-organic'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Platform Growth Overview</h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                    <YAxis stroke="var(--color-muted-foreground)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--color-background)', 
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="transactions" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Growth Trends</h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                    <YAxis stroke="var(--color-muted-foreground)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--color-background)', 
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line type="monotone" dataKey="farms" stroke="var(--color-primary)" strokeWidth={3} dot={{ fill: 'var(--color-primary)' }} />
                    <Line type="monotone" dataKey="transactions" stroke="var(--color-secondary)" strokeWidth={3} dot={{ fill: 'var(--color-secondary)' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fraud' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Fraud Prevention Breakdown</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={fraudPreventionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100)?.toFixed(0)}%`}
                      >
                        {fraudPreventionData?.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry?.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  {fraudPreventionData?.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item?.color }}></div>
                        <span className="text-sm font-medium text-foreground">{item?.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item?.value} cases</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'regions' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Regional Distribution</h4>
              <div className="space-y-4">
                {regionData?.map((region, index) => (
                  <div key={index} className="bg-background rounded-lg border border-border p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-base font-medium text-foreground">{region?.region}</h5>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{region?.farms?.toLocaleString()} farms</span>
                        <span>{region?.transactions?.toLocaleString()} transactions</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(region?.farms / 15420) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformStatistics;