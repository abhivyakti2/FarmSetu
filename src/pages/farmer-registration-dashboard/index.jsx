import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import WelcomeVideoSection from './components/WelcomeVideoSection';
import RegistrationFlow from './components/RegistrationFlow';
import FarmDashboard from './components/FarmDashboard';
import BatchCreationTools from './components/BatchCreationTools';
import QRCodeGenerator from './components/QRCodeGenerator';
import EducationalResources from './components/EducationalResources';

const FarmerRegistrationDashboard = () => {
  const [currentView, setCurrentView] = useState('welcome');
  const [isRegistered, setIsRegistered] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [showQRGenerator, setShowQRGenerator] = useState(false);

  const handleStartRegistration = () => {
    setCurrentView('registration');
  };

  const handleRegistrationComplete = (formData) => {
    setIsRegistered(true);
    setCurrentView('dashboard');
    // Here you would typically save the registration data
    console.log('Registration completed:', formData);
  };

  const handleBatchCreated = (batchData) => {
    setSelectedBatch(batchData);
    setShowQRGenerator(true);
    // Here you would typically save the batch data
    console.log('Batch created:', batchData);
  };

  const handleCloseQRGenerator = () => {
    setShowQRGenerator(false);
    setSelectedBatch(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'welcome':
        return (
          <WelcomeVideoSection onStartRegistration={handleStartRegistration} />
        );
      
      case 'registration':
        return (
          <RegistrationFlow onComplete={handleRegistrationComplete} />
        );
      
      case 'dashboard':
        return (
          <FarmDashboard />
        );
      
      case 'create-batch':
        return (
          <BatchCreationTools onBatchCreated={handleBatchCreated} />
        );
      
      case 'resources':
        return (
          <EducationalResources />
        );
      
      default:
        return (
          <WelcomeVideoSection onStartRegistration={handleStartRegistration} />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Navigation Breadcrumb */}
        {isRegistered && (
          <div className="mb-8">
            <nav className="flex items-center space-x-4 text-sm">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentView === 'dashboard' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('create-batch')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentView === 'create-batch' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Create Batch
              </button>
              <button
                onClick={() => setCurrentView('resources')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentView === 'resources' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Resources
              </button>
            </nav>
          </div>
        )}

        {/* Main Content */}
        {renderContent()}

        {/* QR Code Generator Modal */}
        {showQRGenerator && selectedBatch && (
          <QRCodeGenerator
            batch={selectedBatch}
            onClose={handleCloseQRGenerator}
          />
        )}
      </main>

      {/* Success Celebration */}
      {isRegistered && currentView === 'dashboard' && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-success text-success-foreground rounded-lg p-4 shadow-lg animate-bounce">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-success-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🎉</span>
              </div>
              <div>
                <p className="font-semibold">Welcome to AgriTrace!</p>
                <p className="text-sm opacity-90">Your farm is now part of the transparency revolution</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerRegistrationDashboard;