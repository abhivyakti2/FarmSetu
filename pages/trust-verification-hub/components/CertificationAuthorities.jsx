import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationAuthorities = () => {
  const authorities = [
    {
      id: 1,
      name: "USDA Organic Certification",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      type: "Government Agency",
      established: "1990",
      certifications: 15420,
      specialties: ["Organic Standards", "Soil Health", "Pesticide-Free"],
      description: "The United States Department of Agriculture's organic certification program ensures agricultural products meet strict organic standards.",
      verificationProcess: [
        "On-site farm inspections",
        "Soil and water testing",
        "Record keeping verification",
        "Annual compliance reviews"
      ],
      trustScore: 98,
      status: "active"
    },
    {
      id: 2,
      name: "Fair Trade USA",
      logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=100&h=100&fit=crop&crop=center",
      type: "Non-Profit Organization",
      established: "1998",
      certifications: 8750,
      specialties: ["Fair Labor", "Sustainable Farming", "Community Development"],
      description: "Fair Trade USA promotes sustainable livelihoods for farmers and workers while protecting the environment.",
      verificationProcess: [
        "Worker welfare assessments",
        "Environmental impact studies",
        "Community development verification",
        "Supply chain audits"
      ],
      trustScore: 96,
      status: "active"
    },
    {
      id: 3,
      name: "Global Food Safety Initiative",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop&crop=center",
      type: "International Standards Body",
      established: "2000",
      certifications: 12300,
      specialties: ["Food Safety", "HACCP", "Quality Management"],
      description: "GFSI provides globally recognized food safety standards and certification schemes for the food industry.",
      verificationProcess: [
        "Hazard analysis protocols",
        "Critical control point verification",
        "Traceability system audits",
        "Continuous monitoring programs"
      ],
      trustScore: 97,
      status: "active"
    },
    {
      id: 4,
      name: "Rainforest Alliance",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop&crop=center",
      type: "Environmental Organization",
      established: "1987",
      certifications: 6890,
      specialties: ["Biodiversity", "Climate Action", "Human Rights"],
      description: "Rainforest Alliance works to conserve biodiversity and ensure sustainable livelihoods through responsible farming practices.",
      verificationProcess: [
        "Biodiversity impact assessments",
        "Climate resilience evaluations",
        "Social responsibility audits",
        "Ecosystem health monitoring"
      ],
      trustScore: 95,
      status: "active"
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Certification Authorities</h3>
        <p className="text-muted-foreground">Trusted organizations that verify and certify agricultural practices</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {authorities?.map((authority) => (
          <div key={authority?.id} className="bg-background rounded-lg border border-border p-5 hover:shadow-organic transition-all duration-300">
            {/* Header */}
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                <Image 
                  src={authority?.logo} 
                  alt={authority?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-foreground mb-1">{authority?.name}</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm text-muted-foreground">{authority?.type}</span>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Est. {authority?.established}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Award" size={14} className="text-primary" />
                    <span className="text-sm text-foreground">{authority?.certifications?.toLocaleString()} certifications</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${authority?.status === 'active' ? 'bg-success' : 'bg-warning'}`}></div>
                <span className="text-xs text-muted-foreground capitalize">{authority?.status}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4">{authority?.description}</p>

            {/* Specialties */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-foreground mb-2">Specialties</h5>
              <div className="flex flex-wrap gap-2">
                {authority?.specialties?.map((specialty, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Process */}
            <div className="mb-4">
              <h5 className="text-sm font-medium text-foreground mb-2">Verification Process</h5>
              <div className="space-y-2">
                {authority?.verificationProcess?.map((step, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-xs text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Score */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">Trust Score</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${authority?.trustScore}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-primary">{authority?.trustScore}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">4</div>
          <div className="text-xs text-muted-foreground">Active Partners</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">43K+</div>
          <div className="text-xs text-muted-foreground">Total Certifications</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">96.5%</div>
          <div className="text-xs text-muted-foreground">Avg Trust Score</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">100%</div>
          <div className="text-xs text-muted-foreground">Verified Partners</div>
        </div>
      </div>
    </div>
  );
};

export default CertificationAuthorities;