import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveActivityMap from './components/LiveActivityMap';
import HowItWorksSection from './components/HowItWorksSection';
import FarmerStoriesSection from './components/FarmerStoriesSection';
import TrustBadgesSection from './components/TrustBadgesSection';
import CallToActionSection from './components/CallToActionSection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>AgriTrace - Farm to Table Transparency | Blockchain Agricultural Platform</title>
        <meta name="description" content="Transform agricultural transparency with AgriTrace. Connect consumers to farmers, build trust through blockchain verification, and empower the entire food supply chain." />
        <meta name="keywords" content="agricultural transparency, blockchain farming, food traceability, farm to table, QR code scanning, farmer empowerment" />
        <meta property="og:title" content="AgriTrace - Every Scan Tells a Story of Integrity" />
        <meta property="og:description" content="Revolutionary supply chain visibility solution that transforms blockchain technology into an intuitive, trust-building experience for the entire agricultural ecosystem." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AgriTrace - Farm to Table Transparency" />
        <meta name="twitter:description" content="Join the agricultural revolution building trust, empowering farmers, and giving consumers the transparency they deserve." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <LiveActivityMap />
          <HowItWorksSection />
          <FarmerStoriesSection />
          <TrustBadgesSection />
          <CallToActionSection />
        </main>

        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-primary">AgriTrace</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Transforming agricultural transparency through blockchain technology. Building trust one harvest at a time.
                </p>
                <p className="text-xs text-muted-foreground">
                  © {new Date()?.getFullYear()} AgriTrace. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/qr-scanner-portal" className="hover:text-primary transition-colors">QR Scanner</a></li>
                  <li><a href="/farmer-registration-dashboard" className="hover:text-primary transition-colors">Farmer Dashboard</a></li>
                  <li><a href="/supply-chain-command-center" className="hover:text-primary transition-colors">Supply Chain</a></li>
                  <li><a href="/community-marketplace" className="hover:text-primary transition-colors">Marketplace</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/trust-verification-hub" className="hover:text-primary transition-colors">Trust & Security</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Support Center</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Partnership</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4 md:mb-0">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xs text-muted-foreground">Follow us:</span>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <span className="text-xs font-bold">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <span className="text-xs font-bold">t</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <span className="text-xs font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;