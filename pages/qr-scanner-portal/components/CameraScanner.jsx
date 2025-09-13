import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CameraScanner = ({ onScanSuccess, onScanError }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices?.getUserMedia({
        video: { facingMode: 'environment' }
      });
      
      if (videoRef?.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setHasPermission(true);
        setIsScanning(true);
      }
    } catch (err) {
      setError('Camera access denied. Please enable camera permissions.');
      setHasPermission(false);
      onScanError?.(err?.message);
    }
  };

  const stopCamera = () => {
    if (streamRef?.current) {
      streamRef?.current?.getTracks()?.forEach(track => track?.stop());
      streamRef.current = null;
    }
    setIsScanning(false);
  };

  const simulateScan = () => {
    // Simulate QR code detection after 2 seconds
    setTimeout(() => {
      const mockQRData = {
        productId: "AGT-2024-001",
        batchId: "BATCH-001",
        farmerId: "FARM-001",
        timestamp: new Date()?.toISOString()
      };
      onScanSuccess?.(mockQRData);
      stopCamera();
    }, 2000);
  };

  return (
    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden">
      {!isScanning ? (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <Icon name="Camera" size={40} className="text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Ready to Scan</h3>
          <p className="text-gray-300 mb-6 max-w-sm">
            Position the QR code within the frame to discover your food's journey
          </p>
          <Button 
            variant="default" 
            onClick={startCamera}
            className="bg-primary hover:bg-primary/90"
          >
            <Icon name="Camera" size={20} className="mr-2" />
            Start Camera
          </Button>
          {error && (
            <p className="text-red-400 text-sm mt-4">{error}</p>
          )}
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
          
          {/* Scanning Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Scanning Frame */}
              <div className="w-64 h-64 border-4 border-primary rounded-2xl relative">
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-2xl"></div>
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-2xl"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-2xl"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-2xl"></div>
                
                {/* Scanning Line Animation */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="w-full h-1 bg-primary animate-pulse absolute top-1/2 transform -translate-y-1/2"></div>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-white text-sm font-medium">Position QR code in frame</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <Button 
              variant="outline" 
              onClick={stopCamera}
              className="bg-black/50 border-white/30 text-white hover:bg-black/70"
            >
              <Icon name="X" size={20} className="mr-2" />
              Cancel
            </Button>
            <Button 
              variant="default" 
              onClick={simulateScan}
              className="bg-primary hover:bg-primary/90"
            >
              <Icon name="Scan" size={20} className="mr-2" />
              Simulate Scan
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CameraScanner;