import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Farm Registration",
      subtitle: "Farmers join the network",
      description: "Farmers register their farms, upload certifications, and create detailed profiles showcasing their growing practices and commitment to quality.",
      icon: "Sprout",
      color: "bg-primary",
      features: [
        "Digital farm certification",
        "Crop variety documentation", 
        "Sustainable practice verification",
        "Quality standard compliance"
      ]
    },
    {
      id: 1,
      title: "QR Generation",
      subtitle: "Products get unique identities",
      description: "Each batch of produce receives a unique QR code containing immutable blockchain records of its journey from seed to harvest.",
      icon: "QrCode",
      color: "bg-conversion",
      features: [
        "Blockchain-secured QR codes",
        "Batch tracking integration",
        "Supply chain documentation",
        "Tamper-proof verification"
      ]
    },
    {
      id: 2,
      title: "Consumer Discovery",
      subtitle: "Stories come to life",
      description: "Consumers scan QR codes to instantly access the complete story of their food, from farmer profiles to growing conditions and quality certifications.",
      icon: "Search",
      color: "bg-secondary",
      features: [
        "Instant story access",
        "Farmer connection platform",
        "Quality certificate viewing",
        "Nutritional information"
      ]
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How AgriTrace Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps that transform agricultural transparency and build trust throughout the entire food supply chain
          </p>
        </div>

        {/* Desktop View - Horizontal Steps */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-border">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / steps?.length) * 100}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-3 gap-8">
              {steps?.map((step, index) => (
                <div 
                  key={step?.id}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Circle */}
                  <div className={`w-32 h-32 ${step?.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-organic transition-all duration-500 ${
                    activeStep === index ? 'shadow-lg' : ''
                  }`}>
                    <Icon name={step?.icon} size={48} className="text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step?.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{step?.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step?.description}</p>
                    
                    {/* Features */}
                    <div className={`transition-all duration-500 ${
                      activeStep === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                    } overflow-hidden`}>
                      <ul className="space-y-2">
                        {step?.features?.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <Icon name="Check" size={14} className="text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {steps?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-primary scale-125' : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View - Vertical Steps */}
        <div className="lg:hidden space-y-8">
          {steps?.map((step, index) => (
            <div key={step?.id} className="relative">
              {/* Connector Line */}
              {index < steps?.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-border"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Step Circle */}
                <div className={`w-16 h-16 ${step?.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-organic relative`}>
                  <Icon name={step?.icon} size={24} className="text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{step?.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{step?.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step?.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {step?.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={14} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-conversion/10 to-secondary/10 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Transform Your Supply Chain?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of farmers, distributors, and conscious consumers who are building a more transparent food system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Join as Farmer
              </button>
              <button className="btn-conversion px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                <Icon name="QrCode" size={20} className="mr-2" />
                Start Scanning
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;