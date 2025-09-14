import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const BatchCreationTools = ({ onBatchCreated }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [batchData, setBatchData] = useState({
    productName: '',
    variety: '',
    quantity: '',
    unit: 'lbs',
    harvestDate: '',
    expectedShelfLife: '',
    certifications: [],
    growingMethod: '',
    treatmentUsed: false,
    treatmentDetails: '',
    photos: [],
    description: ''
  });

  const productOptions = [
    { value: 'tomatoes', label: 'Tomatoes' },
    { value: 'lettuce', label: 'Lettuce' },
    { value: 'peppers', label: 'Bell Peppers' },
    { value: 'carrots', label: 'Carrots' },
    { value: 'corn', label: 'Sweet Corn' },
    { value: 'herbs', label: 'Fresh Herbs' },
    { value: 'berries', label: 'Berries' },
    { value: 'apples', label: 'Apples' }
  ];

  const unitOptions = [
    { value: 'lbs', label: 'Pounds (lbs)' },
    { value: 'kg', label: 'Kilograms (kg)' },
    { value: 'pieces', label: 'Pieces' },
    { value: 'bunches', label: 'Bunches' },
    { value: 'boxes', label: 'Boxes' }
  ];

  const growingMethodOptions = [
    { value: 'organic', label: 'Certified Organic' },
    { value: 'conventional', label: 'Conventional' },
    { value: 'hydroponic', label: 'Hydroponic' },
    { value: 'greenhouse', label: 'Greenhouse' },
    { value: 'field', label: 'Open Field' }
  ];

  const certificationOptions = [
    { value: 'usda-organic', label: 'USDA Organic' },
    { value: 'gap', label: 'Good Agricultural Practices' },
    { value: 'fair-trade', label: 'Fair Trade' },
    { value: 'non-gmo', label: 'Non-GMO Verified' },
    { value: 'rainforest', label: 'Rainforest Alliance' }
  ];

  const handleInputChange = (field, value) => {
    setBatchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreateBatch = async () => {
    setIsCreating(true);
    
    // Simulate batch creation process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newBatch = {
      id: `AGT-${new Date()?.getFullYear()}-${String(Math.floor(Math.random() * 1000))?.padStart(3, '0')}`,
      ...batchData,
      createdDate: new Date()?.toISOString()?.split('T')?.[0],
      status: 'Processing',
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=AGT-${Date.now()}`,
      blockchainHash: `0x${Math.random()?.toString(16)?.substr(2, 40)}`
    };
    
    setIsCreating(false);
    onBatchCreated(newBatch);
    
    // Reset form
    setBatchData({
      productName: '',
      variety: '',
      quantity: '',
      unit: 'lbs',
      harvestDate: '',
      expectedShelfLife: '',
      certifications: [],
      growingMethod: '',
      treatmentUsed: false,
      treatmentDetails: '',
      photos: [],
      description: ''
    });
  };

  if (isCreating) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
        <div className="text-center py-12">
          <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"></div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Creating Your Batch</h3>
          <p className="text-muted-foreground mb-6">
            Generating QR codes and recording on blockchain...
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-3/4 transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Create New Batch</h3>
          <p className="text-muted-foreground">
            Register your produce for blockchain tracking and consumer transparency
          </p>
        </div>
        <Icon name="Package" size={48} className="text-primary" />
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Basic Information */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Product Information</h4>
            
            <div className="space-y-4">
              <Select
                label="Product Type"
                placeholder="Select your product"
                options={productOptions}
                value={batchData?.productName}
                onChange={(value) => handleInputChange('productName', value)}
                required
              />
              
              <Input
                label="Variety/Cultivar"
                type="text"
                placeholder="e.g., Roma, Cherry, Beefsteak"
                description="Specific variety or cultivar name"
                value={batchData?.variety}
                onChange={(e) => handleInputChange('variety', e?.target?.value)}
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Quantity"
                  type="number"
                  placeholder="Enter quantity"
                  value={batchData?.quantity}
                  onChange={(e) => handleInputChange('quantity', e?.target?.value)}
                  required
                />
                <Select
                  label="Unit"
                  options={unitOptions}
                  value={batchData?.unit}
                  onChange={(value) => handleInputChange('unit', value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Harvest Date"
                  type="date"
                  value={batchData?.harvestDate}
                  onChange={(e) => handleInputChange('harvestDate', e?.target?.value)}
                  required
                />
                <Input
                  label="Expected Shelf Life"
                  type="text"
                  placeholder="e.g., 7-10 days"
                  value={batchData?.expectedShelfLife}
                  onChange={(e) => handleInputChange('expectedShelfLife', e?.target?.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Growing Details</h4>
            
            <div className="space-y-4">
              <Select
                label="Growing Method"
                placeholder="Select growing method"
                options={growingMethodOptions}
                value={batchData?.growingMethod}
                onChange={(value) => handleInputChange('growingMethod', value)}
                required
              />
              
              <Select
                label="Certifications"
                placeholder="Select applicable certifications"
                description="Choose all certifications that apply"
                options={certificationOptions}
                value={batchData?.certifications}
                onChange={(value) => handleInputChange('certifications', value)}
                multiple
                searchable
              />
              
              <Checkbox
                label="Treatment/Pesticides Used"
                description="Check if any treatments or pesticides were applied"
                checked={batchData?.treatmentUsed}
                onChange={(e) => handleInputChange('treatmentUsed', e?.target?.checked)}
              />
              
              {batchData?.treatmentUsed && (
                <Input
                  label="Treatment Details"
                  type="text"
                  placeholder="Specify treatments used and application dates"
                  description="Be transparent about any treatments for consumer trust"
                  value={batchData?.treatmentDetails}
                  onChange={(e) => handleInputChange('treatmentDetails', e?.target?.value)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Photos and Description */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Visual Documentation</h4>
            
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Icon name="Camera" size={48} className="mx-auto text-muted-foreground mb-4" />
              <h5 className="text-lg font-medium text-foreground mb-2">Add Product Photos</h5>
              <p className="text-muted-foreground mb-4">
                Upload photos of your produce to build consumer trust
              </p>
              <Button variant="outline" iconName="Upload">
                Upload Photos
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Recommended: Field photos, harvest images, quality shots
              </p>
            </div>
            
            {/* Photo Preview Grid */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[1, 2, 3]?.map((index) => (
                <div key={index} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Icon name="Image" size={24} className="text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Product Story</h4>
            
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description for Consumers
                </label>
                <textarea
                  className="w-full h-32 p-3 border border-border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell consumers about this batch - growing conditions, care taken, what makes it special..."
                  value={batchData?.description}
                  onChange={(e) => handleInputChange('description', e?.target?.value)}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  This will be visible to consumers when they scan your QR code
                </p>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/20">
            <h5 className="font-semibold text-foreground mb-3">Batch Preview</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Product:</span>
                <span className="text-foreground">{batchData?.productName || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quantity:</span>
                <span className="text-foreground">
                  {batchData?.quantity ? `${batchData?.quantity} ${batchData?.unit}` : 'Not specified'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Method:</span>
                <span className="text-foreground">{batchData?.growingMethod || 'Not selected'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Harvest:</span>
                <span className="text-foreground">{batchData?.harvestDate || 'Not set'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-8 border-t border-border mt-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Shield" size={16} />
          <span>All data will be securely recorded on blockchain</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            Save as Draft
          </Button>
          <Button
            variant="default"
            onClick={handleCreateBatch}
            disabled={!batchData?.productName || !batchData?.quantity || !batchData?.harvestDate}
            className="bg-primary hover:bg-primary/90"
            iconName="Package"
            iconPosition="right"
          >
            Create Batch & Generate QR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BatchCreationTools;