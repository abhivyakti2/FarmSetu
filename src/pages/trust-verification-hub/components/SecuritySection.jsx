import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SecuritySection = () => {
  const [activeFeature, setActiveFeature] = useState('encryption');

  const securityFeatures = {
    encryption: {
      title: "End-to-End Encryption",
      description: "All data is encrypted using military-grade AES-256 encryption before being stored on the blockchain.",
      icon: "Shield",
      details: [
        "256-bit encryption keys protect all sensitive data",
        "Zero-knowledge architecture ensures privacy",
        "Encrypted data transmission between all parties",
        "Regular security audits by third-party experts"
      ],
      visual: "🔐"
    },
    immutable: {
      title: "Immutable Records",
      description: "Once data is recorded on the blockchain, it cannot be altered, deleted, or tampered with.",
      icon: "Lock",
      details: [
        "Cryptographic hashing prevents data manipulation",
        "Distributed ledger across multiple nodes",
        "Consensus mechanism validates all transactions",
        "Permanent audit trail for all activities"
      ],
      visual: "⛓️"
    },
    fraud: {
      title: "Fraud Prevention",
      description: "Advanced algorithms and verification processes detect and prevent fraudulent activities.",
      icon: "AlertTriangle",
      details: [
        "Real-time anomaly detection systems",
        "Multi-factor authentication for all users",
        "Automated fraud pattern recognition",
        "Instant alerts for suspicious activities"
      ],
      visual: "🛡️"
    },
    verification: {
      title: "Multi-Layer Verification",
      description: "Multiple verification checkpoints ensure data authenticity at every stage.",
      icon: "CheckCircle",
      details: [
        "Digital signatures from certified authorities",
        "GPS location verification for authenticity",
        "Time-stamped records with atomic clocks",
        "Cross-reference validation with external databases"
      ],
      visual: "✅"
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Security & Trust Measures</h3>
        <p className="text-muted-foreground">Advanced security features protecting your agricultural data</p>
      </div>
      {/* Feature Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(securityFeatures)?.map(([key, feature]) => (
          <button
            key={key}
            onClick={() => setActiveFeature(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeFeature === key
                ? 'bg-primary text-primary-foreground shadow-organic'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={feature?.icon} size={16} />
            <span>{feature?.title}</span>
          </button>
        ))}
      </div>
      {/* Active Feature Display */}
      <div className="bg-muted/30 rounded-lg p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="text-4xl">{securityFeatures?.[activeFeature]?.visual}</div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {securityFeatures?.[activeFeature]?.title}
            </h4>
            <p className="text-muted-foreground mb-4">
              {securityFeatures?.[activeFeature]?.description}
            </p>
          </div>
        </div>

        {/* Feature Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityFeatures?.[activeFeature]?.details?.map((detail, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-foreground">{detail}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Security Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
          <div className="text-xs text-muted-foreground">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">256-bit</div>
          <div className="text-xs text-muted-foreground">Encryption</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">0</div>
          <div className="text-xs text-muted-foreground">Data Breaches</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">24/7</div>
          <div className="text-xs text-muted-foreground">Monitoring</div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;