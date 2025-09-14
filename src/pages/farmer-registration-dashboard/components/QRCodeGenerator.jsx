import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QRCodeGenerator = ({ batch, onClose }) => {
  const [selectedFormat, setSelectedFormat] = useState('standard');
  const [selectedSize, setSelectedSize] = useState('medium');

  const formatOptions = [
    {
      id: 'standard',
      name: 'Standard QR',
      description: 'Basic QR code with batch information',
      preview: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=AgriTrace-Standard'
    },
    {
      id: 'branded',
      name: 'Branded QR',
      description: 'QR code with AgriTrace branding',
      preview: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=AgriTrace-Branded'
    },
    {
      id: 'label',
      name: 'Product Label',
      description: 'Complete label with QR and product info',
      preview: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=AgriTrace-Label'
    }
  ];

  const sizeOptions = [
    { id: 'small', name: 'Small (1" x 1")', pixels: '200x200', description: 'For small packages' },
    { id: 'medium', name: 'Medium (2" x 2")', pixels: '400x400', description: 'Standard size' },
    { id: 'large', name: 'Large (3" x 3")', pixels: '600x600', description: 'For bulk containers' }
  ];

  const printingTips = [
    {
      icon: 'Printer',
      title: 'High-Quality Printing',
      description: 'Use 300 DPI or higher for best scanning results'
    },
    {
      icon: 'Palette',
      title: 'Contrast Matters',
      description: 'Ensure dark QR code on light background'
    },
    {
      icon: 'Shield',
      title: 'Waterproof Labels',
      description: 'Use waterproof materials for outdoor use'
    },
    {
      icon: 'Smartphone',
      title: 'Test Scanning',
      description: 'Always test QR codes before mass printing'
    }
  ];

  const handleDownload = (format) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${batch?.id || 'AGT-SAMPLE'}`;
    link.download = `${batch?.id || 'sample'}-qr-${format}.png`;
    link?.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h3 className="text-2xl font-bold text-foreground">QR Code Generator</h3>
            <p className="text-muted-foreground">
              Generate and print QR codes for batch: {batch?.id || 'Sample Batch'}
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={24} />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Options */}
            <div className="space-y-6">
              {/* Format Selection */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">QR Code Format</h4>
                <div className="space-y-3">
                  {formatOptions?.map((format) => (
                    <div
                      key={format?.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedFormat === format?.id
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedFormat(format?.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedFormat === format?.id
                            ? 'border-primary bg-primary' :'border-border'
                        }`}>
                          {selectedFormat === format?.id && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{format?.name}</p>
                          <p className="text-sm text-muted-foreground">{format?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Print Size</h4>
                <div className="space-y-3">
                  {sizeOptions?.map((size) => (
                    <div
                      key={size?.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedSize === size?.id
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedSize(size?.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedSize === size?.id
                            ? 'border-primary bg-primary' :'border-border'
                        }`}>
                          {selectedSize === size?.id && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{size?.name}</p>
                          <p className="text-sm text-muted-foreground">{size?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Batch Information */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">Batch Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Batch ID:</span>
                    <span className="text-foreground font-mono">{batch?.id || 'AGT-2024-001'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product:</span>
                    <span className="text-foreground">{batch?.productName || 'Organic Tomatoes'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span className="text-foreground">{batch?.quantity || '500'} {batch?.unit || 'lbs'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Harvest Date:</span>
                    <span className="text-foreground">{batch?.harvestDate || '2024-01-10'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="space-y-6">
              {/* QR Code Preview */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-4">Preview</h4>
                <div className="bg-white border-2 border-dashed border-border rounded-lg p-8 inline-block">
                  {selectedFormat === 'label' ? (
                    <div className="bg-white border border-border rounded-lg p-4 max-w-xs">
                      <div className="text-center mb-3">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <Icon name="Sprout" size={20} className="text-primary" />
                          <span className="font-bold text-primary">AgriTrace</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Farm to Table Transparency</p>
                      </div>
                      <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${batch?.id || 'AGT-SAMPLE'}`}
                        alt="QR Code"
                        className="w-32 h-32 mx-auto mb-3"
                      />
                      <div className="text-xs space-y-1">
                        <p className="font-semibold">{batch?.productName || 'Organic Tomatoes'}</p>
                        <p className="text-muted-foreground">Batch: {batch?.id || 'AGT-2024-001'}</p>
                        <p className="text-muted-foreground">Harvest: {batch?.harvestDate || '2024-01-10'}</p>
                        <p className="text-primary font-medium">Scan for full story</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      {selectedFormat === 'branded' && (
                        <div className="mb-3">
                          <div className="flex items-center justify-center space-x-2 mb-1">
                            <Icon name="Sprout" size={16} className="text-primary" />
                            <span className="font-bold text-primary text-sm">AgriTrace</span>
                          </div>
                        </div>
                      )}
                      <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${batch?.id || 'AGT-SAMPLE'}`}
                        alt="QR Code"
                        className="w-48 h-48 mx-auto"
                      />
                      {selectedFormat === 'branded' && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Scan for transparency
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleDownload(selectedFormat)}
                  className="bg-primary hover:bg-primary/90"
                  iconName="Download"
                >
                  Download QR Code
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handlePrint}
                  iconName="Printer"
                >
                  Print QR Code
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Share"
                >
                  Share QR Code
                </Button>
              </div>

              {/* Printing Tips */}
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                <h5 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Lightbulb" size={16} className="mr-2 text-accent" />
                  Printing Tips
                </h5>
                <div className="space-y-3">
                  {printingTips?.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name={tip?.icon} size={16} className="text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{tip?.title}</p>
                        <p className="text-xs text-muted-foreground">{tip?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;