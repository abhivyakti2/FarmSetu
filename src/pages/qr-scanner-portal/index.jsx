import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import CameraScanner from './components/CameraScanner';
import ScanResult from './components/ScanResult';
import ScanHistory from './components/ScanHistory';
import OfflineIndicator from './components/OfflineIndicator';
import AudioNarration from './components/AudioNarration';

const QRScannerPortal = () => {
  const [currentView, setCurrentView] = useState('scanner'); // 'scanner', 'result', 'history'
  const [scanData, setScanData] = useState(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [recentScans, setRecentScans] = useState([]);

  // Mock recent scans for quick access
  const mockRecentScans = [
    {
      id: 1,
      productName: "Organic Roma Tomatoes",
      farmerName: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=100&h=100&fit=crop",
      scanTime: "2 hours ago"
    },
    {
      id: 2,
      productName: "Heritage Carrots",
      farmerName: "John Thompson",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=100&h=100&fit=crop",
      scanTime: "Yesterday"
    }
  ];

  useEffect(() => {
    setRecentScans(mockRecentScans);
  }, []);

  const handleScanSuccess = (data) => {
    setScanData(data);
    setCurrentView('result');
    
    // Add to recent scans
    const newScan = {
      id: Date.now(),
      productName: "Organic Roma Tomatoes",
      farmerName: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=100&h=100&fit=crop",
      scanTime: "Just now"
    };
    setRecentScans(prev => [newScan, ...prev?.slice(0, 4)]);
  };

  const handleScanError = (error) => {
    console.error('Scan error:', error);
  };

  const handleNewScan = () => {
    setScanData(null);
    setCurrentView('scanner');
  };

  const handleViewHistory = () => {
    setCurrentView('history');
  };

  const handleBackToScanner = () => {
    setCurrentView('scanner');
  };

  const handleScanSelect = (scan) => {
    // Mock scan data for selected history item
    const mockData = {
      productId: "AGT-2024-001",
      batchId: "BATCH-001",
      farmerId: "FARM-001",
      timestamp: new Date()?.toISOString()
    };
    setScanData(mockData);
    setCurrentView('result');
  };

  const narrationText = currentView === 'result' && scanData ? `You've successfully scanned organic Roma tomatoes grown by Maria Rodriguez at Sunrise Organic Farm in Salinas Valley, California. These tomatoes were harvested on September 8th, 2024, and are certified USDA Organic and Non-GMO Project verified. Maria has been growing organic tomatoes for over 15 years using sustainable farming practices.`
    : currentView === 'scanner'
    ? `Welcome to the QR Scanner Portal. Position your camera over a QR code on any produce to discover its complete farm-to-table journey, meet the farmer who grew it, and learn about its nutritional benefits and environmental impact.`
    : `Browse your scan history to revisit the stories behind the food you've discovered. Each scan connects you directly to the farmers and farms that grew your produce.`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <OfflineIndicator />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {currentView === 'scanner' && (
            <div className="flex-1 flex flex-col">
              {/* Scanner Header */}
              <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">QR Scanner Portal</h1>
                      <p className="text-muted-foreground">Discover the story behind your food</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                        className={isAudioEnabled ? 'bg-primary/10 border-primary/30' : ''}
                      >
                        <Icon name={isAudioEnabled ? "VolumeX" : "Volume2"} size={16} className="mr-2" />
                        Audio
                      </Button>
                      <Button variant="ghost" size="sm" onClick={handleViewHistory}>
                        <Icon name="History" size={16} className="mr-2" />
                        History
                      </Button>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-card rounded-lg border border-border">
                      <div className="text-2xl font-bold text-primary mb-1">5</div>
                      <div className="text-xs text-muted-foreground">Products Scanned</div>
                    </div>
                    <div className="text-center p-3 bg-card rounded-lg border border-border">
                      <div className="text-2xl font-bold text-secondary mb-1">5</div>
                      <div className="text-xs text-muted-foreground">Farmers Met</div>
                    </div>
                    <div className="text-center p-3 bg-card rounded-lg border border-border">
                      <div className="text-2xl font-bold text-accent mb-1">100%</div>
                      <div className="text-xs text-muted-foreground">Verified</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scanner Interface */}
              <div className="flex-1 p-6">
                <div className="max-w-4xl mx-auto h-full">
                  <div className="grid lg:grid-cols-2 gap-6 h-full">
                    {/* Camera Scanner */}
                    <div className="h-96 lg:h-full">
                      <CameraScanner 
                        onScanSuccess={handleScanSuccess}
                        onScanError={handleScanError}
                      />
                    </div>

                    {/* Instructions & Recent Scans */}
                    <div className="space-y-6">
                      {/* Instructions */}
                      <div className="bg-card rounded-xl p-6 border border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                          <Icon name="Info" size={20} className="mr-2 text-primary" />
                          How to Scan
                        </h3>
                        <div className="space-y-3 text-sm text-muted-foreground">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary font-bold text-xs">1</span>
                            </div>
                            <p>Look for QR codes on produce packaging or labels</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary font-bold text-xs">2</span>
                            </div>
                            <p>Position the QR code within the camera frame</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary font-bold text-xs">3</span>
                            </div>
                            <p>Discover the complete farm-to-table story</p>
                          </div>
                        </div>
                      </div>

                      {/* Recent Scans */}
                      {recentScans?.length > 0 && (
                        <div className="bg-card rounded-xl p-6 border border-border">
                          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                            <Icon name="Clock" size={20} className="mr-2 text-primary" />
                            Recent Scans
                          </h3>
                          <div className="space-y-3">
                            {recentScans?.slice(0, 3)?.map((scan) => (
                              <div
                                key={scan?.id}
                                onClick={() => handleScanSelect(scan)}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                  <img 
                                    src={scan?.image} 
                                    alt={scan?.productName}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-foreground text-sm truncate">{scan?.productName}</p>
                                  <p className="text-xs text-muted-foreground">by {scan?.farmerName}</p>
                                </div>
                                <div className="text-xs text-muted-foreground">{scan?.scanTime}</div>
                              </div>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" onClick={handleViewHistory} className="w-full mt-3">
                            View All History
                            <Icon name="ArrowRight" size={14} className="ml-2" />
                          </Button>
                        </div>
                      )}

                      {/* Audio Narration */}
                      {isAudioEnabled && (
                        <AudioNarration 
                          text={narrationText}
                          isActive={currentView === 'scanner'}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentView === 'result' && (
            <div className="flex-1 flex flex-col">
              {/* Result Header */}
              <div className="p-4 border-b border-border bg-card flex items-center justify-between">
                <Button variant="ghost" onClick={handleBackToScanner}>
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Back to Scanner
                </Button>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                    className={isAudioEnabled ? 'bg-primary/10 border-primary/30' : ''}
                  >
                    <Icon name={isAudioEnabled ? "VolumeX" : "Volume2"} size={16} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleViewHistory}>
                    <Icon name="History" size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex-1 flex">
                <div className="flex-1">
                  <ScanResult 
                    scanData={scanData}
                    onClose={handleBackToScanner}
                    onNewScan={handleNewScan}
                  />
                </div>
                
                {/* Audio Narration Sidebar */}
                {isAudioEnabled && (
                  <div className="w-80 border-l border-border p-6 bg-card/50">
                    <AudioNarration 
                      text={narrationText}
                      isActive={currentView === 'result'}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {currentView === 'history' && (
            <div className="flex-1 flex flex-col">
              {/* History Header */}
              <div className="p-4 border-b border-border bg-card flex items-center justify-between">
                <Button variant="ghost" onClick={handleBackToScanner}>
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Back to Scanner
                </Button>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                    className={isAudioEnabled ? 'bg-primary/10 border-primary/30' : ''}
                  >
                    <Icon name={isAudioEnabled ? "VolumeX" : "Volume2"} size={16} />
                  </Button>
                </div>
              </div>

              <div className="flex-1 flex">
                <div className="flex-1">
                  <ScanHistory onScanSelect={handleScanSelect} />
                </div>
                
                {/* Audio Narration Sidebar */}
                {isAudioEnabled && (
                  <div className="w-80 border-l border-border p-6 bg-card/50">
                    <AudioNarration 
                      text={narrationText}
                      isActive={currentView === 'history'}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Quick Action Floating Button */}
      {currentView !== 'scanner' && (
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            variant="default"
            size="lg"
            onClick={handleBackToScanner}
            className="rounded-full shadow-lg bg-primary hover:bg-primary/90 w-14 h-14 p-0"
          >
            <Icon name="QrCode" size={24} />
          </Button>
        </div>
      )}
      {/* Navigation Links for Development */}
      <div className="fixed bottom-4 left-4 z-40 bg-card border border-border rounded-lg p-2 shadow-lg lg:hidden">
        <div className="flex space-x-2 text-xs">
          <Link to="/homepage" className="text-primary hover:underline">Home</Link>
          <span className="text-muted-foreground">|</span>
          <Link to="/farmer-registration-dashboard" className="text-primary hover:underline">Farm</Link>
          <span className="text-muted-foreground">|</span>
          <Link to="/supply-chain-command-center" className="text-primary hover:underline">Supply</Link>
          <span className="text-muted-foreground">|</span>
          <Link to="/trust-verification-hub" className="text-primary hover:underline">Trust</Link>
          <span className="text-muted-foreground">|</span>
          <Link to="/community-marketplace" className="text-primary hover:underline">Market</Link>
        </div>
      </div>
    </div>
  );
};

export default QRScannerPortal;