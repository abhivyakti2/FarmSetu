import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const FraudPreventionCenter = () => {
  const [reportFormOpen, setReportFormOpen] = useState(false);
  const [reportType, setReportType] = useState('');
  const [reportDescription, setReportDescription] = useState('');

  const fraudTypes = [
    {
      id: 'fake-qr',
      title: "Fake QR Codes",
      description: "Counterfeit QR codes that lead to false information or malicious websites",
      warning: "High Risk",
      examples: [
        "QR codes printed on stickers placed over genuine codes",
        "QR codes that redirect to non-AgriTrace websites",
        "Codes that ask for personal information or payment"
      ],
      prevention: [
        "Always verify the URL starts with our official domain",
        "Check for official AgriTrace branding on the page",
        "Be suspicious of QR codes on loose stickers"
      ]
    },
    {
      id: 'identity-theft',
      title: "Farm Identity Theft",
      description: "Fraudsters using legitimate farm names and certifications for fake products",
      warning: "Medium Risk",
      examples: [
        "Products claiming to be from certified organic farms without verification",
        "Use of stolen farm photos and stories",
        "Fake certification badges and awards"
      ],
      prevention: [
        "Verify farm information through our official database",
        "Look for blockchain verification badges",
        "Cross-reference with certification authority websites"
      ]
    },
    {
      id: 'data-tampering',
      title: "Data Tampering",
      description: "Attempts to modify or falsify agricultural data and certifications",
      warning: "Low Risk",
      examples: [
        "Altered harvest dates or locations",
        "Modified quality test results",
        "Fake certification expiration dates"
      ],
      prevention: [
        "Blockchain records are immutable and cannot be changed",
        "All data is cryptographically signed",
        "Multiple verification checkpoints prevent tampering"
      ]
    }
  ];

  const reportingSteps = [
    {
      step: 1,
      title: "Identify the Issue",
      description: "Take screenshots or photos of suspicious QR codes, products, or information",
      icon: "Camera"
    },
    {
      step: 2,
      title: "Gather Information",
      description: "Note the location, time, and any relevant details about the suspicious activity",
      icon: "FileText"
    },
    {
      step: 3,
      title: "Submit Report",
      description: "Use our secure reporting form to submit your findings to our fraud prevention team",
      icon: "Send"
    },
    {
      step: 4,
      title: "Follow Up",
      description: "Our team will investigate and provide updates on the status of your report",
      icon: "CheckCircle"
    }
  ];

  const handleReportSubmit = (e) => {
    e?.preventDefault();
    // Mock submission
    alert('Thank you for your report. Our fraud prevention team will investigate this issue within 24 hours.');
    setReportFormOpen(false);
    setReportType('');
    setReportDescription('');
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Fraud Prevention Center</h3>
          <p className="text-muted-foreground">Learn to identify and report suspicious activities</p>
        </div>
        <Button 
          variant="destructive" 
          onClick={() => setReportFormOpen(true)}
          className="flex items-center space-x-2"
        >
          <Icon name="AlertTriangle" size={16} />
          <span>Report Fraud</span>
        </Button>
      </div>
      {/* Fraud Types */}
      <div className="space-y-6 mb-8">
        <h4 className="text-lg font-semibold text-foreground">Common Fraud Types</h4>
        {fraudTypes?.map((fraud) => (
          <div key={fraud?.id} className="bg-background rounded-lg border border-border p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h5 className="text-base font-semibold text-foreground mb-2">{fraud?.title}</h5>
                <p className="text-sm text-muted-foreground mb-3">{fraud?.description}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                fraud?.warning === 'High Risk' ? 'bg-destructive/10 text-destructive' :
                fraud?.warning === 'Medium Risk'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
              }`}>
                {fraud?.warning}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h6 className="text-sm font-medium text-foreground mb-2">Common Examples:</h6>
                <ul className="space-y-2">
                  {fraud?.examples?.map((example, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="AlertCircle" size={14} className="text-warning mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h6 className="text-sm font-medium text-foreground mb-2">Prevention Tips:</h6>
                <ul className="space-y-2">
                  {fraud?.prevention?.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Shield" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* How to Identify Authentic QR Codes */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-foreground mb-4">How to Identify Authentic QR Codes</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
              <h5 className="text-base font-semibold text-success mb-3 flex items-center">
                <Icon name="CheckCircle" size={16} className="mr-2" />
                Authentic QR Code Features
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Official AgriTrace branding visible</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">High-quality printing with clear edges</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Integrated into product packaging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Links to agritrace.com domain</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <h5 className="text-base font-semibold text-destructive mb-3 flex items-center">
                <Icon name="XCircle" size={16} className="mr-2" />
                Suspicious QR Code Warning Signs
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Stickers placed over original codes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Poor print quality or blurry edges</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Links to unfamiliar websites</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm text-foreground">Asks for personal information</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Reporting Process */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-foreground mb-4">How to Report Suspicious Activity</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportingSteps?.map((step) => (
            <div key={step?.step} className="bg-background rounded-lg border border-border p-4 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={step?.icon} size={20} className="text-primary" />
              </div>
              <div className="text-sm font-medium text-primary mb-2">Step {step?.step}</div>
              <h5 className="text-sm font-semibold text-foreground mb-2">{step?.title}</h5>
              <p className="text-xs text-muted-foreground">{step?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Fraud Alerts */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-4">Recent Fraud Alerts</h4>
        <div className="space-y-3">
          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="AlertTriangle" size={16} className="text-warning mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground mb-1">Fake QR Codes Detected in California</div>
                <div className="text-xs text-muted-foreground mb-2">January 10, 2025 - Multiple reports of counterfeit QR codes found on organic produce in Los Angeles area stores.</div>
                <div className="text-xs text-warning">Status: Under Investigation</div>
              </div>
            </div>
          </div>
          
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground mb-1">Fraudulent Farm Identity Resolved</div>
                <div className="text-xs text-muted-foreground mb-2">January 8, 2025 - Fake "Green Valley Organic" operation shut down after community reports.</div>
                <div className="text-xs text-success">Status: Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Report Form Modal */}
      {reportFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg border border-border max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-foreground">Report Suspicious Activity</h4>
              <Button variant="ghost" size="icon" onClick={() => setReportFormOpen(false)}>
                <Icon name="X" size={20} />
              </Button>
            </div>
            
            <form onSubmit={handleReportSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Type of Issue</label>
                <select 
                  value={reportType}
                  onChange={(e) => setReportType(e?.target?.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                  required
                >
                  <option value="">Select issue type</option>
                  <option value="fake-qr">Fake QR Code</option>
                  <option value="identity-theft">Farm Identity Theft</option>
                  <option value="data-tampering">Data Tampering</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
                <textarea 
                  value={reportDescription}
                  onChange={(e) => setReportDescription(e?.target?.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground h-24 resize-none"
                  placeholder="Please provide details about the suspicious activity..."
                  required
                />
              </div>
              
              <div className="flex space-x-3">
                <Button type="submit" variant="destructive" fullWidth>
                  Submit Report
                </Button>
                <Button type="button" variant="outline" fullWidth onClick={() => setReportFormOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FraudPreventionCenter;