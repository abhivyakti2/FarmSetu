import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SupplyChainCommandCenter from './pages/supply-chain-command-center';
import QRScannerPortal from './pages/qr-scanner-portal';
import TrustVerificationHub from './pages/trust-verification-hub';
import FarmerRegistrationDashboard from './pages/farmer-registration-dashboard';
import CommunityMarketplace from './pages/community-marketplace';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<CommunityMarketplace />} />
        <Route path="/supply-chain-command-center" element={<SupplyChainCommandCenter />} />
        <Route path="/qr-scanner-portal" element={<QRScannerPortal />} />
        <Route path="/trust-verification-hub" element={<TrustVerificationHub />} />
        <Route path="/farmer-registration-dashboard" element={<FarmerRegistrationDashboard />} />
        <Route path="/community-marketplace" element={<CommunityMarketplace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
