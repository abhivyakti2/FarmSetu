import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FarmDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const dashboardStats = {
    totalBatches: 47,
    activeBatches: 12,
    totalEarnings: 8450.75,
    monthlyEarnings: 1250.30,
    consumerScans: 1847,
    averageRating: 4.8,
    trustScore: 95
  };

  const recentBatches = [
    {
      id: "AGT-2024-001",
      product: "Organic Tomatoes",
      quantity: "500 lbs",
      status: "In Transit",
      created: "2024-01-08",
      qrScans: 23,
      earnings: 125.50,
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "AGT-2024-002",
      product: "Fresh Lettuce",
      quantity: "200 heads",
      status: "Delivered",
      created: "2024-01-07",
      qrScans: 45,
      earnings: 89.25,
      image: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: "AGT-2024-003",
      product: "Bell Peppers",
      quantity: "300 lbs",
      status: "Processing",
      created: "2024-01-06",
      qrScans: 12,
      earnings: 156.75,
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "Harvest Spring Tomatoes",
      dueDate: "2024-01-15",
      priority: "high",
      type: "harvest"
    },
    {
      id: 2,
      title: "Update Organic Certification",
      dueDate: "2024-01-20",
      priority: "medium",
      type: "certification"
    },
    {
      id: 3,
      title: "Plant Summer Crops",
      dueDate: "2024-01-25",
      priority: "low",
      type: "planting"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processing': return 'text-warning bg-warning/10';
      case 'In Transit': return 'text-primary bg-primary/10';
      case 'Delivered': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-error bg-error/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'low': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'batches', label: 'My Batches', icon: 'Package' },
    { id: 'earnings', label: 'Earnings', icon: 'DollarSign' },
    { id: 'impact', label: 'My Impact', icon: 'TrendingUp' }
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Batches</p>
                    <p className="text-2xl font-bold text-foreground">{dashboardStats?.totalBatches}</p>
                  </div>
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Batches</p>
                    <p className="text-2xl font-bold text-foreground">{dashboardStats?.activeBatches}</p>
                  </div>
                  <Icon name="Truck" size={24} className="text-warning" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Earnings</p>
                    <p className="text-2xl font-bold text-foreground">${dashboardStats?.monthlyEarnings}</p>
                  </div>
                  <Icon name="DollarSign" size={24} className="text-success" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Trust Score</p>
                    <p className="text-2xl font-bold text-foreground">{dashboardStats?.trustScore}%</p>
                  </div>
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
              </div>
            </div>
            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Recent Batches</h3>
                <div className="space-y-4">
                  {recentBatches?.slice(0, 3)?.map((batch) => (
                    <div key={batch?.id} className="flex items-center space-x-4">
                      <Image
                        src={batch?.image}
                        alt={batch?.product}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{batch?.product}</p>
                        <p className="text-sm text-muted-foreground">{batch?.quantity}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(batch?.status)}`}>
                          {batch?.status}
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">${batch?.earnings}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Tasks</h3>
                <div className="space-y-4">
                  {upcomingTasks?.map((task) => (
                    <div key={task?.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">{task?.title}</p>
                          <p className="text-sm text-muted-foreground">{task?.dueDate}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task?.priority)}`}>
                        {task?.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'batches':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">My Produce Batches</h3>
              <Button variant="default" className="bg-primary hover:bg-primary/90" iconName="Plus">
                Create New Batch
              </Button>
            </div>
            <div className="grid gap-4">
              {recentBatches?.map((batch) => (
                <div key={batch?.id} className="bg-white rounded-lg p-6 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={batch?.image}
                        alt={batch?.product}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{batch?.product}</h4>
                        <p className="text-sm text-muted-foreground">Batch ID: {batch?.id}</p>
                        <p className="text-sm text-muted-foreground">Created: {batch?.created}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(batch?.status)}`}>
                      {batch?.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Quantity</p>
                      <p className="font-semibold text-foreground">{batch?.quantity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">QR Scans</p>
                      <p className="font-semibold text-foreground">{batch?.qrScans}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Earnings</p>
                      <p className="font-semibold text-success">${batch?.earnings}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" iconName="QrCode">
                      View QR Code
                    </Button>
                    <Button variant="outline" size="sm" iconName="BarChart3">
                      Track Journey
                    </Button>
                    <Button variant="outline" size="sm" iconName="Download">
                      Download Report
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'earnings':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-6 border border-success/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Total Earnings</h3>
                  <Icon name="TrendingUp" size={24} className="text-success" />
                </div>
                <p className="text-3xl font-bold text-success">${dashboardStats?.totalEarnings}</p>
                <p className="text-sm text-muted-foreground mt-2">+15% from last month</p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">This Month</h3>
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary">${dashboardStats?.monthlyEarnings}</p>
                <p className="text-sm text-muted-foreground mt-2">11 transactions</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Payment History</h3>
              <div className="space-y-4">
                {[
                  { date: '2024-01-10', amount: 125.50, source: 'Direct Consumer Sale', batch: 'AGT-2024-001' },
                  { date: '2024-01-09', amount: 89.25, source: 'Distributor Payment', batch: 'AGT-2024-002' },
                  { date: '2024-01-08', amount: 156.75, source: 'Marketplace Sale', batch: 'AGT-2024-003' }
                ]?.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                    <div>
                      <p className="font-medium text-foreground">{payment?.source}</p>
                      <p className="text-sm text-muted-foreground">{payment?.batch} • {payment?.date}</p>
                    </div>
                    <p className="font-semibold text-success">+${payment?.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6 border border-accent/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Transparency Impact</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">{dashboardStats?.consumerScans}</p>
                  <p className="text-sm text-muted-foreground">Consumer Scans</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">{dashboardStats?.averageRating}</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">{dashboardStats?.trustScore}%</p>
                  <p className="text-sm text-muted-foreground">Trust Score</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Consumer Feedback</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Sarah M.', comment: 'Love knowing where my tomatoes come from!', rating: 5 },
                    { name: 'John D.', comment: 'Fresh and transparent. Will buy again.', rating: 5 },
                    { name: 'Maria L.', comment: 'Great quality produce with full traceability.', rating: 4 }
                  ]?.map((feedback, index) => (
                    <div key={index} className="border-b border-border pb-3 last:border-b-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium text-foreground">{feedback?.name}</p>
                        <div className="flex items-center">
                          {[...Array(feedback?.rating)]?.map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="text-warning fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">"{feedback?.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">Sustainability Metrics</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Carbon Footprint Reduced</span>
                    <span className="font-semibold text-success">-23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Water Usage Optimized</span>
                    <span className="font-semibold text-primary">-15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Waste Reduction</span>
                    <span className="font-semibold text-accent">-30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Local Sales Increase</span>
                    <span className="font-semibold text-success">+45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Welcome back, John!</h2>
            <p className="text-primary-foreground/80">
              Your farm is making a real impact on food transparency
            </p>
          </div>
          <div className="hidden md:block">
            <Icon name="Tractor" size={64} className="text-primary-foreground/20" />
          </div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg border border-border p-1">
        <div className="flex space-x-1">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setSelectedTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default FarmDashboard;