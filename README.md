# AgriTrace - Farm to Table Transparency Platform

A comprehensive blockchain-powered agricultural transparency platform that connects farmers, distributors, and consumers through QR code scanning and supply chain tracking.

## 🌾 Project Overview

AgriTrace is a full-stack React application that revolutionizes agricultural transparency by leveraging blockchain technology to create trust between farmers and consumers. The platform enables complete traceability from farm to table through QR code scanning and immutable record keeping.

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Core UI components (Button, Input, Select, etc.)
│   ├── AppIcon.jsx      # Lucide icon wrapper component
│   ├── AppImage.jsx     # Image component with error handling
│   ├── ErrorBoundary.jsx # Error boundary for React error handling
│   └── ScrollToTop.jsx  # Auto-scroll to top on route changes
├── pages/               # Main application pages
│   ├── homepage/        # Landing page and marketing content
│   ├── qr-scanner-portal/ # QR code scanning functionality
│   ├── farmer-registration-dashboard/ # Farmer onboarding and management
│   ├── supply-chain-command-center/ # Logistics and tracking dashboard
│   ├── trust-verification-hub/ # Security and trust information
│   ├── community-marketplace/ # Community features and marketplace
│   └── NotFound.jsx     # 404 error page
├── styles/              # Global styles and Tailwind configuration
├── utils/               # Utility functions
├── Routes.jsx           # Application routing configuration
├── App.jsx              # Main application component
└── index.jsx            # Application entry point
```

## 📱 Pages & Functionalities

### 1. Homepage (`/homepage`)
**Purpose**: Marketing landing page and platform introduction
**Target Users**: New visitors, potential farmers, consumers

**Components**:
- `HeroSection.jsx` - Main hero with value proposition and user path selection
- `LiveActivityMap.jsx` - Real-time scanning activity visualization
- `HowItWorksSection.jsx` - Step-by-step platform explanation
- `FarmerStoriesSection.jsx` - Success stories carousel with farmer testimonials
- `TrustBadgesSection.jsx` - Security certifications and partnerships
- `CallToActionSection.jsx` - Newsletter signup and final conversion

**Key Features**:
- Interactive user path selection (Farmer/Consumer/Distributor)
- Live activity feed showing global QR scans
- Animated statistics and trust indicators
- Responsive design with mobile-first approach

### 2. QR Scanner Portal (`/qr-scanner-portal`)
**Purpose**: Consumer-facing QR code scanning interface
**Target Users**: Consumers wanting to trace their food

**Components**:
- `CameraScanner.jsx` - Camera interface for QR code scanning
- `ScanResult.jsx` - Detailed product information display
- `ScanHistory.jsx` - User's scanning history and saved products
- `AudioNarration.jsx` - Accessibility feature for audio storytelling
- `OfflineIndicator.jsx` - Offline mode support and sync status

**Key Features**:
- Real-time camera QR scanning
- Complete farm-to-table story display
- Farmer profiles and contact information
- Nutritional and sustainability information
- Offline scanning with sync capabilities
- Audio narration for accessibility

### 3. Farmer Registration Dashboard (`/farmer-registration-dashboard`)
**Purpose**: Farmer onboarding, batch creation, and farm management
**Target Users**: Farmers joining the platform

**Components**:
- `WelcomeVideoSection.jsx` - Onboarding introduction with success stories
- `RegistrationFlow.jsx` - Multi-step farmer registration process
- `FarmDashboard.jsx` - Main farmer dashboard with analytics
- `BatchCreationTools.jsx` - Create and manage produce batches
- `QRCodeGenerator.jsx` - Generate QR codes for produce batches
- `EducationalResources.jsx` - Learning materials for farmers

**Key Features**:
- 5-step registration process with validation
- Batch creation with blockchain recording
- QR code generation and printing tools
- Earnings tracking and analytics
- Educational content library
- Farm profile management

### 4. Supply Chain Command Center (`/supply-chain-command-center`)
**Purpose**: Logistics management and supply chain oversight
**Target Users**: Distributors, logistics managers, supply chain operators

**Components**:
- `ShipmentCard.jsx` - Individual shipment tracking cards
- `LogisticsMap.jsx` - Real-time shipment location mapping
- `QualityMonitor.jsx` - Temperature and quality monitoring
- `EventLogger.jsx` - Supply chain event logging system
- `AnalyticsDashboard.jsx` - Performance metrics and analytics
- `IntegrationHub.jsx` - Third-party system integrations

**Key Features**:
- Real-time shipment tracking
- Quality monitoring with alerts
- Event logging and timeline
- Integration with ERP/WMS systems
- Analytics and reporting
- Fraud prevention monitoring

### 5. Trust Verification Hub (`/trust-verification-hub`)
**Purpose**: Security information, blockchain explorer, and educational content
**Target Users**: All users seeking transparency and security information

**Components**:
- `BlockchainExplorer.jsx` - Live blockchain transaction viewer
- `SecuritySection.jsx` - Security features explanation
- `CertificationAuthorities.jsx` - Partner certification organizations
- `PlatformStatistics.jsx` - Platform metrics and analytics
- `EducationalContent.jsx` - Learning resources about blockchain/agriculture
- `FraudPreventionCenter.jsx` - Fraud reporting and prevention
- `InteractiveDemo.jsx` - Step-by-step platform demonstration
- `SecurityAudits.jsx` - Third-party security audit reports

**Key Features**:
- Live blockchain transaction explorer
- Security feature explanations
- Educational content library
- Fraud reporting system
- Interactive platform demo
- Security audit transparency

### 6. Community Marketplace (`/community-marketplace`)
**Purpose**: Community features, farmer discovery, and local connections
**Target Users**: Consumers looking to connect with local farmers

**Components**:
- `FarmerCard.jsx` - Farmer profile cards with contact options
- `SeasonalCalendar.jsx` - Seasonal produce availability guide
- `RecipeCard.jsx` - Recipe cards using seasonal ingredients
- `SustainabilityTracker.jsx` - Community environmental impact metrics
- `EventCard.jsx` - Local farming events and markets
- `MessageModal.jsx` - Direct farmer-consumer messaging

**Key Features**:
- Local farmer discovery and profiles
- Seasonal produce calendar
- Recipe suggestions with local ingredients
- Community events and farmers markets
- Direct messaging between farmers and consumers
- Sustainability impact tracking

## 🎨 Design System

### Color Palette
- **Primary**: Deep Forest Green (`#2D5A27`) - Trust, nature, growth
- **Secondary**: Warm Earth Brown (`#8B4513`) - Authenticity, soil, tradition
- **Accent**: Golden Harvest (`#F4A460`) - Prosperity, harvest, warmth
- **Conversion**: Harvest Orange (`#D2691E`) - Action, energy, conversion
- **Success**: Emerald Green (`#059669`) - Success, verification, organic
- **Warning**: Amber (`#D97706`) - Caution, alerts, attention
- **Error**: Red (`#DC2626`) - Errors, critical issues, danger

### Typography
- **Primary Font**: Inter (clean, modern, readable)
- **Accent Font**: Caveat (friendly, handwritten feel for farm stories)

### Component Architecture
- **Atomic Design**: Components are built following atomic design principles
- **Consistent Spacing**: 8px grid system for consistent layouts
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: WCAG 2.1 AA compliant with proper contrast ratios

## 🔧 Core Components

### UI Components (`src/components/ui/`)
- **Button.jsx**: Versatile button component with variants, sizes, and icon support
- **Input.jsx**: Form input component with validation and error states
- **Select.jsx**: Custom select dropdown with search and multi-select capabilities
- **Checkbox.jsx**: Checkbox component with labels and descriptions
- **Header.jsx**: Main navigation header with responsive mobile menu

### Utility Components
- **AppIcon.jsx**: Lucide React icon wrapper with fallback handling
- **AppImage.jsx**: Image component with error handling and fallback
- **ErrorBoundary.jsx**: React error boundary for graceful error handling
- **ScrollToTop.jsx**: Automatic scroll to top on route changes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run serve
```

### Environment Setup
The project uses Vite for development and building. Configuration is in `vite.config.mjs`.

## 🛠️ Development Guide

### Adding New Pages
1. Create a new directory in `src/pages/`
2. Create an `index.jsx` file as the main page component
3. Add any page-specific components in a `components/` subdirectory
4. Update `src/Routes.jsx` to include the new route

### Creating Components
1. Follow the existing component structure
2. Use the established design system colors and spacing
3. Include proper TypeScript-style prop validation
4. Add responsive design considerations
5. Include accessibility features (ARIA labels, keyboard navigation)

### Styling Guidelines
1. Use Tailwind CSS utility classes
2. Follow the established color palette
3. Maintain consistent spacing using the 8px grid
4. Ensure proper contrast ratios for accessibility
5. Use the custom CSS variables for brand colors

### State Management
- Local component state using React hooks
- No global state management currently implemented
- Consider adding Redux Toolkit for complex state needs

## 📊 Data Flow

### QR Code Scanning Flow
1. User opens QR Scanner Portal
2. Camera captures QR code
3. QR data is decoded and validated
4. Blockchain lookup retrieves product information
5. Complete farm-to-table story is displayed
6. Scan is saved to user's history

### Farmer Registration Flow
1. Farmer watches welcome video and success stories
2. Multi-step registration form (personal info, farm details, crops, certifications)
3. Document upload and verification
4. Account approval and dashboard access
5. Batch creation and QR code generation

### Supply Chain Tracking Flow
1. Products are registered with unique identifiers
2. Events are logged at each supply chain stage
3. Quality monitoring data is recorded
4. Real-time tracking updates are provided
5. Analytics and reporting are generated

## 🔐 Security Features

### Blockchain Integration
- Immutable record keeping
- Cryptographic verification
- Distributed ledger technology
- Smart contract automation

### Data Protection
- End-to-end encryption
- Secure API endpoints
- User authentication and authorization
- Privacy-compliant data handling

### Fraud Prevention
- Real-time anomaly detection
- Multi-factor authentication
- Automated fraud pattern recognition
- Community reporting system

## 🌱 Sustainability Features

### Environmental Impact Tracking
- Carbon footprint calculation
- Water usage monitoring
- Waste reduction metrics
- Biodiversity impact assessment

### Community Building
- Local farmer discovery
- Seasonal produce calendars
- Recipe sharing with local ingredients
- Community events and markets

## 📱 Mobile Responsiveness

The application is fully responsive with:
- Mobile-first design approach
- Touch-friendly interface elements
- Optimized camera scanning for mobile devices
- Progressive Web App (PWA) capabilities

## 🧪 Testing Strategy

### Component Testing
- React Testing Library for component tests
- Jest for unit testing
- Accessibility testing with axe-core

### Integration Testing
- End-to-end testing with Cypress
- API integration testing
- Blockchain interaction testing

## 🚀 Deployment

### Build Process
```bash
npm run build
```
Builds the app for production to the `build` folder.

### Environment Variables
Configure these environment variables for different environments:
- `VITE_API_URL` - Backend API URL
- `VITE_BLOCKCHAIN_NETWORK` - Blockchain network endpoint
- `VITE_SUPABASE_URL` - Supabase project URL (if using Supabase)
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

## 🤝 Contributing

### Code Style
- Use ESLint and Prettier for code formatting
- Follow React best practices
- Write meaningful commit messages
- Include tests for new features

### Pull Request Process
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request with clear description

## 📚 Additional Resources

### Documentation
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Lucide React Icons](https://lucide.dev/)

### Blockchain Resources
- [Blockchain Basics](https://www.blockchain.com/learning-portal)
- [Smart Contracts Guide](https://ethereum.org/en/smart-contracts/)
- [Agricultural Blockchain Use Cases](https://www.fao.org/3/ca7693en/ca7693en.pdf)

## 🐛 Troubleshooting

### Common Issues
1. **Import Resolution Errors**: Run `npm install` to ensure all dependencies are installed
2. **Build Failures**: Clear `node_modules` and reinstall dependencies
3. **Camera Access**: Ensure HTTPS is used for camera permissions
4. **Mobile Issues**: Test on actual devices, not just browser dev tools

### Performance Optimization
- Use React.memo for expensive components
- Implement lazy loading for large components
- Optimize images and assets
- Use code splitting for better load times

## 📞 Support

For technical support or questions:
- Check the troubleshooting section above
- Review component documentation in the code
- Open an issue in the project repository
- Contact the development team

---

**Built with ❤️ for transparent agriculture**

*Last updated: January 2025*