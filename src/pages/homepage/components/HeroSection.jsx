import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const stats = [
    { label: "Produce Items Tracked", value: "2,847,392", icon: "Package" },
    { label: "Farmers Empowered", value: "18,456", icon: "Users" },
    { label: "Fraud Cases Prevented", value: "3,247", icon: "Shield" }
  ];

  const userPaths = [
    {
      title: "I\'m a Farmer",
      description: "Register your farm and start building trust with consumers",
      icon: "Tractor",
      path: "/farmer-registration-dashboard",
      color: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground"
    },
    {
      title: "I\'m Shopping",
      description: "Scan QR codes to discover your food\'s journey",
      icon: "QrCode",
      path: "/qr-scanner-portal",
      color: "bg-conversion hover:bg-conversion/90",
      textColor: "text-conversion-foreground"
    },
    {
      title: "I\'m a Distributor",
      description: "Access your supply chain command center",
      icon: "Truck",
      path: "/supply-chain-command-center",
      color: "bg-secondary hover:bg-secondary/90",
      textColor: "text-secondary-foreground"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000"></div>
        
        {/* Network Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M200,400 Q400,300 600,400 T1000,350" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-500"/>
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Stats Counter */}
        <div className="text-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats?.map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-organic">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={stat?.icon} size={24} className="text-primary" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Every Scan Tells a Story of{' '}
            <span className="text-primary relative">
              Integrity
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12">
                <path d="M0,8 Q50,2 100,8 T200,8" stroke="var(--color-accent)" strokeWidth="3" fill="none" className="animate-pulse"/>
              </svg>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming agricultural transparency through blockchain technology. Connect consumers to farmers, 
            build trust through verification, and empower the entire food supply chain.
          </p>
        </div>

        {/* User Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {userPaths?.map((path, index) => (
            <Link key={index} to={path?.path} className="group">
              <div className="bg-card rounded-xl p-8 border border-border shadow-organic hover:shadow-lg transition-all duration-300 group-hover:scale-105 h-full">
                <div className="text-center">
                  <div className={`w-16 h-16 ${path?.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:animate-grow`}>
                    <Icon name={path?.icon} size={32} className={path?.textColor} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{path?.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{path?.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-muted">
                    Get Started
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile QR Scanner CTA */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <Link to="/qr-scanner-portal">
            <Button 
              size="lg" 
              className="bg-conversion hover:bg-conversion/90 rounded-full w-16 h-16 shadow-lg animate-harvest-pulse"
            >
              <Icon name="QrCode" size={24} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;