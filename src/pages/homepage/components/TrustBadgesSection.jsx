import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBadgesSection = () => {
  const securityFeatures = [
    {
      icon: "Shield",
      title: "Blockchain Security",
      description: "Immutable records protected by advanced cryptography"
    },
    {
      icon: "Lock",
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest"
    },
    {
      icon: "Eye",
      title: "Full Transparency",
      description: "Complete supply chain visibility for all stakeholders"
    },
    {
      icon: "CheckCircle",
      title: "Verified Authenticity",
      description: "Tamper-proof verification of product authenticity"
    }
  ];

  const certifications = [
    {
      name: "USDA Organic",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop",
      description: "United States Department of Agriculture Organic Certification"
    },
    {
      name: "Fair Trade",
      logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=80&h=80&fit=crop",
      description: "Fair Trade Certified for ethical farming practices"
    },
    {
      name: "ISO 27001",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=80&h=80&fit=crop",
      description: "Information Security Management System Certified"
    },
    {
      name: "Blockchain Verified",
      logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=80&h=80&fit=crop",
      description: "Blockchain Technology Verification Standard"
    },
    {
      name: "Food Safety",
      logo: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=80&h=80&fit=crop",
      description: "Global Food Safety Initiative Certified"
    },
    {
      name: "Carbon Neutral",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=80&h=80&fit=crop",
      description: "Carbon Neutral Certified Operations"
    }
  ];

  const partnerships = [
    {
      name: "Whole Foods Market",
      logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=120&h=60&fit=crop"
    },
    {
      name: "Walmart",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop"
    },
    {
      name: "Kroger",
      logo: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=120&h=60&fit=crop"
    },
    {
      name: "Target",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop"
    },
    {
      name: "Costco",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop"
    }
  ];

  return (
    <section className="bg-card/30 py-16 lg:py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built on Trust & Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Enterprise-grade security meets agricultural transparency. Your data and transactions are protected by the same technology that secures global financial systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures?.map((feature, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-organic hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Industry Certifications</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Recognized and certified by leading agricultural and technology organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications?.map((cert, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg p-4 border border-border hover:shadow-organic transition-all duration-300 group cursor-pointer"
                title={cert?.description}
              >
                <div className="aspect-square bg-muted/50 rounded-lg mb-3 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h4 className="text-xs font-medium text-foreground text-center leading-tight">{cert?.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Retail Partnerships */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Trusted by Leading Retailers</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Major grocery chains and retailers trust AgriTrace to provide transparency for their customers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partnerships?.map((partner, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-organic transition-all duration-300 group"
              >
                <div className="aspect-[2/1] bg-muted/30 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Icon name="Store" size={24} className="text-muted-foreground group-hover:text-primary transition-colors mx-auto mb-2" />
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {partner?.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="bg-gradient-to-r from-primary/5 via-conversion/5 to-secondary/5 rounded-xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-conversion mb-2">256-bit</div>
              <div className="text-sm text-muted-foreground">Encryption Standard</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Security Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-sm text-muted-foreground">Security Breaches</div>
            </div>
          </div>
        </div>

        {/* Security Commitment */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-card rounded-full px-6 py-3 border border-border shadow-organic">
            <Icon name="Shield" size={20} className="text-primary mr-3" />
            <span className="text-sm font-medium text-foreground">
              Your data is protected by enterprise-grade security
            </span>
            <Icon name="ExternalLink" size={16} className="text-muted-foreground ml-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;