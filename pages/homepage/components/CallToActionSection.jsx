import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToActionSection = () => {
  const quickActions = [
    {
      title: "Start Scanning",
      description: "Discover the story behind your food instantly",
      icon: "QrCode",
      path: "/qr-scanner-portal",
      color: "bg-conversion hover:bg-conversion/90",
      textColor: "text-conversion-foreground"
    },
    {
      title: "Register Farm",
      description: "Join thousands of farmers building trust",
      icon: "Sprout",
      path: "/farmer-registration-dashboard",
      color: "bg-primary hover:bg-primary/90",
      textColor: "text-primary-foreground"
    },
    {
      title: "Explore Marketplace",
      description: "Connect directly with conscious consumers",
      icon: "Store",
      path: "/community-marketplace",
      color: "bg-secondary hover:bg-secondary/90",
      textColor: "text-secondary-foreground"
    }
  ];

  const benefits = [
    "Increase farmer income by up to 55%",
    "Reduce food fraud and build consumer trust",
    "Connect consumers directly to their food sources",
    "Streamline supply chain transparency",
    "Support sustainable farming practices"
  ];

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Transform Food Transparency
            <br />
            <span className="text-primary">One Scan at a Time</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the agricultural revolution that's building trust, empowering farmers, and giving consumers the transparency they deserve. Start your journey today.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {benefits?.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground text-center md:text-left">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quickActions?.map((action, index) => (
            <Link key={index} to={action?.path} className="group">
              <div className="bg-card rounded-xl p-8 border border-border shadow-organic hover:shadow-lg transition-all duration-300 group-hover:scale-105 h-full">
                <div className="text-center">
                  <div className={`w-16 h-16 ${action?.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:animate-grow`}>
                    <Icon name={action?.icon} size={32} className={action?.textColor} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{action?.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{action?.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-muted">
                    Get Started
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-organic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Stay Updated on Agricultural Innovation
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get the latest insights on blockchain technology in agriculture, farmer success stories, and platform updates delivered to your inbox.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Mail" size={16} className="text-primary mr-2" />
                  Weekly insights
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="Users" size={16} className="text-primary mr-2" />
                  Farmer spotlights
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icon name="TrendingUp" size={16} className="text-primary mr-2" />
                  Market trends
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    className="mt-1 mr-3 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="newsletter-consent" className="text-sm text-muted-foreground">
                    I agree to receive marketing communications and understand I can unsubscribe at any time.
                  </label>
                </div>
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Subscribe to Updates
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Trusted by farmers, retailers, and consumers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center">
              <Icon name="Users" size={20} className="text-primary mr-2" />
              <span className="text-sm font-medium">18,456+ Farmers</span>
            </div>
            <div className="flex items-center">
              <Icon name="Store" size={20} className="text-conversion mr-2" />
              <span className="text-sm font-medium">2,847+ Retailers</span>
            </div>
            <div className="flex items-center">
              <Icon name="Scan" size={20} className="text-secondary mr-2" />
              <span className="text-sm font-medium">2.8M+ Scans</span>
            </div>
            <div className="flex items-center">
              <Icon name="Globe" size={20} className="text-primary mr-2" />
              <span className="text-sm font-medium">45+ Countries</span>
            </div>
          </div>
        </div>

        {/* Emergency Contact for Support */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-card rounded-full px-6 py-3 border border-border shadow-organic">
            <Icon name="HelpCircle" size={16} className="text-primary mr-2" />
            <span className="text-sm text-muted-foreground mr-4">Need help getting started?</span>
            <Link to="/trust-verification-hub" className="text-sm font-medium text-primary hover:underline">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;