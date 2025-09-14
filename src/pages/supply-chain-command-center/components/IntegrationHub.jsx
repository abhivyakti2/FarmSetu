import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const IntegrationHub = ({ integrations, onConnectIntegration, onDisconnectIntegration }) => {
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [apiKey, setApiKey] = useState('');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Connected': return 'text-green-600 bg-green-50';
      case 'Disconnected': return 'text-red-600 bg-red-50';
      case 'Pending': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleConnect = (integration) => {
    setSelectedIntegration(integration);
  };

  const handleConfirmConnection = () => {
    if (selectedIntegration && apiKey) {
      onConnectIntegration(selectedIntegration?.id, apiKey);
      setSelectedIntegration(null);
      setApiKey('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Integration Overview */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">System Integrations</h3>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Sync All
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Configure
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations?.map((integration) => (
            <div key={integration?.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={integration?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{integration?.name}</h4>
                    <p className="text-xs text-muted-foreground">{integration?.category}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration?.status)}`}>
                  {integration?.status}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{integration?.description}</p>

              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  Last sync: {integration?.lastSync}
                </div>
                <div className="flex items-center space-x-2">
                  {integration?.status === 'Connected' ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onDisconnectIntegration(integration?.id)}
                    >
                      Disconnect
                    </Button>
                  ) : (
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => handleConnect(integration)}
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* API Endpoints */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">API Endpoints</h3>
          <Button variant="outline" size="sm">
            <Icon name="Code" size={16} className="mr-2" />
            View Documentation
          </Button>
        </div>

        <div className="space-y-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">GET</span>
                <code className="text-sm font-mono text-foreground">/api/v1/shipments</code>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Copy" size={16} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Retrieve all active shipments with tracking data</p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">POST</span>
                <code className="text-sm font-mono text-foreground">/api/v1/events</code>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Copy" size={16} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Log new supply chain events and updates</p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">PUT</span>
                <code className="text-sm font-mono text-foreground">/api/v1/quality</code>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Copy" size={16} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Update quality monitoring data and alerts</p>
          </div>
        </div>
      </div>
      {/* Connection Modal */}
      {selectedIntegration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background border border-border rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Connect {selectedIntegration?.name}
              </h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSelectedIntegration(null)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Enter your API credentials to connect with {selectedIntegration?.name}
              </p>

              <Input
                label="API Key"
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e?.target?.value)}
                required
              />

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Info" size={16} />
                <span>Your credentials are encrypted and stored securely</span>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-4">
                <Button 
                  variant="outline"
                  onClick={() => setSelectedIntegration(null)}
                >
                  Cancel
                </Button>
                <Button 
                  variant="default"
                  onClick={handleConfirmConnection}
                  disabled={!apiKey}
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationHub;