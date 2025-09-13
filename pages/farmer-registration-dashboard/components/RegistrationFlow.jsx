import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const RegistrationFlow = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Farm Information
    farmName: '',
    farmAddress: '',
    farmSize: '',
    farmType: '',
    
    // Crops Information
    primaryCrops: [],
    secondaryCrops: [],
    organicCertified: false,
    
    // Certifications
    certifications: [],
    documents: []
  });

  const steps = [
    { id: 1, title: 'Personal Info', icon: 'User' },
    { id: 2, title: 'Farm Details', icon: 'MapPin' },
    { id: 3, title: 'Crop Catalog', icon: 'Sprout' },
    { id: 4, title: 'Certifications', icon: 'Shield' },
    { id: 5, title: 'Review', icon: 'CheckCircle' }
  ];

  const farmTypeOptions = [
    { value: 'organic', label: 'Organic Farm' },
    { value: 'conventional', label: 'Conventional Farm' },
    { value: 'hydroponic', label: 'Hydroponic Farm' },
    { value: 'greenhouse', label: 'Greenhouse Farm' },
    { value: 'mixed', label: 'Mixed Farming' }
  ];

  const cropOptions = [
    { value: 'tomatoes', label: 'Tomatoes' },
    { value: 'peppers', label: 'Peppers' },
    { value: 'lettuce', label: 'Lettuce' },
    { value: 'carrots', label: 'Carrots' },
    { value: 'corn', label: 'Corn' },
    { value: 'soybeans', label: 'Soybeans' },
    { value: 'wheat', label: 'Wheat' },
    { value: 'apples', label: 'Apples' },
    { value: 'berries', label: 'Berries' },
    { value: 'herbs', label: 'Herbs' }
  ];

  const certificationOptions = [
    { value: 'usda-organic', label: 'USDA Organic' },
    { value: 'gap', label: 'Good Agricultural Practices (GAP)' },
    { value: 'fair-trade', label: 'Fair Trade Certified' },
    { value: 'rainforest', label: 'Rainforest Alliance' },
    { value: 'non-gmo', label: 'Non-GMO Project Verified' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onComplete(formData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Icon name="User" size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Personal Information</h3>
              <p className="text-muted-foreground">Let's start with your basic information</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={formData?.firstName}
                onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                required
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={formData?.lastName}
                onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                required
              />
            </div>
            <Input
              label="Email Address"
              type="email"
              placeholder="your.email@example.com"
              description="We'll use this for important updates and notifications"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              description="For SMS notifications about your produce"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              required
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Icon name="MapPin" size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Farm Details</h3>
              <p className="text-muted-foreground">Tell us about your farming operation</p>
            </div>
            <Input
              label="Farm Name"
              type="text"
              placeholder="e.g., Sunshine Organic Farm"
              description="This will be displayed to consumers"
              value={formData?.farmName}
              onChange={(e) => handleInputChange('farmName', e?.target?.value)}
              required
            />
            <Input
              label="Farm Address"
              type="text"
              placeholder="123 Farm Road, City, State, ZIP"
              description="General location for transparency (exact address kept private)"
              value={formData?.farmAddress}
              onChange={(e) => handleInputChange('farmAddress', e?.target?.value)}
              required
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Farm Size"
                type="text"
                placeholder="e.g., 50 acres"
                value={formData?.farmSize}
                onChange={(e) => handleInputChange('farmSize', e?.target?.value)}
                required
              />
              <Select
                label="Farm Type"
                placeholder="Select farming type"
                options={farmTypeOptions}
                value={formData?.farmType}
                onChange={(value) => handleInputChange('farmType', value)}
                required
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Icon name="Sprout" size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Crop Catalog</h3>
              <p className="text-muted-foreground">What do you grow on your farm?</p>
            </div>
            <Select
              label="Primary Crops"
              description="Main crops you grow regularly"
              placeholder="Select your primary crops"
              options={cropOptions}
              value={formData?.primaryCrops}
              onChange={(value) => handleInputChange('primaryCrops', value)}
              multiple
              searchable
              required
            />
            <Select
              label="Secondary Crops"
              description="Additional crops you grow seasonally"
              placeholder="Select secondary crops (optional)"
              options={cropOptions}
              value={formData?.secondaryCrops}
              onChange={(value) => handleInputChange('secondaryCrops', value)}
              multiple
              searchable
            />
            <Checkbox
              label="Organic Certified"
              description="Check if your farm is certified organic"
              checked={formData?.organicCertified}
              onChange={(e) => handleInputChange('organicCertified', e?.target?.checked)}
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Icon name="Shield" size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Certifications</h3>
              <p className="text-muted-foreground">Upload your certifications to build trust</p>
            </div>
            <Select
              label="Certifications"
              description="Select all certifications you have"
              placeholder="Choose your certifications"
              options={certificationOptions}
              value={formData?.certifications}
              onChange={(value) => handleInputChange('certifications', value)}
              multiple
              searchable
            />
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Icon name="Upload" size={48} className="mx-auto text-muted-foreground mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Upload Certification Documents</h4>
              <p className="text-muted-foreground mb-4">
                Drag and drop your certification files here, or click to browse
              </p>
              <Button variant="outline" iconName="FileText">
                Choose Files
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: PDF, JPG, PNG (Max 10MB each)
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Icon name="CheckCircle" size={48} className="mx-auto text-success mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Review & Submit</h3>
              <p className="text-muted-foreground">Please review your information before submitting</p>
            </div>
            <div className="bg-muted rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                <p className="text-sm text-muted-foreground">
                  {formData?.firstName} {formData?.lastName} • {formData?.email} • {formData?.phone}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Farm Details</h4>
                <p className="text-sm text-muted-foreground">
                  {formData?.farmName} • {formData?.farmSize} • {formData?.farmType}
                </p>
                <p className="text-sm text-muted-foreground">{formData?.farmAddress}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Crops</h4>
                <p className="text-sm text-muted-foreground">
                  Primary: {formData?.primaryCrops?.join(', ') || 'None selected'}
                </p>
                {formData?.secondaryCrops?.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Secondary: {formData?.secondaryCrops?.join(', ')}
                  </p>
                )}
                {formData?.organicCertified && (
                  <p className="text-sm text-success">✓ Organic Certified</p>
                )}
              </div>
              
              {formData?.certifications?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
                  <p className="text-sm text-muted-foreground">
                    {formData?.certifications?.join(', ')}
                  </p>
                </div>
              )}
            </div>
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-accent mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">What happens next?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Your application will be reviewed within 24-48 hours</li>
                    <li>• You'll receive an email confirmation once approved</li>
                    <li>• You can start creating produce batches immediately</li>
                    <li>• Our support team will help you get started</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps?.map((step, index) => (
          <div key={step?.id} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep >= step?.id 
                ? 'bg-primary border-primary text-primary-foreground' 
                : 'border-border text-muted-foreground'
            }`}>
              {currentStep > step?.id ? (
                <Icon name="Check" size={20} />
              ) : (
                <Icon name={step?.icon} size={20} />
              )}
            </div>
            <div className="ml-3 hidden sm:block">
              <p className={`text-sm font-medium ${
                currentStep >= step?.id ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {step?.title}
              </p>
            </div>
            {index < steps?.length - 1 && (
              <div className={`w-12 h-0.5 mx-4 ${
                currentStep > step?.id ? 'bg-primary' : 'bg-border'
              }`} />
            )}
          </div>
        ))}
      </div>
      {/* Step Content */}
      <div className="min-h-[400px]">
        {renderStepContent()}
      </div>
      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-8 border-t border-border">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Previous
        </Button>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Step {currentStep} of {steps?.length}
          </p>
        </div>
        
        {currentStep < 5 ? (
          <Button
            variant="default"
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Next
          </Button>
        ) : (
          <Button
            variant="default"
            onClick={handleSubmit}
            className="bg-success hover:bg-success/90"
            iconName="CheckCircle"
            iconPosition="right"
          >
            Submit Application
          </Button>
        )}
      </div>
    </div>
  );
};

export default RegistrationFlow;