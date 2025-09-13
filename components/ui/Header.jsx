import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/qr-scanner-portal', label: 'QR Scanner', icon: 'QrCode' },
    { path: '/farmer-registration-dashboard', label: 'Farm Dashboard', icon: 'Tractor' },
    { path: '/supply-chain-command-center', label: 'Supply Chain', icon: 'Truck' },
  ];

  const secondaryNavItems = [
    { path: '/trust-verification-hub', label: 'Trust Hub', icon: 'Shield' },
    { path: '/community-marketplace', label: 'Marketplace', icon: 'Store' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-organic">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-primary-foreground"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                <path d="M12 16L13.09 22.26L22 23L13.09 23.74L12 30L10.91 23.74L2 23L10.91 22.26L12 16Z" opacity="0.6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary font-sans">AgriTrace</span>
              <span className="text-xs text-muted-foreground font-accent">Farm to Table Transparency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-muted ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-organic'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.label}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={toggleMoreMenu}
                className={`flex items-center space-x-2 ${isMoreMenuOpen ? 'bg-muted' : ''}`}
              >
                <Icon name="MoreHorizontal" size={18} />
                <span>More</span>
                <Icon name="ChevronDown" size={16} className={`transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isMoreMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-lg shadow-organic py-2 z-50">
                  {secondaryNavItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      onClick={() => setIsMoreMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        isActivePath(item?.path) ? 'bg-muted text-primary font-medium' : 'text-foreground'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Sign In
            </Button>
            <Button variant="default" size="sm" className="bg-conversion hover:bg-conversion/90">
              <Icon name="Sprout" size={16} className="mr-2" />
              Start Farming
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="lg:hidden"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-2">
              {[...primaryNavItems, ...secondaryNavItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-organic'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.label}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="outline" fullWidth onClick={closeMobileMenu}>
                  <Icon name="User" size={16} className="mr-2" />
                  Sign In
                </Button>
                <Button variant="default" fullWidth className="bg-conversion hover:bg-conversion/90" onClick={closeMobileMenu}>
                  <Icon name="Sprout" size={16} className="mr-2" />
                  Start Farming
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}
      {/* Overlay for more menu */}
      {isMoreMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMoreMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;