import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import BlockchainExplorer from './components/BlockchainExplorer';
import SecuritySection from './components/SecuritySection';
import CertificationAuthorities from './components/CertificationAuthorities';
import PlatformStatistics from './components/PlatformStatistics';
import EducationalContent from './components/EducationalContent';
import FraudPreventionCenter from './components/FraudPreventionCenter';
import InteractiveDemo from './components/InteractiveDemo';
import SecurityAudits from './components/SecurityAudits';

const TrustVerificationHub = () => {
  const trustMetrics = [
    {
      icon: "Shield",
      value: "99.9%",
      label: "Security Uptime",
      description: "Continuous protection"
    },
    {
      icon: "Lock",
      value: "256-bit",
      label: "Encryption Standard",
      description: "Military-grade security"
    },
    {
      icon: "Users",
      value: "89,650+",
      label: "Verified Users",
      description: "Trusted community"
    },
    {
      icon: "Award",
      value: "15,420",
      label: "Certified Farms",
      description: "Quality assured"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Shield" size={16} />
              <span>Blockchain-Powered Transparency</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Trust & Verification
              <span className="block text-primary">Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how blockchain technology creates unbreakable trust in the agricultural supply chain. 
              Explore our security measures, certifications, and transparency initiatives that protect your food journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center space-x-2">
                <Icon name="Play" size={20} />
                <span>Watch Demo</span>
              </button>
              <button className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-muted transition-all duration-300 flex items-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Security Report</span>
              </button>
            </div>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustMetrics?.map((metric, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-organic transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{metric?.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{metric?.label}</div>
                <div className="text-xs text-muted-foreground">{metric?.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-16 space-y-16">
        {/* Blockchain Explorer */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Live Blockchain Explorer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See real-time agricultural data being recorded on our blockchain. Every transaction is transparent, 
              immutable, and verifiable by anyone.
            </p>
          </div>
          <BlockchainExplorer />
        </section>

        {/* Security Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Advanced Security Measures</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn about the multiple layers of security protecting your agricultural data and ensuring 
              complete transparency without compromising privacy.
            </p>
          </div>
          <SecuritySection />
        </section>

        {/* Interactive Demo */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience the Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow a sample product from farm to table and see how our blockchain technology 
              creates complete transparency at every step.
            </p>
          </div>
          <InteractiveDemo />
        </section>

        {/* Platform Statistics */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Platform Impact & Analytics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time insights into our platform's performance, fraud prevention success, 
              and positive impact on the agricultural community.
            </p>
          </div>
          <PlatformStatistics />
        </section>

        {/* Certification Authorities */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted Certification Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the respected organizations that verify and certify agricultural practices, 
              ensuring the highest standards of quality and authenticity.
            </p>
          </div>
          <CertificationAuthorities />
        </section>

        {/* Fraud Prevention Center */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Fraud Prevention & Reporting</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn to identify suspicious activities and help us maintain the integrity of the 
              agricultural supply chain through community vigilance.
            </p>
          </div>
          <FraudPreventionCenter />
        </section>

        {/* Security Audits */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Third-Party Security Audits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Independent security assessments and compliance certifications that validate 
              our commitment to protecting your data and maintaining system integrity.
            </p>
          </div>
          <SecurityAudits />
        </section>

        {/* Educational Content */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Learn & Understand</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational resources to help you understand blockchain technology, 
              food safety, and sustainable agriculture practices.
            </p>
          </div>
          <EducationalContent />
        </section>
      </main>
      {/* Call to Action Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience True Transparency?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of farmers, distributors, and consumers who trust AgriTrace 
            for authentic, transparent food supply chains.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-all duration-300 flex items-center space-x-2">
              <Icon name="QrCode" size={20} />
              <span>Scan Your First Product</span>
            </button>
            <button className="border border-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-all duration-300 flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span>Join Our Community</span>
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-foreground">AgriTrace</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building trust in agriculture through blockchain transparency.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">QR Scanner</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Farm Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Supply Chain</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Marketplace</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Trust & Security</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Security Audits</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Report Fraud</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} AgriTrace. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrustVerificationHub;