import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BlockchainExplorer = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const blockchainData = [
    {
      id: 1,
      hash: "0x1a2b3c4d5e6f7890abcdef1234567890",
      timestamp: "2025-01-11 09:45:23",
      transactions: 12,
      farmer: "Maria Rodriguez",
      produce: "Organic Tomatoes - Batch #TR2025001",
      location: "Fresno Valley Farm, CA",
      status: "verified"
    },
    {
      id: 2,
      hash: "0x2b3c4d5e6f7890abcdef1234567890ab",
      timestamp: "2025-01-11 09:32:15",
      transactions: 8,
      farmer: "James Chen",
      produce: "Free-Range Eggs - Batch #EG2025045",
      location: "Sunrise Poultry Farm, OR",
      status: "verified"
    },
    {
      id: 3,
      hash: "0x3c4d5e6f7890abcdef1234567890abcd",
      timestamp: "2025-01-11 09:18:07",
      transactions: 15,
      farmer: "Sarah Thompson",
      produce: "Grass-Fed Beef - Batch #BF2025012",
      location: "Green Meadows Ranch, TX",
      status: "verified"
    },
    {
      id: 4,
      hash: "0x4d5e6f7890abcdef1234567890abcdef",
      timestamp: "2025-01-11 09:05:42",
      transactions: 6,
      farmer: "Ahmed Hassan",
      produce: "Organic Spinach - Batch #SP2025089",
      location: "Desert Bloom Farm, AZ",
      status: "pending"
    }
  ];

  const handleBlockClick = (block) => {
    setIsAnimating(true);
    setSelectedBlock(block);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const closeModal = () => {
    setSelectedBlock(null);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Blockchain Explorer</h3>
          <p className="text-muted-foreground">Real-time view of agricultural data being recorded on the blockchain</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Live Updates</span>
        </div>
      </div>
      {/* Blockchain Visualization */}
      <div className="space-y-4 mb-6">
        {blockchainData?.map((block, index) => (
          <div key={block?.id} className="flex items-center space-x-4">
            {/* Block */}
            <div 
              onClick={() => handleBlockClick(block)}
              className={`relative bg-primary/10 border-2 border-primary rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-primary/20 hover:scale-105 ${
                isAnimating && selectedBlock?.id === block?.id ? 'animate-pulse' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  block?.status === 'verified' ? 'bg-success' : 'bg-warning'
                }`}></div>
                <div>
                  <div className="text-sm font-medium text-foreground">Block #{block?.id}</div>
                  <div className="text-xs text-muted-foreground">{block?.transactions} transactions</div>
                </div>
              </div>
              
              {/* Connection Line */}
              {index < blockchainData?.length - 1 && (
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                  <Icon name="ChevronRight" size={16} className="absolute -right-2 -top-2 text-primary/50" />
                </div>
              )}
            </div>

            {/* Block Info Preview */}
            <div className="flex-1 bg-muted/50 rounded-lg p-3">
              <div className="text-sm font-medium text-foreground mb-1">{block?.produce}</div>
              <div className="text-xs text-muted-foreground">{block?.farmer} • {block?.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Legend */}
      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>Verified</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-warning rounded-full"></div>
            <span>Pending</span>
          </div>
        </div>
        <span>Click any block to view details</span>
      </div>
      {/* Block Detail Modal */}
      {selectedBlock && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg border border-border max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-foreground">Block #{selectedBlock?.id} Details</h4>
              <Button variant="ghost" size="icon" onClick={closeModal}>
                <Icon name="X" size={20} />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Hash</label>
                <div className="text-sm font-mono bg-muted rounded p-2 mt-1 break-all">
                  {selectedBlock?.hash}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Produce</label>
                <div className="text-sm text-foreground mt-1">{selectedBlock?.produce}</div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Farmer</label>
                <div className="text-sm text-foreground mt-1">{selectedBlock?.farmer}</div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Location</label>
                <div className="text-sm text-foreground mt-1">{selectedBlock?.location}</div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Timestamp</label>
                <div className="text-sm text-foreground mt-1">{selectedBlock?.timestamp}</div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground">Status</label>
                <div className="flex items-center space-x-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${
                    selectedBlock?.status === 'verified' ? 'bg-success' : 'bg-warning'
                  }`}></div>
                  <span className="text-sm text-foreground capitalize">{selectedBlock?.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockchainExplorer;