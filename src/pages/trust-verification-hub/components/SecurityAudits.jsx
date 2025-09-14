import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityAudits = () => {
  const [selectedAudit, setSelectedAudit] = useState(null);

  const auditReports = [
    {
      id: 1,
      title: "Blockchain Security Assessment 2025",
      auditor: "CyberSec Solutions",
      date: "2025-01-05",
      type: "Blockchain Security",
      status: "Completed",
      score: "A+",
      summary: "Comprehensive evaluation of blockchain infrastructure, smart contracts, and cryptographic implementations.",
      findings: {
        critical: 0,
        high: 0,
        medium: 2,
        low: 5,
        info: 8
      },
      keyFindings: [
        "All critical security measures properly implemented",
        "Smart contract logic verified and secure",
        "Encryption protocols meet industry standards",
        "Minor recommendations for performance optimization"
      ],
      recommendations: [
        "Implement additional monitoring for edge cases",
        "Update documentation for new security features",
        "Consider implementing advanced threat detection"
      ],
      compliance: ["SOC 2 Type II", "ISO 27001", "GDPR", "CCPA"]
    },
    {
      id: 2,
      title: "Data Privacy & Compliance Audit",
      auditor: "Privacy Guard Inc.",
      date: "2024-12-15",
      type: "Privacy & Compliance",
      status: "Completed",
      score: "A",
      summary: "Thorough review of data handling practices, privacy controls, and regulatory compliance measures.",
      findings: {
        critical: 0,
        high: 1,
        medium: 3,
        low: 4,
        info: 6
      },
      keyFindings: [
        "Strong data encryption and access controls",
        "Comprehensive privacy policy implementation",
        "Effective user consent management",
        "Minor gaps in data retention policies"
      ],
      recommendations: [
        "Enhance automated data deletion processes",
        "Implement additional user privacy controls",
        "Update privacy notices for clarity"
      ],
      compliance: ["GDPR", "CCPA", "PIPEDA", "LGPD"]
    },
    {
      id: 3,
      title: "Infrastructure Security Review",
      auditor: "SecureCloud Auditors",
      date: "2024-11-20",
      type: "Infrastructure",
      status: "Completed",
      score: "A+",
      summary: "Evaluation of cloud infrastructure, network security, and operational security practices.",
      findings: {
        critical: 0,
        high: 0,
        medium: 1,
        low: 3,
        info: 7
      },
      keyFindings: [
        "Robust cloud security configuration",
        "Effective network segmentation and monitoring",
        "Strong access control and authentication",
        "Excellent incident response procedures"
      ],
      recommendations: [
        "Implement additional backup redundancy",
        "Enhance monitoring dashboard capabilities",
        "Consider multi-region deployment"
      ],
      compliance: ["SOC 2 Type II", "ISO 27001", "PCI DSS"]
    },
    {
      id: 4,
      title: "Application Security Testing",
      auditor: "AppSec Experts",
      date: "2024-10-10",
      type: "Application Security",
      status: "Completed",
      score: "A",
      summary: "Comprehensive testing of web application security, including penetration testing and code review.",
      findings: {
        critical: 0,
        high: 0,
        medium: 4,
        low: 6,
        info: 9
      },
      keyFindings: [
        "No critical vulnerabilities identified",
        "Strong input validation and sanitization",
        "Effective session management",
        "Minor improvements needed in error handling"
      ],
      recommendations: [
        "Implement additional rate limiting",
        "Enhance error message security",
        "Update third-party dependencies"
      ],
      compliance: ["OWASP Top 10", "SANS Top 25"]
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      issuer: "American Institute of CPAs",
      validUntil: "2025-12-31",
      description: "Security, availability, processing integrity, confidentiality, and privacy controls",
      status: "Active"
    },
    {
      name: "ISO 27001",
      issuer: "International Organization for Standardization",
      validUntil: "2025-11-15",
      description: "Information security management system certification",
      status: "Active"
    },
    {
      name: "GDPR Compliance",
      issuer: "European Data Protection Board",
      validUntil: "Ongoing",
      description: "General Data Protection Regulation compliance certification",
      status: "Active"
    },
    {
      name: "PCI DSS Level 1",
      issuer: "PCI Security Standards Council",
      validUntil: "2025-08-20",
      description: "Payment Card Industry Data Security Standard",
      status: "Active"
    }
  ];

  const getScoreColor = (score) => {
    if (score === 'A+') return 'text-success';
    if (score === 'A') return 'text-success';
    if (score === 'B') return 'text-warning';
    return 'text-destructive';
  };

  const getFindingColor = (type) => {
    switch (type) {
      case 'critical': return 'text-destructive';
      case 'high': return 'text-warning';
      case 'medium': return 'text-accent';
      case 'low': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Security Audits & Compliance</h3>
        <p className="text-muted-foreground">Third-party security assessments and compliance certifications</p>
      </div>
      {/* Audit Reports */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-foreground mb-4">Recent Audit Reports</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {auditReports?.map((audit) => (
            <div key={audit?.id} className="bg-background rounded-lg border border-border p-5 hover:shadow-organic transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h5 className="text-base font-semibold text-foreground mb-1">{audit?.title}</h5>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <span>{audit?.auditor}</span>
                    <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                    <span>{audit?.date}</span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {audit?.type}
                  </span>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getScoreColor(audit?.score)} mb-1`}>
                    {audit?.score}
                  </div>
                  <div className="text-xs text-muted-foreground">Security Score</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{audit?.summary}</p>

              {/* Findings Summary */}
              <div className="grid grid-cols-5 gap-2 mb-4">
                {Object.entries(audit?.findings)?.map(([type, count]) => (
                  <div key={type} className="text-center">
                    <div className={`text-lg font-bold ${getFindingColor(type)}`}>{count}</div>
                    <div className="text-xs text-muted-foreground capitalize">{type}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={14} className="text-success" />
                  <span className="text-xs text-success">{audit?.status}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedAudit(audit)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Compliance Certifications */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-foreground mb-4">Compliance Certifications</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications?.map((cert, index) => (
            <div key={index} className="bg-background rounded-lg border border-border p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h5 className="text-base font-semibold text-foreground mb-1">{cert?.name}</h5>
                  <p className="text-sm text-muted-foreground mb-2">{cert?.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert?.description}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-xs text-success">{cert?.status}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">Valid until: {cert?.validUntil}</span>
                <Icon name="CheckCircle" size={16} className="text-success" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Security Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">100%</div>
          <div className="text-xs text-muted-foreground">Audit Pass Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">0</div>
          <div className="text-xs text-muted-foreground">Critical Issues</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">4</div>
          <div className="text-xs text-muted-foreground">Active Certifications</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">24/7</div>
          <div className="text-xs text-muted-foreground">Security Monitoring</div>
        </div>
      </div>
      {/* Audit Detail Modal */}
      {selectedAudit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg border border-border max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-border p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-foreground">{selectedAudit?.title}</h4>
                <Button variant="ghost" size="icon" onClick={() => setSelectedAudit(null)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Audit Overview */}
              <div>
                <h5 className="text-base font-semibold text-foreground mb-3">Audit Overview</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Auditor:</span>
                    <span className="text-foreground ml-2">{selectedAudit?.auditor}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Date:</span>
                    <span className="text-foreground ml-2">{selectedAudit?.date}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground ml-2">{selectedAudit?.type}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Score:</span>
                    <span className={`ml-2 font-bold ${getScoreColor(selectedAudit?.score)}`}>
                      {selectedAudit?.score}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div>
                <h5 className="text-base font-semibold text-foreground mb-3">Key Findings</h5>
                <ul className="space-y-2">
                  {selectedAudit?.keyFindings?.map((finding, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommendations */}
              <div>
                <h5 className="text-base font-semibold text-foreground mb-3">Recommendations</h5>
                <ul className="space-y-2">
                  {selectedAudit?.recommendations?.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance Standards */}
              <div>
                <h5 className="text-base font-semibold text-foreground mb-3">Compliance Standards</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedAudit?.compliance?.map((standard, index) => (
                    <span key={index} className="px-3 py-1 bg-success/10 text-success text-sm rounded-full">
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityAudits;